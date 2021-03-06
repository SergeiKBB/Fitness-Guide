﻿using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.CmsUsers;
using Blog.Server.Contracts.Responses.CmsUsers;

namespace Blog.Server.Repositories.Abstractions
{
    public interface ICmsUserRepository
    {
        Task<GetCmsUserRefreshTokenResponse> GetRefreshTokenById(GetCmsUserRefreshTokenByIdRequest request);
        Task<GetCmsUserIdResponse> GetIdByCredentials(GetCmsUserIdByCredentialsRequest request);
        Task UpdateRefreshToken(UpdateCmsUserRefreshTokenRequest request);
        Task<GetCmsUserIdResponse> GetIdByRefreshToken(GetCmsUserIdByRefreshTokenRequest request);
    }
}