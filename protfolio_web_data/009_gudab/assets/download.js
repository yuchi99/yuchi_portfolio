$(function () {
    $("form#downloadForm").validate({
        errorClass: 'validate-error',
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        }
    });
});

//資料集
var versionArray = [
    { "system": "linux", "version": "V3.6.b5", "value": "3" },
    { "system": "windows", "version": "V3.6.b5", "value": "2" },
    { "system": "linux", "version": "V3.4.b5", "value": "1" },
    { "system": "windows", "version": "V3.4.b5", "value": "0" }
];

$(function () {
    $("#systemSelector").change(function () {
        updateVersion($(this).val());
    });

    updateVersion($("#systemSelector").val());
});


function updateVersion(system) {

    //清除version 資訊
    $("#versionSelector").empty();


    //決定語系
    var lang = $("#versionSelector").attr("lang");
    var optionword = "";
    switch (lang) {
        case "Tw":
            optionword = "請選擇...";
            break;
        case "Cn":
            optionword = "请选择...";
            break;
        case "En":
            optionword = "Select...";
            break;
    }
    

    if (system == "") { $("#versionSelector").append("<option value=''>" + optionword + "</option>"); }

    for (var i = 0; i < versionArray.length; i++) {

        var obj = versionArray[i];

        if (obj.system != system) { continue; }

        $("#versionSelector").append("<option value='" + obj.value + "'>" + obj.version + "</option>");
    }
}


$(document).on("click", ".Submit", function (event) {
    event.preventDefault();
    if ($(this).hasClass("loading")) return;

    if (!$("#downloadForm").valid()) {
        return;
    }

    if (grecaptcha.getResponse(recaptcha1).length === 0) {
        $("#RecaptchaField1").after('<label class="validate-error" style="display:inline-block;">Please check "I am not a robot"</label>');
        return;
    } else {
        $("#RecaptchaField1 ~ label.validate-error").remove();
    }

    if ($("#systemSelector").val() == "") {
        $("#error-message").append('<label class="validate-error" style="display:inline - block;">please select a system</label>');

        return;
    } else {
        $("#error-message").empty();
    }

    // loading
    $("#Submit").addClass("loading");

    //打開modal
    $('#modalButton').trigger('click');

    var name = $("#name").val();
    var email = $("#email").val();
    var dtype = $("#versionSelector").val();

    //alert(dtype);

    $.ajax({
        type: "POST",
        url: "/Api/RequireActivationKey.ashx",
        data: JSON.stringify({ from: 'ENG', name: name, email: email, dtype: dtype }),
        contentType: "application/json; charset=utf-8",
        cache: false,
        dataType: "json",
        success: function (response) {
            //showMessageForDownload(response && response.Message ? response.Message : undefined, !response.isSuccess);

            // loaded
            $("#Submit").removeClass("loading");
        },
        failure: function (response) {
            //showMessageForDownload(response && response.Message ? response.Message : undefined, true);
            // loaded
            $("#Submit").removeClass("loading");
        }
    });
});
