package com.server.soopool.auth.filter;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.auth.dto.LoginRequestDto;
import com.server.soopool.auth.exception.AppAuthExceptionCode;
import com.server.soopool.auth.exception.AppAuthenticationException;
import com.server.soopool.auth.service.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.server.soopool.auth.util.AppAuthNames.ACCESS_TOKEN;
import static com.server.soopool.auth.util.AppAuthNames.REFRESH_TOKEN;

@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        LoginRequestDto loginRequest = requestBodyToLoginRequest(request);

        String userId = loginRequest.getUserId();
        String password = loginRequest.getPassword();

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(userId,password);
        return authenticationManager.authenticate(token);
    }

    private LoginRequestDto requestBodyToLoginRequest(HttpServletRequest request){
        try{
            return objectMapper.readValue(request.getInputStream(), LoginRequestDto.class);
        } catch (IOException e){
            throw new AppAuthenticationException(AppAuthExceptionCode.DATA_DESERIALIZE_ERROR);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,Authentication authResult) throws IOException, ServletException {
        PrincipalDetails principal = (PrincipalDetails) authResult.getPrincipal();
        Long id = principal.getMemberId();
        String accessToken = jwtService.issueAccessToken(id);

        response.setHeader(ACCESS_TOKEN, accessToken);

        System.out.println(accessToken);

        jwtService.issueRefreshToken(response,accessToken);

        objectMapper.writeValue(response.getWriter(), "Authentication Success!");
    }
}
