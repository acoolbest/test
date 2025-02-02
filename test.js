"undefined" != typeof window && function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Hls = e() : t.Hls = e()
}(this, (function() {
    return function(t) {
        var e = {};
        function r(i) {
            if (e[i])
                return e[i].exports;
            var n = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(n.exports, n, n.exports, r),
            n.l = !0,
            n.exports
        }
        return r.m = t,
        r.c = e,
        r.d = function(t, e, i) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }
        ,
        r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        r.t = function(t, e) {
            if (1 & e && (t = r(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (r.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var n in t)
                    r.d(i, n, function(e) {
                        return t[e]
                    }
                    .bind(null, n));
            return i
        }
        ,
        r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return r.d(e, "a", e),
            e
        }
        ,
        r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        r.p = "/dist/",
        r(r.s = 28)
    }([function(t, e, r) {
        "use strict";
        var i;
        r.r(e),
        r.d(e, "Events", (function() {
            return i
        }
        )),
        function(t) {
            t.MEDIA_ATTACHING = "hlsMediaAttaching",
            t.MEDIA_ATTACHED = "hlsMediaAttached",
            t.MEDIA_DETACHING = "hlsMediaDetaching",
            t.MEDIA_DETACHED = "hlsMediaDetached",
            t.BUFFER_RESET = "hlsBufferReset",
            t.BUFFER_CODECS = "hlsBufferCodecs",
            t.BUFFER_CREATED = "hlsBufferCreated",
            t.BUFFER_APPENDING = "hlsBufferAppending",
            t.BUFFER_APPENDED = "hlsBufferAppended",
            t.BUFFER_EOS = "hlsBufferEos",
            t.BUFFER_FLUSHING = "hlsBufferFlushing",
            t.BUFFER_FLUSHED = "hlsBufferFlushed",
            t.MANIFEST_LOADING = "hlsManifestLoading",
            t.MANIFEST_LOADED = "hlsManifestLoaded",
            t.MANIFEST_PARSED = "hlsManifestParsed",
            t.LEVEL_SWITCHING = "hlsLevelSwitching",
            t.LEVEL_SWITCHED = "hlsLevelSwitched",
            t.LEVEL_LOADING = "hlsLevelLoading",
            t.LEVEL_LOADED = "hlsLevelLoaded",
            t.LEVEL_UPDATED = "hlsLevelUpdated",
            t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated",
            t.LEVELS_UPDATED = "hlsLevelsUpdated",
            t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated",
            t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching",
            t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched",
            t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading",
            t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded",
            t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated",
            t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared",
            t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch",
            t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading",
            t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded",
            t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed",
            t.CUES_PARSED = "hlsCuesParsed",
            t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound",
            t.INIT_PTS_FOUND = "hlsInitPtsFound",
            t.FRAG_LOADING = "hlsFragLoading",
            t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted",
            t.FRAG_LOADED = "hlsFragLoaded",
            t.FRAG_DECRYPTED = "hlsFragDecrypted",
            t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment",
            t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata",
            t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata",
            t.FRAG_PARSED = "hlsFragParsed",
            t.FRAG_BUFFERED = "hlsFragBuffered",
            t.FRAG_CHANGED = "hlsFragChanged",
            t.FPS_DROP = "hlsFpsDrop",
            t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping",
            t.ERROR = "hlsError",
            t.DESTROYING = "hlsDestroying",
            t.KEY_LOADING = "hlsKeyLoading",
            t.KEY_LOADED = "hlsKeyLoaded",
            t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached",
            t.BACK_BUFFER_REACHED = "hlsBackBufferReached"
        }(i || (i = {}))
    }
    , function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "enableLogs", (function() {
            return o
        }
        )),
        r.d(e, "logger", (function() {
            return l
        }
        ));
        var i = function() {}
          , n = {
            trace: i,
            debug: i,
            log: i,
            warn: i,
            info: i,
            error: i
        }
          , a = n;
        function s(t) {
            var e = self.console[t];
            return e ? e.bind(self.console, "[" + t + "] >") : i
        }
        function o(t) {
            if (self.console && !0 === t || "object" == typeof t) {
                !function(t) {
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        r[i - 1] = arguments[i];
                    r.forEach((function(e) {
                        a[e] = t[e] ? t[e].bind(t) : s(e)
                    }
                    ))
                }(t, "debug", "log", "info", "warn", "error");
                try {
                    a.log()
                } catch (t) {
                    a = n
                }
            } else
                a = n
        }
        var l = n
    }
    , function(t, e, r) {
        "use strict";
        var i, n;
        r.r(e),
        r.d(e, "ErrorTypes", (function() {
            return i
        }
        )),
        r.d(e, "ErrorDetails", (function() {
            return n
        }
        )),
        function(t) {
            t.NETWORK_ERROR = "networkError",
            t.MEDIA_ERROR = "mediaError",
            t.KEY_SYSTEM_ERROR = "keySystemError",
            t.MUX_ERROR = "muxError",
            t.OTHER_ERROR = "otherError"
        }(i || (i = {})),
        function(t) {
            t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys",
            t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess",
            t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession",
            t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed",
            t.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData",
            t.MANIFEST_LOAD_ERROR = "manifestLoadError",
            t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut",
            t.MANIFEST_PARSING_ERROR = "manifestParsingError",
            t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError",
            t.LEVEL_EMPTY_ERROR = "levelEmptyError",
            t.LEVEL_LOAD_ERROR = "levelLoadError",
            t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut",
            t.LEVEL_SWITCH_ERROR = "levelSwitchError",
            t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError",
            t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut",
            t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError",
            t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut",
            t.FRAG_LOAD_ERROR = "fragLoadError",
            t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut",
            t.FRAG_DECRYPT_ERROR = "fragDecryptError",
            t.FRAG_PARSING_ERROR = "fragParsingError",
            t.REMUX_ALLOC_ERROR = "remuxAllocError",
            t.KEY_LOAD_ERROR = "keyLoadError",
            t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut",
            t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError",
            t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError",
            t.BUFFER_APPEND_ERROR = "bufferAppendError",
            t.BUFFER_APPENDING_ERROR = "bufferAppendingError",
            t.BUFFER_STALLED_ERROR = "bufferStalledError",
            t.BUFFER_FULL_ERROR = "bufferFullError",
            t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole",
            t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall",
            t.INTERNAL_EXCEPTION = "internalException",
            t.INTERNAL_ABORTED = "aborted",
            t.UNKNOWN = "unknown"
        }(n || (n = {}))
    }
    , function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "isFiniteNumber", (function() {
            return i
        }
        )),
        r.d(e, "MAX_SAFE_INTEGER", (function() {
            return n
        }
        ));
        var i = Number.isFinite || function(t) {
            return "number" == typeof t && isFinite(t)
        }
          , n = Number.MAX_SAFE_INTEGER || 9007199254740991
    }
    , function(t, e, r) {
        "use strict";
        var i, n;
        r.d(e, "a", (function() {
            return i
        }
        )),
        r.d(e, "b", (function() {
            return n
        }
        )),
        function(t) {
            t.MANIFEST = "manifest",
            t.LEVEL = "level",
            t.AUDIO_TRACK = "audioTrack",
            t.SUBTITLE_TRACK = "subtitleTrack"
        }(i || (i = {})),
        function(t) {
            t.MAIN = "main",
            t.AUDIO = "audio",
            t.SUBTITLE = "subtitle"
        }(n || (n = {}))
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return l
        }
        )),
        r.d(e, "c", (function() {
            return g
        }
        )),
        r.d(e, "k", (function() {
            return v
        }
        )),
        r.d(e, "h", (function() {
            return p
        }
        )),
        r.d(e, "e", (function() {
            return m
        }
        )),
        r.d(e, "d", (function() {
            return E
        }
        )),
        r.d(e, "f", (function() {
            return T
        }
        )),
        r.d(e, "l", (function() {
            return A
        }
        )),
        r.d(e, "b", (function() {
            return b
        }
        )),
        r.d(e, "j", (function() {
            return S
        }
        )),
        r.d(e, "i", (function() {
            return R
        }
        )),
        r.d(e, "g", (function() {
            return L
        }
        ));
        var i = r(10)
          , n = r(7)
          , a = r(8)
          , s = Math.pow(2, 32) - 1
          , o = [].push
          , l = {
            video: 1,
            audio: 2,
            id3: 3,
            text: 4
        };
        function u(t) {
            return String.fromCharCode.apply(null, t)
        }
        function h(t, e) {
            var r = t[e] << 8 | t[e + 1];
            return r < 0 ? 65536 + r : r
        }
        function d(t, e) {
            var r = c(t, e);
            return r < 0 ? 4294967296 + r : r
        }
        function c(t, e) {
            return t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
        }
        function f(t, e, r) {
            t[e] = r >> 24,
            t[e + 1] = r >> 16 & 255,
            t[e + 2] = r >> 8 & 255,
            t[e + 3] = 255 & r
        }
        function g(t, e) {
            var r = [];
            if (!e.length)
                return r;
            for (var i = t.byteLength, n = 0; n < i; ) {
                var a = d(t, n)
                  , s = a > 1 ? n + a : i;
                if (u(t.subarray(n + 4, n + 8)) === e[0])
                    if (1 === e.length)
                        r.push(t.subarray(n + 8, s));
                    else {
                        var l = g(t.subarray(n + 8, s), e.slice(1));
                        l.length && o.apply(r, l)
                    }
                n = s
            }
            return r
        }
        function v(t) {
            var e = g(t, ["moov"])[0]
              , r = e ? e.length : null
              , i = g(t, ["sidx"]);
            if (!i || !i[0])
                return null;
            var n = []
              , a = i[0]
              , s = a[0]
              , o = 0 === s ? 8 : 16
              , l = d(a, o);
            o += 4;
            o += 0 === s ? 8 : 16,
            o += 2;
            var u = a.length + 0
              , c = h(a, o);
            o += 2;
            for (var f = 0; f < c; f++) {
                var v = o
                  , p = d(a, v);
                v += 4;
                var m = 2147483647 & p;
                if (1 === (2147483648 & p) >>> 31)
                    return console.warn("SIDX has hierarchical references (not supported)"),
                    null;
                var E = d(a, v);
                v += 4,
                n.push({
                    referenceSize: m,
                    subsegmentDuration: E,
                    info: {
                        duration: E / l,
                        start: u,
                        end: u + m - 1
                    }
                }),
                u += m,
                o = v += 4
            }
            return {
                earliestPresentationTime: 0,
                timescale: l,
                version: s,
                referencesCount: c,
                references: n,
                moovEndOffset: r
            }
        }
        function p(t) {
            for (var e = [], r = g(t, ["moov", "trak"]), i = 0; i < r.length; i++) {
                var a = r[i]
                  , s = g(a, ["tkhd"])[0];
                if (s) {
                    var o = s[0]
                      , l = 0 === o ? 12 : 20
                      , h = d(s, l)
                      , c = g(a, ["mdia", "mdhd"])[0];
                    if (c) {
                        var f = d(c, l = 0 === (o = c[0]) ? 12 : 20)
                          , v = g(a, ["mdia", "hdlr"])[0];
                        if (v) {
                            var p = u(v.subarray(8, 12))
                              , m = {
                                soun: n.ElementaryStreamTypes.AUDIO,
                                vide: n.ElementaryStreamTypes.VIDEO
                            }[p];
                            if (m) {
                                var E = g(a, ["mdia", "minf", "stbl", "stsd"])[0]
                                  , y = void 0;
                                E && (y = u(E.subarray(12, 16))),
                                e[h] = {
                                    timescale: f,
                                    type: m
                                },
                                e[m] = {
                                    timescale: f,
                                    id: h,
                                    codec: y
                                }
                            }
                        }
                    }
                }
            }
            return g(t, ["moov", "mvex", "trex"]).forEach((function(t) {
                var r = d(t, 4)
                  , i = e[r];
                i && (i.default = {
                    duration: d(t, 12),
                    flags: d(t, 20)
                })
            }
            )),
            e
        }
        function m(t, e) {
            return g(e, ["moof", "traf"]).reduce((function(e, r) {
                var i = g(r, ["tfdt"])[0]
                  , n = i[0]
                  , a = g(r, ["tfhd"]).reduce((function(e, r) {
                    var a = d(r, 4)
                      , s = t[a];
                    if (s) {
                        var o = d(i, 4);
                        1 === n && (o *= Math.pow(2, 32),
                        o += d(i, 8));
                        var l = o / (s.timescale || 9e4);
                        if (isFinite(l) && (null === e || l < e))
                            return l
                    }
                    return e
                }
                ), null);
                return null !== a && isFinite(a) && (null === e || a < e) ? a : e
            }
            ), null) || 0
        }
        function E(t, e) {
            for (var r = 0, i = 0, a = 0, s = g(t, ["moof", "traf"]), o = 0; o < s.length; o++) {
                var l = s[o]
                  , u = g(l, ["tfhd"])[0]
                  , h = e[d(u, 4)];
                if (h) {
                    var c = h.default
                      , f = d(u, 0) | (null == c ? void 0 : c.flags)
                      , p = null == c ? void 0 : c.duration;
                    8 & f && (p = d(u, 2 & f ? 12 : 8));
                    for (var m = h.timescale || 9e4, E = g(l, ["trun"]), T = 0; T < E.length; T++) {
                        if (!(r = y(E[T])) && p)
                            r = p * d(E[T], 4);
                        h.type === n.ElementaryStreamTypes.VIDEO ? i += r / m : h.type === n.ElementaryStreamTypes.AUDIO && (a += r / m)
                    }
                }
            }
            if (0 === i && 0 === a) {
                var A = v(t);
                if (null != A && A.references)
                    return A.references.reduce((function(t, e) {
                        return t + e.info.duration || 0
                    }
                    ), 0)
            }
            return i || a
        }
        function y(t) {
            var e = d(t, 0)
              , r = 8;
            1 & e && (r += 4),
            4 & e && (r += 4);
            for (var i = 0, n = d(t, 4), a = 0; a < n; a++) {
                if (256 & e)
                    i += d(t, r),
                    r += 4;
                512 & e && (r += 4),
                1024 & e && (r += 4),
                2048 & e && (r += 4)
            }
            return i
        }
        function T(t, e, r) {
            g(e, ["moof", "traf"]).forEach((function(e) {
                g(e, ["tfhd"]).forEach((function(i) {
                    var n = d(i, 4)
                      , a = t[n];
                    if (a) {
                        var o = a.timescale || 9e4;
                        g(e, ["tfdt"]).forEach((function(t) {
                            var e = t[0]
                              , i = d(t, 4);
                            if (0 === e)
                                f(t, 4, i - r * o);
                            else {
                                i *= Math.pow(2, 32),
                                i += d(t, 8),
                                i -= r * o,
                                i = Math.max(i, 0);
                                var n = Math.floor(i / (s + 1))
                                  , a = Math.floor(i % (s + 1));
                                f(t, 4, n),
                                f(t, 8, a)
                            }
                        }
                        ))
                    }
                }
                ))
            }
            ))
        }
        function A(t) {
            var e = {
                valid: null,
                remainder: null
            }
              , r = g(t, ["moof"]);
            if (!r)
                return e;
            if (r.length < 2)
                return e.remainder = t,
                e;
            var n = r[r.length - 1];
            return e.valid = Object(i.sliceUint8)(t, 0, n.byteOffset - 8),
            e.remainder = Object(i.sliceUint8)(t, n.byteOffset - 8),
            e
        }
        function b(t, e) {
            var r = new Uint8Array(t.length + e.length);
            return r.set(t),
            r.set(e, t.length),
            r
        }
        function S(t, e) {
            var r = []
              , i = e.samples
              , a = e.timescale
              , s = e.id
              , o = !1;
            return g(i, ["moof"]).map((function(l) {
                var u = l.byteOffset - 8;
                g(l, ["traf"]).map((function(l) {
                    var h = g(l, ["tfdt"]).map((function(t) {
                        var e = t[0]
                          , r = d(t, 4);
                        return 1 === e && (r *= Math.pow(2, 32),
                        r += d(t, 8)),
                        r / a
                    }
                    ))[0];
                    return void 0 !== h && (t = h),
                    g(l, ["tfhd"]).map((function(h) {
                        var f = d(h, 4)
                          , v = 16777215 & d(h, 0)
                          , p = 0
                          , m = 0 != (16 & v)
                          , E = 0
                          , y = 0 != (32 & v)
                          , T = 8;
                        f === s && (0 != (1 & v) && (T += 8),
                        0 != (2 & v) && (T += 4),
                        0 != (8 & v) && (p = d(h, T),
                        T += 4),
                        m && (E = d(h, T),
                        T += 4),
                        y && (T += 4),
                        "video" === e.type && (o = function(t) {
                            if (!t)
                                return !1;
                            var e = t.indexOf(".")
                              , r = e < 0 ? t : t.substring(0, e);
                            return "hvc1" === r || "hev1" === r || "dvh1" === r || "dvhe" === r
                        }(e.codec)),
                        g(l, ["trun"]).map((function(s) {
                            var l = s[0]
                              , h = 16777215 & d(s, 0)
                              , f = 0 != (1 & h)
                              , g = 0
                              , v = 0 != (4 & h)
                              , m = 0 != (256 & h)
                              , y = 0
                              , T = 0 != (512 & h)
                              , A = 0
                              , b = 0 != (1024 & h)
                              , S = 0 != (2048 & h)
                              , L = 0
                              , k = d(s, 4)
                              , C = 8;
                            f && (g = d(s, C),
                            C += 4),
                            v && (C += 4);
                            for (var _ = g + u, w = 0; w < k; w++) {
                                if (m ? (y = d(s, C),
                                C += 4) : y = p,
                                T ? (A = d(s, C),
                                C += 4) : A = E,
                                b && (C += 4),
                                S && (L = 0 === l ? d(s, C) : c(s, C),
                                C += 4),
                                e.type === n.ElementaryStreamTypes.VIDEO)
                                    for (var I = 0; I < A; ) {
                                        var O = d(i, _)
                                          , x = 31 & i[_ += 4];
                                        if (D(o, x))
                                            R(i.subarray(_, _ + O), t + L / a, r);
                                        _ += O,
                                        I += O + 4
                                    }
                                t += y / a
                            }
                        }
                        )))
                    }
                    ))
                }
                ))
            }
            )),
            r
        }
        function D(t, e) {
            return t ? 39 === e || 40 === e : 6 === e
        }
        function R(t, e, r) {
            var i = function(t) {
                var e = t.byteLength
                  , r = []
                  , i = 1;
                for (; i < e - 2; )
                    0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2),
                    i += 2) : i++;
                if (0 === r.length)
                    return t;
                var n = e - r.length
                  , a = new Uint8Array(n)
                  , s = 0;
                for (i = 0; i < n; s++,
                i++)
                    s === r[0] && (s++,
                    r.shift()),
                    a[i] = t[s];
                return a
            }(t)
              , n = 0;
            n++;
            for (var s = 0, o = 0, l = !1, u = 0; n < i.length; ) {
                s = 0;
                do {
                    if (n >= i.length)
                        break;
                    s += u = i[n++]
                } while (255 === u);
                o = 0;
                do {
                    if (n >= i.length)
                        break;
                    o += u = i[n++]
                } while (255 === u);
                var c = i.length - n;
                if (!l && 4 === s && n < i.length) {
                    if (l = !0,
                    181 === i[n++]) {
                        var f = h(i, n);
                        if (n += 2,
                        49 === f) {
                            var g = d(i, n);
                            if (n += 4,
                            1195456820 === g) {
                                var v = i[n++];
                                if (3 === v) {
                                    var p = i[n++]
                                      , m = 64 & p
                                      , E = m ? 2 + 3 * (31 & p) : 0
                                      , y = new Uint8Array(E);
                                    if (m) {
                                        y[0] = p;
                                        for (var T = 1; T < E; T++)
                                            y[T] = i[n++]
                                    }
                                    r.push({
                                        type: v,
                                        payloadType: s,
                                        pts: e,
                                        bytes: y
                                    })
                                }
                            }
                        }
                    }
                } else if (5 === s && o < c) {
                    if (l = !0,
                    o > 16) {
                        for (var A = [], b = 0; b < 16; b++) {
                            var S = i[n++].toString(16);
                            A.push(1 == S.length ? "0" + S : S),
                            3 !== b && 5 !== b && 7 !== b && 9 !== b || A.push("-")
                        }
                        for (var D = o - 16, R = new Uint8Array(D), L = 0; L < D; L++)
                            R[L] = i[n++];
                        r.push({
                            payloadType: s,
                            pts: e,
                            uuid: A.join(""),
                            userData: Object(a.f)(R),
                            userDataBytes: R
                        })
                    }
                } else if (o < c)
                    n += o;
                else if (o > c)
                    break
            }
        }
        function L(t) {
            var e = t[0]
              , r = ""
              , i = ""
              , n = 0
              , a = 0
              , s = 0
              , o = 0
              , l = 0
              , h = 0;
            if (0 === e) {
                for (; "\0" !== u(t.subarray(h, h + 1)); )
                    r += u(t.subarray(h, h + 1)),
                    h += 1;
                for (r += u(t.subarray(h, h + 1)),
                h += 1; "\0" !== u(t.subarray(h, h + 1)); )
                    i += u(t.subarray(h, h + 1)),
                    h += 1;
                i += u(t.subarray(h, h + 1)),
                h += 1,
                n = d(t, 12),
                a = d(t, 16),
                o = d(t, 20),
                l = d(t, 24),
                h = 28
            } else if (1 === e) {
                n = d(t, h += 4);
                var c = d(t, h += 4)
                  , f = d(t, h += 4);
                for (h += 4,
                s = Math.pow(2, 32) * c + f,
                Number.isSafeInteger(s) || (s = Number.MAX_SAFE_INTEGER,
                console.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),
                o = d(t, h),
                l = d(t, h += 4),
                h += 4; "\0" !== u(t.subarray(h, h + 1)); )
                    r += u(t.subarray(h, h + 1)),
                    h += 1;
                for (r += u(t.subarray(h, h + 1)),
                h += 1; "\0" !== u(t.subarray(h, h + 1)); )
                    i += u(t.subarray(h, h + 1)),
                    h += 1;
                i += u(t.subarray(h, h + 1)),
                h += 1
            }
            return {
                schemeIdUri: r,
                value: i,
                timeScale: n,
                presentationTime: s,
                presentationTimeDelta: a,
                eventDuration: o,
                id: l,
                payload: t.subarray(h, t.byteLength)
            }
        }
    }
    , function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "BufferHelper", (function() {
            return a
        }
        ));
        var i = r(1)
          , n = {
            length: 0,
            start: function() {
                return 0
            },
            end: function() {
                return 0
            }
        }
          , a = function() {
            function t() {}
            return t.isBuffered = function(e, r) {
                try {
                    if (e)
                        for (var i = t.getBuffered(e), n = 0; n < i.length; n++)
                            if (r >= i.start(n) && r <= i.end(n))
                                return !0
                } catch (t) {}
                return !1
            }
            ,
            t.bufferInfo = function(e, r, i) {
                try {
                    if (e) {
                        var n, a = t.getBuffered(e), s = [];
                        for (n = 0; n < a.length; n++)
                            s.push({
                                start: a.start(n),
                                end: a.end(n)
                            });
                        return this.bufferedInfo(s, r, i)
                    }
                } catch (t) {}
                return {
                    len: 0,
                    start: r,
                    end: r,
                    nextStart: void 0
                }
            }
            ,
            t.bufferedInfo = function(t, e, r) {
                e = Math.max(0, e),
                t.sort((function(t, e) {
                    var r = t.start - e.start;
                    return r || e.end - t.end
                }
                ));
                var i = [];
                if (r)
                    for (var n = 0; n < t.length; n++) {
                        var a = i.length;
                        if (a) {
                            var s = i[a - 1].end;
                            t[n].start - s < r ? t[n].end > s && (i[a - 1].end = t[n].end) : i.push(t[n])
                        } else
                            i.push(t[n])
                    }
                else
                    i = t;
                for (var o, l = 0, u = e, h = e, d = 0; d < i.length; d++) {
                    var c = i[d].start
                      , f = i[d].end;
                    if (e + r >= c && e < f)
                        u = c,
                        l = (h = f) - e;
                    else if (e + r < c) {
                        o = c;
                        break
                    }
                }
                return {
                    len: l,
                    start: u || 0,
                    end: h || 0,
                    nextStart: o
                }
            }
            ,
            t.getBuffered = function(t) {
                try {
                    return t.buffered
                } catch (t) {
                    return i.logger.log("failed to get media.buffered", t),
                    n
                }
            }
            ,
            t
        }()
    }
    , function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "ElementaryStreamTypes", (function() {
            return i
        }
        )),
        r.d(e, "BaseSegment", (function() {
            return f
        }
        )),
        r.d(e, "Fragment", (function() {
            return g
        }
        )),
        r.d(e, "Part", (function() {
            return v
        }
        ));
        var i, n = r(3), a = r(12), s = r(1), o = r(20), l = r(14);
        function u(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            h(t, e)
        }
        function h(t, e) {
            return (h = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function d(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function c(t, e, r) {
            return e && d(t.prototype, e),
            r && d(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        !function(t) {
            t.AUDIO = "audio",
            t.VIDEO = "video",
            t.AUDIOVIDEO = "audiovideo"
        }(i || (i = {}));
        var f = function() {
            function t(t) {
                var e;
                this._byteRange = null,
                this._url = null,
                this.baseurl = void 0,
                this.relurl = void 0,
                this.elementaryStreams = ((e = {})[i.AUDIO] = null,
                e[i.VIDEO] = null,
                e[i.AUDIOVIDEO] = null,
                e),
                this.baseurl = t
            }
            return t.prototype.setByteRange = function(t, e) {
                var r = t.split("@", 2)
                  , i = [];
                1 === r.length ? i[0] = e ? e.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]),
                i[1] = parseInt(r[0]) + i[0],
                this._byteRange = i
            }
            ,
            c(t, [{
                key: "byteRange",
                get: function() {
                    return this._byteRange ? this._byteRange : []
                }
            }, {
                key: "byteRangeStartOffset",
                get: function() {
                    return this.byteRange[0]
                }
            }, {
                key: "byteRangeEndOffset",
                get: function() {
                    return this.byteRange[1]
                }
            }, {
                key: "url",
                get: function() {
                    return !this._url && this.baseurl && this.relurl && (this._url = Object(a.buildAbsoluteURL)(this.baseurl, this.relurl, {
                        alwaysNormalize: !0
                    })),
                    this._url || ""
                },
                set: function(t) {
                    this._url = t
                }
            }]),
            t
        }()
          , g = function(t) {
            function e(e, r) {
                var i;
                return (i = t.call(this, r) || this)._decryptdata = null,
                i.rawProgramDateTime = null,
                i.programDateTime = null,
                i.tagList = [],
                i.duration = 0,
                i.sn = 0,
                i.levelkey = void 0,
                i.type = void 0,
                i.loader = null,
                i.level = -1,
                i.cc = 0,
                i.startPTS = void 0,
                i.endPTS = void 0,
                i.appendedPTS = void 0,
                i.startDTS = void 0,
                i.endDTS = void 0,
                i.start = 0,
                i.deltaPTS = void 0,
                i.maxStartPTS = void 0,
                i.minEndPTS = void 0,
                i.stats = new l.a,
                i.urlId = 0,
                i.data = void 0,
                i.bitrateTest = !1,
                i.title = null,
                i.initSegment = null,
                i.type = e,
                i
            }
            u(e, t);
            var r = e.prototype;
            return r.createInitializationVector = function(t) {
                for (var e = new Uint8Array(16), r = 12; r < 16; r++)
                    e[r] = t >> 8 * (15 - r) & 255;
                return e
            }
            ,
            r.setDecryptDataFromLevelKey = function(t, e) {
                var r = t;
                return "AES-128" === (null == t ? void 0 : t.method) && t.uri && !t.iv && ((r = o.a.fromURI(t.uri)).method = t.method,
                r.iv = this.createInitializationVector(e),
                r.keyFormat = "identity"),
                r
            }
            ,
            r.setElementaryStreamInfo = function(t, e, r, i, n, a) {
                void 0 === a && (a = !1);
                var s = this.elementaryStreams
                  , o = s[t];
                o ? (o.startPTS = Math.min(o.startPTS, e),
                o.endPTS = Math.max(o.endPTS, r),
                o.startDTS = Math.min(o.startDTS, i),
                o.endDTS = Math.max(o.endDTS, n)) : s[t] = {
                    startPTS: e,
                    endPTS: r,
                    startDTS: i,
                    endDTS: n,
                    partial: a
                }
            }
            ,
            r.clearElementaryStreamInfo = function() {
                var t = this.elementaryStreams;
                t[i.AUDIO] = null,
                t[i.VIDEO] = null,
                t[i.AUDIOVIDEO] = null
            }
            ,
            c(e, [{
                key: "decryptdata",
                get: function() {
                    if (!this.levelkey && !this._decryptdata)
                        return null;
                    if (!this._decryptdata && this.levelkey) {
                        var t = this.sn;
                        "number" != typeof t && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && s.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'),
                        t = 0),
                        this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t)
                    }
                    return this._decryptdata
                }
            }, {
                key: "end",
                get: function() {
                    return this.start + this.duration
                }
            }, {
                key: "endProgramDateTime",
                get: function() {
                    if (null === this.programDateTime)
                        return null;
                    if (!Object(n.isFiniteNumber)(this.programDateTime))
                        return null;
                    var t = Object(n.isFiniteNumber)(this.duration) ? this.duration : 0;
                    return this.programDateTime + 1e3 * t
                }
            }, {
                key: "encrypted",
                get: function() {
                    var t;
                    return !(null === (t = this.decryptdata) || void 0 === t || !t.keyFormat || !this.decryptdata.uri)
                }
            }]),
            e
        }(f)
          , v = function(t) {
            function e(e, r, i, n, a) {
                var s;
                (s = t.call(this, i) || this).fragOffset = 0,
                s.duration = 0,
                s.gap = !1,
                s.independent = !1,
                s.relurl = void 0,
                s.fragment = void 0,
                s.index = void 0,
                s.stats = new l.a,
                s.duration = e.decimalFloatingPoint("DURATION"),
                s.gap = e.bool("GAP"),
                s.independent = e.bool("INDEPENDENT"),
                s.relurl = e.enumeratedString("URI"),
                s.fragment = r,
                s.index = n;
                var o = e.enumeratedString("BYTERANGE");
                return o && s.setByteRange(o, a),
                a && (s.fragOffset = a.fragOffset + a.duration),
                s
            }
            return u(e, t),
            c(e, [{
                key: "start",
                get: function() {
                    return this.fragment.start + this.fragOffset
                }
            }, {
                key: "end",
                get: function() {
                    return this.start + this.duration
                }
            }, {
                key: "loaded",
                get: function() {
                    var t = this.elementaryStreams;
                    return !!(t.audio || t.video || t.audiovideo)
                }
            }]),
            e
        }(f)
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return s
        }
        )),
        r.d(e, "a", (function() {
            return l
        }
        )),
        r.d(e, "d", (function() {
            return u
        }
        )),
        r.d(e, "e", (function() {
            return h
        }
        )),
        r.d(e, "c", (function() {
            return c
        }
        )),
        r.d(e, "f", (function() {
            return E
        }
        ));
        var i, n = function(t, e) {
            return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
        }, a = function(t, e) {
            return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
        }, s = function(t, e) {
            for (var r = e, i = 0; n(t, e); ) {
                i += 10,
                i += o(t, e + 6),
                a(t, e + 10) && (i += 10),
                e += i
            }
            if (i > 0)
                return t.subarray(r, r + i)
        }, o = function(t, e) {
            var r = 0;
            return r = (127 & t[e]) << 21,
            r |= (127 & t[e + 1]) << 14,
            r |= (127 & t[e + 2]) << 7,
            r |= 127 & t[e + 3]
        }, l = function(t, e) {
            return n(t, e) && o(t, e + 6) + 10 <= t.length - e
        }, u = function(t) {
            for (var e = c(t), r = 0; r < e.length; r++) {
                var i = e[r];
                if (h(i))
                    return m(i)
            }
        }, h = function(t) {
            return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
        }, d = function(t) {
            var e = String.fromCharCode(t[0], t[1], t[2], t[3])
              , r = o(t, 4);
            return {
                type: e,
                size: r,
                data: t.subarray(10, 10 + r)
            }
        }, c = function(t) {
            for (var e = 0, r = []; n(t, e); ) {
                for (var i = o(t, e + 6), s = (e += 10) + i; e + 8 < s; ) {
                    var l = d(t.subarray(e))
                      , u = f(l);
                    u && r.push(u),
                    e += l.size + 10
                }
                a(t, e) && (e += 10)
            }
            return r
        }, f = function(t) {
            return "PRIV" === t.type ? g(t) : "W" === t.type[0] ? p(t) : v(t)
        }, g = function(t) {
            if (!(t.size < 2)) {
                var e = E(t.data, !0)
                  , r = new Uint8Array(t.data.subarray(e.length + 1));
                return {
                    key: t.type,
                    info: e,
                    data: r.buffer
                }
            }
        }, v = function(t) {
            if (!(t.size < 2)) {
                if ("TXXX" === t.type) {
                    var e = 1
                      , r = E(t.data.subarray(e), !0);
                    e += r.length + 1;
                    var i = E(t.data.subarray(e));
                    return {
                        key: t.type,
                        info: r,
                        data: i
                    }
                }
                var n = E(t.data.subarray(1));
                return {
                    key: t.type,
                    data: n
                }
            }
        }, p = function(t) {
            if ("WXXX" === t.type) {
                if (t.size < 2)
                    return;
                var e = 1
                  , r = E(t.data.subarray(e), !0);
                e += r.length + 1;
                var i = E(t.data.subarray(e));
                return {
                    key: t.type,
                    info: r,
                    data: i
                }
            }
            var n = E(t.data);
            return {
                key: t.type,
                data: n
            }
        }, m = function(t) {
            if (8 === t.data.byteLength) {
                var e = new Uint8Array(t.data)
                  , r = 1 & e[3]
                  , i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                return i /= 45,
                r && (i += 47721858.84),
                Math.round(i)
            }
        }, E = function(t, e) {
            void 0 === e && (e = !1);
            var r = y();
            if (r) {
                var i = r.decode(t);
                if (e) {
                    var n = i.indexOf("\0");
                    return -1 !== n ? i.substring(0, n) : i
                }
                return i.replace(/\0/g, "")
            }
            for (var a, s, o, l = t.length, u = "", h = 0; h < l; ) {
                if (0 === (a = t[h++]) && e)
                    return u;
                if (0 !== a && 3 !== a)
                    switch (a >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        u += String.fromCharCode(a);
                        break;
                    case 12:
                    case 13:
                        s = t[h++],
                        u += String.fromCharCode((31 & a) << 6 | 63 & s);
                        break;
                    case 14:
                        s = t[h++],
                        o = t[h++],
                        u += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | (63 & o) << 0)
                    }
            }
            return u
        };
        function y() {
            return i || void 0 === self.TextDecoder || (i = new self.TextDecoder("utf-8")),
            i
        }
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return n
        }
        )),
        r.d(e, "b", (function() {
            return a
        }
        )),
        r.d(e, "a", (function() {
            return s
        }
        ));
        function i(t, e, r, i) {
            void 0 === r && (r = 1),
            void 0 === i && (i = !1);
            var n = t * e * r;
            return i ? Math.round(n) : n
        }
        function n(t, e, r, n) {
            return void 0 === r && (r = 1),
            void 0 === n && (n = !1),
            i(t, e, 1 / r, n)
        }
        function a(t, e) {
            return void 0 === e && (e = !1),
            i(t, 1e3, 1 / 9e4, e)
        }
        function s(t, e) {
            return void 0 === e && (e = 1),
            i(t, 9e4, 1 / e)
        }
    }
    , function(t, e, r) {
        "use strict";
        var i = r(19);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.decrypto = function(t) {
            return i.g(i.v(0, i.d(["IwQAAgADOBQjDAACAAMABAAFAAYABwAIAAkACgALPAAfIQwlcyV0JXIlaSVuJWcsAi84ETg7JREMMAEDPAEfOQAbEREBBDwBHzkAGxERAQU8GRsREQEGPHsbEREBBzwCBAwlZiVyJW8lbSVDJWglYSVyJUMlbyVkJWUHEAU8YTEaARsREQEDPAAEDCVzJXAlbCVpJXQHEAcaARsREQEIPAAbEREBCEMBAwwlbCVlJW4lZyV0JWgkQCoCL8ERODkRAQk8AwQBAxAIJEAQBRoCGxERAQkQCTwBOxAGJxsREQEKPAIEDCVmJXIlbyVtJUMlaCVhJXIlQyVvJWQlZQcQCRoBGxERAQQMJXAldSVzJWgkEAoaAREBCCBDIBQBFAA8ATEbETMAFABFETilPQELAQQMJWolbyVpJW4kDBoBGxEREAswAQMcCQAAGxERDTA=", [7, 326, 191, 303]]), [function() {
                return void 0 === t ? void 0 : t
            }
            , function() {
                return "undefined" == typeof Array ? void 0 : Array
            }
            , function() {
                return "undefined" == typeof String ? void 0 : String
            }
            , function() {
                return "undefined" == typeof parseInt ? void 0 : parseInt
            }
            ])).call(this)
        }
        ,
        e.shiftUint8 = function(t) {
            return i.g(i.v(0, i.d(["IwQAAgADOL8zIwYAAgADAAQABQEDPAAEPAEfPgEbEREBBAEDDCVnJWUldCVJJW4ldCU4JDwAGgEbEREBBQEDDCVnJWUldCVJJW4ldCU4JAEDDCViJXkldCVlJUwlZSVuJWcldCVoJEA8AR0aARsREQEDDCVzJWUldCVJJW4ldCU4JDwAEAUaAhEBAwwlcyVlJXQlSSVuJXQlOCQBAwwlYiV5JXQlZSVMJWUlbiVnJXQlaCRAPAEdEAQaAhEQAzABAxwJAAAbERENMA==", []]), [function() {
                return "undefined" == typeof DataView ? void 0 : DataView
            }
            , function() {
                return void 0 === t ? void 0 : t
            }
            ])).call(this)
        }
        ,
        e.sliceUint8 = function(t, e, r) {
            return Uint8Array.prototype.slice ? t.slice(e, r) : new Uint8Array(Array.prototype.slice.call(t, e, r))
        }
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return lt
        }
        )),
        r.d(e, "d", (function() {
            return ht
        }
        )),
        r.d(e, "a", (function() {
            return dt
        }
        )),
        r.d(e, "b", (function() {
            return ct
        }
        ));
        var i = r(0)
          , n = r(2)
          , a = r(17)
          , s = r(3)
          , o = r(8);
        function l(t, e) {
            return void 0 === t && (t = ""),
            void 0 === e && (e = 9e4),
            {
                type: t,
                id: -1,
                pid: -1,
                inputTimeScale: e,
                sequenceNumber: -1,
                samples: [],
                dropped: 0
            }
        }
        var u = r(5)
          , h = r(10)
          , d = function() {
            function t() {
                this._audioTrack = void 0,
                this._id3Track = void 0,
                this.frameIndex = 0,
                this.cachedData = null,
                this.initPTS = null
            }
            var e = t.prototype;
            return e.resetInitSegment = function(t, e, r, i) {
                this._id3Track = {
                    type: "id3",
                    id: 3,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    dropped: 0
                }
            }
            ,
            e.resetTimeStamp = function() {}
            ,
            e.resetContiguity = function() {}
            ,
            e.canParse = function(t, e) {
                return !1
            }
            ,
            e.appendFrame = function(t, e, r) {}
            ,
            e.demux = function(t, e) {
                this.cachedData && (t = Object(u.b)(this.cachedData, t),
                this.cachedData = null);
                var r, i, n = o.b(t, 0), a = n ? n.length : 0, s = this._audioTrack, d = this._id3Track, f = n ? o.d(n) : void 0, g = t.length;
                for (0 !== this.frameIndex && null !== this.initPTS || (this.initPTS = c(f, e)),
                n && n.length > 0 && d.samples.push({
                    pts: this.initPTS,
                    dts: this.initPTS,
                    data: n
                }),
                i = this.initPTS; a < g; ) {
                    if (this.canParse(t, a)) {
                        var v = this.appendFrame(s, t, a);
                        v ? (this.frameIndex++,
                        i = v.sample.pts,
                        r = a += v.length) : a = g
                    } else
                        o.a(t, a) ? (n = o.b(t, a),
                        d.samples.push({
                            pts: i,
                            dts: i,
                            data: n
                        }),
                        r = a += n.length) : a++;
                    if (a === g && r !== g) {
                        var p = Object(h.sliceUint8)(t, r);
                        this.cachedData ? this.cachedData = Object(u.b)(this.cachedData, p) : this.cachedData = p
                    }
                }
                return {
                    audioTrack: s,
                    videoTrack: l(),
                    id3Track: d,
                    textTrack: l()
                }
            }
            ,
            e.demuxSampleAes = function(t, e, r) {
                return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
            }
            ,
            e.flush = function(t) {
                var e = this.cachedData;
                return e && (this.cachedData = null,
                this.demux(e, 0)),
                this.frameIndex = 0,
                {
                    audioTrack: this._audioTrack,
                    videoTrack: l(),
                    id3Track: this._id3Track,
                    textTrack: l()
                }
            }
            ,
            e.destroy = function() {}
            ,
            t
        }()
          , c = function(t, e) {
            return Object(s.isFiniteNumber)(t) ? 90 * t : 9e4 * e
        }
          , f = d
          , g = r(1);
        function v(t, e) {
            return 255 === t[e] && 240 == (246 & t[e + 1])
        }
        function p(t, e) {
            return 1 & t[e + 1] ? 7 : 9
        }
        function m(t, e) {
            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
        }
        function E(t, e) {
            return e + 1 < t.length && v(t, e)
        }
        function y(t, e) {
            if (E(t, e)) {
                var r = p(t, e);
                if (e + r >= t.length)
                    return !1;
                var i = m(t, e);
                if (i <= r)
                    return !1;
                var n = e + i;
                return n === t.length || E(t, n)
            }
            return !1
        }
        function T(t, e, r, a, s) {
            if (!t.samplerate) {
                var o = function(t, e, r, a) {
                    var s, o, l, u, h = navigator.userAgent.toLowerCase(), d = a, c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    s = 1 + ((192 & e[r + 2]) >>> 6);
                    var f = (60 & e[r + 2]) >>> 2;
                    if (!(f > c.length - 1))
                        return l = (1 & e[r + 2]) << 2,
                        l |= (192 & e[r + 3]) >>> 6,
                        g.logger.log("manifest codec:" + a + ", ADTS type:" + s + ", samplingIndex:" + f),
                        /firefox/i.test(h) ? f >= 6 ? (s = 5,
                        u = new Array(4),
                        o = f - 3) : (s = 2,
                        u = new Array(2),
                        o = f) : -1 !== h.indexOf("android") ? (s = 2,
                        u = new Array(2),
                        o = f) : (s = 5,
                        u = new Array(4),
                        a && (-1 !== a.indexOf("mp4a.40.29") || -1 !== a.indexOf("mp4a.40.5")) || !a && f >= 6 ? o = f - 3 : ((a && -1 !== a.indexOf("mp4a.40.2") && (f >= 6 && 1 === l || /vivaldi/i.test(h)) || !a && 1 === l) && (s = 2,
                        u = new Array(2)),
                        o = f)),
                        u[0] = s << 3,
                        u[0] |= (14 & f) >> 1,
                        u[1] |= (1 & f) << 7,
                        u[1] |= l << 3,
                        5 === s && (u[1] |= (14 & o) >> 1,
                        u[2] = (1 & o) << 7,
                        u[2] |= 8,
                        u[3] = 0),
                        {
                            config: u,
                            samplerate: c[f],
                            channelCount: l,
                            codec: "mp4a.40." + s,
                            manifestCodec: d
                        };
                    t.trigger(i.Events.ERROR, {
                        type: n.ErrorTypes.MEDIA_ERROR,
                        details: n.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "invalid ADTS sampling index:" + f
                    })
                }(e, r, a, s);
                if (!o)
                    return;
                t.config = o.config,
                t.samplerate = o.samplerate,
                t.channelCount = o.channelCount,
                t.codec = o.codec,
                t.manifestCodec = o.manifestCodec,
                g.logger.log("parsed codec:" + t.codec + ", rate:" + o.samplerate + ", channels:" + o.channelCount)
            }
        }
        function A(t) {
            return 9216e4 / t
        }
        function b(t, e, r, i, n) {
            var a = function(t, e, r, i, n) {
                var a = p(t, e)
                  , s = m(t, e);
                if ((s -= a) > 0)
                    return {
                        headerLength: a,
                        frameLength: s,
                        stamp: r + i * n
                    }
            }(e, r, i, n, A(t.samplerate));
            if (a) {
                var s, o = a.frameLength, l = a.headerLength, u = a.stamp, h = l + o, d = Math.max(0, r + h - e.length);
                d ? (s = new Uint8Array(h - l)).set(e.subarray(r + l, e.length), 0) : s = e.subarray(r + l, r + h);
                var c = {
                    unit: s,
                    pts: u
                };
                return d || t.samples.push(c),
                {
                    sample: c,
                    length: h,
                    missing: d
                }
            }
        }
        function S(t, e) {
            return (S = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var D = function(t) {
            var e, r;
            function i(e, r) {
                var i;
                return (i = t.call(this) || this).observer = void 0,
                i.config = void 0,
                i.observer = e,
                i.config = r,
                i
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            S(e, r);
            var n = i.prototype;
            return n.resetInitSegment = function(e, r, i, n) {
                t.prototype.resetInitSegment.call(this, e, r, i, n),
                this._audioTrack = {
                    container: "audio/adts",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    isAAC: !0,
                    samples: [],
                    manifestCodec: r,
                    duration: n,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            }
            ,
            i.probe = function(t) {
                if (!t)
                    return !1;
                for (var e = (o.b(t, 0) || []).length, r = t.length; e < r; e++)
                    if (y(t, e))
                        return g.logger.log("ADTS sync word found !"),
                        !0;
                return !1
            }
            ,
            n.canParse = function(t, e) {
                return function(t, e) {
                    return function(t, e) {
                        return e + 5 < t.length
                    }(t, e) && v(t, e) && m(t, e) <= t.length - e
                }(t, e)
            }
            ,
            n.appendFrame = function(t, e, r) {
                T(t, this.observer, e, r, t.manifestCodec);
                var i = b(t, e, r, this.initPTS, this.frameIndex);
                if (i && 0 === i.missing)
                    return i
            }
            ,
            i
        }(f);
        D.minProbeByteLength = 9;
        var R = D
          , L = /\/emsg[-/]ID3/i
          , k = function() {
            function t(t, e) {
                this.remainderData = null,
                this.timeOffset = 0,
                this.config = void 0,
                this.videoTrack = void 0,
                this.audioTrack = void 0,
                this.id3Track = void 0,
                this.txtTrack = void 0,
                this.config = e
            }
            var e = t.prototype;
            return e.resetTimeStamp = function() {}
            ,
            e.resetInitSegment = function(t, e, r, i) {
                var n = Object(u.h)(t)
                  , a = this.videoTrack = l("video", 1)
                  , s = this.audioTrack = l("audio", 1)
                  , o = this.txtTrack = l("text", 1);
                if (this.id3Track = l("id3", 1),
                this.timeOffset = 0,
                n.video) {
                    var h = n.video
                      , d = h.id
                      , c = h.timescale
                      , f = h.codec;
                    a.id = d,
                    a.timescale = o.timescale = c,
                    a.codec = f
                }
                if (n.audio) {
                    var g = n.audio
                      , v = g.id
                      , p = g.timescale
                      , m = g.codec;
                    s.id = v,
                    s.timescale = p,
                    s.codec = m
                }
                o.id = u.a.text,
                a.sampleDuration = 0,
                a.duration = s.duration = i
            }
            ,
            e.resetContiguity = function() {}
            ,
            t.probe = function(t) {
                return t = t.length > 16384 ? t.subarray(0, 16384) : t,
                Object(u.c)(t, ["moof"]).length > 0
            }
            ,
            e.demux = function(t, e) {
                this.timeOffset = e;
                var r = t
                  , i = this.videoTrack
                  , n = this.txtTrack;
                if (this.config.progressive) {
                    this.remainderData && (r = Object(u.b)(this.remainderData, t));
                    var a = Object(u.l)(r);
                    this.remainderData = a.remainder,
                    i.samples = a.valid || new Uint8Array
                } else
                    i.samples = r;
                var s = this.extractID3Track(i, e);
                return n.samples = Object(u.j)(e, i),
                {
                    videoTrack: i,
                    audioTrack: this.audioTrack,
                    id3Track: s,
                    textTrack: this.txtTrack
                }
            }
            ,
            e.flush = function() {
                var t = this.timeOffset
                  , e = this.videoTrack
                  , r = this.txtTrack;
                e.samples = this.remainderData || new Uint8Array,
                this.remainderData = null;
                var i = this.extractID3Track(e, this.timeOffset);
                return r.samples = Object(u.j)(t, e),
                {
                    videoTrack: e,
                    audioTrack: l(),
                    id3Track: i,
                    textTrack: l()
                }
            }
            ,
            e.extractID3Track = function(t, e) {
                var r = this.id3Track;
                if (t.samples.length) {
                    var i = Object(u.c)(t.samples, ["emsg"]);
                    i && i.forEach((function(t) {
                        var i = Object(u.g)(t);
                        if (L.test(i.schemeIdUri)) {
                            var n = Object(s.isFiniteNumber)(i.presentationTime) ? i.presentationTime / i.timeScale : e + i.presentationTimeDelta / i.timeScale
                              , a = i.payload;
                            r.samples.push({
                                data: a,
                                len: a.byteLength,
                                dts: n,
                                pts: n
                            })
                        }
                    }
                    ))
                }
                return r
            }
            ,
            e.demuxSampleAes = function(t, e, r) {
                return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
            }
            ,
            e.destroy = function() {}
            ,
            t
        }();
        k.minProbeByteLength = 1024;
        var C = k
          , _ = null
          , w = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]
          , I = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3]
          , O = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]]
          , x = [0, 1, 1, 4];
        function P(t, e, r, i, n) {
            if (!(r + 24 > e.length)) {
                var a = M(e, r);
                if (a && r + a.frameLength <= e.length) {
                    var s = i + n * (9e4 * a.samplesPerFrame / a.sampleRate)
                      , o = {
                        unit: e.subarray(r, r + a.frameLength),
                        pts: s,
                        dts: s
                    };
                    return t.config = [],
                    t.channelCount = a.channelCount,
                    t.samplerate = a.sampleRate,
                    t.samples.push(o),
                    {
                        sample: o,
                        length: a.frameLength,
                        missing: 0
                    }
                }
            }
        }
        function M(t, e) {
            var r = t[e + 1] >> 3 & 3
              , i = t[e + 1] >> 1 & 3
              , n = t[e + 2] >> 4 & 15
              , a = t[e + 2] >> 2 & 3;
            if (1 !== r && 0 !== n && 15 !== n && 3 !== a) {
                var s = t[e + 2] >> 1 & 1
                  , o = t[e + 3] >> 6
                  , l = 1e3 * w[14 * (3 === r ? 3 - i : 3 === i ? 3 : 4) + n - 1]
                  , u = I[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + a]
                  , h = 3 === o ? 1 : 2
                  , d = O[r][i]
                  , c = x[i]
                  , f = 8 * d * c
                  , g = Math.floor(d * l / u + s) * c;
                if (null === _) {
                    var v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    _ = v ? parseInt(v[1]) : 0
                }
                return !!_ && _ <= 87 && 2 === i && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]),
                {
                    sampleRate: u,
                    channelCount: h,
                    frameLength: g,
                    samplesPerFrame: f
                }
            }
        }
        function F(t, e) {
            return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
        }
        function B(t, e) {
            return e + 1 < t.length && F(t, e)
        }
        function U(t, e) {
            if (e + 1 < t.length && F(t, e)) {
                var r = M(t, e)
                  , i = 4;
                null != r && r.frameLength && (i = r.frameLength);
                var n = e + i;
                return n === t.length || B(t, n)
            }
            return !1
        }
        var N = function() {
            function t(t) {
                this.data = void 0,
                this.bytesAvailable = void 0,
                this.word = void 0,
                this.bitsAvailable = void 0,
                this.data = t,
                this.bytesAvailable = t.byteLength,
                this.word = 0,
                this.bitsAvailable = 0
            }
            var e = t.prototype;
            return e.loadWord = function() {
                var t = this.data
                  , e = this.bytesAvailable
                  , r = t.byteLength - e
                  , i = new Uint8Array(4)
                  , n = Math.min(4, e);
                if (0 === n)
                    throw new Error("no bytes available");
                i.set(t.subarray(r, r + n)),
                this.word = new DataView(i.buffer).getUint32(0),
                this.bitsAvailable = 8 * n,
                this.bytesAvailable -= n
            }
            ,
            e.skipBits = function(t) {
                var e;
                this.bitsAvailable > t ? (this.word <<= t,
                this.bitsAvailable -= t) : (t -= this.bitsAvailable,
                t -= (e = t >> 3) >> 3,
                this.bytesAvailable -= e,
                this.loadWord(),
                this.word <<= t,
                this.bitsAvailable -= t)
            }
            ,
            e.readBits = function(t) {
                var e = Math.min(this.bitsAvailable, t)
                  , r = this.word >>> 32 - e;
                return t > 32 && g.logger.error("Cannot read more than 32 bits at a time"),
                this.bitsAvailable -= e,
                this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(),
                (e = t - e) > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
            }
            ,
            e.skipLZ = function() {
                var t;
                for (t = 0; t < this.bitsAvailable; ++t)
                    if (0 != (this.word & 2147483648 >>> t))
                        return this.word <<= t,
                        this.bitsAvailable -= t,
                        t;
                return this.loadWord(),
                t + this.skipLZ()
            }
            ,
            e.skipUEG = function() {
                this.skipBits(1 + this.skipLZ())
            }
            ,
            e.skipEG = function() {
                this.skipBits(1 + this.skipLZ())
            }
            ,
            e.readUEG = function() {
                var t = this.skipLZ();
                return this.readBits(t + 1) - 1
            }
            ,
            e.readEG = function() {
                var t = this.readUEG();
                return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
            }
            ,
            e.readBoolean = function() {
                return 1 === this.readBits(1)
            }
            ,
            e.readUByte = function() {
                return this.readBits(8)
            }
            ,
            e.readUShort = function() {
                return this.readBits(16)
            }
            ,
            e.readUInt = function() {
                return this.readBits(32)
            }
            ,
            e.skipScalingList = function(t) {
                for (var e = 8, r = 8, i = 0; i < t; i++)
                    0 !== r && (r = (e + this.readEG() + 256) % 256),
                    e = 0 === r ? e : r
            }
            ,
            e.readSPS = function() {
                var t, e, r, i = 0, n = 0, a = 0, s = 0, o = this.readUByte.bind(this), l = this.readBits.bind(this), u = this.readUEG.bind(this), h = this.readBoolean.bind(this), d = this.skipBits.bind(this), c = this.skipEG.bind(this), f = this.skipUEG.bind(this), g = this.skipScalingList.bind(this);
                o();
                var v = o();
                if (l(5),
                d(3),
                o(),
                f(),
                100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
                    var p = u();
                    if (3 === p && d(1),
                    f(),
                    f(),
                    d(1),
                    h())
                        for (e = 3 !== p ? 8 : 12,
                        r = 0; r < e; r++)
                            h() && g(r < 6 ? 16 : 64)
                }
                f();
                var m = u();
                if (0 === m)
                    u();
                else if (1 === m)
                    for (d(1),
                    c(),
                    c(),
                    t = u(),
                    r = 0; r < t; r++)
                        c();
                f(),
                d(1);
                var E = u()
                  , y = u()
                  , T = l(1);
                0 === T && d(1),
                d(1),
                h() && (i = u(),
                n = u(),
                a = u(),
                s = u());
                var A = [1, 1];
                if (h() && h())
                    switch (o()) {
                    case 1:
                        A = [1, 1];
                        break;
                    case 2:
                        A = [12, 11];
                        break;
                    case 3:
                        A = [10, 11];
                        break;
                    case 4:
                        A = [16, 11];
                        break;
                    case 5:
                        A = [40, 33];
                        break;
                    case 6:
                        A = [24, 11];
                        break;
                    case 7:
                        A = [20, 11];
                        break;
                    case 8:
                        A = [32, 11];
                        break;
                    case 9:
                        A = [80, 33];
                        break;
                    case 10:
                        A = [18, 11];
                        break;
                    case 11:
                        A = [15, 11];
                        break;
                    case 12:
                        A = [64, 33];
                        break;
                    case 13:
                        A = [160, 99];
                        break;
                    case 14:
                        A = [4, 3];
                        break;
                    case 15:
                        A = [3, 2];
                        break;
                    case 16:
                        A = [2, 1];
                        break;
                    case 255:
                        A = [o() << 8 | o(), o() << 8 | o()]
                    }
                return {
                    width: Math.ceil(16 * (E + 1) - 2 * i - 2 * n),
                    height: (2 - T) * (y + 1) * 16 - (T ? 2 : 4) * (a + s),
                    pixelRatio: A
                }
            }
            ,
            e.readSliceType = function() {
                return this.readUByte(),
                this.readUEG(),
                this.readUEG()
            }
            ,
            t
        }()
          , V = function() {
            function t(t, e, r) {
                this.keyData = void 0,
                this.decrypter = void 0,
                this.keyData = r,
                this.decrypter = new a.a(t,e,{
                    removePKCS7Padding: !1
                })
            }
            var e = t.prototype;
            return e.decryptBuffer = function(t, e) {
                this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer, e)
            }
            ,
            e.decryptAacSample = function(t, e, r, i) {
                var n = t[e].unit;
                if (!(n.length <= 16)) {
                    var a = n.subarray(16, n.length - n.length % 16)
                      , s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length)
                      , o = this;
                    this.decryptBuffer(s, (function(a) {
                        var s = new Uint8Array(a);
                        n.set(s, 16),
                        i || o.decryptAacSamples(t, e + 1, r)
                    }
                    ))
                }
            }
            ,
            e.decryptAacSamples = function(t, e, r) {
                for (; ; e++) {
                    if (e >= t.length)
                        return void r();
                    if (!(t[e].unit.length < 32)) {
                        var i = this.decrypter.isSync();
                        if (this.decryptAacSample(t, e, r, i),
                        !i)
                            return
                    }
                }
            }
            ,
            e.getAvcEncryptedData = function(t) {
                for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, n = 32; n < t.length - 16; n += 160,
                i += 16)
                    r.set(t.subarray(n, n + 16), i);
                return r
            }
            ,
            e.getAvcDecryptedUnit = function(t, e) {
                for (var r = new Uint8Array(e), i = 0, n = 32; n < t.length - 16; n += 160,
                i += 16)
                    t.set(r.subarray(i, i + 16), n);
                return t
            }
            ,
            e.decryptAvcSample = function(t, e, r, i, n, a) {
                var s = Q(n.data)
                  , o = this.getAvcEncryptedData(s)
                  , l = this;
                this.decryptBuffer(o.buffer, (function(o) {
                    n.data = l.getAvcDecryptedUnit(s, o),
                    a || l.decryptAvcSamples(t, e, r + 1, i)
                }
                ))
            }
            ,
            e.decryptAvcSamples = function(t, e, r, i) {
                if (t instanceof Uint8Array)
                    throw new Error("Cannot decrypt samples of type Uint8Array");
                for (; ; e++,
                r = 0) {
                    if (e >= t.length)
                        return void i();
                    for (var n = t[e].units; !(r >= n.length); r++) {
                        var a = n[r];
                        if (!(a.data.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                            var s = this.decrypter.isSync();
                            if (this.decryptAvcSample(t, e, r, i, a, s),
                            !s)
                                return
                        }
                    }
                }
            }
            ,
            t
        }()
          , G = function() {
            function t(t, e, r) {
                this.observer = void 0,
                this.config = void 0,
                this.typeSupported = void 0,
                this.sampleAes = null,
                this.pmtParsed = !1,
                this.audioCodec = void 0,
                this.videoCodec = void 0,
                this._duration = 0,
                this._pmtId = -1,
                this._avcTrack = void 0,
                this._audioTrack = void 0,
                this._id3Track = void 0,
                this._txtTrack = void 0,
                this.aacOverFlow = null,
                this.avcSample = null,
                this.remainderData = null,
                this.observer = t,
                this.config = e,
                this.typeSupported = r
            }
            t.probe = function(e) {
                var r = t.syncOffset(e);
                return !(r < 0) && (r && g.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"),
                !0)
            }
            ,
            t.syncOffset = function(t) {
                for (var e = Math.min(1e3, t.length - 564), r = 0; r < e; ) {
                    if (71 === t[r] && 71 === t[r + 188] && 71 === t[r + 376])
                        return r;
                    r++
                }
                return -1
            }
            ,
            t.createTrack = function(t, e) {
                return {
                    container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                    type: t,
                    id: u.a[t],
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    dropped: 0,
                    duration: "audio" === t ? e : void 0
                }
            }
            ;
            var e = t.prototype;
            return e.resetInitSegment = function(e, r, i, n) {
                this.pmtParsed = !1,
                this._pmtId = -1,
                this._avcTrack = t.createTrack("video"),
                this._audioTrack = t.createTrack("audio", n),
                this._id3Track = t.createTrack("id3"),
                this._txtTrack = t.createTrack("text"),
                this._audioTrack.isAAC = !0,
                this.aacOverFlow = null,
                this.avcSample = null,
                this.audioCodec = r,
                this.videoCodec = i,
                this._duration = n
            }
            ,
            e.resetTimeStamp = function() {}
            ,
            e.resetContiguity = function() {
                var t = this._audioTrack
                  , e = this._avcTrack
                  , r = this._id3Track;
                t && (t.pesData = null),
                e && (e.pesData = null),
                r && (r.pesData = null),
                this.aacOverFlow = null
            }
            ,
            e.demux = function(e, r, a, s) {
                var o;
                void 0 === a && (a = !1),
                void 0 === s && (s = !1),
                a || (this.sampleAes = null);
                var l = this._avcTrack
                  , h = this._audioTrack
                  , d = this._id3Track
                  , c = this._txtTrack
                  , f = l.pid
                  , v = l.pesData
                  , p = h.pid
                  , m = d.pid
                  , E = h.pesData
                  , y = d.pesData
                  , T = !1
                  , A = this.pmtParsed
                  , b = this._pmtId
                  , S = e.length;
                if (this.remainderData && (S = (e = Object(u.b)(this.remainderData, e)).length,
                this.remainderData = null),
                S < 188 && !s)
                    return this.remainderData = e,
                    {
                        audioTrack: h,
                        videoTrack: l,
                        id3Track: d,
                        textTrack: c
                    };
                var D = Math.max(0, t.syncOffset(e));
                (S -= (S + D) % 188) < e.byteLength && !s && (this.remainderData = new Uint8Array(e.buffer,S,e.buffer.byteLength - S));
                for (var R = 0, L = D; L < S; L += 188)
                    if (71 === e[L]) {
                        var k = !!(64 & e[L + 1])
                          , C = ((31 & e[L + 1]) << 8) + e[L + 2]
                          , _ = void 0;
                        if ((48 & e[L + 3]) >> 4 > 1) {
                            if ((_ = L + 5 + e[L + 4]) === L + 188)
                                continue
                        } else
                            _ = L + 4;
                        switch (C) {
                        case f:
                            k && (v && (o = J(v)) && this.parseAVCPES(l, c, o, !1),
                            v = {
                                data: [],
                                size: 0
                            }),
                            v && (v.data.push(e.subarray(_, L + 188)),
                            v.size += L + 188 - _);
                            break;
                        case p:
                            k && (E && (o = J(E)) && (h.isAAC ? this.parseAACPES(h, o) : this.parseMPEGPES(h, o)),
                            E = {
                                data: [],
                                size: 0
                            }),
                            E && (E.data.push(e.subarray(_, L + 188)),
                            E.size += L + 188 - _);
                            break;
                        case m:
                            k && (y && (o = J(y)) && this.parseID3PES(d, o),
                            y = {
                                data: [],
                                size: 0
                            }),
                            y && (y.data.push(e.subarray(_, L + 188)),
                            y.size += L + 188 - _);
                            break;
                        case 0:
                            k && (_ += e[_] + 1),
                            b = this._pmtId = K(e, _);
                            break;
                        case b:
                            k && (_ += e[_] + 1);
                            var w = H(e, _, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, a);
                            (f = w.avc) > 0 && (l.pid = f),
                            (p = w.audio) > 0 && (h.pid = p,
                            h.isAAC = w.isAAC),
                            (m = w.id3) > 0 && (d.pid = m),
                            T && !A && (g.logger.log("reparse from beginning"),
                            T = !1,
                            L = D - 188),
                            A = this.pmtParsed = !0;
                            break;
                        case 17:
                        case 8191:
                            break;
                        default:
                            T = !0
                        }
                    } else
                        R++;
                R > 0 && this.observer.emit(i.Events.ERROR, i.Events.ERROR, {
                    type: n.ErrorTypes.MEDIA_ERROR,
                    details: n.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason: "Found " + R + " TS packet/s that do not start with 0x47"
                }),
                l.pesData = v,
                h.pesData = E,
                d.pesData = y;
                var I = {
                    audioTrack: h,
                    videoTrack: l,
                    id3Track: d,
                    textTrack: c
                };
                return s && this.extractRemainingSamples(I),
                I
            }
            ,
            e.flush = function() {
                var t, e = this.remainderData;
                return this.remainderData = null,
                t = e ? this.demux(e, -1, !1, !0) : {
                    videoTrack: this._avcTrack,
                    audioTrack: this._audioTrack,
                    id3Track: this._id3Track,
                    textTrack: this._txtTrack
                },
                this.extractRemainingSamples(t),
                this.sampleAes ? this.decrypt(t, this.sampleAes) : t
            }
            ,
            e.extractRemainingSamples = function(t) {
                var e, r = t.audioTrack, i = t.videoTrack, n = t.id3Track, a = t.textTrack, s = i.pesData, o = r.pesData, l = n.pesData;
                s && (e = J(s)) ? (this.parseAVCPES(i, a, e, !0),
                i.pesData = null) : i.pesData = s,
                o && (e = J(o)) ? (r.isAAC ? this.parseAACPES(r, e) : this.parseMPEGPES(r, e),
                r.pesData = null) : (null != o && o.size && g.logger.log("last AAC PES packet truncated,might overlap between fragments"),
                r.pesData = o),
                l && (e = J(l)) ? (this.parseID3PES(n, e),
                n.pesData = null) : n.pesData = l
            }
            ,
            e.demuxSampleAes = function(t, e, r) {
                var i = this.demux(t, r, !0, !this.config.progressive)
                  , n = this.sampleAes = new V(this.observer,this.config,e);
                return this.decrypt(i, n)
            }
            ,
            e.decrypt = function(t, e) {
                return new Promise((function(r) {
                    var i = t.audioTrack
                      , n = t.videoTrack;
                    i.samples && i.isAAC ? e.decryptAacSamples(i.samples, 0, (function() {
                        n.samples ? e.decryptAvcSamples(n.samples, 0, 0, (function() {
                            r(t)
                        }
                        )) : r(t)
                    }
                    )) : n.samples && e.decryptAvcSamples(n.samples, 0, 0, (function() {
                        r(t)
                    }
                    ))
                }
                ))
            }
            ,
            e.destroy = function() {
                this._duration = 0
            }
            ,
            e.parseAVCPES = function(t, e, r, i) {
                var n, a = this, s = this.parseAVCNALu(t, r.data), o = this.avcSample, l = !1;
                r.data = null,
                o && s.length && !t.audFound && (W(o, t),
                o = this.avcSample = j(!1, r.pts, r.dts, "")),
                s.forEach((function(i) {
                    switch (i.type) {
                    case 1:
                        n = !0,
                        o || (o = a.avcSample = j(!0, r.pts, r.dts, "")),
                        o.frame = !0;
                        var s = i.data;
                        if (l && s.length > 4) {
                            var h = new N(s).readSliceType();
                            2 !== h && 4 !== h && 7 !== h && 9 !== h || (o.key = !0)
                        }
                        break;
                    case 5:
                        n = !0,
                        o || (o = a.avcSample = j(!0, r.pts, r.dts, "")),
                        o.key = !0,
                        o.frame = !0;
                        break;
                    case 6:
                        n = !0,
                        Object(u.i)(Q(i.data), r.pts, e.samples);
                        break;
                    case 7:
                        if (n = !0,
                        l = !0,
                        !t.sps) {
                            var d = new N(i.data).readSPS();
                            t.width = d.width,
                            t.height = d.height,
                            t.pixelRatio = d.pixelRatio,
                            t.sps = [i.data],
                            t.duration = a._duration;
                            for (var c = i.data.subarray(1, 4), f = "avc1.", g = 0; g < 3; g++) {
                                var v = c[g].toString(16);
                                v.length < 2 && (v = "0" + v),
                                f += v
                            }
                            t.codec = f
                        }
                        break;
                    case 8:
                        n = !0,
                        t.pps || (t.pps = [i.data]);
                        break;
                    case 9:
                        n = !1,
                        t.audFound = !0,
                        o && W(o, t),
                        o = a.avcSample = j(!1, r.pts, r.dts, "");
                        break;
                    case 12:
                        n = !1;
                        break;
                    default:
                        n = !1,
                        o && (o.debug += "unknown NAL " + i.type + " ")
                    }
                    o && n && o.units.push(i)
                }
                )),
                i && o && (W(o, t),
                this.avcSample = null)
            }
            ,
            e.getLastNalUnit = function(t) {
                var e, r, i = this.avcSample;
                if (i && 0 !== i.units.length || (i = t[t.length - 1]),
                null !== (e = i) && void 0 !== e && e.units) {
                    var n = i.units;
                    r = n[n.length - 1]
                }
                return r
            }
            ,
            e.parseAVCNALu = function(t, e) {
                var r, i, n = e.byteLength, a = t.naluState || 0, s = a, o = [], l = 0, u = -1, h = 0;
                for (-1 === a && (u = 0,
                h = 31 & e[0],
                a = 0,
                l = 1); l < n; )
                    if (r = e[l++],
                    a)
                        if (1 !== a)
                            if (r)
                                if (1 === r) {
                                    if (u >= 0) {
                                        var d = {
                                            data: e.subarray(u, l - a - 1),
                                            type: h
                                        };
                                        o.push(d)
                                    } else {
                                        var c = this.getLastNalUnit(t.samples);
                                        if (c && (s && l <= 4 - s && c.state && (c.data = c.data.subarray(0, c.data.byteLength - s)),
                                        (i = l - a - 1) > 0)) {
                                            var f = new Uint8Array(c.data.byteLength + i);
                                            f.set(c.data, 0),
                                            f.set(e.subarray(0, i), c.data.byteLength),
                                            c.data = f,
                                            c.state = 0
                                        }
                                    }
                                    l < n ? (u = l,
                                    h = 31 & e[l],
                                    a = 0) : a = -1
                                } else
                                    a = 0;
                            else
                                a = 3;
                        else
                            a = r ? 0 : 2;
                    else
                        a = r ? 0 : 1;
                if (u >= 0 && a >= 0) {
                    var g = {
                        data: e.subarray(u, n),
                        type: h,
                        state: a
                    };
                    o.push(g)
                }
                if (0 === o.length) {
                    var v = this.getLastNalUnit(t.samples);
                    if (v) {
                        var p = new Uint8Array(v.data.byteLength + e.byteLength);
                        p.set(v.data, 0),
                        p.set(e, v.data.byteLength),
                        v.data = p
                    }
                }
                return t.naluState = a,
                o
            }
            ,
            e.parseAACPES = function(t, e) {
                var r, a, s, o, l, u = 0, h = this.aacOverFlow, d = e.data;
                if (h) {
                    this.aacOverFlow = null;
                    var c = h.sample.unit.byteLength
                      , f = Math.min(h.missing, c)
                      , v = c - f;
                    h.sample.unit.set(d.subarray(0, f), v),
                    t.samples.push(h.sample),
                    u = h.missing
                }
                for (r = u,
                a = d.length; r < a - 1 && !E(d, r); r++)
                    ;
                if (r !== u && (r < a - 1 ? (s = "AAC PES did not start with ADTS header,offset:" + r,
                o = !1) : (s = "no ADTS header found in AAC PES",
                o = !0),
                g.logger.warn("parsing error:" + s),
                this.observer.emit(i.Events.ERROR, i.Events.ERROR, {
                    type: n.ErrorTypes.MEDIA_ERROR,
                    details: n.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: o,
                    reason: s
                }),
                o))
                    return;
                if (T(t, this.observer, d, r, this.audioCodec),
                void 0 !== e.pts)
                    l = e.pts;
                else {
                    if (!h)
                        return void g.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
                    var p = A(t.samplerate);
                    l = h.sample.pts + p
                }
                for (var m = 0; r < a; ) {
                    if (E(d, r)) {
                        if (r + 5 < a) {
                            var y = b(t, d, r, l, m);
                            if (y) {
                                if (!y.missing) {
                                    r += y.length,
                                    m++;
                                    continue
                                }
                                this.aacOverFlow = y
                            }
                        }
                        break
                    }
                    r++
                }
            }
            ,
            e.parseMPEGPES = function(t, e) {
                var r = e.data
                  , i = r.length
                  , n = 0
                  , a = 0
                  , s = e.pts;
                if (void 0 !== s)
                    for (; a < i; )
                        if (B(r, a)) {
                            var o = P(t, r, a, s, n);
                            if (!o)
                                break;
                            a += o.length,
                            n++
                        } else
                            a++;
                else
                    g.logger.warn("[tsdemuxer]: MPEG PES unknown PTS")
            }
            ,
            e.parseID3PES = function(t, e) {
                void 0 !== e.pts ? t.samples.push(e) : g.logger.warn("[tsdemuxer]: ID3 PES unknown PTS")
            }
            ,
            t
        }();
        function j(t, e, r, i) {
            return {
                key: t,
                frame: !1,
                pts: e,
                dts: r,
                units: [],
                debug: i,
                length: 0
            }
        }
        function K(t, e) {
            return (31 & t[e + 10]) << 8 | t[e + 11]
        }
        function H(t, e, r, i) {
            var n = {
                audio: -1,
                avc: -1,
                id3: -1,
                isAAC: !0
            }
              , a = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
            for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < a; ) {
                var s = (31 & t[e + 1]) << 8 | t[e + 2];
                switch (t[e]) {
                case 207:
                    if (!i) {
                        g.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                        break
                    }
                case 15:
                    -1 === n.audio && (n.audio = s);
                    break;
                case 21:
                    -1 === n.id3 && (n.id3 = s);
                    break;
                case 219:
                    if (!i) {
                        g.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                        break
                    }
                case 27:
                    -1 === n.avc && (n.avc = s);
                    break;
                case 3:
                case 4:
                    r ? -1 === n.audio && (n.audio = s,
                    n.isAAC = !1) : g.logger.log("MPEG audio found, not supported in this browser");
                    break;
                case 36:
                    g.logger.warn("Unsupported HEVC stream type found")
                }
                e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
            }
            return n
        }
        function J(t) {
            var e, r, i, n, a, s = 0, o = t.data;
            if (!t || 0 === t.size)
                return null;
            for (; o[0].length < 19 && o.length > 1; ) {
                var l = new Uint8Array(o[0].length + o[1].length);
                l.set(o[0]),
                l.set(o[1], o[0].length),
                o[0] = l,
                o.splice(1, 1)
            }
            if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                if ((r = (e[4] << 8) + e[5]) && r > t.size - 6)
                    return null;
                var u = e[7];
                192 & u && (n = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2,
                64 & u ? n - (a = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5 && (g.logger.warn(Math.round((n - a) / 9e4) + "s delta between PTS and DTS, align them"),
                n = a) : a = n);
                var h = (i = e[8]) + 9;
                if (t.size <= h)
                    return null;
                t.size -= h;
                for (var d = new Uint8Array(t.size), c = 0, f = o.length; c < f; c++) {
                    var v = (e = o[c]).byteLength;
                    if (h) {
                        if (h > v) {
                            h -= v;
                            continue
                        }
                        e = e.subarray(h),
                        v -= h,
                        h = 0
                    }
                    d.set(e, s),
                    s += v
                }
                return r && (r -= i + 3),
                {
                    data: d,
                    pts: n,
                    dts: a,
                    len: r
                }
            }
            return null
        }
        function W(t, e) {
            if (t.units.length && t.frame) {
                if (void 0 === t.pts) {
                    var r = e.samples
                      , i = r.length;
                    if (!i)
                        return void e.dropped++;
                    var n = r[i - 1];
                    t.pts = n.pts,
                    t.dts = n.dts
                }
                e.samples.push(t)
            }
            t.debug.length && g.logger.log(t.pts + "/" + t.dts + ":" + t.debug)
        }
        function Q(t) {
            for (var e = t.byteLength, r = [], i = 1; i < e - 2; )
                0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2),
                i += 2) : i++;
            if (0 === r.length)
                return t;
            var n = e - r.length
              , a = new Uint8Array(n)
              , s = 0;
            for (i = 0; i < n; s++,
            i++)
                s === r[0] && (s++,
                r.shift()),
                a[i] = t[s];
            return a
        }
        G.minProbeByteLength = 188;
        var X = G;
        function Y(t, e) {
            return (Y = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var q = function(t) {
            var e, r;
            function i() {
                return t.apply(this, arguments) || this
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            Y(e, r);
            var n = i.prototype;
            return n.resetInitSegment = function(e, r, i, n) {
                t.prototype.resetInitSegment.call(this, e, r, i, n),
                this._audioTrack = {
                    container: "audio/mpeg",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    isAAC: !1,
                    samples: [],
                    manifestCodec: r,
                    duration: n,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            }
            ,
            i.probe = function(t) {
                if (!t)
                    return !1;
                for (var e = (o.b(t, 0) || []).length, r = t.length; e < r; e++)
                    if (U(t, e))
                        return g.logger.log("MPEG Audio sync word found !"),
                        !0;
                return !1
            }
            ,
            n.canParse = function(t, e) {
                return function(t, e) {
                    return F(t, e) && 4 <= t.length - e
                }(t, e)
            }
            ,
            n.appendFrame = function(t, e, r) {
                if (null !== this.initPTS)
                    return P(t, e, r, this.initPTS, this.frameIndex)
            }
            ,
            i
        }(f);
        q.minProbeByteLength = 4;
        var z = q
          , Z = r(13)
          , $ = r(7)
          , tt = function() {
            function t() {
                this.emitInitSegment = !1,
                this.audioCodec = void 0,
                this.videoCodec = void 0,
                this.initData = void 0,
                this.initPTS = void 0,
                this.initTracks = void 0,
                this.lastEndDTS = null
            }
            var e = t.prototype;
            return e.destroy = function() {}
            ,
            e.resetTimeStamp = function(t) {
                this.initPTS = t,
                this.lastEndDTS = null
            }
            ,
            e.resetNextTimestamp = function() {
                this.lastEndDTS = null
            }
            ,
            e.resetInitSegment = function(t, e, r) {
                this.audioCodec = e,
                this.videoCodec = r,
                this.generateInitSegment(t),
                this.emitInitSegment = !0
            }
            ,
            e.generateInitSegment = function(t) {
                var e = this.audioCodec
                  , r = this.videoCodec;
                if (!t || !t.byteLength)
                    return this.initTracks = void 0,
                    void (this.initData = void 0);
                var i = this.initData = Object(u.h)(t);
                e || (e = rt(i.audio, $.ElementaryStreamTypes.AUDIO)),
                r || (r = rt(i.video, $.ElementaryStreamTypes.VIDEO));
                var n = {};
                i.audio && i.video ? n.audiovideo = {
                    container: "video/mp4",
                    codec: e + "," + r,
                    initSegment: t,
                    id: "main"
                } : i.audio ? n.audio = {
                    container: "audio/mp4",
                    codec: e,
                    initSegment: t,
                    id: "audio"
                } : i.video ? n.video = {
                    container: "video/mp4",
                    codec: r,
                    initSegment: t,
                    id: "main"
                } : g.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),
                this.initTracks = n
            }
            ,
            e.remux = function(t, e, r, i, n) {
                var a, o = this.initPTS, l = this.lastEndDTS, h = {
                    audio: void 0,
                    video: void 0,
                    text: i,
                    id3: r,
                    initSegment: void 0
                };
                Object(s.isFiniteNumber)(l) || (l = this.lastEndDTS = n || 0);
                var d = e.samples;
                if (!d || !d.length)
                    return h;
                var c = {
                    initPTS: void 0,
                    timescale: 1
                }
                  , f = this.initData;
                if (f && f.length || (this.generateInitSegment(d),
                f = this.initData),
                !f || !f.length)
                    return g.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),
                    h;
                this.emitInitSegment && (c.tracks = this.initTracks,
                this.emitInitSegment = !1),
                Object(s.isFiniteNumber)(o) || (this.initPTS = c.initPTS = o = et(f, d, l));
                var v = Object(u.d)(d, f)
                  , p = l
                  , m = v + p;
                Object(u.f)(f, d, o),
                v > 0 ? this.lastEndDTS = m : (g.logger.warn("Duration parsed from mp4 should be greater than zero"),
                this.resetNextTimestamp());
                var E = !!f.audio
                  , y = !!f.video
                  , T = "";
                E && (T += "audio"),
                y && (T += "video");
                var A = {
                    data1: d,
                    startPTS: p,
                    startDTS: p,
                    endPTS: m,
                    endDTS: m,
                    type: T,
                    hasAudio: E,
                    hasVideo: y,
                    nb: 1,
                    dropped: 0
                };
                h.audio = "audio" === A.type ? A : void 0,
                h.video = "audio" !== A.type ? A : void 0,
                h.initSegment = c;
                var b = null != (a = this.initPTS) ? a : 0;
                return h.id3 = Object(Z.b)(r, n, b, b),
                i.samples.length && (h.text = Object(Z.c)(i, n, b)),
                h
            }
            ,
            t
        }()
          , et = function(t, e, r) {
            return Object(u.e)(t, e) - r
        };
        function rt(t, e) {
            var r = null == t ? void 0 : t.codec;
            return r && r.length > 4 ? r : "hvc1" === r ? "hvc1.1.c.L120.90" : "av01" === r ? "av01.0.04M.08" : "avc1" === r || e === $.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5"
        }
        var it, nt = tt, at = r(15);
        try {
            it = self.performance.now.bind(self.performance)
        } catch (t) {
            g.logger.debug("Unable to use Performance API on this environment"),
            it = self.Date.now
        }
        var st = [{
            demux: X,
            remux: Z.a
        }, {
            demux: C,
            remux: nt
        }, {
            demux: R,
            remux: Z.a
        }, {
            demux: z,
            remux: Z.a
        }]
          , ot = 1024;
        st.forEach((function(t) {
            var e = t.demux;
            ot = Math.max(ot, e.minProbeByteLength)
        }
        ));
        var lt = function() {
            function t(t, e, r, i, n) {
                this.observer = void 0,
                this.typeSupported = void 0,
                this.config = void 0,
                this.vendor = void 0,
                this.id = void 0,
                this.demuxer = void 0,
                this.remuxer = void 0,
                this.decrypter = void 0,
                this.probe = void 0,
                this.decryptionPromise = null,
                this.transmuxConfig = void 0,
                this.currentTransmuxState = void 0,
                this.cache = new at.a,
                this.observer = t,
                this.typeSupported = e,
                this.config = r,
                this.vendor = i,
                this.id = n
            }
            var e = t.prototype;
            return e.configure = function(t) {
                this.transmuxConfig = t,
                this.decrypter && this.decrypter.reset()
            }
            ,
            e.push = function(t, e, r, i) {
                var n = this
                  , a = r.transmuxing;
                a.executeStart = it();
                var s = new Uint8Array(t)
                  , o = this.cache
                  , l = this.config
                  , h = this.currentTransmuxState
                  , d = this.transmuxConfig;
                i && (this.currentTransmuxState = i);
                var c = function(t, e) {
                    var r = null;
                    t.byteLength > 0 && null != e && null != e.key && null !== e.iv && null != e.method && (r = e);
                    return r
                }(s, e);
                if (c && "AES-128" === c.method) {
                    var f = this.getDecrypter();
                    if (!l.enableSoftwareAES)
                        return this.decryptionPromise = f.webCryptoDecrypt(s, c.key.buffer, c.iv.buffer).then((function(t) {
                            var e = n.push(t, null, r);
                            return n.decryptionPromise = null,
                            e
                        }
                        )),
                        this.decryptionPromise;
                    var g = f.softwareDecrypt(s, c.key.buffer, c.iv.buffer);
                    if (!g)
                        return a.executeEnd = it(),
                        ut(r);
                    s = new Uint8Array(g)
                }
                var v = i || h
                  , p = v.contiguous
                  , m = v.discontinuity
                  , E = v.trackSwitch
                  , y = v.accurateTimeOffset
                  , T = v.timeOffset
                  , A = v.initSegmentChange
                  , b = d.audioCodec
                  , S = d.videoCodec
                  , D = d.defaultInitPts
                  , R = d.duration
                  , L = d.initSegmentData;
                if ((m || E || A) && this.resetInitSegment(L, b, S, R),
                (m || A) && this.resetInitialTimestamp(D),
                p || this.resetContiguity(),
                this.needsProbing(s, m, E)) {
                    if (o.dataLength) {
                        var k = o.flush();
                        s = Object(u.b)(k, s)
                    }
                    this.configureTransmuxer(s, d)
                }
                var C = this.transmux(s, c, T, y, r)
                  , _ = this.currentTransmuxState;
                return _.contiguous = !0,
                _.discontinuity = !1,
                _.trackSwitch = !1,
                a.executeEnd = it(),
                C
            }
            ,
            e.flush = function(t) {
                var e = this
                  , r = t.transmuxing;
                r.executeStart = it();
                var a = this.decrypter
                  , s = this.cache
                  , o = this.currentTransmuxState
                  , l = this.decryptionPromise;
                if (l)
                    return l.then((function() {
                        return e.flush(t)
                    }
                    ));
                var u = []
                  , h = o.timeOffset;
                if (a) {
                    var d = a.flush();
                    d && u.push(this.push(d, null, t))
                }
                var c = s.dataLength;
                s.reset();
                var f = this.demuxer
                  , g = this.remuxer;
                if (!f || !g)
                    return c >= ot && this.observer.emit(i.Events.ERROR, i.Events.ERROR, {
                        type: n.ErrorTypes.MEDIA_ERROR,
                        details: n.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "no demux matching with content found"
                    }),
                    r.executeEnd = it(),
                    [ut(t)];
                var v = f.flush(h);
                return ht(v) ? v.then((function(r) {
                    return e.flushRemux(u, r, t),
                    u
                }
                )) : (this.flushRemux(u, v, t),
                u)
            }
            ,
            e.flushRemux = function(t, e, r) {
                var i = e.audioTrack
                  , n = e.videoTrack
                  , a = e.id3Track
                  , s = e.textTrack
                  , o = this.currentTransmuxState
                  , l = o.accurateTimeOffset
                  , u = o.timeOffset;
                g.logger.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
                var h = this.remuxer.remux(i, n, a, s, u, l, !0, this.id);
                t.push({
                    remuxResult: h,
                    chunkMeta: r
                }),
                r.transmuxing.executeEnd = it()
            }
            ,
            e.resetInitialTimestamp = function(t) {
                var e = this.demuxer
                  , r = this.remuxer;
                e && r && (e.resetTimeStamp(t),
                r.resetTimeStamp(t))
            }
            ,
            e.resetContiguity = function() {
                var t = this.demuxer
                  , e = this.remuxer;
                t && e && (t.resetContiguity(),
                e.resetNextTimestamp())
            }
            ,
            e.resetInitSegment = function(t, e, r, i) {
                var n = this.demuxer
                  , a = this.remuxer;
                n && a && (n.resetInitSegment(t, e, r, i),
                a.resetInitSegment(t, e, r))
            }
            ,
            e.destroy = function() {
                this.demuxer && (this.demuxer.destroy(),
                this.demuxer = void 0),
                this.remuxer && (this.remuxer.destroy(),
                this.remuxer = void 0)
            }
            ,
            e.transmux = function(t, e, r, i, n) {
                return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, r, i, n) : this.transmuxUnencrypted(t, r, i, n)
            }
            ,
            e.transmuxUnencrypted = function(t, e, r, i) {
                var n = this.demuxer.demux(t, e, !1, !this.config.progressive)
                  , a = n.audioTrack
                  , s = n.videoTrack
                  , o = n.id3Track
                  , l = n.textTrack;
                return {
                    remuxResult: this.remuxer.remux(a, s, o, l, e, r, !1, this.id),
                    chunkMeta: i
                }
            }
            ,
            e.transmuxSampleAes = function(t, e, r, i, n) {
                var a = this;
                return this.demuxer.demuxSampleAes(t, e, r).then((function(t) {
                    return {
                        remuxResult: a.remuxer.remux(t.audioTrack, t.videoTrack, t.id3Track, t.textTrack, r, i, !1, a.id),
                        chunkMeta: n
                    }
                }
                ))
            }
            ,
            e.configureTransmuxer = function(t, e) {
                for (var r, i = this.config, n = this.observer, a = this.typeSupported, s = this.vendor, o = e.audioCodec, l = e.defaultInitPts, u = e.duration, h = e.initSegmentData, d = e.videoCodec, c = 0, f = st.length; c < f; c++)
                    if (st[c].demux.probe(t)) {
                        r = st[c];
                        break
                    }
                r || (g.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"),
                r = {
                    demux: C,
                    remux: nt
                });
                var v = this.demuxer
                  , p = this.remuxer
                  , m = r.remux
                  , E = r.demux;
                p && p instanceof m || (this.remuxer = new m(n,i,a,s)),
                v && v instanceof E || (this.demuxer = new E(n,i,a),
                this.probe = E.probe),
                this.resetInitSegment(h, o, d, u),
                this.resetInitialTimestamp(l)
            }
            ,
            e.needsProbing = function(t, e, r) {
                return !this.demuxer || !this.remuxer || e || r
            }
            ,
            e.getDecrypter = function() {
                var t = this.decrypter;
                return t || (t = this.decrypter = new a.a(this.observer,this.config)),
                t
            }
            ,
            t
        }();
        var ut = function(t) {
            return {
                remuxResult: {},
                chunkMeta: t
            }
        };
        function ht(t) {
            return "then"in t && t.then instanceof Function
        }
        var dt = function(t, e, r, i, n) {
            this.audioCodec = void 0,
            this.videoCodec = void 0,
            this.initSegmentData = void 0,
            this.duration = void 0,
            this.defaultInitPts = void 0,
            this.audioCodec = t,
            this.videoCodec = e,
            this.initSegmentData = r,
            this.duration = i,
            this.defaultInitPts = n
        }
          , ct = function(t, e, r, i, n, a) {
            this.discontinuity = void 0,
            this.contiguous = void 0,
            this.accurateTimeOffset = void 0,
            this.trackSwitch = void 0,
            this.timeOffset = void 0,
            this.initSegmentChange = void 0,
            this.discontinuity = t,
            this.contiguous = e,
            this.accurateTimeOffset = r,
            this.trackSwitch = i,
            this.timeOffset = n,
            this.initSegmentChange = a
        }
    }
    , function(t, e, r) {
        var i, n, a, s, o;
        i = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,
        n = /^(?=([^\/?#]*))\1([^]*)$/,
        a = /(?:\/|^)\.(?=\/)/g,
        s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
        o = {
            buildAbsoluteURL: function(t, e, r) {
                if (r = r || {},
                t = t.trim(),
                !(e = e.trim())) {
                    if (!r.alwaysNormalize)
                        return t;
                    var i = o.parseURL(t);
                    if (!i)
                        throw new Error("Error trying to parse base URL.");
                    return i.path = o.normalizePath(i.path),
                    o.buildURLFromParts(i)
                }
                var a = o.parseURL(e);
                if (!a)
                    throw new Error("Error trying to parse relative URL.");
                if (a.scheme)
                    return r.alwaysNormalize ? (a.path = o.normalizePath(a.path),
                    o.buildURLFromParts(a)) : e;
                var s = o.parseURL(t);
                if (!s)
                    throw new Error("Error trying to parse base URL.");
                if (!s.netLoc && s.path && "/" !== s.path[0]) {
                    var l = n.exec(s.path);
                    s.netLoc = l[1],
                    s.path = l[2]
                }
                s.netLoc && !s.path && (s.path = "/");
                var u = {
                    scheme: s.scheme,
                    netLoc: a.netLoc,
                    path: null,
                    params: a.params,
                    query: a.query,
                    fragment: a.fragment
                };
                if (!a.netLoc && (u.netLoc = s.netLoc,
                "/" !== a.path[0]))
                    if (a.path) {
                        var h = s.path
                          , d = h.substring(0, h.lastIndexOf("/") + 1) + a.path;
                        u.path = o.normalizePath(d)
                    } else
                        u.path = s.path,
                        a.params || (u.params = s.params,
                        a.query || (u.query = s.query));
                return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path),
                o.buildURLFromParts(u)
            },
            parseURL: function(t) {
                var e = i.exec(t);
                return e ? {
                    scheme: e[1] || "",
                    netLoc: e[2] || "",
                    path: e[3] || "",
                    params: e[4] || "",
                    query: e[5] || "",
                    fragment: e[6] || ""
                } : null
            },
            normalizePath: function(t) {
                for (t = t.split("").reverse().join("").replace(a, ""); t.length !== (t = t.replace(s, "")).length; )
                    ;
                return t.split("").reverse().join("")
            },
            buildURLFromParts: function(t) {
                return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
            }
        },
        t.exports = o
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return m
        }
        )),
        r.d(e, "d", (function() {
            return E
        }
        )),
        r.d(e, "b", (function() {
            return y
        }
        )),
        r.d(e, "c", (function() {
            return T
        }
        ));
        var i = r(3)
          , n = function() {
            function t() {}
            return t.getSilentFrame = function(t, e) {
                switch (t) {
                case "mp4a.40.2":
                    if (1 === e)
                        return new Uint8Array([0, 200, 0, 128, 35, 128]);
                    if (2 === e)
                        return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                    if (3 === e)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                    if (4 === e)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                    if (5 === e)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                    if (6 === e)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                    break;
                default:
                    if (1 === e)
                        return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (2 === e)
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (3 === e)
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                }
            }
            ,
            t
        }()
          , a = Math.pow(2, 32) - 1
          , s = function() {
            function t() {}
            return t.init = function() {
                var e;
                for (e in t.types = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    ".mp3": [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                    smhd: []
                },
                t.types)
                    t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0])
                  , i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                t.HDLR_TYPES = {
                    video: r,
                    audio: i
                };
                var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])
                  , a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                t.STTS = t.STSC = t.STCO = a,
                t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
                t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                var s = new Uint8Array([105, 115, 111, 109])
                  , o = new Uint8Array([97, 118, 99, 49])
                  , l = new Uint8Array([0, 0, 0, 1]);
                t.FTYP = t.box(t.types.ftyp, s, l, s, o),
                t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n))
            }
            ,
            t.box = function(t) {
                for (var e = 8, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                    i[n - 1] = arguments[n];
                for (var a = i.length, s = a; a--; )
                    e += i[a].byteLength;
                var o = new Uint8Array(e);
                for (o[0] = e >> 24 & 255,
                o[1] = e >> 16 & 255,
                o[2] = e >> 8 & 255,
                o[3] = 255 & e,
                o.set(t, 4),
                a = 0,
                e = 8; a < s; a++)
                    o.set(i[a], e),
                    e += i[a].byteLength;
                return o
            }
            ,
            t.hdlr = function(e) {
                return t.box(t.types.hdlr, t.HDLR_TYPES[e])
            }
            ,
            t.mdat = function(e) {
                return t.box(t.types.mdat, e)
            }
            ,
            t.mdhd = function(e, r) {
                r *= e;
                var i = Math.floor(r / (a + 1))
                  , n = Math.floor(r % (a + 1));
                return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
            }
            ,
            t.mdia = function(e) {
                return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
            }
            ,
            t.mfhd = function(e) {
                return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
            }
            ,
            t.minf = function(e) {
                return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
            }
            ,
            t.moof = function(e, r, i) {
                return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
            }
            ,
            t.moov = function(e) {
                for (var r = e.length, i = []; r--; )
                    i[r] = t.trak(e[r]);
                return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)))
            }
            ,
            t.mvex = function(e) {
                for (var r = e.length, i = []; r--; )
                    i[r] = t.trex(e[r]);
                return t.box.apply(null, [t.types.mvex].concat(i))
            }
            ,
            t.mvhd = function(e, r) {
                r *= e;
                var i = Math.floor(r / (a + 1))
                  , n = Math.floor(r % (a + 1))
                  , s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                return t.box(t.types.mvhd, s)
            }
            ,
            t.sdtp = function(e) {
                var r, i, n = e.samples || [], a = new Uint8Array(4 + n.length);
                for (r = 0; r < n.length; r++)
                    i = n[r].flags,
                    a[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                return t.box(t.types.sdtp, a)
            }
            ,
            t.stbl = function(e) {
                return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
            }
            ,
            t.avc1 = function(e) {
                var r, i, n, a = [], s = [];
                for (r = 0; r < e.sps.length; r++)
                    n = (i = e.sps[r]).byteLength,
                    a.push(n >>> 8 & 255),
                    a.push(255 & n),
                    a = a.concat(Array.prototype.slice.call(i));
                for (r = 0; r < e.pps.length; r++)
                    n = (i = e.pps[r]).byteLength,
                    s.push(n >>> 8 & 255),
                    s.push(255 & n),
                    s = s.concat(Array.prototype.slice.call(i));
                var o = t.box(t.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | e.sps.length].concat(a).concat([e.pps.length]).concat(s)))
                  , l = e.width
                  , u = e.height
                  , h = e.pixelRatio[0]
                  , d = e.pixelRatio[1];
                return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
            }
            ,
            t.esds = function(t) {
                var e = t.config.length;
                return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
            }
            ,
            t.mp4a = function(e) {
                var r = e.samplerate;
                return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
            }
            ,
            t.mp3 = function(e) {
                var r = e.samplerate;
                return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
            }
            ,
            t.stsd = function(e) {
                return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
            }
            ,
            t.tkhd = function(e) {
                var r = e.id
                  , i = e.duration * e.timescale
                  , n = e.width
                  , s = e.height
                  , o = Math.floor(i / (a + 1))
                  , l = Math.floor(i % (a + 1));
                return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
            }
            ,
            t.traf = function(e, r) {
                var i = t.sdtp(e)
                  , n = e.id
                  , s = Math.floor(r / (a + 1))
                  , o = Math.floor(r % (a + 1));
                return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
            }
            ,
            t.trak = function(e) {
                return e.duration = e.duration || 4294967295,
                t.box(t.types.trak, t.tkhd(e), t.mdia(e))
            }
            ,
            t.trex = function(e) {
                var r = e.id;
                return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
            }
            ,
            t.trun = function(e, r) {
                var i, n, a, s, o, l, u = e.samples || [], h = u.length, d = 12 + 16 * h, c = new Uint8Array(d);
                for (r += 8 + d,
                c.set([0, 0, 15, 1, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0),
                i = 0; i < h; i++)
                    a = (n = u[i]).duration,
                    s = n.size,
                    o = n.flags,
                    l = n.cts,
                    c.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                return t.box(t.types.trun, c)
            }
            ,
            t.initSegment = function(e) {
                t.types || t.init();
                var r = t.moov(e)
                  , i = new Uint8Array(t.FTYP.byteLength + r.byteLength);
                return i.set(t.FTYP),
                i.set(r, t.FTYP.byteLength),
                i
            }
            ,
            t
        }();
        s.types = void 0,
        s.HDLR_TYPES = void 0,
        s.STTS = void 0,
        s.STSC = void 0,
        s.STCO = void 0,
        s.STSZ = void 0,
        s.VMHD = void 0,
        s.SMHD = void 0,
        s.STSD = void 0,
        s.FTYP = void 0,
        s.DINF = void 0;
        var o = s
          , l = r(0)
          , u = r(2)
          , h = r(1)
          , d = r(4)
          , c = r(9);
        function f() {
            return (f = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var g = null
          , v = null
          , p = !1
          , m = function() {
            function t(t, e, r, i) {
                if (void 0 === i && (i = ""),
                this.observer = void 0,
                this.config = void 0,
                this.typeSupported = void 0,
                this.ISGenerated = !1,
                this._initPTS = void 0,
                this._initDTS = void 0,
                this.nextAvcDts = null,
                this.nextAudioPts = null,
                this.isAudioContiguous = !1,
                this.isVideoContiguous = !1,
                this.observer = t,
                this.config = e,
                this.typeSupported = r,
                this.ISGenerated = !1,
                null === g) {
                    var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    g = n ? parseInt(n[1]) : 0
                }
                if (null === v) {
                    var a = navigator.userAgent.match(/Safari\/(\d+)/i);
                    v = a ? parseInt(a[1]) : 0
                }
                p = !!g && g < 75 || !!v && v < 600
            }
            var e = t.prototype;
            return e.destroy = function() {}
            ,
            e.resetTimeStamp = function(t) {
                h.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),
                this._initPTS = this._initDTS = t
            }
            ,
            e.resetNextTimestamp = function() {
                h.logger.log("[mp4-remuxer]: reset next timestamp"),
                this.isVideoContiguous = !1,
                this.isAudioContiguous = !1
            }
            ,
            e.resetInitSegment = function() {
                h.logger.log("[mp4-remuxer]: ISGenerated flag reset"),
                this.ISGenerated = !1
            }
            ,
            e.getVideoStartPts = function(t) {
                var e = !1
                  , r = t.reduce((function(t, r) {
                    var i = r.pts - t;
                    return i < -4294967296 ? (e = !0,
                    E(t, r.pts)) : i > 0 ? t : r.pts
                }
                ), t[0].pts);
                return e && h.logger.debug("PTS rollover detected"),
                r
            }
            ,
            e.remux = function(t, e, r, i, n, a, s, o) {
                var l, u, c, f, g, v, p = n, m = n, A = t.pid > -1, b = e.pid > -1, S = e.samples.length, D = t.samples.length > 0, R = S > 1;
                if ((!A || D) && (!b || R) || this.ISGenerated || s) {
                    this.ISGenerated || (c = this.generateIS(t, e, n));
                    var L = this.isVideoContiguous
                      , k = -1;
                    if (R && (k = function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (t[e].key)
                                return e;
                        return -1
                    }(e.samples),
                    !L && this.config.forceKeyFrameOnDiscontinuity))
                        if (v = !0,
                        k > 0) {
                            h.logger.warn("[mp4-remuxer]: Dropped " + k + " out of " + S + " video samples due to a missing keyframe");
                            var C = this.getVideoStartPts(e.samples);
                            e.samples = e.samples.slice(k),
                            e.dropped += k,
                            m += (e.samples[0].pts - C) / (e.timescale || 9e4)
                        } else
                            -1 === k && (h.logger.warn("[mp4-remuxer]: No keyframe found out of " + S + " video samples"),
                            v = !1);
                    if (this.ISGenerated) {
                        if (D && R) {
                            var _ = this.getVideoStartPts(e.samples)
                              , w = (E(t.samples[0].pts, _) - _) / e.inputTimeScale;
                            p += Math.max(0, w),
                            m += Math.max(0, -w)
                        }
                        if (D) {
                            if (t.samplerate || (h.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),
                            c = this.generateIS(t, e, n)),
                            u = this.remuxAudio(t, p, this.isAudioContiguous, a, b || R || o === d.b.AUDIO ? m : void 0),
                            R) {
                                var I = u ? u.endPTS - u.startPTS : 0;
                                e.inputTimeScale || (h.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),
                                c = this.generateIS(t, e, n)),
                                l = this.remuxVideo(e, m, L, I)
                            }
                        } else
                            R && (l = this.remuxVideo(e, m, L, 0));
                        l && (l.firstKeyFrame = k,
                        l.independent = -1 !== k)
                    }
                }
                return this.ISGenerated && (r.samples.length && (g = y(r, n, this._initPTS, this._initDTS)),
                i.samples.length && (f = T(i, n, this._initPTS))),
                {
                    audio: u,
                    video: l,
                    initSegment: c,
                    independent: v,
                    text: f,
                    id3: g
                }
            }
            ,
            e.generateIS = function(t, e, r) {
                var n, a, s, l = t.samples, u = e.samples, h = this.typeSupported, d = {}, c = !Object(i.isFiniteNumber)(this._initPTS), f = "audio/mp4";
                if (c && (n = a = 1 / 0),
                t.config && l.length && (t.timescale = t.samplerate,
                t.isAAC || (h.mpeg ? (f = "audio/mpeg",
                t.codec = "") : h.mp3 && (t.codec = "mp3")),
                d.audio = {
                    id: "audio",
                    container: f,
                    codec: t.codec,
                    initSegment: !t.isAAC && h.mpeg ? new Uint8Array(0) : o.initSegment([t]),
                    metadata: {
                        channelCount: t.channelCount
                    }
                },
                c && (s = t.inputTimeScale,
                n = a = l[0].pts - Math.round(s * r))),
                e.sps && e.pps && u.length && (e.timescale = e.inputTimeScale,
                d.video = {
                    id: "main",
                    container: "video/mp4",
                    codec: e.codec,
                    initSegment: o.initSegment([e]),
                    metadata: {
                        width: e.width,
                        height: e.height
                    }
                },
                c)) {
                    s = e.inputTimeScale;
                    var g = this.getVideoStartPts(u)
                      , v = Math.round(s * r);
                    a = Math.min(a, E(u[0].dts, g) - v),
                    n = Math.min(n, g - v)
                }
                if (Object.keys(d).length)
                    return this.ISGenerated = !0,
                    c && (this._initPTS = n,
                    this._initDTS = a),
                    {
                        tracks: d,
                        initPTS: n,
                        timescale: s
                    }
            }
            ,
            e.remuxVideo = function(t, e, r, i) {
                var n, a, s, d = t.inputTimeScale, v = t.samples, m = [], y = v.length, T = this._initPTS, b = this.nextAvcDts, S = 8, D = Number.POSITIVE_INFINITY, R = Number.NEGATIVE_INFINITY, L = 0, k = !1;
                r && null !== b || (b = e * d - (v[0].pts - E(v[0].dts, v[0].pts)));
                for (var C = 0; C < y; C++) {
                    var _ = v[C];
                    if (_.pts = E(_.pts - T, b),
                    _.dts = E(_.dts - T, b),
                    _.dts > _.pts) {
                        L = Math.max(Math.min(L, _.pts - _.dts), -18e3)
                    }
                    _.dts < v[C > 0 ? C - 1 : C].dts && (k = !0)
                }
                k && v.sort((function(t, e) {
                    var r = t.dts - e.dts
                      , i = t.pts - e.pts;
                    return r || i
                }
                )),
                a = v[0].dts,
                s = v[v.length - 1].dts;
                var w = Math.round((s - a) / (y - 1));
                if (L < 0) {
                    if (L < -2 * w) {
                        h.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(c.b)(-w, !0) + " ms");
                        for (var I = L, O = 0; O < y; O++)
                            v[O].dts = I = Math.max(I, v[O].pts - w),
                            v[O].pts = Math.max(I, v[O].pts)
                    } else {
                        h.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(c.b)(L, !0) + " ms to overcome this issue");
                        for (var x = 0; x < y; x++)
                            v[x].dts = v[x].dts + L
                    }
                    a = v[0].dts
                }
                if (r) {
                    var P = a - b
                      , M = P > w;
                    if (M || P < -1) {
                        M ? h.logger.warn("AVC: " + Object(c.b)(P, !0) + " ms (" + P + "dts) hole between fragments detected, filling it") : h.logger.warn("AVC: " + Object(c.b)(-P, !0) + " ms (" + P + "dts) overlapping between fragments detected"),
                        a = b;
                        var F = v[0].pts - P;
                        v[0].dts = a,
                        v[0].pts = F,
                        h.logger.log("Video: First PTS/DTS adjusted: " + Object(c.b)(F, !0) + "/" + Object(c.b)(a, !0) + ", delta: " + Object(c.b)(P, !0) + " ms")
                    }
                }
                p && (a = Math.max(0, a));
                for (var B = 0, U = 0, N = 0; N < y; N++) {
                    for (var V = v[N], G = V.units, j = G.length, K = 0, H = 0; H < j; H++)
                        K += G[H].data.length;
                    U += K,
                    B += j,
                    V.length = K,
                    V.dts = Math.max(V.dts, a),
                    V.pts = Math.max(V.pts, V.dts, 0),
                    D = Math.min(V.pts, D),
                    R = Math.max(V.pts, R)
                }
                s = v[y - 1].dts;
                var J, W = U + 4 * B + 8;
                try {
                    J = new Uint8Array(W)
                } catch (t) {
                    return void this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
                        type: u.ErrorTypes.MUX_ERROR,
                        details: u.ErrorDetails.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        bytes: W,
                        reason: "fail allocating video mdat " + W
                    })
                }
                var Q = new DataView(J.buffer);
                Q.setUint32(0, W),
                J.set(o.types.mdat, 4);
                for (var X = 0; X < y; X++) {
                    for (var Y = v[X], q = Y.units, z = 0, Z = 0, $ = q.length; Z < $; Z++) {
                        var tt = q[Z]
                          , et = tt.data
                          , rt = tt.data.byteLength;
                        Q.setUint32(S, rt),
                        S += 4,
                        J.set(et, S),
                        S += rt,
                        z += 4 + rt
                    }
                    if (X < y - 1)
                        n = v[X + 1].dts - Y.dts;
                    else {
                        var it = this.config
                          , nt = Y.dts - v[X > 0 ? X - 1 : X].dts;
                        if (it.stretchShortVideoTrack && null !== this.nextAudioPts) {
                            var at = Math.floor(it.maxBufferHole * d)
                              , st = (i ? D + i * d : this.nextAudioPts) - Y.pts;
                            st > at ? ((n = st - nt) < 0 && (n = nt),
                            h.logger.log("[mp4-remuxer]: It is approximately " + st / 90 + " ms to the next segment; using duration " + n / 90 + " ms for the last video frame.")) : n = nt
                        } else
                            n = nt
                    }
                    var ot = Math.round(Y.pts - Y.dts);
                    m.push(new A(Y.key,n,z,ot))
                }
                if (m.length && g && g < 70) {
                    var lt = m[0].flags;
                    lt.dependsOn = 2,
                    lt.isNonSync = 0
                }
                this.nextAvcDts = b = s + n,
                this.isVideoContiguous = !0;
                var ut = {
                    data1: o.moof(t.sequenceNumber++, a, f({}, t, {
                        samples: m
                    })),
                    data2: J,
                    startPTS: D / d,
                    endPTS: (R + n) / d,
                    startDTS: a / d,
                    endDTS: b / d,
                    type: "video",
                    hasAudio: !1,
                    hasVideo: !0,
                    nb: m.length,
                    dropped: t.dropped
                };
                return t.samples = [],
                t.dropped = 0,
                ut
            }
            ,
            e.remuxAudio = function(t, e, r, i, a) {
                var s = t.inputTimeScale
                  , d = s / (t.samplerate ? t.samplerate : s)
                  , c = t.isAAC ? 1024 : 1152
                  , g = c * d
                  , v = this._initPTS
                  , p = !t.isAAC && this.typeSupported.mpeg
                  , m = []
                  , y = t.samples
                  , T = p ? 0 : 8
                  , b = this.nextAudioPts || -1
                  , S = e * s;
                if (this.isAudioContiguous = r = r || y.length && b > 0 && (i && Math.abs(S - b) < 9e3 || Math.abs(E(y[0].pts - v, S) - b) < 20 * g),
                y.forEach((function(t) {
                    t.pts = E(t.pts - v, S)
                }
                )),
                !r || b < 0) {
                    if (!(y = y.filter((function(t) {
                        return t.pts >= 0
                    }
                    ))).length)
                        return;
                    b = 0 === a ? 0 : i ? Math.max(0, S) : y[0].pts
                }
                if (t.isAAC)
                    for (var D = void 0 !== a, R = this.config.maxAudioFramesDrift, L = 0, k = b; L < y.length; L++) {
                        var C = y[L]
                          , _ = C.pts
                          , w = _ - k
                          , I = Math.abs(1e3 * w / s);
                        if (w <= -R * g && D)
                            0 === L && (h.logger.warn("Audio frame @ " + (_ / s).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * w / s) + " ms."),
                            this.nextAudioPts = b = k = _);
                        else if (w >= R * g && I < 1e4 && D) {
                            var O = Math.round(w / g);
                            (k = _ - O * g) < 0 && (O--,
                            k += g),
                            0 === L && (this.nextAudioPts = b = k),
                            h.logger.warn("[mp4-remuxer]: Injecting " + O + " audio frame @ " + (k / s).toFixed(3) + "s due to " + Math.round(1e3 * w / s) + " ms gap.");
                            for (var x = 0; x < O; x++) {
                                var P = Math.max(k, 0)
                                  , M = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                                M || (h.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),
                                M = C.unit.subarray()),
                                y.splice(L, 0, {
                                    unit: M,
                                    pts: P
                                }),
                                k += g,
                                L++
                            }
                        }
                        C.pts = k,
                        k += g
                    }
                for (var F, B = null, U = null, N = 0, V = y.length; V--; )
                    N += y[V].unit.byteLength;
                for (var G = 0, j = y.length; G < j; G++) {
                    var K = y[G]
                      , H = K.unit
                      , J = K.pts;
                    if (null !== U) {
                        m[G - 1].duration = Math.round((J - U) / d)
                    } else {
                        if (r && t.isAAC && (J = b),
                        B = J,
                        !(N > 0))
                            return;
                        N += T;
                        try {
                            F = new Uint8Array(N)
                        } catch (t) {
                            return void this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
                                type: u.ErrorTypes.MUX_ERROR,
                                details: u.ErrorDetails.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: N,
                                reason: "fail allocating audio mdat " + N
                            })
                        }
                        p || (new DataView(F.buffer).setUint32(0, N),
                        F.set(o.types.mdat, 4))
                    }
                    F.set(H, T);
                    var W = H.byteLength;
                    T += W,
                    m.push(new A(!0,c,W,0)),
                    U = J
                }
                var Q = m.length;
                if (Q) {
                    var X = m[m.length - 1];
                    this.nextAudioPts = b = U + d * X.duration;
                    var Y = p ? new Uint8Array(0) : o.moof(t.sequenceNumber++, B / d, f({}, t, {
                        samples: m
                    }));
                    t.samples = [];
                    var q = B / s
                      , z = b / s
                      , Z = {
                        data1: Y,
                        data2: F,
                        startPTS: q,
                        endPTS: z,
                        startDTS: q,
                        endDTS: z,
                        type: "audio",
                        hasAudio: !0,
                        hasVideo: !1,
                        nb: Q
                    };
                    return this.isAudioContiguous = !0,
                    Z
                }
            }
            ,
            e.remuxEmptyAudio = function(t, e, r, i) {
                var a = t.inputTimeScale
                  , s = a / (t.samplerate ? t.samplerate : a)
                  , o = this.nextAudioPts
                  , l = (null !== o ? o : i.startDTS * a) + this._initDTS
                  , u = i.endDTS * a + this._initDTS
                  , d = 1024 * s
                  , c = Math.ceil((u - l) / d)
                  , f = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                if (h.logger.warn("[mp4-remuxer]: remux empty Audio"),
                f) {
                    for (var g = [], v = 0; v < c; v++) {
                        var p = l + v * d;
                        g.push({
                            unit: f,
                            pts: p,
                            dts: p
                        })
                    }
                    return t.samples = g,
                    this.remuxAudio(t, e, r, !1)
                }
                h.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
            }
            ,
            t
        }();
        function E(t, e) {
            var r;
            if (null === e)
                return t;
            for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296; )
                t += r;
            return t
        }
        function y(t, e, r, i) {
            var n = t.samples.length;
            if (n) {
                for (var a = t.inputTimeScale, s = 0; s < n; s++) {
                    var o = t.samples[s];
                    o.pts = E(o.pts - r, e * a) / a,
                    o.dts = E(o.dts - i, e * a) / a
                }
                var l = t.samples;
                return t.samples = [],
                {
                    samples: l
                }
            }
        }
        function T(t, e, r) {
            var i = t.samples.length;
            if (i) {
                for (var n = t.inputTimeScale, a = 0; a < i; a++) {
                    var s = t.samples[a];
                    s.pts = E(s.pts - r, e * n) / n
                }
                t.samples.sort((function(t, e) {
                    return t.pts - e.pts
                }
                ));
                var o = t.samples;
                return t.samples = [],
                {
                    samples: o
                }
            }
        }
        var A = function(t, e, r, i) {
            this.size = void 0,
            this.duration = void 0,
            this.cts = void 0,
            this.flags = void 0,
            this.duration = e,
            this.size = r,
            this.cts = i,
            this.flags = new b(t)
        }
          , b = function(t) {
            this.isLeading = 0,
            this.isDependedOn = 0,
            this.hasRedundancy = 0,
            this.degradPrio = 0,
            this.dependsOn = 1,
            this.isNonSync = 1,
            this.dependsOn = t ? 2 : 1,
            this.isNonSync = t ? 0 : 1
        }
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }
        ));
        var i = function() {
            this.aborted = !1,
            this.loaded = 0,
            this.retry = 0,
            this.total = 0,
            this.chunkCount = 0,
            this.bwEstimate = 0,
            this.loading = {
                start: 0,
                first: 0,
                end: 0
            },
            this.parsing = {
                start: 0,
                end: 0
            },
            this.buffering = {
                start: 0,
                first: 0,
                end: 0
            }
        }
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }
        ));
        var i = function() {
            function t() {
                this.chunks = [],
                this.dataLength = 0
            }
            var e = t.prototype;
            return e.push = function(t) {
                this.chunks.push(t),
                this.dataLength += t.length
            }
            ,
            e.flush = function() {
                var t, e = this.chunks, r = this.dataLength;
                return e.length ? (t = 1 === e.length ? e[0] : function(t, e) {
                    for (var r = new Uint8Array(e), i = 0, n = 0; n < t.length; n++) {
                        var a = t[n];
                        r.set(a, i),
                        i += a.length
                    }
                    return r
                }(e, r),
                this.reset(),
                t) : new Uint8Array(0)
            }
            ,
            e.reset = function() {
                this.chunks.length = 0,
                this.dataLength = 0
            }
            ,
            t
        }()
    }
    , function(t, e, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty
          , n = "~";
        function a() {}
        function s(t, e, r) {
            this.fn = t,
            this.context = e,
            this.once = r || !1
        }
        function o(t, e, r, i, a) {
            if ("function" != typeof r)
                throw new TypeError("The listener must be a function");
            var o = new s(r,i || t,a)
              , l = n ? n + e : e;
            return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o,
            t._eventsCount++),
            t
        }
        function l(t, e) {
            0 == --t._eventsCount ? t._events = new a : delete t._events[e]
        }
        function u() {
            this._events = new a,
            this._eventsCount = 0
        }
        Object.create && (a.prototype = Object.create(null),
        (new a).__proto__ || (n = !1)),
        u.prototype.eventNames = function() {
            var t, e, r = [];
            if (0 === this._eventsCount)
                return r;
            for (e in t = this._events)
                i.call(t, e) && r.push(n ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
        }
        ,
        u.prototype.listeners = function(t) {
            var e = n ? n + t : t
              , r = this._events[e];
            if (!r)
                return [];
            if (r.fn)
                return [r.fn];
            for (var i = 0, a = r.length, s = new Array(a); i < a; i++)
                s[i] = r[i].fn;
            return s
        }
        ,
        u.prototype.listenerCount = function(t) {
            var e = n ? n + t : t
              , r = this._events[e];
            return r ? r.fn ? 1 : r.length : 0
        }
        ,
        u.prototype.emit = function(t, e, r, i, a, s) {
            var o = n ? n + t : t;
            if (!this._events[o])
                return !1;
            var l, u, h = this._events[o], d = arguments.length;
            if (h.fn) {
                switch (h.once && this.removeListener(t, h.fn, void 0, !0),
                d) {
                case 1:
                    return h.fn.call(h.context),
                    !0;
                case 2:
                    return h.fn.call(h.context, e),
                    !0;
                case 3:
                    return h.fn.call(h.context, e, r),
                    !0;
                case 4:
                    return h.fn.call(h.context, e, r, i),
                    !0;
                case 5:
                    return h.fn.call(h.context, e, r, i, a),
                    !0;
                case 6:
                    return h.fn.call(h.context, e, r, i, a, s),
                    !0
                }
                for (u = 1,
                l = new Array(d - 1); u < d; u++)
                    l[u - 1] = arguments[u];
                h.fn.apply(h.context, l)
            } else {
                var c, f = h.length;
                for (u = 0; u < f; u++)
                    switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0),
                    d) {
                    case 1:
                        h[u].fn.call(h[u].context);
                        break;
                    case 2:
                        h[u].fn.call(h[u].context, e);
                        break;
                    case 3:
                        h[u].fn.call(h[u].context, e, r);
                        break;
                    case 4:
                        h[u].fn.call(h[u].context, e, r, i);
                        break;
                    default:
                        if (!l)
                            for (c = 1,
                            l = new Array(d - 1); c < d; c++)
                                l[c - 1] = arguments[c];
                        h[u].fn.apply(h[u].context, l)
                    }
            }
            return !0
        }
        ,
        u.prototype.on = function(t, e, r) {
            return o(this, t, e, r, !1)
        }
        ,
        u.prototype.once = function(t, e, r) {
            return o(this, t, e, r, !0)
        }
        ,
        u.prototype.removeListener = function(t, e, r, i) {
            var a = n ? n + t : t;
            if (!this._events[a])
                return this;
            if (!e)
                return l(this, a),
                this;
            var s = this._events[a];
            if (s.fn)
                s.fn !== e || i && !s.once || r && s.context !== r || l(this, a);
            else {
                for (var o = 0, u = [], h = s.length; o < h; o++)
                    (s[o].fn !== e || i && !s[o].once || r && s[o].context !== r) && u.push(s[o]);
                u.length ? this._events[a] = 1 === u.length ? u[0] : u : l(this, a)
            }
            return this
        }
        ,
        u.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = n ? n + t : t,
            this._events[e] && l(this, e)) : (this._events = new a,
            this._eventsCount = 0),
            this
        }
        ,
        u.prototype.off = u.prototype.removeListener,
        u.prototype.addListener = u.prototype.on,
        u.prefixed = n,
        u.EventEmitter = u,
        t.exports = u
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return h
        }
        ));
        var i = function() {
            function t(t, e) {
                this.subtle = void 0,
                this.aesIV = void 0,
                this.subtle = t,
                this.aesIV = e
            }
            return t.prototype.decrypt = function(t, e) {
                return this.subtle.decrypt({
                    name: "AES-CBC",
                    iv: this.aesIV
                }, e, t)
            }
            ,
            t
        }()
          , n = function() {
            function t(t, e) {
                this.subtle = void 0,
                this.key = void 0,
                this.subtle = t,
                this.key = e
            }
            return t.prototype.expandKey = function() {
                return this.subtle.importKey("raw", this.key, {
                    name: "AES-CBC"
                }, !1, ["encrypt", "decrypt"])
            }
            ,
            t
        }()
          , a = r(21)
          , s = r.n(a)
          , o = r(1)
          , l = r(5)
          , u = r(10)
          , h = function() {
            function t(t, e, r) {
                var i = (void 0 === r ? {} : r).removePKCS7Padding
                  , n = void 0 === i || i;
                if (this.logEnabled = !0,
                this.observer = void 0,
                this.config = void 0,
                this.removePKCS7Padding = void 0,
                this.subtle = null,
                this.softwareDecrypter = null,
                this.key = null,
                this.fastAesKey = null,
                this.remainderData = null,
                this.currentIV = null,
                this.currentResult = null,
                this.observer = t,
                this.config = e,
                this.removePKCS7Padding = n,
                n)
                    try {
                        var a = self.crypto;
                        a && (this.subtle = a.subtle || a.webkitSubtle)
                    } catch (t) {}
                null === this.subtle && (this.config.enableSoftwareAES = !0)
            }
            var e = t.prototype;
            return e.destroy = function() {
                this.observer = null
            }
            ,
            e.isSync = function() {
                return this.config.enableSoftwareAES
            }
            ,
            e.flush = function() {
                var t = this.currentResult;
                if (t) {
                    var e = new Uint8Array(t);
                    return this.reset(),
                    this.removePKCS7Padding ? Object(a.removePadding)(e) : e
                }
                this.reset()
            }
            ,
            e.reset = function() {
                this.currentResult = null,
                this.currentIV = null,
                this.remainderData = null,
                this.softwareDecrypter && (this.softwareDecrypter = null)
            }
            ,
            e.decrypt = function(t, e, r, i) {
                if (this.config.enableSoftwareAES) {
                    this.softwareDecrypt(new Uint8Array(t), e, r);
                    var n = this.flush();
                    n && i(n.buffer)
                } else
                    this.webCryptoDecrypt(new Uint8Array(t), e, r).then(i)
            }
            ,
            e.softwareDecrypt = function(t, e, r) {
                var i = this.currentIV
                  , n = this.currentResult
                  , a = this.remainderData;
                this.logOnce("JS AES decrypt"),
                a && (t = Object(l.b)(a, t),
                this.remainderData = null);
                var o = this.getValidChunk(t);
                if (!o.length)
                    return null;
                i && (r = i);
                var h = this.softwareDecrypter;
                h || (h = this.softwareDecrypter = new s.a),
                h.expandKey(e);
                var d = n;
                return this.currentResult = h.decrypt(o.buffer, 0, r),
                this.currentIV = Object(u.sliceUint8)(o, -16).buffer,
                d || null
            }
            ,
            e.webCryptoDecrypt = function(t, e, r) {
                var a = this
                  , s = this.subtle;
                return this.key === e && this.fastAesKey || (this.key = e,
                this.fastAesKey = new n(s,e)),
                this.fastAesKey.expandKey().then((function(e) {
                    return s ? new i(s,r).decrypt(t.buffer, e) : Promise.reject(new Error("web crypto not initialized"))
                }
                )).catch((function(i) {
                    return a.onWebCryptoError(i, t, e, r)
                }
                ))
            }
            ,
            e.onWebCryptoError = function(t, e, r, i) {
                return o.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", t),
                this.config.enableSoftwareAES = !0,
                this.logEnabled = !0,
                this.softwareDecrypt(e, r, i)
            }
            ,
            e.getValidChunk = function(t) {
                var e = t
                  , r = t.length - t.length % 16;
                return r !== t.length && (e = Object(u.sliceUint8)(t, 0, r),
                this.remainderData = Object(u.sliceUint8)(t, r)),
                e
            }
            ,
            e.logOnce = function(t) {
                this.logEnabled && (o.logger.log("[decrypter.ts]: " + t),
                this.logEnabled = !1)
            }
            ,
            t
        }()
    }
    , function(t, e, r) {
        "use strict";
        function i() {
            return self.MediaSource || self.WebKitMediaSource
        }
        r.r(e),
        r.d(e, "getMediaSource", (function() {
            return i
        }
        ))
    }
    , function(module, exports) {
        function T(t, e, r, i, n, a, s, o) {
            var l, u = !i, h = (t = +t,
            e = e || [0],
            i = i || [[this], [{}]],
            n = n || {},
            []), d = null;
            function c() {
                return function(t, e, r) {
                    return new (Function.bind.apply(t, e))
                }
                .apply(null, arguments)
            }
            Function.prototype.bind || (l = [].slice,
            Function.prototype.bind = function(t) {
                if ("function" != typeof this)
                    throw new TypeError("bind101");
                var e = l.call(arguments, 1)
                  , r = e.length
                  , i = this
                  , n = function() {}
                  , a = function() {
                    return e.length = r,
                    e.push.apply(e, arguments),
                    i.apply(n.prototype.isPrototypeOf(this) ? this : t, e)
                };
                return this.prototype && (n.prototype = this.prototype),
                a.prototype = new n,
                a
            }
            );
            for (var f = [function() {
                var r = e[t++];
                i[r] = void 0 === i[r] ? [] : i[r]
            }
            , function() {
                i.push([e[t++]])
            }
            , function() {
                i.push(!i.pop())
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] >> i.pop()
            }
            , function() {
                var t = i.pop();
                n[t] || (r[t] = r[t](),
                n[t] = 1),
                i.push([r, t])
            }
            , function() {
                i[i.length - 1].length ? i.push(i[i.length - 1].shift(), !0) : i.push(void 0, !1)
            }
            , function() {
                i[i.length - 1] = r[i[i.length - 1]]
            }
            , function() {
                var t = i.pop()
                  , e = i.pop();
                i.push([e[0][e[1]], t])
            }
            , function() {
                var t = i[i.length - 2];
                t[0][t[1]] = i[i.length - 1]
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] < i.pop()
            }
            , function() {
                throw i[i.length - 1]
            }
            , function() {
                var t = i[i.length - 2]
                  , e = Object.getOwnPropertyDescriptor(t[0], t[1]) || {
                    configurable: !0,
                    enumerable: !0
                };
                e.get = i[i.length - 1],
                Object.defineProperty(t[0], t[1], e)
            }
            , function() {
                i.push("")
            }
            , function() {
                i.push(void 0)
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] % i.pop()
            }
            , function() {
                var t, e = [];
                for (t in i.pop())
                    e.push(t);
                i.push(e)
            }
            , function() {
                i.push(i[e[t++]][0])
            }
            , function() {
                i.pop()
            }
            , function() {}
            , function() {
                for (var l = i.pop(), u = e[t++], h = [], d = e[t++], c = e[t++], f = [], g = 0; g < d; g++)
                    h[e[t++]] = i[e[t++]];
                for (g = 0; g < c; g++)
                    f[g] = e[t++];
                var v = function() {
                    var t = h.slice(0);
                    t[0] = [this],
                    t[1] = [arguments],
                    t[2] = [v];
                    for (var i = 0; i < f.length && i < arguments.length; i++)
                        0 < f[i] && (t[f[i]] = [arguments[i]]);
                    return T(u, e, r, t, n, a, s, o)
                };
                v.toString = function() {
                    return l
                }
                ,
                i.push(v)
            }
            , function() {
                var r = e[t++]
                  , n = i[i.length - 2 - r];
                i[i.length - 2 - r] = i.pop(),
                i.push(n)
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] & i.pop()
            }
            , function() {
                var n = e[t++]
                  , a = n ? i.slice(-n) : [];
                i.length -= n,
                i.push(i.pop().apply(r, a))
            }
            , function() {
                var t = i[i.length - 2]
                  , e = Object.getOwnPropertyDescriptor(t[0], t[1]) || {
                    configurable: !0,
                    enumerable: !0
                };
                e.set = i[i.length - 1],
                Object.defineProperty(t[0], t[1], e)
            }
            , function() {
                i.push(null)
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] >>> i.pop()
            }
            , function() {
                var r = (n = e[t++]) ? i.slice(-n) : []
                  , n = (i.length -= n,
                i.pop());
                i.push(n[0][n[1]].apply(n[0], r))
            }
            , function() {
                i[i[i.length - 2][0]][0] = i[i.length - 1]
            }
            , function() {
                for (var l = e[t++], u = [], h = e[t++], d = e[t++], c = [], f = 0; f < h; f++)
                    u[e[t++]] = i[e[t++]];
                for (f = 0; f < d; f++)
                    c[f] = e[t++];
                i.push((function t() {
                    var i = u.slice(0);
                    i[0] = [this],
                    i[1] = [arguments],
                    i[2] = [t];
                    for (var h = 0; h < c.length && h < arguments.length; h++)
                        0 < c[h] && (i[c[h]] = [arguments[h]]);
                    return T(l, e, r, i, n, a, s, o)
                }
                ))
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] - i.pop()
            }
            , function() {
                i[i[i.length - 1][0]] = void 0 === i[i[i.length - 1][0]] ? [] : i[i[i.length - 1][0]]
            }
            , function() {
                var t = i.pop();
                n[t] || (r[t] = r[t](),
                n[t] = 1),
                i.push(r[t])
            }
            , function() {
                i.push(i[i.length - 1])
            }
            , function() {
                i.push(typeof i.pop())
            }
            , function() {
                d = null
            }
            , function() {
                i.length = e[t++]
            }
            , function() {
                var t = i.pop();
                i.push([i[i.pop()][0], t])
            }
            , function() {
                i[i.length - 1] += String.fromCharCode(e[t++])
            }
            , function() {
                var t = i.pop();
                i.push(delete t[0][t[1]])
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] ^ i.pop()
            }
            , function() {
                i.push(~i.pop())
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] > i.pop()
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] >= i.pop()
            }
            , function() {
                h.pop()
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] === i.pop()
            }
            , function() {
                i[i.length - 2] = i[i.length - 2]instanceof i.pop()
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] / i.pop()
            }
            , function() {
                var r = e[t++];
                i[i.length - 1] && (t = r)
            }
            , function() {
                return !0
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] + i.pop()
            }
            , function() {
                i.push([i.pop(), i.pop()].reverse())
            }
            , function() {
                i[i.length - 1] = e[t++]
            }
            , function() {
                i.length -= e[t++]
            }
            , function() {
                i.push([r, i.pop()])
            }
            , function() {
                i.push(!1)
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] << i.pop()
            }
            , function() {
                t = e[t++]
            }
            , function() {
                var r = e[t++]
                  , n = r ? i.slice(-r) : [];
                i.length -= r,
                n.unshift(null),
                i.push(c(i.pop(), n))
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] == i.pop()
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] * i.pop()
            }
            , function() {
                i.push(e[t++])
            }
            , function() {
                h.push([e[t++], i.length, e[t++]])
            }
            , function() {
                var r = (n = e[t++]) ? i.slice(-n) : []
                  , n = (i.length -= n,
                r.unshift(null),
                i.pop());
                i.push(c(n[0][n[1]], r))
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] <= i.pop()
            }
            , function() {
                var t = i.pop();
                i.push(t[0][t[1]])
            }
            , function() {
                return !!d
            }
            , function() {
                i[i.length - 2] = i[i.length - 2]in i.pop()
            }
            , function() {
                i.push(i[i.pop()[0]][0])
            }
            , function() {
                i.push(!0)
            }
            , function() {
                i[i.length - 2] = i[i.length - 2] | i.pop()
            }
            ]; ; )
                try {
                    for (var g = !1; !g; )
                        g = f[e[t++]]();
                    if (d)
                        throw d;
                    return u ? (i.pop(),
                    i.slice(3 + T.v)) : i.pop()
                } catch (e) {
                    var v = h.pop();
                    if (void 0 === v)
                        throw e;
                    d = e,
                    t = v[0],
                    i.length = v[1],
                    v[2] && (i[v[2]][0] = d)
                }
        }
        function arrayIndexOf(t, e, r) {
            if ("function" == typeof Array.prototype.indexOf)
                return Array.prototype.indexOf.call(t, e, r);
            var i, n = o.length;
            if (0 === n)
                return -1;
            var a = 0 | r;
            if (a >= n)
                return -1;
            for (i = Math.max(a >= 0 ? a : n - Math.abs(a), 0); i < n; i++)
                if (i in o && o[i] === e)
                    return i;
            return -1
        }
        function base64Decode(t) {
            for (var e, r, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(""), n = String(t).replace(/[=]+$/, ""), a = 0, s = 0, o = ""; r = n.charAt(s++); ~r && (e = a % 4 ? 64 * e + r : r,
            a++ % 4) ? o += String.fromCharCode(255 & e >> (-2 * a & 6)) : 0)
                r = arrayIndexOf(i, r);
            return o
        }
        T.v = 0,
        module.exports.r = function(symbols) {
            for (var result = [], i = 0; i < symbols.length; i++)
                try {
                    result.push(eval(symbols[i]))
                } catch (t) {
                    result.push(void 0)
                }
            return result
        }
        ,
        module.exports.d = function(t) {
            if ("object" != typeof t[1])
                return t;
            var e = t[0]
              , r = t[1]
              , i = []
              , n = base64Decode(e)
              , a = r.shift()
              , s = r.shift()
              , o = 0;
            function l() {
                for (; o === a; )
                    i.push(s),
                    o++,
                    a = r.shift(),
                    s = r.shift()
            }
            for (var u = 0; u < n.length; u++) {
                var h = n.charAt(u).charCodeAt(0);
                l(),
                i.push(h),
                o++
            }
            return l(),
            i
        }
        ,
        module.exports.g = function(t) {
            return t.shift()[0]
        }
        ,
        module.exports.v = T
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return a
        }
        ));
        var i = r(12);
        function n(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var a = function() {
            function t(t, e) {
                this._uri = null,
                this.method = null,
                this.keyFormat = null,
                this.keyFormatVersions = null,
                this.keyID = null,
                this.key = null,
                this.iv = null,
                this._uri = e ? Object(i.buildAbsoluteURL)(t, e, {
                    alwaysNormalize: !0
                }) : t
            }
            var e, r, a;
            return t.fromURL = function(e, r) {
                return new t(e,r)
            }
            ,
            t.fromURI = function(e) {
                return new t(e)
            }
            ,
            e = t,
            (r = [{
                key: "uri",
                get: function() {
                    return this._uri
                }
            }]) && n(e.prototype, r),
            a && n(e, a),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }()
    }
    , function(t, e, r) {
        "use strict";
        var i = r(19);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        e.removePadding = function(t) {
            var e = t.byteLength
              , r = e && new DataView(t.buffer).getUint8(e - 1);
            if (r)
                return (0,
                n.sliceUint8)(t, 0, e - r);
            return t
        }
        ;
        var n = r(10);
        var a = function() {
            function t() {
                this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                this.sBox = new Uint32Array(256),
                this.invSBox = new Uint32Array(256),
                this.key = new Uint32Array(0),
                this.ksRows = 0,
                this.keySize = 0,
                this.keySchedule = void 0,
                this.invKeySchedule = void 0,
                this.initTable()
            }
            var e = t.prototype;
            return e.uint8ArrayToUint32Array_ = function(t) {
                for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++)
                    r[i] = e.getUint32(4 * i);
                return r
            }
            ,
            e.initTable = function() {
                var t = this.sBox
                  , e = this.invSBox
                  , r = this.subMix
                  , i = r[0]
                  , n = r[1]
                  , a = r[2]
                  , s = r[3]
                  , o = this.invSubMix
                  , l = o[0]
                  , u = o[1]
                  , h = o[2]
                  , d = o[3]
                  , c = new Uint32Array(256)
                  , f = 0
                  , g = 0
                  , v = 0;
                for (v = 0; v < 256; v++)
                    c[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                for (v = 0; v < 256; v++) {
                    var p = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                    p = p >>> 8 ^ 255 & p ^ 99,
                    t[f] = p,
                    e[p] = f;
                    var m = c[f]
                      , E = c[m]
                      , y = c[E]
                      , T = 257 * c[p] ^ 16843008 * p;
                    i[f] = T << 24 | T >>> 8,
                    n[f] = T << 16 | T >>> 16,
                    a[f] = T << 8 | T >>> 24,
                    s[f] = T,
                    T = 16843009 * y ^ 65537 * E ^ 257 * m ^ 16843008 * f,
                    l[p] = T << 24 | T >>> 8,
                    u[p] = T << 16 | T >>> 16,
                    h[p] = T << 8 | T >>> 24,
                    d[p] = T,
                    f ? (f = m ^ c[c[c[y ^ m]]],
                    g ^= c[c[g]]) : f = g = 1
                }
            }
            ,
            e.expandKey = function(t) {
                return i.g(i.v(0, i.d(["IwQAAgADOAAjFQACAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUPAAzAAQMJXMlaCVpJWYldCVVJWklbiV0JTgHQDwBHxYBEQEDAQAMJXUlaSVuJXQlOCVBJXIlciVhJXklVCVvJVUlaSVuJXQlMyUyJUElciVyJWEleSVfJDwBHxoBGxERAQREGxERAQU8ABsREQEFQwEDDCVsJWUlbiVnJXQlaCRAKgIvuTi8HBEQBC/CETj0PBEBBAEDEAUkQAEADCVrJWUleSQQBQdALBsREQEFIEMgFAEUADwBMRsRMwAUAEUROJ4WAQRDL/0RODQRDTABAAwlayVlJXkkEAMIEREBBgEADCVrJWUleSVTJWkleiVlJAEDDCVsJWUlbiVnJXQlaCRACBQAERsRERAGPAQsAi84PhEQBjwGLAIvODkREAY8CCwCLxE4NBE8AgQMJUklbiV2JWElbCVpJWQlICVhJWUlcyUgJWslZSV5JSAlcyVpJXolZSU9EAYxPgEKAQcBAAwlayVzJVIlbyV3JXMkEAY8BjE8ATE8BDsIFAARGxERAQoBAAwlayVlJXklUyVjJWglZSVkJXUlbCVlJDwDBBAHPgEIFAARGxERAQsBAAwlaSVuJXYlSyVlJXklUyVjJWglZSVkJXUlbCVlJDwDBBAHPgEIFAARGxERAQwBAAwlcyVCJW8leCRAGxERAQ0BAAwlciVjJW8lbiRAGxERAQ4BAAwlaSVuJXYlUyV1JWIlTSVpJXgkQBsREQEPAQ48ACRAGxERARABDjwBJEAbEREBEQEOPAIkQBsREQESAQ48AyRAGxERAQg8ABsREQEIQxAHKgIvETg9ERAIEAYqAi8RODwRARMBChAIJAEDEAgkQAgUABEbERE4AQEUEBMbEREQCBAGDjwALC8REAY8BikvOCMREAgQBg48BCwvETgWEQEUAQwQFDwYGSRAPBg3AQwQFDwQGTz/FSRAPBA3RQEMEBQ8CBk8/xUkQDwIN0UBDBAUPP8VJEBFGxEROAARARQQFDwINxAUPBgZRRsREQEUAQwQFDwYGSRAPBg3AQwQFDwQGTz/FSRAPBA3RQEMEBQ8CBk8/xUkQDwIN0UBDBAUPP8VJEBFGxERARQgQwENEAgQBi48AEUkQDwYNycbEREBChAIJAETAQoQCBAGHSRAEBQnPAAZGxQAEQgREQEIIEMgFAEUADwBMRsRMwAUAEUROBYBCTwAGxERAQlDEAcqAi8RODgRAQgQBxAJHRsRERAJPAMVLxEBFAEKEAg8BB0kQBsRETg5EQEUAQoQCCRAGxERAQlDPAQqAi8REAg8BCkCLxEBCxAJJAEPAQwQFDwYGSRAJEABEAEMEBQ8EBk8/xUkQCRAJwERAQwQFDwIGTz/FSRAJEAnARIBDBAUPP8VJEAkQCcIERE4FBEBCxAJJBAUCBERAQsQCSQBCxAJJEA8ABkIEREBCSBDIBQBFAA8ATEbETMAFABFETgvDTABAxwJAAAbERENMA==", [7, 1164, 251, 256, 322, 326, 324, 333, 334, 338, 336, 345, 346, 351, 349, 404, 653, 658, 656, 952, 666, 671, 669, 695, 693, 929, 711, 801, 719, 723, 721, 732, 733, 738, 736, 900, 799, 900, 950, 645, 967, 972, 970, 1162, 989, 1008, 1006, 1020, 1028, 1036, 1037, 1111, 1109, 1122, 1160, 959]]), [function() {
                    return void 0 === n ? void 0 : n
                }
                , function() {
                    return void 0 === t ? void 0 : t
                }
                , function() {
                    return "undefined" == typeof Error ? void 0 : Error
                }
                , function() {
                    return "undefined" == typeof Uint32Array ? void 0 : Uint32Array
                }
                ])).call(this)
            }
            ,
            e.networkToHostOrderSwap = function(t) {
                return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
            }
            ,
            e.decrypt = function(t, e, r) {
                for (var i, n, a, s, o, l, u, h, d, c, f, g, v, p, m = this.keySize + 6, E = this.invKeySchedule, y = this.invSBox, T = this.invSubMix, A = T[0], b = T[1], S = T[2], D = T[3], R = this.uint8ArrayToUint32Array_(r), L = R[0], k = R[1], C = R[2], _ = R[3], w = new Int32Array(t), I = new Int32Array(w.length), O = this.networkToHostOrderSwap; e < w.length; ) {
                    for (d = O(w[e]),
                    c = O(w[e + 1]),
                    f = O(w[e + 2]),
                    g = O(w[e + 3]),
                    o = d ^ E[0],
                    l = g ^ E[1],
                    u = f ^ E[2],
                    h = c ^ E[3],
                    v = 4,
                    p = 1; p < m; p++)
                        i = A[o >>> 24] ^ b[l >> 16 & 255] ^ S[u >> 8 & 255] ^ D[255 & h] ^ E[v],
                        n = A[l >>> 24] ^ b[u >> 16 & 255] ^ S[h >> 8 & 255] ^ D[255 & o] ^ E[v + 1],
                        a = A[u >>> 24] ^ b[h >> 16 & 255] ^ S[o >> 8 & 255] ^ D[255 & l] ^ E[v + 2],
                        s = A[h >>> 24] ^ b[o >> 16 & 255] ^ S[l >> 8 & 255] ^ D[255 & u] ^ E[v + 3],
                        o = i,
                        l = n,
                        u = a,
                        h = s,
                        v += 4;
                    i = y[o >>> 24] << 24 ^ y[l >> 16 & 255] << 16 ^ y[u >> 8 & 255] << 8 ^ y[255 & h] ^ E[v],
                    n = y[l >>> 24] << 24 ^ y[u >> 16 & 255] << 16 ^ y[h >> 8 & 255] << 8 ^ y[255 & o] ^ E[v + 1],
                    a = y[u >>> 24] << 24 ^ y[h >> 16 & 255] << 16 ^ y[o >> 8 & 255] << 8 ^ y[255 & l] ^ E[v + 2],
                    s = y[h >>> 24] << 24 ^ y[o >> 16 & 255] << 16 ^ y[l >> 8 & 255] << 8 ^ y[255 & u] ^ E[v + 3],
                    I[e] = O(i ^ L),
                    I[e + 1] = O(s ^ k),
                    I[e + 2] = O(a ^ C),
                    I[e + 3] = O(n ^ _),
                    L = d,
                    k = c,
                    C = f,
                    _ = g,
                    e += 4
                }
                return I.buffer
            }
            ,
            t
        }();
        e.default = a
    }
    , function(t, e, r) {
        "use strict";
        var i = r(19);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var n = r(0)
          , a = r(2)
          , s = r(1)
          , o = r(10)
          , l = r(25)
          , u = function() {
            function t(t) {
                this.hls = void 0,
                this.loaders = {},
                this.decryptkey = null,
                this.decrypturl = null,
                this.hls = t,
                this._registerListeners()
            }
            var e = t.prototype;
            return e._registerListeners = function() {
                this.hls.on(n.Events.KEY_LOADING, this.onKeyLoading, this)
            }
            ,
            e._unregisterListeners = function() {
                this.hls.off(n.Events.KEY_LOADING, this.onKeyLoading)
            }
            ,
            e.destroy = function() {
                for (var t in this._unregisterListeners(),
                this.loaders) {
                    var e = this.loaders[t];
                    e && e.destroy()
                }
                this.loaders = {}
            }
            ,
            e.onKeyLoading = function(t, e) {
                var r = e.frag
                  , i = r.type
                  , a = this.loaders[i];
                if (r.decryptdata) {
                    var o = r.decryptdata.uri;
                    if (o !== this.decrypturl || null === this.decryptkey) {
                        var l = this.hls.config;
                        if (a && (s.logger.warn("abort previous key loader for type:" + i),
                        a.abort()),
                        !o)
                            return void s.logger.warn("key uri is falsy");
                        var u = l.loader
                          , h = r.loader = this.loaders[i] = new u(l);
                        this.decrypturl = o,
                        this.decryptkey = null;
                        var d = {
                            url: o,
                            frag: r,
                            responseType: "arraybuffer"
                        }
                          , c = {
                            timeout: l.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: l.fragLoadingRetryDelay,
                            maxRetryDelay: l.fragLoadingMaxRetryTimeout,
                            highWaterMark: 0
                        }
                          , f = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        };
                        h.load(d, c, f)
                    } else
                        this.decryptkey && (r.decryptdata.key = this.decryptkey,
                        this.hls.trigger(n.Events.KEY_LOADED, {
                            frag: r
                        }))
                } else
                    s.logger.warn("Missing decryption data on fragment in onKeyLoading")
            }
            ,
            e.loadsuccess = function(t, e, r) {
                return i.g(i.v(0, i.d(["IwQAAgADOAAjDgACAAMABAAFAAYABwAIAAkACgALAAwADQEDPAAEDCVmJXIlYSVnB0AbEREBAwwlZCVlJWMlciV5JXAldCVkJWEldCVhJEACL1gROL4jETwBBAwlbCVvJWclZyVlJXIHDCVlJXIlciVvJXIHDCVhJWYldCVlJXIlICVrJWUleSUgJWwlbyVhJWQlLCUgJWQlZSVjJXIleSVwJXQlZCVhJXQlYSUgJXUlbiVzJWUldBoBEQ0wAQQ8AgQ8AwQMJWQlYSV0JWEHQD4BGxERAQAMJWglbCVzJAwlYyVvJW4lZiVpJWcHDCVvJXYlZSVyJWwlYSV5JUslZSV5B0AvOC8RAQAMJWglbCVzJAwlYyVvJW4lZiVpJWcHDCVvJXYlZSVyJWwlYSV5JUkldgdALxEBBRAEGxERODwRAQY8ADMEBAwlZCVlJWMlciV5JXAldCVvB0ABAAwlaCVsJXMkDCVjJW8lbiVmJWklZwcMJW8ldiVlJXIlbCVhJXklSyVlJXkHQBYBGxERAQc8ADMEBAwlZCVlJWMlciV5JXAldCVvB0ABAAwlaCVsJXMkDCVjJW8lbiVmJWklZwcMJW8ldiVlJXIlbCVhJXklSSV2B0AWARsREQEIPAUfOQAbEREBCTwFHzkAGxERAQo8ABsREQEKQzwQKgIvETgaEQELAQYMJXMldSViJXMldCVyJWklbiVnJBAKPAI7EAo8Ajs8AjEaAhsREQEMAQcMJXMldSViJXMldCVyJWklbiVnJBAKPAI7EAo8Ajs8AjEaAhsREQEIDCVwJXUlcyVoJDwGBBALPBAaAhoBEQEJDCVwJXUlcyVoJDwGBBAMPBAaAhoBEQEKIEMgFAEUADwBMRsRMwAUAEUROD4BDTwHBAwlbSVvJWQlZSVPJWYlTyVwJWUlciVhJXQlaSVvJW4HDCVjJWIlYwcQCBAJPgIbEREBBQENDCVkJWUlYyVyJXklcCV0JBAEGgEbERE8ADMEBAwlcyVoJWklZiV0JVUlaSVuJXQlOAdAAQUMJWIldSVmJWYlZSVyJEAWAREBAAwlZCVlJWMlciV5JXAldCVrJWUleSQBAwwlZCVlJWMlciV5JXAldCVkJWEldCVhJAwlayVlJXkHEAUIFAARCBERAQMMJWwlbyVhJWQlZSVyJBgIEREBAAwlbCVvJWElZCVlJXIlcyQBAwwldCV5JXAlZSRAByYRAQAMJWglbCVzJAwldCVyJWklZyVnJWUlcgc8CAQMJUUldiVlJW4ldCVzBwwlSyVFJVklXyVMJU8lQSVEJUUlRAdAPAkfOQAgDCVmJXIlYSVnMhADCBERGgIRDTABAxwJAAAbERENMA==", [7, 1018, 262, 266, 264, 312, 313, 325, 323, 757, 515, 520, 518, 676, 674, 507]]), [function() {
                    return void 0 === r ? void 0 : r
                }
                , function() {
                    return void 0 === s ? void 0 : s
                }
                , function() {
                    return "undefined" == typeof Uint8Array ? void 0 : Uint8Array
                }
                , function() {
                    return void 0 === t ? void 0 : t
                }
                , function() {
                    return void 0 === o ? void 0 : o
                }
                , function() {
                    return "undefined" == typeof Array ? void 0 : Array
                }
                , function() {
                    return "undefined" == typeof parseInt ? void 0 : parseInt
                }
                , function() {
                    return void 0 === l ? void 0 : l
                }
                , function() {
                    return void 0 === n ? void 0 : n
                }
                , function() {
                    return "undefined" == typeof Object ? void 0 : Object
                }
                ])).call(this)
            }
            ,
            e.loaderror = function(t, e) {
                var r = e.frag
                  , i = r.loader;
                i && i.abort(),
                delete this.loaders[r.type],
                this.hls.trigger(n.Events.ERROR, {
                    type: a.ErrorTypes.NETWORK_ERROR,
                    details: a.ErrorDetails.KEY_LOAD_ERROR,
                    fatal: !1,
                    frag: r,
                    response: t
                })
            }
            ,
            e.loadtimeout = function(t, e) {
                var r = e.frag
                  , i = r.loader;
                i && i.abort(),
                delete this.loaders[r.type],
                this.hls.trigger(n.Events.ERROR, {
                    type: a.ErrorTypes.NETWORK_ERROR,
                    details: a.ErrorDetails.KEY_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: r
                })
            }
            ,
            t
        }();
        e.default = u
    }
    , function(t, e, r) {
        function i(t) {
            var e = {};
            function r(i) {
                if (e[i])
                    return e[i].exports;
                var n = e[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return t[i].call(n.exports, n, n.exports, r),
                n.l = !0,
                n.exports
            }
            r.m = t,
            r.c = e,
            r.i = function(t) {
                return t
            }
            ,
            r.d = function(t, e, i) {
                r.o(t, e) || Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }
            ,
            r.r = function(t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            r.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return r.d(e, "a", e),
                e
            }
            ,
            r.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            r.p = "/",
            r.oe = function(t) {
                throw console.error(t),
                t
            }
            ;
            var i = r(r.s = ENTRY_MODULE);
            return i.default || i
        }
        function n(t) {
            return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }
        function a(t, e, i) {
            var a = {};
            a[i] = [];
            var s = e.toString()
              , o = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
            if (!o)
                return a;
            for (var l, u = o[1], h = new RegExp("(\\\\n|\\W)" + n(u) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g"); l = h.exec(s); )
                "dll-reference" !== l[3] && a[i].push(l[3]);
            for (h = new RegExp("\\(" + n(u) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g"); l = h.exec(s); )
                t[l[2]] || (a[i].push(l[1]),
                t[l[2]] = r(l[1]).m),
                a[l[2]] = a[l[2]] || [],
                a[l[2]].push(l[4]);
            for (var d, c = Object.keys(a), f = 0; f < c.length; f++)
                for (var g = 0; g < a[c[f]].length; g++)
                    d = a[c[f]][g],
                    isNaN(1 * d) || (a[c[f]][g] = 1 * a[c[f]][g]);
            return a
        }
        function s(t) {
            return Object.keys(t).reduce((function(e, r) {
                return e || t[r].length > 0
            }
            ), !1)
        }
        t.exports = function(t, e) {
            e = e || {};
            var n = {
                main: r.m
            }
              , o = e.all ? {
                main: Object.keys(n.main)
            } : function(t, e) {
                for (var r = {
                    main: [e]
                }, i = {
                    main: []
                }, n = {
                    main: {}
                }; s(r); )
                    for (var o = Object.keys(r), l = 0; l < o.length; l++) {
                        var u = o[l]
                          , h = r[u].pop();
                        if (n[u] = n[u] || {},
                        !n[u][h] && t[u][h]) {
                            n[u][h] = !0,
                            i[u] = i[u] || [],
                            i[u].push(h);
                            for (var d = a(t, t[u][h], u), c = Object.keys(d), f = 0; f < c.length; f++)
                                r[c[f]] = r[c[f]] || [],
                                r[c[f]] = r[c[f]].concat(d[c[f]])
                        }
                    }
                return i
            }(n, t)
              , l = "";
            Object.keys(o).filter((function(t) {
                return "main" !== t
            }
            )).forEach((function(t) {
                for (var e = 0; o[t][e]; )
                    e++;
                o[t].push(e),
                n[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
                l = l + "var " + t + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o[t].map((function(e) {
                    return JSON.stringify(e) + ": " + n[t][e].toString()
                }
                )).join(",") + "});\n"
            }
            )),
            l = l + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o.main.map((function(t) {
                return JSON.stringify(t) + ": " + n.main[t].toString()
            }
            )).join(",") + "}))(self);";
            var u = new window.Blob([l],{
                type: "text/javascript"
            });
            if (e.bare)
                return u;
            var h = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u)
              , d = new window.Worker(h);
            return d.objectURL = h,
            d
        }
    }
    , function(t, e, r) {
        "use strict";
        var i = r(19);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var n, a = r(3), s = r(0), o = r(1), l = r(2), u = r(6), h = r(18), d = r(7), c = (n = r(27)) && n.__esModule ? n : {
            default: n
        };
        var f = (0,
        h.getMediaSource)()
          , g = /([ha]vc.)(?:\.[^.,]+)+/
          , v = function() {
            function t(t) {
                var e = this;
                this.details = null,
                this._objectUrl = null,
                this.operationQueue = void 0,
                this.listeners = void 0,
                this.hls = void 0,
                this.bufferCodecEventsExpected = 0,
                this._bufferCodecEventsTotal = 0,
                this.media = null,
                this.mediaSource = null,
                this.appendError = 0,
                this.tracks = {},
                this.pendingTracks = {},
                this.sourceBuffer = void 0,
                this._onMediaSourceOpen = function() {
                    var t = e.hls
                      , r = e.media
                      , i = e.mediaSource;
                    o.logger.log("[buffer-controller]: Media source opened"),
                    r && (e.updateMediaElementDuration(),
                    t.trigger(s.Events.MEDIA_ATTACHED, {
                        media: r
                    })),
                    i && i.removeEventListener("sourceopen", e._onMediaSourceOpen),
                    e.checkPendingTracks()
                }
                ,
                this._onMediaSourceClose = function() {
                    o.logger.log("[buffer-controller]: Media source closed")
                }
                ,
                this._onMediaSourceEnded = function() {
                    o.logger.log("[buffer-controller]: Media source ended")
                }
                ,
                this.hls = t,
                this._initSourceBuffer(),
                this.registerListeners()
            }
            var e = t.prototype;
            return e.hasSourceTypes = function() {
                return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
            }
            ,
            e.destroy = function() {
                this.unregisterListeners(),
                this.details = null
            }
            ,
            e.registerListeners = function() {
                var t = this.hls;
                t.on(s.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(s.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.on(s.Events.BUFFER_RESET, this.onBufferReset, this),
                t.on(s.Events.BUFFER_APPENDING, this.onBufferAppending, this),
                t.on(s.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                t.on(s.Events.BUFFER_EOS, this.onBufferEos, this),
                t.on(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                t.on(s.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                t.on(s.Events.FRAG_PARSED, this.onFragParsed, this),
                t.on(s.Events.FRAG_CHANGED, this.onFragChanged, this)
            }
            ,
            e.unregisterListeners = function() {
                var t = this.hls;
                t.off(s.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(s.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.off(s.Events.BUFFER_RESET, this.onBufferReset, this),
                t.off(s.Events.BUFFER_APPENDING, this.onBufferAppending, this),
                t.off(s.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                t.off(s.Events.BUFFER_EOS, this.onBufferEos, this),
                t.off(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                t.off(s.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                t.off(s.Events.FRAG_PARSED, this.onFragParsed, this),
                t.off(s.Events.FRAG_CHANGED, this.onFragChanged, this)
            }
            ,
            e._initSourceBuffer = function() {
                this.sourceBuffer = {},
                this.operationQueue = new c.default(this.sourceBuffer),
                this.listeners = {
                    audio: [],
                    video: [],
                    audiovideo: []
                }
            }
            ,
            e.onManifestParsed = function(t, e) {
                var r = 2;
                (e.audio && !e.video || !e.altAudio) && (r = 1),
                this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r,
                this.details = null,
                o.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
            }
            ,
            e.onMediaAttaching = function(t, e) {
                var r = this.media = e.media;
                if (r && f) {
                    var i = this.mediaSource = new f;
                    i.addEventListener("sourceopen", this._onMediaSourceOpen),
                    i.addEventListener("sourceended", this._onMediaSourceEnded),
                    i.addEventListener("sourceclose", this._onMediaSourceClose),
                    r.src = self.URL.createObjectURL(i),
                    this._objectUrl = r.src
                }
            }
            ,
            e.onMediaDetaching = function() {
                var t = this.media
                  , e = this.mediaSource
                  , r = this._objectUrl;
                if (e) {
                    if (o.logger.log("[buffer-controller]: media source detaching"),
                    "open" === e.readyState)
                        try {
                            e.endOfStream()
                        } catch (t) {
                            o.logger.warn("[buffer-controller]: onMediaDetaching: " + t.message + " while calling endOfStream")
                        }
                    this.onBufferReset(),
                    e.removeEventListener("sourceopen", this._onMediaSourceOpen),
                    e.removeEventListener("sourceended", this._onMediaSourceEnded),
                    e.removeEventListener("sourceclose", this._onMediaSourceClose),
                    t && (r && self.URL.revokeObjectURL(r),
                    t.src === r ? (t.removeAttribute("src"),
                    t.load()) : o.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),
                    this.mediaSource = null,
                    this.media = null,
                    this._objectUrl = null,
                    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal,
                    this.pendingTracks = {},
                    this.tracks = {}
                }
                this.hls.trigger(s.Events.MEDIA_DETACHED, void 0)
            }
            ,
            e.onBufferReset = function() {
                var t = this;
                this.getSourceBufferTypes().forEach((function(e) {
                    var r = t.sourceBuffer[e];
                    try {
                        r && (t.removeBufferListeners(e),
                        t.mediaSource && t.mediaSource.removeSourceBuffer(r),
                        t.sourceBuffer[e] = void 0)
                    } catch (t) {
                        o.logger.warn("[buffer-controller]: Failed to reset the " + e + " buffer", t)
                    }
                }
                )),
                this._initSourceBuffer()
            }
            ,
            e.onBufferCodecs = function(t, e) {
                var r = this
                  , i = this.getSourceBufferTypes().length;
                Object.keys(e).forEach((function(t) {
                    if (i) {
                        var n = r.tracks[t];
                        if (n && "function" == typeof n.buffer.changeType) {
                            var a = e[t]
                              , s = a.id
                              , l = a.codec
                              , u = a.levelCodec
                              , h = a.container
                              , d = a.metadata
                              , c = (n.levelCodec || n.codec).replace(g, "$1")
                              , f = (u || l).replace(g, "$1");
                            if (c !== f) {
                                var v = h + ";codecs=" + (u || l);
                                r.appendChangeType(t, v),
                                o.logger.log("[buffer-controller]: switching codec " + c + " to " + f),
                                r.tracks[t] = {
                                    buffer: n.buffer,
                                    codec: l,
                                    container: h,
                                    levelCodec: u,
                                    metadata: d,
                                    id: s
                                }
                            }
                        }
                    } else
                        r.pendingTracks[t] = e[t]
                }
                )),
                i || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0),
                this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
            }
            ,
            e.appendChangeType = function(t, e) {
                var r = this
                  , i = this.operationQueue
                  , n = {
                    execute: function() {
                        var n = r.sourceBuffer[t];
                        n && (o.logger.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + e),
                        n.changeType(e)),
                        i.shiftAndExecuteNext(t)
                    },
                    onStart: function() {},
                    onComplete: function() {},
                    onError: function(e) {
                        o.logger.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", e)
                    }
                };
                i.append(n, t)
            }
            ,
            e.onBufferAppending = function(t, e) {
                var r = this
                  , i = this.hls
                  , n = this.operationQueue
                  , a = this.tracks
                  , h = e.data
                  , d = e.type
                  , c = e.frag
                  , f = e.part
                  , g = e.chunkMeta
                  , v = g.buffering[d]
                  , p = self.performance.now();
                v.start = p;
                var m = c.stats.buffering
                  , E = f ? f.stats.buffering : null;
                0 === m.start && (m.start = p),
                E && 0 === E.start && (E.start = p);
                var y = a.audio
                  , T = "audio" === d && 1 === g.id && "audio/mpeg" === (null == y ? void 0 : y.container)
                  , A = {
                    execute: function() {
                        if (v.executeStart = self.performance.now(),
                        T) {
                            var t = r.sourceBuffer[d];
                            if (t) {
                                var e = c.start - t.timestampOffset;
                                Math.abs(e) >= .1 && (o.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + c.start + " (delta: " + e + ") sn: " + c.sn + ")"),
                                t.timestampOffset = c.start)
                            }
                        }
                        r.appendExecutor(h, d)
                    },
                    onStart: function() {},
                    onComplete: function() {
                        var t = self.performance.now();
                        v.executeEnd = v.end = t,
                        0 === m.first && (m.first = t),
                        E && 0 === E.first && (E.first = t);
                        var e = r.sourceBuffer
                          , i = {};
                        for (var n in e)
                            i[n] = u.BufferHelper.getBuffered(e[n]);
                        r.appendError = 0,
                        r.hls.trigger(s.Events.BUFFER_APPENDED, {
                            type: d,
                            frag: c,
                            part: f,
                            chunkMeta: g,
                            parent: c.type,
                            timeRanges: i
                        })
                    },
                    onError: function(t) {
                        o.logger.error("[buffer-controller]: Error encountered while trying to append to the " + d + " SourceBuffer", t);
                        var e = {
                            type: l.ErrorTypes.MEDIA_ERROR,
                            parent: c.type,
                            details: l.ErrorDetails.BUFFER_APPEND_ERROR,
                            err: t,
                            fatal: !1
                        };
                        t.code === DOMException.QUOTA_EXCEEDED_ERR ? e.details = l.ErrorDetails.BUFFER_FULL_ERROR : (r.appendError++,
                        e.details = l.ErrorDetails.BUFFER_APPEND_ERROR,
                        r.appendError > i.config.appendErrorMaxRetry && (o.logger.error("[buffer-controller]: Failed " + i.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"),
                        e.fatal = !0)),
                        i.trigger(s.Events.ERROR, e)
                    }
                };
                n.append(A, d)
            }
            ,
            e.onBufferFlushing = function(t, e) {
                var r = this
                  , i = this.operationQueue
                  , n = function(t) {
                    return {
                        execute: r.removeExecutor.bind(r, t, e.startOffset, e.endOffset),
                        onStart: function() {},
                        onComplete: function() {
                            r.hls.trigger(s.Events.BUFFER_FLUSHED, {
                                type: t
                            })
                        },
                        onError: function(e) {
                            o.logger.warn("[buffer-controller]: Failed to remove from " + t + " SourceBuffer", e)
                        }
                    }
                };
                e.type ? i.append(n(e.type), e.type) : this.getSourceBufferTypes().forEach((function(t) {
                    i.append(n(t), t)
                }
                ))
            }
            ,
            e.onFragParsed = function(t, e) {
                var r = this
                  , i = e.frag
                  , n = e.part
                  , a = []
                  , l = n ? n.elementaryStreams : i.elementaryStreams;
                l[d.ElementaryStreamTypes.AUDIOVIDEO] ? a.push("audiovideo") : (l[d.ElementaryStreamTypes.AUDIO] && a.push("audio"),
                l[d.ElementaryStreamTypes.VIDEO] && a.push("video"));
                0 === a.length && o.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + i.type + " level: " + i.level + " sn: " + i.sn),
                this.blockBuffers((function() {
                    var t = self.performance.now();
                    i.stats.buffering.end = t,
                    n && (n.stats.buffering.end = t);
                    var e = n ? n.stats : i.stats;
                    r.hls.trigger(s.Events.FRAG_BUFFERED, {
                        frag: i,
                        part: n,
                        stats: e,
                        id: i.type
                    })
                }
                ), a)
            }
            ,
            e.onFragChanged = function(t, e) {
                this.flushBackBuffer()
            }
            ,
            e.onBufferEos = function(t, e) {
                var r = this;
                this.getSourceBufferTypes().reduce((function(t, i) {
                    var n = r.sourceBuffer[i];
                    return e.type && e.type !== i || n && !n.ended && (n.ended = !0,
                    o.logger.log("[buffer-controller]: " + i + " sourceBuffer now EOS")),
                    t && !(n && !n.ended)
                }
                ), !0) && this.blockBuffers((function() {
                    var t = r.mediaSource;
                    t && "open" === t.readyState && t.endOfStream()
                }
                ))
            }
            ,
            e.onLevelUpdated = function(t, e) {
                var r = e.details;
                r.fragments.length && (this.details = r,
                this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
            }
            ,
            e.flushBackBuffer = function() {
                var t = this.hls
                  , e = this.details
                  , r = this.media
                  , i = this.sourceBuffer;
                if (r && null !== e) {
                    var n = this.getSourceBufferTypes();
                    if (n.length) {
                        var o = e.live && null !== t.config.liveBackBufferLength ? t.config.liveBackBufferLength : t.config.backBufferLength;
                        if ((0,
                        a.isFiniteNumber)(o) && !(o < 0)) {
                            var l = r.currentTime
                              , h = e.levelTargetDuration
                              , d = Math.max(o, h)
                              , c = Math.floor(l / h) * h - d;
                            n.forEach((function(r) {
                                var n = i[r];
                                if (n) {
                                    var a = u.BufferHelper.getBuffered(n);
                                    a.length > 0 && c > a.start(0) && (t.trigger(s.Events.BACK_BUFFER_REACHED, {
                                        bufferEnd: c
                                    }),
                                    e.live && t.trigger(s.Events.LIVE_BACK_BUFFER_REACHED, {
                                        bufferEnd: c
                                    }),
                                    t.trigger(s.Events.BUFFER_FLUSHING, {
                                        startOffset: 0,
                                        endOffset: c,
                                        type: r
                                    }))
                                }
                            }
                            ))
                        }
                    }
                }
            }
            ,
            e.updateMediaElementDuration = function() {
                if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
                    var t = this.details
                      , e = this.hls
                      , r = this.media
                      , i = this.mediaSource
                      , n = t.fragments[0].start + t.totalduration
                      , s = r.duration
                      , l = (0,
                    a.isFiniteNumber)(i.duration) ? i.duration : 0;
                    t.live && e.config.liveDurationInfinity ? (o.logger.log("[buffer-controller]: Media Source duration is set to Infinity"),
                    i.duration = 1 / 0,
                    this.updateSeekableRange(t)) : (n > l && n > s || !(0,
                    a.isFiniteNumber)(s)) && (o.logger.log("[buffer-controller]: Updating Media Source duration to " + n.toFixed(3)),
                    i.duration = n)
                }
            }
            ,
            e.updateSeekableRange = function(t) {
                var e = this.mediaSource
                  , r = t.fragments;
                if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                    var i = Math.max(0, r[0].start)
                      , n = Math.max(i, i + t.totalduration);
                    e.setLiveSeekableRange(i, n)
                }
            }
            ,
            e.checkPendingTracks = function() {
                var t = this.bufferCodecEventsExpected
                  , e = this.operationQueue
                  , r = this.pendingTracks
                  , i = Object.keys(r).length;
                if (i && !t || 2 === i) {
                    this.createSourceBuffers(r),
                    this.pendingTracks = {};
                    var n = this.getSourceBufferTypes();
                    if (0 === n.length)
                        return void this.hls.trigger(s.Events.ERROR, {
                            type: l.ErrorTypes.MEDIA_ERROR,
                            details: l.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            reason: "could not create source buffer for media codec(s)"
                        });
                    n.forEach((function(t) {
                        e.executeNext(t)
                    }
                    ))
                }
            }
            ,
            e.createSourceBuffers = function(t) {
                var e = this.sourceBuffer
                  , r = this.mediaSource;
                if (!r)
                    throw Error("createSourceBuffers called when mediaSource was null");
                var i = 0;
                for (var n in t)
                    if (!e[n]) {
                        var a = t[n];
                        if (!a)
                            throw Error("source buffer exists for track " + n + ", however track does not");
                        var u = a.levelCodec || a.codec
                          , h = a.container + ";codecs=" + u;
                        o.logger.log("[buffer-controller]: creating sourceBuffer(" + h + ")");
                        try {
                            var d = e[n] = r.addSourceBuffer(h)
                              , c = n;
                            this.addBufferListener(c, "updatestart", this._onSBUpdateStart),
                            this.addBufferListener(c, "updateend", this._onSBUpdateEnd),
                            this.addBufferListener(c, "error", this._onSBUpdateError),
                            this.tracks[n] = {
                                buffer: d,
                                codec: u,
                                container: a.container,
                                levelCodec: a.levelCodec,
                                metadata: a.metadata,
                                id: a.id
                            },
                            i++
                        } catch (t) {
                            o.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + t.message),
                            this.hls.trigger(s.Events.ERROR, {
                                type: l.ErrorTypes.MEDIA_ERROR,
                                details: l.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                fatal: !1,
                                error: t,
                                mimeType: h
                            })
                        }
                    }
                i && this.hls.trigger(s.Events.BUFFER_CREATED, {
                    tracks: this.tracks
                })
            }
            ,
            e._onSBUpdateStart = function(t) {
                this.operationQueue.current(t).onStart()
            }
            ,
            e._onSBUpdateEnd = function(t) {
                var e = this.operationQueue;
                e.current(t).onComplete(),
                e.shiftAndExecuteNext(t)
            }
            ,
            e._onSBUpdateError = function(t, e) {
                o.logger.error("[buffer-controller]: " + t + " SourceBuffer error", e),
                this.hls.trigger(s.Events.ERROR, {
                    type: l.ErrorTypes.MEDIA_ERROR,
                    details: l.ErrorDetails.BUFFER_APPENDING_ERROR,
                    fatal: !1
                });
                var r = this.operationQueue.current(t);
                r && r.onError(e)
            }
            ,
            e.removeExecutor = function(t, e, r) {
                var i = this.media
                  , n = this.mediaSource
                  , s = this.operationQueue
                  , l = this.sourceBuffer[t];
                if (!i || !n || !l)
                    return o.logger.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"),
                    void s.shiftAndExecuteNext(t);
                var u = (0,
                a.isFiniteNumber)(i.duration) ? i.duration : 1 / 0
                  , h = (0,
                a.isFiniteNumber)(n.duration) ? n.duration : 1 / 0
                  , d = Math.max(0, e)
                  , c = Math.min(r, u, h);
                c > d ? (o.logger.log("[buffer-controller]: Removing [" + d + "," + c + "] from the " + t + " SourceBuffer"),
                l.remove(d, c)) : s.shiftAndExecuteNext(t)
            }
            ,
            e.appendExecutor = function(t, e) {
                return i.g(i.v(0, i.d(["IwQAAgADOBwjBgACAAMABAAFAQMBAAwlbyVwJWUlciVhJXQlaSVvJW4lUSV1JWUldSVlJEAbEREBBAEADCVzJW8ldSVyJWMlZSVCJXUlZiVmJWUlciRAGxERAQUBBDwAHyRAGxEREAUCL3AROBMRPAEEDCVsJW8lZyVnJWUlcgcMJXclYSVyJW4HDCVbJWIldSVmJWYlZSVyJS0lYyVvJW4ldCVyJW8lbCVsJWUlciVdJTolICVBJXQldCVlJW0lcCV0JWklbiVnJSAldCVvJSAlYSVwJXAlZSVuJWQlICV0JW8lICV0JWglZSUgPAAfMQwlICVTJW8ldSVyJWMlZSVCJXUlZiVmJWUlciUsJSAlYiV1JXQlICVpJXQlICVkJW8lZSVzJSAlbiVvJXQlICVlJXglaSVzJXQxGgERAQMMJXMlaCVpJWYldCVBJW4lZCVFJXglZSVjJXUldCVlJU4lZSV4JXQkPAAfGgERDTABBQwlZSVuJWQlZSVkJDYIEREBBQwlYSVwJXAlZSVuJWQlQiV1JWYlZiVlJXIkPAIfGgERDTABAxwJAAAbERENMA==", [7, 424, 110, 370]]), [function() {
                    return void 0 === e ? void 0 : e
                }
                , function() {
                    return void 0 === o ? void 0 : o
                }
                , function() {
                    return void 0 === t ? void 0 : t
                }
                ])).call(this)
            }
            ,
            e.blockBuffers = function(t, e) {
                var r = this;
                if (void 0 === e && (e = this.getSourceBufferTypes()),
                !e.length)
                    return o.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),
                    void Promise.resolve(t);
                var i = this.operationQueue
                  , n = e.map((function(t) {
                    return i.appendBlocker(t)
                }
                ));
                Promise.all(n).then((function() {
                    t(),
                    e.forEach((function(t) {
                        var e = r.sourceBuffer[t];
                        e && e.updating || i.shiftAndExecuteNext(t)
                    }
                    ))
                }
                ))
            }
            ,
            e.getSourceBufferTypes = function() {
                return Object.keys(this.sourceBuffer)
            }
            ,
            e.addBufferListener = function(t, e, r) {
                var i = this.sourceBuffer[t];
                if (i) {
                    var n = r.bind(this, t);
                    this.listeners[t].push({
                        event: e,
                        listener: n
                    }),
                    i.addEventListener(e, n)
                }
            }
            ,
            e.removeBufferListeners = function(t) {
                var e = this.sourceBuffer[t];
                e && this.listeners[t].forEach((function(t) {
                    e.removeEventListener(t.event, t.listener)
                }
                ))
            }
            ,
            t
        }();
        e.default = v
    }
    , function(t, e, r) {
        /*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
        !function(e) {
            "use strict";
            function r(t) {
                return parseInt(t) === t
            }
            function i(t) {
                if (!r(t.length))
                    return !1;
                for (var e = 0; e < t.length; e++)
                    if (!r(t[e]) || t[e] < 0 || t[e] > 255)
                        return !1;
                return !0
            }
            function n(t, e) {
                if (t.buffer && "Uint8Array" === t.name)
                    return e && (t = t.slice ? t.slice() : Array.prototype.slice.call(t)),
                    t;
                if (Array.isArray(t)) {
                    if (!i(t))
                        throw new Error("Array contains invalid value: " + t);
                    return new Uint8Array(t)
                }
                if (r(t.length) && i(t))
                    return new Uint8Array(t);
                throw new Error("unsupported array-like object")
            }
            function a(t) {
                return new Uint8Array(t)
            }
            function s(t, e, r, i, n) {
                null == i && null == n || (t = t.slice ? t.slice(i, n) : Array.prototype.slice.call(t, i, n)),
                e.set(t, r)
            }
            var o, l = {
                toBytes: function(t) {
                    var e = []
                      , r = 0;
                    for (t = encodeURI(t); r < t.length; ) {
                        var i = t.charCodeAt(r++);
                        37 === i ? (e.push(parseInt(t.substr(r, 2), 16)),
                        r += 2) : e.push(i)
                    }
                    return n(e)
                },
                fromBytes: function(t) {
                    for (var e = [], r = 0; r < t.length; ) {
                        var i = t[r];
                        i < 128 ? (e.push(String.fromCharCode(i)),
                        r++) : i > 191 && i < 224 ? (e.push(String.fromCharCode((31 & i) << 6 | 63 & t[r + 1])),
                        r += 2) : (e.push(String.fromCharCode((15 & i) << 12 | (63 & t[r + 1]) << 6 | 63 & t[r + 2])),
                        r += 3)
                    }
                    return e.join("")
                }
            }, u = (o = "0123456789abcdef",
            {
                toBytes: function(t) {
                    for (var e = [], r = 0; r < t.length; r += 2)
                        e.push(parseInt(t.substr(r, 2), 16));
                    return e
                },
                fromBytes: function(t) {
                    for (var e = [], r = 0; r < t.length; r++) {
                        var i = t[r];
                        e.push(o[(240 & i) >> 4] + o[15 & i])
                    }
                    return e.join("")
                }
            }), h = {
                16: 10,
                24: 12,
                32: 14
            }, d = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], c = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], f = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], g = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986], v = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766], p = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126], m = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436], E = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890], y = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935], T = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600], A = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480], b = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795], S = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855], D = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150], R = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
            function L(t) {
                for (var e = [], r = 0; r < t.length; r += 4)
                    e.push(t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]);
                return e
            }
            var k = function t(e) {
                if (!(this instanceof t))
                    throw Error("AES must be instanitated with `new`");
                Object.defineProperty(this, "key", {
                    value: n(e, !0)
                }),
                this._prepare()
            };
            k.prototype._prepare = function() {
                var t = h[this.key.length];
                if (null == t)
                    throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
                this._Ke = [],
                this._Kd = [];
                for (var e = 0; e <= t; e++)
                    this._Ke.push([0, 0, 0, 0]),
                    this._Kd.push([0, 0, 0, 0]);
                var r, i = 4 * (t + 1), n = this.key.length / 4, a = L(this.key);
                for (e = 0; e < n; e++)
                    r = e >> 2,
                    this._Ke[r][e % 4] = a[e],
                    this._Kd[t - r][e % 4] = a[e];
                for (var s, o = 0, l = n; l < i; ) {
                    if (s = a[n - 1],
                    a[0] ^= c[s >> 16 & 255] << 24 ^ c[s >> 8 & 255] << 16 ^ c[255 & s] << 8 ^ c[s >> 24 & 255] ^ d[o] << 24,
                    o += 1,
                    8 != n)
                        for (e = 1; e < n; e++)
                            a[e] ^= a[e - 1];
                    else {
                        for (e = 1; e < n / 2; e++)
                            a[e] ^= a[e - 1];
                        s = a[n / 2 - 1],
                        a[n / 2] ^= c[255 & s] ^ c[s >> 8 & 255] << 8 ^ c[s >> 16 & 255] << 16 ^ c[s >> 24 & 255] << 24;
                        for (e = n / 2 + 1; e < n; e++)
                            a[e] ^= a[e - 1]
                    }
                    for (e = 0; e < n && l < i; )
                        u = l >> 2,
                        f = l % 4,
                        this._Ke[u][f] = a[e],
                        this._Kd[t - u][f] = a[e++],
                        l++
                }
                for (var u = 1; u < t; u++)
                    for (var f = 0; f < 4; f++)
                        s = this._Kd[u][f],
                        this._Kd[u][f] = b[s >> 24 & 255] ^ S[s >> 16 & 255] ^ D[s >> 8 & 255] ^ R[255 & s]
            }
            ,
            k.prototype.encrypt = function(t) {
                if (16 != t.length)
                    throw new Error("invalid plaintext size (must be 16 bytes)");
                for (var e = this._Ke.length - 1, r = [0, 0, 0, 0], i = L(t), n = 0; n < 4; n++)
                    i[n] ^= this._Ke[0][n];
                for (var s = 1; s < e; s++) {
                    for (n = 0; n < 4; n++)
                        r[n] = g[i[n] >> 24 & 255] ^ v[i[(n + 1) % 4] >> 16 & 255] ^ p[i[(n + 2) % 4] >> 8 & 255] ^ m[255 & i[(n + 3) % 4]] ^ this._Ke[s][n];
                    i = r.slice()
                }
                var o, l = a(16);
                for (n = 0; n < 4; n++)
                    o = this._Ke[e][n],
                    l[4 * n] = 255 & (c[i[n] >> 24 & 255] ^ o >> 24),
                    l[4 * n + 1] = 255 & (c[i[(n + 1) % 4] >> 16 & 255] ^ o >> 16),
                    l[4 * n + 2] = 255 & (c[i[(n + 2) % 4] >> 8 & 255] ^ o >> 8),
                    l[4 * n + 3] = 255 & (c[255 & i[(n + 3) % 4]] ^ o);
                return l
            }
            ,
            k.prototype.decrypt = function(t) {
                if (16 != t.length)
                    throw new Error("invalid ciphertext size (must be 16 bytes)");
                for (var e = this._Kd.length - 1, r = [0, 0, 0, 0], i = L(t), n = 0; n < 4; n++)
                    i[n] ^= this._Kd[0][n];
                for (var s = 1; s < e; s++) {
                    for (n = 0; n < 4; n++)
                        r[n] = E[i[n] >> 24 & 255] ^ y[i[(n + 3) % 4] >> 16 & 255] ^ T[i[(n + 2) % 4] >> 8 & 255] ^ A[255 & i[(n + 1) % 4]] ^ this._Kd[s][n];
                    i = r.slice()
                }
                var o, l = a(16);
                for (n = 0; n < 4; n++)
                    o = this._Kd[e][n],
                    l[4 * n] = 255 & (f[i[n] >> 24 & 255] ^ o >> 24),
                    l[4 * n + 1] = 255 & (f[i[(n + 3) % 4] >> 16 & 255] ^ o >> 16),
                    l[4 * n + 2] = 255 & (f[i[(n + 2) % 4] >> 8 & 255] ^ o >> 8),
                    l[4 * n + 3] = 255 & (f[255 & i[(n + 1) % 4]] ^ o);
                return l
            }
            ;
            var C = function t(e, r) {
                if (!(this instanceof t))
                    throw Error("AES must be instanitated with `new`");
                if (this.description = "Cipher Block Chaining",
                this.name = "cbc",
                r) {
                    if (16 != r.length)
                        throw new Error("invalid initialation vector size (must be 16 bytes)")
                } else
                    r = a(16);
                this._lastCipherblock = n(r, !0),
                this._aes = new k(e)
            };
            C.prototype.encrypt = function(t) {
                if ((t = n(t)).length % 16 != 0)
                    throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                for (var e = a(t.length), r = a(16), i = 0; i < t.length; i += 16) {
                    s(t, r, 0, i, i + 16);
                    for (var o = 0; o < 16; o++)
                        r[o] ^= this._lastCipherblock[o];
                    this._lastCipherblock = this._aes.encrypt(r),
                    s(this._lastCipherblock, e, i)
                }
                return e
            }
            ,
            C.prototype.decrypt = function(t) {
                if ((t = n(t)).length % 16 != 0)
                    throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                for (var e = a(t.length), r = a(16), i = 0; i < t.length; i += 16) {
                    s(t, r, 0, i, i + 16),
                    r = this._aes.decrypt(r);
                    for (var o = 0; o < 16; o++)
                        e[i + o] = r[o] ^ this._lastCipherblock[o];
                    s(t, this._lastCipherblock, 0, i, i + 16)
                }
                return e
            }
            ;
            var _ = function t(e) {
                if (!(this instanceof t))
                    throw Error("Counter must be instanitated with `new`");
                0 === e || e || (e = 1),
                "number" == typeof e ? (this._counter = a(16),
                this.setValue(e)) : this.setBytes(e)
            };
            _.prototype.setValue = function(t) {
                if ("number" != typeof t || parseInt(t) != t)
                    throw new Error("invalid counter value (must be an integer)");
                if (t > Number.MAX_SAFE_INTEGER)
                    throw new Error("integer value out of safe range");
                for (var e = 15; e >= 0; --e)
                    this._counter[e] = t % 256,
                    t = parseInt(t / 256)
            }
            ,
            _.prototype.setBytes = function(t) {
                if (16 != (t = n(t, !0)).length)
                    throw new Error("invalid counter bytes size (must be 16 bytes)");
                this._counter = t
            }
            ,
            _.prototype.increment = function() {
                for (var t = 15; t >= 0; t--) {
                    if (255 !== this._counter[t]) {
                        this._counter[t]++;
                        break
                    }
                    this._counter[t] = 0
                }
            }
            ;
            var w = {
                AES: k,
                Counter: _,
                modeOfOperation: {
                    cbc: C
                },
                utils: {
                    hex: u,
                    utf8: l
                },
                padding: {
                    pkcs7: {
                        pad: function(t) {
                            var e = 16 - (t = n(t, !0)).length % 16
                              , r = a(t.length + e);
                            s(t, r);
                            for (var i = t.length; i < r.length; i++)
                                r[i] = e;
                            return r
                        },
                        strip: function(t) {
                            if ((t = n(t, !0)).length < 16)
                                throw new Error("PKCS#7 invalid length");
                            var e = t[t.length - 1];
                            if (e > 16)
                                throw new Error("PKCS#7 padding byte out of range");
                            for (var r = t.length - e, i = 0; i < e; i++)
                                if (t[r + i] !== e)
                                    throw new Error("PKCS#7 invalid padding byte");
                            var o = a(r);
                            return s(t, o, 0, 0, r),
                            o
                        }
                    }
                },
                _arrayTest: {
                    coerceArray: n,
                    createArray: a,
                    copyArray: s
                }
            };
            t.exports = w
        }()
    }
    , function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "default", (function() {
            return o
        }
        ));
        var i = r(11)
          , n = r(0)
          , a = r(1)
          , s = r(16);
        function o(t) {
            var e = new s.EventEmitter
              , r = function(e, r) {
                t.postMessage({
                    event: e,
                    data: r
                })
            };
            e.on(n.Events.FRAG_DECRYPTED, r),
            e.on(n.Events.ERROR, r),
            t.addEventListener("message", (function(n) {
                var s = n.data;
                switch (s.cmd) {
                case "init":
                    var o = JSON.parse(s.config);
                    t.transmuxer = new i.c(e,s.typeSupported,o,s.vendor,s.id),
                    Object(a.enableLogs)(o.debug),
                    r("init", null);
                    break;
                case "configure":
                    t.transmuxer.configure(s.config);
                    break;
                case "demux":
                    var u = t.transmuxer.push(s.data, s.decryptdata, s.chunkMeta, s.state);
                    Object(i.d)(u) ? u.then((function(e) {
                        l(t, e)
                    }
                    )) : l(t, u);
                    break;
                case "flush":
                    var d = s.chunkMeta
                      , c = t.transmuxer.flush(d);
                    Object(i.d)(c) ? c.then((function(e) {
                        h(t, e, d)
                    }
                    )) : h(t, c, d)
                }
            }
            ))
        }
        function l(t, e) {
            if ((r = e.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment) {
                var r, i = [], n = e.remuxResult, a = n.audio, s = n.video;
                a && u(i, a),
                s && u(i, s),
                t.postMessage({
                    event: "transmuxComplete",
                    data: e
                }, i)
            }
        }
        function u(t, e) {
            e.data1 && t.push(e.data1.buffer),
            e.data2 && t.push(e.data2.buffer)
        }
        function h(t, e, r) {
            e.forEach((function(e) {
                l(t, e)
            }
            )),
            t.postMessage({
                event: "flush",
                data: r
            })
        }
    }
    , function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "default", (function() {
            return n
        }
        ));
        var i = r(1)
          , n = function() {
            function t(t) {
                this.buffers = void 0,
                this.queues = {
                    video: [],
                    audio: [],
                    audiovideo: []
                },
                this.buffers = t
            }
            var e = t.prototype;
            return e.append = function(t, e) {
                var r = this.queues[e];
                r.push(t),
                1 === r.length && this.buffers[e] && this.executeNext(e)
            }
            ,
            e.insertAbort = function(t, e) {
                this.queues[e].unshift(t),
                this.executeNext(e)
            }
            ,
            e.appendBlocker = function(t) {
                var e, r = new Promise((function(t) {
                    e = t
                }
                )), i = {
                    execute: e,
                    onStart: function() {},
                    onComplete: function() {},
                    onError: function() {}
                };
                return this.append(i, t),
                r
            }
            ,
            e.executeNext = function(t) {
                var e = this.buffers
                  , r = this.queues
                  , n = e[t]
                  , a = r[t];
                if (a.length) {
                    var s = a[0];
                    try {
                        s.execute()
                    } catch (e) {
                        i.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),
                        s.onError(e),
                        n && n.updating || (a.shift(),
                        this.executeNext(t))
                    }
                }
            }
            ,
            e.shiftAndExecuteNext = function(t) {
                this.queues[t].shift(),
                this.executeNext(t)
            }
            ,
            e.current = function(t) {
                return this.queues[t][0]
            }
            ,
            t
        }()
    }
    , function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "default", (function() {
            return ei
        }
        ));
        var i = r(12)
          , n = r(3)
          , a = r(0)
          , s = r(2)
          , o = r(1)
          , l = r(5)
          , u = r(7);
        function h(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var d = function() {
            function t(t) {
                this.PTSKnown = !1,
                this.alignedSliding = !1,
                this.averagetargetduration = void 0,
                this.endCC = 0,
                this.endSN = 0,
                this.fragments = void 0,
                this.fragmentHint = void 0,
                this.partList = null,
                this.live = !0,
                this.ageHeader = 0,
                this.advancedDateTime = void 0,
                this.updated = !0,
                this.advanced = !0,
                this.availabilityDelay = void 0,
                this.misses = 0,
                this.needSidxRanges = !1,
                this.startCC = 0,
                this.startSN = 0,
                this.startTimeOffset = null,
                this.targetduration = 0,
                this.totalduration = 0,
                this.type = null,
                this.url = void 0,
                this.m3u8 = "",
                this.version = null,
                this.canBlockReload = !1,
                this.canSkipUntil = 0,
                this.canSkipDateRanges = !1,
                this.skippedSegments = 0,
                this.recentlyRemovedDateranges = void 0,
                this.partHoldBack = 0,
                this.holdBack = 0,
                this.partTarget = 0,
                this.preloadHint = void 0,
                this.renditionReports = void 0,
                this.tuneInGoal = 0,
                this.deltaUpdateFailed = void 0,
                this.driftStartTime = 0,
                this.driftEndTime = 0,
                this.driftStart = 0,
                this.driftEnd = 0,
                this.fragments = [],
                this.url = t
            }
            var e, r, i;
            return t.prototype.reloaded = function(t) {
                if (!t)
                    return this.advanced = !0,
                    void (this.updated = !0);
                var e = this.lastPartSn - t.lastPartSn
                  , r = this.lastPartIndex - t.lastPartIndex;
                this.updated = this.endSN !== t.endSN || !!r || !!e,
                this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && r > 0,
                this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1,
                this.availabilityDelay = t.availabilityDelay
            }
            ,
            e = t,
            (r = [{
                key: "hasProgramDateTime",
                get: function() {
                    return !!this.fragments.length && Object(n.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime)
                }
            }, {
                key: "levelTargetDuration",
                get: function() {
                    return this.averagetargetduration || this.targetduration || 10
                }
            }, {
                key: "drift",
                get: function() {
                    var t = this.driftEndTime - this.driftStartTime;
                    return t > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t : 1
                }
            }, {
                key: "edge",
                get: function() {
                    return this.partEnd || this.fragmentEnd
                }
            }, {
                key: "partEnd",
                get: function() {
                    var t;
                    return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
                }
            }, {
                key: "fragmentEnd",
                get: function() {
                    var t;
                    return null !== (t = this.fragments) && void 0 !== t && t.length ? this.fragments[this.fragments.length - 1].end : 0
                }
            }, {
                key: "age",
                get: function() {
                    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
                }
            }, {
                key: "lastPartIndex",
                get: function() {
                    var t;
                    return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].index : -1
                }
            }, {
                key: "lastPartSn",
                get: function() {
                    var t;
                    return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
                }
            }]) && h(e.prototype, r),
            i && h(e, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }()
          , c = r(20)
          , f = /^(\d+)x(\d+)$/
          , g = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g
          , v = function() {
            function t(e) {
                for (var r in "string" == typeof e && (e = t.parseAttrList(e)),
                e)
                    e.hasOwnProperty(r) && (this[r] = e[r])
            }
            var e = t.prototype;
            return e.decimalInteger = function(t) {
                var e = parseInt(this[t], 10);
                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
            }
            ,
            e.hexadecimalInteger = function(t) {
                if (this[t]) {
                    var e = (this[t] || "0x").slice(2);
                    e = (1 & e.length ? "0" : "") + e;
                    for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++)
                        r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                    return r
                }
                return null
            }
            ,
            e.hexadecimalIntegerAsNumber = function(t) {
                var e = parseInt(this[t], 16);
                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
            }
            ,
            e.decimalFloatingPoint = function(t) {
                return parseFloat(this[t])
            }
            ,
            e.optionalFloat = function(t, e) {
                var r = this[t];
                return r ? parseFloat(r) : e
            }
            ,
            e.enumeratedString = function(t) {
                return this[t]
            }
            ,
            e.bool = function(t) {
                return "YES" === this[t]
            }
            ,
            e.decimalResolution = function(t) {
                var e = f.exec(this[t]);
                if (null !== e)
                    return {
                        width: parseInt(e[1], 10),
                        height: parseInt(e[2], 10)
                    }
            }
            ,
            t.parseAttrList = function(t) {
                var e, r = {};
                for (g.lastIndex = 0; null !== (e = g.exec(t)); ) {
                    var i = e[2];
                    0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)),
                    r[e[1]] = i
                }
                return r
            }
            ,
            t
        }()
          , p = {
            audio: {
                a3ds: !0,
                "ac-3": !0,
                "ac-4": !0,
                alac: !0,
                alaw: !0,
                dra1: !0,
                "dts+": !0,
                "dts-": !0,
                dtsc: !0,
                dtse: !0,
                dtsh: !0,
                "ec-3": !0,
                enca: !0,
                g719: !0,
                g726: !0,
                m4ae: !0,
                mha1: !0,
                mha2: !0,
                mhm1: !0,
                mhm2: !0,
                mlpa: !0,
                mp4a: !0,
                "raw ": !0,
                Opus: !0,
                samr: !0,
                sawb: !0,
                sawp: !0,
                sevc: !0,
                sqcp: !0,
                ssmv: !0,
                twos: !0,
                ulaw: !0
            },
            video: {
                avc1: !0,
                avc2: !0,
                avc3: !0,
                avc4: !0,
                avcp: !0,
                av01: !0,
                drac: !0,
                dvav: !0,
                dvhe: !0,
                encv: !0,
                hev1: !0,
                hvc1: !0,
                mjp2: !0,
                mp4v: !0,
                mvc1: !0,
                mvc2: !0,
                mvc3: !0,
                mvc4: !0,
                resv: !0,
                rv60: !0,
                s263: !0,
                svc1: !0,
                svc2: !0,
                "vc-1": !0,
                vp08: !0,
                vp09: !0
            },
            text: {
                stpp: !0,
                wvtt: !0
            }
        };
        function m(t, e) {
            return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
        }
        var E = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g
          , y = /#EXT-X-MEDIA:(.*)/g
          , T = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"),"g")
          , A = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"))
          , b = /\.(mp4|m4s|m4v|m4a)$/i;
        var S = function() {
            function t() {}
            return t.findGroup = function(t, e) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (i.id === e)
                        return i
                }
            }
            ,
            t.convertAVC1ToAVCOTI = function(t) {
                var e = t.split(".");
                if (e.length > 2) {
                    var r = e.shift() + ".";
                    return r += parseInt(e.shift()).toString(16),
                    r += ("000" + parseInt(e.shift()).toString(16)).substr(-4)
                }
                return t
            }
            ,
            t.resolve = function(t, e) {
                return i.buildAbsoluteURL(e, t, {
                    alwaysNormalize: !0
                })
            }
            ,
            t.parseMasterPlaylist = function(e, r) {
                var i, n = [], a = {}, s = !1;
                for (E.lastIndex = 0; null != (i = E.exec(e)); )
                    if (i[1]) {
                        var o = new v(i[1])
                          , l = {
                            attrs: o,
                            bitrate: o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
                            name: o.NAME,
                            url: t.resolve(i[2], r)
                        }
                          , u = o.decimalResolution("RESOLUTION");
                        u && (l.width = u.width,
                        l.height = u.height),
                        D((o.CODECS || "").split(/[ ,]+/).filter((function(t) {
                            return t
                        }
                        )), l),
                        l.videoCodec && -1 !== l.videoCodec.indexOf("avc1") && (l.videoCodec = t.convertAVC1ToAVCOTI(l.videoCodec)),
                        n.push(l)
                    } else if (i[3]) {
                        var h = new v(i[3]);
                        h["DATA-ID"] && (s = !0,
                        a[h["DATA-ID"]] = h)
                    }
                return {
                    levels: n,
                    sessionData: s ? a : null
                }
            }
            ,
            t.parseMasterPlaylistMedia = function(e, r, i, n) {
                var a;
                void 0 === n && (n = []);
                var s = []
                  , o = 0;
                for (y.lastIndex = 0; null !== (a = y.exec(e)); ) {
                    var l = new v(a[1]);
                    if (l.TYPE === i) {
                        var u = {
                            attrs: l,
                            bitrate: 0,
                            id: o++,
                            groupId: l["GROUP-ID"],
                            instreamId: l["INSTREAM-ID"],
                            name: l.NAME || l.LANGUAGE || "",
                            type: i,
                            default: l.bool("DEFAULT"),
                            autoselect: l.bool("AUTOSELECT"),
                            forced: l.bool("FORCED"),
                            lang: l.LANGUAGE,
                            url: l.URI ? t.resolve(l.URI, r) : ""
                        };
                        if (n.length) {
                            var h = t.findGroup(n, u.groupId) || n[0];
                            R(u, h, "audioCodec"),
                            R(u, h, "textCodec")
                        }
                        s.push(u)
                    }
                }
                return s
            }
            ,
            t.parseLevelPlaylist = function(t, e, r, a, s) {
                var l, h, f, g = new d(e), p = g.fragments, m = null, E = 0, y = 0, S = 0, D = 0, R = null, k = new u.Fragment(a,e), C = -1, _ = !1;
                for (T.lastIndex = 0,
                g.m3u8 = t; null !== (l = T.exec(t)); ) {
                    _ && (_ = !1,
                    (k = new u.Fragment(a,e)).start = S,
                    k.sn = E,
                    k.cc = D,
                    k.level = r,
                    m && (k.initSegment = m,
                    k.rawProgramDateTime = m.rawProgramDateTime,
                    m.rawProgramDateTime = null));
                    var w = l[1];
                    if (w) {
                        k.duration = parseFloat(w);
                        var I = (" " + l[2]).slice(1);
                        k.title = I || null,
                        k.tagList.push(I ? ["INF", w, I] : ["INF", w])
                    } else if (l[3])
                        Object(n.isFiniteNumber)(k.duration) && (k.start = S,
                        f && (k.levelkey = f),
                        k.sn = E,
                        k.level = r,
                        k.cc = D,
                        k.urlId = s,
                        p.push(k),
                        k.relurl = (" " + l[3]).slice(1),
                        L(k, R),
                        R = k,
                        S += k.duration,
                        E++,
                        y = 0,
                        _ = !0);
                    else if (l[4]) {
                        var O = (" " + l[4]).slice(1);
                        R ? k.setByteRange(O, R) : k.setByteRange(O)
                    } else if (l[5])
                        k.rawProgramDateTime = (" " + l[5]).slice(1),
                        k.tagList.push(["PROGRAM-DATE-TIME", k.rawProgramDateTime]),
                        -1 === C && (C = p.length);
                    else {
                        if (!(l = l[0].match(A))) {
                            o.logger.warn("No matches on slow regex match for level playlist!");
                            continue
                        }
                        for (h = 1; h < l.length && void 0 === l[h]; h++)
                            ;
                        var x = (" " + l[h]).slice(1)
                          , P = (" " + l[h + 1]).slice(1)
                          , M = l[h + 2] ? (" " + l[h + 2]).slice(1) : "";
                        switch (x) {
                        case "PLAYLIST-TYPE":
                            g.type = P.toUpperCase();
                            break;
                        case "MEDIA-SEQUENCE":
                            E = g.startSN = parseInt(P);
                            break;
                        case "SKIP":
                            var F = new v(P)
                              , B = F.decimalInteger("SKIPPED-SEGMENTS");
                            if (Object(n.isFiniteNumber)(B)) {
                                g.skippedSegments = B;
                                for (var U = B; U--; )
                                    p.unshift(null);
                                E += B
                            }
                            var N = F.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                            N && (g.recentlyRemovedDateranges = N.split("\t"));
                            break;
                        case "TARGETDURATION":
                            g.targetduration = parseFloat(P);
                            break;
                        case "VERSION":
                            g.version = parseInt(P);
                            break;
                        case "EXTM3U":
                            break;
                        case "ENDLIST":
                            g.live = !1;
                            break;
                        case "#":
                            (P || M) && k.tagList.push(M ? [P, M] : [P]);
                            break;
                        case "DIS":
                            D++;
                        case "GAP":
                            k.tagList.push([x]);
                            break;
                        case "BITRATE":
                            k.tagList.push([x, P]);
                            break;
                        case "DISCONTINUITY-SEQ":
                            D = parseInt(P);
                            break;
                        case "KEY":
                            var V, G = new v(P), j = G.enumeratedString("METHOD"), K = G.URI, H = G.hexadecimalInteger("IV"), J = G.enumeratedString("KEYFORMATVERSIONS"), W = G.enumeratedString("KEYID"), Q = null != (V = G.enumeratedString("KEYFORMAT")) ? V : "identity";
                            if (["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf(Q) > -1) {
                                o.logger.warn("Keyformat " + Q + " is not supported from the manifest");
                                continue
                            }
                            if ("identity" !== Q)
                                continue;
                            j && (f = c.a.fromURL(e, K),
                            K && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(j) >= 0 && (f.method = j,
                            f.keyFormat = Q,
                            W && (f.keyID = W),
                            J && (f.keyFormatVersions = J),
                            f.iv = H));
                            break;
                        case "START":
                            var X = new v(P).decimalFloatingPoint("TIME-OFFSET");
                            Object(n.isFiniteNumber)(X) && (g.startTimeOffset = X);
                            break;
                        case "MAP":
                            var Y = new v(P);
                            k.relurl = Y.URI,
                            Y.BYTERANGE && k.setByteRange(Y.BYTERANGE),
                            k.level = r,
                            k.sn = "initSegment",
                            f && (k.levelkey = f),
                            k.initSegment = null,
                            m = k,
                            _ = !0;
                            break;
                        case "SERVER-CONTROL":
                            var q = new v(P);
                            g.canBlockReload = q.bool("CAN-BLOCK-RELOAD"),
                            g.canSkipUntil = q.optionalFloat("CAN-SKIP-UNTIL", 0),
                            g.canSkipDateRanges = g.canSkipUntil > 0 && q.bool("CAN-SKIP-DATERANGES"),
                            g.partHoldBack = q.optionalFloat("PART-HOLD-BACK", 0),
                            g.holdBack = q.optionalFloat("HOLD-BACK", 0);
                            break;
                        case "PART-INF":
                            var z = new v(P);
                            g.partTarget = z.decimalFloatingPoint("PART-TARGET");
                            break;
                        case "PART":
                            var Z = g.partList;
                            Z || (Z = g.partList = []);
                            var $ = y > 0 ? Z[Z.length - 1] : void 0
                              , tt = y++
                              , et = new u.Part(new v(P),k,e,tt,$);
                            Z.push(et),
                            k.duration += et.duration;
                            break;
                        case "PRELOAD-HINT":
                            var rt = new v(P);
                            g.preloadHint = rt;
                            break;
                        case "RENDITION-REPORT":
                            var it = new v(P);
                            g.renditionReports = g.renditionReports || [],
                            g.renditionReports.push(it);
                            break;
                        default:
                            o.logger.warn("line parsed but not handled: " + l)
                        }
                    }
                }
                R && !R.relurl ? (p.pop(),
                S -= R.duration,
                g.partList && (g.fragmentHint = R)) : g.partList && (L(k, R),
                k.cc = D,
                g.fragmentHint = k);
                var nt = p.length
                  , at = p[0]
                  , st = p[nt - 1];
                if ((S += g.skippedSegments * g.targetduration) > 0 && nt && st) {
                    g.averagetargetduration = S / nt;
                    var ot = st.sn;
                    g.endSN = "initSegment" !== ot ? ot : 0,
                    at && (g.startCC = at.cc,
                    at.initSegment || g.fragments.every((function(t) {
                        return t.relurl && (e = t.relurl,
                        b.test(null != (r = null === (n = i.parseURL(e)) || void 0 === n ? void 0 : n.path) ? r : ""));
                        var e, r, n
                    }
                    )) && (o.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),
                    (k = new u.Fragment(a,e)).relurl = st.relurl,
                    k.level = r,
                    k.sn = "initSegment",
                    at.initSegment = k,
                    g.needSidxRanges = !0))
                } else
                    g.endSN = 0,
                    g.startCC = 0;
                return g.fragmentHint && (S += g.fragmentHint.duration),
                g.totalduration = S,
                g.endCC = D,
                C > 0 && function(t, e) {
                    for (var r = t[e], i = e; i--; ) {
                        var n = t[i];
                        if (!n)
                            return;
                        n.programDateTime = r.programDateTime - 1e3 * n.duration,
                        r = n
                    }
                }(p, C),
                g
            }
            ,
            t
        }();
        function D(t, e) {
            ["video", "audio", "text"].forEach((function(r) {
                var i = t.filter((function(t) {
                    return function(t, e) {
                        var r = p[e];
                        return !!r && !0 === r[t.slice(0, 4)]
                    }(t, r)
                }
                ));
                if (i.length) {
                    var n = i.filter((function(t) {
                        return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                    }
                    ));
                    e[r + "Codec"] = n.length > 0 ? n[0] : i[0],
                    t = t.filter((function(t) {
                        return -1 === i.indexOf(t)
                    }
                    ))
                }
            }
            )),
            e.unknownCodecs = t
        }
        function R(t, e, r) {
            var i = e[r];
            i && (t[r] = i)
        }
        function L(t, e) {
            t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime),
            Object(n.isFiniteNumber)(t.programDateTime) || (t.programDateTime = null,
            t.rawProgramDateTime = null)
        }
        var k = r(4);
        function C(t, e) {
            var r = t.url;
            return void 0 !== r && 0 !== r.indexOf("data:") || (r = e.url),
            r
        }
        var _ = function() {
            function t(t) {
                this.hls = void 0,
                this.loaders = Object.create(null),
                this.hls = t,
                this.registerListeners()
            }
            var e = t.prototype;
            return e.registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.Events.LEVEL_LOADING, this.onLevelLoading, this),
                t.on(a.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                t.on(a.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
            }
            ,
            e.unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.Events.LEVEL_LOADING, this.onLevelLoading, this),
                t.off(a.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                t.off(a.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
            }
            ,
            e.createInternalLoader = function(t) {
                var e = this.hls.config
                  , r = e.pLoader
                  , i = e.loader
                  , n = new (r || i)(e);
                return t.loader = n,
                this.loaders[t.type] = n,
                n
            }
            ,
            e.getInternalLoader = function(t) {
                return this.loaders[t.type]
            }
            ,
            e.resetInternalLoader = function(t) {
                this.loaders[t] && delete this.loaders[t]
            }
            ,
            e.destroyInternalLoaders = function() {
                for (var t in this.loaders) {
                    var e = this.loaders[t];
                    e && e.destroy(),
                    this.resetInternalLoader(t)
                }
            }
            ,
            e.destroy = function() {
                this.unregisterListeners(),
                this.destroyInternalLoaders()
            }
            ,
            e.onManifestLoading = function(t, e) {
                var r = e.url;
                this.load({
                    id: null,
                    groupId: null,
                    level: 0,
                    responseType: "text",
                    type: k.a.MANIFEST,
                    url: r,
                    deliveryDirectives: null
                })
            }
            ,
            e.onLevelLoading = function(t, e) {
                var r = e.id
                  , i = e.level
                  , n = e.url
                  , a = e.deliveryDirectives;
                this.load({
                    id: r,
                    groupId: null,
                    level: i,
                    responseType: "text",
                    type: k.a.LEVEL,
                    url: n,
                    deliveryDirectives: a
                })
            }
            ,
            e.onAudioTrackLoading = function(t, e) {
                var r = e.id
                  , i = e.groupId
                  , n = e.url
                  , a = e.deliveryDirectives;
                this.load({
                    id: r,
                    groupId: i,
                    level: null,
                    responseType: "text",
                    type: k.a.AUDIO_TRACK,
                    url: n,
                    deliveryDirectives: a
                })
            }
            ,
            e.onSubtitleTrackLoading = function(t, e) {
                var r = e.id
                  , i = e.groupId
                  , n = e.url
                  , a = e.deliveryDirectives;
                this.load({
                    id: r,
                    groupId: i,
                    level: null,
                    responseType: "text",
                    type: k.a.SUBTITLE_TRACK,
                    url: n,
                    deliveryDirectives: a
                })
            }
            ,
            e.load = function(t) {
                var e, r, i, n, a, s, l = this.hls.config, u = this.getInternalLoader(t);
                if (u) {
                    var h = u.context;
                    if (h && h.url === t.url)
                        return void o.logger.trace("[playlist-loader]: playlist request ongoing");
                    o.logger.log("[playlist-loader]: aborting previous loader for type: " + t.type),
                    u.abort()
                }
                switch (t.type) {
                case k.a.MANIFEST:
                    r = l.manifestLoadingMaxRetry,
                    i = l.manifestLoadingTimeOut,
                    n = l.manifestLoadingRetryDelay,
                    a = l.manifestLoadingMaxRetryTimeout;
                    break;
                case k.a.LEVEL:
                case k.a.AUDIO_TRACK:
                case k.a.SUBTITLE_TRACK:
                    r = 0,
                    i = l.levelLoadingTimeOut;
                    break;
                default:
                    r = l.levelLoadingMaxRetry,
                    i = l.levelLoadingTimeOut,
                    n = l.levelLoadingRetryDelay,
                    a = l.levelLoadingMaxRetryTimeout
                }
                if ((u = this.createInternalLoader(t),
                null !== (e = t.deliveryDirectives) && void 0 !== e && e.part) && (t.type === k.a.LEVEL && null !== t.level ? s = this.hls.levels[t.level].details : t.type === k.a.AUDIO_TRACK && null !== t.id ? s = this.hls.audioTracks[t.id].details : t.type === k.a.SUBTITLE_TRACK && null !== t.id && (s = this.hls.subtitleTracks[t.id].details),
                s)) {
                    var d = s.partTarget
                      , c = s.targetduration;
                    d && c && (i = Math.min(1e3 * Math.max(3 * d, .8 * c), i))
                }
                var f = {
                    timeout: i,
                    maxRetry: r,
                    retryDelay: n,
                    maxRetryDelay: a,
                    highWaterMark: 0
                }
                  , g = {
                    onSuccess: this.loadsuccess.bind(this),
                    onError: this.loaderror.bind(this),
                    onTimeout: this.loadtimeout.bind(this)
                };
                u.load(t, f, g)
            }
            ,
            e.loadsuccess = function(t, e, r, i) {
                if (void 0 === i && (i = null),
                r.isSidxRequest)
                    return this.handleSidxRequest(t, r),
                    void this.handlePlaylistLoaded(t, e, r, i);
                this.resetInternalLoader(r.type);
                var n = t.data;
                0 === n.indexOf("#EXTM3U") ? (e.parsing.start = performance.now(),
                n.indexOf("#EXTINF:") > 0 || n.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(t, e, r, i) : this.handleMasterPlaylist(t, e, r, i)) : this.handleManifestParsingError(t, r, "no EXTM3U delimiter", i)
            }
            ,
            e.loaderror = function(t, e, r) {
                void 0 === r && (r = null),
                this.handleNetworkError(e, r, !1, t)
            }
            ,
            e.loadtimeout = function(t, e, r) {
                void 0 === r && (r = null),
                this.handleNetworkError(e, r, !0)
            }
            ,
            e.handleMasterPlaylist = function(t, e, r, i) {
                var n = this.hls
                  , s = t.data
                  , l = C(t, r)
                  , u = S.parseMasterPlaylist(s, l)
                  , h = u.levels
                  , d = u.sessionData;
                if (h.length) {
                    var c = h.map((function(t) {
                        return {
                            id: t.attrs.AUDIO,
                            audioCodec: t.audioCodec
                        }
                    }
                    ))
                      , f = h.map((function(t) {
                        return {
                            id: t.attrs.SUBTITLES,
                            textCodec: t.textCodec
                        }
                    }
                    ))
                      , g = S.parseMasterPlaylistMedia(s, l, "AUDIO", c)
                      , p = S.parseMasterPlaylistMedia(s, l, "SUBTITLES", f)
                      , m = S.parseMasterPlaylistMedia(s, l, "CLOSED-CAPTIONS");
                    if (g.length)
                        g.some((function(t) {
                            return !t.url
                        }
                        )) || !h[0].audioCodec || h[0].attrs.AUDIO || (o.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),
                        g.unshift({
                            type: "main",
                            name: "main",
                            default: !1,
                            autoselect: !1,
                            forced: !1,
                            id: -1,
                            attrs: new v({}),
                            bitrate: 0,
                            url: ""
                        }));
                    n.trigger(a.Events.MANIFEST_LOADED, {
                        levels: h,
                        audioTracks: g,
                        subtitles: p,
                        captions: m,
                        url: l,
                        stats: e,
                        networkDetails: i,
                        sessionData: d
                    })
                } else
                    this.handleManifestParsingError(t, r, "no level found in manifest", i)
            }
            ,
            e.handleTrackOrLevelPlaylist = function(t, e, r, i) {
                var o = this.hls
                  , l = r.id
                  , u = r.level
                  , h = r.type
                  , d = C(t, r)
                  , c = Object(n.isFiniteNumber)(l) ? l : 0
                  , f = Object(n.isFiniteNumber)(u) ? u : c
                  , g = function(t) {
                    switch (t.type) {
                    case k.a.AUDIO_TRACK:
                        return k.b.AUDIO;
                    case k.a.SUBTITLE_TRACK:
                        return k.b.SUBTITLE;
                    default:
                        return k.b.MAIN
                    }
                }(r)
                  , p = S.parseLevelPlaylist(t.data, d, f, g, c);
                if (p.fragments.length) {
                    if (h === k.a.MANIFEST) {
                        var m = {
                            attrs: new v({}),
                            bitrate: 0,
                            details: p,
                            name: "",
                            url: d
                        };
                        o.trigger(a.Events.MANIFEST_LOADED, {
                            levels: [m],
                            audioTracks: [],
                            url: d,
                            stats: e,
                            networkDetails: i,
                            sessionData: null
                        })
                    }
                    if (e.parsing.end = performance.now(),
                    p.needSidxRanges) {
                        var E, y = null === (E = p.fragments[0].initSegment) || void 0 === E ? void 0 : E.url;
                        this.load({
                            url: y,
                            isSidxRequest: !0,
                            type: h,
                            level: u,
                            levelDetails: p,
                            id: l,
                            groupId: null,
                            rangeStart: 0,
                            rangeEnd: 2048,
                            responseType: "arraybuffer",
                            deliveryDirectives: null
                        })
                    } else
                        r.levelDetails = p,
                        this.handlePlaylistLoaded(t, e, r, i)
                } else
                    o.trigger(a.Events.ERROR, {
                        type: s.ErrorTypes.NETWORK_ERROR,
                        details: s.ErrorDetails.LEVEL_EMPTY_ERROR,
                        fatal: !1,
                        url: d,
                        reason: "no fragments found in level",
                        level: "number" == typeof r.level ? r.level : void 0
                    })
            }
            ,
            e.handleSidxRequest = function(t, e) {
                var r = Object(l.k)(new Uint8Array(t.data));
                if (r) {
                    var i = r.references
                      , n = e.levelDetails;
                    i.forEach((function(t, e) {
                        var i = t.info
                          , a = n.fragments[e];
                        0 === a.byteRange.length && a.setByteRange(String(1 + i.end - i.start) + "@" + String(i.start)),
                        a.initSegment && a.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
                    }
                    ))
                }
            }
            ,
            e.handleManifestParsingError = function(t, e, r, i) {
                this.hls.trigger(a.Events.ERROR, {
                    type: s.ErrorTypes.NETWORK_ERROR,
                    details: s.ErrorDetails.MANIFEST_PARSING_ERROR,
                    fatal: e.type === k.a.MANIFEST,
                    url: t.url,
                    reason: r,
                    response: t,
                    context: e,
                    networkDetails: i
                })
            }
            ,
            e.handleNetworkError = function(t, e, r, i) {
                void 0 === r && (r = !1),
                o.logger.warn("[playlist-loader]: A network " + (r ? "timeout" : "error") + " occurred while loading " + t.type + " level: " + t.level + " id: " + t.id + ' group-id: "' + t.groupId + '"');
                var n = s.ErrorDetails.UNKNOWN
                  , l = !1
                  , u = this.getInternalLoader(t);
                switch (t.type) {
                case k.a.MANIFEST:
                    n = r ? s.ErrorDetails.MANIFEST_LOAD_TIMEOUT : s.ErrorDetails.MANIFEST_LOAD_ERROR,
                    l = !0;
                    break;
                case k.a.LEVEL:
                    n = r ? s.ErrorDetails.LEVEL_LOAD_TIMEOUT : s.ErrorDetails.LEVEL_LOAD_ERROR,
                    l = !1;
                    break;
                case k.a.AUDIO_TRACK:
                    n = r ? s.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                    l = !1;
                    break;
                case k.a.SUBTITLE_TRACK:
                    n = r ? s.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : s.ErrorDetails.SUBTITLE_LOAD_ERROR,
                    l = !1
                }
                u && this.resetInternalLoader(t.type);
                var h = {
                    type: s.ErrorTypes.NETWORK_ERROR,
                    details: n,
                    fatal: l,
                    url: t.url,
                    loader: u,
                    context: t,
                    networkDetails: e
                };
                i && (h.response = i),
                this.hls.trigger(a.Events.ERROR, h)
            }
            ,
            e.handlePlaylistLoaded = function(t, e, r, i) {
                var n = r.type
                  , s = r.level
                  , o = r.id
                  , l = r.groupId
                  , u = r.loader
                  , h = r.levelDetails
                  , d = r.deliveryDirectives;
                if (null != h && h.targetduration) {
                    if (u)
                        switch (h.live && (u.getCacheAge && (h.ageHeader = u.getCacheAge() || 0),
                        u.getCacheAge && !isNaN(h.ageHeader) || (h.ageHeader = 0)),
                        n) {
                        case k.a.MANIFEST:
                        case k.a.LEVEL:
                            this.hls.trigger(a.Events.LEVEL_LOADED, {
                                details: h,
                                level: s || 0,
                                id: o || 0,
                                stats: e,
                                networkDetails: i,
                                deliveryDirectives: d
                            });
                            break;
                        case k.a.AUDIO_TRACK:
                            this.hls.trigger(a.Events.AUDIO_TRACK_LOADED, {
                                details: h,
                                id: o || 0,
                                groupId: l || "",
                                stats: e,
                                networkDetails: i,
                                deliveryDirectives: d
                            });
                            break;
                        case k.a.SUBTITLE_TRACK:
                            this.hls.trigger(a.Events.SUBTITLE_TRACK_LOADED, {
                                details: h,
                                id: o || 0,
                                groupId: l || "",
                                stats: e,
                                networkDetails: i,
                                deliveryDirectives: d
                            })
                        }
                } else
                    this.handleManifestParsingError(t, r, "invalid target duration", i)
            }
            ,
            t
        }()
          , w = r(22)
          , I = r.n(w);
        function O(t, e) {
            var r;
            try {
                r = new Event("addtrack")
            } catch (t) {
                (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
            }
            r.track = t,
            e.dispatchEvent(r)
        }
        function x(t, e) {
            var r = t.mode;
            if ("disabled" === r && (t.mode = "hidden"),
            t.cues && !t.cues.getCueById(e.id))
                try {
                    if (t.addCue(e),
                    !t.cues.getCueById(e.id))
                        throw new Error("addCue is failed for: " + e)
                } catch (r) {
                    o.logger.debug("[texttrack-utils]: " + r);
                    var i = new self.TextTrackCue(e.startTime,e.endTime,e.text);
                    i.id = e.id,
                    t.addCue(i)
                }
            "disabled" === r && (t.mode = r)
        }
        function P(t) {
            var e = t.mode;
            if ("disabled" === e && (t.mode = "hidden"),
            t.cues)
                for (var r = t.cues.length; r--; )
                    t.removeCue(t.cues[r]);
            "disabled" === e && (t.mode = e)
        }
        function M(t, e, r) {
            var i = t.mode;
            if ("disabled" === i && (t.mode = "hidden"),
            t.cues && t.cues.length > 0)
                for (var n = function(t, e, r) {
                    var i = []
                      , n = function(t, e) {
                        if (e < t[0].startTime)
                            return 0;
                        var r = t.length - 1;
                        if (e > t[r].endTime)
                            return -1;
                        var i = 0
                          , n = r;
                        for (; i <= n; ) {
                            var a = Math.floor((n + i) / 2);
                            if (e < t[a].startTime)
                                n = a - 1;
                            else {
                                if (!(e > t[a].startTime && i < r))
                                    return a;
                                i = a + 1
                            }
                        }
                        return t[i].startTime - e < e - t[n].startTime ? i : n
                    }(t, e);
                    if (n > -1)
                        for (var a = n, s = t.length; a < s; a++) {
                            var o = t[a];
                            if (o.startTime >= e && o.endTime <= r)
                                i.push(o);
                            else if (o.startTime > r)
                                return i
                        }
                    return i
                }(t.cues, e, r), a = 0; a < n.length; a++)
                    t.removeCue(n[a]);
            "disabled" === i && (t.mode = i)
        }
        var F = r(8)
          , B = function() {
            function t(t) {
                this.hls = void 0,
                this.id3Track = null,
                this.media = null,
                this.hls = t,
                this._registerListeners()
            }
            var e = t.prototype;
            return e.destroy = function() {
                this._unregisterListeners()
            }
            ,
            e._registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(a.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                t.on(a.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }
            ,
            e._unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(a.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                t.off(a.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }
            ,
            e.onMediaAttached = function(t, e) {
                this.media = e.media
            }
            ,
            e.onMediaDetaching = function() {
                this.id3Track && (P(this.id3Track),
                this.id3Track = null,
                this.media = null)
            }
            ,
            e.getID3Track = function(t) {
                if (this.media) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        if ("metadata" === r.kind && "id3" === r.label)
                            return O(r, this.media),
                            r
                    }
                    return this.media.addTextTrack("metadata", "id3")
                }
            }
            ,
            e.onFragParsingMetadata = function(t, e) {
                if (this.media) {
                    var r = e.frag
                      , i = e.samples;
                    this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks),
                    this.id3Track.mode = "hidden");
                    for (var n = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, a = 0; a < i.length; a++) {
                        var s = F.c(i[a].data);
                        if (s) {
                            var o = i[a].pts
                              , l = a < i.length - 1 ? i[a + 1].pts : r.end;
                            l - o <= 0 && (l = o + .25);
                            for (var u = 0; u < s.length; u++) {
                                var h = s[u];
                                if (!F.e(h)) {
                                    var d = new n(o,l,"");
                                    d.value = h,
                                    this.id3Track.addCue(d)
                                }
                            }
                        }
                    }
                }
            }
            ,
            e.onBufferFlushing = function(t, e) {
                var r = e.startOffset
                  , i = e.endOffset
                  , n = e.type;
                if (!n || "audio" === n) {
                    var a = this.id3Track;
                    a && M(a, r, i)
                }
            }
            ,
            t
        }();
        function U(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var N, V = function() {
            function t(t) {
                var e = this;
                this.hls = void 0,
                this.config = void 0,
                this.media = null,
                this.levelDetails = null,
                this.currentTime = 0,
                this.stallCount = 0,
                this._latency = null,
                this.timeupdateHandler = function() {
                    return e.timeupdate()
                }
                ,
                this.hls = t,
                this.config = t.config,
                this.registerListeners()
            }
            var e, r, i, n = t.prototype;
            return n.destroy = function() {
                this.unregisterListeners(),
                this.onMediaDetaching(),
                this.levelDetails = null,
                this.hls = this.timeupdateHandler = null
            }
            ,
            n.registerListeners = function() {
                this.hls.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                this.hls.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                this.hls.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                this.hls.on(a.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                this.hls.on(a.Events.ERROR, this.onError, this)
            }
            ,
            n.unregisterListeners = function() {
                this.hls.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached),
                this.hls.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching),
                this.hls.off(a.Events.MANIFEST_LOADING, this.onManifestLoading),
                this.hls.off(a.Events.LEVEL_UPDATED, this.onLevelUpdated),
                this.hls.off(a.Events.ERROR, this.onError)
            }
            ,
            n.onMediaAttached = function(t, e) {
                this.media = e.media,
                this.media.addEventListener("timeupdate", this.timeupdateHandler)
            }
            ,
            n.onMediaDetaching = function() {
                this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler),
                this.media = null)
            }
            ,
            n.onManifestLoading = function() {
                this.levelDetails = null,
                this._latency = null,
                this.stallCount = 0
            }
            ,
            n.onLevelUpdated = function(t, e) {
                var r = e.details;
                this.levelDetails = r,
                r.advanced && this.timeupdate(),
                !r.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
            }
            ,
            n.onError = function(t, e) {
                e.details === s.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++,
                o.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
            }
            ,
            n.timeupdate = function() {
                var t = this.media
                  , e = this.levelDetails;
                if (t && e) {
                    this.currentTime = t.currentTime;
                    var r = this.computeLatency();
                    if (null !== r) {
                        this._latency = r;
                        var i = this.config
                          , n = i.lowLatencyMode
                          , a = i.maxLiveSyncPlaybackRate;
                        if (n && 1 !== a) {
                            var s = this.targetLatency;
                            if (null !== s) {
                                var o = r - s
                                  , l = o < Math.min(this.maxLatency, s + e.targetduration);
                                if (e.live && l && o > .05 && this.forwardBufferLength > 1) {
                                    var u = Math.min(2, Math.max(1, a))
                                      , h = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
                                    t.playbackRate = Math.min(u, Math.max(1, h))
                                } else
                                    1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
                            }
                        }
                    }
                }
            }
            ,
            n.estimateLiveEdge = function() {
                var t = this.levelDetails;
                return null === t ? null : t.edge + t.age
            }
            ,
            n.computeLatency = function() {
                var t = this.estimateLiveEdge();
                return null === t ? null : t - this.currentTime
            }
            ,
            e = t,
            (r = [{
                key: "latency",
                get: function() {
                    return this._latency || 0
                }
            }, {
                key: "maxLatency",
                get: function() {
                    var t = this.config
                      , e = this.levelDetails;
                    return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
                }
            }, {
                key: "targetLatency",
                get: function() {
                    var t = this.levelDetails;
                    if (null === t)
                        return null;
                    var e = t.holdBack
                      , r = t.partHoldBack
                      , i = t.targetduration
                      , n = this.config
                      , a = n.liveSyncDuration
                      , s = n.liveSyncDurationCount
                      , o = n.lowLatencyMode
                      , l = this.hls.userConfig
                      , u = o && r || e;
                    (l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== a ? a : s * i);
                    var h = i;
                    return u + Math.min(1 * this.stallCount, h)
                }
            }, {
                key: "liveSyncPosition",
                get: function() {
                    var t = this.estimateLiveEdge()
                      , e = this.targetLatency
                      , r = this.levelDetails;
                    if (null === t || null === e || null === r)
                        return null;
                    var i = r.edge
                      , n = t - e - this.edgeStalled
                      , a = i - r.totalduration
                      , s = i - (this.config.lowLatencyMode && r.partTarget || r.targetduration);
                    return Math.min(Math.max(a, n), s)
                }
            }, {
                key: "drift",
                get: function() {
                    var t = this.levelDetails;
                    return null === t ? 1 : t.drift
                }
            }, {
                key: "edgeStalled",
                get: function() {
                    var t = this.levelDetails;
                    if (null === t)
                        return 0;
                    var e = 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration);
                    return Math.max(t.age - e, 0)
                }
            }, {
                key: "forwardBufferLength",
                get: function() {
                    var t = this.media
                      , e = this.levelDetails;
                    if (!t || !e)
                        return 0;
                    var r = t.buffered.length;
                    return (r ? t.buffered.end(r - 1) : e.edge) - this.currentTime
                }
            }]) && U(e.prototype, r),
            i && U(e, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function G(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        !function(t) {
            t.No = "",
            t.Yes = "YES",
            t.v2 = "v2"
        }(N || (N = {}));
        var j = function() {
            function t(t, e, r) {
                this.msn = void 0,
                this.part = void 0,
                this.skip = void 0,
                this.msn = t,
                this.part = e,
                this.skip = r
            }
            return t.prototype.addDirectives = function(t) {
                var e = new self.URL(t);
                return void 0 !== this.msn && e.searchParams.set("_HLS_msn", this.msn.toString()),
                void 0 !== this.part && e.searchParams.set("_HLS_part", this.part.toString()),
                this.skip && e.searchParams.set("_HLS_skip", this.skip),
                e.toString()
            }
            ,
            t
        }()
          , K = function() {
            function t(t) {
                this.attrs = void 0,
                this.audioCodec = void 0,
                this.bitrate = void 0,
                this.codecSet = void 0,
                this.height = void 0,
                this.id = void 0,
                this.name = void 0,
                this.videoCodec = void 0,
                this.width = void 0,
                this.unknownCodecs = void 0,
                this.audioGroupIds = void 0,
                this.details = void 0,
                this.fragmentError = 0,
                this.loadError = 0,
                this.loaded = void 0,
                this.realBitrate = 0,
                this.textGroupIds = void 0,
                this.url = void 0,
                this._urlId = 0,
                this.url = [t.url],
                this.attrs = t.attrs,
                this.bitrate = t.bitrate,
                t.details && (this.details = t.details),
                this.id = t.id || 0,
                this.name = t.name,
                this.width = t.width || 0,
                this.height = t.height || 0,
                this.audioCodec = t.audioCodec,
                this.videoCodec = t.videoCodec,
                this.unknownCodecs = t.unknownCodecs,
                this.codecSet = [t.videoCodec, t.audioCodec].filter((function(t) {
                    return t
                }
                )).join(",").replace(/\.[^.,]+/g, "")
            }
            var e, r, i;
            return e = t,
            (r = [{
                key: "maxBitrate",
                get: function() {
                    return Math.max(this.realBitrate, this.bitrate)
                }
            }, {
                key: "uri",
                get: function() {
                    return this.url[this._urlId] || ""
                }
            }, {
                key: "urlId",
                get: function() {
                    return this._urlId
                },
                set: function(t) {
                    var e = t % this.url.length;
                    this._urlId !== e && (this.details = void 0,
                    this._urlId = e)
                }
            }]) && G(e.prototype, r),
            i && G(e, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function H(t, e, r) {
            switch (e) {
            case "audio":
                t.audioGroupIds || (t.audioGroupIds = []),
                t.audioGroupIds.push(r);
                break;
            case "text":
                t.textGroupIds || (t.textGroupIds = []),
                t.textGroupIds.push(r)
            }
        }
        function J(t) {
            var e = {};
            t.forEach((function(t) {
                var r = t.groupId || "";
                t.id = e[r] = e[r] || 0,
                e[r]++
            }
            ))
        }
        function W(t, e) {
            var r = e.startPTS;
            if (Object(n.isFiniteNumber)(r)) {
                var i, a = 0;
                e.sn > t.sn ? (a = r - t.start,
                i = t) : (a = t.start - r,
                i = e),
                i.duration !== a && (i.duration = a)
            } else if (e.sn > t.sn) {
                t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration
            } else
                e.start = Math.max(t.start - e.duration, 0)
        }
        function Q(t, e, r, i, a, s) {
            i - r <= 0 && (o.logger.warn("Fragment should have a positive duration", e),
            i = r + e.duration,
            s = a + e.duration);
            var l = r
              , u = i
              , h = e.startPTS
              , d = e.endPTS;
            if (Object(n.isFiniteNumber)(h)) {
                var c = Math.abs(h - r);
                Object(n.isFiniteNumber)(e.deltaPTS) ? e.deltaPTS = Math.max(c, e.deltaPTS) : e.deltaPTS = c,
                l = Math.max(r, h),
                r = Math.min(r, h),
                a = Math.min(a, e.startDTS),
                u = Math.min(i, d),
                i = Math.max(i, d),
                s = Math.max(s, e.endDTS)
            }
            e.duration = i - r;
            var f = r - e.start;
            e.appendedPTS = i,
            e.start = e.startPTS = r,
            e.maxStartPTS = l,
            e.startDTS = a,
            e.endPTS = i,
            e.minEndPTS = u,
            e.endDTS = s;
            var g, v = e.sn;
            if (!t || v < t.startSN || v > t.endSN)
                return 0;
            var p = v - t.startSN
              , m = t.fragments;
            for (m[p] = e,
            g = p; g > 0; g--)
                W(m[g], m[g - 1]);
            for (g = p; g < m.length - 1; g++)
                W(m[g], m[g + 1]);
            return t.fragmentHint && W(m[m.length - 1], t.fragmentHint),
            t.PTSKnown = t.alignedSliding = !0,
            f
        }
        function X(t, e) {
            for (var r = null, i = t.fragments, a = i.length - 1; a >= 0; a--) {
                var s = i[a].initSegment;
                if (s) {
                    r = s;
                    break
                }
            }
            t.fragmentHint && delete t.fragmentHint.endPTS;
            var l, u = 0;
            (function(t, e, r) {
                for (var i = e.skippedSegments, n = Math.max(t.startSN, e.startSN) - e.startSN, a = (t.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN, s = e.startSN - t.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, u = n; u <= a; u++) {
                    var h = l[s + u]
                      , d = o[u];
                    i && !d && u < i && (d = e.fragments[u] = h),
                    h && d && r(h, d)
                }
            }(t, e, (function(t, i) {
                t.relurl && (u = t.cc - i.cc),
                Object(n.isFiniteNumber)(t.startPTS) && Object(n.isFiniteNumber)(t.endPTS) && (i.start = i.startPTS = t.startPTS,
                i.startDTS = t.startDTS,
                i.appendedPTS = t.appendedPTS,
                i.maxStartPTS = t.maxStartPTS,
                i.endPTS = t.endPTS,
                i.endDTS = t.endDTS,
                i.minEndPTS = t.minEndPTS,
                i.duration = t.endPTS - t.startPTS,
                i.duration && (l = i),
                e.PTSKnown = e.alignedSliding = !0),
                i.elementaryStreams = t.elementaryStreams,
                i.loader = t.loader,
                i.stats = t.stats,
                i.urlId = t.urlId,
                t.initSegment && (i.initSegment = t.initSegment,
                r = t.initSegment)
            }
            )),
            r) && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((function(t) {
                var e;
                t.initSegment && t.initSegment.relurl !== (null === (e = r) || void 0 === e ? void 0 : e.relurl) || (t.initSegment = r)
            }
            ));
            if (e.skippedSegments && (e.deltaUpdateFailed = e.fragments.some((function(t) {
                return !t
            }
            )),
            e.deltaUpdateFailed)) {
                o.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                for (var h = e.skippedSegments; h--; )
                    e.fragments.shift();
                e.startSN = e.fragments[0].sn,
                e.startCC = e.fragments[0].cc
            }
            var d = e.fragments;
            if (u) {
                o.logger.warn("discontinuity sliding from playlist, take drift into account");
                for (var c = 0; c < d.length; c++)
                    d[c].cc += u
            }
            e.skippedSegments && (e.startCC = e.fragments[0].cc),
            function(t, e, r) {
                if (t && e)
                    for (var i = 0, n = 0, a = t.length; n <= a; n++) {
                        var s = t[n]
                          , o = e[n + i];
                        s && o && s.index === o.index && s.fragment.sn === o.fragment.sn ? r(s, o) : i--
                    }
            }(t.partList, e.partList, (function(t, e) {
                e.elementaryStreams = t.elementaryStreams,
                e.stats = t.stats
            }
            )),
            l ? Q(e, l, l.startPTS, l.endPTS, l.startDTS, l.endDTS) : Y(t, e),
            d.length && (e.totalduration = e.edge - d[0].start),
            e.driftStartTime = t.driftStartTime,
            e.driftStart = t.driftStart;
            var f = e.advancedDateTime;
            if (e.advanced && f) {
                var g = e.edge;
                e.driftStart || (e.driftStartTime = f,
                e.driftStart = g),
                e.driftEndTime = f,
                e.driftEnd = g
            } else
                e.driftEndTime = t.driftEndTime,
                e.driftEnd = t.driftEnd,
                e.advancedDateTime = t.advancedDateTime
        }
        function Y(t, e) {
            var r = e.startSN + e.skippedSegments - t.startSN
              , i = t.fragments;
            r < 0 || r >= i.length || q(e, i[r].start)
        }
        function q(t, e) {
            if (e) {
                for (var r = t.fragments, i = t.skippedSegments; i < r.length; i++)
                    r[i].start += e;
                t.fragmentHint && (t.fragmentHint.start += e)
            }
        }
        var z = function() {
            function t(t, e) {
                this.hls = void 0,
                this.timer = -1,
                this.canLoad = !1,
                this.retryCount = 0,
                this.log = void 0,
                this.warn = void 0,
                this.log = o.logger.log.bind(o.logger, e + ":"),
                this.warn = o.logger.warn.bind(o.logger, e + ":"),
                this.hls = t
            }
            var e = t.prototype;
            return e.destroy = function() {
                this.clearTimer(),
                this.hls = this.log = this.warn = null
            }
            ,
            e.onError = function(t, e) {
                e.fatal && e.type === s.ErrorTypes.NETWORK_ERROR && this.clearTimer()
            }
            ,
            e.clearTimer = function() {
                clearTimeout(this.timer),
                this.timer = -1
            }
            ,
            e.startLoad = function() {
                this.canLoad = !0,
                this.retryCount = 0,
                this.loadPlaylist()
            }
            ,
            e.stopLoad = function() {
                this.canLoad = !1,
                this.clearTimer()
            }
            ,
            e.switchParams = function(t, e) {
                var r = null == e ? void 0 : e.renditionReports;
                if (r)
                    for (var i = 0; i < r.length; i++) {
                        var a = r[i]
                          , s = "" + a.URI;
                        if (s === t.substr(-s.length)) {
                            var o = parseInt(a["LAST-MSN"])
                              , l = parseInt(a["LAST-PART"]);
                            if (e && this.hls.config.lowLatencyMode) {
                                var u = Math.min(e.age - e.partTarget, e.targetduration);
                                void 0 !== l && u > e.partTarget && (l += 1)
                            }
                            if (Object(n.isFiniteNumber)(o))
                                return new j(o,Object(n.isFiniteNumber)(l) ? l : void 0,N.No)
                        }
                    }
            }
            ,
            e.loadPlaylist = function(t) {}
            ,
            e.shouldLoadTrack = function(t) {
                return this.canLoad && t && !!t.url && (!t.details || t.details.live)
            }
            ,
            e.playlistLoaded = function(t, e, r) {
                var i = this
                  , n = e.details
                  , a = e.stats
                  , s = a.loading.end ? Math.max(0, self.performance.now() - a.loading.end) : 0;
                if (n.advancedDateTime = Date.now() - s,
                n.live || null != r && r.live) {
                    if (n.reloaded(r),
                    r && this.log("live playlist " + t + " " + (n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : "MISSED")),
                    r && n.fragments.length > 0 && X(r, n),
                    !this.canLoad || !n.live)
                        return;
                    var o, l = void 0, u = void 0;
                    if (n.canBlockReload && n.endSN && n.advanced) {
                        var h = this.hls.config.lowLatencyMode
                          , d = n.lastPartSn
                          , c = n.endSN
                          , f = n.lastPartIndex
                          , g = d === c;
                        -1 !== f ? (l = g ? c + 1 : d,
                        u = g ? h ? 0 : f : f + 1) : l = c + 1;
                        var v = n.age
                          , p = v + n.ageHeader
                          , m = Math.min(p - n.partTarget, 1.5 * n.targetduration);
                        if (m > 0) {
                            if (r && m > r.tuneInGoal)
                                this.warn("CDN Tune-in goal increased from: " + r.tuneInGoal + " to: " + m + " with playlist age: " + n.age),
                                m = 0;
                            else {
                                var E = Math.floor(m / n.targetduration);
                                if (l += E,
                                void 0 !== u)
                                    u += Math.round(m % n.targetduration / n.partTarget);
                                this.log("CDN Tune-in age: " + n.ageHeader + "s last advanced " + v.toFixed(2) + "s goal: " + m + " skip sn " + E + " to part " + u)
                            }
                            n.tuneInGoal = m
                        }
                        if (o = this.getDeliveryDirectives(n, e.deliveryDirectives, l, u),
                        h || !g)
                            return void this.loadPlaylist(o)
                    } else
                        o = this.getDeliveryDirectives(n, e.deliveryDirectives, l, u);
                    var y = function(t, e) {
                        var r, i = 1e3 * t.levelTargetDuration, n = i / 2, a = t.age, s = a > 0 && a < 3 * i, o = e.loading.end - e.loading.start, l = t.availabilityDelay;
                        if (!1 === t.updated)
                            if (s) {
                                var u = 333 * t.misses;
                                r = Math.max(Math.min(n, 2 * o), u),
                                t.availabilityDelay = (t.availabilityDelay || 0) + r
                            } else
                                r = n;
                        else
                            s ? (l = Math.min(l || i / 2, a),
                            t.availabilityDelay = l,
                            r = l + i - a) : r = i - o;
                        return Math.round(r)
                    }(n, a);
                    void 0 !== l && n.canBlockReload && (y -= n.partTarget || 1),
                    this.log("reload live playlist " + t + " in " + Math.round(y) + " ms"),
                    this.timer = self.setTimeout((function() {
                        return i.loadPlaylist(o)
                    }
                    ), y)
                } else
                    this.clearTimer()
            }
            ,
            e.getDeliveryDirectives = function(t, e, r, i) {
                var n = function(t, e) {
                    var r = t.canSkipUntil
                      , i = t.canSkipDateRanges
                      , n = t.endSN;
                    return r && (void 0 !== e ? e - n : 0) < r ? i ? N.v2 : N.Yes : N.No
                }(t, r);
                return null != e && e.skip && t.deltaUpdateFailed && (r = e.msn,
                i = e.part,
                n = N.No),
                new j(r,i,n)
            }
            ,
            e.retryLoadingOrFail = function(t) {
                var e, r = this, i = this.hls.config, n = this.retryCount < i.levelLoadingMaxRetry;
                if (n)
                    if (this.retryCount++,
                    t.details.indexOf("LoadTimeOut") > -1 && null !== (e = t.context) && void 0 !== e && e.deliveryDirectives)
                        this.warn("retry playlist loading #" + this.retryCount + ' after "' + t.details + '"'),
                        this.loadPlaylist();
                    else {
                        var a = Math.min(Math.pow(2, this.retryCount) * i.levelLoadingRetryDelay, i.levelLoadingMaxRetryTimeout);
                        this.timer = self.setTimeout((function() {
                            return r.loadPlaylist()
                        }
                        ), a),
                        this.warn("retry playlist loading #" + this.retryCount + " in " + a + ' ms after "' + t.details + '"')
                    }
                else
                    this.warn('cannot recover from error "' + t.details + '"'),
                    this.clearTimer(),
                    t.fatal = !0;
                return n
            }
            ,
            t
        }();
        function Z() {
            return (Z = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function $(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function tt(t, e) {
            return (tt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var et, rt = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), it = function(t) {
            var e, r;
            function i(e) {
                var r;
                return (r = t.call(this, e, "[level-controller]") || this)._levels = [],
                r._firstLevel = -1,
                r._startLevel = void 0,
                r.currentLevelIndex = -1,
                r.manualLevelIndex = -1,
                r.onParsedComplete = void 0,
                r._registerListeners(),
                r
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            tt(e, r);
            var n, o, l, u = i.prototype;
            return u._registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.on(a.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                t.on(a.Events.FRAG_LOADED, this.onFragLoaded, this),
                t.on(a.Events.ERROR, this.onError, this)
            }
            ,
            u._unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.off(a.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                t.off(a.Events.FRAG_LOADED, this.onFragLoaded, this),
                t.off(a.Events.ERROR, this.onError, this)
            }
            ,
            u.destroy = function() {
                this._unregisterListeners(),
                this.manualLevelIndex = -1,
                this._levels.length = 0,
                t.prototype.destroy.call(this)
            }
            ,
            u.startLoad = function() {
                this._levels.forEach((function(t) {
                    t.loadError = 0
                }
                )),
                t.prototype.startLoad.call(this)
            }
            ,
            u.onManifestLoaded = function(t, e) {
                var r, i, n = [], o = [], l = [], u = {}, h = !1, d = !1, c = !1;
                if (e.levels.forEach((function(t) {
                    var e = t.attrs;
                    h = h || !(!t.width || !t.height),
                    d = d || !!t.videoCodec,
                    c = c || !!t.audioCodec,
                    rt && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0);
                    var r = t.bitrate + "-" + t.attrs.RESOLUTION + "-" + t.attrs.CODECS;
                    (i = u[r]) ? i.url.push(t.url) : (i = new K(t),
                    u[r] = i,
                    n.push(i)),
                    e && (e.AUDIO && H(i, "audio", e.AUDIO),
                    e.SUBTITLES && H(i, "text", e.SUBTITLES))
                }
                )),
                (h || d) && c && (n = n.filter((function(t) {
                    var e = t.videoCodec
                      , r = t.width
                      , i = t.height;
                    return !!e || !(!r || !i)
                }
                ))),
                n = n.filter((function(t) {
                    var e = t.audioCodec
                      , r = t.videoCodec;
                    return (!e || m(e, "audio")) && (!r || m(r, "video"))
                }
                )),
                e.audioTracks && J(o = e.audioTracks.filter((function(t) {
                    return !t.audioCodec || m(t.audioCodec, "audio")
                }
                ))),
                e.subtitles && J(l = e.subtitles),
                n.length > 0) {
                    r = n[0].bitrate,
                    n.sort((function(t, e) {
                        return t.bitrate - e.bitrate
                    }
                    )),
                    this._levels = n;
                    for (var f = 0; f < n.length; f++)
                        if (n[f].bitrate === r) {
                            this._firstLevel = f,
                            this.log("manifest loaded, " + n.length + " level(s) found, first bitrate: " + r);
                            break
                        }
                    var g = c && !d
                      , v = {
                        levels: n,
                        audioTracks: o,
                        subtitleTracks: l,
                        firstLevel: this._firstLevel,
                        stats: e.stats,
                        audio: c,
                        video: d,
                        altAudio: !g && o.some((function(t) {
                            return !!t.url
                        }
                        ))
                    };
                    this.hls.trigger(a.Events.MANIFEST_PARSED, v),
                    (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
                } else
                    this.hls.trigger(a.Events.ERROR, {
                        type: s.ErrorTypes.MEDIA_ERROR,
                        details: s.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: e.url,
                        reason: "no level with compatible codecs found in manifest"
                    })
            }
            ,
            u.onError = function(e, r) {
                if (t.prototype.onError.call(this, e, r),
                !r.fatal) {
                    var i = r.context
                      , n = this._levels[this.currentLevelIndex];
                    if (i && (i.type === k.a.AUDIO_TRACK && n.audioGroupIds && i.groupId === n.audioGroupIds[n.urlId] || i.type === k.a.SUBTITLE_TRACK && n.textGroupIds && i.groupId === n.textGroupIds[n.urlId]))
                        this.redundantFailover(this.currentLevelIndex);
                    else {
                        var a, o = !1, l = !0;
                        switch (r.details) {
                        case s.ErrorDetails.FRAG_LOAD_ERROR:
                        case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                        case s.ErrorDetails.KEY_LOAD_ERROR:
                        case s.ErrorDetails.KEY_LOAD_TIMEOUT:
                            if (r.frag) {
                                var u = this._levels[r.frag.level];
                                u ? (u.fragmentError++,
                                u.fragmentError > this.hls.config.fragLoadingMaxRetry && (a = r.frag.level)) : a = r.frag.level
                            }
                            break;
                        case s.ErrorDetails.LEVEL_LOAD_ERROR:
                        case s.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                            i && (i.deliveryDirectives && (l = !1),
                            a = i.level),
                            o = !0;
                            break;
                        case s.ErrorDetails.REMUX_ALLOC_ERROR:
                            a = r.level,
                            o = !0
                        }
                        void 0 !== a && this.recoverLevel(r, a, o, l)
                    }
                }
            }
            ,
            u.recoverLevel = function(t, e, r, i) {
                var n = t.details
                  , a = this._levels[e];
                if (a.loadError++,
                r) {
                    if (!this.retryLoadingOrFail(t))
                        return void (this.currentLevelIndex = -1);
                    t.levelRetry = !0
                }
                if (i) {
                    var s = a.url.length;
                    if (s > 1 && a.loadError < s)
                        t.levelRetry = !0,
                        this.redundantFailover(e);
                    else if (-1 === this.manualLevelIndex) {
                        var o = 0 === e ? this._levels.length - 1 : e - 1;
                        this.currentLevelIndex !== o && 0 === this._levels[o].loadError && (this.warn(n + ": switch to " + o),
                        t.levelRetry = !0,
                        this.hls.nextAutoLevel = o)
                    }
                }
            }
            ,
            u.redundantFailover = function(t) {
                var e = this._levels[t]
                  , r = e.url.length;
                if (r > 1) {
                    var i = (e.urlId + 1) % r;
                    this.warn("Switching to redundant URL-id " + i),
                    this._levels.forEach((function(t) {
                        t.urlId = i
                    }
                    )),
                    this.level = t
                }
            }
            ,
            u.onFragLoaded = function(t, e) {
                var r = e.frag;
                if (void 0 !== r && r.type === k.b.MAIN) {
                    var i = this._levels[r.level];
                    void 0 !== i && (i.fragmentError = 0,
                    i.loadError = 0)
                }
            }
            ,
            u.onLevelLoaded = function(t, e) {
                var r, i, n = e.level, a = e.details, s = this._levels[n];
                if (!s)
                    return this.warn("Invalid level index " + n),
                    void (null !== (i = e.deliveryDirectives) && void 0 !== i && i.skip && (a.deltaUpdateFailed = !0));
                n === this.currentLevelIndex ? (0 === s.fragmentError && (s.loadError = 0,
                this.retryCount = 0),
                this.playlistLoaded(n, e, s.details)) : null !== (r = e.deliveryDirectives) && void 0 !== r && r.skip && (a.deltaUpdateFailed = !0)
            }
            ,
            u.onAudioTrackSwitched = function(t, e) {
                var r = this.hls.levels[this.currentLevelIndex];
                if (r && r.audioGroupIds) {
                    for (var i = -1, n = this.hls.audioTracks[e.id].groupId, a = 0; a < r.audioGroupIds.length; a++)
                        if (r.audioGroupIds[a] === n) {
                            i = a;
                            break
                        }
                    i !== r.urlId && (r.urlId = i,
                    this.startLoad())
                }
            }
            ,
            u.loadPlaylist = function(t) {
                var e = this.currentLevelIndex
                  , r = this._levels[e];
                if (this.canLoad && r && r.url.length > 0) {
                    var i = r.urlId
                      , n = r.url[i];
                    if (t)
                        try {
                            n = t.addDirectives(n)
                        } catch (t) {
                            this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                        }
                    this.log("Attempt loading level index " + e + (t ? " at sn " + t.msn + " part " + t.part : "") + " with URL-id " + i + " " + n),
                    this.clearTimer(),
                    this.hls.trigger(a.Events.LEVEL_LOADING, {
                        url: n,
                        level: e,
                        id: i,
                        deliveryDirectives: t || null
                    })
                }
            }
            ,
            u.removeLevel = function(t, e) {
                var r = function(t, r) {
                    return r !== e
                }
                  , i = this._levels.filter((function(i, n) {
                    return n !== t || i.url.length > 1 && void 0 !== e && (i.url = i.url.filter(r),
                    i.audioGroupIds && (i.audioGroupIds = i.audioGroupIds.filter(r)),
                    i.textGroupIds && (i.textGroupIds = i.textGroupIds.filter(r)),
                    i.urlId = 0,
                    !0)
                }
                )).map((function(t, e) {
                    var r = t.details;
                    return null != r && r.fragments && r.fragments.forEach((function(t) {
                        t.level = e
                    }
                    )),
                    t
                }
                ));
                this._levels = i,
                this.hls.trigger(a.Events.LEVELS_UPDATED, {
                    levels: i
                })
            }
            ,
            n = i,
            (o = [{
                key: "levels",
                get: function() {
                    return 0 === this._levels.length ? null : this._levels
                }
            }, {
                key: "level",
                get: function() {
                    return this.currentLevelIndex
                },
                set: function(t) {
                    var e, r = this._levels;
                    if (0 !== r.length && (this.currentLevelIndex !== t || null === (e = r[t]) || void 0 === e || !e.details)) {
                        if (t < 0 || t >= r.length) {
                            var i = t < 0;
                            if (this.hls.trigger(a.Events.ERROR, {
                                type: s.ErrorTypes.OTHER_ERROR,
                                details: s.ErrorDetails.LEVEL_SWITCH_ERROR,
                                level: t,
                                fatal: i,
                                reason: "invalid level idx"
                            }),
                            i)
                                return;
                            t = Math.min(t, r.length - 1)
                        }
                        this.clearTimer();
                        var n = this.currentLevelIndex
                          , o = r[n]
                          , l = r[t];
                        this.log("switching to level " + t + " from " + n),
                        this.currentLevelIndex = t;
                        var u = Z({}, l, {
                            level: t,
                            maxBitrate: l.maxBitrate,
                            uri: l.uri,
                            urlId: l.urlId
                        });
                        delete u._urlId,
                        this.hls.trigger(a.Events.LEVEL_SWITCHING, u);
                        var h = l.details;
                        if (!h || h.live) {
                            var d = this.switchParams(l.uri, null == o ? void 0 : o.details);
                            this.loadPlaylist(d)
                        }
                    }
                }
            }, {
                key: "manualLevel",
                get: function() {
                    return this.manualLevelIndex
                },
                set: function(t) {
                    this.manualLevelIndex = t,
                    void 0 === this._startLevel && (this._startLevel = t),
                    -1 !== t && (this.level = t)
                }
            }, {
                key: "firstLevel",
                get: function() {
                    return this._firstLevel
                },
                set: function(t) {
                    this._firstLevel = t
                }
            }, {
                key: "startLevel",
                get: function() {
                    if (void 0 === this._startLevel) {
                        var t = this.hls.config.startLevel;
                        return void 0 !== t ? t : this._firstLevel
                    }
                    return this._startLevel
                },
                set: function(t) {
                    this._startLevel = t
                }
            }, {
                key: "nextLoadLevel",
                get: function() {
                    return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                },
                set: function(t) {
                    this.level = t,
                    -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                }
            }]) && $(n.prototype, o),
            l && $(n, l),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            i
        }(z);
        !function(t) {
            t.NOT_LOADED = "NOT_LOADED",
            t.BACKTRACKED = "BACKTRACKED",
            t.APPENDING = "APPENDING",
            t.PARTIAL = "PARTIAL",
            t.OK = "OK"
        }(et || (et = {}));
        var nt = function() {
            function t(t) {
                this.activeFragment = null,
                this.activeParts = null,
                this.fragments = Object.create(null),
                this.timeRanges = Object.create(null),
                this.bufferPadding = .2,
                this.hls = void 0,
                this.hls = t,
                this._registerListeners()
            }
            var e = t.prototype;
            return e._registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.BUFFER_APPENDED, this.onBufferAppended, this),
                t.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                t.on(a.Events.FRAG_LOADED, this.onFragLoaded, this)
            }
            ,
            e._unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.BUFFER_APPENDED, this.onBufferAppended, this),
                t.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                t.off(a.Events.FRAG_LOADED, this.onFragLoaded, this)
            }
            ,
            e.destroy = function() {
                this._unregisterListeners(),
                this.fragments = this.timeRanges = null
            }
            ,
            e.getAppendedFrag = function(t, e) {
                if (e === k.b.MAIN) {
                    var r = this.activeFragment
                      , i = this.activeParts;
                    if (!r)
                        return null;
                    if (i)
                        for (var n = i.length; n--; ) {
                            var a = i[n]
                              , s = a ? a.end : r.appendedPTS;
                            if (a.start <= t && void 0 !== s && t <= s)
                                return n > 9 && (this.activeParts = i.slice(n - 9)),
                                a
                        }
                    else if (r.start <= t && void 0 !== r.appendedPTS && t <= r.appendedPTS)
                        return r
                }
                return this.getBufferedFrag(t, e)
            }
            ,
            e.getBufferedFrag = function(t, e) {
                for (var r = this.fragments, i = Object.keys(r), n = i.length; n--; ) {
                    var a = r[i[n]];
                    if ((null == a ? void 0 : a.body.type) === e && a.buffered) {
                        var s = a.body;
                        if (s.start <= t && t <= s.end)
                            return s
                    }
                }
                return null
            }
            ,
            e.detectEvictedFragments = function(t, e, r) {
                var i = this;
                Object.keys(this.fragments).forEach((function(n) {
                    var a = i.fragments[n];
                    if (a)
                        if (a.buffered) {
                            var s = a.range[t];
                            s && s.time.some((function(t) {
                                var r = !i.isTimeBuffered(t.startPTS, t.endPTS, e);
                                return r && i.removeFragment(a.body),
                                r
                            }
                            ))
                        } else
                            a.body.type === r && i.removeFragment(a.body)
                }
                ))
            }
            ,
            e.detectPartialFragments = function(t) {
                var e = this
                  , r = this.timeRanges
                  , i = t.frag
                  , n = t.part;
                if (r && "initSegment" !== i.sn) {
                    var a = st(i)
                      , s = this.fragments[a];
                    s && (Object.keys(r).forEach((function(t) {
                        var a = i.elementaryStreams[t];
                        if (a) {
                            var o = r[t]
                              , l = null !== n || !0 === a.partial;
                            s.range[t] = e.getBufferedTimes(i, n, l, o)
                        }
                    }
                    )),
                    s.backtrack = s.loaded = null,
                    Object.keys(s.range).length ? s.buffered = !0 : this.removeFragment(s.body))
                }
            }
            ,
            e.fragBuffered = function(t) {
                var e = st(t)
                  , r = this.fragments[e];
                r && (r.backtrack = r.loaded = null,
                r.buffered = !0)
            }
            ,
            e.getBufferedTimes = function(t, e, r, i) {
                for (var n = {
                    time: [],
                    partial: r
                }, a = e ? e.start : t.start, s = e ? e.end : t.end, o = t.minEndPTS || s, l = t.maxStartPTS || a, u = 0; u < i.length; u++) {
                    var h = i.start(u) - this.bufferPadding
                      , d = i.end(u) + this.bufferPadding;
                    if (l >= h && o <= d) {
                        n.time.push({
                            startPTS: Math.max(a, i.start(u)),
                            endPTS: Math.min(s, i.end(u))
                        });
                        break
                    }
                    if (a < d && s > h)
                        n.partial = !0,
                        n.time.push({
                            startPTS: Math.max(a, i.start(u)),
                            endPTS: Math.min(s, i.end(u))
                        });
                    else if (s <= h)
                        break
                }
                return n
            }
            ,
            e.getPartialFragment = function(t) {
                var e, r, i, n = null, a = 0, s = this.bufferPadding, o = this.fragments;
                return Object.keys(o).forEach((function(l) {
                    var u = o[l];
                    u && at(u) && (r = u.body.start - s,
                    i = u.body.end + s,
                    t >= r && t <= i && (e = Math.min(t - r, i - t),
                    a <= e && (n = u.body,
                    a = e)))
                }
                )),
                n
            }
            ,
            e.getState = function(t) {
                var e = st(t)
                  , r = this.fragments[e];
                return r ? r.buffered ? at(r) ? et.PARTIAL : et.OK : r.backtrack ? et.BACKTRACKED : et.APPENDING : et.NOT_LOADED
            }
            ,
            e.backtrack = function(t, e) {
                var r = st(t)
                  , i = this.fragments[r];
                if (!i || i.backtrack)
                    return null;
                var n = i.backtrack = e || i.loaded;
                return i.loaded = null,
                n
            }
            ,
            e.getBacktrackData = function(t) {
                var e = st(t)
                  , r = this.fragments[e];
                if (r) {
                    var i, n = r.backtrack;
                    if (null != n && null !== (i = n.payload) && void 0 !== i && i.byteLength)
                        return n;
                    this.removeFragment(t)
                }
                return null
            }
            ,
            e.isTimeBuffered = function(t, e, r) {
                for (var i, n, a = 0; a < r.length; a++) {
                    if (i = r.start(a) - this.bufferPadding,
                    n = r.end(a) + this.bufferPadding,
                    t >= i && e <= n)
                        return !0;
                    if (e <= i)
                        return !1
                }
                return !1
            }
            ,
            e.onFragLoaded = function(t, e) {
                var r = e.frag
                  , i = e.part;
                if ("initSegment" !== r.sn && !r.bitrateTest && !i) {
                    var n = st(r);
                    this.fragments[n] = {
                        body: r,
                        loaded: e,
                        backtrack: null,
                        buffered: !1,
                        range: Object.create(null)
                    }
                }
            }
            ,
            e.onBufferAppended = function(t, e) {
                var r = this
                  , i = e.frag
                  , n = e.part
                  , a = e.timeRanges;
                if (i.type === k.b.MAIN)
                    if (this.activeFragment = i,
                    n) {
                        var s = this.activeParts;
                        s || (this.activeParts = s = []),
                        s.push(n)
                    } else
                        this.activeParts = null;
                this.timeRanges = a,
                Object.keys(a).forEach((function(t) {
                    var e = a[t];
                    if (r.detectEvictedFragments(t, e),
                    !n)
                        for (var s = 0; s < e.length; s++)
                            i.appendedPTS = Math.max(e.end(s), i.appendedPTS || 0)
                }
                ))
            }
            ,
            e.onFragBuffered = function(t, e) {
                this.detectPartialFragments(e)
            }
            ,
            e.hasFragment = function(t) {
                var e = st(t);
                return !!this.fragments[e]
            }
            ,
            e.removeFragmentsInRange = function(t, e, r) {
                var i = this;
                Object.keys(this.fragments).forEach((function(n) {
                    var a = i.fragments[n];
                    if (a && a.buffered) {
                        var s = a.body;
                        s.type === r && s.start < e && s.end > t && i.removeFragment(s)
                    }
                }
                ))
            }
            ,
            e.removeFragment = function(t) {
                var e = st(t);
                t.stats.loaded = 0,
                t.clearElementaryStreamInfo(),
                delete this.fragments[e]
            }
            ,
            e.removeAllFragments = function() {
                this.fragments = Object.create(null),
                this.activeFragment = null,
                this.activeParts = null
            }
            ,
            t
        }();
        function at(t) {
            var e, r;
            return t.buffered && ((null === (e = t.range.video) || void 0 === e ? void 0 : e.partial) || (null === (r = t.range.audio) || void 0 === r ? void 0 : r.partial))
        }
        function st(t) {
            return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
        }
        var ot = function() {
            function t() {
                this._boundTick = void 0,
                this._tickTimer = null,
                this._tickInterval = null,
                this._tickCallCount = 0,
                this._boundTick = this.tick.bind(this)
            }
            var e = t.prototype;
            return e.destroy = function() {
                this.onHandlerDestroying(),
                this.onHandlerDestroyed()
            }
            ,
            e.onHandlerDestroying = function() {
                this.clearNextTick(),
                this.clearInterval()
            }
            ,
            e.onHandlerDestroyed = function() {}
            ,
            e.hasInterval = function() {
                return !!this._tickInterval
            }
            ,
            e.hasNextTick = function() {
                return !!this._tickTimer
            }
            ,
            e.setInterval = function(t) {
                return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, t),
                !0)
            }
            ,
            e.clearInterval = function() {
                return !!this._tickInterval && (self.clearInterval(this._tickInterval),
                this._tickInterval = null,
                !0)
            }
            ,
            e.clearNextTick = function() {
                return !!this._tickTimer && (self.clearTimeout(this._tickTimer),
                this._tickTimer = null,
                !0)
            }
            ,
            e.tick = function() {
                this._tickCallCount++,
                1 === this._tickCallCount && (this.doTick(),
                this._tickCallCount > 1 && this.tickImmediate(),
                this._tickCallCount = 0)
            }
            ,
            e.tickImmediate = function() {
                this.clearNextTick(),
                this._tickTimer = self.setTimeout(this._boundTick, 0)
            }
            ,
            e.doTick = function() {}
            ,
            t
        }()
          , lt = r(6)
          , ut = function(t, e, r, i, n, a) {
            void 0 === i && (i = 0),
            void 0 === n && (n = -1),
            void 0 === a && (a = !1),
            this.level = void 0,
            this.sn = void 0,
            this.part = void 0,
            this.id = void 0,
            this.size = void 0,
            this.partial = void 0,
            this.transmuxing = {
                start: 0,
                executeStart: 0,
                executeEnd: 0,
                end: 0
            },
            this.buffering = {
                audio: {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                },
                video: {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                },
                audiovideo: {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                }
            },
            this.level = t,
            this.sn = e,
            this.id = r,
            this.size = i,
            this.part = n,
            this.partial = a
        };
        function ht(t, e) {
            if (t) {
                var r = t.start + e;
                t.start = t.startPTS = r,
                t.endPTS = r + t.duration
            }
        }
        function dt(t, e) {
            for (var r = e.fragments, i = 0, n = r.length; i < n; i++)
                ht(r[i], t);
            e.fragmentHint && ht(e.fragmentHint, t),
            e.alignedSliding = !0
        }
        function ct(t, e, r) {
            e && (!function(t, e, r) {
                if (function(t, e, r) {
                    return !(!e.details || !(r.endCC > r.startCC || t && t.cc < r.startCC))
                }(t, r, e)) {
                    var i = function(t, e) {
                        var r = t.fragments
                          , i = e.fragments;
                        if (i.length && r.length) {
                            var n = function(t, e) {
                                for (var r = null, i = 0, n = t.length; i < n; i++) {
                                    var a = t[i];
                                    if (a && a.cc === e) {
                                        r = a;
                                        break
                                    }
                                }
                                return r
                            }(r, i[0].cc);
                            if (n && (!n || n.startPTS))
                                return n;
                            o.logger.log("No frag in previous level to align on")
                        } else
                            o.logger.log("No fragments to align")
                    }(r.details, e);
                    i && Object(n.isFiniteNumber)(i.start) && (o.logger.log("Adjusting PTS using last level due to CC increase within current level " + e.url),
                    dt(i.start, e))
                }
            }(t, r, e),
            !r.alignedSliding && e.details && function(t, e) {
                if (!e.fragments.length || !t.hasProgramDateTime || !e.hasProgramDateTime)
                    return;
                var r = e.fragments[0].programDateTime
                  , i = t.fragments[0].programDateTime
                  , a = (i - r) / 1e3 + e.fragments[0].start;
                a && Object(n.isFiniteNumber)(a) && (o.logger.log("Adjusting PTS using programDateTime delta " + (i - r) + "ms, sliding:" + a.toFixed(3) + " " + t.url + " "),
                dt(a, t))
            }(r, e.details),
            r.alignedSliding || !e.details || r.skippedSegments || Y(e.details, r))
        }
        function ft(t, e) {
            var r = t.programDateTime;
            if (r) {
                var i = (r - e) / 1e3;
                t.start = t.startPTS = i,
                t.endPTS = i + t.duration
            }
        }
        function gt(t, e) {
            if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                var r = e.fragments[0].programDateTime - 1e3 * e.fragments[0].start;
                t.fragments.forEach((function(t) {
                    ft(t, r)
                }
                )),
                t.fragmentHint && ft(t.fragmentHint, r),
                t.alignedSliding = !0
            }
        }
        var vt = {
            search: function(t, e) {
                for (var r = 0, i = t.length - 1, n = null, a = null; r <= i; ) {
                    var s = e(a = t[n = (r + i) / 2 | 0]);
                    if (s > 0)
                        r = n + 1;
                    else {
                        if (!(s < 0))
                            return a;
                        i = n - 1
                    }
                }
                return null
            }
        };
        function pt(t, e, r, i) {
            void 0 === r && (r = 0),
            void 0 === i && (i = 0);
            var n = null;
            if (t ? n = e[t.sn - e[0].sn + 1] || null : 0 === r && 0 === e[0].start && (n = e[0]),
            n && 0 === mt(r, i, n))
                return n;
            var a = vt.search(e, mt.bind(null, r, i));
            return a || n
        }
        function mt(t, e, r) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0);
            var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0
        }
        function Et(t, e, r) {
            var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return (r.endProgramDateTime || 0) - i > t
        }
        function yt(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (yt = function(t) {
                if (null === t || (r = t,
                -1 === Function.toString.call(r).indexOf("[native code]")))
                    return t;
                var r;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, i)
                }
                function i() {
                    return Tt(t, arguments, St(this).constructor)
                }
                return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                bt(i, t)
            }
            )(t)
        }
        function Tt(t, e, r) {
            return (Tt = At() ? Reflect.construct : function(t, e, r) {
                var i = [null];
                i.push.apply(i, e);
                var n = new (Function.bind.apply(t, i));
                return r && bt(n, r.prototype),
                n
            }
            ).apply(null, arguments)
        }
        function At() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }
        function bt(t, e) {
            return (bt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function St(t) {
            return (St = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var Dt = Math.pow(2, 17)
          , Rt = function() {
            function t(t) {
                this.config = void 0,
                this.loader = null,
                this.partLoadTimeout = -1,
                this.config = t
            }
            var e = t.prototype;
            return e.destroy = function() {
                this.loader && (this.loader.destroy(),
                this.loader = null)
            }
            ,
            e.abort = function() {
                this.loader && this.loader.abort()
            }
            ,
            e.load = function(t, e) {
                var r = this
                  , i = t.url;
                if (!i)
                    return Promise.reject(new kt({
                        type: s.ErrorTypes.NETWORK_ERROR,
                        details: s.ErrorDetails.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: t,
                        networkDetails: null
                    },"Fragment does not have a " + (i ? "part list" : "url")));
                this.abort();
                var n = this.config
                  , a = n.fLoader
                  , o = n.loader;
                return new Promise((function(i, l) {
                    r.loader && r.loader.destroy();
                    var u = r.loader = t.loader = a ? new a(n) : new o(n)
                      , h = Lt(t)
                      , d = {
                        timeout: n.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                        highWaterMark: "initSegment" === t.sn ? 1 / 0 : Dt
                    };
                    t.stats = u.stats,
                    u.load(h, d, {
                        onSuccess: function(e, n, a, s) {
                            r.resetLoader(t, u),
                            i({
                                frag: t,
                                part: null,
                                payload: e.data,
                                networkDetails: s
                            })
                        },
                        onError: function(e, i, n) {
                            r.resetLoader(t, u),
                            l(new kt({
                                type: s.ErrorTypes.NETWORK_ERROR,
                                details: s.ErrorDetails.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: t,
                                response: e,
                                networkDetails: n
                            }))
                        },
                        onAbort: function(e, i, n) {
                            r.resetLoader(t, u),
                            l(new kt({
                                type: s.ErrorTypes.NETWORK_ERROR,
                                details: s.ErrorDetails.INTERNAL_ABORTED,
                                fatal: !1,
                                frag: t,
                                networkDetails: n
                            }))
                        },
                        onTimeout: function(e, i, n) {
                            r.resetLoader(t, u),
                            l(new kt({
                                type: s.ErrorTypes.NETWORK_ERROR,
                                details: s.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: t,
                                networkDetails: n
                            }))
                        },
                        onProgress: function(r, i, n, a) {
                            e && e({
                                frag: t,
                                part: null,
                                payload: n,
                                networkDetails: a
                            })
                        }
                    })
                }
                ))
            }
            ,
            e.loadPart = function(t, e, r) {
                var i = this;
                this.abort();
                var n = this.config
                  , a = n.fLoader
                  , o = n.loader;
                return new Promise((function(l, u) {
                    i.loader && i.loader.destroy();
                    var h = i.loader = t.loader = a ? new a(n) : new o(n)
                      , d = Lt(t, e)
                      , c = {
                        timeout: n.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                        highWaterMark: Dt
                    };
                    e.stats = h.stats,
                    h.load(d, c, {
                        onSuccess: function(n, a, s, o) {
                            i.resetLoader(t, h),
                            i.updateStatsFromPart(t, e);
                            var u = {
                                frag: t,
                                part: e,
                                payload: n.data,
                                networkDetails: o
                            };
                            r(u),
                            l(u)
                        },
                        onError: function(r, n, a) {
                            i.resetLoader(t, h),
                            u(new kt({
                                type: s.ErrorTypes.NETWORK_ERROR,
                                details: s.ErrorDetails.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: t,
                                part: e,
                                response: r,
                                networkDetails: a
                            }))
                        },
                        onAbort: function(r, n, a) {
                            t.stats.aborted = e.stats.aborted,
                            i.resetLoader(t, h),
                            u(new kt({
                                type: s.ErrorTypes.NETWORK_ERROR,
                                details: s.ErrorDetails.INTERNAL_ABORTED,
                                fatal: !1,
                                frag: t,
                                part: e,
                                networkDetails: a
                            }))
                        },
                        onTimeout: function(r, n, a) {
                            i.resetLoader(t, h),
                            u(new kt({
                                type: s.ErrorTypes.NETWORK_ERROR,
                                details: s.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: t,
                                part: e,
                                networkDetails: a
                            }))
                        }
                    })
                }
                ))
            }
            ,
            e.updateStatsFromPart = function(t, e) {
                var r = t.stats
                  , i = e.stats
                  , n = i.total;
                if (r.loaded += i.loaded,
                n) {
                    var a = Math.round(t.duration / e.duration)
                      , s = Math.min(Math.round(r.loaded / n), a)
                      , o = (a - s) * Math.round(r.loaded / s);
                    r.total = r.loaded + o
                } else
                    r.total = Math.max(r.loaded, r.total);
                var l = r.loading
                  , u = i.loading;
                l.start ? l.first += u.first - u.start : (l.start = u.start,
                l.first = u.first),
                l.end = u.end
            }
            ,
            e.resetLoader = function(t, e) {
                t.loader = null,
                this.loader === e && (self.clearTimeout(this.partLoadTimeout),
                this.loader = null),
                e.destroy()
            }
            ,
            t
        }();
        function Lt(t, e) {
            void 0 === e && (e = null);
            var r = e || t
              , i = {
                frag: t,
                part: e,
                responseType: "arraybuffer",
                url: r.url,
                headers: {},
                rangeStart: 0,
                rangeEnd: 0
            }
              , a = r.byteRangeStartOffset
              , s = r.byteRangeEndOffset;
            return Object(n.isFiniteNumber)(a) && Object(n.isFiniteNumber)(s) && (i.rangeStart = a,
            i.rangeEnd = s),
            i
        }
        var kt = function(t) {
            var e, r;
            function i(e) {
                for (var r, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                    n[a - 1] = arguments[a];
                return (r = t.call.apply(t, [this].concat(n)) || this).data = void 0,
                r.data = e,
                r
            }
            return r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            bt(e, r),
            i
        }(yt(Error))
          , Ct = r(17)
          , _t = {
            toString: function(t) {
                for (var e = "", r = t.length, i = 0; i < r; i++)
                    e += "[" + t.start(i).toFixed(3) + "," + t.end(i).toFixed(3) + "]";
                return e
            }
        };
        function wt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function It(t, e) {
            return (It = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var Ot = "STOPPED"
          , xt = "IDLE"
          , Pt = "KEY_LOADING"
          , Mt = "FRAG_LOADING"
          , Ft = "FRAG_LOADING_WAITING_RETRY"
          , Bt = "WAITING_TRACK"
          , Ut = "PARSING"
          , Nt = "PARSED"
          , Vt = "BACKTRACKING"
          , Gt = "ENDED"
          , jt = "ERROR"
          , Kt = "WAITING_INIT_PTS"
          , Ht = "WAITING_LEVEL"
          , Jt = function(t) {
            var e, r;
            function i(e, r, i) {
                var n;
                return (n = t.call(this) || this).hls = void 0,
                n.fragPrevious = null,
                n.fragCurrent = null,
                n.fragmentTracker = void 0,
                n.transmuxer = null,
                n._state = Ot,
                n.media = void 0,
                n.mediaBuffer = void 0,
                n.config = void 0,
                n.bitrateTest = !1,
                n.lastCurrentTime = 0,
                n.nextLoadPosition = 0,
                n.startPosition = 0,
                n.loadedmetadata = !1,
                n.fragLoadError = 0,
                n.retryDate = 0,
                n.levels = null,
                n.fragmentLoader = void 0,
                n.levelLastLoaded = null,
                n.startFragRequested = !1,
                n.decrypter = void 0,
                n.initPTS = [],
                n.onvseeking = null,
                n.onvended = null,
                n.logPrefix = "",
                n.log = void 0,
                n.warn = void 0,
                n.logPrefix = i,
                n.log = o.logger.log.bind(o.logger, i + ":"),
                n.warn = o.logger.warn.bind(o.logger, i + ":"),
                n.hls = e,
                n.fragmentLoader = new Rt(e.config),
                n.fragmentTracker = r,
                n.config = e.config,
                n.decrypter = new Ct.a(e,e.config),
                e.on(a.Events.KEY_LOADED, n.onKeyLoaded, function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(n)),
                n
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            It(e, r);
            var u, h, d, c = i.prototype;
            return c.doTick = function() {
                this.onTickEnd()
            }
            ,
            c.onTickEnd = function() {}
            ,
            c.startLoad = function(t) {}
            ,
            c.stopLoad = function() {
                this.fragmentLoader.abort();
                var t = this.fragCurrent;
                t && this.fragmentTracker.removeFragment(t),
                this.resetTransmuxer(),
                this.fragCurrent = null,
                this.fragPrevious = null,
                this.clearInterval(),
                this.clearNextTick(),
                this.state = Ot
            }
            ,
            c._streamEnded = function(t, e) {
                var r = this.fragCurrent
                  , i = this.fragmentTracker;
                if (!e.live && r && r.sn >= e.endSN && !t.nextStart) {
                    var n = e.partList;
                    if (null != n && n.length) {
                        var a = n[n.length - 1];
                        return lt.BufferHelper.isBuffered(this.media, a.start + a.duration / 2)
                    }
                    var s = i.getState(r);
                    return s === et.PARTIAL || s === et.OK
                }
                return !1
            }
            ,
            c.onMediaAttached = function(t, e) {
                var r = this.media = this.mediaBuffer = e.media;
                this.onvseeking = this.onMediaSeeking.bind(this),
                this.onvended = this.onMediaEnded.bind(this),
                r.addEventListener("seeking", this.onvseeking),
                r.addEventListener("ended", this.onvended);
                var i = this.config;
                this.levels && i.autoStartLoad && this.state === Ot && this.startLoad(i.startPosition)
            }
            ,
            c.onMediaDetaching = function() {
                var t = this.media;
                null != t && t.ended && (this.log("MSE detaching and video ended, reset startPosition"),
                this.startPosition = this.lastCurrentTime = 0),
                t && (t.removeEventListener("seeking", this.onvseeking),
                t.removeEventListener("ended", this.onvended),
                this.onvseeking = this.onvended = null),
                this.media = this.mediaBuffer = null,
                this.loadedmetadata = !1,
                this.fragmentTracker.removeAllFragments(),
                this.stopLoad()
            }
            ,
            c.onMediaSeeking = function() {
                var t = this.config
                  , e = this.fragCurrent
                  , r = this.media
                  , i = this.mediaBuffer
                  , a = this.state
                  , s = r ? r.currentTime : 0
                  , o = lt.BufferHelper.bufferInfo(i || r, s, t.maxBufferHole);
                if (this.log("media seeking to " + (Object(n.isFiniteNumber)(s) ? s.toFixed(3) : s) + ", state: " + a),
                a === Gt)
                    this.resetLoadingState();
                else if (e && !o.len) {
                    var l = t.maxFragLookUpTolerance
                      , u = e.start - l
                      , h = s > e.start + e.duration + l;
                    (s < u || h) && (h && e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),
                    e.loader.abort()),
                    this.resetLoadingState())
                }
                r && (this.lastCurrentTime = s),
                this.loadedmetadata || o.len || (this.nextLoadPosition = this.startPosition = s),
                this.tickImmediate()
            }
            ,
            c.onMediaEnded = function() {
                this.startPosition = this.lastCurrentTime = 0
            }
            ,
            c.onKeyLoaded = function(t, e) {
                if (this.state === Pt && e.frag === this.fragCurrent && this.levels) {
                    this.state = xt;
                    var r = this.levels[e.frag.level].details;
                    r && this.loadFragment(e.frag, r, e.frag.start)
                }
            }
            ,
            c.onHandlerDestroying = function() {
                this.stopLoad(),
                t.prototype.onHandlerDestroying.call(this)
            }
            ,
            c.onHandlerDestroyed = function() {
                this.state = Ot,
                this.hls.off(a.Events.KEY_LOADED, this.onKeyLoaded, this),
                this.fragmentLoader && this.fragmentLoader.destroy(),
                this.decrypter && this.decrypter.destroy(),
                this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null,
                t.prototype.onHandlerDestroyed.call(this)
            }
            ,
            c.loadKey = function(t, e) {
                this.log("Loading key for " + t.sn + " of [" + e.startSN + "-" + e.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level),
                this.state = Pt,
                this.fragCurrent = t,
                this.hls.trigger(a.Events.KEY_LOADING, {
                    frag: t
                })
            }
            ,
            c.loadFragment = function(t, e, r) {
                this._loadFragForPlayback(t, e, r)
            }
            ,
            c._loadFragForPlayback = function(t, e, r) {
                var i = this;
                this._doFragLoad(t, e, r, (function(e) {
                    if (i.fragContextChanged(t))
                        return i.warn("Fragment " + t.sn + (e.part ? " p: " + e.part.index : "") + " of level " + t.level + " was dropped during download."),
                        void i.fragmentTracker.removeFragment(t);
                    t.stats.chunkCount++,
                    i._handleFragmentLoadProgress(e)
                }
                )).then((function(e) {
                    if (e) {
                        i.fragLoadError = 0;
                        var r = i.state;
                        if (!i.fragContextChanged(t))
                            return "payload"in e && (i.log("Loaded fragment " + t.sn + " of level " + t.level),
                            i.hls.trigger(a.Events.FRAG_LOADED, e),
                            i.state === Vt) ? (i.fragmentTracker.backtrack(t, e),
                            void i.resetFragmentLoading(t)) : void i._handleFragmentLoadComplete(e);
                        (r === Mt || r === Vt || !i.fragCurrent && r === Ut) && (i.fragmentTracker.removeFragment(t),
                        i.state = xt)
                    }
                }
                )).catch((function(e) {
                    i.warn(e),
                    i.resetFragmentLoading(t)
                }
                ))
            }
            ,
            c.flushMainBuffer = function(t, e, r) {
                if (void 0 === r && (r = null),
                t - e) {
                    var i = {
                        startOffset: t,
                        endOffset: e,
                        type: r
                    };
                    this.fragLoadError = 0,
                    this.hls.trigger(a.Events.BUFFER_FLUSHING, i)
                }
            }
            ,
            c._loadInitSegment = function(t) {
                var e = this;
                this._doFragLoad(t).then((function(r) {
                    if (!r || e.fragContextChanged(t) || !e.levels)
                        throw new Error("init load aborted");
                    return r
                }
                )).then((function(r) {
                    var i = e.hls
                      , n = r.payload
                      , s = t.decryptdata;
                    if (n && n.byteLength > 0 && s && s.key && s.iv && "AES-128" === s.method) {
                        var o = self.performance.now();
                        return e.decrypter.webCryptoDecrypt(new Uint8Array(n), s.key.buffer, s.iv.buffer).then((function(e) {
                            var n = self.performance.now();
                            return i.trigger(a.Events.FRAG_DECRYPTED, {
                                frag: t,
                                payload: e,
                                stats: {
                                    tstart: o,
                                    tdecrypt: n
                                }
                            }),
                            r.payload = e,
                            r
                        }
                        ))
                    }
                    return r
                }
                )).then((function(r) {
                    var i = e.fragCurrent
                      , n = e.hls
                      , s = e.levels;
                    if (!s)
                        throw new Error("init load aborted, missing levels");
                    s[t.level].details;
                    var o = t.stats;
                    e.state = xt,
                    e.fragLoadError = 0,
                    t.data = new Uint8Array(r.payload),
                    o.parsing.start = o.buffering.start = self.performance.now(),
                    o.parsing.end = o.buffering.end = self.performance.now(),
                    r.frag === i && n.trigger(a.Events.FRAG_BUFFERED, {
                        stats: o,
                        frag: i,
                        part: null,
                        id: t.type
                    }),
                    e.tick()
                }
                )).catch((function(r) {
                    e.warn(r),
                    e.resetFragmentLoading(t)
                }
                ))
            }
            ,
            c.fragContextChanged = function(t) {
                var e = this.fragCurrent;
                return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
            }
            ,
            c.fragBufferedComplete = function(t, e) {
                var r = this.mediaBuffer ? this.mediaBuffer : this.media;
                this.log("Buffered " + t.type + " sn: " + t.sn + (e ? " part: " + e.index : "") + " of " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level + " " + _t.toString(lt.BufferHelper.getBuffered(r))),
                this.state = xt,
                this.tick()
            }
            ,
            c._handleFragmentLoadComplete = function(t) {
                var e = this.transmuxer;
                if (e) {
                    var r = t.frag
                      , i = t.part
                      , n = t.partsLoaded
                      , a = !n || 0 === n.length || n.some((function(t) {
                        return !t
                    }
                    ))
                      , s = new ut(r.level,r.sn,r.stats.chunkCount + 1,0,i ? i.index : -1,!a);
                    e.flush(s)
                }
            }
            ,
            c._handleFragmentLoadProgress = function(t) {}
            ,
            c._doFragLoad = function(t, e, r, i) {
                var s = this;
                if (void 0 === r && (r = null),
                !this.levels)
                    throw new Error("frag load aborted, missing levels");
                if (r = Math.max(t.start, r || 0),
                this.config.lowLatencyMode && e) {
                    var o = e.partList;
                    if (o && i) {
                        r > t.end && e.fragmentHint && (t = e.fragmentHint);
                        var l = this.getNextPart(o, t, r);
                        if (l > -1) {
                            var u = o[l];
                            return this.log("Loading part sn: " + t.sn + " p: " + u.index + " cc: " + t.cc + " of playlist [" + e.startSN + "-" + e.endSN + "] parts [0-" + l + "-" + (o.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))),
                            this.nextLoadPosition = u.start + u.duration,
                            this.state = Mt,
                            this.hls.trigger(a.Events.FRAG_LOADING, {
                                frag: t,
                                part: o[l],
                                targetBufferTime: r
                            }),
                            this.doFragPartsLoad(t, o, l, i).catch((function(t) {
                                return s.handleFragLoadError(t)
                            }
                            ))
                        }
                        if (!t.url || this.loadedEndOfParts(o, r))
                            return Promise.resolve(null)
                    }
                }
                return this.log("Loading fragment " + t.sn + " cc: " + t.cc + " " + (e ? "of [" + e.startSN + "-" + e.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))),
                Object(n.isFiniteNumber)(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration),
                this.state = Mt,
                this.hls.trigger(a.Events.FRAG_LOADING, {
                    frag: t,
                    targetBufferTime: r
                }),
                this.fragmentLoader.load(t, i).catch((function(t) {
                    return s.handleFragLoadError(t)
                }
                ))
            }
            ,
            c.doFragPartsLoad = function(t, e, r, i) {
                var n = this;
                return new Promise((function(s, o) {
                    var l = [];
                    !function r(u) {
                        var h = e[u];
                        n.fragmentLoader.loadPart(t, h, i).then((function(i) {
                            l[h.index] = i;
                            var o = i.part;
                            n.hls.trigger(a.Events.FRAG_LOADED, i);
                            var d = e[u + 1];
                            if (!d || d.fragment !== t)
                                return s({
                                    frag: t,
                                    part: o,
                                    partsLoaded: l
                                });
                            r(u + 1)
                        }
                        )).catch(o)
                    }(r)
                }
                ))
            }
            ,
            c.handleFragLoadError = function(t) {
                var e = t.data;
                return e && e.details === s.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(a.Events.ERROR, e),
                null
            }
            ,
            c._handleTransmuxerFlush = function(t) {
                var e = this.getCurrentContext(t);
                if (e && this.state === Ut) {
                    var r = e.frag
                      , i = e.part
                      , n = e.level
                      , a = self.performance.now();
                    r.stats.parsing.end = a,
                    i && (i.stats.parsing.end = a),
                    this.updateLevelTiming(r, i, n, t.partial)
                } else
                    this.fragCurrent || (this.state = xt)
            }
            ,
            c.getCurrentContext = function(t) {
                var e = this.levels
                  , r = t.level
                  , i = t.sn
                  , n = t.part;
                if (!e || !e[r])
                    return this.warn("Levels object was unset while buffering fragment " + i + " of level " + r + ". The current chunk will not be buffered."),
                    null;
                var a = e[r]
                  , s = n > -1 ? function(t, e, r) {
                    if (!t || !t.details)
                        return null;
                    var i = t.details.partList;
                    if (i)
                        for (var n = i.length; n--; ) {
                            var a = i[n];
                            if (a.index === r && a.fragment.sn === e)
                                return a
                        }
                    return null
                }(a, i, n) : null
                  , o = s ? s.fragment : function(t, e, r) {
                    if (!t || !t.details)
                        return null;
                    var i = t.details
                      , n = i.fragments[e - i.startSN];
                    return n || ((n = i.fragmentHint) && n.sn === e ? n : e < i.startSN && r && r.sn === e ? r : null)
                }(a, i, this.fragCurrent);
                return o ? {
                    frag: o,
                    part: s,
                    level: a
                } : null
            }
            ,
            c.bufferFragmentData = function(t, e, r, i) {
                if (t && this.state === Ut) {
                    var n = t.data1
                      , s = t.data2
                      , o = n;
                    if (n && s && (o = Object(l.b)(n, s)),
                    o && o.length) {
                        var u = {
                            type: t.type,
                            frag: e,
                            part: r,
                            chunkMeta: i,
                            parent: e.type,
                            data: o
                        };
                        this.hls.trigger(a.Events.BUFFER_APPENDING, u),
                        t.dropped && t.independent && !r && this.flushBufferGap(e)
                    }
                }
            }
            ,
            c.flushBufferGap = function(t) {
                var e = this.media;
                if (e)
                    if (lt.BufferHelper.isBuffered(e, e.currentTime)) {
                        var r = e.currentTime
                          , i = lt.BufferHelper.bufferInfo(e, r, 0)
                          , n = t.duration
                          , a = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * n)
                          , s = Math.max(Math.min(t.start - a, i.end - a), r + a);
                        t.start - s > a && this.flushMainBuffer(s, t.start)
                    } else
                        this.flushMainBuffer(0, t.start)
            }
            ,
            c.getFwdBufferInfo = function(t, e) {
                var r = this.config
                  , i = this.getLoadPosition();
                if (!Object(n.isFiniteNumber)(i))
                    return null;
                var a = lt.BufferHelper.bufferInfo(t, i, r.maxBufferHole);
                if (0 === a.len && void 0 !== a.nextStart) {
                    var s = this.fragmentTracker.getBufferedFrag(i, e);
                    if (s && a.nextStart < s.end)
                        return lt.BufferHelper.bufferInfo(t, i, Math.max(a.nextStart, r.maxBufferHole))
                }
                return a
            }
            ,
            c.getMaxBufferLength = function(t) {
                var e, r = this.config;
                return e = t ? Math.max(8 * r.maxBufferSize / t, r.maxBufferLength) : r.maxBufferLength,
                Math.min(e, r.maxMaxBufferLength)
            }
            ,
            c.reduceMaxBufferLength = function(t) {
                var e = this.config
                  , r = t || e.maxBufferLength;
                return e.maxMaxBufferLength >= r && (e.maxMaxBufferLength /= 2,
                this.warn("Reduce max buffer length to " + e.maxMaxBufferLength + "s"),
                !0)
            }
            ,
            c.getNextFragment = function(t, e) {
                var r, i, n = e.fragments, a = n.length;
                if (!a)
                    return null;
                var s, o = this.config, l = n[0].start;
                if (e.live) {
                    var u = o.initialLiveManifestSize;
                    if (a < u)
                        return this.warn("Not enough fragments to start playback (have: " + a + ", need: " + u + ")"),
                        null;
                    e.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (s = this.getInitialLiveFragment(e, n),
                    this.startPosition = s ? this.hls.liveSyncPosition || s.start : t)
                } else
                    t <= l && (s = n[0]);
                if (!s) {
                    var h = o.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                    s = this.getFragmentAtPosition(t, h, e)
                }
                return null === (r = s) || void 0 === r || !r.initSegment || null !== (i = s) && void 0 !== i && i.initSegment.data || this.bitrateTest || (s = s.initSegment),
                s
            }
            ,
            c.getNextPart = function(t, e, r) {
                for (var i = -1, n = !1, a = !0, s = 0, o = t.length; s < o; s++) {
                    var l = t[s];
                    if (a = a && !l.independent,
                    i > -1 && r < l.start)
                        break;
                    var u = l.loaded;
                    !u && (n || l.independent || a) && l.fragment === e && (i = s),
                    n = u
                }
                return i
            }
            ,
            c.loadedEndOfParts = function(t, e) {
                var r = t[t.length - 1];
                return r && e > r.start && r.loaded
            }
            ,
            c.getInitialLiveFragment = function(t, e) {
                var r = this.fragPrevious
                  , i = null;
                if (r) {
                    if (t.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r.programDateTime),
                    i = function(t, e, r) {
                        if (null === e || !Array.isArray(t) || !t.length || !Object(n.isFiniteNumber)(e))
                            return null;
                        if (e < (t[0].programDateTime || 0))
                            return null;
                        if (e >= (t[t.length - 1].endProgramDateTime || 0))
                            return null;
                        r = r || 0;
                        for (var i = 0; i < t.length; ++i) {
                            var a = t[i];
                            if (Et(e, r, a))
                                return a
                        }
                        return null
                    }(e, r.endProgramDateTime, this.config.maxFragLookUpTolerance)),
                    !i) {
                        var a = r.sn + 1;
                        if (a >= t.startSN && a <= t.endSN) {
                            var s = e[a - t.startSN];
                            r.cc === s.cc && (i = s,
                            this.log("Live playlist, switching playlist, load frag with next SN: " + i.sn))
                        }
                        i || (i = function(t, e) {
                            return vt.search(t, (function(t) {
                                return t.cc < e ? 1 : t.cc > e ? -1 : 0
                            }
                            ))
                        }(e, r.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + i.sn)
                    }
                } else {
                    var o = this.hls.liveSyncPosition;
                    null !== o && (i = this.getFragmentAtPosition(o, this.bitrateTest ? t.fragmentEnd : t.edge, t))
                }
                return i
            }
            ,
            c.getFragmentAtPosition = function(t, e, r) {
                var i, n = this.config, a = this.fragPrevious, s = r.fragments, o = r.endSN, l = r.fragmentHint, u = n.maxFragLookUpTolerance, h = !!(n.lowLatencyMode && r.partList && l);
                (h && l && !this.bitrateTest && (s = s.concat(l),
                o = l.sn),
                t < e) ? i = pt(a, s, t, t > e - u ? 0 : u) : i = s[s.length - 1];
                if (i) {
                    var d = i.sn - r.startSN
                      , c = a && i.level === a.level
                      , f = s[d + 1];
                    if (this.fragmentTracker.getState(i) === et.BACKTRACKED) {
                        i = null;
                        for (var g = d; s[g] && this.fragmentTracker.getState(s[g]) === et.BACKTRACKED; )
                            i = a ? s[g--] : s[--g];
                        i || (i = f)
                    } else
                        a && i.sn === a.sn && !h && c && (i.sn < o && this.fragmentTracker.getState(f) !== et.OK ? (this.log("SN " + i.sn + " just loaded, load next one: " + f.sn),
                        i = f) : i = null)
                }
                return i
            }
            ,
            c.synchronizeToLiveEdge = function(t) {
                var e = this.config
                  , r = this.media;
                if (r) {
                    var i = this.hls.liveSyncPosition
                      , n = r.currentTime
                      , a = t.fragments[0].start
                      , s = t.edge
                      , o = n >= a - e.maxFragLookUpTolerance && n <= s;
                    if (null !== i && r.duration > i && (n < i || !o)) {
                        var l = void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
                        (!o && r.readyState < 4 || n < s - l) && (this.loadedmetadata || (this.nextLoadPosition = i),
                        r.readyState && (this.warn("Playback: " + n.toFixed(3) + " is located too far from the end of live sliding playlist: " + s + ", reset currentTime to : " + i.toFixed(3)),
                        r.currentTime = i))
                    }
                }
            }
            ,
            c.alignPlaylists = function(t, e) {
                var r = this.levels
                  , i = this.levelLastLoaded
                  , a = this.fragPrevious
                  , s = null !== i ? r[i] : null
                  , o = t.fragments.length;
                if (!o)
                    return this.warn("No fragments in live playlist"),
                    0;
                var l = t.fragments[0].start
                  , u = !e
                  , h = t.alignedSliding && Object(n.isFiniteNumber)(l);
                if (u || !h && !l) {
                    ct(a, s, t);
                    var d = t.fragments[0].start;
                    return this.log("Live playlist sliding: " + d.toFixed(2) + " start-sn: " + (e ? e.startSN : "na") + "->" + t.startSN + " prev-sn: " + (a ? a.sn : "na") + " fragments: " + o),
                    d
                }
                return l
            }
            ,
            c.waitForCdnTuneIn = function(t) {
                return t.live && t.canBlockReload && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
            }
            ,
            c.setStartPosition = function(t, e) {
                var r = this.startPosition;
                if (r < e && (r = -1),
                -1 === r || -1 === this.lastCurrentTime) {
                    var i = t.startTimeOffset;
                    Object(n.isFiniteNumber)(i) ? (r = e + i,
                    i < 0 && (r += t.totalduration),
                    r = Math.min(Math.max(e, r), e + t.totalduration),
                    this.log("Start time offset " + i + " found in playlist, adjust startPosition to " + r),
                    this.startPosition = r) : t.live ? r = this.hls.liveSyncPosition || e : this.startPosition = r = 0,
                    this.lastCurrentTime = r
                }
                this.nextLoadPosition = r
            }
            ,
            c.getLoadPosition = function() {
                var t = this.media
                  , e = 0;
                return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition),
                e
            }
            ,
            c.handleFragLoadAborted = function(t, e) {
                this.transmuxer && "initSegment" !== t.sn && t.stats.aborted && (this.warn("Fragment " + t.sn + (e ? " part" + e.index : "") + " of level " + t.level + " was aborted"),
                this.resetFragmentLoading(t))
            }
            ,
            c.resetFragmentLoading = function(t) {
                this.fragCurrent && this.fragContextChanged(t) || (this.state = xt)
            }
            ,
            c.onFragmentOrKeyLoadError = function(t, e) {
                if (!e.fatal) {
                    var r = e.frag;
                    if (r && r.type === t) {
                        this.fragCurrent;
                        var i = this.config;
                        if (this.fragLoadError + 1 <= i.fragLoadingMaxRetry) {
                            if (this.resetLiveStartWhenNotLoaded(r.level))
                                return;
                            var n = Math.min(Math.pow(2, this.fragLoadError) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
                            this.warn("Fragment " + r.sn + " of " + t + " " + r.level + " failed to load, retrying in " + n + "ms"),
                            this.retryDate = self.performance.now() + n,
                            this.fragLoadError++,
                            this.state = Ft
                        } else
                            e.levelRetry ? (t === k.b.AUDIO && (this.fragCurrent = null),
                            this.fragLoadError = 0,
                            this.state = xt) : (o.logger.error(e.details + " reaches max retry, redispatch as fatal ..."),
                            e.fatal = !0,
                            this.hls.stopLoad(),
                            this.state = jt)
                    }
                }
            }
            ,
            c.afterBufferFlushed = function(t, e, r) {
                if (t) {
                    var i = lt.BufferHelper.getBuffered(t);
                    this.fragmentTracker.detectEvictedFragments(e, i, r),
                    this.state === Gt && this.resetLoadingState()
                }
            }
            ,
            c.resetLoadingState = function() {
                this.fragCurrent = null,
                this.fragPrevious = null,
                this.state = xt
            }
            ,
            c.resetLiveStartWhenNotLoaded = function(t) {
                if (!this.loadedmetadata) {
                    this.startFragRequested = !1;
                    var e = this.levels ? this.levels[t].details : null;
                    if (null != e && e.live)
                        return this.startPosition = -1,
                        this.setStartPosition(e, 0),
                        this.resetLoadingState(),
                        !0;
                    this.nextLoadPosition = this.startPosition
                }
                return !1
            }
            ,
            c.updateLevelTiming = function(t, e, r, i) {
                var n = this
                  , s = r.details;
                Object.keys(t.elementaryStreams).reduce((function(e, o) {
                    var l = t.elementaryStreams[o];
                    if (l) {
                        var u = l.endPTS - l.startPTS;
                        if (u <= 0)
                            return n.warn("Could not parse fragment " + t.sn + " " + o + " duration reliably (" + u + ") resetting transmuxer to fallback to playlist timing"),
                            n.resetTransmuxer(),
                            e || !1;
                        var h = i ? 0 : Q(s, t, l.startPTS, l.endPTS, l.startDTS, l.endDTS);
                        return n.hls.trigger(a.Events.LEVEL_PTS_UPDATED, {
                            details: s,
                            level: r,
                            drift: h,
                            type: o,
                            frag: t,
                            start: l.startPTS,
                            end: l.endPTS
                        }),
                        !0
                    }
                    return e
                }
                ), !1) ? (this.state = Nt,
                this.hls.trigger(a.Events.FRAG_PARSED, {
                    frag: t,
                    part: e
                })) : this.resetLoadingState()
            }
            ,
            c.resetTransmuxer = function() {
                this.transmuxer && (this.transmuxer.destroy(),
                this.transmuxer = null)
            }
            ,
            u = i,
            (h = [{
                key: "state",
                get: function() {
                    return this._state
                },
                set: function(t) {
                    var e = this._state;
                    e !== t && (this._state = t,
                    this.log(e + "->" + t))
                }
            }]) && wt(u.prototype, h),
            d && wt(u, d),
            Object.defineProperty(u, "prototype", {
                writable: !1
            }),
            i
        }(ot)
          , Wt = r(18);
        function Qt() {
            return self.SourceBuffer || self.WebKitSourceBuffer
        }
        var Xt = r(23)
          , Yt = r(11)
          , qt = r(16)
          , zt = Object(Wt.getMediaSource)() || {
            isTypeSupported: function() {
                return !1
            }
        }
          , Zt = function() {
            function t(t, e, r, i) {
                var n = this;
                this.hls = void 0,
                this.id = void 0,
                this.observer = void 0,
                this.frag = null,
                this.part = null,
                this.worker = void 0,
                this.onwmsg = void 0,
                this.transmuxer = null,
                this.onTransmuxComplete = void 0,
                this.onFlush = void 0,
                this.hls = t,
                this.id = e,
                this.onTransmuxComplete = r,
                this.onFlush = i;
                var l = t.config
                  , u = function(e, r) {
                    (r = r || {}).frag = n.frag,
                    r.id = n.id,
                    t.trigger(e, r)
                };
                this.observer = new qt.EventEmitter,
                this.observer.on(a.Events.FRAG_DECRYPTED, u),
                this.observer.on(a.Events.ERROR, u);
                var h = {
                    mp4: zt.isTypeSupported("video/mp4"),
                    mpeg: zt.isTypeSupported("audio/mpeg"),
                    mp3: zt.isTypeSupported('audio/mp4; codecs="mp3"')
                }
                  , d = navigator.vendor;
                if (l.enableWorker && "undefined" != typeof Worker) {
                    var c;
                    o.logger.log("demuxing in webworker");
                    try {
                        c = this.worker = Xt(26),
                        this.onwmsg = this.onWorkerMessage.bind(this),
                        c.addEventListener("message", this.onwmsg),
                        c.onerror = function(e) {
                            t.trigger(a.Events.ERROR, {
                                type: s.ErrorTypes.OTHER_ERROR,
                                details: s.ErrorDetails.INTERNAL_EXCEPTION,
                                fatal: !0,
                                event: "demuxerWorker",
                                error: new Error(e.message + "  (" + e.filename + ":" + e.lineno + ")")
                            })
                        }
                        ,
                        c.postMessage({
                            cmd: "init",
                            typeSupported: h,
                            vendor: d,
                            id: e,
                            config: JSON.stringify(l)
                        })
                    } catch (t) {
                        o.logger.warn("Error in worker:", t),
                        o.logger.error("Error while initializing DemuxerWorker, fallback to inline"),
                        c && self.URL.revokeObjectURL(c.objectURL),
                        this.transmuxer = new Yt.c(this.observer,h,l,d,e),
                        this.worker = null
                    }
                } else
                    this.transmuxer = new Yt.c(this.observer,h,l,d,e)
            }
            var e = t.prototype;
            return e.destroy = function() {
                var t = this.worker;
                if (t)
                    t.removeEventListener("message", this.onwmsg),
                    t.terminate(),
                    this.worker = null;
                else {
                    var e = this.transmuxer;
                    e && (e.destroy(),
                    this.transmuxer = null)
                }
                var r = this.observer;
                r && r.removeAllListeners(),
                this.observer = null
            }
            ,
            e.push = function(t, e, r, i, n, a, s, l, u, h) {
                var d, c, f = this;
                u.transmuxing.start = self.performance.now();
                var g = this.transmuxer
                  , v = this.worker
                  , p = a ? a.start : n.start
                  , m = n.decryptdata
                  , E = this.frag
                  , y = !(E && n.cc === E.cc)
                  , T = !(E && u.level === E.level)
                  , A = E ? u.sn - E.sn : -1
                  , b = this.part ? u.part - this.part.index : 1
                  , S = !T && (1 === A || 0 === A && 1 === b)
                  , D = self.performance.now();
                (T || A || 0 === n.stats.parsing.start) && (n.stats.parsing.start = D),
                !a || !b && S || (a.stats.parsing.start = D);
                var R = !(E && (null === (d = n.initSegment) || void 0 === d ? void 0 : d.url) === (null === (c = E.initSegment) || void 0 === c ? void 0 : c.url))
                  , L = new Yt.b(y,S,l,T,p,R);
                if (!S || y || R) {
                    o.logger.log("[transmuxer-interface, " + n.type + "]: Starting new transmux session for sn: " + u.sn + " p: " + u.part + " level: " + u.level + " id: " + u.id + "\n        discontinuity: " + y + "\n        trackSwitch: " + T + "\n        contiguous: " + S + "\n        accurateTimeOffset: " + l + "\n        timeOffset: " + p + "\n        initSegmentChange: " + R);
                    var k = new Yt.a(r,i,e,s,h);
                    this.configureTransmuxer(k)
                }
                if (this.frag = n,
                this.part = a,
                v)
                    v.postMessage({
                        cmd: "demux",
                        data: t,
                        decryptdata: m,
                        chunkMeta: u,
                        state: L
                    }, t instanceof ArrayBuffer ? [t] : []);
                else if (g) {
                    var C = g.push(t, m, u, L);
                    Object(Yt.d)(C) ? C.then((function(t) {
                        f.handleTransmuxComplete(t)
                    }
                    )) : this.handleTransmuxComplete(C)
                }
            }
            ,
            e.flush = function(t) {
                var e = this;
                t.transmuxing.start = self.performance.now();
                var r = this.transmuxer
                  , i = this.worker;
                if (i)
                    i.postMessage({
                        cmd: "flush",
                        chunkMeta: t
                    });
                else if (r) {
                    var n = r.flush(t);
                    Object(Yt.d)(n) ? n.then((function(r) {
                        e.handleFlushResult(r, t)
                    }
                    )) : this.handleFlushResult(n, t)
                }
            }
            ,
            e.handleFlushResult = function(t, e) {
                var r = this;
                t.forEach((function(t) {
                    r.handleTransmuxComplete(t)
                }
                )),
                this.onFlush(e)
            }
            ,
            e.onWorkerMessage = function(t) {
                var e = t.data
                  , r = this.hls;
                switch (e.event) {
                case "init":
                    self.URL.revokeObjectURL(this.worker.objectURL);
                    break;
                case "transmuxComplete":
                    this.handleTransmuxComplete(e.data);
                    break;
                case "flush":
                    this.onFlush(e.data);
                    break;
                default:
                    e.data = e.data || {},
                    e.data.frag = this.frag,
                    e.data.id = this.id,
                    r.trigger(e.event, e.data)
                }
            }
            ,
            e.configureTransmuxer = function(t) {
                var e = this.worker
                  , r = this.transmuxer;
                e ? e.postMessage({
                    cmd: "configure",
                    config: t
                }) : r && r.configure(t)
            }
            ,
            e.handleTransmuxComplete = function(t) {
                t.chunkMeta.transmuxing.end = self.performance.now(),
                this.onTransmuxComplete(t)
            }
            ,
            t
        }()
          , $t = function() {
            function t(t, e, r, i) {
                this.config = void 0,
                this.media = void 0,
                this.fragmentTracker = void 0,
                this.hls = void 0,
                this.nudgeRetry = 0,
                this.stallReported = !1,
                this.stalled = null,
                this.moved = !1,
                this.seeking = !1,
                this.config = t,
                this.media = e,
                this.fragmentTracker = r,
                this.hls = i
            }
            var e = t.prototype;
            return e.destroy = function() {
                this.hls = this.fragmentTracker = this.media = null
            }
            ,
            e.poll = function(t) {
                var e = this.config
                  , r = this.media
                  , i = this.stalled
                  , n = r.currentTime
                  , a = r.seeking
                  , s = this.seeking && !a
                  , l = !this.seeking && a;
                if (this.seeking = a,
                n === t) {
                    if ((l || s) && (this.stalled = null),
                    !r.paused && !r.ended && 0 !== r.playbackRate && lt.BufferHelper.getBuffered(r).length) {
                        var u = lt.BufferHelper.bufferInfo(r, n, 0)
                          , h = u.len > 0
                          , d = u.nextStart || 0;
                        if (h || d) {
                            if (a) {
                                var c = u.len > 2
                                  , f = !d || d - n > 2 && !this.fragmentTracker.getPartialFragment(n);
                                if (c || f)
                                    return;
                                this.moved = !1
                            }
                            if (!this.moved && null !== this.stalled) {
                                var g, v = Math.max(d, u.start || 0) - n, p = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, m = (null == p || null === (g = p.details) || void 0 === g ? void 0 : g.live) ? 2 * p.details.targetduration : 2;
                                if (v > 0 && v <= m)
                                    return void this._trySkipBufferHole(null)
                            }
                            var E = self.performance.now();
                            if (null !== i) {
                                var y = E - i;
                                !a && y >= 250 && this._reportStall(u.len);
                                var T = lt.BufferHelper.bufferInfo(r, n, e.maxBufferHole);
                                this._tryFixBufferStall(T, y)
                            } else
                                this.stalled = E
                        }
                    }
                } else if (this.moved = !0,
                null !== i) {
                    if (this.stallReported) {
                        var A = self.performance.now() - i;
                        o.logger.warn("playback not stuck anymore @" + n + ", after " + Math.round(A) + "ms"),
                        this.stallReported = !1
                    }
                    this.stalled = null,
                    this.nudgeRetry = 0
                }
            }
            ,
            e._tryFixBufferStall = function(t, e) {
                var r = this.config
                  , i = this.fragmentTracker
                  , n = this.media.currentTime
                  , a = i.getPartialFragment(n);
                if (a && this._trySkipBufferHole(a))
                    return;
                t.len > r.maxBufferHole && e > 1e3 * r.highBufferWatchdogPeriod && (o.logger.warn("Trying to nudge playhead over buffer-hole"),
                this.stalled = null,
                this._tryNudgeBuffer())
            }
            ,
            e._reportStall = function(t) {
                var e = this.hls
                  , r = this.media;
                this.stallReported || (this.stallReported = !0,
                o.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer (buffer=" + t + ")"),
                e.trigger(a.Events.ERROR, {
                    type: s.ErrorTypes.MEDIA_ERROR,
                    details: s.ErrorDetails.BUFFER_STALLED_ERROR,
                    fatal: !1,
                    buffer: t
                }))
            }
            ,
            e._trySkipBufferHole = function(t) {
                for (var e = this.config, r = this.hls, i = this.media, n = i.currentTime, l = 0, u = lt.BufferHelper.getBuffered(i), h = 0; h < u.length; h++) {
                    var d = u.start(h);
                    if (n + e.maxBufferHole >= l && n < d) {
                        var c = Math.max(d + .05, i.currentTime + .1);
                        return o.logger.warn("skipping hole, adjusting currentTime from " + n + " to " + c),
                        this.moved = !0,
                        this.stalled = null,
                        i.currentTime = c,
                        t && r.trigger(a.Events.ERROR, {
                            type: s.ErrorTypes.MEDIA_ERROR,
                            details: s.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            reason: "fragment loaded with buffer holes, seeking from " + n + " to " + c,
                            frag: t
                        }),
                        c
                    }
                    l = u.end(h)
                }
                return 0
            }
            ,
            e._tryNudgeBuffer = function() {
                var t = this.config
                  , e = this.hls
                  , r = this.media
                  , i = this.nudgeRetry
                  , n = r.currentTime;
                if (this.nudgeRetry++,
                i < t.nudgeMaxRetry) {
                    var l = n + (i + 1) * t.nudgeOffset;
                    o.logger.warn("Nudging 'currentTime' from " + n + " to " + l),
                    r.currentTime = l,
                    e.trigger(a.Events.ERROR, {
                        type: s.ErrorTypes.MEDIA_ERROR,
                        details: s.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                        fatal: !1
                    })
                } else
                    o.logger.error("Playhead still not moving while enough data buffered @" + n + " after " + t.nudgeMaxRetry + " nudges"),
                    e.trigger(a.Events.ERROR, {
                        type: s.ErrorTypes.MEDIA_ERROR,
                        details: s.ErrorDetails.BUFFER_STALLED_ERROR,
                        fatal: !0
                    })
            }
            ,
            t
        }();
        function te(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function ee(t, e) {
            return (ee = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var re = function(t) {
            var e, r;
            function i(e, r) {
                var i;
                return (i = t.call(this, e, r, "[stream-controller]") || this).audioCodecSwap = !1,
                i.gapController = null,
                i.level = -1,
                i._forceStartLoad = !1,
                i.altAudio = !1,
                i.audioOnly = !1,
                i.fragPlaying = null,
                i.onvplaying = null,
                i.onvseeked = null,
                i.fragLastKbps = 0,
                i.stalled = !1,
                i.couldBacktrack = !1,
                i.audioCodecSwitch = !1,
                i.videoBuffer = null,
                i._registerListeners(),
                i
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            ee(e, r);
            var l, h, d, c = i.prototype;
            return c._registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.on(a.Events.LEVEL_LOADING, this.onLevelLoading, this),
                t.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                t.on(a.Events.ERROR, this.onError, this),
                t.on(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                t.on(a.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                t.on(a.Events.BUFFER_CREATED, this.onBufferCreated, this),
                t.on(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                t.on(a.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
                t.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
            }
            ,
            c._unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                t.off(a.Events.ERROR, this.onError, this),
                t.off(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                t.off(a.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                t.off(a.Events.BUFFER_CREATED, this.onBufferCreated, this),
                t.off(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                t.off(a.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
                t.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
            }
            ,
            c.onHandlerDestroying = function() {
                this._unregisterListeners(),
                this.onMediaDetaching()
            }
            ,
            c.startLoad = function(t) {
                if (this.levels) {
                    var e = this.lastCurrentTime
                      , r = this.hls;
                    if (this.stopLoad(),
                    this.setInterval(100),
                    this.level = -1,
                    this.fragLoadError = 0,
                    !this.startFragRequested) {
                        var i = r.startLevel;
                        -1 === i && (r.config.testBandwidth ? (i = 0,
                        this.bitrateTest = !0) : i = r.nextAutoLevel),
                        this.level = r.nextLoadLevel = i,
                        this.loadedmetadata = !1
                    }
                    e > 0 && -1 === t && (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)),
                    t = e),
                    this.state = xt,
                    this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t,
                    this.tick()
                } else
                    this._forceStartLoad = !0,
                    this.state = Ot
            }
            ,
            c.stopLoad = function() {
                this._forceStartLoad = !1,
                t.prototype.stopLoad.call(this)
            }
            ,
            c.doTick = function() {
                switch (this.state) {
                case xt:
                    this.doTickIdle();
                    break;
                case Ht:
                    var t, e = this.levels, r = this.level, i = null == e || null === (t = e[r]) || void 0 === t ? void 0 : t.details;
                    if (i && (!i.live || this.levelLastLoaded === this.level)) {
                        if (this.waitForCdnTuneIn(i))
                            break;
                        this.state = xt;
                        break
                    }
                    break;
                case Ft:
                    var n, a = self.performance.now(), s = this.retryDate;
                    (!s || a >= s || null !== (n = this.media) && void 0 !== n && n.seeking) && (this.log("retryDate reached, switch back to IDLE state"),
                    this.state = xt)
                }
                this.onTickEnd()
            }
            ,
            c.onTickEnd = function() {
                t.prototype.onTickEnd.call(this),
                this.checkBuffer(),
                this.checkFragmentChanged()
            }
            ,
            c.doTickIdle = function() {
                var t, e, r = this.hls, i = this.levelLastLoaded, n = this.levels, s = this.media, o = r.config, l = r.nextLoadLevel;
                if (null !== i && (s || !this.startFragRequested && o.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && n && n[l]) {
                    var h = n[l];
                    this.level = r.nextLoadLevel = l;
                    var d = h.details;
                    if (!d || this.state === Ht || d.live && this.levelLastLoaded !== l)
                        this.state = Ht;
                    else {
                        var c = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : s, k.b.MAIN);
                        if (null !== c)
                            if (!(c.len >= this.getMaxBufferLength(h.maxBitrate))) {
                                if (this._streamEnded(c, d)) {
                                    var f = {};
                                    return this.altAudio && (f.type = "video"),
                                    this.hls.trigger(a.Events.BUFFER_EOS, f),
                                    void (this.state = Gt)
                                }
                                var g = c.end
                                  , v = this.getNextFragment(g, d);
                                if (this.couldBacktrack && !this.fragPrevious && v && "initSegment" !== v.sn) {
                                    var p = v.sn - d.startSN;
                                    p > 1 && (v = d.fragments[p - 1],
                                    this.fragmentTracker.removeFragment(v))
                                }
                                if (v && this.fragmentTracker.getState(v) === et.OK && this.nextLoadPosition > g) {
                                    var m = this.audioOnly && !this.altAudio ? u.ElementaryStreamTypes.AUDIO : u.ElementaryStreamTypes.VIDEO;
                                    this.afterBufferFlushed(s, m, k.b.MAIN),
                                    v = this.getNextFragment(this.nextLoadPosition, d)
                                }
                                v && (!v.initSegment || v.initSegment.data || this.bitrateTest || (v = v.initSegment),
                                "identity" !== (null === (t = v.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = v.decryptdata) && void 0 !== e && e.key ? this.loadFragment(v, d, g) : this.loadKey(v, d))
                            }
                    }
                }
            }
            ,
            c.loadFragment = function(e, r, i) {
                var n, a = this.fragmentTracker.getState(e);
                if (this.fragCurrent = e,
                a === et.BACKTRACKED) {
                    var s = this.fragmentTracker.getBacktrackData(e);
                    if (s)
                        return this._handleFragmentLoadProgress(s),
                        void this._handleFragmentLoadComplete(s);
                    a = et.NOT_LOADED
                }
                a === et.NOT_LOADED || a === et.PARTIAL ? "initSegment" === e.sn ? this._loadInitSegment(e) : this.bitrateTest ? (e.bitrateTest = !0,
                this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"),
                this._loadBitrateTestFrag(e)) : (this.startFragRequested = !0,
                t.prototype.loadFragment.call(this, e, r, i)) : a === et.APPENDING ? this.reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e) : 0 === (null === (n = this.media) || void 0 === n ? void 0 : n.buffered.length) && this.fragmentTracker.removeAllFragments()
            }
            ,
            c.getAppendedFrag = function(t) {
                var e = this.fragmentTracker.getAppendedFrag(t, k.b.MAIN);
                return e && "fragment"in e ? e.fragment : e
            }
            ,
            c.getBufferedFrag = function(t) {
                return this.fragmentTracker.getBufferedFrag(t, k.b.MAIN)
            }
            ,
            c.followingBufferedFrag = function(t) {
                return t ? this.getBufferedFrag(t.end + .5) : null
            }
            ,
            c.immediateLevelSwitch = function() {
                this.abortCurrentFrag(),
                this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
            }
            ,
            c.nextLevelSwitch = function() {
                var t = this.levels
                  , e = this.media;
                if (null != e && e.readyState) {
                    var r, i = this.getAppendedFrag(e.currentTime);
                    if (i && i.start > 1 && this.flushMainBuffer(0, i.start - 1),
                    !e.paused && t) {
                        var n = t[this.hls.nextLoadLevel]
                          , a = this.fragLastKbps;
                        r = a && this.fragCurrent ? this.fragCurrent.duration * n.maxBitrate / (1e3 * a) + 1 : 0
                    } else
                        r = 0;
                    var s = this.getBufferedFrag(e.currentTime + r);
                    if (s) {
                        var o = this.followingBufferedFrag(s);
                        if (o) {
                            this.abortCurrentFrag();
                            var l = o.maxStartPTS ? o.maxStartPTS : o.start
                              , u = o.duration
                              , h = Math.max(s.end, l + Math.min(Math.max(u - this.config.maxFragLookUpTolerance, .5 * u), .75 * u));
                            this.flushMainBuffer(h, Number.POSITIVE_INFINITY)
                        }
                    }
                }
            }
            ,
            c.abortCurrentFrag = function() {
                var t = this.fragCurrent;
                this.fragCurrent = null,
                null != t && t.loader && t.loader.abort(),
                this.state === Pt && (this.state = xt),
                this.nextLoadPosition = this.getLoadPosition()
            }
            ,
            c.flushMainBuffer = function(e, r) {
                t.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? "video" : null)
            }
            ,
            c.onMediaAttached = function(e, r) {
                t.prototype.onMediaAttached.call(this, e, r);
                var i = r.media;
                this.onvplaying = this.onMediaPlaying.bind(this),
                this.onvseeked = this.onMediaSeeked.bind(this),
                i.addEventListener("playing", this.onvplaying),
                i.addEventListener("seeked", this.onvseeked),
                this.gapController = new $t(this.config,i,this.fragmentTracker,this.hls)
            }
            ,
            c.onMediaDetaching = function() {
                var e = this.media;
                e && (e.removeEventListener("playing", this.onvplaying),
                e.removeEventListener("seeked", this.onvseeked),
                this.onvplaying = this.onvseeked = null,
                this.videoBuffer = null),
                this.fragPlaying = null,
                this.gapController && (this.gapController.destroy(),
                this.gapController = null),
                t.prototype.onMediaDetaching.call(this)
            }
            ,
            c.onMediaPlaying = function() {
                this.tick()
            }
            ,
            c.onMediaSeeked = function() {
                var t = this.media
                  , e = t ? t.currentTime : null;
                Object(n.isFiniteNumber)(e) && this.log("Media seeked to " + e.toFixed(3)),
                this.tick()
            }
            ,
            c.onManifestLoading = function() {
                this.log("Trigger BUFFER_RESET"),
                this.hls.trigger(a.Events.BUFFER_RESET, void 0),
                this.fragmentTracker.removeAllFragments(),
                this.couldBacktrack = this.stalled = !1,
                this.startPosition = this.lastCurrentTime = 0,
                this.fragPlaying = null
            }
            ,
            c.onManifestParsed = function(t, e) {
                var r, i, n, a = !1, s = !1;
                e.levels.forEach((function(t) {
                    (r = t.audioCodec) && (-1 !== r.indexOf("mp4a.40.2") && (a = !0),
                    -1 !== r.indexOf("mp4a.40.5") && (s = !0))
                }
                )),
                this.audioCodecSwitch = a && s && !("function" == typeof (null == (n = Qt()) || null === (i = n.prototype) || void 0 === i ? void 0 : i.changeType)),
                this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
                this.levels = e.levels,
                this.startFragRequested = !1
            }
            ,
            c.onLevelLoading = function(t, e) {
                var r = this.levels;
                if (r && this.state === xt) {
                    var i = r[e.level];
                    (!i.details || i.details.live && this.levelLastLoaded !== e.level || this.waitForCdnTuneIn(i.details)) && (this.state = Ht)
                }
            }
            ,
            c.onLevelLoaded = function(t, e) {
                var r, i = this.levels, n = e.level, s = e.details, o = s.totalduration;
                if (i) {
                    this.log("Level " + n + " loaded [" + s.startSN + "," + s.endSN + "], cc [" + s.startCC + ", " + s.endCC + "] duration:" + o);
                    var l = this.fragCurrent;
                    !l || this.state !== Mt && this.state !== Ft || l.level !== e.level && l.loader && (this.state = xt,
                    l.loader.abort());
                    var u = i[n]
                      , h = 0;
                    if (s.live || null !== (r = u.details) && void 0 !== r && r.live) {
                        if (s.fragments[0] || (s.deltaUpdateFailed = !0),
                        s.deltaUpdateFailed)
                            return;
                        h = this.alignPlaylists(s, u.details)
                    }
                    if (u.details = s,
                    this.levelLastLoaded = n,
                    this.hls.trigger(a.Events.LEVEL_UPDATED, {
                        details: s,
                        level: n
                    }),
                    this.state === Ht) {
                        if (this.waitForCdnTuneIn(s))
                            return;
                        this.state = xt
                    }
                    this.startFragRequested ? s.live && this.synchronizeToLiveEdge(s) : this.setStartPosition(s, h),
                    this.tick()
                } else
                    this.warn("Levels were reset while loading level " + n)
            }
            ,
            c._handleFragmentLoadProgress = function(t) {
                var e, r = t.frag, i = t.part, n = t.payload, a = this.levels;
                if (a) {
                    var s = a[r.level]
                      , o = s.details;
                    if (o) {
                        var l = s.videoCodec
                          , u = o.PTSKnown || !o.live
                          , h = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data
                          , d = this._getAudioCodec(s)
                          , c = this.transmuxer = this.transmuxer || new Zt(this.hls,k.b.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this))
                          , f = i ? i.index : -1
                          , g = -1 !== f
                          , v = new ut(r.level,r.sn,r.stats.chunkCount,n.byteLength,f,g)
                          , p = this.initPTS[r.cc];
                        c.push(n, h, d, l, r, i, o.totalduration, u, v, p)
                    } else
                        this.warn("Dropping fragment " + r.sn + " of level " + r.level + " after level details were reset")
                } else
                    this.warn("Levels were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
            }
            ,
            c.onAudioTrackSwitching = function(t, e) {
                var r = this.altAudio
                  , i = !!e.url
                  , n = e.id;
                if (!i) {
                    if (this.mediaBuffer !== this.media) {
                        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),
                        this.mediaBuffer = this.media;
                        var s = this.fragCurrent;
                        null != s && s.loader && (this.log("Switching to main audio track, cancel main fragment load"),
                        s.loader.abort()),
                        this.resetTransmuxer(),
                        this.resetLoadingState()
                    } else
                        this.audioOnly && this.resetTransmuxer();
                    var o = this.hls;
                    r && o.trigger(a.Events.BUFFER_FLUSHING, {
                        startOffset: 0,
                        endOffset: Number.POSITIVE_INFINITY,
                        type: "audio"
                    }),
                    o.trigger(a.Events.AUDIO_TRACK_SWITCHED, {
                        id: n
                    })
                }
            }
            ,
            c.onAudioTrackSwitched = function(t, e) {
                var r = e.id
                  , i = !!this.hls.audioTracks[r].url;
                if (i) {
                    var n = this.videoBuffer;
                    n && this.mediaBuffer !== n && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),
                    this.mediaBuffer = n)
                }
                this.altAudio = i,
                this.tick()
            }
            ,
            c.onBufferCreated = function(t, e) {
                var r, i, n = e.tracks, a = !1;
                for (var s in n) {
                    var o = n[s];
                    if ("main" === o.id) {
                        if (i = s,
                        r = o,
                        "video" === s) {
                            var l = n[s];
                            l && (this.videoBuffer = l.buffer)
                        }
                    } else
                        a = !0
                }
                a && r ? (this.log("Alternate track found, use " + i + ".buffered to schedule main fragment loading"),
                this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
            }
            ,
            c.onFragBuffered = function(t, e) {
                var r = e.frag
                  , i = e.part;
                if (!r || r.type === k.b.MAIN) {
                    if (this.fragContextChanged(r))
                        return this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state),
                        void (this.state === Nt && (this.state = xt));
                    var n = i ? i.stats : r.stats;
                    this.fragLastKbps = Math.round(8 * n.total / (n.buffering.end - n.loading.first)),
                    "initSegment" !== r.sn && (this.fragPrevious = r),
                    this.fragBufferedComplete(r, i)
                }
            }
            ,
            c.onError = function(t, e) {
                switch (e.details) {
                case s.ErrorDetails.FRAG_LOAD_ERROR:
                case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                case s.ErrorDetails.KEY_LOAD_ERROR:
                case s.ErrorDetails.KEY_LOAD_TIMEOUT:
                    this.onFragmentOrKeyLoadError(k.b.MAIN, e);
                    break;
                case s.ErrorDetails.LEVEL_LOAD_ERROR:
                case s.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                    this.state !== jt && (e.fatal ? (this.warn("" + e.details),
                    this.state = jt) : e.levelRetry || this.state !== Ht || (this.state = xt));
                    break;
                case s.ErrorDetails.BUFFER_FULL_ERROR:
                    if ("main" === e.parent && (this.state === Ut || this.state === Nt)) {
                        var r = !0
                          , i = this.getFwdBufferInfo(this.media, k.b.MAIN);
                        i && i.len > .5 && (r = !this.reduceMaxBufferLength(i.len)),
                        r && (this.warn("buffer full error also media.currentTime is not buffered, flush main"),
                        this.immediateLevelSwitch()),
                        this.resetLoadingState()
                    }
                }
            }
            ,
            c.checkBuffer = function() {
                var t = this.media
                  , e = this.gapController;
                if (t && e && t.readyState) {
                    var r = lt.BufferHelper.getBuffered(t);
                    !this.loadedmetadata && r.length ? (this.loadedmetadata = !0,
                    this.seekToStartPos()) : e.poll(this.lastCurrentTime),
                    this.lastCurrentTime = t.currentTime
                }
            }
            ,
            c.onFragLoadEmergencyAborted = function() {
                this.state = xt,
                this.loadedmetadata || (this.startFragRequested = !1,
                this.nextLoadPosition = this.startPosition),
                this.tickImmediate()
            }
            ,
            c.onBufferFlushed = function(t, e) {
                var r = e.type;
                if (r !== u.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
                    var i = (r === u.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                    this.afterBufferFlushed(i, r, k.b.MAIN)
                }
            }
            ,
            c.onLevelsUpdated = function(t, e) {
                this.levels = e.levels
            }
            ,
            c.swapAudioCodec = function() {
                this.audioCodecSwap = !this.audioCodecSwap
            }
            ,
            c.seekToStartPos = function() {
                var t = this.media
                  , e = t.currentTime
                  , r = this.startPosition;
                if (r >= 0 && e < r) {
                    if (t.seeking)
                        return void o.logger.log("could not seek to " + r + ", already seeking at " + e);
                    var i = lt.BufferHelper.getBuffered(t)
                      , n = (i.length ? i.start(0) : 0) - r;
                    n > 0 && (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) && (o.logger.log("adjusting start position by " + n + " to match buffer start"),
                    r += n,
                    this.startPosition = r),
                    this.log("seek to target start position " + r + " from current time " + e),
                    t.currentTime = r
                }
            }
            ,
            c._getAudioCodec = function(t) {
                var e = this.config.defaultAudioCodec || t.audioCodec;
                return this.audioCodecSwap && e && (this.log("Swapping audio codec"),
                e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"),
                e
            }
            ,
            c._loadBitrateTestFrag = function(t) {
                var e = this;
                this._doFragLoad(t).then((function(r) {
                    var i = e.hls;
                    if (r && !i.nextLoadLevel && !e.fragContextChanged(t)) {
                        e.fragLoadError = 0,
                        e.state = xt,
                        e.startFragRequested = !1,
                        e.bitrateTest = !1;
                        var n = t.stats;
                        n.parsing.start = n.parsing.end = n.buffering.start = n.buffering.end = self.performance.now(),
                        i.trigger(a.Events.FRAG_LOADED, r)
                    }
                }
                ))
            }
            ,
            c._handleTransmuxComplete = function(t) {
                var e, r = "main", i = this.hls, s = t.remuxResult, o = t.chunkMeta, l = this.getCurrentContext(o);
                if (!l)
                    return this.warn("The loading context changed while buffering fragment " + o.sn + " of level " + o.level + ". This chunk will not be buffered."),
                    void this.resetLiveStartWhenNotLoaded(o.level);
                var h = l.frag
                  , d = l.part
                  , c = l.level
                  , f = s.video
                  , g = s.text
                  , v = s.id3
                  , p = s.initSegment
                  , m = this.altAudio ? void 0 : s.audio;
                if (!this.fragContextChanged(h)) {
                    if (this.state = Ut,
                    p) {
                        p.tracks && (this._bufferInitSegment(c, p.tracks, h, o),
                        i.trigger(a.Events.FRAG_PARSING_INIT_SEGMENT, {
                            frag: h,
                            id: r,
                            tracks: p.tracks
                        }));
                        var E = p.initPTS
                          , y = p.timescale;
                        Object(n.isFiniteNumber)(E) && (this.initPTS[h.cc] = E,
                        i.trigger(a.Events.INIT_PTS_FOUND, {
                            frag: h,
                            id: r,
                            initPTS: E,
                            timescale: y
                        }))
                    }
                    if (f && !1 !== s.independent) {
                        if (c.details) {
                            var T = f.startPTS
                              , A = f.endPTS
                              , b = f.startDTS
                              , S = f.endDTS;
                            if (d)
                                d.elementaryStreams[f.type] = {
                                    startPTS: T,
                                    endPTS: A,
                                    startDTS: b,
                                    endDTS: S
                                };
                            else if (f.firstKeyFrame && f.independent && (this.couldBacktrack = !0),
                            f.dropped && f.independent) {
                                if (this.getLoadPosition() + this.config.maxBufferHole < T)
                                    return void this.backtrack(h);
                                h.setElementaryStreamInfo(f.type, h.start, A, h.start, S, !0)
                            }
                            h.setElementaryStreamInfo(f.type, T, A, b, S),
                            this.bufferFragmentData(f, h, d, o)
                        }
                    } else if (!1 === s.independent)
                        return void this.backtrack(h);
                    if (m) {
                        var D = m.startPTS
                          , R = m.endPTS
                          , L = m.startDTS
                          , k = m.endDTS;
                        d && (d.elementaryStreams[u.ElementaryStreamTypes.AUDIO] = {
                            startPTS: D,
                            endPTS: R,
                            startDTS: L,
                            endDTS: k
                        }),
                        h.setElementaryStreamInfo(u.ElementaryStreamTypes.AUDIO, D, R, L, k),
                        this.bufferFragmentData(m, h, d, o)
                    }
                    if (null != v && null !== (e = v.samples) && void 0 !== e && e.length) {
                        var C = {
                            frag: h,
                            id: r,
                            samples: v.samples
                        };
                        i.trigger(a.Events.FRAG_PARSING_METADATA, C)
                    }
                    if (g) {
                        var _ = {
                            frag: h,
                            id: r,
                            samples: g.samples
                        };
                        i.trigger(a.Events.FRAG_PARSING_USERDATA, _)
                    }
                }
            }
            ,
            c._bufferInitSegment = function(t, e, r, i) {
                var n = this;
                if (this.state === Ut) {
                    this.audioOnly = !!e.audio && !e.video,
                    this.altAudio && !this.audioOnly && delete e.audio;
                    var s = e.audio
                      , o = e.video
                      , l = e.audiovideo;
                    if (s) {
                        var u = t.audioCodec
                          , h = navigator.userAgent.toLowerCase();
                        this.audioCodecSwitch && (u && (u = -1 !== u.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"),
                        1 !== s.metadata.channelCount && -1 === h.indexOf("firefox") && (u = "mp4a.40.5")),
                        -1 !== h.indexOf("android") && "audio/mpeg" !== s.container && (u = "mp4a.40.2",
                        this.log("Android: force audio codec to " + u)),
                        t.audioCodec && t.audioCodec !== u && this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + u + '"'),
                        s.levelCodec = u,
                        s.id = "main",
                        this.log("Init audio buffer, container:" + s.container + ", codecs[selected/level/parsed]=[" + (u || "") + "/" + (t.audioCodec || "") + "/" + s.codec + "]")
                    }
                    o && (o.levelCodec = t.videoCodec,
                    o.id = "main",
                    this.log("Init video buffer, container:" + o.container + ", codecs[level/parsed]=[" + (t.videoCodec || "") + "/" + o.codec + "]")),
                    l && this.log("Init audiovideo buffer, container:" + l.container + ", codecs[level/parsed]=[" + (t.attrs.CODECS || "") + "/" + l.codec + "]"),
                    this.hls.trigger(a.Events.BUFFER_CODECS, e),
                    Object.keys(e).forEach((function(t) {
                        var s = e[t].initSegment;
                        null != s && s.byteLength && n.hls.trigger(a.Events.BUFFER_APPENDING, {
                            type: t,
                            data: s,
                            frag: r,
                            part: null,
                            chunkMeta: i,
                            parent: r.type
                        })
                    }
                    )),
                    this.tick()
                }
            }
            ,
            c.backtrack = function(t) {
                this.couldBacktrack = !0,
                this.resetTransmuxer(),
                this.flushBufferGap(t);
                var e = this.fragmentTracker.backtrack(t);
                this.fragPrevious = null,
                this.nextLoadPosition = t.start,
                e ? this.resetFragmentLoading(t) : this.state = Vt
            }
            ,
            c.checkFragmentChanged = function() {
                var t = this.media
                  , e = null;
                if (t && t.readyState > 1 && !1 === t.seeking) {
                    var r = t.currentTime;
                    if (lt.BufferHelper.isBuffered(t, r) ? e = this.getAppendedFrag(r) : lt.BufferHelper.isBuffered(t, r + .1) && (e = this.getAppendedFrag(r + .1)),
                    e) {
                        var i = this.fragPlaying
                          , n = e.level;
                        i && e.sn === i.sn && i.level === n && e.urlId === i.urlId || (this.hls.trigger(a.Events.FRAG_CHANGED, {
                            frag: e
                        }),
                        i && i.level === n || this.hls.trigger(a.Events.LEVEL_SWITCHED, {
                            level: n
                        }),
                        this.fragPlaying = e)
                    }
                }
            }
            ,
            l = i,
            (h = [{
                key: "nextLevel",
                get: function() {
                    var t = this.nextBufferedFrag;
                    return t ? t.level : -1
                }
            }, {
                key: "currentLevel",
                get: function() {
                    var t = this.media;
                    if (t) {
                        var e = this.getAppendedFrag(t.currentTime);
                        if (e)
                            return e.level
                    }
                    return -1
                }
            }, {
                key: "nextBufferedFrag",
                get: function() {
                    var t = this.media;
                    if (t) {
                        var e = this.getAppendedFrag(t.currentTime);
                        return this.followingBufferedFrag(e)
                    }
                    return null
                }
            }, {
                key: "forceStartLoad",
                get: function() {
                    return this._forceStartLoad
                }
            }]) && te(l.prototype, h),
            d && te(l, d),
            Object.defineProperty(l, "prototype", {
                writable: !1
            }),
            i
        }(Jt)
          , ie = function() {
            function t(t, e, r) {
                void 0 === e && (e = 0),
                void 0 === r && (r = 0),
                this.halfLife = void 0,
                this.alpha_ = void 0,
                this.estimate_ = void 0,
                this.totalWeight_ = void 0,
                this.halfLife = t,
                this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0,
                this.estimate_ = e,
                this.totalWeight_ = r
            }
            var e = t.prototype;
            return e.sample = function(t, e) {
                var r = Math.pow(this.alpha_, t);
                this.estimate_ = e * (1 - r) + r * this.estimate_,
                this.totalWeight_ += t
            }
            ,
            e.getTotalWeight = function() {
                return this.totalWeight_
            }
            ,
            e.getEstimate = function() {
                if (this.alpha_) {
                    var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                    if (t)
                        return this.estimate_ / t
                }
                return this.estimate_
            }
            ,
            t
        }()
          , ne = function() {
            function t(t, e, r) {
                this.defaultEstimate_ = void 0,
                this.minWeight_ = void 0,
                this.minDelayMs_ = void 0,
                this.slow_ = void 0,
                this.fast_ = void 0,
                this.defaultEstimate_ = r,
                this.minWeight_ = .001,
                this.minDelayMs_ = 50,
                this.slow_ = new ie(t),
                this.fast_ = new ie(e)
            }
            var e = t.prototype;
            return e.update = function(t, e) {
                var r = this.slow_
                  , i = this.fast_;
                this.slow_.halfLife !== t && (this.slow_ = new ie(t,r.getEstimate(),r.getTotalWeight())),
                this.fast_.halfLife !== e && (this.fast_ = new ie(e,i.getEstimate(),i.getTotalWeight()))
            }
            ,
            e.sample = function(t, e) {
                var r = (t = Math.max(t, this.minDelayMs_)) / 1e3
                  , i = 8 * e / r;
                this.fast_.sample(r, i),
                this.slow_.sample(r, i)
            }
            ,
            e.canEstimate = function() {
                var t = this.fast_;
                return t && t.getTotalWeight() >= this.minWeight_
            }
            ,
            e.getEstimate = function() {
                return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
            }
            ,
            e.destroy = function() {}
            ,
            t
        }();
        function ae(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var se = function() {
            function t(t) {
                this.hls = void 0,
                this.lastLoadedFragLevel = 0,
                this._nextAutoLevel = -1,
                this.timer = void 0,
                this.onCheck = this._abandonRulesCheck.bind(this),
                this.fragCurrent = null,
                this.partCurrent = null,
                this.bitrateTestDelay = 0,
                this.bwEstimator = void 0,
                this.hls = t;
                var e = t.config;
                this.bwEstimator = new ne(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate),
                this.registerListeners()
            }
            var e, r, i, l = t.prototype;
            return l.registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.FRAG_LOADING, this.onFragLoading, this),
                t.on(a.Events.FRAG_LOADED, this.onFragLoaded, this),
                t.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                t.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.on(a.Events.ERROR, this.onError, this)
            }
            ,
            l.unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.FRAG_LOADING, this.onFragLoading, this),
                t.off(a.Events.FRAG_LOADED, this.onFragLoaded, this),
                t.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                t.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.off(a.Events.ERROR, this.onError, this)
            }
            ,
            l.destroy = function() {
                this.unregisterListeners(),
                this.clearTimer(),
                this.hls = this.onCheck = null,
                this.fragCurrent = this.partCurrent = null
            }
            ,
            l.onFragLoading = function(t, e) {
                var r, i = e.frag;
                i.type === k.b.MAIN && (this.timer || (this.fragCurrent = i,
                this.partCurrent = null != (r = e.part) ? r : null,
                this.timer = self.setInterval(this.onCheck, 100)))
            }
            ,
            l.onLevelLoaded = function(t, e) {
                var r = this.hls.config;
                e.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
            }
            ,
            l._abandonRulesCheck = function() {
                var t = this.fragCurrent
                  , e = this.partCurrent
                  , r = this.hls
                  , i = r.autoLevelEnabled
                  , s = r.config
                  , l = r.media;
                if (t && l) {
                    var u = e ? e.stats : t.stats
                      , h = e ? e.duration : t.duration;
                    if (u.aborted)
                        return o.logger.warn("frag loader destroy or aborted, disarm abandonRules"),
                        this.clearTimer(),
                        void (this._nextAutoLevel = -1);
                    if (i && !l.paused && l.playbackRate && l.readyState) {
                        var d = performance.now() - u.loading.start
                          , c = Math.abs(l.playbackRate);
                        if (!(d <= 500 * h / c)) {
                            var f = r.levels
                              , g = r.minAutoLevel
                              , v = f[t.level]
                              , p = u.total || Math.max(u.loaded, Math.round(h * v.maxBitrate / 8))
                              , m = Math.max(1, u.bwEstimate ? u.bwEstimate / 8 : 1e3 * u.loaded / d)
                              , E = (p - u.loaded) / m
                              , y = l.currentTime
                              , T = (lt.BufferHelper.bufferInfo(l, y, s.maxBufferHole).end - y) / c;
                            if (!(T >= 2 * h / c || E <= T)) {
                                var A, b = Number.POSITIVE_INFINITY;
                                for (A = t.level - 1; A > g; A--) {
                                    if ((b = h * f[A].maxBitrate / (6.4 * m)) < T)
                                        break
                                }
                                if (!(b >= E)) {
                                    var S = this.bwEstimator.getEstimate();
                                    o.logger.warn("Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + A + "\n      Current BW estimate: " + (Object(n.isFiniteNumber)(S) ? (S / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + E.toFixed(3) + " s\n      Estimated load time for the next fragment: " + b.toFixed(3) + " s\n      Time to underbuffer: " + T.toFixed(3) + " s"),
                                    r.nextLoadLevel = A,
                                    this.bwEstimator.sample(d, u.loaded),
                                    this.clearTimer(),
                                    t.loader && (this.fragCurrent = this.partCurrent = null,
                                    t.loader.abort()),
                                    r.trigger(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, {
                                        frag: t,
                                        part: e,
                                        stats: u
                                    })
                                }
                            }
                        }
                    }
                }
            }
            ,
            l.onFragLoaded = function(t, e) {
                var r = e.frag
                  , i = e.part;
                if (r.type === k.b.MAIN && Object(n.isFiniteNumber)(r.sn)) {
                    var s = i ? i.stats : r.stats
                      , o = i ? i.duration : r.duration;
                    if (this.clearTimer(),
                    this.lastLoadedFragLevel = r.level,
                    this._nextAutoLevel = -1,
                    this.hls.config.abrMaxWithRealBitrate) {
                        var l = this.hls.levels[r.level]
                          , u = (l.loaded ? l.loaded.bytes : 0) + s.loaded
                          , h = (l.loaded ? l.loaded.duration : 0) + o;
                        l.loaded = {
                            bytes: u,
                            duration: h
                        },
                        l.realBitrate = Math.round(8 * u / h)
                    }
                    if (r.bitrateTest) {
                        var d = {
                            stats: s,
                            frag: r,
                            part: i,
                            id: r.type
                        };
                        this.onFragBuffered(a.Events.FRAG_BUFFERED, d),
                        r.bitrateTest = !1
                    }
                }
            }
            ,
            l.onFragBuffered = function(t, e) {
                var r = e.frag
                  , i = e.part
                  , n = i ? i.stats : r.stats;
                if (!n.aborted && r.type === k.b.MAIN && "initSegment" !== r.sn) {
                    var a = n.parsing.end - n.loading.start;
                    this.bwEstimator.sample(a, n.loaded),
                    n.bwEstimate = this.bwEstimator.getEstimate(),
                    r.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
                }
            }
            ,
            l.onError = function(t, e) {
                switch (e.details) {
                case s.ErrorDetails.FRAG_LOAD_ERROR:
                case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    this.clearTimer()
                }
            }
            ,
            l.clearTimer = function() {
                self.clearInterval(this.timer),
                this.timer = void 0
            }
            ,
            l.getNextABRAutoLevel = function() {
                var t = this.fragCurrent
                  , e = this.partCurrent
                  , r = this.hls
                  , i = r.maxAutoLevel
                  , n = r.config
                  , a = r.minAutoLevel
                  , s = r.media
                  , l = e ? e.duration : t ? t.duration : 0
                  , u = s ? s.currentTime : 0
                  , h = s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1
                  , d = this.bwEstimator ? this.bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate
                  , c = (lt.BufferHelper.bufferInfo(s, u, n.maxBufferHole).end - u) / h
                  , f = this.findBestLevel(d, a, i, c, n.abrBandWidthFactor, n.abrBandWidthUpFactor);
                if (f >= 0)
                    return f;
                o.logger.trace((c ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
                var g = l ? Math.min(l, n.maxStarvationDelay) : n.maxStarvationDelay
                  , v = n.abrBandWidthFactor
                  , p = n.abrBandWidthUpFactor;
                if (!c) {
                    var m = this.bitrateTestDelay;
                    if (m)
                        g = (l ? Math.min(l, n.maxLoadingDelay) : n.maxLoadingDelay) - m,
                        o.logger.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"),
                        v = p = 1
                }
                return f = this.findBestLevel(d, a, i, c + g, v, p),
                Math.max(f, 0)
            }
            ,
            l.findBestLevel = function(t, e, r, i, n, a) {
                for (var s, l = this.fragCurrent, u = this.partCurrent, h = this.lastLoadedFragLevel, d = this.hls.levels, c = d[h], f = !(null == c || null === (s = c.details) || void 0 === s || !s.live), g = null == c ? void 0 : c.codecSet, v = u ? u.duration : l ? l.duration : 0, p = r; p >= e; p--) {
                    var m = d[p];
                    if (m && (!g || m.codecSet === g)) {
                        var E = m.details
                          , y = (u ? null == E ? void 0 : E.partTarget : null == E ? void 0 : E.averagetargetduration) || v
                          , T = void 0;
                        T = p <= h ? n * t : a * t;
                        var A = d[p].maxBitrate
                          , b = A * y / T;
                        if (o.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + p + "/" + Math.round(T) + "/" + A + "/" + y + "/" + i + "/" + b),
                        T > A && (!b || f && !this.bitrateTestDelay || b < i))
                            return p
                    }
                }
                return -1
            }
            ,
            e = t,
            (r = [{
                key: "nextAutoLevel",
                get: function() {
                    var t = this._nextAutoLevel
                      , e = this.bwEstimator;
                    if (!(-1 === t || e && e.canEstimate()))
                        return t;
                    var r = this.getNextABRAutoLevel();
                    return -1 !== t && (r = Math.min(t, r)),
                    r
                },
                set: function(t) {
                    this._nextAutoLevel = t
                }
            }]) && ae(e.prototype, r),
            i && ae(e, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }()
          , oe = r(15);
        function le() {
            return (le = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function ue(t, e) {
            return (ue = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var he = function(t) {
            var e, r;
            function i(e, r) {
                var i;
                return (i = t.call(this, e, r, "[audio-stream-controller]") || this).videoBuffer = null,
                i.videoTrackCC = -1,
                i.waitingVideoCC = -1,
                i.audioSwitch = !1,
                i.trackId = -1,
                i.waitingData = null,
                i.mainDetails = null,
                i.bufferFlushed = !1,
                i._registerListeners(),
                i
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            ue(e, r);
            var l = i.prototype;
            return l.onHandlerDestroying = function() {
                this._unregisterListeners(),
                this.mainDetails = null
            }
            ,
            l._registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.on(a.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                t.on(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                t.on(a.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                t.on(a.Events.ERROR, this.onError, this),
                t.on(a.Events.BUFFER_RESET, this.onBufferReset, this),
                t.on(a.Events.BUFFER_CREATED, this.onBufferCreated, this),
                t.on(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                t.on(a.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
            }
            ,
            l._unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.off(a.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                t.off(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                t.off(a.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                t.off(a.Events.ERROR, this.onError, this),
                t.off(a.Events.BUFFER_RESET, this.onBufferReset, this),
                t.off(a.Events.BUFFER_CREATED, this.onBufferCreated, this),
                t.off(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                t.off(a.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
            }
            ,
            l.onInitPtsFound = function(t, e) {
                var r = e.frag
                  , i = e.id
                  , n = e.initPTS;
                if ("main" === i) {
                    var a = r.cc;
                    this.initPTS[r.cc] = n,
                    this.log("InitPTS for cc: " + a + " found from main: " + n),
                    this.videoTrackCC = a,
                    this.state === Kt && this.tick()
                }
            }
            ,
            l.startLoad = function(t) {
                if (!this.levels)
                    return this.startPosition = t,
                    void (this.state = Ot);
                var e = this.lastCurrentTime;
                this.stopLoad(),
                this.setInterval(100),
                this.fragLoadError = 0,
                e > 0 && -1 === t ? (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)),
                this.state = xt) : (this.loadedmetadata = !1,
                this.state = Bt),
                this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t,
                this.tick()
            }
            ,
            l.doTick = function() {
                switch (this.state) {
                case xt:
                    this.doTickIdle();
                    break;
                case Bt:
                    var e, r = this.levels, i = this.trackId, n = null == r || null === (e = r[i]) || void 0 === e ? void 0 : e.details;
                    if (n) {
                        if (this.waitForCdnTuneIn(n))
                            break;
                        this.state = Kt
                    }
                    break;
                case Ft:
                    var a, s = performance.now(), l = this.retryDate;
                    (!l || s >= l || null !== (a = this.media) && void 0 !== a && a.seeking) && (this.log("RetryDate reached, switch back to IDLE state"),
                    this.state = xt);
                    break;
                case Kt:
                    var u = this.waitingData;
                    if (u) {
                        var h = u.frag
                          , d = u.part
                          , c = u.cache
                          , f = u.complete;
                        if (void 0 !== this.initPTS[h.cc]) {
                            this.waitingData = null,
                            this.waitingVideoCC = -1,
                            this.state = Mt;
                            var g = {
                                frag: h,
                                part: d,
                                payload: c.flush(),
                                networkDetails: null
                            };
                            this._handleFragmentLoadProgress(g),
                            f && t.prototype._handleFragmentLoadComplete.call(this, g)
                        } else if (this.videoTrackCC !== this.waitingVideoCC)
                            o.logger.log("Waiting fragment cc (" + h.cc + ") cancelled because video is at cc " + this.videoTrackCC),
                            this.clearWaitingFragment();
                        else {
                            var v = this.getLoadPosition()
                              , p = lt.BufferHelper.bufferInfo(this.mediaBuffer, v, this.config.maxBufferHole);
                            mt(p.end, this.config.maxFragLookUpTolerance, h) < 0 && (o.logger.log("Waiting fragment cc (" + h.cc + ") @ " + h.start + " cancelled because another fragment at " + p.end + " is needed"),
                            this.clearWaitingFragment())
                        }
                    } else
                        this.state = xt
                }
                this.onTickEnd()
            }
            ,
            l.clearWaitingFragment = function() {
                var t = this.waitingData;
                t && (this.fragmentTracker.removeFragment(t.frag),
                this.waitingData = null,
                this.waitingVideoCC = -1,
                this.state = xt)
            }
            ,
            l.onTickEnd = function() {
                var t = this.media;
                if (t && t.readyState) {
                    var e = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
                    !this.loadedmetadata && e.length && (this.loadedmetadata = !0),
                    this.lastCurrentTime = t.currentTime
                }
            }
            ,
            l.doTickIdle = function() {
                var t, e, r = this.hls, i = this.levels, n = this.media, s = this.trackId, o = r.config;
                if (i && i[s] && (n || !this.startFragRequested && o.startFragPrefetch)) {
                    var l = i[s].details;
                    if (!l || l.live && this.levelLastLoaded !== s || this.waitForCdnTuneIn(l))
                        this.state = Bt;
                    else {
                        this.bufferFlushed && (this.bufferFlushed = !1,
                        this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, u.ElementaryStreamTypes.AUDIO, k.b.AUDIO));
                        var h = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, k.b.AUDIO);
                        if (null !== h) {
                            var d = h.len
                              , c = this.getMaxBufferLength()
                              , f = this.audioSwitch;
                            if (!(d >= c) || f) {
                                if (!f && this._streamEnded(h, l))
                                    return r.trigger(a.Events.BUFFER_EOS, {
                                        type: "audio"
                                    }),
                                    void (this.state = Gt);
                                var g = l.fragments[0].start
                                  , v = h.end;
                                if (f) {
                                    var p = this.getLoadPosition();
                                    v = p,
                                    l.PTSKnown && p < g && (h.end > g || h.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"),
                                    n.currentTime = g + .05)
                                }
                                var m = this.getNextFragment(v, l);
                                m ? "identity" !== (null === (t = m.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = m.decryptdata) && void 0 !== e && e.key ? this.loadFragment(m, l, v) : this.loadKey(m, l) : this.bufferFlushed = !0
                            }
                        }
                    }
                }
            }
            ,
            l.getMaxBufferLength = function() {
                var e = t.prototype.getMaxBufferLength.call(this)
                  , r = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, k.b.MAIN);
                return null === r ? e : Math.max(e, r.len)
            }
            ,
            l.onMediaDetaching = function() {
                this.videoBuffer = null,
                t.prototype.onMediaDetaching.call(this)
            }
            ,
            l.onAudioTracksUpdated = function(t, e) {
                var r = e.audioTracks;
                this.resetTransmuxer(),
                this.levels = r.map((function(t) {
                    return new K(t)
                }
                ))
            }
            ,
            l.onAudioTrackSwitching = function(t, e) {
                var r = !!e.url;
                this.trackId = e.id;
                var i = this.fragCurrent;
                null != i && i.loader && i.loader.abort(),
                this.fragCurrent = null,
                this.clearWaitingFragment(),
                r ? this.setInterval(100) : this.resetTransmuxer(),
                r ? (this.audioSwitch = !0,
                this.state = xt) : this.state = Ot,
                this.tick()
            }
            ,
            l.onManifestLoading = function() {
                this.mainDetails = null,
                this.fragmentTracker.removeAllFragments(),
                this.startPosition = this.lastCurrentTime = 0,
                this.bufferFlushed = !1
            }
            ,
            l.onLevelLoaded = function(t, e) {
                this.mainDetails = e.details
            }
            ,
            l.onAudioTrackLoaded = function(t, e) {
                var r, i = this.levels, n = e.details, a = e.id;
                if (i) {
                    this.log("Track " + a + " loaded [" + n.startSN + "," + n.endSN + "],duration:" + n.totalduration);
                    var s = i[a]
                      , o = 0;
                    if (n.live || null !== (r = s.details) && void 0 !== r && r.live) {
                        var l = this.mainDetails;
                        if (n.fragments[0] || (n.deltaUpdateFailed = !0),
                        n.deltaUpdateFailed || !l)
                            return;
                        !s.details && n.hasProgramDateTime && l.hasProgramDateTime ? (gt(n, l),
                        o = n.fragments[0].start) : o = this.alignPlaylists(n, s.details)
                    }
                    s.details = n,
                    this.levelLastLoaded = a,
                    this.startFragRequested || !this.mainDetails && n.live || this.setStartPosition(s.details, o),
                    this.state !== Bt || this.waitForCdnTuneIn(n) || (this.state = xt),
                    this.tick()
                } else
                    this.warn("Audio tracks were reset while loading level " + a)
            }
            ,
            l._handleFragmentLoadProgress = function(t) {
                var e, r = t.frag, i = t.part, n = t.payload, a = this.config, s = this.trackId, l = this.levels;
                if (l) {
                    var u = l[s]
                      , h = u.details
                      , d = a.defaultAudioCodec || u.audioCodec || "mp4a.40.2"
                      , c = this.transmuxer;
                    c || (c = this.transmuxer = new Zt(this.hls,k.b.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));
                    var f = this.initPTS[r.cc]
                      , g = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data;
                    if (void 0 !== f) {
                        var v = i ? i.index : -1
                          , p = -1 !== v
                          , m = new ut(r.level,r.sn,r.stats.chunkCount,n.byteLength,v,p);
                        c.push(n, g, d, "", r, i, h.totalduration, !1, m, f)
                    } else {
                        o.logger.log("Unknown video PTS for cc " + r.cc + ", waiting for video PTS before demuxing audio frag " + r.sn + " of [" + h.startSN + " ," + h.endSN + "],track " + s),
                        (this.waitingData = this.waitingData || {
                            frag: r,
                            part: i,
                            cache: new oe.a,
                            complete: !1
                        }).cache.push(new Uint8Array(n)),
                        this.waitingVideoCC = this.videoTrackCC,
                        this.state = Kt
                    }
                } else
                    this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
            }
            ,
            l._handleFragmentLoadComplete = function(e) {
                this.waitingData ? this.waitingData.complete = !0 : t.prototype._handleFragmentLoadComplete.call(this, e)
            }
            ,
            l.onBufferReset = function() {
                this.mediaBuffer = this.videoBuffer = null,
                this.loadedmetadata = !1
            }
            ,
            l.onBufferCreated = function(t, e) {
                var r = e.tracks.audio;
                r && (this.mediaBuffer = r.buffer),
                e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
            }
            ,
            l.onFragBuffered = function(t, e) {
                var r = e.frag
                  , i = e.part;
                r.type === k.b.AUDIO && (this.fragContextChanged(r) ? this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : ("initSegment" !== r.sn && (this.fragPrevious = r,
                this.audioSwitch && (this.audioSwitch = !1,
                this.hls.trigger(a.Events.AUDIO_TRACK_SWITCHED, {
                    id: this.trackId
                }))),
                this.fragBufferedComplete(r, i)))
            }
            ,
            l.onError = function(e, r) {
                switch (r.details) {
                case s.ErrorDetails.FRAG_LOAD_ERROR:
                case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                case s.ErrorDetails.KEY_LOAD_ERROR:
                case s.ErrorDetails.KEY_LOAD_TIMEOUT:
                    this.onFragmentOrKeyLoadError(k.b.AUDIO, r);
                    break;
                case s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                case s.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                    this.state !== jt && this.state !== Ot && (this.state = r.fatal ? jt : xt,
                    this.warn(r.details + " while loading frag, switching to " + this.state + " state"));
                    break;
                case s.ErrorDetails.BUFFER_FULL_ERROR:
                    if ("audio" === r.parent && (this.state === Ut || this.state === Nt)) {
                        var i = !0
                          , n = this.getFwdBufferInfo(this.mediaBuffer, k.b.AUDIO);
                        n && n.len > .5 && (i = !this.reduceMaxBufferLength(n.len)),
                        i && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"),
                        this.fragCurrent = null,
                        t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")),
                        this.resetLoadingState()
                    }
                }
            }
            ,
            l.onBufferFlushed = function(t, e) {
                e.type === u.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0)
            }
            ,
            l._handleTransmuxComplete = function(t) {
                var e, r = "audio", i = this.hls, n = t.remuxResult, s = t.chunkMeta, o = this.getCurrentContext(s);
                if (!o)
                    return this.warn("The loading context changed while buffering fragment " + s.sn + " of level " + s.level + ". This chunk will not be buffered."),
                    void this.resetLiveStartWhenNotLoaded(s.level);
                var l = o.frag
                  , h = o.part
                  , d = n.audio
                  , c = n.text
                  , f = n.id3
                  , g = n.initSegment;
                if (!this.fragContextChanged(l)) {
                    if (this.state = Ut,
                    this.audioSwitch && d && this.completeAudioSwitch(),
                    null != g && g.tracks && (this._bufferInitSegment(g.tracks, l, s),
                    i.trigger(a.Events.FRAG_PARSING_INIT_SEGMENT, {
                        frag: l,
                        id: r,
                        tracks: g.tracks
                    })),
                    d) {
                        var v = d.startPTS
                          , p = d.endPTS
                          , m = d.startDTS
                          , E = d.endDTS;
                        h && (h.elementaryStreams[u.ElementaryStreamTypes.AUDIO] = {
                            startPTS: v,
                            endPTS: p,
                            startDTS: m,
                            endDTS: E
                        }),
                        l.setElementaryStreamInfo(u.ElementaryStreamTypes.AUDIO, v, p, m, E),
                        this.bufferFragmentData(d, l, h, s)
                    }
                    if (null != f && null !== (e = f.samples) && void 0 !== e && e.length) {
                        var y = le({
                            frag: l,
                            id: r
                        }, f);
                        i.trigger(a.Events.FRAG_PARSING_METADATA, y)
                    }
                    if (c) {
                        var T = le({
                            frag: l,
                            id: r
                        }, c);
                        i.trigger(a.Events.FRAG_PARSING_USERDATA, T)
                    }
                }
            }
            ,
            l._bufferInitSegment = function(t, e, r) {
                if (this.state === Ut) {
                    t.video && delete t.video;
                    var i = t.audio;
                    if (i) {
                        i.levelCodec = i.codec,
                        i.id = "audio",
                        this.log("Init audio buffer, container:" + i.container + ", codecs[parsed]=[" + i.codec + "]"),
                        this.hls.trigger(a.Events.BUFFER_CODECS, t);
                        var n = i.initSegment;
                        if (null != n && n.byteLength) {
                            var s = {
                                type: "audio",
                                frag: e,
                                part: null,
                                chunkMeta: r,
                                parent: e.type,
                                data: n
                            };
                            this.hls.trigger(a.Events.BUFFER_APPENDING, s)
                        }
                        this.tick()
                    }
                }
            }
            ,
            l.loadFragment = function(e, r, i) {
                var a = this.fragmentTracker.getState(e);
                this.fragCurrent = e,
                (this.audioSwitch || a === et.NOT_LOADED || a === et.PARTIAL) && ("initSegment" === e.sn ? this._loadInitSegment(e) : r.live && !Object(n.isFiniteNumber)(this.initPTS[e.cc]) ? (this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId),
                this.state = Kt) : (this.startFragRequested = !0,
                t.prototype.loadFragment.call(this, e, r, i)))
            }
            ,
            l.completeAudioSwitch = function() {
                var e = this.hls
                  , r = this.media
                  , i = this.trackId;
                r && (this.log("Switching audio track : flushing all audio"),
                t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")),
                this.audioSwitch = !1,
                e.trigger(a.Events.AUDIO_TRACK_SWITCHED, {
                    id: i
                })
            }
            ,
            i
        }(Jt);
        function de(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function ce(t, e) {
            return (ce = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var fe = function(t) {
            var e, r;
            function i(e) {
                var r;
                return (r = t.call(this, e, "[audio-track-controller]") || this).tracks = [],
                r.groupId = null,
                r.tracksInGroup = [],
                r.trackId = -1,
                r.trackName = "",
                r.selectDefaultTrack = !0,
                r.registerListeners(),
                r
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            ce(e, r);
            var n, o, l, u = i.prototype;
            return u.registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.on(a.Events.LEVEL_LOADING, this.onLevelLoading, this),
                t.on(a.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                t.on(a.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                t.on(a.Events.ERROR, this.onError, this)
            }
            ,
            u.unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.off(a.Events.LEVEL_LOADING, this.onLevelLoading, this),
                t.off(a.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                t.off(a.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                t.off(a.Events.ERROR, this.onError, this)
            }
            ,
            u.destroy = function() {
                this.unregisterListeners(),
                this.tracks.length = 0,
                this.tracksInGroup.length = 0,
                t.prototype.destroy.call(this)
            }
            ,
            u.onManifestLoading = function() {
                this.tracks = [],
                this.groupId = null,
                this.tracksInGroup = [],
                this.trackId = -1,
                this.trackName = "",
                this.selectDefaultTrack = !0
            }
            ,
            u.onManifestParsed = function(t, e) {
                this.tracks = e.audioTracks || []
            }
            ,
            u.onAudioTrackLoaded = function(t, e) {
                var r = e.id
                  , i = e.details
                  , n = this.tracksInGroup[r];
                if (n) {
                    var a = n.details;
                    n.details = e.details,
                    this.log("audioTrack " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"),
                    r === this.trackId && (this.retryCount = 0,
                    this.playlistLoaded(r, e, a))
                } else
                    this.warn("Invalid audio track id " + r)
            }
            ,
            u.onLevelLoading = function(t, e) {
                this.switchLevel(e.level)
            }
            ,
            u.onLevelSwitching = function(t, e) {
                this.switchLevel(e.level)
            }
            ,
            u.switchLevel = function(t) {
                var e = this.hls.levels[t];
                if (null != e && e.audioGroupIds) {
                    var r = e.audioGroupIds[e.urlId];
                    if (this.groupId !== r) {
                        this.groupId = r;
                        var i = this.tracks.filter((function(t) {
                            return !r || t.groupId === r
                        }
                        ));
                        this.selectDefaultTrack && !i.some((function(t) {
                            return t.default
                        }
                        )) && (this.selectDefaultTrack = !1),
                        this.tracksInGroup = i;
                        var n = {
                            audioTracks: i
                        };
                        this.log("Updating audio tracks, " + i.length + ' track(s) found in "' + r + '" group-id'),
                        this.hls.trigger(a.Events.AUDIO_TRACKS_UPDATED, n),
                        this.selectInitialTrack()
                    }
                }
            }
            ,
            u.onError = function(e, r) {
                t.prototype.onError.call(this, e, r),
                !r.fatal && r.context && r.context.type === k.a.AUDIO_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
            }
            ,
            u.setAudioTrack = function(t) {
                var e = this.tracksInGroup;
                if (t < 0 || t >= e.length)
                    this.warn("Invalid id passed to audio-track controller");
                else {
                    this.clearTimer();
                    var r = e[this.trackId];
                    this.log("Now switching to audio-track index " + t);
                    var i = e[t]
                      , n = i.id
                      , s = i.groupId
                      , o = void 0 === s ? "" : s
                      , l = i.name
                      , u = i.type
                      , h = i.url;
                    if (this.trackId = t,
                    this.trackName = l,
                    this.selectDefaultTrack = !1,
                    this.hls.trigger(a.Events.AUDIO_TRACK_SWITCHING, {
                        id: n,
                        groupId: o,
                        name: l,
                        type: u,
                        url: h
                    }),
                    !i.details || i.details.live) {
                        var d = this.switchParams(i.url, null == r ? void 0 : r.details);
                        this.loadPlaylist(d)
                    }
                }
            }
            ,
            u.selectInitialTrack = function() {
                this.tracksInGroup;
                var t = this.trackName
                  , e = this.findTrackId(t) || this.findTrackId();
                -1 !== e ? this.setAudioTrack(e) : (this.warn("No track found for running audio group-ID: " + this.groupId),
                this.hls.trigger(a.Events.ERROR, {
                    type: s.ErrorTypes.MEDIA_ERROR,
                    details: s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                    fatal: !0
                }))
            }
            ,
            u.findTrackId = function(t) {
                for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name))
                        return i.id
                }
                return -1
            }
            ,
            u.loadPlaylist = function(t) {
                var e = this.tracksInGroup[this.trackId];
                if (this.shouldLoadTrack(e)) {
                    var r = e.id
                      , i = e.groupId
                      , n = e.url;
                    if (t)
                        try {
                            n = t.addDirectives(n)
                        } catch (t) {
                            this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                        }
                    this.log("loading audio-track playlist for id: " + r),
                    this.clearTimer(),
                    this.hls.trigger(a.Events.AUDIO_TRACK_LOADING, {
                        url: n,
                        id: r,
                        groupId: i,
                        deliveryDirectives: t || null
                    })
                }
            }
            ,
            n = i,
            (o = [{
                key: "audioTracks",
                get: function() {
                    return this.tracksInGroup
                }
            }, {
                key: "audioTrack",
                get: function() {
                    return this.trackId
                },
                set: function(t) {
                    this.selectDefaultTrack = !1,
                    this.setAudioTrack(t)
                }
            }]) && de(n.prototype, o),
            l && de(n, l),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            i
        }(z);
        function ge(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function ve(t, e) {
            return (ve = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var pe = function(t) {
            var e, r;
            function i(e, r) {
                var i;
                return (i = t.call(this, e, r, "[subtitle-stream-controller]") || this).levels = [],
                i.currentTrackId = -1,
                i.tracksBuffered = [],
                i.mainDetails = null,
                i._registerListeners(),
                i
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            ve(e, r);
            var n, s, o, l = i.prototype;
            return l.onHandlerDestroying = function() {
                this._unregisterListeners(),
                this.mainDetails = null
            }
            ,
            l._registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.on(a.Events.ERROR, this.onError, this),
                t.on(a.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                t.on(a.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                t.on(a.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                t.on(a.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                t.on(a.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }
            ,
            l._unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.off(a.Events.ERROR, this.onError, this),
                t.off(a.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                t.off(a.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                t.off(a.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                t.off(a.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                t.off(a.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }
            ,
            l.startLoad = function() {
                this.stopLoad(),
                this.state = xt,
                this.setInterval(500),
                this.tick()
            }
            ,
            l.onManifestLoading = function() {
                this.mainDetails = null,
                this.fragmentTracker.removeAllFragments()
            }
            ,
            l.onLevelLoaded = function(t, e) {
                this.mainDetails = e.details
            }
            ,
            l.onSubtitleFragProcessed = function(t, e) {
                var r = e.frag
                  , i = e.success;
                if (this.fragPrevious = r,
                this.state = xt,
                i) {
                    var n = this.tracksBuffered[this.currentTrackId];
                    if (n) {
                        for (var a, s = r.start, o = 0; o < n.length; o++)
                            if (s >= n[o].start && s <= n[o].end) {
                                a = n[o];
                                break
                            }
                        var l = r.start + r.duration;
                        a ? a.end = l : (a = {
                            start: s,
                            end: l
                        },
                        n.push(a)),
                        this.fragmentTracker.fragBuffered(r)
                    }
                }
            }
            ,
            l.onBufferFlushing = function(t, e) {
                var r = e.startOffset
                  , i = e.endOffset;
                if (0 === r && i !== Number.POSITIVE_INFINITY) {
                    var n = this.currentTrackId
                      , a = this.levels;
                    if (!a.length || !a[n] || !a[n].details)
                        return;
                    var s = i - a[n].details.targetduration;
                    if (s <= 0)
                        return;
                    e.endOffsetSubtitles = Math.max(0, s),
                    this.tracksBuffered.forEach((function(t) {
                        for (var e = 0; e < t.length; )
                            if (t[e].end <= s)
                                t.shift();
                            else {
                                if (!(t[e].start < s))
                                    break;
                                t[e].start = s,
                                e++
                            }
                    }
                    )),
                    this.fragmentTracker.removeFragmentsInRange(r, s, k.b.SUBTITLE)
                }
            }
            ,
            l.onError = function(t, e) {
                var r, i = e.frag;
                i && i.type === k.b.SUBTITLE && (null !== (r = this.fragCurrent) && void 0 !== r && r.loader && this.fragCurrent.loader.abort(),
                this.state = xt)
            }
            ,
            l.onSubtitleTracksUpdated = function(t, e) {
                var r = this
                  , i = e.subtitleTracks;
                this.tracksBuffered = [],
                this.levels = i.map((function(t) {
                    return new K(t)
                }
                )),
                this.fragmentTracker.removeAllFragments(),
                this.fragPrevious = null,
                this.levels.forEach((function(t) {
                    r.tracksBuffered[t.id] = []
                }
                )),
                this.mediaBuffer = null
            }
            ,
            l.onSubtitleTrackSwitch = function(t, e) {
                if (this.currentTrackId = e.id,
                this.levels.length && -1 !== this.currentTrackId) {
                    var r = this.levels[this.currentTrackId];
                    null != r && r.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null,
                    r && this.setInterval(500)
                } else
                    this.clearInterval()
            }
            ,
            l.onSubtitleTrackLoaded = function(t, e) {
                var r, i = e.details, n = e.id, a = this.currentTrackId, s = this.levels;
                if (s.length) {
                    var o = s[a];
                    if (!(n >= s.length || n !== a) && o) {
                        if (this.mediaBuffer = this.mediaBufferTimeRanges,
                        i.live || null !== (r = o.details) && void 0 !== r && r.live) {
                            var l = this.mainDetails;
                            if (i.deltaUpdateFailed || !l)
                                return;
                            var u = l.fragments[0];
                            if (o.details)
                                0 === this.alignPlaylists(i, o.details) && u && q(i, u.start);
                            else
                                i.hasProgramDateTime && l.hasProgramDateTime ? gt(i, l) : u && q(i, u.start)
                        }
                        if (o.details = i,
                        this.levelLastLoaded = n,
                        this.tick(),
                        i.live && !this.fragCurrent && this.media && this.state === xt)
                            pt(null, i.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"),
                            o.details = void 0)
                    }
                }
            }
            ,
            l._handleFragmentLoadComplete = function(t) {
                var e = t.frag
                  , r = t.payload
                  , i = e.decryptdata
                  , n = this.hls;
                if (!this.fragContextChanged(e) && r && r.byteLength > 0 && i && i.key && i.iv && "AES-128" === i.method) {
                    var s = performance.now();
                    this.decrypter.webCryptoDecrypt(new Uint8Array(r), i.key.buffer, i.iv.buffer).then((function(t) {
                        var r = performance.now();
                        n.trigger(a.Events.FRAG_DECRYPTED, {
                            frag: e,
                            payload: t,
                            stats: {
                                tstart: s,
                                tdecrypt: r
                            }
                        })
                    }
                    ))
                }
            }
            ,
            l.doTick = function() {
                if (this.media) {
                    if (this.state === xt) {
                        var t, e = this.currentTrackId, r = this.levels;
                        if (!r.length || !r[e] || !r[e].details)
                            return;
                        var i = r[e].details
                          , n = i.targetduration
                          , a = this.config
                          , s = this.media
                          , o = lt.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, s.currentTime - n, a.maxBufferHole)
                          , l = o.end;
                        if (o.len > this.getMaxBufferLength() + n)
                            return;
                        var u, h = i.fragments, d = h.length, c = i.edge, f = this.fragPrevious;
                        if (l < c)
                            !(u = pt(f, h, l, a.maxFragLookUpTolerance)) && f && f.start < h[0].start && (u = h[0]);
                        else
                            u = h[d - 1];
                        null !== (t = u) && void 0 !== t && t.encrypted ? this.loadKey(u, i) : u && this.fragmentTracker.getState(u) === et.NOT_LOADED && this.loadFragment(u, i, l)
                    }
                } else
                    this.state = xt
            }
            ,
            l.loadFragment = function(e, r, i) {
                this.fragCurrent = e,
                t.prototype.loadFragment.call(this, e, r, i)
            }
            ,
            n = i,
            (s = [{
                key: "mediaBufferTimeRanges",
                get: function() {
                    return this.tracksBuffered[this.currentTrackId] || []
                }
            }]) && ge(n.prototype, s),
            o && ge(n, o),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            i
        }(Jt);
        function me(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function Ee(t, e) {
            return (Ee = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function ye(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var i = t[r];
                "subtitles" === i.kind && i.label && e.push(t[r])
            }
            return e
        }
        var Te, Ae = function(t) {
            var e, r;
            function i(e) {
                var r;
                return (r = t.call(this, e, "[subtitle-track-controller]") || this).media = null,
                r.tracks = [],
                r.groupId = null,
                r.tracksInGroup = [],
                r.trackId = -1,
                r.selectDefaultTrack = !0,
                r.queuedDefaultTrack = -1,
                r.trackChangeListener = function() {
                    return r.onTextTracksChanged()
                }
                ,
                r.asyncPollTrackChange = function() {
                    return r.pollTrackChange(0)
                }
                ,
                r.useTextTrackPolling = !1,
                r.subtitlePollingInterval = -1,
                r.subtitleDisplay = !0,
                r.registerListeners(),
                r
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            Ee(e, r);
            var n, s, o, l = i.prototype;
            return l.destroy = function() {
                this.unregisterListeners(),
                this.tracks.length = 0,
                this.tracksInGroup.length = 0,
                this.trackChangeListener = this.asyncPollTrackChange = null,
                t.prototype.destroy.call(this)
            }
            ,
            l.registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.on(a.Events.LEVEL_LOADING, this.onLevelLoading, this),
                t.on(a.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                t.on(a.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                t.on(a.Events.ERROR, this.onError, this)
            }
            ,
            l.unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.off(a.Events.LEVEL_LOADING, this.onLevelLoading, this),
                t.off(a.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                t.off(a.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                t.off(a.Events.ERROR, this.onError, this)
            }
            ,
            l.onMediaAttached = function(t, e) {
                this.media = e.media,
                this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack,
                this.queuedDefaultTrack = -1),
                this.useTextTrackPolling = !(this.media.textTracks && "onchange"in this.media.textTracks),
                this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
            }
            ,
            l.pollTrackChange = function(t) {
                self.clearInterval(this.subtitlePollingInterval),
                this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t)
            }
            ,
            l.onMediaDetaching = function() {
                this.media && (self.clearInterval(this.subtitlePollingInterval),
                this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange),
                this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
                ye(this.media.textTracks).forEach((function(t) {
                    P(t)
                }
                )),
                this.subtitleTrack = -1,
                this.media = null)
            }
            ,
            l.onManifestLoading = function() {
                this.tracks = [],
                this.groupId = null,
                this.tracksInGroup = [],
                this.trackId = -1,
                this.selectDefaultTrack = !0
            }
            ,
            l.onManifestParsed = function(t, e) {
                this.tracks = e.subtitleTracks
            }
            ,
            l.onSubtitleTrackLoaded = function(t, e) {
                var r = e.id
                  , i = e.details
                  , n = this.trackId
                  , a = this.tracksInGroup[n];
                if (a) {
                    var s = a.details;
                    a.details = e.details,
                    this.log("subtitle track " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"),
                    r === this.trackId && (this.retryCount = 0,
                    this.playlistLoaded(r, e, s))
                } else
                    this.warn("Invalid subtitle track id " + r)
            }
            ,
            l.onLevelLoading = function(t, e) {
                this.switchLevel(e.level)
            }
            ,
            l.onLevelSwitching = function(t, e) {
                this.switchLevel(e.level)
            }
            ,
            l.switchLevel = function(t) {
                var e = this.hls.levels[t];
                if (null != e && e.textGroupIds) {
                    var r = e.textGroupIds[e.urlId];
                    if (this.groupId !== r) {
                        var i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0
                          , n = this.tracks.filter((function(t) {
                            return !r || t.groupId === r
                        }
                        ));
                        this.tracksInGroup = n;
                        var s = this.findTrackId(null == i ? void 0 : i.name) || this.findTrackId();
                        this.groupId = r;
                        var o = {
                            subtitleTracks: n
                        };
                        this.log("Updating subtitle tracks, " + n.length + ' track(s) found in "' + r + '" group-id'),
                        this.hls.trigger(a.Events.SUBTITLE_TRACKS_UPDATED, o),
                        -1 !== s && this.setSubtitleTrack(s, i)
                    }
                }
            }
            ,
            l.findTrackId = function(t) {
                for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name))
                        return i.id
                }
                return -1
            }
            ,
            l.onError = function(e, r) {
                t.prototype.onError.call(this, e, r),
                !r.fatal && r.context && r.context.type === k.a.SUBTITLE_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
            }
            ,
            l.loadPlaylist = function(t) {
                var e = this.tracksInGroup[this.trackId];
                if (this.shouldLoadTrack(e)) {
                    var r = e.id
                      , i = e.groupId
                      , n = e.url;
                    if (t)
                        try {
                            n = t.addDirectives(n)
                        } catch (t) {
                            this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                        }
                    this.log("Loading subtitle playlist for id " + r),
                    this.hls.trigger(a.Events.SUBTITLE_TRACK_LOADING, {
                        url: n,
                        id: r,
                        groupId: i,
                        deliveryDirectives: t || null
                    })
                }
            }
            ,
            l.toggleTrackModes = function(t) {
                var e = this
                  , r = this.media
                  , i = this.subtitleDisplay
                  , n = this.trackId;
                if (r) {
                    var a = ye(r.textTracks)
                      , s = a.filter((function(t) {
                        return t.groupId === e.groupId
                    }
                    ));
                    if (-1 === t)
                        [].slice.call(a).forEach((function(t) {
                            t.mode = "disabled"
                        }
                        ));
                    else {
                        var o = s[n];
                        o && (o.mode = "disabled")
                    }
                    var l = s[t];
                    l && (l.mode = i ? "showing" : "hidden")
                }
            }
            ,
            l.setSubtitleTrack = function(t, e) {
                var r, i = this.tracksInGroup;
                if (this.media) {
                    if (this.trackId !== t && this.toggleTrackModes(t),
                    !(this.trackId === t && (-1 === t || null !== (r = i[t]) && void 0 !== r && r.details) || t < -1 || t >= i.length)) {
                        this.clearTimer();
                        var n = i[t];
                        if (this.log("Switching to subtitle track " + t),
                        this.trackId = t,
                        n) {
                            var s = n.id
                              , o = n.groupId
                              , l = void 0 === o ? "" : o
                              , u = n.name
                              , h = n.type
                              , d = n.url;
                            this.hls.trigger(a.Events.SUBTITLE_TRACK_SWITCH, {
                                id: s,
                                groupId: l,
                                name: u,
                                type: h,
                                url: d
                            });
                            var c = this.switchParams(n.url, null == e ? void 0 : e.details);
                            this.loadPlaylist(c)
                        } else
                            this.hls.trigger(a.Events.SUBTITLE_TRACK_SWITCH, {
                                id: t
                            })
                    }
                } else
                    this.queuedDefaultTrack = t
            }
            ,
            l.onTextTracksChanged = function() {
                if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval),
                this.media && this.hls.config.renderTextTracksNatively) {
                    for (var t = -1, e = ye(this.media.textTracks), r = 0; r < e.length; r++)
                        if ("hidden" === e[r].mode)
                            t = r;
                        else if ("showing" === e[r].mode) {
                            t = r;
                            break
                        }
                    this.subtitleTrack !== t && (this.subtitleTrack = t)
                }
            }
            ,
            n = i,
            (s = [{
                key: "subtitleTracks",
                get: function() {
                    return this.tracksInGroup
                }
            }, {
                key: "subtitleTrack",
                get: function() {
                    return this.trackId
                },
                set: function(t) {
                    this.selectDefaultTrack = !1;
                    var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                    this.setSubtitleTrack(t, e)
                }
            }]) && me(n.prototype, s),
            o && me(n, o),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            i
        }(z), be = r(24), Se = r.n(be), De = {
            42: 225,
            92: 233,
            94: 237,
            95: 243,
            96: 250,
            123: 231,
            124: 247,
            125: 209,
            126: 241,
            127: 9608,
            128: 174,
            129: 176,
            130: 189,
            131: 191,
            132: 8482,
            133: 162,
            134: 163,
            135: 9834,
            136: 224,
            137: 32,
            138: 232,
            139: 226,
            140: 234,
            141: 238,
            142: 244,
            143: 251,
            144: 193,
            145: 201,
            146: 211,
            147: 218,
            148: 220,
            149: 252,
            150: 8216,
            151: 161,
            152: 42,
            153: 8217,
            154: 9473,
            155: 169,
            156: 8480,
            157: 8226,
            158: 8220,
            159: 8221,
            160: 192,
            161: 194,
            162: 199,
            163: 200,
            164: 202,
            165: 203,
            166: 235,
            167: 206,
            168: 207,
            169: 239,
            170: 212,
            171: 217,
            172: 249,
            173: 219,
            174: 171,
            175: 187,
            176: 195,
            177: 227,
            178: 205,
            179: 204,
            180: 236,
            181: 210,
            182: 242,
            183: 213,
            184: 245,
            185: 123,
            186: 125,
            187: 92,
            188: 94,
            189: 95,
            190: 124,
            191: 8764,
            192: 196,
            193: 228,
            194: 214,
            195: 246,
            196: 223,
            197: 165,
            198: 164,
            199: 9475,
            200: 197,
            201: 229,
            202: 216,
            203: 248,
            204: 9487,
            205: 9491,
            206: 9495,
            207: 9499
        }, Re = function(t) {
            var e = t;
            return De.hasOwnProperty(t) && (e = De[t]),
            String.fromCharCode(e)
        }, Le = {
            17: 1,
            18: 3,
            21: 5,
            22: 7,
            23: 9,
            16: 11,
            19: 12,
            20: 14
        }, ke = {
            17: 2,
            18: 4,
            21: 6,
            22: 8,
            23: 10,
            19: 13,
            20: 15
        }, Ce = {
            25: 1,
            26: 3,
            29: 5,
            30: 7,
            31: 9,
            24: 11,
            27: 12,
            28: 14
        }, _e = {
            25: 2,
            26: 4,
            29: 6,
            30: 8,
            31: 10,
            27: 13,
            28: 15
        }, we = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
        !function(t) {
            t[t.ERROR = 0] = "ERROR",
            t[t.TEXT = 1] = "TEXT",
            t[t.WARNING = 2] = "WARNING",
            t[t.INFO = 2] = "INFO",
            t[t.DEBUG = 3] = "DEBUG",
            t[t.DATA = 3] = "DATA"
        }(Te || (Te = {}));
        var Ie = function() {
            function t() {
                this.time = null,
                this.verboseLevel = Te.ERROR
            }
            return t.prototype.log = function(t, e) {
                this.verboseLevel >= t && o.logger.log(this.time + " [" + t + "] " + e)
            }
            ,
            t
        }()
          , Oe = function(t) {
            for (var e = [], r = 0; r < t.length; r++)
                e.push(t[r].toString(16));
            return e
        }
          , xe = function() {
            function t(t, e, r, i, n) {
                this.foreground = void 0,
                this.underline = void 0,
                this.italics = void 0,
                this.background = void 0,
                this.flash = void 0,
                this.foreground = t || "white",
                this.underline = e || !1,
                this.italics = r || !1,
                this.background = i || "black",
                this.flash = n || !1
            }
            var e = t.prototype;
            return e.reset = function() {
                this.foreground = "white",
                this.underline = !1,
                this.italics = !1,
                this.background = "black",
                this.flash = !1
            }
            ,
            e.setStyles = function(t) {
                for (var e = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < e.length; r++) {
                    var i = e[r];
                    t.hasOwnProperty(i) && (this[i] = t[i])
                }
            }
            ,
            e.isDefault = function() {
                return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
            }
            ,
            e.equals = function(t) {
                return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
            }
            ,
            e.copy = function(t) {
                this.foreground = t.foreground,
                this.underline = t.underline,
                this.italics = t.italics,
                this.background = t.background,
                this.flash = t.flash
            }
            ,
            e.toString = function() {
                return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
            }
            ,
            t
        }()
          , Pe = function() {
            function t(t, e, r, i, n, a) {
                this.uchar = void 0,
                this.penState = void 0,
                this.uchar = t || " ",
                this.penState = new xe(e,r,i,n,a)
            }
            var e = t.prototype;
            return e.reset = function() {
                this.uchar = " ",
                this.penState.reset()
            }
            ,
            e.setChar = function(t, e) {
                this.uchar = t,
                this.penState.copy(e)
            }
            ,
            e.setPenState = function(t) {
                this.penState.copy(t)
            }
            ,
            e.equals = function(t) {
                return this.uchar === t.uchar && this.penState.equals(t.penState)
            }
            ,
            e.copy = function(t) {
                this.uchar = t.uchar,
                this.penState.copy(t.penState)
            }
            ,
            e.isEmpty = function() {
                return " " === this.uchar && this.penState.isDefault()
            }
            ,
            t
        }()
          , Me = function() {
            function t(t) {
                this.chars = void 0,
                this.pos = void 0,
                this.currPenState = void 0,
                this.cueStartTime = void 0,
                this.logger = void 0,
                this.chars = [];
                for (var e = 0; e < 100; e++)
                    this.chars.push(new Pe);
                this.logger = t,
                this.pos = 0,
                this.currPenState = new xe
            }
            var e = t.prototype;
            return e.equals = function(t) {
                for (var e = !0, r = 0; r < 100; r++)
                    if (!this.chars[r].equals(t.chars[r])) {
                        e = !1;
                        break
                    }
                return e
            }
            ,
            e.copy = function(t) {
                for (var e = 0; e < 100; e++)
                    this.chars[e].copy(t.chars[e])
            }
            ,
            e.isEmpty = function() {
                for (var t = !0, e = 0; e < 100; e++)
                    if (!this.chars[e].isEmpty()) {
                        t = !1;
                        break
                    }
                return t
            }
            ,
            e.setCursor = function(t) {
                this.pos !== t && (this.pos = t),
                this.pos < 0 ? (this.logger.log(Te.DEBUG, "Negative cursor position " + this.pos),
                this.pos = 0) : this.pos > 100 && (this.logger.log(Te.DEBUG, "Too large cursor position " + this.pos),
                this.pos = 100)
            }
            ,
            e.moveCursor = function(t) {
                var e = this.pos + t;
                if (t > 1)
                    for (var r = this.pos + 1; r < e + 1; r++)
                        this.chars[r].setPenState(this.currPenState);
                this.setCursor(e)
            }
            ,
            e.backSpace = function() {
                this.moveCursor(-1),
                this.chars[this.pos].setChar(" ", this.currPenState)
            }
            ,
            e.insertChar = function(t) {
                t >= 144 && this.backSpace();
                var e = Re(t);
                this.pos >= 100 ? this.logger.log(Te.ERROR, "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState),
                this.moveCursor(1))
            }
            ,
            e.clearFromPos = function(t) {
                var e;
                for (e = t; e < 100; e++)
                    this.chars[e].reset()
            }
            ,
            e.clear = function() {
                this.clearFromPos(0),
                this.pos = 0,
                this.currPenState.reset()
            }
            ,
            e.clearToEndOfRow = function() {
                this.clearFromPos(this.pos)
            }
            ,
            e.getTextString = function() {
                for (var t = [], e = !0, r = 0; r < 100; r++) {
                    var i = this.chars[r].uchar;
                    " " !== i && (e = !1),
                    t.push(i)
                }
                return e ? "" : t.join("")
            }
            ,
            e.setPenStyles = function(t) {
                this.currPenState.setStyles(t),
                this.chars[this.pos].setPenState(this.currPenState)
            }
            ,
            t
        }()
          , Fe = function() {
            function t(t) {
                this.rows = void 0,
                this.currRow = void 0,
                this.nrRollUpRows = void 0,
                this.lastOutputScreen = void 0,
                this.logger = void 0,
                this.rows = [];
                for (var e = 0; e < 15; e++)
                    this.rows.push(new Me(t));
                this.logger = t,
                this.currRow = 14,
                this.nrRollUpRows = null,
                this.lastOutputScreen = null,
                this.reset()
            }
            var e = t.prototype;
            return e.reset = function() {
                for (var t = 0; t < 15; t++)
                    this.rows[t].clear();
                this.currRow = 14
            }
            ,
            e.equals = function(t) {
                for (var e = !0, r = 0; r < 15; r++)
                    if (!this.rows[r].equals(t.rows[r])) {
                        e = !1;
                        break
                    }
                return e
            }
            ,
            e.copy = function(t) {
                for (var e = 0; e < 15; e++)
                    this.rows[e].copy(t.rows[e])
            }
            ,
            e.isEmpty = function() {
                for (var t = !0, e = 0; e < 15; e++)
                    if (!this.rows[e].isEmpty()) {
                        t = !1;
                        break
                    }
                return t
            }
            ,
            e.backSpace = function() {
                this.rows[this.currRow].backSpace()
            }
            ,
            e.clearToEndOfRow = function() {
                this.rows[this.currRow].clearToEndOfRow()
            }
            ,
            e.insertChar = function(t) {
                this.rows[this.currRow].insertChar(t)
            }
            ,
            e.setPen = function(t) {
                this.rows[this.currRow].setPenStyles(t)
            }
            ,
            e.moveCursor = function(t) {
                this.rows[this.currRow].moveCursor(t)
            }
            ,
            e.setCursor = function(t) {
                this.logger.log(Te.INFO, "setCursor: " + t),
                this.rows[this.currRow].setCursor(t)
            }
            ,
            e.setPAC = function(t) {
                this.logger.log(Te.INFO, "pacData = " + JSON.stringify(t));
                var e = t.row - 1;
                if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1),
                this.nrRollUpRows && this.currRow !== e) {
                    for (var r = 0; r < 15; r++)
                        this.rows[r].clear();
                    var i = this.currRow + 1 - this.nrRollUpRows
                      , n = this.lastOutputScreen;
                    if (n) {
                        var a = n.rows[i].cueStartTime
                          , s = this.logger.time;
                        if (a && null !== s && a < s)
                            for (var o = 0; o < this.nrRollUpRows; o++)
                                this.rows[e - this.nrRollUpRows + o + 1].copy(n.rows[i + o])
                    }
                }
                this.currRow = e;
                var l = this.rows[this.currRow];
                if (null !== t.indent) {
                    var u = t.indent
                      , h = Math.max(u - 1, 0);
                    l.setCursor(t.indent),
                    t.color = l.chars[h].penState.foreground
                }
                var d = {
                    foreground: t.color,
                    underline: t.underline,
                    italics: t.italics,
                    background: "black",
                    flash: !1
                };
                this.setPen(d)
            }
            ,
            e.setBkgData = function(t) {
                this.logger.log(Te.INFO, "bkgData = " + JSON.stringify(t)),
                this.backSpace(),
                this.setPen(t),
                this.insertChar(32)
            }
            ,
            e.setRollUpRows = function(t) {
                this.nrRollUpRows = t
            }
            ,
            e.rollUp = function() {
                if (null !== this.nrRollUpRows) {
                    this.logger.log(Te.TEXT, this.getDisplayText());
                    var t = this.currRow + 1 - this.nrRollUpRows
                      , e = this.rows.splice(t, 1)[0];
                    e.clear(),
                    this.rows.splice(this.currRow, 0, e),
                    this.logger.log(Te.INFO, "Rolling up")
                } else
                    this.logger.log(Te.DEBUG, "roll_up but nrRollUpRows not set yet")
            }
            ,
            e.getDisplayText = function(t) {
                t = t || !1;
                for (var e = [], r = "", i = -1, n = 0; n < 15; n++) {
                    var a = this.rows[n].getTextString();
                    a && (i = n + 1,
                    t ? e.push("Row " + i + ": '" + a + "'") : e.push(a.trim()))
                }
                return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")),
                r
            }
            ,
            e.getTextAndFormat = function() {
                return this.rows
            }
            ,
            t
        }()
          , Be = function() {
            function t(t, e, r) {
                this.chNr = void 0,
                this.outputFilter = void 0,
                this.mode = void 0,
                this.verbose = void 0,
                this.displayedMemory = void 0,
                this.nonDisplayedMemory = void 0,
                this.lastOutputScreen = void 0,
                this.currRollUpRow = void 0,
                this.writeScreen = void 0,
                this.cueStartTime = void 0,
                this.logger = void 0,
                this.chNr = t,
                this.outputFilter = e,
                this.mode = null,
                this.verbose = 0,
                this.displayedMemory = new Fe(r),
                this.nonDisplayedMemory = new Fe(r),
                this.lastOutputScreen = new Fe(r),
                this.currRollUpRow = this.displayedMemory.rows[14],
                this.writeScreen = this.displayedMemory,
                this.mode = null,
                this.cueStartTime = null,
                this.logger = r
            }
            var e = t.prototype;
            return e.reset = function() {
                this.mode = null,
                this.displayedMemory.reset(),
                this.nonDisplayedMemory.reset(),
                this.lastOutputScreen.reset(),
                this.outputFilter.reset(),
                this.currRollUpRow = this.displayedMemory.rows[14],
                this.writeScreen = this.displayedMemory,
                this.mode = null,
                this.cueStartTime = null
            }
            ,
            e.getHandler = function() {
                return this.outputFilter
            }
            ,
            e.setHandler = function(t) {
                this.outputFilter = t
            }
            ,
            e.setPAC = function(t) {
                this.writeScreen.setPAC(t)
            }
            ,
            e.setBkgData = function(t) {
                this.writeScreen.setBkgData(t)
            }
            ,
            e.setMode = function(t) {
                t !== this.mode && (this.mode = t,
                this.logger.log(Te.INFO, "MODE=" + t),
                "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory,
                this.writeScreen.reset()),
                "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null,
                this.nonDisplayedMemory.nrRollUpRows = null),
                this.mode = t)
            }
            ,
            e.insertChars = function(t) {
                for (var e = 0; e < t.length; e++)
                    this.writeScreen.insertChar(t[e]);
                var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                this.logger.log(Te.INFO, r + ": " + this.writeScreen.getDisplayText(!0)),
                "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(Te.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)),
                this.outputDataUpdate())
            }
            ,
            e.ccRCL = function() {
                this.logger.log(Te.INFO, "RCL - Resume Caption Loading"),
                this.setMode("MODE_POP-ON")
            }
            ,
            e.ccBS = function() {
                this.logger.log(Te.INFO, "BS - BackSpace"),
                "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(),
                this.writeScreen === this.displayedMemory && this.outputDataUpdate())
            }
            ,
            e.ccAOF = function() {}
            ,
            e.ccAON = function() {}
            ,
            e.ccDER = function() {
                this.logger.log(Te.INFO, "DER- Delete to End of Row"),
                this.writeScreen.clearToEndOfRow(),
                this.outputDataUpdate()
            }
            ,
            e.ccRU = function(t) {
                this.logger.log(Te.INFO, "RU(" + t + ") - Roll Up"),
                this.writeScreen = this.displayedMemory,
                this.setMode("MODE_ROLL-UP"),
                this.writeScreen.setRollUpRows(t)
            }
            ,
            e.ccFON = function() {
                this.logger.log(Te.INFO, "FON - Flash On"),
                this.writeScreen.setPen({
                    flash: !0
                })
            }
            ,
            e.ccRDC = function() {
                this.logger.log(Te.INFO, "RDC - Resume Direct Captioning"),
                this.setMode("MODE_PAINT-ON")
            }
            ,
            e.ccTR = function() {
                this.logger.log(Te.INFO, "TR"),
                this.setMode("MODE_TEXT")
            }
            ,
            e.ccRTD = function() {
                this.logger.log(Te.INFO, "RTD"),
                this.setMode("MODE_TEXT")
            }
            ,
            e.ccEDM = function() {
                this.logger.log(Te.INFO, "EDM - Erase Displayed Memory"),
                this.displayedMemory.reset(),
                this.outputDataUpdate(!0)
            }
            ,
            e.ccCR = function() {
                this.logger.log(Te.INFO, "CR - Carriage Return"),
                this.writeScreen.rollUp(),
                this.outputDataUpdate(!0)
            }
            ,
            e.ccENM = function() {
                this.logger.log(Te.INFO, "ENM - Erase Non-displayed Memory"),
                this.nonDisplayedMemory.reset()
            }
            ,
            e.ccEOC = function() {
                if (this.logger.log(Te.INFO, "EOC - End Of Caption"),
                "MODE_POP-ON" === this.mode) {
                    var t = this.displayedMemory;
                    this.displayedMemory = this.nonDisplayedMemory,
                    this.nonDisplayedMemory = t,
                    this.writeScreen = this.nonDisplayedMemory,
                    this.logger.log(Te.TEXT, "DISP: " + this.displayedMemory.getDisplayText())
                }
                this.outputDataUpdate(!0)
            }
            ,
            e.ccTO = function(t) {
                this.logger.log(Te.INFO, "TO(" + t + ") - Tab Offset"),
                this.writeScreen.moveCursor(t)
            }
            ,
            e.ccMIDROW = function(t) {
                var e = {
                    flash: !1
                };
                if (e.underline = t % 2 == 1,
                e.italics = t >= 46,
                e.italics)
                    e.foreground = "white";
                else {
                    var r = Math.floor(t / 2) - 16;
                    e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                }
                this.logger.log(Te.INFO, "MIDROW: " + JSON.stringify(e)),
                this.writeScreen.setPen(e)
            }
            ,
            e.outputDataUpdate = function(t) {
                void 0 === t && (t = !1);
                var e = this.logger.time;
                null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen),
                t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(),
                this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e,
                this.lastOutputScreen.copy(this.displayedMemory))
            }
            ,
            e.cueSplitAtTime = function(t) {
                this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory),
                this.cueStartTime = t))
            }
            ,
            t
        }();
        function Ue(t, e, r) {
            r.a = t,
            r.b = e
        }
        function Ne(t, e, r) {
            return r.a === t && r.b === e
        }
        var Ve = function() {
            function t(t, e, r) {
                this.channels = void 0,
                this.currentChannel = 0,
                this.cmdHistory = void 0,
                this.logger = void 0;
                var i = new Ie;
                this.channels = [null, new Be(t,e,i), new Be(t + 1,r,i)],
                this.cmdHistory = {
                    a: null,
                    b: null
                },
                this.logger = i
            }
            var e = t.prototype;
            return e.getHandler = function(t) {
                return this.channels[t].getHandler()
            }
            ,
            e.setHandler = function(t, e) {
                this.channels[t].setHandler(e)
            }
            ,
            e.addData = function(t, e) {
                var r, i, n, a = !1;
                this.logger.time = t;
                for (var s = 0; s < e.length; s += 2)
                    if (i = 127 & e[s],
                    n = 127 & e[s + 1],
                    0 !== i || 0 !== n) {
                        if (this.logger.log(Te.DATA, "[" + Oe([e[s], e[s + 1]]) + "] -> (" + Oe([i, n]) + ")"),
                        (r = this.parseCmd(i, n)) || (r = this.parseMidrow(i, n)),
                        r || (r = this.parsePAC(i, n)),
                        r || (r = this.parseBackgroundAttributes(i, n)),
                        !r && (a = this.parseChars(i, n))) {
                            var o = this.currentChannel;
                            if (o && o > 0)
                                this.channels[o].insertChars(a);
                            else
                                this.logger.log(Te.WARNING, "No channel found yet. TEXT-MODE?")
                        }
                        r || a || this.logger.log(Te.WARNING, "Couldn't parse cleaned data " + Oe([i, n]) + " orig: " + Oe([e[s], e[s + 1]]))
                    }
            }
            ,
            e.parseCmd = function(t, e) {
                var r = this.cmdHistory;
                if (!((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47) && !((23 === t || 31 === t) && e >= 33 && e <= 35))
                    return !1;
                if (Ne(t, e, r))
                    return Ue(null, null, r),
                    this.logger.log(Te.DEBUG, "Repeated command (" + Oe([t, e]) + ") is dropped"),
                    !0;
                var i = 20 === t || 21 === t || 23 === t ? 1 : 2
                  , n = this.channels[i];
                return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? n.ccRCL() : 33 === e ? n.ccBS() : 34 === e ? n.ccAOF() : 35 === e ? n.ccAON() : 36 === e ? n.ccDER() : 37 === e ? n.ccRU(2) : 38 === e ? n.ccRU(3) : 39 === e ? n.ccRU(4) : 40 === e ? n.ccFON() : 41 === e ? n.ccRDC() : 42 === e ? n.ccTR() : 43 === e ? n.ccRTD() : 44 === e ? n.ccEDM() : 45 === e ? n.ccCR() : 46 === e ? n.ccENM() : 47 === e && n.ccEOC() : n.ccTO(e - 32),
                Ue(t, e, r),
                this.currentChannel = i,
                !0
            }
            ,
            e.parseMidrow = function(t, e) {
                var r = 0;
                if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                    if ((r = 17 === t ? 1 : 2) !== this.currentChannel)
                        return this.logger.log(Te.ERROR, "Mismatch channel in midrow parsing"),
                        !1;
                    var i = this.channels[r];
                    return !!i && (i.ccMIDROW(e),
                    this.logger.log(Te.DEBUG, "MIDROW (" + Oe([t, e]) + ")"),
                    !0)
                }
                return !1
            }
            ,
            e.parsePAC = function(t, e) {
                var r, i = this.cmdHistory;
                if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127) && !((16 === t || 24 === t) && e >= 64 && e <= 95))
                    return !1;
                if (Ne(t, e, i))
                    return Ue(null, null, i),
                    !0;
                var n = t <= 23 ? 1 : 2;
                r = e >= 64 && e <= 95 ? 1 === n ? Le[t] : Ce[t] : 1 === n ? ke[t] : _e[t];
                var a = this.channels[n];
                return !!a && (a.setPAC(this.interpretPAC(r, e)),
                Ue(t, e, i),
                this.currentChannel = n,
                !0)
            }
            ,
            e.interpretPAC = function(t, e) {
                var r, i = {
                    color: null,
                    italics: !1,
                    indent: null,
                    underline: !1,
                    row: t
                };
                return r = e > 95 ? e - 96 : e - 64,
                i.underline = 1 == (1 & r),
                r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0,
                i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2),
                i
            }
            ,
            e.parseChars = function(t, e) {
                var r, i, n = null, a = null;
                (t >= 25 ? (r = 2,
                a = t - 8) : (r = 1,
                a = t),
                a >= 17 && a <= 19) ? (i = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144,
                this.logger.log(Te.INFO, "Special char '" + Re(i) + "' in channel " + r),
                n = [i]) : t >= 32 && t <= 127 && (n = 0 === e ? [t] : [t, e]);
                if (n) {
                    var s = Oe(n);
                    this.logger.log(Te.DEBUG, "Char codes =  " + s.join(",")),
                    Ue(t, e, this.cmdHistory)
                }
                return n
            }
            ,
            e.parseBackgroundAttributes = function(t, e) {
                var r;
                if (!((16 === t || 24 === t) && e >= 32 && e <= 47) && !((23 === t || 31 === t) && e >= 45 && e <= 47))
                    return !1;
                var i = {};
                16 === t || 24 === t ? (r = Math.floor((e - 32) / 2),
                i.background = we[r],
                e % 2 == 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent" : (i.foreground = "black",
                47 === e && (i.underline = !0));
                var n = t <= 23 ? 1 : 2;
                return this.channels[n].setBkgData(i),
                Ue(t, e, this.cmdHistory),
                !0
            }
            ,
            e.reset = function() {
                for (var t = 0; t < Object.keys(this.channels).length; t++) {
                    var e = this.channels[t];
                    e && e.reset()
                }
                this.cmdHistory = {
                    a: null,
                    b: null
                }
            }
            ,
            e.cueSplitAtTime = function(t) {
                for (var e = 0; e < this.channels.length; e++) {
                    var r = this.channels[e];
                    r && r.cueSplitAtTime(t)
                }
            }
            ,
            t
        }()
          , Ge = function() {
            function t(t, e) {
                this.timelineController = void 0,
                this.cueRanges = [],
                this.trackName = void 0,
                this.startTime = null,
                this.endTime = null,
                this.screen = null,
                this.timelineController = t,
                this.trackName = e
            }
            var e = t.prototype;
            return e.dispatchCue = function() {
                null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges),
                this.startTime = null)
            }
            ,
            e.newCue = function(t, e, r) {
                (null === this.startTime || this.startTime > t) && (this.startTime = t),
                this.endTime = e,
                this.screen = r,
                this.timelineController.createCaptionsTrack(this.trackName)
            }
            ,
            e.reset = function() {
                this.cueRanges = [],
                this.startTime = null
            }
            ,
            t
        }()
          , je = function() {
            if ("undefined" != typeof self && self.VTTCue)
                return self.VTTCue;
            var t = ["", "lr", "rl"]
              , e = ["start", "middle", "end", "left", "right"];
            function r(t, e) {
                if ("string" != typeof e)
                    return !1;
                if (!Array.isArray(t))
                    return !1;
                var r = e.toLowerCase();
                return !!~t.indexOf(r) && r
            }
            function i(t) {
                return r(e, t)
            }
            function n(t) {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    r[i - 1] = arguments[i];
                for (var n = 1; n < arguments.length; n++) {
                    var a = arguments[n];
                    for (var s in a)
                        t[s] = a[s]
                }
                return t
            }
            function a(e, a, s) {
                var o = this
                  , l = {
                    enumerable: !0
                };
                o.hasBeenReset = !1;
                var u = ""
                  , h = !1
                  , d = e
                  , c = a
                  , f = s
                  , g = null
                  , v = ""
                  , p = !0
                  , m = "auto"
                  , E = "start"
                  , y = 50
                  , T = "middle"
                  , A = 50
                  , b = "middle";
                Object.defineProperty(o, "id", n({}, l, {
                    get: function() {
                        return u
                    },
                    set: function(t) {
                        u = "" + t
                    }
                })),
                Object.defineProperty(o, "pauseOnExit", n({}, l, {
                    get: function() {
                        return h
                    },
                    set: function(t) {
                        h = !!t
                    }
                })),
                Object.defineProperty(o, "startTime", n({}, l, {
                    get: function() {
                        return d
                    },
                    set: function(t) {
                        if ("number" != typeof t)
                            throw new TypeError("Start time must be set to a number.");
                        d = t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "endTime", n({}, l, {
                    get: function() {
                        return c
                    },
                    set: function(t) {
                        if ("number" != typeof t)
                            throw new TypeError("End time must be set to a number.");
                        c = t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "text", n({}, l, {
                    get: function() {
                        return f
                    },
                    set: function(t) {
                        f = "" + t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "region", n({}, l, {
                    get: function() {
                        return g
                    },
                    set: function(t) {
                        g = t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "vertical", n({}, l, {
                    get: function() {
                        return v
                    },
                    set: function(e) {
                        var i = function(e) {
                            return r(t, e)
                        }(e);
                        if (!1 === i)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        v = i,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "snapToLines", n({}, l, {
                    get: function() {
                        return p
                    },
                    set: function(t) {
                        p = !!t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "line", n({}, l, {
                    get: function() {
                        return m
                    },
                    set: function(t) {
                        if ("number" != typeof t && "auto" !== t)
                            throw new SyntaxError("An invalid number or illegal string was specified.");
                        m = t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "lineAlign", n({}, l, {
                    get: function() {
                        return E
                    },
                    set: function(t) {
                        var e = i(t);
                        if (!e)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        E = e,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "position", n({}, l, {
                    get: function() {
                        return y
                    },
                    set: function(t) {
                        if (t < 0 || t > 100)
                            throw new Error("Position must be between 0 and 100.");
                        y = t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "positionAlign", n({}, l, {
                    get: function() {
                        return T
                    },
                    set: function(t) {
                        var e = i(t);
                        if (!e)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        T = e,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "size", n({}, l, {
                    get: function() {
                        return A
                    },
                    set: function(t) {
                        if (t < 0 || t > 100)
                            throw new Error("Size must be between 0 and 100.");
                        A = t,
                        this.hasBeenReset = !0
                    }
                })),
                Object.defineProperty(o, "align", n({}, l, {
                    get: function() {
                        return b
                    },
                    set: function(t) {
                        var e = i(t);
                        if (!e)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        b = e,
                        this.hasBeenReset = !0
                    }
                })),
                o.displayState = void 0
            }
            return a.prototype.getCueAsHTML = function() {
                return self.WebVTT.convertCueToDOMTree(self, this.text)
            }
            ,
            a
        }()
          , Ke = function() {
            function t() {}
            return t.prototype.decode = function(t, e) {
                if (!t)
                    return "";
                if ("string" != typeof t)
                    throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
            ,
            t
        }();
        function He(t) {
            function e(t, e, r, i) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + parseFloat(i || 0)
            }
            var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
            return r ? parseFloat(r[2]) > 59 ? e(r[2], r[3], 0, r[4]) : e(r[1], r[2], r[3], r[4]) : null
        }
        var Je = function() {
            function t() {
                this.values = Object.create(null)
            }
            var e = t.prototype;
            return e.set = function(t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            }
            ,
            e.get = function(t, e, r) {
                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
            }
            ,
            e.has = function(t) {
                return t in this.values
            }
            ,
            e.alt = function(t, e, r) {
                for (var i = 0; i < r.length; ++i)
                    if (e === r[i]) {
                        this.set(t, e);
                        break
                    }
            }
            ,
            e.integer = function(t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            }
            ,
            e.percent = function(t, e) {
                if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                    var r = parseFloat(e);
                    if (r >= 0 && r <= 100)
                        return this.set(t, r),
                        !0
                }
                return !1
            }
            ,
            t
        }();
        function We(t, e, r, i) {
            var n = i ? t.split(i) : [t];
            for (var a in n)
                if ("string" == typeof n[a]) {
                    var s = n[a].split(r);
                    if (2 === s.length)
                        e(s[0], s[1])
                }
        }
        var Qe = new je(0,0,"")
          , Xe = "middle" === Qe.align ? "middle" : "center";
        function Ye(t, e, r) {
            var i = t;
            function n() {
                var e = He(t);
                if (null === e)
                    throw new Error("Malformed timestamp: " + i);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""),
                e
            }
            function a() {
                t = t.replace(/^\s+/, "")
            }
            if (a(),
            e.startTime = n(),
            a(),
            "--\x3e" !== t.substr(0, 3))
                throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
            t = t.substr(3),
            a(),
            e.endTime = n(),
            a(),
            function(t, e) {
                var i = new Je;
                We(t, (function(t, e) {
                    var n;
                    switch (t) {
                    case "region":
                        for (var a = r.length - 1; a >= 0; a--)
                            if (r[a].id === e) {
                                i.set(t, r[a].region);
                                break
                            }
                        break;
                    case "vertical":
                        i.alt(t, e, ["rl", "lr"]);
                        break;
                    case "line":
                        n = e.split(","),
                        i.integer(t, n[0]),
                        i.percent(t, n[0]) && i.set("snapToLines", !1),
                        i.alt(t, n[0], ["auto"]),
                        2 === n.length && i.alt("lineAlign", n[1], ["start", Xe, "end"]);
                        break;
                    case "position":
                        n = e.split(","),
                        i.percent(t, n[0]),
                        2 === n.length && i.alt("positionAlign", n[1], ["start", Xe, "end", "line-left", "line-right", "auto"]);
                        break;
                    case "size":
                        i.percent(t, e);
                        break;
                    case "align":
                        i.alt(t, e, ["start", Xe, "end", "left", "right"])
                    }
                }
                ), /:/, /\s/),
                e.region = i.get("region", null),
                e.vertical = i.get("vertical", "");
                var n = i.get("line", "auto");
                "auto" === n && -1 === Qe.line && (n = -1),
                e.line = n,
                e.lineAlign = i.get("lineAlign", "start"),
                e.snapToLines = i.get("snapToLines", !0),
                e.size = i.get("size", 100),
                e.align = i.get("align", Xe);
                var a = i.get("position", "auto");
                "auto" === a && 50 === Qe.position && (a = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50),
                e.position = a
            }(t, e)
        }
        function qe(t) {
            return t.replace(/<br(?: \/)?>/gi, "\n")
        }
        var ze = function() {
            function t() {
                this.state = "INITIAL",
                this.buffer = "",
                this.decoder = new Ke,
                this.regionList = [],
                this.cue = null,
                this.oncue = void 0,
                this.onparsingerror = void 0,
                this.onflush = void 0
            }
            var e = t.prototype;
            return e.parse = function(t) {
                var e = this;
                function r() {
                    var t = e.buffer
                      , r = 0;
                    for (t = qe(t); r < t.length && "\r" !== t[r] && "\n" !== t[r]; )
                        ++r;
                    var i = t.substr(0, r);
                    return "\r" === t[r] && ++r,
                    "\n" === t[r] && ++r,
                    e.buffer = t.substr(r),
                    i
                }
                t && (e.buffer += e.decoder.decode(t, {
                    stream: !0
                }));
                try {
                    var i = "";
                    if ("INITIAL" === e.state) {
                        if (!/\r\n|\n/.test(e.buffer))
                            return this;
                        var n = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                        if (!n || !n[0])
                            throw new Error("Malformed WebVTT signature.");
                        e.state = "HEADER"
                    }
                    for (var a = !1; e.buffer; ) {
                        if (!/\r\n|\n/.test(e.buffer))
                            return this;
                        switch (a ? a = !1 : i = r(),
                        e.state) {
                        case "HEADER":
                            /:/.test(i) ? We(i, (function(t, e) {}
                            ), /:/) : i || (e.state = "ID");
                            continue;
                        case "NOTE":
                            i || (e.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(i)) {
                                e.state = "NOTE";
                                break
                            }
                            if (!i)
                                continue;
                            if (e.cue = new je(0,0,""),
                            e.state = "CUE",
                            -1 === i.indexOf("--\x3e")) {
                                e.cue.id = i;
                                continue
                            }
                        case "CUE":
                            if (!e.cue) {
                                e.state = "BADCUE";
                                continue
                            }
                            try {
                                Ye(i, e.cue, e.regionList)
                            } catch (t) {
                                e.cue = null,
                                e.state = "BADCUE";
                                continue
                            }
                            e.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var s = -1 !== i.indexOf("--\x3e");
                            if (!i || s && (a = !0)) {
                                e.oncue && e.cue && e.oncue(e.cue),
                                e.cue = null,
                                e.state = "ID";
                                continue
                            }
                            if (null === e.cue)
                                continue;
                            e.cue.text && (e.cue.text += "\n"),
                            e.cue.text += i;
                            continue;
                        case "BADCUE":
                            i || (e.state = "ID")
                        }
                    }
                } catch (t) {
                    "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue),
                    e.cue = null,
                    e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            }
            ,
            e.flush = function() {
                try {
                    if ((this.cue || "HEADER" === this.state) && (this.buffer += "\n\n",
                    this.parse()),
                    "INITIAL" === this.state || "BADWEBVTT" === this.state)
                        throw new Error("Malformed WebVTT signature.")
                } catch (t) {
                    this.onparsingerror && this.onparsingerror(t)
                }
                return this.onflush && this.onflush(),
                this
            }
            ,
            t
        }()
          , Ze = r(9)
          , $e = r(13)
          , tr = /\r\n|\n\r|\n|\r/g
          , er = function(t, e, r) {
            return void 0 === r && (r = 0),
            t.substr(r, e.length) === e
        }
          , rr = function(t) {
            for (var e = 5381, r = t.length; r; )
                e = 33 * e ^ t.charCodeAt(--r);
            return (e >>> 0).toString()
        };
        function ir(t, e, r) {
            return rr(t.toString()) + rr(e.toString()) + rr(r)
        }
        function nr(t, e, r, i, a, s, o, l) {
            var u, h = new ze, d = Object(F.f)(new Uint8Array(t)).trim().replace(tr, "\n").split("\n"), c = [], f = Object(Ze.a)(e, r), g = "00:00.000", v = 0, p = 0, m = !0;
            h.oncue = function(t) {
                var e = i[a]
                  , r = i.ccOffset
                  , n = (v - f) / 9e4;
                null != e && e.new && (void 0 !== p ? r = i.ccOffset = e.start : function(t, e, r) {
                    var i = t[e]
                      , n = t[i.prevCC];
                    if (!n || !n.new && i.new)
                        return t.ccOffset = t.presentationOffset = i.start,
                        void (i.new = !1);
                    for (; null !== (a = n) && void 0 !== a && a.new; ) {
                        var a;
                        t.ccOffset += i.start - n.start,
                        i.new = !1,
                        n = t[(i = n).prevCC]
                    }
                    t.presentationOffset = r
                }(i, a, n)),
                n && (r = n - i.presentationOffset);
                var o = t.endTime - t.startTime
                  , l = Object($e.d)(9e4 * (t.startTime + r - p), 9e4 * s) / 9e4;
                t.startTime = l,
                t.endTime = l + o;
                var u = t.text.trim();
                t.text = decodeURIComponent(encodeURIComponent(u)),
                t.id || (t.id = ir(t.startTime, t.endTime, u)),
                t.endTime > 0 && c.push(t)
            }
            ,
            h.onparsingerror = function(t) {
                u = t
            }
            ,
            h.onflush = function() {
                u ? l(u) : o(c)
            }
            ,
            d.forEach((function(t) {
                if (m) {
                    if (er(t, "X-TIMESTAMP-MAP=")) {
                        m = !1,
                        t.substr(16).split(",").forEach((function(t) {
                            er(t, "LOCAL:") ? g = t.substr(6) : er(t, "MPEGTS:") && (v = parseInt(t.substr(7)))
                        }
                        ));
                        try {
                            p = function(t) {
                                var e = parseInt(t.substr(-3))
                                  , r = parseInt(t.substr(-6, 2))
                                  , i = parseInt(t.substr(-9, 2))
                                  , a = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                                if (!(Object(n.isFiniteNumber)(e) && Object(n.isFiniteNumber)(r) && Object(n.isFiniteNumber)(i) && Object(n.isFiniteNumber)(a)))
                                    throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
                                return e += 1e3 * r,
                                e += 6e4 * i,
                                e += 36e5 * a
                            }(g) / 1e3
                        } catch (t) {
                            u = t
                        }
                        return
                    }
                    "" === t && (m = !1)
                }
                h.parse(t + "\n")
            }
            )),
            h.flush()
        }
        function ar() {
            return (ar = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var sr = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/
          , or = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/
          , lr = {
            left: "start",
            center: "center",
            right: "end",
            start: "start",
            end: "end"
        };
        function ur(t, e, r, i, n) {
            var a = Object(l.c)(new Uint8Array(t), ["mdat"]);
            if (0 !== a.length) {
                var s = a.map((function(t) {
                    return Object(F.f)(t)
                }
                ))
                  , o = Object(Ze.c)(e, 1, r);
                try {
                    s.forEach((function(t) {
                        return i(function(t, e) {
                            var r = (new DOMParser).parseFromString(t, "text/xml").getElementsByTagName("tt")[0];
                            if (!r)
                                throw new Error("Invalid ttml");
                            var i = {
                                frameRate: 30,
                                subFrameRate: 1,
                                frameRateMultiplier: 0,
                                tickRate: 0
                            }
                              , n = Object.keys(i).reduce((function(t, e) {
                                return t[e] = r.getAttribute("ttp:" + e) || i[e],
                                t
                            }
                            ), {})
                              , a = "preserve" !== r.getAttribute("xml:space")
                              , s = dr(hr(r, "styling", "style"))
                              , o = dr(hr(r, "layout", "region"))
                              , l = hr(r, "body", "[begin]");
                            return [].map.call(l, (function(t) {
                                var r = function t(e, r) {
                                    return [].slice.call(e.childNodes).reduce((function(e, i, n) {
                                        var a;
                                        return "br" === i.nodeName && n ? e + "\n" : null !== (a = i.childNodes) && void 0 !== a && a.length ? t(i, r) : r ? e + i.textContent.trim().replace(/\s+/g, " ") : e + i.textContent
                                    }
                                    ), "")
                                }(t, a);
                                if (!r || !t.hasAttribute("begin"))
                                    return null;
                                var i = gr(t.getAttribute("begin"), n)
                                  , l = gr(t.getAttribute("dur"), n)
                                  , u = gr(t.getAttribute("end"), n);
                                if (null === i)
                                    throw fr(t);
                                if (null === u) {
                                    if (null === l)
                                        throw fr(t);
                                    u = i + l
                                }
                                var h = new je(i - e,u - e,r);
                                h.id = ir(h.startTime, h.endTime, h.text);
                                var d = o[t.getAttribute("region")]
                                  , c = s[t.getAttribute("style")];
                                h.position = 10,
                                h.size = 80;
                                var f = function(t, e, r) {
                                    var i = "http://www.w3.org/ns/ttml#styling"
                                      , n = null
                                      , a = null != t && t.hasAttribute("style") ? t.getAttribute("style") : null;
                                    a && r.hasOwnProperty(a) && (n = r[a]);
                                    return ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((function(r, a) {
                                        var s = cr(e, i, a) || cr(t, i, a) || cr(n, i, a);
                                        return s && (r[a] = s),
                                        r
                                    }
                                    ), {})
                                }(d, c, s)
                                  , g = f.textAlign;
                                if (g) {
                                    var v = lr[g];
                                    v && (h.lineAlign = v),
                                    h.align = g
                                }
                                return ar(h, f),
                                h
                            }
                            )).filter((function(t) {
                                return null !== t
                            }
                            ))
                        }(t, o))
                    }
                    ))
                } catch (t) {
                    n(t)
                }
            } else
                n(new Error("Could not parse IMSC1 mdat"))
        }
        function hr(t, e, r) {
            var i = t.getElementsByTagName(e)[0];
            return i ? [].slice.call(i.querySelectorAll(r)) : []
        }
        function dr(t) {
            return t.reduce((function(t, e) {
                var r = e.getAttribute("xml:id");
                return r && (t[r] = e),
                t
            }
            ), {})
        }
        function cr(t, e, r) {
            return t && t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null
        }
        function fr(t) {
            return new Error("Could not parse ttml timestamp " + t)
        }
        function gr(t, e) {
            if (!t)
                return null;
            var r = He(t);
            return null === r && (sr.test(t) ? r = function(t, e) {
                var r = sr.exec(t)
                  , i = (0 | r[4]) + (0 | r[5]) / e.subFrameRate;
                return 3600 * (0 | r[1]) + 60 * (0 | r[2]) + (0 | r[3]) + i / e.frameRate
            }(t, e) : or.test(t) && (r = function(t, e) {
                var r = or.exec(t)
                  , i = Number(r[1]);
                switch (r[2]) {
                case "h":
                    return 3600 * i;
                case "m":
                    return 60 * i;
                case "ms":
                    return 1e3 * i;
                case "f":
                    return i / e.frameRate;
                case "t":
                    return i / e.tickRate
                }
                return i
            }(t, e))),
            r
        }
        var vr = function() {
            function t(t) {
                if (this.hls = void 0,
                this.media = null,
                this.config = void 0,
                this.enabled = !0,
                this.Cues = void 0,
                this.textTracks = [],
                this.tracks = [],
                this.initPTS = [],
                this.timescale = [],
                this.unparsedVttFrags = [],
                this.captionsTracks = {},
                this.nonNativeCaptionsTracks = {},
                this.cea608Parser1 = void 0,
                this.cea608Parser2 = void 0,
                this.lastSn = -1,
                this.lastPartIndex = -1,
                this.prevCC = -1,
                this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {
                        start: 0,
                        prevCC: -1,
                        new: !1
                    }
                },
                this.captionsProperties = void 0,
                this.hls = t,
                this.config = t.config,
                this.Cues = t.config.cueHandler,
                this.captionsProperties = {
                    textTrack1: {
                        label: this.config.captionsTextTrack1Label,
                        languageCode: this.config.captionsTextTrack1LanguageCode
                    },
                    textTrack2: {
                        label: this.config.captionsTextTrack2Label,
                        languageCode: this.config.captionsTextTrack2LanguageCode
                    },
                    textTrack3: {
                        label: this.config.captionsTextTrack3Label,
                        languageCode: this.config.captionsTextTrack3LanguageCode
                    },
                    textTrack4: {
                        label: this.config.captionsTextTrack4Label,
                        languageCode: this.config.captionsTextTrack4LanguageCode
                    }
                },
                this.config.enableCEA708Captions) {
                    var e = new Ge(this,"textTrack1")
                      , r = new Ge(this,"textTrack2")
                      , i = new Ge(this,"textTrack3")
                      , n = new Ge(this,"textTrack4");
                    this.cea608Parser1 = new Ve(1,e,r),
                    this.cea608Parser2 = new Ve(3,i,n)
                }
                t.on(a.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.on(a.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                t.on(a.Events.FRAG_LOADING, this.onFragLoading, this),
                t.on(a.Events.FRAG_LOADED, this.onFragLoaded, this),
                t.on(a.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                t.on(a.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
                t.on(a.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.on(a.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                t.on(a.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }
            var e = t.prototype;
            return e.destroy = function() {
                var t = this.hls;
                t.off(a.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.off(a.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                t.off(a.Events.FRAG_LOADING, this.onFragLoading, this),
                t.off(a.Events.FRAG_LOADED, this.onFragLoaded, this),
                t.off(a.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                t.off(a.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
                t.off(a.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.off(a.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                t.off(a.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
            }
            ,
            e.addCues = function(t, e, r, i, n) {
                for (var s, o, l, u, h = !1, d = n.length; d--; ) {
                    var c = n[d]
                      , f = (s = c[0],
                    o = c[1],
                    l = e,
                    u = r,
                    Math.min(o, u) - Math.max(s, l));
                    if (f >= 0 && (c[0] = Math.min(c[0], e),
                    c[1] = Math.max(c[1], r),
                    h = !0,
                    f / (r - e) > .5))
                        return
                }
                if (h || n.push([e, r]),
                this.config.renderTextTracksNatively) {
                    var g = this.captionsTracks[t];
                    this.Cues.newCue(g, e, r, i)
                } else {
                    var v = this.Cues.newCue(null, e, r, i);
                    this.hls.trigger(a.Events.CUES_PARSED, {
                        type: "captions",
                        cues: v,
                        track: t
                    })
                }
            }
            ,
            e.onInitPtsFound = function(t, e) {
                var r = this
                  , i = e.frag
                  , n = e.id
                  , s = e.initPTS
                  , o = e.timescale
                  , l = this.unparsedVttFrags;
                "main" === n && (this.initPTS[i.cc] = s,
                this.timescale[i.cc] = o),
                l.length && (this.unparsedVttFrags = [],
                l.forEach((function(t) {
                    r.onFragLoaded(a.Events.FRAG_LOADED, t)
                }
                )))
            }
            ,
            e.getExistingTrack = function(t) {
                var e = this.media;
                if (e)
                    for (var r = 0; r < e.textTracks.length; r++) {
                        var i = e.textTracks[r];
                        if (i[t])
                            return i
                    }
                return null
            }
            ,
            e.createCaptionsTrack = function(t) {
                this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
            }
            ,
            e.createNativeTrack = function(t) {
                if (!this.captionsTracks[t]) {
                    var e = this.captionsProperties
                      , r = this.captionsTracks
                      , i = this.media
                      , n = e[t]
                      , a = n.label
                      , s = n.languageCode
                      , o = this.getExistingTrack(t);
                    if (o)
                        r[t] = o,
                        P(r[t]),
                        O(r[t], i);
                    else {
                        var l = this.createTextTrack("captions", a, s);
                        l && (l[t] = !0,
                        r[t] = l)
                    }
                }
            }
            ,
            e.createNonNativeTrack = function(t) {
                if (!this.nonNativeCaptionsTracks[t]) {
                    var e = this.captionsProperties[t];
                    if (e) {
                        var r = {
                            _id: t,
                            label: e.label,
                            kind: "captions",
                            default: !!e.media && !!e.media.default,
                            closedCaptions: e.media
                        };
                        this.nonNativeCaptionsTracks[t] = r,
                        this.hls.trigger(a.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                            tracks: [r]
                        })
                    }
                }
            }
            ,
            e.createTextTrack = function(t, e, r) {
                var i = this.media;
                if (i)
                    return i.addTextTrack(t, e, r)
            }
            ,
            e.onMediaAttaching = function(t, e) {
                this.media = e.media,
                this._cleanTracks()
            }
            ,
            e.onMediaDetaching = function() {
                var t = this.captionsTracks;
                Object.keys(t).forEach((function(e) {
                    P(t[e]),
                    delete t[e]
                }
                )),
                this.nonNativeCaptionsTracks = {}
            }
            ,
            e.onManifestLoading = function() {
                this.lastSn = -1,
                this.lastPartIndex = -1,
                this.prevCC = -1,
                this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {
                        start: 0,
                        prevCC: -1,
                        new: !1
                    }
                },
                this._cleanTracks(),
                this.tracks = [],
                this.captionsTracks = {},
                this.nonNativeCaptionsTracks = {},
                this.textTracks = [],
                this.unparsedVttFrags = this.unparsedVttFrags || [],
                this.initPTS = [],
                this.timescale = [],
                this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(),
                this.cea608Parser2.reset())
            }
            ,
            e._cleanTracks = function() {
                var t = this.media;
                if (t) {
                    var e = t.textTracks;
                    if (e)
                        for (var r = 0; r < e.length; r++)
                            P(e[r])
                }
            }
            ,
            e.onSubtitleTracksUpdated = function(t, e) {
                var r = this;
                this.textTracks = [];
                var i = e.subtitleTracks || []
                  , n = i.some((function(t) {
                    return "stpp.ttml.im1t" === t.textCodec
                }
                ));
                if (this.config.enableWebVTT || n && this.config.enableIMSC1) {
                    var s = this.tracks && i && this.tracks.length === i.length;
                    if (this.tracks = i || [],
                    this.config.renderTextTracksNatively) {
                        var o = this.media ? this.media.textTracks : [];
                        this.tracks.forEach((function(t, e) {
                            var i;
                            if (e < o.length) {
                                for (var n = null, a = 0; a < o.length; a++)
                                    if (pr(o[a], t)) {
                                        n = o[a];
                                        break
                                    }
                                n && (i = n)
                            }
                            i ? P(i) : (i = r.createTextTrack("subtitles", t.name, t.lang)) && (i.mode = "disabled"),
                            i && (i.groupId = t.groupId,
                            r.textTracks.push(i))
                        }
                        ))
                    } else if (!s && this.tracks && this.tracks.length) {
                        var l = this.tracks.map((function(t) {
                            return {
                                label: t.name,
                                kind: t.type.toLowerCase(),
                                default: t.default,
                                subtitleTrack: t
                            }
                        }
                        ));
                        this.hls.trigger(a.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                            tracks: l
                        })
                    }
                }
            }
            ,
            e.onManifestLoaded = function(t, e) {
                var r = this;
                this.config.enableCEA708Captions && e.captions && e.captions.forEach((function(t) {
                    var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                    if (e) {
                        var i = "textTrack" + e[1]
                          , n = r.captionsProperties[i];
                        n && (n.label = t.name,
                        t.lang && (n.languageCode = t.lang),
                        n.media = t)
                    }
                }
                ))
            }
            ,
            e.onFragLoading = function(t, e) {
                var r = this.cea608Parser1
                  , i = this.cea608Parser2
                  , n = this.lastSn
                  , a = this.lastPartIndex;
                if (this.enabled && r && i && e.frag.type === k.b.MAIN) {
                    var s, o, l = e.frag.sn, u = null != (s = null == e || null === (o = e.part) || void 0 === o ? void 0 : o.index) ? s : -1;
                    l === n + 1 || l === n && u === a + 1 || (r.reset(),
                    i.reset()),
                    this.lastSn = l,
                    this.lastPartIndex = u
                }
            }
            ,
            e.onFragLoaded = function(t, e) {
                var r = e.frag
                  , i = e.payload
                  , s = this.initPTS
                  , o = this.unparsedVttFrags;
                if (r.type === k.b.SUBTITLE)
                    if (i.byteLength) {
                        if (!Object(n.isFiniteNumber)(s[r.cc]))
                            return o.push(e),
                            void (s.length && this.hls.trigger(a.Events.SUBTITLE_FRAG_PROCESSED, {
                                success: !1,
                                frag: r,
                                error: new Error("Missing initial subtitle PTS")
                            }));
                        var l = r.decryptdata
                          , u = "stats"in e;
                        if (null == l || null == l.key || "AES-128" !== l.method || u) {
                            var h = this.tracks[r.level]
                              , d = this.vttCCs;
                            d[r.cc] || (d[r.cc] = {
                                start: r.start,
                                prevCC: this.prevCC,
                                new: !0
                            },
                            this.prevCC = r.cc),
                            h && "stpp.ttml.im1t" === h.textCodec ? this._parseIMSC1(r, i) : this._parseVTTs(r, i, d)
                        }
                    } else
                        this.hls.trigger(a.Events.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: r,
                            error: new Error("Empty subtitle payload")
                        })
            }
            ,
            e._parseIMSC1 = function(t, e) {
                var r = this
                  , i = this.hls;
                ur(e, this.initPTS[t.cc], this.timescale[t.cc], (function(e) {
                    r._appendCues(e, t.level),
                    i.trigger(a.Events.SUBTITLE_FRAG_PROCESSED, {
                        success: !0,
                        frag: t
                    })
                }
                ), (function(e) {
                    o.logger.log("Failed to parse IMSC1: " + e),
                    i.trigger(a.Events.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: t,
                        error: e
                    })
                }
                ))
            }
            ,
            e._parseVTTs = function(t, e, r) {
                var i = this
                  , n = this.hls;
                nr(e, this.initPTS[t.cc], this.timescale[t.cc], r, t.cc, t.start, (function(e) {
                    i._appendCues(e, t.level),
                    n.trigger(a.Events.SUBTITLE_FRAG_PROCESSED, {
                        success: !0,
                        frag: t
                    })
                }
                ), (function(r) {
                    i._fallbackToIMSC1(t, e),
                    o.logger.log("Failed to parse VTT cue: " + r),
                    n.trigger(a.Events.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: t,
                        error: r
                    })
                }
                ))
            }
            ,
            e._fallbackToIMSC1 = function(t, e) {
                var r = this
                  , i = this.tracks[t.level];
                i.textCodec || ur(e, this.initPTS[t.cc], this.timescale[t.cc], (function() {
                    i.textCodec = "stpp.ttml.im1t",
                    r._parseIMSC1(t, e)
                }
                ), (function() {
                    i.textCodec = "wvtt"
                }
                ))
            }
            ,
            e._appendCues = function(t, e) {
                var r = this.hls;
                if (this.config.renderTextTracksNatively) {
                    var i = this.textTracks[e];
                    if ("disabled" === i.mode)
                        return;
                    t.forEach((function(t) {
                        return x(i, t)
                    }
                    ))
                } else {
                    var n = this.tracks[e].default ? "default" : "subtitles" + e;
                    r.trigger(a.Events.CUES_PARSED, {
                        type: "subtitles",
                        cues: t,
                        track: n
                    })
                }
            }
            ,
            e.onFragDecrypted = function(t, e) {
                var r = e.frag;
                if (r.type === k.b.SUBTITLE) {
                    if (!Object(n.isFiniteNumber)(this.initPTS[r.cc]))
                        return void this.unparsedVttFrags.push(e);
                    this.onFragLoaded(a.Events.FRAG_LOADED, e)
                }
            }
            ,
            e.onSubtitleTracksCleared = function() {
                this.tracks = [],
                this.captionsTracks = {}
            }
            ,
            e.onFragParsingUserdata = function(t, e) {
                var r = this.cea608Parser1
                  , i = this.cea608Parser2;
                if (this.enabled && r && i)
                    for (var n = 0; n < e.samples.length; n++) {
                        var a = e.samples[n].bytes;
                        if (a) {
                            var s = this.extractCea608Data(a);
                            r.addData(e.samples[n].pts, s[0]),
                            i.addData(e.samples[n].pts, s[1])
                        }
                    }
            }
            ,
            e.onBufferFlushing = function(t, e) {
                var r = e.startOffset
                  , i = e.endOffset
                  , n = e.endOffsetSubtitles
                  , a = e.type
                  , s = this.media;
                if (s && !(s.currentTime < i)) {
                    if (!a || "video" === a) {
                        var o = this.captionsTracks;
                        Object.keys(o).forEach((function(t) {
                            return M(o[t], r, i)
                        }
                        ))
                    }
                    if (this.config.renderTextTracksNatively && 0 === r && void 0 !== n) {
                        var l = this.textTracks;
                        Object.keys(l).forEach((function(t) {
                            return M(l[t], r, n)
                        }
                        ))
                    }
                }
            }
            ,
            e.extractCea608Data = function(t) {
                for (var e = [[], []], r = 31 & t[0], i = 2, n = 0; n < r; n++) {
                    var a = t[i++]
                      , s = 127 & t[i++]
                      , o = 127 & t[i++];
                    if (0 !== s || 0 !== o)
                        if (0 != (4 & a)) {
                            var l = 3 & a;
                            0 !== l && 1 !== l || (e[l].push(s),
                            e[l].push(o))
                        }
                }
                return e
            }
            ,
            t
        }();
        function pr(t, e) {
            return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
        }
        function mr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var Er, yr = function() {
            function t(t) {
                this.autoLevelCapping = void 0,
                this.firstLevel = void 0,
                this.media = void 0,
                this.restrictedLevels = void 0,
                this.timer = void 0,
                this.hls = void 0,
                this.streamController = void 0,
                this.clientRect = void 0,
                this.hls = t,
                this.autoLevelCapping = Number.POSITIVE_INFINITY,
                this.firstLevel = -1,
                this.media = null,
                this.restrictedLevels = [],
                this.timer = void 0,
                this.clientRect = null,
                this.registerListeners()
            }
            var e, r, i, n = t.prototype;
            return n.setStreamController = function(t) {
                this.streamController = t
            }
            ,
            n.destroy = function() {
                this.unregisterListener(),
                this.hls.config.capLevelToPlayerSize && this.stopCapping(),
                this.media = null,
                this.clientRect = null,
                this.hls = this.streamController = null
            }
            ,
            n.registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                t.on(a.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.on(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.on(a.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
            }
            ,
            n.unregisterListener = function() {
                var t = this.hls;
                t.off(a.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                t.off(a.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.off(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.off(a.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
            }
            ,
            n.onFpsDropLevelCapping = function(e, r) {
                t.isLevelAllowed(r.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(r.droppedLevel)
            }
            ,
            n.onMediaAttaching = function(t, e) {
                this.media = e.media instanceof HTMLVideoElement ? e.media : null
            }
            ,
            n.onManifestParsed = function(t, e) {
                var r = this.hls;
                this.restrictedLevels = [],
                this.firstLevel = e.firstLevel,
                r.config.capLevelToPlayerSize && e.video && this.startCapping()
            }
            ,
            n.onBufferCodecs = function(t, e) {
                this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
            }
            ,
            n.onMediaDetaching = function() {
                this.stopCapping()
            }
            ,
            n.detectPlayerSize = function() {
                if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                    var t = this.hls.levels;
                    if (t.length) {
                        var e = this.hls;
                        e.autoLevelCapping = this.getMaxLevel(t.length - 1),
                        e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(),
                        this.autoLevelCapping = e.autoLevelCapping
                    }
                }
            }
            ,
            n.getMaxLevel = function(e) {
                var r = this
                  , i = this.hls.levels;
                if (!i.length)
                    return -1;
                var n = i.filter((function(i, n) {
                    return t.isLevelAllowed(n, r.restrictedLevels) && n <= e
                }
                ));
                return this.clientRect = null,
                t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
            }
            ,
            n.startCapping = function() {
                this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY,
                this.hls.firstLevel = this.getMaxLevel(this.firstLevel),
                self.clearInterval(this.timer),
                this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3),
                this.detectPlayerSize())
            }
            ,
            n.stopCapping = function() {
                this.restrictedLevels = [],
                this.firstLevel = -1,
                this.autoLevelCapping = Number.POSITIVE_INFINITY,
                this.timer && (self.clearInterval(this.timer),
                this.timer = void 0)
            }
            ,
            n.getDimensions = function() {
                if (this.clientRect)
                    return this.clientRect;
                var t = this.media
                  , e = {
                    width: 0,
                    height: 0
                };
                if (t) {
                    var r = t.getBoundingClientRect();
                    e.width = r.width,
                    e.height = r.height,
                    e.width || e.height || (e.width = r.right - r.left || t.width || 0,
                    e.height = r.bottom - r.top || t.height || 0)
                }
                return this.clientRect = e,
                e
            }
            ,
            t.isLevelAllowed = function(t, e) {
                return void 0 === e && (e = []),
                -1 === e.indexOf(t)
            }
            ,
            t.getMaxLevelByMediaSize = function(t, e, r) {
                if (!t || !t.length)
                    return -1;
                for (var i, n, a = t.length - 1, s = 0; s < t.length; s += 1) {
                    var o = t[s];
                    if ((o.width >= e || o.height >= r) && (i = o,
                    !(n = t[s + 1]) || i.width !== n.width || i.height !== n.height)) {
                        a = s;
                        break
                    }
                }
                return a
            }
            ,
            e = t,
            (r = [{
                key: "mediaWidth",
                get: function() {
                    return this.getDimensions().width * this.contentScaleFactor
                }
            }, {
                key: "mediaHeight",
                get: function() {
                    return this.getDimensions().height * this.contentScaleFactor
                }
            }, {
                key: "contentScaleFactor",
                get: function() {
                    var t = 1;
                    if (!this.hls.config.ignoreDevicePixelRatio)
                        try {
                            t = self.devicePixelRatio
                        } catch (t) {}
                    return t
                }
            }]) && mr(e.prototype, r),
            i && mr(e, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }(), Tr = function() {
            function t(t) {
                this.hls = void 0,
                this.isVideoPlaybackQualityAvailable = !1,
                this.timer = void 0,
                this.media = null,
                this.lastTime = void 0,
                this.lastDroppedFrames = 0,
                this.lastDecodedFrames = 0,
                this.streamController = void 0,
                this.hls = t,
                this.registerListeners()
            }
            var e = t.prototype;
            return e.setStreamController = function(t) {
                this.streamController = t
            }
            ,
            e.registerListeners = function() {
                this.hls.on(a.Events.MEDIA_ATTACHING, this.onMediaAttaching, this)
            }
            ,
            e.unregisterListeners = function() {
                this.hls.off(a.Events.MEDIA_ATTACHING, this.onMediaAttaching)
            }
            ,
            e.destroy = function() {
                this.timer && clearInterval(this.timer),
                this.unregisterListeners(),
                this.isVideoPlaybackQualityAvailable = !1,
                this.media = null
            }
            ,
            e.onMediaAttaching = function(t, e) {
                var r = this.hls.config;
                if (r.capLevelOnFPSDrop) {
                    var i = e.media instanceof self.HTMLVideoElement ? e.media : null;
                    this.media = i,
                    i && "function" == typeof i.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0),
                    self.clearInterval(this.timer),
                    this.timer = self.setInterval(this.checkFPSInterval.bind(this), r.fpsDroppedMonitoringPeriod)
                }
            }
            ,
            e.checkFPS = function(t, e, r) {
                var i = performance.now();
                if (e) {
                    if (this.lastTime) {
                        var n = i - this.lastTime
                          , s = r - this.lastDroppedFrames
                          , l = e - this.lastDecodedFrames
                          , u = 1e3 * s / n
                          , h = this.hls;
                        if (h.trigger(a.Events.FPS_DROP, {
                            currentDropped: s,
                            currentDecoded: l,
                            totalDroppedFrames: r
                        }),
                        u > 0 && s > h.config.fpsDroppedMonitoringThreshold * l) {
                            var d = h.currentLevel;
                            o.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d),
                            d > 0 && (-1 === h.autoLevelCapping || h.autoLevelCapping >= d) && (d -= 1,
                            h.trigger(a.Events.FPS_DROP_LEVEL_CAPPING, {
                                level: d,
                                droppedLevel: h.currentLevel
                            }),
                            h.autoLevelCapping = d,
                            this.streamController.nextLevelSwitch())
                        }
                    }
                    this.lastTime = i,
                    this.lastDroppedFrames = r,
                    this.lastDecodedFrames = e
                }
            }
            ,
            e.checkFPSInterval = function() {
                var t = this.media;
                if (t)
                    if (this.isVideoPlaybackQualityAvailable) {
                        var e = t.getVideoPlaybackQuality();
                        this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                    } else
                        this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
            }
            ,
            t
        }();
        !function(t) {
            t.WIDEVINE = "com.widevine.alpha",
            t.PLAYREADY = "com.microsoft.playready"
        }(Er || (Er = {}));
        var Ar = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
        function br(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var Sr, Dr, Rr, Lr = function() {
            function t(t) {
                this.hls = void 0,
                this._widevineLicenseUrl = void 0,
                this._licenseXhrSetup = void 0,
                this._licenseResponseCallback = void 0,
                this._emeEnabled = void 0,
                this._requestMediaKeySystemAccess = void 0,
                this._drmSystemOptions = void 0,
                this._config = void 0,
                this._mediaKeysList = [],
                this._media = null,
                this._hasSetMediaKeys = !1,
                this._requestLicenseFailureCount = 0,
                this.mediaKeysPromise = null,
                this._onMediaEncrypted = this.onMediaEncrypted.bind(this),
                this.hls = t,
                this._config = t.config,
                this._widevineLicenseUrl = this._config.widevineLicenseUrl,
                this._licenseXhrSetup = this._config.licenseXhrSetup,
                this._licenseResponseCallback = this._config.licenseResponseCallback,
                this._emeEnabled = this._config.emeEnabled,
                this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc,
                this._drmSystemOptions = this._config.drmSystemOptions,
                this._registerListeners()
            }
            var e, r, i, n = t.prototype;
            return n.destroy = function() {
                this._unregisterListeners(),
                this.hls = this._onMediaEncrypted = null,
                this._requestMediaKeySystemAccess = null
            }
            ,
            n._registerListeners = function() {
                this.hls.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                this.hls.on(a.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                this.hls.on(a.Events.MANIFEST_PARSED, this.onManifestParsed, this)
            }
            ,
            n._unregisterListeners = function() {
                this.hls.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                this.hls.off(a.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                this.hls.off(a.Events.MANIFEST_PARSED, this.onManifestParsed, this)
            }
            ,
            n.getLicenseServerUrl = function(t) {
                switch (t) {
                case Er.WIDEVINE:
                    if (!this._widevineLicenseUrl)
                        break;
                    return this._widevineLicenseUrl
                }
                throw new Error('no license server URL configured for key-system "' + t + '"')
            }
            ,
            n._attemptKeySystemAccess = function(t, e, r) {
                var i = this
                  , n = function(t, e, r, i) {
                    switch (t) {
                    case Er.WIDEVINE:
                        return function(t, e, r) {
                            var i = {
                                audioCapabilities: [],
                                videoCapabilities: []
                            };
                            return t.forEach((function(t) {
                                i.audioCapabilities.push({
                                    contentType: 'audio/mp4; codecs="' + t + '"',
                                    robustness: r.audioRobustness || ""
                                })
                            }
                            )),
                            e.forEach((function(t) {
                                i.videoCapabilities.push({
                                    contentType: 'video/mp4; codecs="' + t + '"',
                                    robustness: r.videoRobustness || ""
                                })
                            }
                            )),
                            [i]
                        }(e, r, i);
                    default:
                        throw new Error("Unknown key-system: " + t)
                    }
                }(t, e, r, this._drmSystemOptions);
                o.logger.log("Requesting encrypted media key-system access");
                var a = this.requestMediaKeySystemAccess(t, n);
                this.mediaKeysPromise = a.then((function(e) {
                    return i._onMediaKeySystemAccessObtained(t, e)
                }
                )),
                a.catch((function(e) {
                    o.logger.error('Failed to obtain key-system "' + t + '" access:', e)
                }
                ))
            }
            ,
            n._onMediaKeySystemAccessObtained = function(t, e) {
                var r = this;
                o.logger.log('Access for key-system "' + t + '" obtained');
                var i = {
                    mediaKeysSessionInitialized: !1,
                    mediaKeySystemAccess: e,
                    mediaKeySystemDomain: t
                };
                this._mediaKeysList.push(i);
                var n = Promise.resolve().then((function() {
                    return e.createMediaKeys()
                }
                )).then((function(e) {
                    return i.mediaKeys = e,
                    o.logger.log('Media-keys created for key-system "' + t + '"'),
                    r._onMediaKeysCreated(),
                    e
                }
                ));
                return n.catch((function(t) {
                    o.logger.error("Failed to create media-keys:", t)
                }
                )),
                n
            }
            ,
            n._onMediaKeysCreated = function() {
                var t = this;
                this._mediaKeysList.forEach((function(e) {
                    e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(),
                    t._onNewMediaKeySession(e.mediaKeysSession))
                }
                ))
            }
            ,
            n._onNewMediaKeySession = function(t) {
                var e = this;
                o.logger.log("New key-system session " + t.sessionId),
                t.addEventListener("message", (function(r) {
                    e._onKeySessionMessage(t, r.message)
                }
                ), !1)
            }
            ,
            n._onKeySessionMessage = function(t, e) {
                o.logger.log("Got EME message event, creating license request"),
                this._requestLicense(e, (function(e) {
                    o.logger.log("Received license data (length: " + (e ? e.byteLength : e) + "), updating key-session"),
                    t.update(e)
                }
                ))
            }
            ,
            n.onMediaEncrypted = function(t) {
                var e = this;
                if (o.logger.log('Media is encrypted using "' + t.initDataType + '" init data type'),
                !this.mediaKeysPromise)
                    return o.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),
                    void this.hls.trigger(a.Events.ERROR, {
                        type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: s.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                        fatal: !0
                    });
                var r = function(r) {
                    e._media && (e._attemptSetMediaKeys(r),
                    e._generateRequestWithPreferredKeySession(t.initDataType, t.initData))
                };
                this.mediaKeysPromise.then(r).catch(r)
            }
            ,
            n._attemptSetMediaKeys = function(t) {
                if (!this._media)
                    throw new Error("Attempted to set mediaKeys without first attaching a media element");
                if (!this._hasSetMediaKeys) {
                    var e = this._mediaKeysList[0];
                    if (!e || !e.mediaKeys)
                        return o.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
                        void this.hls.trigger(a.Events.ERROR, {
                            type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: s.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                            fatal: !0
                        });
                    o.logger.log("Setting keys for encrypted media"),
                    this._media.setMediaKeys(e.mediaKeys),
                    this._hasSetMediaKeys = !0
                }
            }
            ,
            n._generateRequestWithPreferredKeySession = function(t, e) {
                var r = this
                  , i = this._mediaKeysList[0];
                if (!i)
                    return o.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
                    void this.hls.trigger(a.Events.ERROR, {
                        type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: s.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                if (i.mediaKeysSessionInitialized)
                    o.logger.warn("Key-Session already initialized but requested again");
                else {
                    var n = i.mediaKeysSession;
                    if (!n)
                        return o.logger.error("Fatal: Media is encrypted but no key-session existing"),
                        void this.hls.trigger(a.Events.ERROR, {
                            type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: s.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                            fatal: !0
                        });
                    if (!e)
                        return o.logger.warn("Fatal: initData required for generating a key session is null"),
                        void this.hls.trigger(a.Events.ERROR, {
                            type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: s.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                            fatal: !0
                        });
                    o.logger.log('Generating key-session request for "' + t + '" init data type'),
                    i.mediaKeysSessionInitialized = !0,
                    n.generateRequest(t, e).then((function() {
                        o.logger.debug("Key-session generation succeeded")
                    }
                    )).catch((function(t) {
                        o.logger.error("Error generating key-session request:", t),
                        r.hls.trigger(a.Events.ERROR, {
                            type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: s.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                            fatal: !1
                        })
                    }
                    ))
                }
            }
            ,
            n._createLicenseXhr = function(t, e, r) {
                var i = new XMLHttpRequest;
                i.responseType = "arraybuffer",
                i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, t, e, r);
                var n = this._licenseXhrSetup;
                if (n)
                    try {
                        n.call(this.hls, i, t),
                        n = void 0
                    } catch (t) {
                        o.logger.error(t)
                    }
                try {
                    i.readyState || i.open("POST", t, !0),
                    n && n.call(this.hls, i, t)
                } catch (t) {
                    throw new Error("issue setting up KeySystem license XHR " + t)
                }
                return i
            }
            ,
            n._onLicenseRequestReadyStageChange = function(t, e, r, i) {
                switch (t.readyState) {
                case 4:
                    if (200 === t.status) {
                        this._requestLicenseFailureCount = 0,
                        o.logger.log("License request succeeded");
                        var n = t.response
                          , l = this._licenseResponseCallback;
                        if (l)
                            try {
                                n = l.call(this.hls, t, e)
                            } catch (t) {
                                o.logger.error(t)
                            }
                        i(n)
                    } else {
                        if (o.logger.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"),
                        this._requestLicenseFailureCount++,
                        this._requestLicenseFailureCount > 3)
                            return void this.hls.trigger(a.Events.ERROR, {
                                type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: s.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0
                            });
                        var u = 3 - this._requestLicenseFailureCount + 1;
                        o.logger.warn("Retrying license request, " + u + " attempts left"),
                        this._requestLicense(r, i)
                    }
                }
            }
            ,
            n._generateLicenseRequestChallenge = function(t, e) {
                switch (t.mediaKeySystemDomain) {
                case Er.WIDEVINE:
                    return e
                }
                throw new Error("unsupported key-system: " + t.mediaKeySystemDomain)
            }
            ,
            n._requestLicense = function(t, e) {
                o.logger.log("Requesting content license for key-system");
                var r = this._mediaKeysList[0];
                if (!r)
                    return o.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
                    void this.hls.trigger(a.Events.ERROR, {
                        type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: s.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                try {
                    var i = this.getLicenseServerUrl(r.mediaKeySystemDomain)
                      , n = this._createLicenseXhr(i, t, e);
                    o.logger.log("Sending license request to URL: " + i);
                    var l = this._generateLicenseRequestChallenge(r, t);
                    n.send(l)
                } catch (t) {
                    o.logger.error("Failure requesting DRM license: " + t),
                    this.hls.trigger(a.Events.ERROR, {
                        type: s.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: s.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                        fatal: !0
                    })
                }
            }
            ,
            n.onMediaAttached = function(t, e) {
                if (this._emeEnabled) {
                    var r = e.media;
                    this._media = r,
                    r.addEventListener("encrypted", this._onMediaEncrypted)
                }
            }
            ,
            n.onMediaDetached = function() {
                var t = this._media
                  , e = this._mediaKeysList;
                t && (t.removeEventListener("encrypted", this._onMediaEncrypted),
                this._media = null,
                this._mediaKeysList = [],
                Promise.all(e.map((function(t) {
                    if (t.mediaKeysSession)
                        return t.mediaKeysSession.close().catch((function() {}
                        ))
                }
                ))).then((function() {
                    return t.setMediaKeys(null)
                }
                )).catch((function() {}
                )))
            }
            ,
            n.onManifestParsed = function(t, e) {
                if (this._emeEnabled) {
                    var r = e.levels.map((function(t) {
                        return t.audioCodec
                    }
                    )).filter((function(t) {
                        return !!t
                    }
                    ))
                      , i = e.levels.map((function(t) {
                        return t.videoCodec
                    }
                    )).filter((function(t) {
                        return !!t
                    }
                    ));
                    this._attemptKeySystemAccess(Er.WIDEVINE, r, i)
                }
            }
            ,
            e = t,
            (r = [{
                key: "requestMediaKeySystemAccess",
                get: function() {
                    if (!this._requestMediaKeySystemAccess)
                        throw new Error("No requestMediaKeySystemAccess function configured");
                    return this._requestMediaKeySystemAccess
                }
            }]) && br(e.prototype, r),
            i && br(e, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function kr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function Cr(t, e, r) {
            return e && kr(t.prototype, e),
            r && kr(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function _r(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (r)
                return (r = r.call(t)).next.bind(r);
            if (Array.isArray(t) || (r = function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return wr(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return wr(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                r && (t = r);
                var i = 0;
                return function() {
                    return i >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[i++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function wr(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = new Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function Ir() {
            return (Ir = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        !function(t) {
            t.MANIFEST = "m",
            t.AUDIO = "a",
            t.VIDEO = "v",
            t.MUXED = "av",
            t.INIT = "i",
            t.CAPTION = "c",
            t.TIMED_TEXT = "tt",
            t.KEY = "k",
            t.OTHER = "o"
        }(Sr || (Sr = {})),
        function(t) {
            t.DASH = "d",
            t.HLS = "h",
            t.SMOOTH = "s",
            t.OTHER = "o"
        }(Dr || (Dr = {})),
        function(t) {
            t.VOD = "v",
            t.LIVE = "l"
        }(Rr || (Rr = {}));
        var Or = function() {
            function t(e) {
                var r = this;
                this.hls = void 0,
                this.config = void 0,
                this.media = void 0,
                this.sid = void 0,
                this.cid = void 0,
                this.useHeaders = !1,
                this.initialized = !1,
                this.starved = !1,
                this.buffering = !0,
                this.audioBuffer = void 0,
                this.videoBuffer = void 0,
                this.onWaiting = function() {
                    r.initialized && (r.starved = !0),
                    r.buffering = !0
                }
                ,
                this.onPlaying = function() {
                    r.initialized || (r.initialized = !0),
                    r.buffering = !1
                }
                ,
                this.applyPlaylistData = function(t) {
                    try {
                        r.apply(t, {
                            ot: Sr.MANIFEST,
                            su: !r.initialized
                        })
                    } catch (t) {
                        o.logger.warn("Could not generate manifest CMCD data.", t)
                    }
                }
                ,
                this.applyFragmentData = function(t) {
                    try {
                        var e = t.frag
                          , i = r.hls.levels[e.level]
                          , n = r.getObjectType(e)
                          , a = {
                            d: 1e3 * e.duration,
                            ot: n
                        };
                        n !== Sr.VIDEO && n !== Sr.AUDIO && n != Sr.MUXED || (a.br = i.bitrate / 1e3,
                        a.tb = r.getTopBandwidth(n) / 1e3,
                        a.bl = r.getBufferLength(n)),
                        r.apply(t, a)
                    } catch (t) {
                        o.logger.warn("Could not generate segment CMCD data.", t)
                    }
                }
                ,
                this.hls = e;
                var i = this.config = e.config
                  , n = i.cmcd;
                null != n && (i.pLoader = this.createPlaylistLoader(),
                i.fLoader = this.createFragmentLoader(),
                this.sid = n.sessionId || t.uuid(),
                this.cid = n.contentId,
                this.useHeaders = !0 === n.useHeaders,
                this.registerListeners())
            }
            var e = t.prototype;
            return e.registerListeners = function() {
                var t = this.hls;
                t.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.on(a.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                t.on(a.Events.BUFFER_CREATED, this.onBufferCreated, this)
            }
            ,
            e.unregisterListeners = function() {
                var t = this.hls;
                t.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.off(a.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                t.off(a.Events.BUFFER_CREATED, this.onBufferCreated, this),
                this.onMediaDetached()
            }
            ,
            e.destroy = function() {
                this.unregisterListeners(),
                this.hls = this.config = this.audioBuffer = this.videoBuffer = null
            }
            ,
            e.onMediaAttached = function(t, e) {
                this.media = e.media,
                this.media.addEventListener("waiting", this.onWaiting),
                this.media.addEventListener("playing", this.onPlaying)
            }
            ,
            e.onMediaDetached = function() {
                this.media && (this.media.removeEventListener("waiting", this.onWaiting),
                this.media.removeEventListener("playing", this.onPlaying),
                this.media = null)
            }
            ,
            e.onBufferCreated = function(t, e) {
                var r, i;
                this.audioBuffer = null === (r = e.tracks.audio) || void 0 === r ? void 0 : r.buffer,
                this.videoBuffer = null === (i = e.tracks.video) || void 0 === i ? void 0 : i.buffer
            }
            ,
            e.createData = function() {
                var t;
                return {
                    v: 1,
                    sf: Dr.HLS,
                    sid: this.sid,
                    cid: this.cid,
                    pr: null === (t = this.media) || void 0 === t ? void 0 : t.playbackRate,
                    mtp: this.hls.bandwidthEstimate / 1e3
                }
            }
            ,
            e.apply = function(e, r) {
                void 0 === r && (r = {}),
                Ir(r, this.createData());
                var i = r.ot === Sr.INIT || r.ot === Sr.VIDEO || r.ot === Sr.MUXED;
                if (this.starved && i && (r.bs = !0,
                r.su = !0,
                this.starved = !1),
                null == r.su && (r.su = this.buffering),
                this.useHeaders) {
                    var n = t.toHeaders(r);
                    if (!Object.keys(n).length)
                        return;
                    e.headers || (e.headers = {}),
                    Ir(e.headers, n)
                } else {
                    var a = t.toQuery(r);
                    if (!a)
                        return;
                    e.url = t.appendQueryToUri(e.url, a)
                }
            }
            ,
            e.getObjectType = function(t) {
                var e = t.type;
                return "subtitle" === e ? Sr.TIMED_TEXT : "initSegment" === t.sn ? Sr.INIT : "audio" === e ? Sr.AUDIO : "main" === e ? this.hls.audioTracks.length ? Sr.VIDEO : Sr.MUXED : void 0
            }
            ,
            e.getTopBandwidth = function(t) {
                var e, r = 0, i = this.hls;
                if (t === Sr.AUDIO)
                    e = i.audioTracks;
                else {
                    var n = i.maxAutoLevel
                      , a = n > -1 ? n + 1 : i.levels.length;
                    e = i.levels.slice(0, a)
                }
                for (var s, o = _r(e); !(s = o()).done; ) {
                    var l = s.value;
                    l.bitrate > r && (r = l.bitrate)
                }
                return r > 0 ? r : NaN
            }
            ,
            e.getBufferLength = function(t) {
                var e = this.hls.media
                  , r = t === Sr.AUDIO ? this.audioBuffer : this.videoBuffer;
                return r && e ? 1e3 * lt.BufferHelper.bufferInfo(r, e.currentTime, this.config.maxBufferHole).len : NaN
            }
            ,
            e.createPlaylistLoader = function() {
                var t = this.config.pLoader
                  , e = this.applyPlaylistData
                  , r = t || this.config.loader;
                return function() {
                    function t(t) {
                        this.loader = void 0,
                        this.loader = new r(t)
                    }
                    var i = t.prototype;
                    return i.destroy = function() {
                        this.loader.destroy()
                    }
                    ,
                    i.abort = function() {
                        this.loader.abort()
                    }
                    ,
                    i.load = function(t, r, i) {
                        e(t),
                        this.loader.load(t, r, i)
                    }
                    ,
                    Cr(t, [{
                        key: "stats",
                        get: function() {
                            return this.loader.stats
                        }
                    }, {
                        key: "context",
                        get: function() {
                            return this.loader.context
                        }
                    }]),
                    t
                }()
            }
            ,
            e.createFragmentLoader = function() {
                var t = this.config.fLoader
                  , e = this.applyFragmentData
                  , r = t || this.config.loader;
                return function() {
                    function t(t) {
                        this.loader = void 0,
                        this.loader = new r(t)
                    }
                    var i = t.prototype;
                    return i.destroy = function() {
                        this.loader.destroy()
                    }
                    ,
                    i.abort = function() {
                        this.loader.abort()
                    }
                    ,
                    i.load = function(t, r, i) {
                        e(t),
                        this.loader.load(t, r, i)
                    }
                    ,
                    Cr(t, [{
                        key: "stats",
                        get: function() {
                            return this.loader.stats
                        }
                    }, {
                        key: "context",
                        get: function() {
                            return this.loader.context
                        }
                    }]),
                    t
                }()
            }
            ,
            t.uuid = function() {
                var t = URL.createObjectURL(new Blob)
                  , e = t.toString();
                return URL.revokeObjectURL(t),
                e.substr(e.lastIndexOf("/") + 1)
            }
            ,
            t.serialize = function(t) {
                for (var e, r = [], i = function(t) {
                    return !Number.isNaN(t) && null != t && "" !== t && !1 !== t
                }, n = function(t) {
                    return Math.round(t)
                }, a = function(t) {
                    return 100 * n(t / 100)
                }, s = {
                    br: n,
                    d: n,
                    bl: a,
                    dl: a,
                    mtp: a,
                    nor: function(t) {
                        return encodeURIComponent(t)
                    },
                    rtp: a,
                    tb: n
                }, o = _r(Object.keys(t || {}).sort()); !(e = o()).done; ) {
                    var l = e.value
                      , u = t[l];
                    if (i(u) && !("v" === l && 1 === u || "pr" == l && 1 === u)) {
                        var h = s[l];
                        h && (u = h(u));
                        var d = typeof u
                          , c = void 0;
                        c = "ot" === l || "sf" === l || "st" === l ? l + "=" + u : "boolean" === d ? l : "number" === d ? l + "=" + u : l + "=" + JSON.stringify(u),
                        r.push(c)
                    }
                }
                return r.join(",")
            }
            ,
            t.toHeaders = function(e) {
                for (var r = {}, i = ["Object", "Request", "Session", "Status"], n = [{}, {}, {}, {}], a = {
                    br: 0,
                    d: 0,
                    ot: 0,
                    tb: 0,
                    bl: 1,
                    dl: 1,
                    mtp: 1,
                    nor: 1,
                    nrr: 1,
                    su: 1,
                    cid: 2,
                    pr: 2,
                    sf: 2,
                    sid: 2,
                    st: 2,
                    v: 2,
                    bs: 3,
                    rtp: 3
                }, s = 0, o = Object.keys(e); s < o.length; s++) {
                    var l = o[s];
                    n[null != a[l] ? a[l] : 1][l] = e[l]
                }
                for (var u = 0; u < n.length; u++) {
                    var h = t.serialize(n[u]);
                    h && (r["CMCD-" + i[u]] = h)
                }
                return r
            }
            ,
            t.toQuery = function(e) {
                return "CMCD=" + encodeURIComponent(t.serialize(e))
            }
            ,
            t.appendQueryToUri = function(t, e) {
                if (!e)
                    return t;
                var r = t.includes("?") ? "&" : "?";
                return "" + t + r + e
            }
            ,
            t
        }()
          , xr = r(14)
          , Pr = /^age:\s*[\d.]+\s*$/m
          , Mr = function() {
            function t(t) {
                this.xhrSetup = void 0,
                this.requestTimeout = void 0,
                this.retryTimeout = void 0,
                this.retryDelay = void 0,
                this.config = null,
                this.callbacks = null,
                this.context = void 0,
                this.loader = null,
                this.stats = void 0,
                this.xhrSetup = t ? t.xhrSetup : null,
                this.stats = new xr.a,
                this.retryDelay = 0
            }
            var e = t.prototype;
            return e.destroy = function() {
                this.callbacks = null,
                this.abortInternal(),
                this.loader = null,
                this.config = null
            }
            ,
            e.abortInternal = function() {
                var t = this.loader;
                self.clearTimeout(this.requestTimeout),
                self.clearTimeout(this.retryTimeout),
                t && (t.onreadystatechange = null,
                t.onprogress = null,
                4 !== t.readyState && (this.stats.aborted = !0,
                t.abort()))
            }
            ,
            e.abort = function() {
                var t;
                this.abortInternal(),
                null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
            }
            ,
            e.load = function(t, e, r) {
                if (this.stats.loading.start)
                    throw new Error("Loader can only be used once.");
                this.stats.loading.start = self.performance.now(),
                this.context = t,
                this.config = e,
                this.callbacks = r,
                this.retryDelay = e.retryDelay,
                this.loadInternal()
            }
            ,
            e.loadInternal = function() {
                var t = this.config
                  , e = this.context;
                if (t) {
                    var r = this.loader = new self.XMLHttpRequest
                      , i = this.stats;
                    i.loading.first = 0,
                    i.loaded = 0;
                    var n = this.xhrSetup;
                    try {
                        if (n)
                            try {
                                n(r, e.url)
                            } catch (t) {
                                r.open("GET", e.url, !0),
                                n(r, e.url)
                            }
                        r.readyState || r.open("GET", e.url, !0);
                        var a = this.context.headers;
                        if (a)
                            for (var s in a)
                                r.setRequestHeader(s, a[s])
                    } catch (t) {
                        return void this.callbacks.onError({
                            code: r.status,
                            text: t.message
                        }, e, r)
                    }
                    e.rangeEnd && r.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)),
                    r.onreadystatechange = this.readystatechange.bind(this),
                    r.onprogress = this.loadprogress.bind(this),
                    r.responseType = e.responseType,
                    self.clearTimeout(this.requestTimeout),
                    this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), t.timeout),
                    r.send()
                }
            }
            ,
            e.readystatechange = function() {
                var t = this.context
                  , e = this.loader
                  , r = this.stats;
                if (t && e) {
                    var i = e.readyState
                      , n = this.config;
                    if (!r.aborted && i >= 2)
                        if (self.clearTimeout(this.requestTimeout),
                        0 === r.loading.first && (r.loading.first = Math.max(self.performance.now(), r.loading.start)),
                        4 === i) {
                            e.onreadystatechange = null,
                            e.onprogress = null;
                            var a = e.status;
                            if (a >= 200 && a < 300) {
                                var s, l;
                                if (r.loading.end = Math.max(self.performance.now(), r.loading.first),
                                l = "arraybuffer" === t.responseType ? (s = e.response).byteLength : (s = e.responseText).length,
                                r.loaded = r.total = l,
                                !this.callbacks)
                                    return;
                                var u = this.callbacks.onProgress;
                                if (u && u(r, t, s, e),
                                !this.callbacks)
                                    return;
                                var h = {
                                    url: e.responseURL,
                                    data: s
                                };
                                this.callbacks.onSuccess(h, r, t, e)
                            } else
                                r.retry >= n.maxRetry || a >= 400 && a < 499 ? (o.logger.error(a + " while loading " + t.url),
                                this.callbacks.onError({
                                    code: a,
                                    text: e.statusText
                                }, t, e)) : (o.logger.warn(a + " while loading " + t.url + ", retrying in " + this.retryDelay + "..."),
                                this.abortInternal(),
                                this.loader = null,
                                self.clearTimeout(this.retryTimeout),
                                this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay),
                                this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay),
                                r.retry++)
                        } else
                            self.clearTimeout(this.requestTimeout),
                            this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.timeout)
                }
            }
            ,
            e.loadtimeout = function() {
                o.logger.warn("timeout while loading " + this.context.url);
                var t = this.callbacks;
                t && (this.abortInternal(),
                t.onTimeout(this.stats, this.context, this.loader))
            }
            ,
            e.loadprogress = function(t) {
                var e = this.stats;
                e.loaded = t.loaded,
                t.lengthComputable && (e.total = t.total)
            }
            ,
            e.getCacheAge = function() {
                var t = null;
                if (this.loader && Pr.test(this.loader.getAllResponseHeaders())) {
                    var e = this.loader.getResponseHeader("age");
                    t = e ? parseFloat(e) : null
                }
                return t
            }
            ,
            t
        }();
        function Fr(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (Fr = function(t) {
                if (null === t || (r = t,
                -1 === Function.toString.call(r).indexOf("[native code]")))
                    return t;
                var r;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, i)
                }
                function i() {
                    return Br(t, arguments, Vr(this).constructor)
                }
                return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Nr(i, t)
            }
            )(t)
        }
        function Br(t, e, r) {
            return (Br = Ur() ? Reflect.construct : function(t, e, r) {
                var i = [null];
                i.push.apply(i, e);
                var n = new (Function.bind.apply(t, i));
                return r && Nr(n, r.prototype),
                n
            }
            ).apply(null, arguments)
        }
        function Ur() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }
        function Nr(t, e) {
            return (Nr = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Vr(t) {
            return (Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function Gr() {
            return (Gr = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var jr = function() {
            function t(t) {
                this.fetchSetup = void 0,
                this.requestTimeout = void 0,
                this.request = void 0,
                this.response = void 0,
                this.controller = void 0,
                this.context = void 0,
                this.config = null,
                this.callbacks = null,
                this.stats = void 0,
                this.loader = null,
                this.fetchSetup = t.fetchSetup || Kr,
                this.controller = new self.AbortController,
                this.stats = new xr.a
            }
            var e = t.prototype;
            return e.destroy = function() {
                this.loader = this.callbacks = null,
                this.abortInternal()
            }
            ,
            e.abortInternal = function() {
                var t = this.response;
                t && t.ok || (this.stats.aborted = !0,
                this.controller.abort())
            }
            ,
            e.abort = function() {
                var t;
                this.abortInternal(),
                null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
            }
            ,
            e.load = function(t, e, r) {
                var i = this
                  , a = this.stats;
                if (a.loading.start)
                    throw new Error("Loader can only be used once.");
                a.loading.start = self.performance.now();
                var s = function(t, e) {
                    var r = {
                        method: "GET",
                        mode: "cors",
                        credentials: "same-origin",
                        signal: e,
                        headers: new self.Headers(Gr({}, t.headers))
                    };
                    t.rangeEnd && r.headers.set("Range", "bytes=" + t.rangeStart + "-" + String(t.rangeEnd - 1));
                    return r
                }(t, this.controller.signal)
                  , o = r.onProgress
                  , l = "arraybuffer" === t.responseType
                  , u = l ? "byteLength" : "length";
                this.context = t,
                this.config = e,
                this.callbacks = r,
                this.request = this.fetchSetup(t, s),
                self.clearTimeout(this.requestTimeout),
                this.requestTimeout = self.setTimeout((function() {
                    i.abortInternal(),
                    r.onTimeout(a, t, i.response)
                }
                ), e.timeout),
                self.fetch(this.request).then((function(r) {
                    if (i.response = i.loader = r,
                    !r.ok) {
                        var s = r.status
                          , u = r.statusText;
                        throw new Hr(u || "fetch, bad network response",s,r)
                    }
                    return a.loading.first = Math.max(self.performance.now(), a.loading.start),
                    a.total = parseInt(r.headers.get("Content-Length") || "0"),
                    o && Object(n.isFiniteNumber)(e.highWaterMark) ? i.loadProgressively(r, a, t, e.highWaterMark, o) : l ? r.arrayBuffer() : r.text()
                }
                )).then((function(s) {
                    var l = i.response;
                    self.clearTimeout(i.requestTimeout),
                    a.loading.end = Math.max(self.performance.now(), a.loading.first),
                    a.loaded = a.total = s[u];
                    var h = {
                        url: l.url,
                        data: s
                    };
                    o && !Object(n.isFiniteNumber)(e.highWaterMark) && o(a, t, s, l),
                    r.onSuccess(h, a, t, l)
                }
                )).catch((function(e) {
                    if (self.clearTimeout(i.requestTimeout),
                    !a.aborted) {
                        var n = e.code || 0;
                        r.onError({
                            code: n,
                            text: e.message
                        }, t, e.details)
                    }
                }
                ))
            }
            ,
            e.getCacheAge = function() {
                var t = null;
                if (this.response) {
                    var e = this.response.headers.get("age");
                    t = e ? parseFloat(e) : null
                }
                return t
            }
            ,
            e.loadProgressively = function(t, e, r, i, n) {
                void 0 === i && (i = 0);
                var a = new oe.a
                  , s = t.body.getReader();
                return function o() {
                    return s.read().then((function(s) {
                        if (s.done)
                            return a.dataLength && n(e, r, a.flush(), t),
                            Promise.resolve(new ArrayBuffer(0));
                        var l = s.value
                          , u = l.length;
                        return e.loaded += u,
                        u < i || a.dataLength ? (a.push(l),
                        a.dataLength >= i && n(e, r, a.flush(), t)) : n(e, r, l, t),
                        o()
                    }
                    )).catch((function() {
                        return Promise.reject()
                    }
                    ))
                }()
            }
            ,
            t
        }();
        function Kr(t, e) {
            return new self.Request(t.url,e)
        }
        var Hr = function(t) {
            var e, r;
            function i(e, r, i) {
                var n;
                return (n = t.call(this, e) || this).code = void 0,
                n.details = void 0,
                n.code = r,
                n.details = i,
                n
            }
            return r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            Nr(e, r),
            i
        }(Fr(Error))
          , Jr = jr
          , Wr = /\s/
          , Qr = {
            newCue: function(t, e, r, i) {
                for (var n, a, s, o, l, u = [], h = self.VTTCue || self.TextTrackCue, d = 0; d < i.rows.length; d++)
                    if (s = !0,
                    o = 0,
                    l = "",
                    !(n = i.rows[d]).isEmpty()) {
                        for (var c = 0; c < n.chars.length; c++)
                            Wr.test(n.chars[c].uchar) && s ? o++ : (l += n.chars[c].uchar,
                            s = !1);
                        n.cueStartTime = e,
                        e === r && (r += 1e-4),
                        o >= 16 ? o-- : o++;
                        var f = qe(l.trim())
                          , g = ir(e, r, f);
                        t && t.cues && t.cues.getCueById(g) || ((a = new h(e,r,f)).id = g,
                        a.line = d + 1,
                        a.align = "left",
                        a.position = 10 + Math.min(80, 10 * Math.floor(8 * o / 32)),
                        u.push(a))
                    }
                return t && u.length && (u.sort((function(t, e) {
                    return "auto" === t.line || "auto" === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line
                }
                )),
                u.forEach((function(e) {
                    return x(t, e)
                }
                ))),
                u
            }
        };
        function Xr() {
            return (Xr = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function Yr(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, i)
            }
            return r
        }
        function qr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Yr(Object(r), !0).forEach((function(e) {
                    zr(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Yr(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function zr(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var Zr = qr(qr({
            autoStartLoad: !0,
            startPosition: -1,
            defaultAudioCodec: void 0,
            debug: !1,
            capLevelOnFPSDrop: !1,
            capLevelToPlayerSize: !1,
            ignoreDevicePixelRatio: !1,
            initialLiveManifestSize: 1,
            maxBufferLength: 30,
            backBufferLength: 1 / 0,
            maxBufferSize: 6e7,
            maxBufferHole: .1,
            overlayKey: void 0,
            overlayIv: void 0,
            highBufferWatchdogPeriod: 2,
            nudgeOffset: .1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: .25,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 1 / 0,
            liveSyncDuration: void 0,
            liveMaxLatencyDuration: void 0,
            maxLiveSyncPlaybackRate: 1,
            liveDurationInfinity: !1,
            liveBackBufferLength: null,
            maxMaxBufferLength: 600,
            enableWorker: !0,
            enableSoftwareAES: !0,
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 1,
            manifestLoadingRetryDelay: 1e3,
            manifestLoadingMaxRetryTimeout: 64e3,
            startLevel: void 0,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 4,
            levelLoadingRetryDelay: 1e3,
            levelLoadingMaxRetryTimeout: 64e3,
            fragLoadingTimeOut: 2e4,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1e3,
            fragLoadingMaxRetryTimeout: 64e3,
            startFragPrefetch: !1,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: .2,
            appendErrorMaxRetry: 3,
            loader: Mr,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            licenseResponseCallback: void 0,
            abrController: se,
            bufferController: Se.a,
            capLevelController: yr,
            fpsController: Tr,
            stretchShortVideoTrack: !1,
            maxAudioFramesDrift: 1,
            forceKeyFrameOnDiscontinuity: !0,
            abrEwmaFastLive: 3,
            abrEwmaSlowLive: 9,
            abrEwmaFastVoD: 3,
            abrEwmaSlowVoD: 9,
            abrEwmaDefaultEstimate: 5e5,
            abrBandWidthFactor: .95,
            abrBandWidthUpFactor: .7,
            abrMaxWithRealBitrate: !1,
            maxStarvationDelay: 4,
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            emeEnabled: !1,
            widevineLicenseUrl: void 0,
            drmSystemOptions: {},
            requestMediaKeySystemAccessFunc: Ar,
            testBandwidth: !0,
            progressive: !1,
            lowLatencyMode: !0,
            cmcd: void 0
        }, {
            cueHandler: Qr,
            enableCEA708Captions: !0,
            enableWebVTT: !0,
            enableIMSC1: !0,
            captionsTextTrack1Label: "English",
            captionsTextTrack1LanguageCode: "en",
            captionsTextTrack2Label: "Spanish",
            captionsTextTrack2LanguageCode: "es",
            captionsTextTrack3Label: "Unknown CC",
            captionsTextTrack3LanguageCode: "",
            captionsTextTrack4Label: "Unknown CC",
            captionsTextTrack4LanguageCode: "",
            renderTextTracksNatively: !0
        }), {}, {
            subtitleStreamController: pe,
            subtitleTrackController: Ae,
            timelineController: vr,
            audioStreamController: he,
            audioTrackController: fe,
            emeController: Lr,
            cmcdController: Or
        });
        function $r(t) {
            var e = t.loader;
            e !== Jr && e !== Mr ? (o.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"),
            t.progressive = !1) : function() {
                if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
                    try {
                        return new self.ReadableStream({}),
                        !0
                    } catch (t) {}
                return !1
            }() && (t.loader = Jr,
            t.progressive = !0,
            t.enableSoftwareAES = !0,
            o.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))
        }
        function ti(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var ei = function() {
            function t(e) {
                void 0 === e && (e = {}),
                this.config = void 0,
                this.userConfig = void 0,
                this.coreComponents = void 0,
                this.networkControllers = void 0,
                this._emitter = new qt.EventEmitter,
                this._autoLevelCapping = void 0,
                this.abrController = void 0,
                this.bufferController = void 0,
                this.capLevelController = void 0,
                this.latencyController = void 0,
                this.levelController = void 0,
                this.streamController = void 0,
                this.audioTrackController = void 0,
                this.subtitleTrackController = void 0,
                this.emeController = void 0,
                this.cmcdController = void 0,
                this._media = null,
                this.url = null;
                var r = this.config = function(t, e) {
                    if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
                        throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                    if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration))
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                    return Xr({}, t, e)
                }(t.DefaultConfig, e);
                this.userConfig = e,
                Object(o.enableLogs)(r.debug),
                this._autoLevelCapping = -1,
                r.progressive && $r(r);
                var i = r.abrController
                  , n = r.bufferController
                  , a = r.capLevelController
                  , s = r.fpsController
                  , l = this.abrController = new i(this)
                  , u = this.bufferController = new n(this)
                  , h = this.capLevelController = new a(this)
                  , d = new s(this)
                  , c = new _(this)
                  , f = new I.a(this)
                  , g = new B(this)
                  , v = this.levelController = new it(this)
                  , p = new nt(this)
                  , m = this.streamController = new re(this,p);
                h.setStreamController(m),
                d.setStreamController(m);
                var E = [v, m];
                this.networkControllers = E;
                var y = [c, f, l, u, h, d, g, p];
                this.audioTrackController = this.createController(r.audioTrackController, null, E),
                this.createController(r.audioStreamController, p, E),
                this.subtitleTrackController = this.createController(r.subtitleTrackController, null, E),
                this.createController(r.subtitleStreamController, p, E),
                this.createController(r.timelineController, null, y),
                this.emeController = this.createController(r.emeController, null, y),
                this.cmcdController = this.createController(r.cmcdController, null, y),
                this.latencyController = this.createController(V, null, y),
                this.coreComponents = y
            }
            t.isSupported = function() {
                return function() {
                    var t = Object(Wt.getMediaSource)();
                    if (!t)
                        return !1;
                    var e = Qt()
                      , r = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                      , i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                    return !!r && !!i
                }()
            }
            ;
            var e, r, n, l = t.prototype;
            return l.createController = function(t, e, r) {
                if (t) {
                    var i = e ? new t(this,e) : new t(this);
                    return r && r.push(i),
                    i
                }
                return null
            }
            ,
            l.on = function(t, e, r) {
                void 0 === r && (r = this),
                this._emitter.on(t, e, r)
            }
            ,
            l.once = function(t, e, r) {
                void 0 === r && (r = this),
                this._emitter.once(t, e, r)
            }
            ,
            l.removeAllListeners = function(t) {
                this._emitter.removeAllListeners(t)
            }
            ,
            l.off = function(t, e, r, i) {
                void 0 === r && (r = this),
                this._emitter.off(t, e, r, i)
            }
            ,
            l.listeners = function(t) {
                return this._emitter.listeners(t)
            }
            ,
            l.emit = function(t, e, r) {
                return this._emitter.emit(t, e, r)
            }
            ,
            l.trigger = function(t, e) {
                if (this.config.debug)
                    return this.emit(t, t, e);
                try {
                    return this.emit(t, t, e)
                } catch (e) {
                    o.logger.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e),
                    this.trigger(a.Events.ERROR, {
                        type: s.ErrorTypes.OTHER_ERROR,
                        details: s.ErrorDetails.INTERNAL_EXCEPTION,
                        fatal: !1,
                        event: t,
                        error: e
                    })
                }
                return !1
            }
            ,
            l.listenerCount = function(t) {
                return this._emitter.listenerCount(t)
            }
            ,
            l.destroy = function() {
                o.logger.log("destroy"),
                this.trigger(a.Events.DESTROYING, void 0),
                this.detachMedia(),
                this.removeAllListeners(),
                this._autoLevelCapping = -1,
                this.url = null,
                this.networkControllers.forEach((function(t) {
                    return t.destroy()
                }
                )),
                this.networkControllers.length = 0,
                this.coreComponents.forEach((function(t) {
                    return t.destroy()
                }
                )),
                this.coreComponents.length = 0
            }
            ,
            l.attachMedia = function(t) {
                o.logger.log("attachMedia"),
                this._media = t,
                this.trigger(a.Events.MEDIA_ATTACHING, {
                    media: t
                })
            }
            ,
            l.detachMedia = function() {
                o.logger.log("detachMedia"),
                this.trigger(a.Events.MEDIA_DETACHING, void 0),
                this._media = null
            }
            ,
            l.loadSource = function(t) {
                this.stopLoad();
                var e = this.media
                  , r = this.url
                  , n = this.url = i.buildAbsoluteURL(self.location.href, t, {
                    alwaysNormalize: !0
                });
                o.logger.log("loadSource:" + n),
                e && r && r !== n && this.bufferController.hasSourceTypes() && (this.detachMedia(),
                this.attachMedia(e)),
                this.trigger(a.Events.MANIFEST_LOADING, {
                    url: t
                })
            }
            ,
            l.startLoad = function(t) {
                void 0 === t && (t = -1),
                o.logger.log("startLoad(" + t + ")"),
                this.networkControllers.forEach((function(e) {
                    e.startLoad(t)
                }
                ))
            }
            ,
            l.stopLoad = function() {
                o.logger.log("stopLoad"),
                this.networkControllers.forEach((function(t) {
                    t.stopLoad()
                }
                ))
            }
            ,
            l.swapAudioCodec = function() {
                o.logger.log("swapAudioCodec"),
                this.streamController.swapAudioCodec()
            }
            ,
            l.recoverMediaError = function() {
                o.logger.log("recoverMediaError");
                var t = this._media;
                this.detachMedia(),
                t && this.attachMedia(t)
            }
            ,
            l.removeLevel = function(t, e) {
                void 0 === e && (e = 0),
                this.levelController.removeLevel(t, e)
            }
            ,
            e = t,
            n = [{
                key: "version",
                get: function() {}
            }, {
                key: "Events",
                get: function() {
                    return a.Events
                }
            }, {
                key: "ErrorTypes",
                get: function() {
                    return s.ErrorTypes
                }
            }, {
                key: "ErrorDetails",
                get: function() {
                    return s.ErrorDetails
                }
            }, {
                key: "DefaultConfig",
                get: function() {
                    return t.defaultConfig ? t.defaultConfig : Zr
                },
                set: function(e) {
                    t.defaultConfig = e
                }
            }],
            (r = [{
                key: "levels",
                get: function() {
                    var t = this.levelController.levels;
                    return t || []
                }
            }, {
                key: "currentLevel",
                get: function() {
                    return this.streamController.currentLevel
                },
                set: function(t) {
                    o.logger.log("set currentLevel:" + t),
                    this.loadLevel = t,
                    this.abrController.clearTimer(),
                    this.streamController.immediateLevelSwitch()
                }
            }, {
                key: "nextLevel",
                get: function() {
                    return this.streamController.nextLevel
                },
                set: function(t) {
                    o.logger.log("set nextLevel:" + t),
                    this.levelController.manualLevel = t,
                    this.streamController.nextLevelSwitch()
                }
            }, {
                key: "loadLevel",
                get: function() {
                    return this.levelController.level
                },
                set: function(t) {
                    o.logger.log("set loadLevel:" + t),
                    this.levelController.manualLevel = t
                }
            }, {
                key: "nextLoadLevel",
                get: function() {
                    return this.levelController.nextLoadLevel
                },
                set: function(t) {
                    this.levelController.nextLoadLevel = t
                }
            }, {
                key: "firstLevel",
                get: function() {
                    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                },
                set: function(t) {
                    o.logger.log("set firstLevel:" + t),
                    this.levelController.firstLevel = t
                }
            }, {
                key: "startLevel",
                get: function() {
                    return this.levelController.startLevel
                },
                set: function(t) {
                    o.logger.log("set startLevel:" + t),
                    -1 !== t && (t = Math.max(t, this.minAutoLevel)),
                    this.levelController.startLevel = t
                }
            }, {
                key: "capLevelToPlayerSize",
                get: function() {
                    return this.config.capLevelToPlayerSize
                },
                set: function(t) {
                    var e = !!t;
                    e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(),
                    this.autoLevelCapping = -1,
                    this.streamController.nextLevelSwitch()),
                    this.config.capLevelToPlayerSize = e)
                }
            }, {
                key: "autoLevelCapping",
                get: function() {
                    return this._autoLevelCapping
                },
                set: function(t) {
                    this._autoLevelCapping !== t && (o.logger.log("set autoLevelCapping:" + t),
                    this._autoLevelCapping = t)
                }
            }, {
                key: "bandwidthEstimate",
                get: function() {
                    var t = this.abrController.bwEstimator;
                    return t ? t.getEstimate() : NaN
                }
            }, {
                key: "autoLevelEnabled",
                get: function() {
                    return -1 === this.levelController.manualLevel
                }
            }, {
                key: "manualLevel",
                get: function() {
                    return this.levelController.manualLevel
                }
            }, {
                key: "minAutoLevel",
                get: function() {
                    var t = this.levels
                      , e = this.config.minAutoBitrate;
                    if (!t)
                        return 0;
                    for (var r = t.length, i = 0; i < r; i++)
                        if (t[i].maxBitrate >= e)
                            return i;
                    return 0
                }
            }, {
                key: "maxAutoLevel",
                get: function() {
                    var t = this.levels
                      , e = this.autoLevelCapping;
                    return -1 === e && t && t.length ? t.length - 1 : e
                }
            }, {
                key: "nextAutoLevel",
                get: function() {
                    return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                },
                set: function(t) {
                    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
                }
            }, {
                key: "audioTracks",
                get: function() {
                    var t = this.audioTrackController;
                    return t ? t.audioTracks : []
                }
            }, {
                key: "audioTrack",
                get: function() {
                    var t = this.audioTrackController;
                    return t ? t.audioTrack : -1
                },
                set: function(t) {
                    var e = this.audioTrackController;
                    e && (e.audioTrack = t)
                }
            }, {
                key: "subtitleTracks",
                get: function() {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTracks : []
                }
            }, {
                key: "subtitleTrack",
                get: function() {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTrack : -1
                },
                set: function(t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleTrack = t)
                }
            }, {
                key: "media",
                get: function() {
                    return this._media
                }
            }, {
                key: "subtitleDisplay",
                get: function() {
                    var t = this.subtitleTrackController;
                    return !!t && t.subtitleDisplay
                },
                set: function(t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleDisplay = t)
                }
            }, {
                key: "lowLatencyMode",
                get: function() {
                    return this.config.lowLatencyMode
                },
                set: function(t) {
                    this.config.lowLatencyMode = t
                }
            }, {
                key: "liveSyncPosition",
                get: function() {
                    return this.latencyController.liveSyncPosition
                }
            }, {
                key: "latency",
                get: function() {
                    return this.latencyController.latency
                }
            }, {
                key: "maxLatency",
                get: function() {
                    return this.latencyController.maxLatency
                }
            }, {
                key: "targetLatency",
                get: function() {
                    return this.latencyController.targetLatency
                }
            }, {
                key: "drift",
                get: function() {
                    return this.latencyController.drift
                }
            }, {
                key: "forceStartLoad",
                get: function() {
                    return this.streamController.forceStartLoad
                }
            }]) && ti(e.prototype, r),
            n && ti(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        ei.defaultConfig = void 0
    }
    ]).default
}
));
//# sourceMappingURL=hls.min.js.map
