using System;

namespace DynamicData.App
{
    public class AzureAdB2COptions
    {
        public const string PolicyAuthenticationProperty = "Policy";

        public AzureAdB2COptions()
        {
            AzureAdB2CInstance = "https://login.microsoftonline.com/tfp";
        }

        public String ClientId
        {
            get; set;
        }

        public String AzureAdB2CInstance
        {
            get; set;
        }

        public String Tenant
        {
            get; set;
        }

        public String SignUpSignInPolicyId
        {
            get; set;
        }

        public String SignInPolicyId
        {
            get; set;
        }

        public String SignUpPolicyId
        {
            get; set;
        }

        public String ResetPasswordPolicyId
        {
            get; set;
        }

        public String EditProfilePolicyId
        {
            get; set;
        }

        public String RedirectUri
        {
            get; set;
        }

        public String DefaultPolicy => SignUpSignInPolicyId;

        public String Authority => $"{AzureAdB2CInstance}/{Tenant}/{DefaultPolicy}/v2.0";

        public String ClientSecret
        {
            get; set;
        }

        public String ApiUrl
        {
            get; set;
        }

        public String ApiScopes
        {
            get; set;
        }
    }
}
