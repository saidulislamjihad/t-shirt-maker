"use strict";
$(function () {
	var shirtsFilePath = $('.tshirt-file-path').val();
	var fileAlbumPath = $('.tshirt-album-path').val();
    function t(t) {
        t.target.set({ cornerSize: L }),
            i(t),
            $(".cvtoolbox", "#centerLayoutContainer").show(),
            t.target.isType("i-text") ? (f(t.target), $(".texttoolbox", "#rightLayoutContainer").show()) : $(".texttoolbox", "#rightLayoutContainer").hide();
    }
    function e(t) {
        $(".cvtoolbox", "#centerLayoutContainer").hide(), $(".cvtoolbox_info", "#centerLayoutContainer").hide(), $(".texttoolbox", "#rightLayoutContainer").hide();
    }
    function o(t) {
        i(t);
    }
    function i(t) {
        if (t.target.isType("image") && (t.target.getScaleX() > 1 || t.target.getScaleY() > 1)) g("<i class='fa fa-warning'></i> The scaled image is larger than the original image. The quality may decrease.");
        else if (t.target.isType("group")) {
            for (var e = t.target.getObjects(), o = t.target.getScaleX(), i = t.target.getScaleY(), n = !1, a = 0; a < e.length; a++)
                if (e[a].isType("image") && (e[a].getScaleX() * o > 1 || e[a].getScaleY() * i > 1)) {
                    g("<i class='fa fa-warning'></i> The scaled image is larger than the original image. The quality may decrease."), (n = !0);
                    break;
                }
            n || u("");
        } else u("");
    }
    function n(t) {
        var e = 10;
        (O[$(A.getElement()).attr("id")] = { width: A.getWidth() / A.getZoom() - t.target.getLeft() - e, scaleX: t.target.getScaleX() }),
            t.target.setSelectionEnd(t.target.getText().length),
            t.target.setSelectionStart(t.target.getText().length),
            A.renderAll(),
            f(t.target);
    }
    function a(t) {
        t.target.isType("i-text") && (f(t.target), 0 == t.target.getText().length && A.remove(t.target));
    }
    function r(t) {
        if ((t.target._initDimensions(), t.target.getText().length > 0)) {
            var e = $(A.getElement()).attr("id"),
                o = O[e].width / t.target.getWidth();
            (1 > o || O[e].scaleX > t.target.getScaleX()) &&
                (t.target.getScaleX() * o > O[e].scaleX && (o = O[e].scaleX / t.target.getScaleX()), t.target.setScaleX(t.target.getScaleX() * o), t.target.setScaleY(t.target.getScaleY() * o), t.target.setCoords(), A.renderAll());
        }
    }
    function l() {
        var t = $("input[name=form_shirt_type]:checked", "#leftLayoutContainer").val(),
            e = $("input[name=form_shirt_color]:checked", "#leftLayoutContainer").val(),
            o = $.grep(w[t].color, function (t) {
                return t.id == e;
            });
        o.length > 0 && $("#img_shirt").attr("src", shirtsFilePath + w[t].filename + "_" + o[0].filename + "_" + j + ".png");
    }
    function c() {
        $("#centerLayoutContainer").height($("#centerLayoutContainer div.shirt").width());
        var t = s();
        $("#div_canvas_front").css("margin-top", W * t),
            $("#div_canvas_back").css("margin-top", W * t),
            k.setWidth(S * t),
            k.setHeight(F * t),
            k.setZoom(d()),
            k.renderAll(),
            C.setWidth(S * t),
            C.setHeight(F * t),
            C.setZoom(d()),
            C.renderAll();
    }
    function s() {
        return $("#centerLayoutContainer div.shirt").width() / T;
    }
    function d() {
        return (S * s()) / X;
    }
    function u(t) {
        $(".cvtoolbox_info div span", "#centerLayoutContainer").text(t), $(".cvtoolbox_info", "#centerLayoutContainer").removeClass("warning_msg").show();
    }
    function g(t) {
        $(".cvtoolbox_info div span", "#centerLayoutContainer").html(t), $(".cvtoolbox_info", "#centerLayoutContainer").addClass("warning_msg").show();
    }
    function f(t) {
        var e = '<div class="btn-group" data-toggle="buttons">';
        (e +=
            "bold" == t.getFontWeight()
                ? '<label class="btn btn-default active" id="texttoolbox_bold"><input type="checkbox" autocomplete="off" istool="bold" checked><i class="fa fa-bold"></i></label>'
                : '<label class="btn btn-default" id="texttoolbox_bold"><input type="checkbox" autocomplete="off" istool="bold"><i class="fa fa-bold"></i></label>'),
            (e +=
                "italic" == t.getFontStyle()
                    ? '<label class="btn btn-default active" id="texttoolbox_italic"><input type="checkbox" autocomplete="off" istool="italic" checked><i class="fa fa-italic"></i></label>'
                    : '<label class="btn btn-default" id="texttoolbox_italic"><input type="checkbox" autocomplete="off" istool="italic"><i class="fa fa-italic"></i></label>'),
            (e +=
                t.getTextDecoration().indexOf("underline") >= 0
                    ? '<label class="btn btn-default active" id="texttoolbox_underline"><input type="checkbox" autocomplete="off" istool="underline" checked><i class="fa fa-underline"></i></label>'
                    : '<label class="btn btn-default" id="texttoolbox_underline"><input type="checkbox" autocomplete="off" istool="underline"><i class="fa fa-underline"></i></label>'),
            (e +=
                t.getTextDecoration().indexOf("line-through") >= 0
                    ? '<label class="btn btn-default active" id="texttoolbox_strikethrough"><input type="checkbox" autocomplete="off" istool="strikethrough" checked><i class="fa fa-strikethrough"></i></label>'
                    : '<label class="btn btn-default" id="texttoolbox_strikethrough"><input type="checkbox" autocomplete="off" istool="strikethrough"><i class="fa fa-strikethrough"></i></label>'),
            (e += t.isEditing
                ? '<label class="btn btn-default active" id="texttoolbox_edit"><input type="checkbox" autocomplete="off" istool="edit" checked><i class="fa fa-pencil-square-o fa-lg"></i></label>'
                : '<label class="btn btn-default" id="texttoolbox_edit"><input type="checkbox" autocomplete="off" istool="edit"><i class="fa fa-pencil-square-o fa-lg"></i></label>'),
            (e += "</div>"),
            (e += '<div class="input-group colorpicker-component" id="texttoolbox_color">'),
            (e += 'Text color&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="btn btn-default add-on"><i></i></span>'),
            (e += "</div>"),
            (e += '<div class="input-group">'),
            (e +=
                'Font&nbsp;<select id="texttoolbox_font" style="width: calc(100% - 40px);"><option value="Times New Roman">Times New Roman</option><option value="Pacifico">Pacifico</option><option value="VT323">VT323</option><option value="Quicksand">Quicksand</option><option value="Inconsolata">Inconsolata</option></select>'),
            (e += "</div>"),
            $(".texttoolbox", "#rightLayoutContainer").html(e),
            $("#texttoolbox_color").colorpicker({ format: "hex", color: t.getFill() }).on("changeColor", h),
            $("#texttoolbox_font").val(t.get("fontFamily")),
            $("#texttoolbox_font").on("change", function (t) {
                var e = A.getActiveObject();
                e && e.isType("i-text") && ("Times New Roman" !== this.value ? b(this.value, e) : (e.set("fontFamily", this.value), A.renderAll()));
            });
    }
    function b(t, e) {
        var o = new FontFaceObserver(t);
        o.load().then(function () {
            e.set("fontFamily", t), A.renderAll();
        });
    }
    function h(t) {
        var e = A.getActiveObject();
        e && e.isType("i-text") && (e.setFill(t.color.toHex()), A.renderAll());
    }
    function v() {
        var t = A.getActiveObject();
        t && t.isType("i-text") && ($("#texttoolbox_bold input").prop("checked") ? t.setFontWeight("bold") : t.setFontWeight("normal"), A.renderAll());
    }
    function p() {
        var t = A.getActiveObject();
        t && t.isType("i-text") && ($("#texttoolbox_italic input").prop("checked") ? t.setFontStyle("italic") : t.setFontStyle("normal"), A.renderAll());
    }
    function x() {
        var t = A.getActiveObject();
        if (t && t.isType("i-text")) {
            var e = t.getTextDecoration().replace("underline", "");
            $("#texttoolbox_underline input").prop("checked") ? t.setTextDecoration(e + "underline") : t.setTextDecoration(e), A.renderAll();
        }
    }
    function m() {
        var t = A.getActiveObject();
        if (t && t.isType("i-text")) {
            var e = t.getTextDecoration().replace("line-through", "");
            $("#texttoolbox_strikethrough input").prop("checked") ? t.setTextDecoration(e + "line-through") : t.setTextDecoration(e), A.renderAll();
        }
    }
    function _() {
        var t = A.getActiveObject();
        t && t.isType("i-text") && ($("#texttoolbox_edit input").prop("checked") ? t.enterEditing() : t.exitEditing(), A.renderAll());
    }
    function y(t) {
        $("#albumModal").modal("hide"),
            fabric.Image.fromURL(t, function (t) {
                A.add(t), t.getWidth() * d() > A.getWidth() / 2 && t.scaleToWidth(A.getWidth() / 2), t.viewportCenter().setCoords(), A.setActiveObject(t), A.renderAll();
            });
    }
    var A,
        k,
        C,
        w = {
            1: {
                filename: "men1",
                color: [
                    { id: "1", filename: "blue", color: "0268b0" },
                    { id: "2", filename: "white", color: "ffffff" },
                ],
            },
            2: {
                filename: "women",
                color: [
                    { id: "3", filename: "black", color: "000000" },
                    { id: "4", filename: "white", color: "ffffff" },
                ],
            },
        },
        T = 570,
        L = 20,
        j = "front",
        O = {},
        S = 260,
        F = 350,
        W = 155,
        X = 1e3,
        D = 250;
    (k = new fabric.Canvas("mainCanvas_front", { preserveObjectStacking: !0 })),
        (C = new fabric.Canvas("mainCanvas_back", { preserveObjectStacking: !0 })),
        (A = k),
        c(),
        fabric.Image.fromURL(`${fileAlbumPath}/image1.png`, function (t) {
            A.add(t), t.scaleToWidth(0.8 * A.getWidth()), t.viewportCenter().setCoords(), A.renderAll();
        });
    var G = new fabric.IText("Hello", { fill: "#ff0000", stroke: "#000", fontSize: X });
    A.add(G),
        G.scaleToWidth(A.getWidth() / 2),
        G.viewportCenterH().setCoords(),
        A.renderAll(),
        k.on("object:selected", t),
        C.on("object:selected", t),
        k.on("selection:cleared", e),
        C.on("selection:cleared", e),
        k.on("object:modified", o),
        C.on("object:modified", o),
        k.on("text:editing:entered", n),
        C.on("text:editing:entered", n),
        k.on("text:editing:exited", a),
        C.on("text:editing:exited", a),
        k.on("text:changed", r),
        C.on("text:changed", r),
        $(window).on("resize", function () {
            c();
        }),
        $("#toolbox_left").on("click", function () {
            u("Move left");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (t.setLeft(t.getLeft() - 1 / d()).setCoords(), A.renderAll()), !1;
        }),
        $("#toolbox_right").on("click", function () {
            u("Move right");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (t.setLeft(t.getLeft() + 1 / d()).setCoords(), A.renderAll()), !1;
        }),
        $("#toolbox_up").on("click", function () {
            u("Move up");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (t.setTop(t.getTop() - 1 / d()).setCoords(), A.renderAll()), !1;
        }),
        $("#toolbox_down").on("click", function () {
            u("Move down");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (t.setTop(t.getTop() + 1 / d()).setCoords(), A.renderAll()), !1;
        }),
        $("#toolbox_center").on("click", function () {
            u("Center");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (t.viewportCenter().setCoords(), A.renderAll()), !1;
        }),
        $("#toolbox_centerh").on("click", function () {
            u("Center horizontally");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (t.viewportCenterH().setCoords(), A.renderAll()), !1;
        }),
        $("#toolbox_centerv").on("click", function () {
            u("Center vertically");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (t.viewportCenterV().setCoords(), A.renderAll()), !1;
        }),
        $("#toolbox_flipx").on("click", function () {
            u("Flip vertically");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (t.setFlipX(!t.getFlipX()), A.renderAll()), !1;
        }),
        $("#toolbox_flipy").on("click", function () {
            u("Flip horizontally");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (t.setFlipY(!t.getFlipY()), A.renderAll()), !1;
        }),
        $("#toolbox_totop").on("click", function () {
            u("Bring to front");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (A.bringToFront(t), A.renderAll()), !1;
        }),
        $("#toolbox_tobottom").on("click", function () {
            u("Send to back");
            var t = A.getActiveObject();
            return t || (t = A.getActiveGroup()), t && (A.sendToBack(t), A.renderAll()), !1;
        }),
        $("#toolbox_remove").on("click", function () {
            u("Remove");
            var t = A.getActiveObject(),
                e = A.getActiveGroup();
            if (e) {
                var o = e.getObjects();
                A.discardActiveGroup(),
                    o.forEach(function (t) {
                        A.remove(t);
                    });
            } else t && A.remove(t);
            return !1;
        }),
        $("input[name=form_shirt_type]", "#leftLayoutContainer").on("change", function () {
            for (var t = "", e = 0; e < w[this.value].color.length; e++)
                t +=
                    '<div class="btn colorButton ' +
                    (0 == e ? "active" : "") +
                    '" style="background-color: #' +
                    w[this.value].color[e].color +
                    ';"><input type="radio" name="form_shirt_color" value="' +
                    w[this.value].color[e].id +
                    '" autocomplete="off" ' +
                    (0 == e ? "checked" : "") +
                    " />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
            return (
                w[this.value].color.length < 2 ? ($("#div_colors_title").hide(), $("#div_colors").html(t).hide()) : ($("#div_colors_title").show(), $("#div_colors").html(t).show()),
                $("#img_shirt").attr("src", shirtsFilePath + w[this.value].filename + "_" + w[this.value].color[0].filename + "_" + j + ".png"),
                !1
            );
        }),
        $(document).on('keydown', function(e){
            if (e.keyCode === 46 || e.keyCode === 8) {
                $('#toolbox_remove')[0].click();
            }
        });
        $(".colorButton ").on("click", function (t) {
            var shirtFrontColorImg = $(this).attr('data-front-src');
            var shirtBackColorImg = $(this).attr('data-back-src');

            $('.shirt-main-img img').attr('src', shirtFrontColorImg);
            $('.shirt-side-change-btn.front').attr('data-src', shirtFrontColorImg)
            $('.shirt-side-change-btn.back').attr('data-src', shirtBackColorImg)
            console.log($(this));
        }),
        $("input[name=form_shirt_side]", "#centerLayoutContainer").on("change", function () {
            var shirtCurrentImg = $(this).closest('.shirt-side-change-btn').attr('data-src');
            $('.shirt-main-img img').attr('src', shirtCurrentImg);
        }),
        $("#albumModal").on("click", function (t) {
            var e = $(t.target);
            return e.is("img") && e.attr("bgsrc") ? (y(e.attr("bgsrc")), !1) : void 0;
        }),
        $("input[name=image_upload]", "#leftLayoutContainer").on("change", function () {
            if (this.value && this.files && this.files[0]) {
                var t = $("#frm_upload label i"),
                    e = $("#leftLayoutContainer .message");
                t.removeClass("fa-picture-o").addClass("fa-spinner fa-pulse"), e.text("");
                var o = new FileReader();
                (o.onload = function (o) {
                    $("input[name=image_upload]", "#leftLayoutContainer").val(""),
                        t.removeClass("fa-spinner fa-pulse").addClass("fa-picture-o"),
                        e.text(""),
                        fabric.Image.fromURL(o.target.result, function (t) {
                            A.add(t), t.getWidth() * d() > A.getWidth() / 2 && t.scaleToWidth(A.getWidth() / 2), t.viewportCenter().setCoords(), A.setActiveObject(t), A.renderAll();
                        });
                }),
                    o.readAsDataURL(this.files[0]);
            }
            return !1;
        }),
        $("#btn_addtext").on("click", function () {
            $("#leftLayoutContainer .message").text("");
            var t = new fabric.IText("Abc", { fill: "#000", stroke: "#000", fontSize: X });
            return A.add(t), t.scaleToWidth(A.getWidth() / 2), t.viewportCenter().setCoords(), A.setActiveObject(t), A.renderAll(), !1;
        }),
        $("#reviewModal").on("show.bs.modal", function () {
            A.deactivateAllWithDispatch(), A.renderAll();
            var t = $("#reviewModal .shirtdesign"),
                e = $("#reviewModal .shirt");
            t.find("img").attr("src", A.toDataURL({ format: "png", multiplier: Math.ceil(1e4 / ((d() * X) / D)) / 1e4 })),
                e.find("img").attr("src", $("#img_shirt").attr("src")),
                t.width(D),
                e.width((D * T) / S),
                $("#reviewModal .modal-body").height(e.width()),
                t.css("margin-top", (W * e.width()) / T);
        }),
        navigator.userAgent.match(/iPhone|iPad|iPod/i) &&
            $(".modal").on("show.bs.modal", function () {
                $(this).css({ position: "absolute", marginTop: $(window).scrollTop() + "px", bottom: "auto" });
            }),
        $.each(w, function (t, e) {
            for (t = 0; t < e.color.length; t++) (new Image().src = shirtsFilePath + e.filename + "_" + e.color[t].filename + "_front.png"), (new Image().src = shirtsFilePath + e.filename + "_" + e.color[t].filename + "_back.png");
        }),
        $(".texttoolbox", "#rightLayoutContainer").on("change", function (t) {
            var e = $(t.target);
            if (e.is("input") && e.attr("istool")) {
                switch (e.attr("istool")) {
                    case "bold":
                        v();
                        break;
                    case "italic":
                        p();
                        break;
                    case "underline":
                        x();
                        break;
                    case "strikethrough":
                        m();
                        break;
                    case "edit":
                        _();
                }
                return !1;
            }
        }),
        $("#btnDownload").on("click", function () {
            // domtoimage.toBlob(document.getElementById('shirtMainImg'))
            // .then(function(blob) {
            //   window.saveAs(blob, 'my-node.png');
            // });
            (this.href = A.toDataURL({ format: "png", multiplier: Math.ceil(1e4 / ((d() * X) / D)) / 1e4 })), (this.download = "download.png");
        });
});
