package com.server.soopool.auth.service;


import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.auth.exception.AppAuthExceptionCode;
import com.server.soopool.auth.exception.AppAuthenticationException;
import com.server.soopool.auth.userinfo.OAuth2UserInfo;
import com.server.soopool.auth.userinfo.UserInfoFactory;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OAuth2UserService extends DefaultOAuth2UserService {

    private final MemberService memberService;

    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String provider = userRequest.getClientRegistration().getRegistrationId();

        OAuth2UserInfo userInfo = UserInfoFactory.create(provider, oAuth2User.getAttributes())
                .orElseThrow(() -> new AppAuthenticationException(AppAuthExceptionCode.INVALID_OAUTH2_PROVIDER));

        String username = userInfo.getUsername();
        String email = userInfo.getEmail();
        String providerId = userInfo.getProviderId();
        String profileImagePath = userInfo.getProfileImagePath();

        Member member = Member.oauth2Builder()
                .name(username)
                .email(email)
                .provider(provider)
                .providerId(providerId)
                .profileImagePath(profileImagePath)
                .buildOAuth2Member();

        memberService.singUpOauth2IfNotExists(member);

        Member findMember = memberService.findByOAuth2Member(provider, providerId);
        return PrincipalDetails.oauth2(findMember, oAuth2User.getAttributes());

    }
}
