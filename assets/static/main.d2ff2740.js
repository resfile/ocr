import * as vendor0fedc5e9Js from "./vendor.0fedc5e9.js";

function b() {
    return new Worker("./assets/AntOcrWorker.e2e345c3.js", {
        type: "module"
    })
}
var w = "./assets/static/a.64500a42.tf";
let C = {
    zh: ["./assets/static/a.4c40a852.tf", "./assets/static/b.a95fc6c5.tf", "./assets/static/c.60812ef9.tf"],
    en: [w, "./assets/static/b.e2a9f8f3.tf", "data:null;base64,e+bz+QwtASU4bVcAEAZNTNbLyDUfOxYDWWs1LTBze+nziAxeAVQ4GldxEHVNPda0yEQfSBZyWRw1XDAAe5jzhwxPAUc4C1dmEGRNLtalyFsfWRZhWQ01SzARe4vzlgxAAXY4OFdXEFNNH9aWyGofZhZQWT41ejAme7rzpQxxAXk4KVdEEEJNCNaHyHkfdxZPWS81aTA3e63ztAxiAWg4eFcXEBNNX9bWyCofJhYQWX41OjBme/rz5QwxATk4eQ=="],
    "zh-tw": [w, "./assets/static/b.3917713a.tf", "./assets/static/c.80a52cea.tf"]
};
var y = {
        langList: ["zh", "en", "zh-tw"],
        calcProgress: function () {
            let e = y.totalSize[0] + y.totalSize[1] + y.totalSize[2],
                t = y.loadedSize[0] + y.loadedSize[1] + y.loadedSize[2];
            y.onprogress && y.onprogress(t, e)
        },
        downLang: function (e) {
            y.urls = C[e], y.xhrarr = [new XMLHttpRequest, new XMLHttpRequest, new XMLHttpRequest], y.totalSize = [2304374, 4362980, 13250], y.loadedSize = [0, 0, 0], y.buffarr = [void 0, void 0, void 0];
            for (let t = 0; t < y.xhrarr.length; t++) {
                let e = y.xhrarr[t];
                e.open("GET", y.urls[t]), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.responseType = "arraybuffer", e.xhrarrID = t, e.onprogress = function (e) {
                    e.lengthComputable && (y.totalSize[this.xhrarrID] = e.total, y.loadedSize[this.xhrarrID] = e.loaded, y.calcProgress())
                }, e.onload = function (e) {
                    4 === this.readyState && 200 === this.status && (y.buffarr[this.xhrarrID] = this.response, y.buffarr[0] && y.buffarr[1] && y.buffarr[2] && (y.onfinish && y.onfinish(y.buffarr), y.buffarr = void 0))
                }, e.send(null)
            }
        }
    },
    k = document.createElement("canvas"),
    T = k.getContext("2d");
var L = function () {
        var e = {
            isBusy: !1,
            txtCount: 0
        };
        return e.langList = y.langList, e.ocrImage = function (t) {
            var i, a;
            i = t.width, a = t.height, k.width = i, k.height = a, T.drawImage(t, 0, 0);
            var o = T.getImageData(0, 0, t.width, t.height);
            let n = new ArrayBuffer(o.data.length);
            var l = new Uint8Array(n);
            for (let e = 0; e < l.length; e++) l[e] = o.data[e];
            e.worker.postMessage(["rec", t.width, t.height, n], [n])
        }, e.ocrImageUrl = function (t, i) {
            var a = new Image;
            e.isBusy ? e.onError && e.onError("antocr is busy") : (e.isBusy = !0, a.userData = i, a.onload = function () {
                e.onImageLoad && e.onImageLoad(this, this.userData), e.ocrImage(this)
            }, a.src = t)
        }, e.onmessage = function (t) {
            if ("Init" == t.data) return e.onRuntimeInitialized && e.onRuntimeInitialized(), void(e.init = !0);
            if ("recFinish" == t.data[0]) {
                var i = JSON.parse(t.data[3]);
                i.imgWidth = t.data[1], i.imgHeight = t.data[2], i.langCode = e.langCode, e.isBusy = !1, e.onRecognitionCompleted && e.onRecognitionCompleted(i)
            }
        }, e.init = function () {
            e.worker = new b, e.worker.onmessage = e.onmessage
        }, e.setLang = function (t) {
            e.onSetLangBegin && e.onSetLangBegin(t), y.downLang(t), y.onprogress = e.onprogress, y.onfinish = function (i) {
                e.worker.postMessage(["setParams", i[0], i[1], i[2]], [i[0], i[1], i[2]]), e.langCode = t, e.onSetLangFinish && e.onSetLangFinish()
            }
        }, e
    }(),
    I = {
        callBackDict: {},
        keyValDict: {},
        addevent: (e, t) => {
            I.callBackDict[e] || (I.callBackDict[e] = []), I.callBackDict[e].push(t), null != I.keyValDict[e] && t(I.keyValDict[e])
        },
        set: (e, t) => {
            if (I.keyValDict[e] = t, I.callBackDict[e])
                for (const i of I.callBackDict[e]) i(t)
        },
        trig: e => {
            I.set(e, !I.keyValDict[e])
        },
        get: e => I.keyValDict[e]
    };
const D = {
        props: ["tips", "iconClass", "selected", "confirmTips", "visible"],
        emits: ["click"],
        methods: {
            onclick() {
                null != this.confirmTips ? this.$confirm(this.confirmTips, this.$t("common.optConfirm"), {
                    confirmButtonText: this.$t("common.confirm"),
                    cancelButtonText: this.$t("common.cancel"),
                    type: "warning"
                }).then((() => {
                    this.$emit("click")
                })) : this.$emit("click")
            }
        }
    },
    S = vendor0fedc5e9Js.b("data-v-522ea391"),
    $ = S(((l, s, r, c, d, g) => {
        const h = vendor0fedc5e9Js.r("el-tooltip");
        return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(h, {
            class: [{
                "icon-button_selected": r.selected,
                "icon-button_unselected": !r.selected
            }, "tipsitem icon-button"],
            effect: "dark",
            content: r.tips,
            "show-after": 500,
            placement: "bottom"
        }, {
            default: S((() => [vendor0fedc5e9Js.w(vendor0fedc5e9Js.a("i", {
                class: r.iconClass,
                onClick: s[1] || (s[1] = e => g.onclick())
            }, null, 2), [
                [vendor0fedc5e9Js.v, null == r.visible || r.visible]
            ])])),
            _: 1
        }, 8, ["class", "content"])
    }));
D.render = $, D.__scopeId = "data-v-522ea391";
var P = {
        _data: {},
        _changeCallBack: {}
    },
    B = {
        errWordHandle: "Normal",
        highlightErrWordThres: .6,
        recThres: .6,
        unclipRadio: 1.6,
        keepLowScore: !1,
        textBackground: "#faebd7",
        textColor: "#000000",
        textBgTransparent: !1,
        recLangCode: "zh"
    };

function R(e, t, i) {
    "object" == typeof e ? e[t] = i : "function" == typeof e && e(i)
}
P.reset = () => {
    P.setFromDict(B), P.save()
}, P.save = () => {
    let e = JSON.stringify(P._data);
    localStorage.setItem("PearOcrConfig", e)
}, P.load = () => {
    let e = localStorage.getItem("PearOcrConfig");
    if (e) {
        P._data = JSON.parse(e);
        for (const e in B) null == P._data[e] && P.set(e, B[e])
    } else P.reset()
}, P.get = e => P._data[e], P.set = (e, t) => {
    if (P._changeCallBack[e] && P._data[e] != t)
        for (const i of P._changeCallBack[e]) R(i, e, t);
    P._data[e] = t
}, P.setFromDict = e => {
    for (const t in e) P.set(t, e[t])
}, P.getToDict = e => {
    for (const t in e) {
        let i = P.get(t);
        null != i && (e[t] = i)
    }
}, P.addMonitor = (e, t) => {
    if ("object" != typeof e) null == P._changeCallBack[e] && (P._changeCallBack[e] = []), P._changeCallBack[e].push(t), P._data[e] && R(t, e, P._data[e]);
    else
        for (const i of e) P.addMonitor(i, t)
}, P.load();
const E = {
        data: () => ({
            errWordHandleOption: [{
                value: "Normal",
                label: "视作正常字符"
            }, {
                value: "Highlight",
                label: "高亮字符"
            }, {
                value: "Ignore",
                label: "跳过字符"
            }, {
                value: "IgnoreAndNormal",
                label: "忽略两端其余正常"
            }, {
                value: "IgnoreAndHighlight",
                label: "忽略两端其余高亮"
            }],
            configure: {
                errWordHandle: "Normal",
                highlightErrWordThres: .6,
                recThres: .6,
                unclipRadio: 1.6,
                keepLowScore: !1,
                textBackground: "#faebd7",
                textBgTransparent: !1,
                textColor: "#000000"
            }
        }),
        created() {
            P.getToDict(this.configure)
        },
        props: ["dialogVisible"],
        emits: ["update:dialogVisible"],
        methods: {
            handleClose(e) {
                e && e()
            },
            savaConfigure() {
                P.setFromDict(this.configure), P.save()
            },
            resetConfigure() {
                P.reset(), P.getToDict(this.configure)
            }
        },
        watch: {
            dialogVisible(e) {
                e && P.getToDict(this.configure)
            }
        }
    },
    V = vendor0fedc5e9Js.b("data-v-7b7daaba");
vendor0fedc5e9Js.p("data-v-7b7daaba");
const z = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    },
    H = {
        class: "dialog-footer"
    };
