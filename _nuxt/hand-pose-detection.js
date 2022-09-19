import {
  Tensor,
  add,
  browser_exports,
  cast,
  clipByValue,
  concat,
  dispose,
  div,
  exp,
  expandDims,
  image,
  loadGraphModel,
  mul,
  reshape,
  sigmoid,
  slice,
  squeeze,
  sub,
  tensor1d,
  tensor2d,
  tidy,
  util_exports
} from "./chunk-X3YL4HVM.js";
import {
  require_hands
} from "./chunk-OCIGUUAF.js";
import {
  __toESM
} from "./chunk-QOVRSCHT.js";

// node_modules/@tensorflow-models/hand-pose-detection/dist/hand-pose-detection.esm.js
var import_hands = __toESM(require_hands());
var I = function() {
  return (I = Object.assign || function(t2) {
    for (var e, n = 1, i = arguments.length; n < i; n++)
      for (var r in e = arguments[n])
        Object.prototype.hasOwnProperty.call(e, r) && (t2[r] = e[r]);
    return t2;
  }).apply(this, arguments);
};
function T(t2, e, n, i) {
  return new (n || (n = Promise))(function(r, o) {
    function a(t3) {
      try {
        s(i.next(t3));
      } catch (t4) {
        o(t4);
      }
    }
    function h(t3) {
      try {
        s(i.throw(t3));
      } catch (t4) {
        o(t4);
      }
    }
    function s(t3) {
      var e2;
      t3.done ? r(t3.value) : (e2 = t3.value, e2 instanceof n ? e2 : new n(function(t4) {
        t4(e2);
      })).then(a, h);
    }
    s((i = i.apply(t2, e || [])).next());
  });
}
function S(t2, e) {
  var n, i, r, o, a = { label: 0, sent: function() {
    if (1 & r[0])
      throw r[1];
    return r[1];
  }, trys: [], ops: [] };
  return o = { next: h(0), throw: h(1), return: h(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function h(o2) {
    return function(h2) {
      return function(o3) {
        if (n)
          throw new TypeError("Generator is already executing.");
        for (; a; )
          try {
            if (n = 1, i && (r = 2 & o3[0] ? i.return : o3[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o3[1])).done)
              return r;
            switch (i = 0, r && (o3 = [2 & o3[0], r.value]), o3[0]) {
              case 0:
              case 1:
                r = o3;
                break;
              case 4:
                return a.label++, { value: o3[1], done: false };
              case 5:
                a.label++, i = o3[1], o3 = [0];
                continue;
              case 7:
                o3 = a.ops.pop(), a.trys.pop();
                continue;
              default:
                if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o3[0] && 2 !== o3[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o3[0] && (!r || o3[1] > r[0] && o3[1] < r[3])) {
                  a.label = o3[1];
                  break;
                }
                if (6 === o3[0] && a.label < r[1]) {
                  a.label = r[1], r = o3;
                  break;
                }
                if (r && a.label < r[2]) {
                  a.label = r[2], a.ops.push(o3);
                  break;
                }
                r[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            o3 = e.call(t2, a);
          } catch (t3) {
            o3 = [6, t3], i = 0;
          } finally {
            n = r = 0;
          }
        if (5 & o3[0])
          throw o3[1];
        return { value: o3[0] ? o3[1] : void 0, done: true };
      }([o2, h2]);
    };
  }
}
var _ = ["wrist", "thumb_cmc", "thumb_mcp", "thumb_ip", "thumb_tip", "index_finger_mcp", "index_finger_pip", "index_finger_dip", "index_finger_tip", "middle_finger_mcp", "middle_finger_pip", "middle_finger_dip", "middle_finger_tip", "ring_finger_mcp", "ring_finger_pip", "ring_finger_dip", "ring_finger_tip", "pinky_finger_mcp", "pinky_finger_pip", "pinky_finger_dip", "pinky_finger_tip"];
var C = { runtime: "mediapipe", maxHands: 2, modelType: "full" };
var k = function() {
  function i(e) {
    var n, i2 = this;
    switch (this.width = 0, this.height = 0, this.selfieMode = false, this.handsSolution = new import_hands.Hands({ locateFile: function(t2, n2) {
      return e.solutionPath ? e.solutionPath.replace(/\/+$/, "") + "/" + t2 : n2 + "/" + t2;
    } }), e.modelType) {
      case "lite":
        n = 0;
        break;
      case "full":
      default:
        n = 1;
    }
    this.handsSolution.setOptions({ modelComplexity: n, selfieMode: this.selfieMode, maxNumHands: e.maxHands }), this.handsSolution.onResults(function(t2) {
      if (i2.height = t2.image.height, i2.width = t2.image.width, i2.hands = [], null !== t2.multiHandLandmarks)
        for (var e2 = t2.multiHandedness, n2 = t2.multiHandLandmarks, r = t2.multiHandWorldLandmarks, o = 0; o < e2.length; o++)
          i2.hands.push(I(I({}, i2.translateOutput(n2[o], r[o])), { score: e2[o].score, handedness: e2[o].label }));
    });
  }
  return i.prototype.translateOutput = function(t2, e) {
    var n = this;
    return { keypoints: t2.map(function(t3, e2) {
      return { x: t3.x * n.width, y: t3.y * n.height, score: t3.visibility, name: _[e2] };
    }), keypoints3D: e.map(function(t3, e2) {
      return { x: t3.x, y: t3.y, z: t3.z, score: t3.visibility, name: _[e2] };
    }) };
  }, i.prototype.estimateHands = function(t2, i2) {
    return T(this, void 0, void 0, function() {
      var r, o;
      return S(this, function(a) {
        switch (a.label) {
          case 0:
            return i2 && i2.flipHorizontal && i2.flipHorizontal !== this.selfieMode && (this.selfieMode = i2.flipHorizontal, this.handsSolution.setOptions({ selfieMode: this.selfieMode })), t2 instanceof Tensor ? (o = ImageData.bind, [4, browser_exports.toPixels(t2)]) : [3, 2];
          case 1:
            return r = new (o.apply(ImageData, [void 0, a.sent(), t2.shape[1], t2.shape[0]]))(), [3, 3];
          case 2:
            r = t2, a.label = 3;
          case 3:
            return t2 = r, [4, this.handsSolution.send({ image: t2 })];
          case 4:
            return a.sent(), [2, this.hands];
        }
      });
    });
  }, i.prototype.dispose = function() {
    this.handsSolution.close();
  }, i.prototype.reset = function() {
    this.handsSolution.reset(), this.width = 0, this.height = 0, this.hands = null, this.selfieMode = false;
  }, i.prototype.initialize = function() {
    return this.handsSolution.initialize();
  }, i;
}();
function H(t2) {
  return T(this, void 0, void 0, function() {
    var e, n;
    return S(this, function(i) {
      switch (i.label) {
        case 0:
          return e = function(t3) {
            if (null == t3)
              return I({}, C);
            var e2 = I({}, t3);
            return e2.runtime = "mediapipe", null == e2.maxHands && (e2.maxHands = C.maxHands), null == e2.modelType && (e2.modelType = C.modelType), e2;
          }(t2), [4, (n = new k(e)).initialize()];
        case 1:
          return i.sent(), [2, n];
      }
    });
  });
}
function z(t2) {
  return t2.width * t2.height;
}
function O(t2) {
  var e = t2.xCenter - t2.width / 2, n = e + t2.width, i = t2.yCenter - t2.height / 2;
  return { xMin: e, xMax: n, yMin: i, yMax: i + t2.height, width: t2.width, height: t2.height };
}
function L(t2, e) {
  var n = O(t2), i = O(e);
  if (!function(t3, e2) {
    return !(t3.xMax < e2.xMin || e2.xMax < t3.xMin || t3.yMax < e2.yMin || e2.yMax < t3.yMin);
  }(n, i))
    return 0;
  var r = z(function(t3, e2) {
    var n2 = Math.max(t3.xMin, e2.xMin), i2 = Math.min(t3.xMax, e2.xMax), r2 = Math.max(t3.yMin, e2.yMin), o2 = Math.min(t3.yMax, e2.yMax);
    return { xMin: n2, xMax: i2, yMin: r2, yMax: o2, width: Math.max(i2 - n2, 0), height: Math.max(o2 - r2, 0) };
  }(n, i)), o = z(n) + z(i) - r;
  return o > 0 ? r / o : 0;
}
function N(t2, e, n, i) {
  var r = t2.width, o = t2.height, a = i ? -1 : 1, h = Math.cos(t2.rotation), s = Math.sin(t2.rotation), u = t2.xCenter, l = t2.yCenter, d = 1 / e, c = 1 / n, f = new Array(16);
  return f[0] = r * h * a * d, f[1] = -o * s * d, f[2] = 0, f[3] = (-0.5 * r * h * a + 0.5 * o * s + u) * d, f[4] = r * s * a * c, f[5] = o * h * c, f[6] = 0, f[7] = (-0.5 * o * h - 0.5 * r * s * a + l) * c, f[8] = 0, f[9] = 0, f[10] = r * d, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1, function(t3) {
    if (16 !== t3.length)
      throw new Error("Array length must be 16 but got " + t3.length);
    return [[t3[0], t3[1], t3[2], t3[3]], [t3[4], t3[5], t3[6], t3[7]], [t3[8], t3[9], t3[10], t3[11]], [t3[12], t3[13], t3[14], t3[15]]];
  }(f);
}
function E(t2) {
  return t2 instanceof Tensor ? { height: t2.shape[0], width: t2.shape[1] } : { height: t2.height, width: t2.width };
}
function A(t2) {
  return t2 - 2 * Math.PI * Math.floor((t2 + Math.PI) / (2 * Math.PI));
}
function B(t2) {
  return t2 instanceof Tensor ? t2 : browser_exports.fromPixels(t2);
}
function R(t2, e) {
  util_exports.assert(0 !== t2.width, function() {
    return e + " width cannot be 0.";
  }), util_exports.assert(0 !== t2.height, function() {
    return e + " height cannot be 0.";
  });
}
function V(t2, e) {
  var n = function(t3, e2, n2, i) {
    var r = e2 - t3, o = i - n2;
    if (0 === r)
      throw new Error("Original min and max are both " + t3 + ", range cannot be 0.");
    var a = o / r;
    return { scale: a, offset: n2 - t3 * a };
  }(0, 255, e[0], e[1]);
  return tidy(function() {
    return add(mul(t2, n.scale), n.offset);
  });
}
function P(t2, e, n) {
  var i = e.outputTensorSize, o = e.keepAspectRatio, a = e.borderMode, d = e.outputTensorFloatRange, c = E(t2), f = function(t3, e2) {
    return e2 ? { xCenter: e2.xCenter * t3.width, yCenter: e2.yCenter * t3.height, width: e2.width * t3.width, height: e2.height * t3.height, rotation: e2.rotation } : { xCenter: 0.5 * t3.width, yCenter: 0.5 * t3.height, width: t3.width, height: t3.height, rotation: 0 };
  }(c, n), p = function(t3, e2, n2) {
    if (void 0 === n2 && (n2 = false), !n2)
      return { top: 0, left: 0, right: 0, bottom: 0 };
    var i2 = e2.height, r = e2.width;
    R(e2, "targetSize"), R(t3, "roi");
    var o2, a2, h = i2 / r, s = t3.height / t3.width, u = 0, l = 0;
    return h > s ? (o2 = t3.width, a2 = t3.width * h, l = (1 - s / h) / 2) : (o2 = t3.height / h, a2 = t3.height, u = (1 - h / s) / 2), t3.width = o2, t3.height = a2, { top: l, left: u, right: u, bottom: l };
  }(f, i, o), m = N(f, c.width, c.height, false);
  return { imageTensor: tidy(function() {
    var e2 = B(t2), n2 = tensor2d(function(t3, e3, n3) {
      return R(n3, "inputResolution"), [1 / n3.width * t3[0][0] * e3.width, 1 / n3.height * t3[0][1] * e3.width, t3[0][3] * e3.width, 1 / n3.width * t3[1][0] * e3.height, 1 / n3.height * t3[1][1] * e3.height, t3[1][3] * e3.height, 0, 0];
    }(m, c, i), [1, 8]), r = "zero" === a ? "constant" : "nearest", o2 = image.transform(expandDims(cast(e2, "float32")), n2, "bilinear", r, 0, [i.height, i.width]);
    return null != d ? V(o2, d) : o2;
  }), padding: p, transformationMatrix: m };
}
function D(t2, e, n, i) {
  return 1 === i ? 0.5 * (t2 + e) : t2 + (e - t2) * n / (i - 1);
}
function K(t2) {
  return { xCenter: t2.xMin + t2.width / 2, yCenter: t2.yMin + t2.height / 2, width: t2.width, height: t2.height };
}
function F(t2) {
  var e = t2.relativeKeypoints;
  if (e.length <= 1)
    throw new Error("2 or more keypoints required to calculate a rect.");
  var n = Number.MAX_VALUE, i = Number.MAX_VALUE, r = Number.MIN_VALUE, o = Number.MIN_VALUE;
  return e.forEach(function(t3) {
    n = Math.min(n, t3.x), r = Math.max(r, t3.x), i = Math.min(i, t3.y), o = Math.max(o, t3.y);
  }), { xCenter: (n + r) / 2, yCenter: (i + o) / 2, width: r - n, height: o - i };
}
function Y(t2, e, n, i, r) {
  var o = "rect" === n ? function(t3, e2, n2) {
    var i2, r2 = t3.locationData;
    if ("boundingbox" === e2)
      i2 = K(r2.boundingBox);
    else {
      i2 = F(r2);
      var o2 = n2.width, a = n2.height;
      i2.xCenter = Math.round(i2.xCenter * o2), i2.yCenter = Math.round(i2.yCenter * a), i2.width = Math.round(i2.width * o2), i2.height = Math.round(i2.height * a);
    }
    return i2;
  }(t2, e, i) : function(t3, e2) {
    var n2 = t3.locationData;
    return "boundingbox" === e2 ? K(n2.relativeBoundingBox) : F(n2);
  }(t2, e);
  return r && (o.rotation = function(t3, e2, n2) {
    var i2, r2 = t3.locationData, o2 = n2.rotationVectorStartKeypointIndex, a = n2.rotationVectorEndKeypointIndex;
    i2 = n2.rotationVectorTargetAngle ? n2.rotationVectorTargetAngle : Math.PI * n2.rotationVectorTargetAngleDegree / 180;
    var h = r2.relativeKeypoints[o2].x * e2.width, s = r2.relativeKeypoints[o2].y * e2.height, u = r2.relativeKeypoints[a].x * e2.width, l = r2.relativeKeypoints[a].y * e2.height;
    return A(i2 - Math.atan2(-(l - s), u - h));
  }(t2, i, r)), o;
}
function U(t2) {
  return tidy(function() {
    var e = function(t3) {
      return tidy(function() {
        return [slice(t3, [0, 0, 0], [1, -1, 1]), slice(t3, [0, 0, 1], [1, -1, -1])];
      });
    }(t2), n = e[0], i = e[1];
    return { boxes: squeeze(i), logits: squeeze(n) };
  });
}
function j(t2, e, n, i) {
  return T(this, void 0, void 0, function() {
    var i2, r, o, a, u;
    return S(this, function(l) {
      switch (l.label) {
        case 0:
          return t2.sort(function(t3, e2) {
            return Math.max.apply(Math, e2.score) - Math.max.apply(Math, t3.score);
          }), i2 = tensor2d(t2.map(function(t3) {
            return [t3.locationData.relativeBoundingBox.yMin, t3.locationData.relativeBoundingBox.xMin, t3.locationData.relativeBoundingBox.yMax, t3.locationData.relativeBoundingBox.xMax];
          })), r = tensor1d(t2.map(function(t3) {
            return t3.score[0];
          })), [4, image.nonMaxSuppressionAsync(i2, r, e, n)];
        case 1:
          return [4, (o = l.sent()).array()];
        case 2:
          return a = l.sent(), u = t2.filter(function(t3, e2) {
            return a.indexOf(e2) > -1;
          }), dispose([i2, r, o]), [2, u];
      }
    });
  });
}
function X(t2, e) {
  return t2.map(function(t3) {
    var n = I(I({}, t3), { x: t3.x * e.width, y: t3.y * e.height });
    return null != t3.z && (n.z = t3.z * e.width), n;
  });
}
function W(t2, e, n) {
  return T(this, void 0, void 0, function() {
    var i, h, s, u, l;
    return S(this, function(p) {
      switch (p.label) {
        case 0:
          return i = t2[0], h = t2[1], s = function(t3, e2, n2) {
            return tidy(function() {
              var i2, r, h2, s2;
              n2.reverseOutputOrder ? (r = squeeze(slice(t3, [0, n2.boxCoordOffset + 0], [-1, 1])), i2 = squeeze(slice(t3, [0, n2.boxCoordOffset + 1], [-1, 1])), s2 = squeeze(slice(t3, [0, n2.boxCoordOffset + 2], [-1, 1])), h2 = squeeze(slice(t3, [0, n2.boxCoordOffset + 3], [-1, 1]))) : (i2 = squeeze(slice(t3, [0, n2.boxCoordOffset + 0], [-1, 1])), r = squeeze(slice(t3, [0, n2.boxCoordOffset + 1], [-1, 1])), h2 = squeeze(slice(t3, [0, n2.boxCoordOffset + 2], [-1, 1])), s2 = squeeze(slice(t3, [0, n2.boxCoordOffset + 3], [-1, 1]))), r = add(mul(div(r, n2.xScale), e2.w), e2.x), i2 = add(mul(div(i2, n2.yScale), e2.h), e2.y), n2.applyExponentialOnBoxSize ? (h2 = mul(exp(div(h2, n2.hScale)), e2.h), s2 = mul(exp(div(s2, n2.wScale)), e2.w)) : (h2 = mul(div(h2, n2.hScale), e2.h), s2 = mul(div(s2, n2.wScale), e2.h));
              var u2 = sub(i2, div(h2, 2)), l2 = sub(r, div(s2, 2)), f = add(i2, div(h2, 2)), p2 = add(r, div(s2, 2)), M = concat([reshape(u2, [n2.numBoxes, 1]), reshape(l2, [n2.numBoxes, 1]), reshape(f, [n2.numBoxes, 1]), reshape(p2, [n2.numBoxes, 1])], 1);
              if (n2.numKeypoints)
                for (var w = 0; w < n2.numKeypoints; ++w) {
                  var b = n2.keypointCoordOffset + w * n2.numValuesPerKeypoint, I2 = void 0, T2 = void 0;
                  n2.reverseOutputOrder ? (I2 = squeeze(slice(t3, [0, b], [-1, 1])), T2 = squeeze(slice(t3, [0, b + 1], [-1, 1]))) : (T2 = squeeze(slice(t3, [0, b], [-1, 1])), I2 = squeeze(slice(t3, [0, b + 1], [-1, 1])));
                  var S2 = add(mul(div(I2, n2.xScale), e2.w), e2.x), _2 = add(mul(div(T2, n2.yScale), e2.h), e2.y);
                  M = concat([M, reshape(S2, [n2.numBoxes, 1]), reshape(_2, [n2.numBoxes, 1])], 1);
                }
              return M;
            });
          }(h, e, n), u = tidy(function() {
            var t3 = i;
            return n.sigmoidScore ? (null != n.scoreClippingThresh && (t3 = clipByValue(i, -n.scoreClippingThresh, n.scoreClippingThresh)), t3 = sigmoid(t3)) : t3;
          }), [4, q(s, u, n)];
        case 1:
          return l = p.sent(), dispose([s, u]), [2, l];
      }
    });
  });
}
function q(t2, e, n) {
  return T(this, void 0, void 0, function() {
    var i, r, o, a, h, s, u, l, d, c, f, p;
    return S(this, function(m) {
      switch (m.label) {
        case 0:
          return i = [], [4, t2.data()];
        case 1:
          return r = m.sent(), [4, e.data()];
        case 2:
          for (o = m.sent(), a = 0; a < n.numBoxes; ++a)
            if (!(null != n.minScoreThresh && o[a] < n.minScoreThresh || (h = a * n.numCoords, s = G(r[h + 0], r[h + 1], r[h + 2], r[h + 3], o[a], n.flipVertically, a), (u = s.locationData.relativeBoundingBox).width < 0 || u.height < 0))) {
              if (n.numKeypoints > 0)
                for ((l = s.locationData).relativeKeypoints = [], d = n.numKeypoints * n.numValuesPerKeypoint, c = 0; c < d; c += n.numValuesPerKeypoint)
                  f = h + n.keypointCoordOffset + c, p = { x: r[f + 0], y: n.flipVertically ? 1 - r[f + 1] : r[f + 1] }, l.relativeKeypoints.push(p);
              i.push(s);
            }
          return [2, i];
      }
    });
  });
}
function G(t2, e, n, i, r, o, a) {
  return { score: [r], ind: a, locationData: { relativeBoundingBox: { xMin: e, yMin: o ? 1 - n : t2, xMax: i, yMax: o ? 1 - t2 : n, width: i - e, height: n - t2 } } };
}
function Z(t2, e) {
  return "none" === t2 ? e : function(t3) {
    return 1 / (1 + Math.exp(-t3));
  }(e);
}
function $(t2, e, n, i) {
  return T(this, void 0, void 0, function() {
    var r, o, a, h, s, u, l, d;
    return S(this, function(c) {
      switch (c.label) {
        case 0:
          return n = n || e.flipHorizontally || false, i = i || e.flipVertically || false, r = t2.size, o = r / e.numLandmarks, [4, t2.data()];
        case 1:
          for (a = c.sent(), h = [], s = 0; s < e.numLandmarks; ++s)
            u = s * o, (d = { x: 0, y: 0 }).x = n ? e.inputImageWidth - a[u] : a[u], o > 1 && (d.y = i ? e.inputImageHeight - a[u + 1] : a[u + 1]), o > 2 && (d.z = a[u + 2]), o > 3 && (d.score = Z(e.visibilityActivation, a[u + 3])), h.push(d);
          for (l = 0; l < h.length; ++l)
            (d = h[l]).x = d.x / e.inputImageWidth, d.y = d.y / e.inputImageHeight, d.z = d.z / e.inputImageWidth / (e.normalizeZ || 1);
          return [2, h];
      }
    });
  });
}
function J(t2, e, n) {
  var i = t2.width, r = t2.height, o = t2.rotation;
  if (null == n.rotation && null == n.rotationDegree || (o = function(t3, e2) {
    null != e2.rotation ? t3 += e2.rotation : null != e2.rotationDegree && (t3 += Math.PI * e2.rotationDegree / 180);
    return A(t3);
  }(o, n)), 0 === o)
    t2.xCenter = t2.xCenter + i * n.shiftX, t2.yCenter = t2.yCenter + r * n.shiftY;
  else {
    var a = (e.width * i * n.shiftX * Math.cos(o) - e.height * r * n.shiftY * Math.sin(o)) / e.width, h = (e.width * i * n.shiftX * Math.sin(o) + e.height * r * n.shiftY * Math.cos(o)) / e.height;
    t2.xCenter = t2.xCenter + a, t2.yCenter = t2.yCenter + h;
  }
  if (n.squareLong) {
    var s = Math.max(i * e.width, r * e.height);
    i = s / e.width, r = s / e.height;
  } else if (n.squareShort) {
    var u = Math.min(i * e.width, r * e.height);
    i = u / e.width, r = u / e.height;
  }
  return t2.width = i * n.scaleX, t2.height = r * n.scaleY, t2;
}
function Q(t2, e) {
  for (var n = function(t3, e2) {
    var n2 = t3[0].x * e2.width, i2 = t3[0].y * e2.height, r2 = (t3[4].x + t3[8].x) / 2, o2 = (t3[4].y + t3[8].y) / 2;
    return r2 = (r2 + t3[6].x) / 2 * e2.width, o2 = (o2 + t3[6].y) / 2 * e2.height, A(Math.PI / 2 - Math.atan2(-(o2 - i2), r2 - n2));
  }(t2, e), i = A(-n), r = Number.POSITIVE_INFINITY, o = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY, h = Number.NEGATIVE_INFINITY, s = 0, u = t2; s < u.length; s++) {
    var l = (g = u[s]).x, d = g.y;
    r = Math.min(r, l), o = Math.max(o, l), a = Math.min(a, d), h = Math.max(h, d);
  }
  var c = (o + r) / 2, f = (h + a) / 2;
  r = Number.POSITIVE_INFINITY, o = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY, h = Number.NEGATIVE_INFINITY;
  for (var p = 0, m = t2; p < m.length; p++) {
    var g, x = ((g = m[p]).x - c) * e.width, y = (g.y - f) * e.height, v = x * Math.cos(i) - y * Math.sin(i), M = x * Math.sin(i) + y * Math.cos(i);
    r = Math.min(r, v), o = Math.max(o, v), a = Math.min(a, M), h = Math.max(h, M);
  }
  var w = (o + r) / 2, b = (h + a) / 2, I2 = w * Math.cos(n) - b * Math.sin(n) + e.width * c, T2 = w * Math.sin(n) + b * Math.cos(n) + e.height * f, S2 = (o - r) / e.width, _2 = (h - a) / e.height;
  return { xCenter: I2 / e.width, yCenter: T2 / e.height, width: S2, height: _2, rotation: n };
}
var tt = { reduceBoxesInLowestLayer: false, interpolatedScaleAspectRatio: 1, featureMapHeight: [], featureMapWidth: [], numLayers: 4, minScale: 0.1484375, maxScale: 0.75, inputSizeHeight: 192, inputSizeWidth: 192, anchorOffsetX: 0.5, anchorOffsetY: 0.5, strides: [8, 16, 16, 16], aspectRatios: [1], fixedAnchorSize: true };
var et = { runtime: "tfjs", modelType: "full", maxHands: 2, detectorModelUrl: "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1", landmarkModelUrl: "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1" };
var nt = { flipHorizontal: false, staticImageMode: false };
var it = { applyExponentialOnBoxSize: false, flipVertically: false, ignoreClasses: [], numClasses: 1, numBoxes: 2016, numCoords: 18, boxCoordOffset: 0, keypointCoordOffset: 4, numKeypoints: 7, numValuesPerKeypoint: 2, sigmoidScore: true, scoreClippingThresh: 100, reverseOutputOrder: true, xScale: 192, yScale: 192, hScale: 192, wScale: 192, minScoreThresh: 0.5 };
var rt = 0.3;
var ot = { shiftX: 0, shiftY: -0.5, scaleX: 2.6, scaleY: 2.6, squareLong: true };
var at = { shiftX: 0, shiftY: -0.1, scaleX: 2, scaleY: 2, squareLong: true };
var ht = { outputTensorSize: { width: 192, height: 192 }, keepAspectRatio: true, outputTensorFloatRange: [0, 1], borderMode: "zero" };
var st = { outputTensorSize: { width: 224, height: 224 }, keepAspectRatio: true, outputTensorFloatRange: [0, 1], borderMode: "zero" };
var ut = { numLandmarks: 21, inputImageWidth: 224, inputImageHeight: 224, normalizeZ: 0.4, visibilityActivation: "none", flipHorizontally: false, flipVertically: false };
var lt = { numLandmarks: 21, inputImageWidth: 1, inputImageHeight: 1, visibilityActivation: "none", flipHorizontally: false, flipVertically: false };
var dt;
var ct = function() {
  function t2(t3, e, n) {
    this.detectorModel = t3, this.landmarkModel = e, this.maxHands = n, this.prevHandRectsFromLandmarks = null, this.anchors = function(t4) {
      null == t4.reduceBoxesInLowestLayer && (t4.reduceBoxesInLowestLayer = false), null == t4.interpolatedScaleAspectRatio && (t4.interpolatedScaleAspectRatio = 1), null == t4.fixedAnchorSize && (t4.fixedAnchorSize = false);
      for (var e2 = [], n2 = 0; n2 < t4.numLayers; ) {
        for (var i2 = [], r2 = [], o2 = [], a2 = [], h = n2; h < t4.strides.length && t4.strides[h] === t4.strides[n2]; ) {
          var s = D(t4.minScale, t4.maxScale, h, t4.strides.length);
          if (0 === h && t4.reduceBoxesInLowestLayer)
            o2.push(1), o2.push(2), o2.push(0.5), a2.push(0.1), a2.push(s), a2.push(s);
          else {
            for (var u = 0; u < t4.aspectRatios.length; ++u)
              o2.push(t4.aspectRatios[u]), a2.push(s);
            if (t4.interpolatedScaleAspectRatio > 0) {
              var l = h === t4.strides.length - 1 ? 1 : D(t4.minScale, t4.maxScale, h + 1, t4.strides.length);
              a2.push(Math.sqrt(s * l)), o2.push(t4.interpolatedScaleAspectRatio);
            }
          }
          h++;
        }
        for (var d = 0; d < o2.length; ++d) {
          var c = Math.sqrt(o2[d]);
          i2.push(a2[d] / c), r2.push(a2[d] * c);
        }
        var f = 0, p = 0;
        if (t4.featureMapHeight.length > 0)
          f = t4.featureMapHeight[n2], p = t4.featureMapWidth[n2];
        else {
          var m = t4.strides[n2];
          f = Math.ceil(t4.inputSizeHeight / m), p = Math.ceil(t4.inputSizeWidth / m);
        }
        for (var g = 0; g < f; ++g)
          for (var x = 0; x < p; ++x)
            for (var y = 0; y < i2.length; ++y) {
              var v = { xCenter: (x + t4.anchorOffsetX) / p, yCenter: (g + t4.anchorOffsetY) / f, width: 0, height: 0 };
              t4.fixedAnchorSize ? (v.width = 1, v.height = 1) : (v.width = r2[y], v.height = i2[y]), e2.push(v);
            }
        n2 = h;
      }
      return e2;
    }(tt);
    var i = tensor1d(this.anchors.map(function(t4) {
      return t4.width;
    })), r = tensor1d(this.anchors.map(function(t4) {
      return t4.height;
    })), o = tensor1d(this.anchors.map(function(t4) {
      return t4.xCenter;
    })), a = tensor1d(this.anchors.map(function(t4) {
      return t4.yCenter;
    }));
    this.anchorTensor = { x: o, y: a, w: i, h: r };
  }
  return t2.prototype.estimateHands = function(t3, e) {
    return T(this, void 0, void 0, function() {
      var n, i, o, a, h, d, f, p, m, g, x, y, v, M, w, b, T2, C2, k2 = this;
      return S(this, function(S2) {
        switch (S2.label) {
          case 0:
            return n = function(t4) {
              if (null == t4)
                return I({}, nt);
              var e2 = I({}, t4);
              return null == e2.flipHorizontal && (e2.flipHorizontal = nt.flipHorizontal), null == e2.staticImageMode && (e2.staticImageMode = nt.staticImageMode), e2;
            }(e), null == t3 ? (this.reset(), [2, []]) : (i = E(t3), o = tidy(function() {
              var e2 = cast(B(t3), "float32");
              if (n.flipHorizontal) {
                e2 = squeeze(image.flipLeftRight(expandDims(e2, 0)), [0]);
              }
              return e2;
            }), a = this.prevHandRectsFromLandmarks, n.staticImageMode || null == a || a.length < this.maxHands ? [4, this.detectPalm(o)] : [3, 2]);
          case 1:
            return 0 === (d = S2.sent()).length ? (this.reset(), o.dispose(), [2, []]) : (f = d.map(function(t4) {
              return k2.palmDetectionToRoi(t4, i);
            }), h = f, [3, 3]);
          case 2:
            h = a, S2.label = 3;
          case 3:
            return H2 = 0.5, z2 = [], [h].forEach(function(t4) {
              return t4.forEach(function(t5) {
                (z2 = z2.filter(function(e2) {
                  return L(t5, e2) <= H2;
                })).push(t5);
              });
            }), h = z2, [4, Promise.all(h.map(function(t4) {
              return k2.handLandmarks(t4, o);
            }))];
          case 4:
            for (p = S2.sent(), m = [], this.prevHandRectsFromLandmarks = [], g = 0, x = p; g < x.length; g++)
              null != (y = x[g]) && (v = y.landmarks, M = y.worldLandmarks, w = y.handScore, b = y.handedness, this.prevHandRectsFromLandmarks.push(this.handLandmarksToRoi(v, i)), null != (T2 = X(v, i)) && T2.forEach(function(t4, e2) {
                delete t4.z, t4.name = _[e2];
              }), null != (C2 = M) && C2.forEach(function(t4, e2) {
                t4.name = _[e2];
              }), m.push({ keypoints: T2, keypoints3D: C2, handedness: b, score: w }));
            return o.dispose(), [2, m];
        }
        var H2, z2;
      });
    });
  }, t2.prototype.dispose = function() {
    this.detectorModel.dispose(), this.landmarkModel.dispose(), dispose([this.anchorTensor.x, this.anchorTensor.y, this.anchorTensor.w, this.anchorTensor.h]);
  }, t2.prototype.reset = function() {
    this.prevHandRectsFromLandmarks = null;
  }, t2.prototype.detectPalm = function(t3) {
    return T(this, void 0, void 0, function() {
      var e, n, i, r, o, a, h, s, u, l;
      return S(this, function(d) {
        switch (d.label) {
          case 0:
            return e = P(t3, ht), n = e.imageTensor, i = e.padding, r = this.detectorModel.predict(n), o = U(r), a = o.boxes, [4, W([h = o.logits, a], this.anchorTensor, it)];
          case 1:
            return 0 === (s = d.sent()).length ? (dispose([n, r, h, a]), [2, s]) : [4, j(s, this.maxHands, rt)];
          case 2:
            return u = d.sent(), l = function(t4, e2) {
              void 0 === t4 && (t4 = []);
              for (var n2 = e2.left, i2 = e2.top, r2 = e2.left + e2.right, o2 = e2.top + e2.bottom, a2 = 0; a2 < t4.length; a2++) {
                var h2 = t4[a2], s2 = h2.locationData.relativeBoundingBox, u2 = (s2.xMin - n2) / (1 - r2), l2 = (s2.yMin - i2) / (1 - o2), d2 = s2.width / (1 - r2), c = s2.height / (1 - o2);
                s2.xMin = u2, s2.yMin = l2, s2.width = d2, s2.height = c, s2.xMax = u2 + d2, s2.yMax = l2 + c;
                var f = h2.locationData.relativeKeypoints;
                f && f.forEach(function(t5) {
                  var e3 = (t5.x - n2) / (1 - r2), a3 = (t5.y - i2) / (1 - o2);
                  t5.x = e3, t5.y = a3;
                });
              }
              return t4;
            }(u, i), dispose([n, r, h, a]), [2, l];
        }
      });
    });
  }, t2.prototype.palmDetectionToRoi = function(t3, e) {
    return J(Y(t3, "boundingbox", "normRect", e, { rotationVectorStartKeypointIndex: 0, rotationVectorEndKeypointIndex: 2, rotationVectorTargetAngleDegree: 90 }), e, ot);
  }, t2.prototype.handLandmarks = function(t3, e) {
    return T(this, void 0, void 0, function() {
      var n, i, r, o, a, h, s, u, l, d, c, p, m, g, x, y;
      return S(this, function(v) {
        switch (v.label) {
          case 0:
            return n = P(e, st, t3), i = n.imageTensor, r = n.padding, o = this.landmarkModel.execute(i, ["Identity_2:0", "Identity_1:0", "Identity:0", "Identity_3:0"]), a = o[0], h = o[1], s = o[2], u = o[3], [4, h.data()];
          case 1:
            return (l = v.sent()[0]) < 0.5 ? (dispose(o), dispose(i), [2, null]) : [4, s.data()];
          case 2:
            return d = v.sent()[0], c = d >= 0.5 ? "Left" : "Right", [4, $(a, ut)];
          case 3:
            return p = v.sent(), [4, $(u, lt)];
          case 4:
            return m = v.sent(), g = function(t4, e2) {
              var n2 = e2.left, i2 = e2.top, r2 = e2.left + e2.right, o2 = e2.top + e2.bottom;
              return t4.map(function(t5) {
                return I(I({}, t5), { x: (t5.x - n2) / (1 - r2), y: (t5.y - i2) / (1 - o2), z: t5.z / (1 - r2) });
              });
            }(p, r), x = function(t4, e2, n2) {
              void 0 === n2 && (n2 = { ignoreRotation: false });
              for (var i2 = [], r2 = 0, o2 = t4; r2 < o2.length; r2++) {
                var a2 = o2[r2], h2 = a2.x - 0.5, s2 = a2.y - 0.5, u2 = n2.ignoreRotation ? 0 : e2.rotation, l2 = Math.cos(u2) * h2 - Math.sin(u2) * s2, d2 = Math.sin(u2) * h2 + Math.cos(u2) * s2;
                l2 = l2 * e2.width + e2.xCenter, d2 = d2 * e2.height + e2.yCenter;
                var c2 = a2.z * e2.width, f = I({}, a2);
                f.x = l2, f.y = d2, f.z = c2, i2.push(f);
              }
              return i2;
            }(g, t3), y = function(t4, e2) {
              for (var n2 = [], i2 = 0, r2 = t4; i2 < r2.length; i2++) {
                var o2 = r2[i2], a2 = o2.x, h2 = o2.y, s2 = e2.rotation, u2 = Math.cos(s2) * a2 - Math.sin(s2) * h2, l2 = Math.sin(s2) * a2 + Math.cos(s2) * h2, d2 = I({}, o2);
                d2.x = u2, d2.y = l2, n2.push(d2);
              }
              return n2;
            }(m, t3), dispose(o), dispose(i), [2, { landmarks: x, worldLandmarks: y, handScore: l, handedness: c }];
        }
      });
    });
  }, t2.prototype.handLandmarksToRoi = function(t3, e) {
    return J(Q([].concat(t3.slice(0, 4), t3.slice(5, 7), t3.slice(9, 11), t3.slice(13, 15), t3.slice(17, 19)), e), e, at);
  }, t2;
}();
function ft(t2) {
  return T(this, void 0, void 0, function() {
    var e, n, i, r, o, a;
    return S(this, function(h) {
      switch (h.label) {
        case 0:
          return e = function(t3) {
            if (null == t3)
              return I({}, et);
            var e2 = I({}, t3);
            if (e2.runtime = "tfjs", null == e2.maxHands && (e2.maxHands = et.maxHands), null == e2.modelType && (e2.modelType = et.modelType), "lite" !== e2.modelType && "full" !== e2.modelType)
              throw new Error("Model type must be one of lite or full, but got " + e2.modelType);
            if (null == e2.detectorModelUrl)
              switch (e2.modelType) {
                case "lite":
                  e2.detectorModelUrl = "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/lite/1";
                  break;
                case "full":
                default:
                  e2.detectorModelUrl = "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1";
              }
            if (null == e2.landmarkModelUrl)
              switch (e2.modelType) {
                case "lite":
                  e2.landmarkModelUrl = "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/lite/1";
                  break;
                case "full":
                default:
                  e2.landmarkModelUrl = "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1";
              }
            return e2;
          }(t2), n = e.detectorModelUrl.indexOf("https://tfhub.dev") > -1, i = e.landmarkModelUrl.indexOf("https://tfhub.dev") > -1, [4, Promise.all([loadGraphModel(e.detectorModelUrl, { fromTFHub: n }), loadGraphModel(e.landmarkModelUrl, { fromTFHub: i })])];
        case 1:
          return r = h.sent(), o = r[0], a = r[1], [2, new ct(o, a, e.maxHands)];
      }
    });
  });
}
function pt(t2, e) {
  return T(this, void 0, void 0, function() {
    var n, i;
    return S(this, function(r) {
      switch (t2) {
        case dt.MediaPipeHands:
          if (i = void 0, null != (n = e)) {
            if ("tfjs" === n.runtime)
              return [2, ft(n)];
            if ("mediapipe" === n.runtime)
              return [2, H(n)];
            i = n.runtime;
          }
          throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got " + i);
        default:
          throw new Error(t2 + " is not a supported model name.");
      }
    });
  });
}
!function(t2) {
  t2.MediaPipeHands = "MediaPipeHands";
}(dt || (dt = {}));
export {
  dt as SupportedModels,
  pt as createDetector
};
/**
    * @license
    * Copyright 2022 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
//# sourceMappingURL=@tensorflow-models_hand-pose-detection.js.map
