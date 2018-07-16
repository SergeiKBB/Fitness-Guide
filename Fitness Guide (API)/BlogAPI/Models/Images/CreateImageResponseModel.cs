using System;
using System.Collections.Generic;

namespace BlogAPI.Models.Images
{
    public class CreateImageResponseModel
    {
        public Guid ImageId { get; set; }
        public string OriginalUrl { get; set; }
        public IDictionary<string, string> TransformedUrls { get; set; }
    }
}