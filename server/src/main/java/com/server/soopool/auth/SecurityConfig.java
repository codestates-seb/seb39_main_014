package com.server.soopool.auth;

import com.server.soopool.auth.filter.JwtAuthenticationFilter;
import com.server.soopool.auth.filter.JwtExceptionHandlingFilter;
import com.server.soopool.auth.handler.AuthenticationExceptionEntryPoint;
import com.server.soopool.auth.handler.JwtAuthenticationFailureHandler;
import com.server.soopool.auth.filter.JwtAuthorizationFilter;
import com.server.soopool.auth.handler.JwtLogoutHandler;
import com.server.soopool.auth.service.JwtService;
import com.server.soopool.auth.service.PrincipalDetailsService;
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
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.http.HttpServletResponse;
import java.security.Principal;


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
                .disable();

        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .apply(new CustomJwtConfigurer())
                .and()
                .authorizeRequests().anyRequest().permitAll()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(authenticationExceptionEntryPoint);

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
}