vendor0fedc5e9Js.d();
const F = V(((a, o, l, s, r, p) => {
    const u = vendor0fedc5e9Js.r("el-option"),
        f = vendor0fedc5e9Js.r("el-select"),
        _ = vendor0fedc5e9Js.r("el-input-number"),
        x = vendor0fedc5e9Js.r("el-form-item"),
        v = vendor0fedc5e9Js.r("el-switch"),
        b = vendor0fedc5e9Js.r("el-color-picker"),
        w = vendor0fedc5e9Js.r("el-form"),
        C = vendor0fedc5e9Js.r("el-button"),
        y = vendor0fedc5e9Js.r("el-dialog");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(y, {
        title: a.$t("configure.title"),
        "model-value": l.dialogVisible,
        "onUpdate:modelValue": o[11] || (o[11] = e => {
            l.dialogVisible = e, a.$emit("update:dialogVisible", l.dialogVisible)
        }),
        "before-close": p.handleClose,
        "destroy-on-close": !0
    }, {
        footer: V((() => [vendor0fedc5e9Js.a("span", H, [vendor0fedc5e9Js.a(C, {
            type: "warning",
            onClick: p.resetConfigure,
            size: "small"
        }, {
            default: V((() => [vendor0fedc5e9Js.e(vendor0fedc5e9Js.t(a.$t("configure.restore_default")), 1)])),
            _: 1
        }, 8, ["onClick"]), vendor0fedc5e9Js.a(C, {
            onClick: o[9] || (o[9] = e => {
                l.dialogVisible = !1, p.handleClose()
            }),
            size: "small"
        }, {
            default: V((() => [vendor0fedc5e9Js.e(vendor0fedc5e9Js.t(a.$t("configure.cancel")), 1)])),
            _: 1
        }), vendor0fedc5e9Js.a(C, {
            type: "primary",
            onClick: o[10] || (o[10] = e => {
                p.savaConfigure(), l.dialogVisible = !1
            }),
            size: "small"
        }, {
            default: V((() => [vendor0fedc5e9Js.e(vendor0fedc5e9Js.t(a.$t("configure.save")), 1)])),
            _: 1
        })])])),
        default: V((() => [vendor0fedc5e9Js.a(w, {
            ref: "Configure",
            model: r.configure,
            "label-width": "auto"
        }, {
            default: V((() => [vendor0fedc5e9Js.a(x, {
                label: a.$t("configure.highlight_suspected_error")
            }, {
                default: V((() => [vendor0fedc5e9Js.a(f, {
                    modelValue: r.configure.errWordHandle,
                    "onUpdate:modelValue": o[1] || (o[1] = e => r.configure.errWordHandle = e),
                    size: "mini",
                    placeholder: "请选择"
                }, {
                    default: V((() => [(vendor0fedc5e9Js.o(!0), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, vendor0fedc5e9Js.f(r.errWordHandleOption, (e => (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(u, {
                        key: e.value,
                        label: e.label,
                        value: e.value
                    }, null, 8, ["label", "value"])))), 128))])),
                    _: 1
                }, 8, ["modelValue"]), vendor0fedc5e9Js.a("label", null, vendor0fedc5e9Js.t(a.$t("configure.judgment_threshold")), 1), vendor0fedc5e9Js.a(_, {
                    modelValue: r.configure.highlightErrWordThres,
                    "onUpdate:modelValue": o[2] || (o[2] = e => r.configure.highlightErrWordThres = e),
                    size: "mini",
                    precision: 2,
                    step: .1,
                    min: 0,
                    max: 1
                }, null, 8, ["modelValue", "step"])])),
                _: 1
            }, 8, ["label"]), vendor0fedc5e9Js.a(x, {
                label: a.$t("configure.confidence_threshold")
            }, {
                default: V((() => [vendor0fedc5e9Js.a(_, {
                    modelValue: r.configure.recThres,
                    "onUpdate:modelValue": o[3] || (o[3] = e => r.configure.recThres = e),
                    size: "mini",
                    precision: 2,
                    step: .1,
                    min: 0,
                    max: 1
                }, null, 8, ["modelValue", "step"]), vendor0fedc5e9Js.a("label", null, vendor0fedc5e9Js.t(a.$t("configure.keep_highlight")), 1), vendor0fedc5e9Js.a(v, {
                    modelValue: r.configure.keepLowScore,
                    "onUpdate:modelValue": o[4] || (o[4] = e => r.configure.keepLowScore = e)
                }, null, 8, ["modelValue"])])),
                _: 1
            }, 8, ["label"]), vendor0fedc5e9Js.a(x, {
                label: a.$t("configure.text_background_color")
            }, {
                default: V((() => [vendor0fedc5e9Js.a("div", z, [vendor0fedc5e9Js.a(b, {
                    modelValue: r.configure.textBackground,
                    "onUpdate:modelValue": o[5] || (o[5] = e => r.configure.textBackground = e)
                }, null, 8, ["modelValue"]), vendor0fedc5e9Js.a("label", null, vendor0fedc5e9Js.t(a.$t("configure.no_background")), 1), vendor0fedc5e9Js.a(v, {
                    modelValue: r.configure.textBgTransparent,
                    "onUpdate:modelValue": o[6] || (o[6] = e => r.configure.textBgTransparent = e)
                }, null, 8, ["modelValue"]), vendor0fedc5e9Js.a("label", null, vendor0fedc5e9Js.t(a.$t("configure.text_color")), 1), vendor0fedc5e9Js.a(b, {
                    modelValue: r.configure.textColor,
                    "onUpdate:modelValue": o[7] || (o[7] = e => r.configure.textColor = e)
                }, null, 8, ["modelValue"])])])),
                _: 1
            }, 8, ["label"]), vendor0fedc5e9Js.g("", !0)])),
            _: 1
        }, 8, ["model"])])),
        _: 1
    }, 8, ["title", "model-value", "before-close"])
}));
E.render = F, E.__scopeId = "data-v-7b7daaba";
let A;
const W = {
        components: {
            IconButton: D,
            Configure: E
        },
        data: () => ({
            configureVisible: !1,
            recLangCode: "",
            langList: L.langList
        }),
        emits: ["onDeleteAllImage", "ReRecAllImage"],
        props: ["scannedCount", "imageListLength"],
        created() {
            A = this, P.addMonitor(["recLangCode"], A)
        },
        methods: {
            onLangueChange(e) {
                L.setLang(e)
            },
            AllSaveToPdf() {
                I.set("OpenExportPDFDialog", this.$parent.imageList)
            }
        }
    },
    O = vendor0fedc5e9Js.b("data-v-d695e80a");
vendor0fedc5e9Js.p("data-v-d695e80a");
const M = {
        class: "ctrlbar"
    },
    U = {
        class: "leftArea"
    },
    N = {
        class: "el-dropdown-link"
    },
    j = vendor0fedc5e9Js.a("i", {
        class: "el-icon-arrow-down el-icon--right"
    }, null, -1),
    G = {
        class: "rightArea"
    },
    Q = {
        key: 3
    };
vendor0fedc5e9Js.d();
const X = O(((a, o, l, s, r, p) => {
    const u = vendor0fedc5e9Js.r("el-dropdown-item"),
        f = vendor0fedc5e9Js.r("el-dropdown-menu"),
        _ = vendor0fedc5e9Js.r("el-dropdown"),
        x = vendor0fedc5e9Js.r("IconButton"),
        v = vendor0fedc5e9Js.r("Configure");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, [vendor0fedc5e9Js.a("div", M, [vendor0fedc5e9Js.a("div", U, [vendor0fedc5e9Js.a("span", null, vendor0fedc5e9Js.t(a.$t("imagelist.recognition_language")) + ": ", 1), vendor0fedc5e9Js.a(_, {
        trigger: "click",
        onCommand: p.onLangueChange
    }, {
        dropdown: O((() => [vendor0fedc5e9Js.a(f, null, {
            default: O((() => [(vendor0fedc5e9Js.o(!0), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, vendor0fedc5e9Js.f(r.langList, (e => (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(u, {
                key: e,
                command: e
            }, {
                default: O((() => [vendor0fedc5e9Js.e(vendor0fedc5e9Js.t(a.$t("langname." + e)), 1)])),
                _: 2
            }, 1032, ["command"])))), 128))])),
            _: 1
        })])),
        default: O((() => [vendor0fedc5e9Js.a("span", N, [vendor0fedc5e9Js.e(vendor0fedc5e9Js.t(a.$t("langname." + r.recLangCode)), 1), j])])),
        _: 1
    }, 8, ["onCommand"])]), vendor0fedc5e9Js.a("div", G, [l.scannedCount ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(x, {
        key: 0,
        tips: a.$t("imagelist.export_all_as_pdf"),
        iconClass: "iconfont icon-pdf",
        onClick: p.AllSaveToPdf
    }, null, 8, ["tips", "onClick"])) : vendor0fedc5e9Js.g("", !0), l.scannedCount ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(x, {
        key: 1,
        tips: a.$t("imagelist.refresh_all_image"),
        iconClass: "el-icon-refresh-left",
        confirmTips: a.$t("imagelist.tips_rerec_confirm"),
        onClick: o[1] || (o[1] = e => a.$emit("ReRecAllImage"))
    }, null, 8, ["tips", "confirmTips"])) : vendor0fedc5e9Js.g("", !0), l.scannedCount ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(x, {
        key: 2,
        tips: a.$t("imagelist.delete_all_image"),
        iconClass: "el-icon-delete",
        confirmTips: a.$t("imagelist.tips_delete_confirm"),
        onClick: o[2] || (o[2] = e => a.$emit("onDeleteAllImage"))
    }, null, 8, ["tips", "confirmTips"])) : vendor0fedc5e9Js.g("", !0), vendor0fedc5e9Js.a(x, {
        tips: a.$t("imagelist.configure"),
        iconClass: "el-icon-setting",
        onClick: o[3] || (o[3] = e => r.configureVisible = !0)
    }, null, 8, ["tips"]), l.imageListLength ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("span", Q, vendor0fedc5e9Js.t(a.$t("imagelist.recognition_progress")) + ":" + vendor0fedc5e9Js.t(l.scannedCount) + "/" + vendor0fedc5e9Js.t(l.imageListLength), 1)) : vendor0fedc5e9Js.g("", !0)])]), vendor0fedc5e9Js.a(v, {
        dialogVisible: r.configureVisible,
        "onUpdate:dialogVisible": o[4] || (o[4] = e => r.configureVisible = e)
    }, null, 8, ["dialogVisible"])], 64)
}));
W.render = X, W.__scopeId = "data-v-d695e80a";
var q = null,
    Z = 0;
