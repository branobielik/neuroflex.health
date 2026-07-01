(function () {
  const PASSWORD = "Forth3t3amonly!";
  const ACCESS_KEY = "neuroflex_internal_access_v1";

  function hasAccess() {
    return window.sessionStorage.getItem(ACCESS_KEY) === "granted";
  }

  function grantAccess() {
    window.sessionStorage.setItem(ACCESS_KEY, "granted");
  }

  function checkPassword(value) {
    if (value === PASSWORD) {
      grantAccess();
      return true;
    }
    return false;
  }

  function revealProtectedPage() {
    document.documentElement.classList.remove("nf-protect-pending");
    document.documentElement.classList.add("nf-protect-granted");
  }

  function renderProtectedPageGate() {
    if (hasAccess()) {
      revealProtectedPage();
      return;
    }

    document.addEventListener("DOMContentLoaded", function () {
      if (hasAccess()) {
        revealProtectedPage();
        return;
      }

      const main = document.createElement("main");
      main.className = "nf-access-screen";
      main.innerHTML = [
        '<section class="nf-access-card">',
        '<p class="neuro-kicker">Internal Working Document</p>',
        "<h1>Protected Research Document</h1>",
        "<p>This NeuroFlex internal working document is available only to collaborators with the access password.</p>",
        '<form class="nf-access-form">',
        '<input type="password" name="password" autocomplete="current-password" placeholder="Enter password" aria-label="Password" />',
        '<button class="btn" type="submit">Unlock</button>',
        "</form>",
        '<p class="nf-access-error" role="alert" hidden>Incorrect password.</p>',
        '<p class="nf-access-note">This is a lightweight access gate for a static website, not server-side authentication.</p>',
        "</section>",
      ].join("");

      const header = document.querySelector(".site-header");
      if (header && header.parentNode) {
        header.parentNode.insertBefore(main, header.nextSibling);
      } else {
        document.body.prepend(main);
      }

      const form = main.querySelector("form");
      const input = main.querySelector("input");
      const error = main.querySelector(".nf-access-error");
      input.focus();

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (checkPassword(input.value)) {
          main.remove();
          revealProtectedPage();
          return;
        }
        error.hidden = false;
        input.select();
      });
    });
  }

  window.NeuroFlexAccess = {
    hasAccess,
    checkPassword,
    grantAccess,
    revealProtectedPage,
  };

  if (document.documentElement.classList.contains("nf-protect-pending")) {
    renderProtectedPageGate();
  }
})();
