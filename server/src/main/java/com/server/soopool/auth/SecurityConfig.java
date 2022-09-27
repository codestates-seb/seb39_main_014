package com.server.soopool.auth;

import com.server.soopool.auth.filter.JwtAuthenticationFilter;
import com.server.soopool.auth.filter.JwtExceptionHandlingFilter;
import com.server.soopool.auth.handler.*;
import com.server.soopool.auth.filter.JwtAuthorizationFilter;
import com.server.soopool.auth.service.JwtService;
import com.server.soopool.auth.service.OAuth2UserService;
import com.server.soopool.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.header.writers.StaticHeadersWriter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

@Configuration
@EnableWebSecurity(debug = true)
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtLogoutHandler logoutHandler;
    private final AuthenticationExceptionEntryPoint authenticationExceptionEntryPoint;
    private final JwtService jwtService;
    private final JwtAuthenticationFailureHandler jwtAuthenticationFailureHandler;
    private final MemberService memberService;
    private final OAuth2UserService oAuth2UserService;
    private final OAuth2SuccessHandler oAuth2SuccessHandler;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http.csrf()
                .disable();

        http.headers()
                .frameOptions()
                .disable();

        http.formLogin()
                .disable();

        http.httpBasic()
                .disable();

        http.cors()
                .configurationSource(corsConfigurationSource());

        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .apply(new CustomJwtConfigurer())
                .and()
                .authorizeRequests().anyRequest().permitAll()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(authenticationExceptionEntryPoint);

        http.oauth2Login()
                .userInfoEndpoint()// OAuth2 로그인 성공 후 가져올 설정들
                .userService(oAuth2UserService) // 서버에서 사용자 정보를 가져온 상태에서 추가로 진행하고자 하는 기능 명시
                .and()
                .successHandler(oAuth2SuccessHandler)
                .failureHandler(new OAuth2FailureHandler());

        http.logout()
            .permitAll()
            .logoutUrl("/api/v1/log-out")
            .addLogoutHandler(logoutHandler)
            .logoutSuccessHandler((request,response,authentication) -> {response.setStatus(HttpServletResponse.SC_OK);});

        return http.build();
    }

    public class CustomJwtConfigurer extends AbstractHttpConfigurer<CustomJwtConfigurer, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtService);

            jwtAuthenticationFilter.setFilterProcessesUrl("/api/v1/log-in");
            jwtAuthenticationFilter.setAuthenticationFailureHandler(jwtAuthenticationFailureHandler);

            JwtAuthorizationFilter jwtAuthorizationFilter = new JwtAuthorizationFilter(authenticationManager, memberService, jwtService);
            JwtExceptionHandlingFilter jwtExceptionHandlingFilter = new JwtExceptionHandlingFilter(authenticationManager);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilter(jwtAuthorizationFilter)
                    .addFilterBefore(jwtExceptionHandlingFilter, JwtExceptionHandlingFilter.class);
        }
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("authorization", "content-type", "x-auth-token"));
        configuration.setExposedHeaders(Arrays.asList("x-auth-token"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