const J = {
        components: {
            ImageListCtrlBar: W
        },
        data: () => ({
            onRecognitionError: null,
            imageList: new Array,
            selectedId: -1,
            scannedCount: 0
        }),
        created: function () {
            q = this
        },
        emits: ["onRuntimeInitialized", "currentItemChange", "clearRecognitionImage"],
        mounted() {
            window.addEventListener("paste", (async function (e) {
                e.preventDefault(), e.stopPropagation(), q.fromClipboard(e)
            })), I.addevent("ReRecCurRequest", (function () {
                if (-1 != q.selectedId) {
                    let e = q.findIndexById(q.selectedId);
                    if (q.imageList[e].isScaning) return void q.idleCheck();
                    q.Re_recognitionImage(q.selectedId)
                }
            }))
        },
        methods: {
            uploadClick() {
                this.$refs.inputFile.dispatchEvent(new MouseEvent("click"))
            },
            idleCheck: (e = !1) => !L.isBusy || (e || vendor0fedc5e9Js._({
                showClose: !0,
                message: q.$t("imagelist.tips_rec_conflict"),
                type: "error"
            }), !1),
            findIndexById(e) {
                for (let t = 0; t < this.imageList.length; t++)
                    if (e == this.imageList[t].id) return t;
                return -1
            },
            Re_recognitionImage(e) {
                if (null == e) {
                    if (!q.idleCheck()) return;
                    q.scannedCount = 0;
                    for (const e of q.imageList) e.text = void 0;
                    e = q.imageList[q.imageList.length - 1].id
                }
                let t = q.findIndexById(e);
                null != q.imageList[t].text && q.scannedCount--, q.imageList[t].text = void 0, q.idleCheck(!0) && q.recognitionImage(e)
            },
            recognitionImage(e) {
                let t;
                if (e) t = q.findIndexById(e);
                else if (e = q.selectedId, t = q.findIndexById(e), null != q.imageList[t].text) {
                    for (t = q.imageList.length - 1; t >= 0; t--)
                        if (null == q.imageList[t].text) {
                            e = q.imageList[t].id;
                            break
                        } if (t < 0) return
                }
                null == q.imageList[t].text && (L.onRecognitionCompleted = i => {
                    if (t = q.findIndexById(e), !(t < 0)) {
                        var a = "";
                        for (let e = 0; e < i.length; e++) a = a + i[e].text + "\n";
                        q.imageList[t].isScaning = !1, q.scannedCount++, q.imageList[t].text = a, q.imageList[t].detail = i, q.recognitionImage()
                    }
                }, L.onImageLoad = (e, i) => {
                    t = q.findIndexById(i), q.imageList[t].imgWidth = e.width, q.imageList[t].imgHeight = e.height
                }, q.imageList[t].isScaning = !0, L.ocrImageUrl(q.imageList[t].url, e))
            },
            addImageToList(e, t) {
                var i = {};
                i.url = e, i.selected = !1, i.id = Z, i.filename = t, Z += 1, q.imageList.unshift(i), q.idleCheck(!0) && q.imageClick(i.id), q.$nextTick(q.$refs.imgListScrollbar.update)
            },
            addImgPreview(e) {
                e || (e = this.$refs.inputFile.files);
                for (const t of e) {
                    if (!t) return void console.log("error"); {
                        if ("image" != t.type.substring(0, 5)) return void vendor0fedc5e9Js._({
                            showClose: !0,
                            message: q.$t("imagelist.tips_read_fail"),
                            type: "error"
                        });
                        const e = new FileReader;
                        e.readAsDataURL(t), e.filename = t.name, e.onload = function (t) {
                            q.addImageToList(this.result, e.filename)
                        }
                    }
                }
            },
            imageClick(e) {
                if (this.selectedId == e) return;
                this.selectedId = e;
                let t = this.findIndexById(e);
                L.isBusy || null != this.imageList[t].text || this.recognitionImage(e), this.$emit("currentItemChange", this.imageList[t])
            },
            deleteClick(e) {
                let t = this.findIndexById(e);
                this.imageList[t].isScaning || (null != this.imageList[t].isScaning && q.scannedCount--, this.imageList.splice(t, 1), 0 == t && (this.$refs.inputFile.value = ""), t >= this.imageList.length && (t -= 1), t >= 0 ? q.imageClick(this.imageList[t].id) : q.$emit("clearRecognitionImage"))
            },
            DeleteAllImage() {
                if (0 == this.imageList.length) return;
                let e = [];
                for (; this.imageList.length > 0;) {
                    let t = this.imageList.splice(0, 1);
                    t[0].isScaning && e.push(t[0])
                }
                console.log("scaningItem", e), e.length ? (this.imageList = e, q.imageClick(this.imageList[0].id)) : (q.$emit("clearRecognitionImage"), this.selectedId = -1), this.scannedCount = 0, this.$message({
                    type: "success",
                    message: e.length ? q.$t("imagelist.tips_delete_conflict") : q.$t("imagelist.tips_delete_success")
                })
            },
            fromClipboard(e) {
                if (null == e) - 1 == navigator.userAgent.indexOf("Firefox") ? navigator.clipboard.read().then((e => {
                    console.log("Pasted content: ", e);
                    var t = !1;
                    for (let a = 0; a < e.length; a++)
                        for (var i of e[a].types) - 1 !== i.indexOf("image") && (t = !0, e[a].getType(i).then((e => {
                            var t = URL.createObjectURL(e);
                            q.addImageToList(t)
                        })));
                    t || vendor0fedc5e9Js._({
                        showClose: !0,
                        message: q.$t("imagelist.tips_clipboard_no_image"),
                        type: "warning"
                    })
                })).catch((e => {
                    vendor0fedc5e9Js._({
                        showClose: !0,
                        message: q.$t("imagelist.tips_clipboard_faild"),
                        type: "error"
                    })
                })) : vendor0fedc5e9Js._({
                    showClose: !0,
                    message: q.$t("imagelist.tips_clipboard_firefox_only_hotkey"),
                    type: "warning"
                });
                else {
                    e.preventDefault(), e.stopPropagation();
                    for (const t of e.clipboardData.items) {
                        if (0 != t.type.indexOf("image")) return;
                        let e = t.getAsFile(),
                            i = URL.createObjectURL(e);
                        q.addImageToList(i)
                    }
                }
            }
        }
    },
    Y = vendor0fedc5e9Js.b("data-v-0b15c0dd");
vendor0fedc5e9Js.p("data-v-0b15c0dd");
const K = {
        class: "rowCard"
    },
    ee = {
        class: "buttonArea"
    },
    te = vendor0fedc5e9Js.a("i", {
        class: "iconfont icon-located"
    }, null, -1),
    ie = vendor0fedc5e9Js.a("i", {
        class: "iconfont icon-clipboard"
    }, null, -1),
    ae = {
        class: "flex-content"
    },
    oe = {
        class: "delete"
    };
