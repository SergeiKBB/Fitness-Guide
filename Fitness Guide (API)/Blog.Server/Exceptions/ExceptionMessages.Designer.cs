﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Blog.Server.Exceptions {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "15.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class ExceptionMessages {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal ExceptionMessages() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Blog.Server.Exceptions.ExceptionMessages", typeof(ExceptionMessages).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Your access token has been expired. Use refresh token to receive new.
        /// </summary>
        internal static string AccessTokenExpiredException {
            get {
                return ResourceManager.GetString("AccessTokenExpiredException", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Access token payload contains invalid lifetime.
        /// </summary>
        internal static string AccessTokenInvalidLifetimeException {
            get {
                return ResourceManager.GetString("AccessTokenInvalidLifetimeException", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Error while verification access token.
        /// </summary>
        internal static string AccessTokenVerificationException {
            get {
                return ResourceManager.GetString("AccessTokenVerificationException", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Entity of selected type not found.
        /// </summary>
        internal static string EntityNotFoundException {
            get {
                return ResourceManager.GetString("EntityNotFoundException", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to This request must have &apos;AccessToken&apos; header.
        /// </summary>
        internal static string MissedAccessTokenException {
            get {
                return ResourceManager.GetString("MissedAccessTokenException", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Object is not valid.
        /// </summary>
        internal static string ValidationException {
            get {
                return ResourceManager.GetString("ValidationException", resourceCulture);
            }
        }
    }
}
