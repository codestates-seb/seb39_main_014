package com.server.soopool.member.service;
import com.server.soopool.auth.exception.AppAuthExceptionCode;
import com.server.soopool.auth.exception.AppAuthenticationException;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public void signUpGeneral(Member member){
        verifyBeforeSignUpGeneral(member);
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.saveEncryptedPassword(encryptedPassword);
        memberRepository.save(member);
    }


    private void verifyBeforeSignUpGeneral(Member member){
        if(existsByUserId(member.getUserId()))
            throw new AppAuthenticationException(AppAuthExceptionCode.EXISTS_MEMBER);
    }

    public Member findByUserId(String userId){
        return memberRepository.findByUserId(userId)
                .orElseThrow(() -> new IllegalArgumentException("Member not exist. userId = " + userId));
    }

    public Member findById(Long id){
        return memberRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Member not exist. id = " + id));
    }

    public Member findByOAuth2Member(String provider, String providerId){
        return memberRepository.findByProviderAndProviderId(provider,providerId)
                .orElseThrow(() -> new IllegalArgumentException("Member not exist. provider = " + provider + " " + "providerId = " + providerId));
    }

    public boolean existsByUserId(String userId){
        return memberRepository.existsByUserId(userId);
    }

    public boolean existsById(Long Id) { return memberRepository.existsById(Id); }

    public void singUpOauth2IfNotExists(Member member){
        String provider = member.getProvider();
        String providerId = member.getProviderId();
        if(existOAuth2Member(provider,providerId))
            return;
        memberRepository.save(member);
    }

    public boolean existOAuth2Member(String provider, String providerId){
        return memberRepository.existsByProviderAndProviderId(provider,providerId);
    }

    public void setMemberNickname(Member member, String nickname) {
        member.setNickname(nickname);
        memberRepository.save(member);
    }

    public void deleteMember(Long memberId){
        memberRepository.deleteById(memberId);
    }
}
