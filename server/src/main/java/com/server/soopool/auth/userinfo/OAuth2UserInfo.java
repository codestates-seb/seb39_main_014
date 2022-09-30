package com.server.soopool.auth.userinfo;

public interface OAuth2UserInfo {
    String getUsername();
    String getEmail();
    String getProvider();
    String getProviderId();
    String getProfileImagePath();
}
