window.ApiUtil = {
  signOut: function () {
    $.ajax({
      url: "session",
      type: "delete",
      success: function () {
        window.location = "/session/new";
      }
    })
  }
}
