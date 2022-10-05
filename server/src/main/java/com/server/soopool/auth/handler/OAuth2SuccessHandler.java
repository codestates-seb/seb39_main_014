package com.server.soopool.auth.handler;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.auth.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.log.LogMessage;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
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
    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
        Long memberId = principal.getMemberId();
        String accessToken = jwtService.issueAccessToken(memberId);
        response.setHeader(ACCESS_TOKEN, accessToken);
        jwtService.issueRefreshToken(response,accessToken);
//        super.onAuthenticationSuccess(request, response, authentication);
        handle(request, response, authentication);
        clearAuthenticationAttributes(request);
    }

    @Override
    protected void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException {

        if (response.isCommitted()) {
            this.logger.debug(LogMessage.format("Did not redirect to %s since response already committed."));
            return;
        }

        this.redirectStrategy.sendRedirect(request, response, "http://soopool-deploy.s3-website.ap-northeast-2.amazonaws.com/");
    }

}

