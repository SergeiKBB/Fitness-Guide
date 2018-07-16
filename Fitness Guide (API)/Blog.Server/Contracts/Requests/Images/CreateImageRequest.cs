using System;
using System.Collections.Generic;

namespace Blog.Server.Contracts.Requests.Images
{
    public class CreateImageRequest
    {
        public string OriginalUrl { get; set; }
        public IDictionary<string, string> TransformedUrls { get; set; }
    }
}