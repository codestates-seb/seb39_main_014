package com.server.soopool.auth.handler;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.auth.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.server.soopool.auth.util.AppAuthNames.*;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtService jwtService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
        Long memberId = principal.getMemberId();
        String accessToken = jwtService.issueAccessToken(memberId);
        response.setHeader(ACCESS_TOKEN, accessToken);
        jwtService.issueRefreshToken(response,accessToken);
        super.onAuthenticationSuccess(request, response, authentication);
    }
}