vendor0fedc5e9Js.d();
const ne = Y(((l, s, r, m, p, u) => {
    const f = vendor0fedc5e9Js.r("ImageListCtrlBar"),
        _ = vendor0fedc5e9Js.r("el-col"),
        x = vendor0fedc5e9Js.r("el-image"),
        v = vendor0fedc5e9Js.r("el-scrollbar"),
        b = vendor0fedc5e9Js.r("el-row");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", K, [vendor0fedc5e9Js.a(f, {
        scannedCount: p.scannedCount,
        imageListLength: p.imageList.length,
        onOnDeleteAllImage: s[1] || (s[1] = e => u.DeleteAllImage()),
        onReRecAllImage: s[2] || (s[2] = e => u.Re_recognitionImage())
    }, null, 8, ["scannedCount", "imageListLength"]), vendor0fedc5e9Js.a(b, {
        type: "flex"
    }, {
        default: Y((() => [vendor0fedc5e9Js.a(_, {
            class: "col_ctrlarea"
        }, {
            default: Y((() => [vendor0fedc5e9Js.a("div", ee, [vendor0fedc5e9Js.a("div", null, [vendor0fedc5e9Js.a("input", {
                ref: "inputFile",
                type: "file",
                style: {
                    display: "none"
                },
                onChange: s[3] || (s[3] = e => u.addImgPreview()),
                accept: "image/*",
                multiple: ""
            }, null, 544)]), vendor0fedc5e9Js.a("div", {
                class: "ao_button",
                ref: "btn_locate_image",
                onClick: s[4] || (s[4] = e => u.uploadClick())
            }, [te, vendor0fedc5e9Js.e(" " + vendor0fedc5e9Js.t(l.$t("imagelist.btn_locate_image")), 1)], 512), vendor0fedc5e9Js.a("div", {
                class: "ao_button",
                ref: "btn_read_clipboard",
                onClick: s[5] || (s[5] = e => u.fromClipboard())
            }, [ie, vendor0fedc5e9Js.e(" " + vendor0fedc5e9Js.t(l.$t("imagelist.btn_read_clipboard")), 1)], 512)])])),
            _: 1
        }), vendor0fedc5e9Js.a(_, {
            class: "col_imagelist"
        }, {
            default: Y((() => [vendor0fedc5e9Js.a(v, {
                ref: "imgListScrollbar"
            }, {
                default: Y((() => [vendor0fedc5e9Js.a("div", ae, [(vendor0fedc5e9Js.o(!0), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, vendor0fedc5e9Js.f(p.imageList, (e => (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", {
                    key: e.id
                }, [vendor0fedc5e9Js.a("div", oe, [vendor0fedc5e9Js.a(x, {
                    class: ["item", {
                        item_prepare: null != e.text && p.selectedId != e.id,
                        item_unselected: null == e.text && p.selectedId != e.id,
                        item_selected: p.selectedId == e.id,
                        scanBox: e.isScaning
                    }],
                    src: e.url,
                    onClick: t => u.imageClick(e.id),
                    fit: "contain"
                }, null, 8, ["src", "class", "onClick"]), vendor0fedc5e9Js.w(vendor0fedc5e9Js.a("i", {
                    onClick: t => u.deleteClick(e.id),
                    class: "el-icon-delete delete-button"
                }, null, 8, ["onClick"]), [
                    [vendor0fedc5e9Js.v, !e.isScaning]
                ])])])))), 128))])])),
                _: 1
            }, 512)])),
            _: 1
        })])),
        _: 1
    })])
}));
let le;
J.render = ne, J.__scopeId = "data-v-0b15c0dd";
const se = {},
    re = function (e, t) {
        if (!t || 0 === t.length) return e();
        if (void 0 === le) {
            const e = document.createElement("link").relList;
            le = e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload"
        }
        return Promise.all(t.map((e => {
            if (e in se) return;
            se[e] = !0;
            const t = e.endsWith(".css"),
                i = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${i}`)) return;
            const a = document.createElement("link");
            return a.rel = t ? "stylesheet" : le, t || (a.as = "script", a.crossOrigin = ""), a.href = e, document.head.appendChild(a), t ? new Promise(((e, t) => {
                a.addEventListener("load", e), a.addEventListener("error", t)
            })) : void 0
        }))).then((() => e()))
    };
let ce;

function de(e, t) {
    return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y))
}
const ge = {
        data: () => ({
            dCSS: "",
            ctWidth: 0,
            ctHeight: 0,
            dCSS_image: "",
            errWordHandle: "Normal",
            recThres: .6,
            keepLowScore: !1,
            highlightErrWordThres: .6,
            textBackground: "#faebd7",
            textColor: "#000000",
            textBgTransparent: !1
        }),
        props: ["recoItem", "fullScreen", "imageBG", "contenteditable"],
        emits: ["onExitFullScreen"],
        methods: {
            getRotateBoxColorStyle() {
                let e = "";
                return this.textBgTransparent || (e += "background-color:" + this.textBackground + ";"), e += "color:" + this.textColor + ";", e
            },
            textChange(e, t) {
                e.target.innerText != t.text ? t.textEdited = e.target.innerText : t.textEdited = "", this.$forceUpdate()
            },
            getDisplayText(e) {
                if (e.textEdited) return e.textEdited;
                if ("Normal" == this.errWordHandle) return e.text;
                let t, i = "",
                    a = !1,
                    o = -1,
                    n = this.errWordHandle.indexOf("Highlight") >= 0 ? "<font color=red>" : "",
                    l = this.errWordHandle.indexOf("Highlight") >= 0 ? "</font>" : "";
                for (let s = 0; s < e.wordScore.length; s++) {
                    let r = e.wordScore[s];
                    r < ce.highlightErrWordThres ? (a || (i += n), a = !0) : (a && (i += l), o < 0 && (o = i.length), t = i.length + 1, a = !1), (r >= ce.highlightErrWordThres || "Ignore" != this.errWordHandle) && (i += e.text[s])
                }
                return a && (i += l), this.errWordHandle.indexOf("Ignore") >= 0 ? o < 0 ? "" : i.slice(o, t) : i
            },
            updata(e) {
                if (this.$refs.PosTextBox) {
                    if (this.fullScreen) this.ctHeight = window.innerHeight, this.ctWidth = window.innerWidth;
                    else {
                        var t = this.$refs.PosTextBox.parentNode;
                        this.ctHeight = t.offsetHeight, this.ctWidth = t.offsetWidth
                    }
                    var i = window.devicePixelRatio,
                        a = 1 / i,
                        o = e.detail.imgWidth,
                        n = e.detail.imgHeight;
                    this.dCSS = "width: " + o.toString() + "px;height: " + n.toString() + "px;";
                    var l = this.ctWidth * a / o,
                        s = this.ctHeight * a / n,
                        r = Math.min(l, s) * i,
                        c = -n * (1 - (r = Math.min(1, r))) / 2,
                        d = -o * (1 - r) / 2;
                    c += (this.ctHeight - n * r) / 2, d += (this.ctWidth - o * r) / 2, this.dCSS += "transform: scale(" + r.toString() + ");", this.dCSS += "top: " + c.toString() + "px;", this.fullScreen ? (this.dCSS += "z-index: 21;position: fixed;", this.dCSS_image = this.dCSS) : this.dCSS_image = "", this.dCSS += "left: " + d.toString() + "px;",
                        function (e) {
                            for (let l = 0; l < e.detail.length; l++) {
                                var t = e.detail[l];
                                e.detail[l].textCss = "transform: matrix(" + t.trMat[0].toString() + ", " + t.trMat[1].toString() + ", " + t.trMat[2].toString() + ", " + t.trMat[3].toString() + ", " + t.trMat[4].toString() + ", " + t.trMat[5].toString() + ");";
                                var i = de(e.detail[l].rect[0], e.detail[l].rect[1]),
                                    a = de(e.detail[l].rect[1], e.detail[l].rect[2]),
                                    o = Math.min(i, a),
                                    n = Math.max(i, a);
                                e.detail[l].textCss += "width: " + n.toString() + "px;height: " + o.toString() + "px;", e.detail[l].textCss += "font-size: " + o.toString() + "px;"
                            }
                        }(e), this.$nextTick((() => {
                            ! function (e, t) {
                                for (var i, a = e.childNodes, o = a.length - 1; o >= 0; o--) {
                                    var n = a[o].childNodes[0];
                                    if (n && n.getAttribute && !n.getAttribute("isHandleTextSize")) {
                                        var l = n.childNodes[0];
                                        if (l) {
                                            var s = a[o].getBoundingClientRect(),
                                                r = l.getBoundingClientRect();
                                            if (s.width > r.width + 5) {
                                                var c = (i = l, "string" == typeof i.innerText ? i.innerText : i.textContent).length,
                                                    d = (s.width - r.width) / t / (c - 1);
                                                l.style.letterSpacing = d.toString() + "px"
                                            } else if (s.width < r.width) {
                                                var g = s.width / r.width;
                                                if (g > .98) continue;
                                                n.style.cssText = "transform: scale(" + g.toString() + ");"
                                            }
                                            n.setAttribute("isHandleTextSize", !0)
                                        }
                                    }
                                }
                            }(this.$refs.PosTextBox, r)
                        }))
                }
            }
        },
        created() {
            ce = this, P.addMonitor(["errWordHandle", "highlightErrWordThres", "recThres", "keepLowScore", "textBackground", "textColor", "textBgTransparent"], ce), window.onresize = () => {
                ce.updata(ce.recoItem)
            }
        },
        mounted: function () {
            this.updata(this.recoItem)
        },
        beforeUpdate() {
            this.updata(this.recoItem)
        },
        watch: {
            recoItem(e, t) {
                this.updata(e)
            }
        }
    },
    he = vendor0fedc5e9Js.b("data-v-78a912a2");
vendor0fedc5e9Js.p("data-v-78a912a2");
const me = {
        key: 0,
        class: "covered"
    },
    pe = {
        class: "PosTextBoxDiv"
    },
    ue = {
        class: "PosTextBoxDiv2"
    },
    fe = {
        class: "tramsformOriLT"
    };
vendor0fedc5e9Js.d();
const _e = he(((l, s, r, c, d, p) => {
    const u = vendor0fedc5e9Js.r("el-image");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, [r.fullScreen ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", me)) : vendor0fedc5e9Js.g("", !0), r.fullScreen ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("i", {
        key: 1,
        onClick: s[1] || (s[1] = e => l.$emit("onExitFullScreen")),
        class: "el-icon-close close-button"
    })) : vendor0fedc5e9Js.g("", !0), r.imageBG ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(u, {
        key: 2,
        class: "boxTextImageBG",
        style: d.dCSS_image,
        src: r.recoItem.url,
        fit: "scale-down"
    }, null, 8, ["style", "src"])) : vendor0fedc5e9Js.g("", !0), vendor0fedc5e9Js.a("div", pe, [vendor0fedc5e9Js.a("div", ue, [vendor0fedc5e9Js.a("div", {
        class: "PosTextBox",
        style: d.dCSS,
        ref: "PosTextBox"
    }, [(vendor0fedc5e9Js.o(!0), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, vendor0fedc5e9Js.f(r.recoItem.detail, (e => vendor0fedc5e9Js.w((vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", {
        class: "rotateBox",
        contenteditable: r.contenteditable,
        onBlur: t => p.textChange(t, e),
        key: e.rect,
        style: e.textCss + p.getRotateBoxColorStyle()
    }, [vendor0fedc5e9Js.a("div", fe, [vendor0fedc5e9Js.a("span", {
        class: {
            errorTextColor: e.score < d.recThres && !e.textEdited, editedTextColor: e.textEdited
        },
        innerHTML: p.getDisplayText(e)
    }, null, 10, ["innerHTML"])])], 44, ["contenteditable", "onBlur"])), [
        [vendor0fedc5e9Js.v, e.score >= d.recThres || d.keepLowScore]
    ]))), 128))], 4)])])], 64)
}));
ge.render = _e, ge.__scopeId = "data-v-78a912a2";
var xe = null;
const ve = {
        components: {
            IconButton: D,
            RotateText: ge,
            ExportPDF: vendor0fedc5e9Js.h((() => re((() => import("./ExportPDF.51980511.js")), ["./assets/static/ExportPDF.51980511.js", "./assets/static/ExportPDF.6e7c7d19.css", "./assets/static/vendor.0fedc5e9.js"])))
        },
        data: () => ({
            showType: "PosText",
            tableH: 348,
            textEdited: "",
            showViewer: !1,
            imageBG: !1,
            PosTextEditable: !1,
            recThres: .6,
            keepLowScore: !1,
            recLangCode: ""
        }),
        props: ["recoData", "loading"],
        created: function () {
            xe = this, P.addMonitor(["recThres", "keepLowScore", "recLangCode"], xe)
        },
        beforeUpdate() {
            if (!xe.recoData.textEdited && xe.recoData.detail) {
                xe.recoData.textEdited = "";
                for (const e of xe.recoData.detail) e.score >= xe.recThres && (xe.recoData.textEdited += e.textEdited ? e.textEdited : e.text, xe.recoData.textEdited += "\n")
            }
        },
        watch: {
            recoData: {
                deep: !0,
                handler() {}
            }
        },
        methods: {
            getRowClass: ({
                row: e,
                rowIndex: t
            }) => xe.recThres > e.score ? xe.keepLowScore ? "error-row" : "error-row-hidden" : "",
            openPdfDialog() {
                I.get("ExportPDFInited") ? I.set("OpenExportPDFDialog", this.recoData) : vendor0fedc5e9Js._({
                    showClose: !0,
                    message: xe.$t("textbox.tips_loading_pdfmodule"),
                    type: "warning"
                })
            },
            getPlaceholderText: () => xe.recoData.url ? null == xe.recoData.text ? xe.$t("textbox.placeholder_wait_rec") : "" == xe.recoData.text ? xe.$t("textbox.placeholder_no_text") : void 0 : xe.$t("textbox.placeholder"),
            isScaning: () => xe.recoData.isScaning,
            showPoxtextViewer() {
                this.prevOverflow = document.body.style.overflow, document.body.style.overflow = "hidden", this.showViewer = !0
            },
            closePoxtextViewer() {
                document.body.style.overflow = this.prevOverflow, this.showViewer = !1
            },
            setShowType(e) {
                xe.showType = e
            },
            onTextCopy() {
                xe.recoData.textEdited && "" != xe.recoData.textEdited && navigator.clipboard.writeText(xe.recoData.textEdited).then((() => {
                    vendor0fedc5e9Js._({
                        showClose: !0,
                        duration: 1e3,
                        message: xe.$t("textbox.tips_copyed"),
                        type: "success"
                    })
                })).catch((() => {
                    vendor0fedc5e9Js._({
                        showClose: !0,
                        message: xe.$t("textbox.tips_copy_fail"),
                        type: "error"
                    })
                }))
            }
        }
    },
    be = vendor0fedc5e9Js.b("data-v-125abdda");
vendor0fedc5e9Js.p("data-v-125abdda");
const we = {
        key: 0,
        class: "recText placeholder"
    },
    Ce = {
        style: {
            "text-align": "left"
        }
    },
    ye = {
        key: 2,
        style: {
            "overflow-x": "hidden",
            "overflow-y": "hidden",
            position: "relative"
        },
        class: "recText recTextTable"
    },
    ke = {
        class: "ctrlBar"
    },
    Te = {
        class: "rowBar"
    },
    Le = {
        key: 2,
        class: "ButtonGroud"
    },
    Ie = {
        key: 0,
        class: "langtips_warining"
    };
vendor0fedc5e9Js.d();
const De = be(((l, s, r, c, h, p) => {
    const u = vendor0fedc5e9Js.r("el-skeleton"),
        f = vendor0fedc5e9Js.r("el-input"),
        _ = vendor0fedc5e9Js.r("RotateText"),
        x = vendor0fedc5e9Js.r("el-table-column"),
        v = vendor0fedc5e9Js.r("el-table"),
        b = vendor0fedc5e9Js.r("IconButton"),
        w = vendor0fedc5e9Js.r("el-divider"),
        C = vendor0fedc5e9Js.r("ExportPDF");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, [vendor0fedc5e9Js.w(vendor0fedc5e9Js.a(u, {
        class: "boxTextImageLoading",
        rows: 6,
        animated: ""
    }, null, 512), [
        [vendor0fedc5e9Js.v, p.isScaning()]
    ]), vendor0fedc5e9Js.w(vendor0fedc5e9Js.a("div", {
        class: ["boxTextImage", {
            recTextEdited: "Text" == h.showType && r.recoData.textEdited != r.recoData.text
        }]
    }, [r.recoData.text ? vendor0fedc5e9Js.g("", !0) : (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", we, [vendor0fedc5e9Js.a("div", Ce, [vendor0fedc5e9Js.a("p", null, vendor0fedc5e9Js.t(p.getPlaceholderText()), 1)])])), "PureText" == h.showType && r.recoData.text ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(f, {
        key: 1,
        ref: "recoTextarea",
        class: "recText",
        type: "textarea",
        rows: 22,
        placeholder: l.$t("textbox.placeholder"),
        resize: "none",
        modelValue: r.recoData.textEdited,
        "onUpdate:modelValue": s[1] || (s[1] = e => r.recoData.textEdited = e)
    }, null, 8, ["placeholder", "modelValue"])) : vendor0fedc5e9Js.g("", !0), "PosText" == h.showType && r.recoData.text ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", ye, [null != r.recoData.detail ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(_, {
        key: 0,
        ref: "posText",
        imageBG: h.imageBG,
        recoItem: r.recoData,
        contenteditable: h.PosTextEditable,
        onOnExitFullScreen: s[2] || (s[2] = e => p.closePoxtextViewer()),
        fullScreen: h.showViewer
    }, null, 8, ["imageBG", "recoItem", "contenteditable", "fullScreen"])) : vendor0fedc5e9Js.g("", !0)])) : vendor0fedc5e9Js.g("", !0), "TableText" == h.showType && r.recoData.text ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(v, {
        key: 3,
        data: r.recoData.detail,
        height: "tableH",
        border: "",
        class: "recText recTextTable",
        "row-class-name": p.getRowClass
    }, {
        default: be((() => [vendor0fedc5e9Js.a(x, {
            sortable: "",
            prop: "score",
            label: l.$t("textbox.confidence"),
            width: "180"
        }, null, 8, ["label"]), vendor0fedc5e9Js.a(x, {
            prop: "text",
            label: l.$t("textbox.text")
        }, null, 8, ["label"])])),
        _: 1
    }, 8, ["data", "row-class-name"])) : vendor0fedc5e9Js.g("", !0), vendor0fedc5e9Js.w(vendor0fedc5e9Js.a("div", ke, [vendor0fedc5e9Js.a("div", Te, [vendor0fedc5e9Js.a("div", null, [vendor0fedc5e9Js.a(b, {
        tips: l.$t("textbox.text_with_pox"),
        selected: "PosText" == h.showType,
        iconClass: "iconfont icon-postext",
        onClick: s[3] || (s[3] = e => p.setShowType("PosText"))
    }, null, 8, ["tips", "selected"]), vendor0fedc5e9Js.a(b, {
        tips: l.$t("textbox.puretext"),
        selected: "PureText" == h.showType,
        iconClass: "el-icon-document",
        onClick: s[4] || (s[4] = e => p.setShowType("PureText"))
    }, null, 8, ["tips", "selected"]), vendor0fedc5e9Js.a(b, {
        tips: l.$t("textbox.text_with_table"),
        selected: "TableText" == h.showType,
        iconClass: "iconfont icon-table",
        onClick: s[5] || (s[5] = e => p.setShowType("TableText"))
    }, null, 8, ["tips", "selected"])]), vendor0fedc5e9Js.a(w, {
        direction: "vertical"
    }), "PosText" == h.showType ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(b, {
        key: 0,
        tips: l.$t("textbox.zoom_text"),
        iconClass: "iconfont icon-fullscreen",
        onClick: p.showPoxtextViewer
    }, null, 8, ["tips", "onClick"])) : vendor0fedc5e9Js.g("", !0), "PureText" == h.showType && r.recoData.textEdited ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(b, {
        key: 1,
        tips: l.$t("textbox.copy_text"),
        iconClass: "el-icon-document-copy",
        onClick: p.onTextCopy
    }, null, 8, ["tips", "onClick"])) : vendor0fedc5e9Js.g("", !0), "PosText" == h.showType ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", Le, [vendor0fedc5e9Js.a(b, {
        selected: h.PosTextEditable,
        tips: l.$t("textbox.open_close_editmode"),
        iconClass: "iconfont icon-edit",
        onClick: s[6] || (s[6] = e => h.PosTextEditable = !h.PosTextEditable)
    }, null, 8, ["selected", "tips"]), vendor0fedc5e9Js.a(b, {
        tips: l.$t("textbox.export_as_pdf"),
        iconClass: "iconfont icon-pdf",
        onClick: p.openPdfDialog
    }, null, 8, ["tips", "onClick"]), vendor0fedc5e9Js.a(b, {
        selected: h.imageBG,
        tips: l.$t("textbox.image_behind_text"),
        iconClass: "iconfont icon-imgtxt",
        onClick: s[7] || (s[7] = () => {
            h.imageBG = !h.imageBG
        })
    }, null, 8, ["selected", "tips"])])) : vendor0fedc5e9Js.g("", !0), "PureText" == h.showType && r.recoData.textEdited != r.recoData.text ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(b, {
        key: 3,
        tips: l.$t("textbox.undo_text_changes"),
        iconClass: "iconfont icon-revert",
        onClick: s[8] || (s[8] = e => r.recoData.textEdited = r.recoData.text)
    }, null, 8, ["tips"])) : vendor0fedc5e9Js.g("", !0)]), vendor0fedc5e9Js.a("div", null, [r.recoData.detail && h.recLangCode != r.recoData.detail.langCode ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("span", Ie, vendor0fedc5e9Js.t(l.$t("langname." + r.recoData.detail.langCode)), 1)) : vendor0fedc5e9Js.g("", !0)])], 512), [
        [vendor0fedc5e9Js.v, r.recoData.text]
    ])], 2), [
        [vendor0fedc5e9Js.v, !p.isScaning()]
    ]), vendor0fedc5e9Js.a(C)], 64)
}));
ve.render = De, ve.__scopeId = "data-v-125abdda";
let Se = "";
var $e = null;
const Pe = {
        data: () => ({
            showViewer: !1,
            isDrawBox: !1,
            viewUrl: "",
            recThres: .6,
            keepLowScore: !1
        }),
        created: function () {
            $e = this, P.addMonitor("recThres", (e => {
                $e.recThres = e, $e.drawImage()
            })), P.addMonitor("keepLowScore", (e => {
                $e.keepLowScore = e, $e.drawImage()
            }))
        },
        components: {
            IconButton: D
        },
        props: ["loading", "recItem"],
        methods: {
            onReRec() {
                I.trig("ReRecCurRequest")
            },
            isScaning: () => $e.recItem && $e.recItem.isScaning,
            setViewer(e) {
                Se = document.body.style.overflow, document.body.style.overflow = "hidden", this.isDrawBox ? this.viewUrl = this.$refs.mainCanvas.toDataURL("image/png") : this.viewUrl = this.recItem.url, this.showViewer = e
            },
            closeViewer() {
                document.body.style.overflow = Se, this.showViewer = !1
            },
            drawImage() {
                if ($e.img && $e.imgCtx) {
                    var e = $e.$refs.mainCanvas,
                        t = $e.img,
                        i = $e.imgCtx;
                    if (e.width = t.width, e.height = t.height, i.drawImage(t, 0, 0), $e.recItem.detail && $e.isDrawBox) {
                        i.lineWidth = 2;
                        for (const e of $e.recItem.detail)
                            if (!(e.score < $e.recThres) || $e.keepLowScore) {
                                var a = e.rect;
                                i.beginPath(), i.moveTo(a[0].x, a[0].y), i.lineTo(a[1].x, a[1].y), i.lineTo(a[2].x, a[2].y), i.lineTo(a[3].x, a[3].y), i.lineTo(a[0].x, a[0].y), i.closePath(), i.strokeStyle = e.score < $e.recThres ? "#ff0000" : "#00ff00", i.stroke()
                            }
                    }
                }
            }
        },
        watch: {
            recItem: {
                deep: !0,
                handler: function (e, t) {
                    if (e) {
                        var i = this.$refs.mainCanvas;
                        $e.lasturl != e.url && ($e.lasturl = e.url, $e.imgCtx = i.getContext("2d"), $e.img = new Image, $e.img.onload = function () {
                            $e.drawImage()
                        }, $e.img.src = e.url)
                    }
                }
            }
        }
    },
    Be = vendor0fedc5e9Js.b("data-v-f17411da");
vendor0fedc5e9Js.p("data-v-f17411da");
const Re = {
        class: "boxTextImage"
    },
    Ee = {
        ref: "mainCanvas",
        class: "ImagePreview"
    },
    Ve = {
        key: 0,
        class: "ImagePreview placeholder"
    },
    ze = {
        style: {
            "text-align": "left"
        }
    },
    He = {
        style: {
            "text-align": "left"
        }
    };
vendor0fedc5e9Js.d();
const Fe = Be(((l, s, r, c, g, h) => {
    const p = vendor0fedc5e9Js.r("el-image-viewer"),
        u = vendor0fedc5e9Js.r("IconButton");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", Re, [vendor0fedc5e9Js.w(vendor0fedc5e9Js.a("div", {
        class: ["ImagePreviewDiv", {
            scanBox: h.isScaning()
        }]
    }, [vendor0fedc5e9Js.a("canvas", Ee, null, 512)], 2), [
        [vendor0fedc5e9Js.v, r.recItem.url]
    ]), r.recItem.url ? vendor0fedc5e9Js.g("", !0) : (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", Ve, [vendor0fedc5e9Js.a("div", ze, [vendor0fedc5e9Js.a("p", null, vendor0fedc5e9Js.t(l.$t("imagebox.image_placeholder")), 1)])])), g.showViewer ? (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(p, {
        key: 1,
        onClose: h.closeViewer,
        "url-list": [g.viewUrl]
    }, null, 8, ["onClose", "url-list"])) : vendor0fedc5e9Js.g("", !0), vendor0fedc5e9Js.w(vendor0fedc5e9Js.a("div", He, [vendor0fedc5e9Js.a(u, {
        tips: l.$t("imagebox.btn_big_image_tips"),
        iconClass: "iconfont icon-fullscreen",
        onClick: s[1] || (s[1] = e => h.setViewer(!0))
    }, null, 8, ["tips"]), vendor0fedc5e9Js.a(u, {
        tips: l.$t("imagebox.btn_text_pos_tips"),
        iconClass: "iconfont icon-lineBox",
        selected: g.isDrawBox,
        visible: !r.recItem.isScaning,
        onClick: s[2] || (s[2] = e => {
            g.isDrawBox = !g.isDrawBox, h.drawImage()
        })
    }, null, 8, ["tips", "selected", "visible"]), vendor0fedc5e9Js.a(u, {
        tips: l.$t("imagebox.btn_rerec_current"),
        iconClass: "el-icon-refresh-left",
        visible: !r.recItem.isScaning,
        onClick: s[3] || (s[3] = e => {
            h.onReRec()
        })
    }, null, 8, ["tips", "visible"])], 512), [
        [vendor0fedc5e9Js.v, r.recItem.url]
    ])])
}));
Pe.render = Fe, Pe.__scopeId = "data-v-f17411da";
let Ae = null;
const We = {
        components: {
            ImageList: J,
            TextBox: ve,
            ImageBox: Pe
        },
        data: () => ({
            dialogVisible: !1,
            recoData: {},
            uploadHover: 0,
            mainRowHeight: "380",
            clientHeight: 0
        }),
        mounted: function () {
            Ae = this;
            let e = document.getElementById("drop_area"),
                t = document.getElementById("drop_mask");
            t.addEventListener("drop", this.enentDrop, !1);
            var i = function (e) {
                    e.stopPropagation(), e.preventDefault(), Ae.uploadHover -= 1
                },
                a = function (e) {
                    e.stopPropagation(), e.preventDefault(), Ae.uploadHover += 1
                },
                o = function (e) {
                    e.stopPropagation(), e.preventDefault()
                };
            t.addEventListener("dragleave", i), e.addEventListener("dragleave", i), t.addEventListener("dragenter", a), e.addEventListener("dragenter", a), e.addEventListener("dragover", o), t.addEventListener("dragover", o), Ae.clientHeight = document.documentElement.clientHeight, window.onresize = () => {
                Ae.clientHeight = document.documentElement.clientHeight
            }, Ae.calcMainRowHeight()
        },
        methods: {
            enentDrop(e) {
                this.uploadHover = !1, e.stopPropagation(), e.preventDefault();
                let t = e.dataTransfer.files;
                Ae.$refs.ImageList.addImgPreview(t)
            },
            calcMainRowHeight() {
                let e = .6 * Ae.clientHeight;
                e = Math.max(e, 380), this.mainRowHeight = e.toString()
            },
            onCurrentItemChange(e) {
                this.recoData = e
            },
            clearRecognitionImage() {
                this.recoData = {}
            }
        },
        watch: {
            clientHeight(e) {
                this.timer || (this.timer = !0, setTimeout((function () {
                    Ae.calcMainRowHeight(), this.timer = !1
                }), 400))
            }
        }
    },
    Oe = vendor0fedc5e9Js.b("data-v-6fb645f5");
vendor0fedc5e9Js.p("data-v-6fb645f5");
const Me = {
        id: "drop_area",
        style: {
            position: "relative"
        }
    },
    Ue = {
        id: "drop_mask",
        class: "drop_mask"
    },
    Ne = {
        class: "drop_mask-spinner"
    },
    je = vendor0fedc5e9Js.a("i", {
        class: "el-icon-upload2 drop_mask-icon"
    }, null, -1),
    Ge = {
        class: "drop_mask-text"
    };
vendor0fedc5e9Js.d();
const Qe = Oe(((l, s, r, c, g, h) => {
    const m = vendor0fedc5e9Js.r("ImageBox"),
        p = vendor0fedc5e9Js.r("el-col"),
        u = vendor0fedc5e9Js.r("TextBox"),
        f = vendor0fedc5e9Js.r("el-row"),
        _ = vendor0fedc5e9Js.r("ImageList");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", Me, [vendor0fedc5e9Js.a(f, {
        type: "flex",
        justify: "center",
        ref: "mainRow",
        style: "height:" + g.mainRowHeight + "px"
    }, {
        default: Oe((() => [vendor0fedc5e9Js.a(p, {
            class: "rightAlign",
            span: 12
        }, {
            default: Oe((() => [vendor0fedc5e9Js.a(m, {
                recItem: g.recoData,
                style: {
                    height: "100%"
                }
            }, null, 8, ["recItem"])])),
            _: 1
        }), vendor0fedc5e9Js.a(p, {
            class: "leftAlign",
            span: 12
        }, {
            default: Oe((() => [vendor0fedc5e9Js.a(u, {
                recoData: g.recoData
            }, null, 8, ["recoData"])])),
            _: 1
        })])),
        _: 1
    }, 8, ["style"]), vendor0fedc5e9Js.a(_, {
        ref: "ImageList",
        onCurrentItemChange: h.onCurrentItemChange,
        onClearRecognitionImage: h.clearRecognitionImage
    }, null, 8, ["onCurrentItemChange", "onClearRecognitionImage"]), vendor0fedc5e9Js.w(vendor0fedc5e9Js.a("div", Ue, [vendor0fedc5e9Js.a("div", Ne, [je, vendor0fedc5e9Js.a("p", Ge, vendor0fedc5e9Js.t(l.$t("mainpage.drop_tips")), 1)])], 512), [
        [vendor0fedc5e9Js.v, g.uploadHover]
    ])])
}));
We.render = Qe, We.__scopeId = "data-v-6fb645f5";
let Xe;
const qe = {
        data: () => ({
            curLang: "简体中文",
            langList: [{
                name: "简体中文",
                code: "zh"
            }, {
                name: "繁體中文",
                code: "zh-tw"
            }, {
                name: "English",
                code: "en"
            }],
            navLangTips: void 0,
            navLangTipsShow: !1,
            navLang: ""
        }),
        created() {},
        mounted() {
            Xe = this;
            let e = this.$root.$i18n.locale;
            this.navLang = navigator.language || navigator.userLanguage;
            let t = {
                "zh-CN": "zh",
                "zh-TW": "zh-tw",
                "zh-HK": "zh-tw"
            };
            if (t[this.navLang] && (this.navLang = t[this.navLang]), console.log("this.navLang ", this.navLang), null == P.get("uiLangCode") && this.$root.$i18n.messages[this.navLang] && this.navLang != e) {
                let e = this.$root.$i18n.messages[this.navLang].multilanguage;
                e && e.navLangeTips && (this.navLangTips = this.$root.$i18n.messages[this.navLang].multilanguage.navLangeTips), this.navLangTips || (this.navLangTips = "undefined"), setTimeout((function () {
                    Xe.navLangTipsShow = !0
                }), 1e3), setTimeout((function () {
                    Xe.navLangTipsShow = !1
                }), 5e3)
            }
        },
        methods: {
            onLangChange(e) {
                e != this.$root.$i18n.locale && (P.set("uiLangCode", e), P.save(), window.location.href = e + ".html")
            },
            changeToNavLang() {
                this.onLangChange(this.navLang)
            }
        }
    },
    Ze = vendor0fedc5e9Js.b("data-v-488daa10");
vendor0fedc5e9Js.p("data-v-488daa10");
const Je = {
        class: "nav-item"
    },
    Ye = {
        class: "el-dropdown-link iconColor"
    },
    Ke = vendor0fedc5e9Js.a("i", {
        class: "iconfont icon-a-language1x"
    }, null, -1),
    et = vendor0fedc5e9Js.a("i", {
        class: "el-icon-arrow-down el-icon--right"
    }, null, -1);
vendor0fedc5e9Js.d();
const tt = Ze(((a, o, l, s, r, m) => {
    const p = vendor0fedc5e9Js.r("el-dropdown-item"),
        u = vendor0fedc5e9Js.r("el-dropdown-menu"),
        f = vendor0fedc5e9Js.r("el-dropdown"),
        _ = vendor0fedc5e9Js.r("el-popconfirm");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(_, {
        title: r.navLangTips,
        trigger: "manual",
        visible: r.navLangTipsShow,
        "onUpdate:visible": o[1] || (o[1] = e => r.navLangTipsShow = e),
        onConfirm: m.changeToNavLang,
        onCancel: o[2] || (o[2] = e => r.navLangTipsShow = !1)
    }, {
        reference: Ze((() => [vendor0fedc5e9Js.a("div", Je, [vendor0fedc5e9Js.a(f, {
            trigger: "click",
            onCommand: m.onLangChange
        }, {
            dropdown: Ze((() => [vendor0fedc5e9Js.a(u, null, {
                default: Ze((() => [(vendor0fedc5e9Js.o(!0), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, vendor0fedc5e9Js.f(r.langList, (e => (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(p, {
                    key: e.name,
                    command: e.code,
                    class: {
                        highlight: r.navLang == e.code
                    }
                }, {
                    default: Ze((() => [vendor0fedc5e9Js.e(vendor0fedc5e9Js.t(e.name), 1)])),
                    _: 2
                }, 1032, ["command", "class"])))), 128))])),
                _: 1
            })])),
            default: Ze((() => [vendor0fedc5e9Js.a("span", Ye, [Ke, vendor0fedc5e9Js.e(" " + vendor0fedc5e9Js.t(a.$t("langname." + a.$root.$i18n.locale)) + " ", 1), et])])),
            _: 1
        }, 8, ["onCommand"])])])),
        _: 1
    }, 8, ["title", "visible", "onConfirm"])
}));
qe.render = tt, qe.__scopeId = "data-v-488daa10";
var it = {
    data: () => ({
        imgUrl: "assets/static/icons/logo.png",
        activeIndex: "0"
    }),
    components: {
        Multilanguage: qe
    },
    methods: {
        handleSelect() {}
    }
};
const at = vendor0fedc5e9Js.b("data-v-0227e5f8");
vendor0fedc5e9Js.p("data-v-0227e5f8");
const ot = {
        class: "navbar"
    },
    nt = {
        class: "home-link"
    },
    lt = vendor0fedc5e9Js.a("div", {
        class: "vertag"
    }, " v1.2 ", -1),
    st = {
        class: "links"
    },
    rt = {
        class: "nav-links can-hide"
    };
vendor0fedc5e9Js.d();
const mt = at(((a, o, l, s, r, c) => {
    const g = null,
        h = vendor0fedc5e9Js.r("Multilanguage");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", ot, [vendor0fedc5e9Js.a("div", nt, [vendor0fedc5e9Js.a("img", {
        class: "logo",
        src: r.imgUrl
    }, null, 8, ["src"]), vendor0fedc5e9Js.a("span", {
        ref: "siteName",
        class: "site-name"
    }, vendor0fedc5e9Js.t(a.$t("message.title.long")), 513), vendor0fedc5e9Js.a("span", {
        ref: "siteName",
        class: "site-name-mini"
    }, vendor0fedc5e9Js.t(a.$t("message.title.short")), 513), lt, vendor0fedc5e9Js.a("div", st, [vendor0fedc5e9Js.a("nav", rt, [vendor0fedc5e9Js.a(g, {
        direction: "vertical"
    }), vendor0fedc5e9Js.a(h)])])])])
}));
it.render = mt, it.__scopeId = "data-v-0227e5f8";
const pt = {
        name: "Highlights",
        data: () => ({
            HighPoints: [{
                id: 1,
                icon: "icon-free",
                title: "highlights.free",
                content: "highlights.free_content"
            }, {
                id: 2,
                icon: "icon-safe",
                title: "highlights.safe",
                content: "highlights.safe_content"
            }, {
                id: 3,
                icon: "icon-AI",
                title: "highlights.ai",
                content: "highlights.ai_content"
            }, {
                id: 4,
                icon: "icon-smile",
                title: "highlights.easytouse",
                content: "highlights.easytouse_content"
            }]
        })
    },
    ut = vendor0fedc5e9Js.b("data-v-0eb7cb56");
vendor0fedc5e9Js.p("data-v-0eb7cb56");
const ft = {
        class: "HighlightsDiv rowCard"
    },
    _t = {
        class: "marginSize"
    },
    xt = {
        class: "marginSize"
    };
vendor0fedc5e9Js.d();
const vt = ut(((a, o, l, s, r, c) => {
    const m = vendor0fedc5e9Js.r("el-main");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(m, {
        class: "el-main_add"
    }, {
        default: ut((() => [vendor0fedc5e9Js.a("div", ft, [(vendor0fedc5e9Js.o(!0), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, vendor0fedc5e9Js.f(r.HighPoints, (e => (vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c("div", {
            class: "ShowItem",
            key: e.id
        }, [vendor0fedc5e9Js.a("i", {
            class: ["iconfont iconshow", e.icon]
        }, null, 2), vendor0fedc5e9Js.a("h2", _t, vendor0fedc5e9Js.t(a.$t(e.title)), 1), vendor0fedc5e9Js.a("p", xt, vendor0fedc5e9Js.t(a.$t(e.content)), 1)])))), 128))])])),
        _: 1
    })
}));
pt.render = vt, pt.__scopeId = "data-v-0eb7cb56";
const bt = {
        components: {
            IconButton: D
        },
        methods: {
            openTelegram() {
                this.pdfConfig.action = "SaveToFile", PDFRender.render([this.recoItem], this.pdfConfig)
            }
        }
    },
    wt = vendor0fedc5e9Js.b("data-v-04b671a0");
vendor0fedc5e9Js.p("data-v-04b671a0");
const Ct = vendor0fedc5e9Js.a("div", {
    class: "footerContact"
}, [], -1);
vendor0fedc5e9Js.d();
const yt = wt(((a, o, l, s, r, c) => {
    const d = vendor0fedc5e9Js.r("el-divider"),
        g = vendor0fedc5e9Js.r("el-footer");
    return vendor0fedc5e9Js.o()
}));
bt.render = yt, bt.__scopeId = "data-v-04b671a0";
let kt;
const Tt = {
        data: () => ({
            dialogVisible: !0,
            loadPercentage: 0,
            langname: ""
        }),
        mounted() {
            L.onprogress = function (e, t) {
                kt.loadPercentage = Math.round(e / t * 100)
            }, L.onRuntimeInitialized = function () {
                L.setLang(P.get("recLangCode"))
            }, L.onSetLangFinish = function () {
                I.set("AntOcrInited", !0), kt.dialogVisible = !1, P.set("recLangCode", L.langCode), P.save()
            }, L.onSetLangBegin = function (e) {
                kt.dialogVisible = !0, kt.loadPercentage = 0, kt.langname = kt.$t("langname." + e)
            }, L.init()
        },
        created() {
            kt = this
        },
        methods: {}
    },
    Lt = vendor0fedc5e9Js.b("data-v-37a6707e");
vendor0fedc5e9Js.p("data-v-37a6707e");
const It = {
    class: "mainDiv"
};
vendor0fedc5e9Js.d();
const Dt = Lt(((a, o, l, s, r, c) => {
    const g = vendor0fedc5e9Js.r("el-progress"),
        h = vendor0fedc5e9Js.r("el-dialog");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(h, {
        title: a.$t("LoadingDialog.loading_tips") + r.langname,
        "model-value": r.dialogVisible,
        "onUpdate:modelValue": o[1] || (o[1] = e => {
            r.dialogVisible = e, a.$emit("update:dialogVisible", r.dialogVisible)
        }),
        "close-on-click-modal": !1,
        "close-on-press-escape": !1,
        "show-close": !1,
        "destroy-on-close": !0
    }, {
        default: Lt((() => [vendor0fedc5e9Js.a("div", It, [vendor0fedc5e9Js.a(g, {
            type: "circle",
            percentage: r.loadPercentage
        }, null, 8, ["percentage"]), vendor0fedc5e9Js.a("span", null, vendor0fedc5e9Js.t(a.$t("LoadingDialog.network_tips")), 1)])])),
        _: 1
    }, 8, ["title", "model-value"])
}));
Tt.render = Dt, Tt.__scopeId = "data-v-37a6707e";
var St = vendor0fedc5e9Js.i({
    name: "App",
    components: {
        RecoMain: We,
        AntOcrHeader: it,
        Highlights: pt,
        Footer: bt,
        LoadingDialog: Tt
    },
    created() {
        let e = window.location.pathname.replace(window.location.pathname, "");
        "" == e && (e = P.get("uiLangCode")), null == e || (this.$root.$i18n.locale = e.replace(".html", ""))
    }
});
const $t = vendor0fedc5e9Js.b("data-v-b8650394");
vendor0fedc5e9Js.p("data-v-b8650394");
const Pt = {
    class: "wholeLimit"
};
vendor0fedc5e9Js.d();
const Bt = $t(((a, o, l, s, r, c) => {
    const d = vendor0fedc5e9Js.r("AntOcrHeader"),
        h = vendor0fedc5e9Js.r("RecoMain"),
        m = vendor0fedc5e9Js.r("el-main"),
        p = vendor0fedc5e9Js.r("LoadingDialog"),
        u = vendor0fedc5e9Js.r("Highlights"),
        f = vendor0fedc5e9Js.r("Footer"),
        _ = vendor0fedc5e9Js.r("el-container");
    return vendor0fedc5e9Js.o(), vendor0fedc5e9Js.c(vendor0fedc5e9Js.F, null, [vendor0fedc5e9Js.a(d), vendor0fedc5e9Js.a("div", Pt, [vendor0fedc5e9Js.a(_, {
        class: "wholeBox"
    }, {
        default: $t((() => [vendor0fedc5e9Js.a(m, null, {
            default: $t((() => [vendor0fedc5e9Js.a(h)])),
            _: 1
        }), vendor0fedc5e9Js.a(p), vendor0fedc5e9Js.a(u), vendor0fedc5e9Js.a(f)])),
        _: 1
    })])], 64)
}));
St.render = Bt, St.__scopeId = "data-v-b8650394";
const Rt = vendor0fedc5e9Js.j({
        locale: "zh",
        fallbackLocale: "en",
        missing: (e, t, i) => {
            console.warn(`detect '${t}' key missing in '${e}'`)
        },
        messages: {
            zh: {
                message: {
                    title: {
                        websize: "在线图片转文字",
                        long: "OCR文字识别",
                        short: "OCR文字识别"
                    }
                },
                navi: {
                    document: "",
                    feedback: ""
                },
                configure: {
                    title: "配置",
                    highlight_suspected_error: "高亮疑似错误",
                    judgment_threshold: "判断阈值",
                    confidence_threshold: "置信度阈值",
                    keep_highlight: "保留高亮显示",
                    text_background_color: "文本背景色",
                    no_background: "不显示背景",
                    text_color: "文本颜色",
                    restore_default: "恢复默认",
                    cancel: "取 消",
                    save: "保存设置"
                },
                highlights: {
                    free: "免费",
                    free_content: "完全免费，没有任何次数限制，可以无限次使用",
                    safe: "安全",
                    safe_content: "全部数据本地运算，所有图片均不会被上传",
                    ai: "智能",
                    ai_content: "基于深度学习训练得到的模型，拥有强大的识别能力",
                    easytouse: "易用",
                    easytouse_content: "支持本地图片，或者直接读取剪切板而不需要先把图片存为文件"
                },
                imagebox: {
                    image_placeholder: "拖动图像文件到此处",
                    btn_big_image_tips: "大图预览",
                    btn_text_pos_tips: "显示文本位置",
                    btn_rerec_current: "重新识别当前图像"
                },
                imagelist: {
                    btn_locate_image: "本地图片",
                    btn_read_clipboard: "读剪贴板",
                    recognition_language: "识别语言",
                    recognition_progress: "识别进度",
                    delete_all_image: "删除所有图片",
                    configure: "设置",
                    tips_rec_conflict: "已有识别任务正在进行，请等待识别完成再操作",
                    tips_read_fail: "读取失败：错误的文件类型",
                    tips_delete_confirm: "删除所有图像和识别结果, 是否继续?",
                    tips_rerec_confirm: "重新识别将删除现有的识别结果, 是否继续?",
                    delete_confirm: "删除确认",
                    tips_delete_success: "删除成功",
                    tips_delete_conflict: "不能删除正在识别的图像，请等待识别完成再删除",
                    tips_delete_cancel: "已取消删除",
                    tips_clipboard_no_image: "没有检测到剪贴板内的图像",
                    tips_clipboard_firefox_only_hotkey: "Firefox浏览器只能使用粘贴键",
                    tips_clipboard_faild: "读取剪贴板失败，请确认是否开放剪贴权限或剪贴板没有图像数据。",
                    export_all_as_pdf: "导出所有图像到PDF",
                    refresh_all_image: "重新识别所有图像"
                },
                mainpage: {
                    drop_tips: "文件拖放到此处进行识别"
                },
                pdfconfig: {
                    title: "导出PDF",
                    filename: "文件名",
                    export_data: "导出数据",
                    only_text: "只导出文字",
                    text_and_image: "导出文字和图像",
                    image_position: "文字位置",
                    text_on_image: "文字显示在图像上方",
                    text_invisible: "文字不可见",
                    with_original_picture: "附带原图",
                    without_original_picture: "不附带原图",
                    image_attached_on_next_page: "原图附在下一页",
                    image_attached_on_last_page: "原图附在最后",
                    return_config: "返回设置",
                    preview_pdf: "预览PDF",
                    export_pdf: "导出PDF"
                },
                common: {
                    optConfirm: "操作确认",
                    confirm: "确认",
                    cancel: "取 消"
                },
                langname: {
                    zh: "简体中文",
                    en: "英文",
                    ja: "日文",
                    "zh-tw": "繁体中文"
                },
                textbox: {
                    placeholder: "识别结果在此显示",
                    confidence: "置信度",
                    text: "文本",
                    text_with_pox: "带位置信息的文体",
                    puretext: "纯文本方式显示",
                    text_with_table: "以表格方式显示",
                    zoom_text: "放大显示",
                    copy_text: "复制当前文本",
                    open_close_editmode: "开启/关闭编辑模式",
                    export_as_pdf: "导出为PDF",
                    image_behind_text: "在文本底下显示图像",
                    undo_text_changes: "撤销文本修改",
                    tips_loading_pdfmodule: "PDF模块尚未加载完成，请等待完成后再试，第一次加载可能比较慢",
                    placeholder_wait_rec: "等待识别",
                    placeholder_no_text: "未识别到文本",
                    tips_copyed: "复制成功",
                    tips_copy_fail: "复制失败，请确认是否开放剪贴板权限。"
                },
                multilanguage: {
                    navLangeTips: "是否切换到简体中文？"
                },
                LoadingDialog: {
                    loading_tips: "正在加载识别程序：",
                    network_tips: "如果进度条长时间无变化，请检查网络设置"
                }
            },
            en: {
                message: {
                    title: {
                        websize: "在线图片转文字",
                        long: "OCR Text Recognition",
                        short: "OCR Text Recognition"
                    }
                },
                navi: {
                    document: "",
                    feedback: ""
                },
                configure: {
                    title: "configuration",
                    highlight_suspected_error: "Highlight suspected error",
                    judgment_threshold: "Judgment threshold",
                    confidence_threshold: "Confidence threshold",
                    keep_highlight: "Keep highlight",
                    text_background_color: "Text background",
                    no_background: "No background",
                    text_color: "Text colour",
                    restore_default: "Restore default",
                    cancel: "Cancel",
                    save: "Save"
                },
                highlights: {
                    free: "Free",
                    free_content: "Totally free, no any limit",
                    safe: "Safe",
                    safe_content: "All data is calculated locally, no any images will be upload",
                    ai: "Smart",
                    ai_content: "A model trained on deep learning with powerful recognition capabilities",
                    easytouse: "Easy",
                    easytouse_content: "Support local images or read clipboard directly without saving the image as a file first"
                },
                imagebox: {
                    image_placeholder: "Drag the image file here",
                    btn_big_image_tips: "Zoom in",
                    btn_text_pos_tips: "Show text position",
                    btn_rerec_current: "Re-recognize the current image"
                },
                imagelist: {
                    btn_locate_image: "Local images",
                    btn_read_clipboard: "Clipboard",
                    recognition_progress: "Recognition progress",
                    recognition_language: "Recognition language",
                    delete_all_image: "Delete all images",
                    configure: "Configure",
                    tips_rec_conflict: "An existing recognition task is in progress, please wait until recognition is complete",
                    tips_read_fail: "Read failure: wrong file type",
                    tips_delete_confirm: "This operation deletes all images and recognition results, do you want to continue?",
                    delete_confirm: "Delete confirmation",
                    tips_rerec_confirm: "Re-recognition will delete the existing recognition results, whether to continue?",
                    tips_delete_success: "Deleted successfully",
                    tips_delete_conflict: "Cannot delete the image being recognized, please wait until recognition is complete before deleting",
                    tips_delete_cancel: "Deletion has been cancelled",
                    tips_clipboard_no_image: "No image was detected in the clipboard",
                    tips_clipboard_faild: "Failed to read clipboard, please check if clipboard permissions are open or clipboard has no image data.",
                    tips_clipboard_firefox_only_hotkey: "Firefox browser can only use the paste button",
                    export_all_as_pdf: "Export all images to PDF",
                    refresh_all_image: "Re-recognize all images"
                },
                mainpage: {
                    drop_tips: "Drag and drop files here for recognition"
                },
                pdfconfig: {
                    title: "Export PDF",
                    filename: "filename",
                    export_data: "Contents",
                    only_text: "Text only",
                    text_and_image: "Text and image",
                    image_position: "Text position",
                    text_on_image: "Text displayed above the image",
                    text_invisible: "Invisible text",
                    with_original_picture: "With original image",
                    without_original_picture: "Without original image",
                    image_attached_on_next_page: "Image attached to the next page",
                    image_attached_on_last_page: "Image attached at the end",
                    return_config: "Return",
                    preview_pdf: "Preview PDF",
                    export_pdf: "Export PDF"
                },
                common: {
                    optConfirm: "Operation confirmation",
                    confirm: "Confirm",
                    cancel: "Cancel"
                },
                langname: {
                    zh: "Chinese (Simplified)",
                    en: "English",
                    ja: "Japanese",
                    "zh-tw": "Chinese (Traditional)"
                },
                textbox: {
                    placeholder: "Recognition results here",
                    confidence: "Confidence",
                    text: "Text",
                    text_with_pox: "Text with position",
                    puretext: "Plain text",
                    text_with_table: "Table",
                    zoom_text: "Zoom in",
                    copy_text: "Copy current text",
                    open_close_editmode: "Enable/disable edit mode",
                    export_as_pdf: "Export to PDF",
                    image_behind_text: "Image under text",
                    undo_text_changes: "Undo text changes",
                    tips_loading_pdfmodule: "The PDF module has not yet finished loading, please wait for it to finish and try again, the first load may be slow",
                    placeholder_wait_rec: "Waiting for recognition",
                    placeholder_no_text: "No text recognized",
                    tips_copyed: "Copied successfully",
                    tips_copy_fail: "Copy failed, please check if you have open clipboard permissions."
                },
                multilanguage: {
                    navLangeTips: "Switching to English interface?"
                },
                LoadingDialog: {
                    loading_tips: "Loading recognition program:",
                    network_tips: "If the progress bar does not change for a long time, please check the network settings"
                }
            },
            "zh-tw": {
                message: {
                    title: {
                        websize: "在線圖片轉文字",
                        long: "OCR文字識別",
                        short: "OCR文字識別"
                    }
                },
                navi: {
                    document: "",
                    feedback: ""
                },
                configure: {
                    title: "配置",
                    highlight_suspected_error: "高亮疑似錯誤",
                    judgment_threshold: "判斷閾值",
                    confidence_threshold: "置信度閾值",
                    keep_highlight: "保留高亮顯示",
                    text_background_color: "文本背景色",
                    no_background: "不顯示背景",
                    text_color: "文本顏色",
                    restore_default: "恢復默認",
                    cancel: "取 消",
                    save: "保存設置"
                },
                highlights: {
                    free: "免費",
                    free_content: "完全免費，沒有任何次數限制，可以無限次使用",
                    safe: "安全",
                    safe_content: "全部數據本地運算，所有圖片均不會被上傳",
                    ai: "智能",
                    ai_content: "基於深度學習訓練得到的模型，擁有強大的識別能力",
                    easytouse: "易用",
                    easytouse_content: "支持本地圖片，或者直接讀取剪切板而不需要先把圖片存為文件"
                },
                imagebox: {
                    image_placeholder: "拖動圖像文件到此處",
                    btn_big_image_tips: "大圖預覽",
                    btn_text_pos_tips: "顯示文本位置",
                    btn_rerec_current: "重新識別當前圖像"
                },
                imagelist: {
                    btn_locate_image: "本地圖片",
                    btn_read_clipboard: "讀剪貼板",
                    recognition_language: "識別語言",
                    recognition_progress: "識別進度",
                    delete_all_image: "刪除所有圖片",
                    configure: "設置",
                    tips_rec_conflict: "已有識別任務正在進行，請等待識別完成再操作",
                    tips_read_fail: "讀取失敗：錯誤的文件類型",
                    tips_delete_confirm: "刪除所有圖像和識別結果, 是否繼續?",
                    tips_rerec_confirm: "重新識別將刪除現有的識別結果, 是否繼續?",
                    delete_confirm: "刪除確認",
                    tips_delete_success: "刪除成功",
                    tips_delete_conflict: "不能刪除正在識別的圖像，請等待識別完成再刪除",
                    tips_delete_cancel: "已取消刪除",
                    tips_clipboard_no_image: "沒有檢測到剪貼板內的圖像",
                    tips_clipboard_faild: "讀取剪貼板失敗，請確認是否開放剪貼權限或剪貼板沒有圖像數據。",
                    tips_clipboard_firefox_only_hotkey: "Firefox瀏覽器只能使用粘貼鍵",
                    export_all_as_pdf: "導出所有圖像到PDF",
                    refresh_all_image: "重新識別所有圖像"
                },
                mainpage: {
                    drop_tips: "文件拖放到此處進行識別"
                },
                pdfconfig: {
                    title: "導出PDF",
                    filename: "文件名",
                    export_data: "導出數據",
                    only_text: "只導出文字",
                    text_and_image: "導出文字和圖像",
                    image_position: "文字位置",
                    text_on_image: "文字顯示在圖像上方",
                    text_invisible: "文字不可見",
                    with_original_picture: "附帶原圖",
                    without_original_picture: "不附帶原圖",
                    image_attached_on_next_page: "原圖附在下一頁",
                    image_attached_on_last_page: "原圖附在最後",
                    return_config: "返回設置",
                    preview_pdf: "預覽PDF",
                    export_pdf: "導出PDF"
                },
                common: {
                    optConfirm: "操作確認",
                    confirm: "確認",
                    cancel: "取 消"
                },
                langname: {
                    zh: "簡體中文",
                    en: "英文",
                    ja: "日文",
                    "zh-tw": "繁體中文"
                },
                textbox: {
                    placeholder: "識別結果在此顯示",
                    confidence: "置信度",
                    text: "文本",
                    text_with_pox: "帶位置信息的文體",
                    puretext: "純文本方式顯示",
                    text_with_table: "以表格方式顯示",
                    zoom_text: "放大顯示",
                    copy_text: "複製當前文本",
                    open_close_editmode: "開啟/關閉編輯模式",
                    export_as_pdf: "導出為PDF",
                    image_behind_text: "在文本底下顯示圖像",
                    undo_text_changes: "撤銷文本修改",
                    tips_loading_pdfmodule: "PDF模塊尚未加載完成，請等待完成後再試，第一次加載可能比較慢",
                    placeholder_wait_rec: "等待識別",
                    placeholder_no_text: "未識別到文本",
                    tips_copyed: "複製成功",
                    tips_copy_fail: "複製失敗，請確認是否開放剪貼板權限。"
                },
                multilanguage: {
                    navLangeTips: "是否切換到繁體中文？"
                },
                LoadingDialog: {
                    loading_tips: "正在載入識別程式：",
                    network_tips: "如果進度條長時間無變化，請檢查網絡設置"
                }
            }
        }
    }),
    Et = vendor0fedc5e9Js.k(St);
Et.use(vendor0fedc5e9Js.l), Et.use(Rt), Et.mount("#app");
export {
    re as _, I as e
};