using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace DynamicData.App.Controllers
{
    [Route(Routes.Session, Name = Routes.Session)]
    public class SessionController : Controller
    {
        public SessionController(IOptions<AzureAdB2COptions> b2cOptions)
        {
            AzureAdB2COptions = b2cOptions.Value;
        }

        public AzureAdB2COptions AzureAdB2COptions
        {
            get; set;
        }

        [HttpGet]
        [Route(nameof(SignIn))]
        public IActionResult SignIn()
        {
            var redirectUrl = Url.RouteUrl(Routes.App);

            return Challenge(
                new AuthenticationProperties
                {
                    RedirectUri = redirectUrl
                },
                OpenIdConnectDefaults.AuthenticationScheme);
        }

        [HttpGet]
        [Route(nameof(ResetPassword))]
        public IActionResult ResetPassword()
        {
            var redirectUrl = Url.RouteUrl(Routes.App);

            var properties = new AuthenticationProperties { RedirectUri = redirectUrl };

            properties.Items[AzureAdB2COptions.PolicyAuthenticationProperty] = AzureAdB2COptions.ResetPasswordPolicyId;

            return Challenge(properties, OpenIdConnectDefaults.AuthenticationScheme);
        }

        [HttpGet]
        [Route(nameof(EditProfile))]
        public IActionResult EditProfile()
        {
            var redirectUrl = Url.RouteUrl(Routes.App);

            var properties = new AuthenticationProperties { RedirectUri = redirectUrl };

            properties.Items[AzureAdB2COptions.PolicyAuthenticationProperty] = AzureAdB2COptions.EditProfilePolicyId;

            return Challenge(properties, OpenIdConnectDefaults.AuthenticationScheme);
        }

        [HttpGet]
        [Route(nameof(SignOut))]
        public IActionResult SignOut()
        {
            var callbackUrl = Url.RouteUrl(nameof(SignedOut), values: null, protocol: Request.Scheme);

            return SignOut(
                new AuthenticationProperties
                {
                    RedirectUri = callbackUrl
                },
                CookieAuthenticationDefaults.AuthenticationScheme,
                OpenIdConnectDefaults.AuthenticationScheme);
        }

        [HttpGet]
        [Route(nameof(SignedOut))]
        public IActionResult SignedOut()
        {
            if (User.Identity.IsAuthenticated)
            {
                // Redirect to home page if the user is authenticated.
                return RedirectToRoute(nameof(Routes.App));
            }

            return View();
        }
    }
}