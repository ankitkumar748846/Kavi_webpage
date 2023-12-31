! function() {
    function e(e) {
        try {
            return e()
        } catch (t) {
            window.console && window.console.log && window.console.log.apply && window.console.log("Freshdesk Error: ", t)
        }
    }

    function t(e) {
        return e && !L.test(e) ? B.location.protocol + "//" + e : e
    }

    function i(e) {
        var t = B.createElement("link");
        t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e), "undefined" != typeof t && B.getElementsByTagName("head")[0].appendChild(t)
    }

    function o(e) {
        var t = B.createElement("script");
        t.setAttribute("type", "text/javascript"), t.setAttribute("src", e), "undefined" != typeof t && B.getElementsByTagName("head")[0].appendChild(t)
    }

    function n(e, t, i) {
        e && e.addEventListener ? e.addEventListener(t, i, !1) : e && e.attachEvent && e.attachEvent("on" + t, i)
    }

    function r(e) {
        var i;
        for (i in e) C.hasOwnProperty(i) && ("url" === i || "assetUrl" === i ? C[i] = t(e[i]) : C[i] = e[i])
    }

    function a(e) {
        var t = e.src,
            i = window.navigator && window.navigator.appVersion.split("MSIE"),
            o = parseFloat(i[1]);
        return o >= 5.5 && 7 > o && B.body.filters && (e.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + t + "', sizingMethod='crop')"), e
    }

    function d() {
        null == $widget_attr.button && "popup" == C.widgetType && (class_name = I[C.alignment] || "left", $widget_attr.button = B.createElement("div"), $widget_attr.button.setAttribute("id", "freshwidget-button"), $widget_attr.button.setAttribute("data-html2canvas-ignore", "true"), $widget_attr.button.style.display = "none", $widget_attr.button.className = "freshwidget-button fd-btn-" + class_name, W.Version() <= 10 && ($widget_attr.button.className += " ie" + W.Version()), link = B.createElement("a"), link.setAttribute("href", "javascript:void(0)"), text = null, proxyLink = B.createElement("a"), proxyLink.setAttribute("href", "javascript:void(0)"), null == C.backgroundImage || "" == C.backgroundImage || "text" == C.buttonType ? (link.className = "freshwidget-theme", link.style.color = C.buttonColor, link.style.backgroundColor = C.buttonBg, link.style.borderColor = C.buttonColor, proxyLink.className = "proxy-link", text = B.createTextNode(C.buttonText)) : (link.className = "freshwidget-customimage", text = B.createElement("img"), text.src = C.backgroundImage, text.alt = C.buttonText, text = a(text)), "top" == class_name || "bottom" == class_name ? $widget_attr.button.style.left = C.offset : $widget_attr.button.style.top = C.offset, B.body.insertBefore($widget_attr.button, B.body.childNodes[0]), $widget_attr.button.appendChild(link), link.appendChild(text), (null == C.backgroundImage || "" == C.backgroundImage) && W.Version() <= 10 && ($widget_attr.button.appendChild(proxyLink), n(proxyLink, "click", function() {
            window.FreshWidget.show()
        }), proxyLink.style.height = link.offsetHeight + "px", proxyLink.style.width = link.offsetWidth + "px"), n(link, "click", function() {
            window.FreshWidget.show()
        }))
    }

    function s() {
        null != $widget_attr.button && (B.body.removeChild($widget_attr.button), $widget_attr.button = null)
    }

    function l() {
        null != $widget_attr.container && (B.body.removeChild($widget_attr.container), $widget_attr.container = null)
    }

    function g() {
        null == $widget_attr.container && ($widget_attr.container = B.createElement("div"), $widget_attr.container.className = "freshwidget-container", $widget_attr.container.id = "FreshWidget", "" == C.responsive && ($widget_attr.container.className += " responsive"), $widget_attr.container.setAttribute("data-html2canvas-ignore", "true"), $widget_attr.container.style.display = "none", B.body.insertBefore($widget_attr.container, B.body.childNodes[0]), $widget_attr.container.innerHTML = '<div class="widget-ovelay" id="freshwidget-overlay">&nbsp;</div></i></div><div class="freshwidget-dialog" id="freshwidget-dialog"><div id="minimize-div" title="minimize"><i class="fa fa-chevron-down" aria-hidden="true"></i></div><div id="freshwidget-close" class="widget-close" title="close"></div><div class="mobile-widget-close" id="mobile-widget-close"></div><div class="mobile-widget-arrow" id="mobile-widget-arrow"></div> <div class="frame-container">   <iframe title="Feedback Form" id="freshwidget-frame" src="about:blank" frameborder="0" scrolling="auto" allowTransparency="true" style="height: ' + C.formHeight + '"/> </div></div>', $widget_attr.container = B.getElementById("FreshWidget"), $widget_attr.closeButton = B.getElementById("freshwidget-close"), $widget_attr.closeButton = a($widget_attr.closeButton), $widget_attr.mobileCloseButton = B.getElementById("mobile-widget-close"), $widget_attr.mobileArrowButton = B.getElementById("mobile-widget-arrow"), $widget_attr.dialog = B.getElementById("freshwidget-dialog"), $widget_attr.iframe = B.getElementById("freshwidget-frame"), $widget_attr.overlay = B.getElementById("freshwidget-overlay"), $widget_attr.dialog.appendChild($widget_attr.iframe), c(), n($widget_attr.closeButton, "click", function() {
            window.FreshWidget.close(), $("hidesearch")
        }), n($widget_attr.mobileArrowButton, "click", function() {
            v("arrowclose")
        }), n($widget_attr.mobileCloseButton, "click", function() {
            window.FreshWidget.close()
        }), n($widget_attr.overlay, "click", function() {
            window.FreshWidget.close()
        }), n($widget_attr.iframe, "load", function() {
            $widget_attr.iframeLoaded || -1 == $widget_attr.iframe.src.indexOf("/widgets/feedback_widget/new?") || ($widget_attr.iframeLoaded = !0)
        }), p())
    }

    function c() {
        $widget_attr.iframe.src = C.url + "/loading.html?ver=" + x
    }

    function w() {
        $widget_attr.iframe.src = C.url + "/widgets/feedback_widget/new?" + C.queryString
    }

    function f() {
        scroll(0, 0), $widget_attr.container.style.display = "block", C.responsive || (E = B.body.style.overflow, B.body.style.overflow = "hidden"), $widget_attr.iframeLoaded || w()
    }

    function u() {
        $widget_attr.container.style.display = "none", B.getElementById("freshwidget-dialog").classList.remove("freshwidget-dialog-box"), B.getElementById("freshwidget-frame").classList.remove("iframeResize"), C.responsive || (B.body.style.overflow = E || "auto"), w()
    }

    function m(e) {
        switch (r(e), W.Version() > 8 && "undefined" == typeof html2canvas && "" == C.screenshot && o(C.assetUrl + "/html2canvas.js?ver=" + x), C.loadOnEvent) {
            case "windowLoad":
                n(window, "load", h);
                break;
            case "documentReady":
                n(B, "ready", h);
                break;
            case "immediate":
                h()
        }
        i(C.assetUrl + "" + x)
    }

    function h() {
        d(), g()
    }

    function b(e) {
        r(e), s(), l(), $widget_attr.iframeLoaded = !1, d(), g()
    }

    function y() {
        s(), l(), delete window.FreshWidget
    }

    function p() {
        n(window, "message", function(e) {
            var t = e.data;
            "screenshot" == t && k(e), ("showsearch" === t || "hidesearch" === t) && $(t), "get_parent_size" === t && _(), "arrow" === t && v(t)
        })
    }

    function v(e) {
        var t = B,
            i = t.getElementById("mobile-widget-close"),
            o = t.getElementById("mobile-widget-arrow"),
            n = t.getElementById("freshwidget-frame");
        i.offsetLeft > 0 && "arrow" === e ? (i.classList.add("mobile-widget-close-none"), o.classList.add("mobile-widget-arrow-block")) : (i.offsetLeft <= 0 || "arrowclose" === e) && (i.classList.remove("mobile-widget-close-none"), o.classList.remove("mobile-widget-arrow-block"), "arrowclose" === e && n.contentWindow.postMessage("closewidget", "*"))
    }

    function _() {
        var e, t = B,
            i = t.getElementById("freshwidget-frame");
        t.getElementById("FreshWidget") && (e = t.getElementById("FreshWidget").offsetWidth), i && e && (768 > e && (t.getElementById("freshwidget-dialog").classList.remove("freshwidget-dialog-box"), t.getElementById("freshwidget-frame").classList.remove("iframeResize")), i.contentWindow.postMessage("offsetWidth:" + e, "*"))
    }

    function $(e) {
        var t = B;
        "showsearch" == e ? (t.getElementById("freshwidget-dialog").classList.add("freshwidget-dialog-box"), t.getElementById("freshwidget-frame").classList.add("iframeResize")) : "hidesearch" === e && (t.getElementById("freshwidget-dialog").classList.add("freshwidget-dialog-box-close"), t.getElementById("freshwidget-frame").classList.add("iframeClose"), t.getElementById("freshwidget-dialog").classList.remove("freshwidget-dialog-box"), t.getElementById("freshwidget-frame").classList.remove("iframeResize"), window.setTimeout(function() {
            t.getElementById("freshwidget-dialog").classList.remove("freshwidget-dialog-box-close"), t.getElementById("freshwidget-frame").classList.remove("iframeClose")
        }, 800))
    }

    function k(e) {
        W.Version() > 8 && "" == C.screenshot && (html2canvas([B.body], {
            proxy: !1,
            onrendered: function(e) {
                var t = e.toDataURL(),
                    i = {
                        type: "screenshot",
                        img: t
                    };
                B.getElementById("freshwidget-frame").contentWindow.postMessage(i, "*")
            }
        }), e.stopImmediatePropagation())
    }
    var E, B = window.document,
        I = {
            1: "top",
            2: "right",
            3: "bottom",
            4: "left",
            top: "top",
            right: "right",
            bottom: "bottom",
            left: "left"
        },
        L = /^[a-zA-Z]+:\/\//,
        x = 2,
        C = {
            widgetId: 0,
            buttonText: "Support",
            buttonBg: "#7eb600",
            buttonColor: "white",
            backgroundImage: null,
            alignment: "left",
            offset: "35%",
            url: "http://support.freshdesk.com",
            assetUrl: "https://s3.amazonaws.com/assets.freshdesk.com/widget",
            queryString: "",
            screenshot: "",
            formHeight: "500px",
            responsive: "",
            widgetType: "popup",
            buttonType: "text",
            captcha: "",
            loadOnEvent: "windowLoad"
        };
    $widget_attr = {
        button: null,
        dialog: null,
        container: null,
        overlay: null,
        iframe: null,
        iframeLoaded: !1,
        closeButton: null,
        mobileCloseButton: null
    };
    var W = {
        Version: function() {
            var e = 999;
            return -1 != navigator.appVersion.indexOf("MSIE") && (e = parseFloat(navigator.appVersion.split("MSIE")[1])), e
        }
    };
    n(window, "resize", _);
    var F = {
        init: function(t, i) {
            e(function() {
                return m(i)
            })
        },
        create: function() {
            e(function() {
                return h()
            })
        },
        show: function() {
            e(function() {
                return f()
            })
        },
        close: function() {
            e(function() {
                return u()
            })
        },
        iframe: function() {
            return $widget_attr.iframe
        },
        update: function(t) {
            e(function() {
                return b(t)
            })
        },
        destroy: function() {
            e(function() {
                return y()
            })
        }
    };
    window.FreshWidget || (window.FreshWidget = F)
}();