import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-QOVRSCHT.js";

// node_modules/long/src/long.js
var require_long = __commonJS({
  "node_modules/long/src/long.js"(exports, module) {
    module.exports = Long2;
    var wasm = null;
    try {
      wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        13,
        2,
        96,
        0,
        1,
        127,
        96,
        4,
        127,
        127,
        127,
        127,
        1,
        127,
        3,
        7,
        6,
        0,
        1,
        1,
        1,
        1,
        1,
        6,
        6,
        1,
        127,
        1,
        65,
        0,
        11,
        7,
        50,
        6,
        3,
        109,
        117,
        108,
        0,
        1,
        5,
        100,
        105,
        118,
        95,
        115,
        0,
        2,
        5,
        100,
        105,
        118,
        95,
        117,
        0,
        3,
        5,
        114,
        101,
        109,
        95,
        115,
        0,
        4,
        5,
        114,
        101,
        109,
        95,
        117,
        0,
        5,
        8,
        103,
        101,
        116,
        95,
        104,
        105,
        103,
        104,
        0,
        0,
        10,
        191,
        1,
        6,
        4,
        0,
        35,
        0,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        126,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        127,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        128,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        129,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        130,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11
      ])), {}).exports;
    } catch (e) {
    }
    function Long2(low, high, unsigned) {
      this.low = low | 0;
      this.high = high | 0;
      this.unsigned = !!unsigned;
    }
    Long2.prototype.__isLong__;
    Object.defineProperty(Long2.prototype, "__isLong__", { value: true });
    function isLong(obj) {
      return (obj && obj["__isLong__"]) === true;
    }
    Long2.isLong = isLong;
    var INT_CACHE = {};
    var UINT_CACHE = {};
    function fromInt(value, unsigned) {
      var obj, cachedObj, cache;
      if (unsigned) {
        value >>>= 0;
        if (cache = 0 <= value && value < 256) {
          cachedObj = UINT_CACHE[value];
          if (cachedObj)
            return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
          UINT_CACHE[value] = obj;
        return obj;
      } else {
        value |= 0;
        if (cache = -128 <= value && value < 128) {
          cachedObj = INT_CACHE[value];
          if (cachedObj)
            return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
          INT_CACHE[value] = obj;
        return obj;
      }
    }
    Long2.fromInt = fromInt;
    function fromNumber(value, unsigned) {
      if (isNaN(value))
        return unsigned ? UZERO : ZERO;
      if (unsigned) {
        if (value < 0)
          return UZERO;
        if (value >= TWO_PWR_64_DBL)
          return MAX_UNSIGNED_VALUE;
      } else {
        if (value <= -TWO_PWR_63_DBL)
          return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
          return MAX_VALUE;
      }
      if (value < 0)
        return fromNumber(-value, unsigned).neg();
      return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
    }
    Long2.fromNumber = fromNumber;
    function fromBits(lowBits, highBits, unsigned) {
      return new Long2(lowBits, highBits, unsigned);
    }
    Long2.fromBits = fromBits;
    var pow_dbl = Math.pow;
    function fromString(str, unsigned, radix) {
      if (str.length === 0)
        throw Error("empty string");
      if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
      if (typeof unsigned === "number") {
        radix = unsigned, unsigned = false;
      } else {
        unsigned = !!unsigned;
      }
      radix = radix || 10;
      if (radix < 2 || 36 < radix)
        throw RangeError("radix");
      var p;
      if ((p = str.indexOf("-")) > 0)
        throw Error("interior hyphen");
      else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
      }
      var radixToPower = fromNumber(pow_dbl(radix, 8));
      var result = ZERO;
      for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
          var power = fromNumber(pow_dbl(radix, size));
          result = result.mul(power).add(fromNumber(value));
        } else {
          result = result.mul(radixToPower);
          result = result.add(fromNumber(value));
        }
      }
      result.unsigned = unsigned;
      return result;
    }
    Long2.fromString = fromString;
    function fromValue(val, unsigned) {
      if (typeof val === "number")
        return fromNumber(val, unsigned);
      if (typeof val === "string")
        return fromString(val, unsigned);
      return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
    }
    Long2.fromValue = fromValue;
    var TWO_PWR_16_DBL = 1 << 16;
    var TWO_PWR_24_DBL = 1 << 24;
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
    var ZERO = fromInt(0);
    Long2.ZERO = ZERO;
    var UZERO = fromInt(0, true);
    Long2.UZERO = UZERO;
    var ONE = fromInt(1);
    Long2.ONE = ONE;
    var UONE = fromInt(1, true);
    Long2.UONE = UONE;
    var NEG_ONE = fromInt(-1);
    Long2.NEG_ONE = NEG_ONE;
    var MAX_VALUE = fromBits(4294967295 | 0, 2147483647 | 0, false);
    Long2.MAX_VALUE = MAX_VALUE;
    var MAX_UNSIGNED_VALUE = fromBits(4294967295 | 0, 4294967295 | 0, true);
    Long2.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
    var MIN_VALUE = fromBits(0, 2147483648 | 0, false);
    Long2.MIN_VALUE = MIN_VALUE;
    var LongPrototype = Long2.prototype;
    LongPrototype.toInt = function toInt() {
      return this.unsigned ? this.low >>> 0 : this.low;
    };
    LongPrototype.toNumber = function toNumber() {
      if (this.unsigned)
        return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
      return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };
    LongPrototype.toString = function toString(radix) {
      radix = radix || 10;
      if (radix < 2 || 36 < radix)
        throw RangeError("radix");
      if (this.isZero())
        return "0";
      if (this.isNegative()) {
        if (this.eq(MIN_VALUE)) {
          var radixLong = fromNumber(radix), div2 = this.div(radixLong), rem1 = div2.mul(radixLong).sub(this);
          return div2.toString(radix) + rem1.toInt().toString(radix);
        } else
          return "-" + this.neg().toString(radix);
      }
      var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
      var result = "";
      while (true) {
        var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
          return digits + result;
        else {
          while (digits.length < 6)
            digits = "0" + digits;
          result = "" + digits + result;
        }
      }
    };
    LongPrototype.getHighBits = function getHighBits() {
      return this.high;
    };
    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
      return this.high >>> 0;
    };
    LongPrototype.getLowBits = function getLowBits() {
      return this.low;
    };
    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
      return this.low >>> 0;
    };
    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
      if (this.isNegative())
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
      var val = this.high != 0 ? this.high : this.low;
      for (var bit = 31; bit > 0; bit--)
        if ((val & 1 << bit) != 0)
          break;
      return this.high != 0 ? bit + 33 : bit + 1;
    };
    LongPrototype.isZero = function isZero() {
      return this.high === 0 && this.low === 0;
    };
    LongPrototype.eqz = LongPrototype.isZero;
    LongPrototype.isNegative = function isNegative() {
      return !this.unsigned && this.high < 0;
    };
    LongPrototype.isPositive = function isPositive() {
      return this.unsigned || this.high >= 0;
    };
    LongPrototype.isOdd = function isOdd() {
      return (this.low & 1) === 1;
    };
    LongPrototype.isEven = function isEven() {
      return (this.low & 1) === 0;
    };
    LongPrototype.equals = function equals(other) {
      if (!isLong(other))
        other = fromValue(other);
      if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
        return false;
      return this.high === other.high && this.low === other.low;
    };
    LongPrototype.eq = LongPrototype.equals;
    LongPrototype.notEquals = function notEquals(other) {
      return !this.eq(other);
    };
    LongPrototype.neq = LongPrototype.notEquals;
    LongPrototype.ne = LongPrototype.notEquals;
    LongPrototype.lessThan = function lessThan(other) {
      return this.comp(other) < 0;
    };
    LongPrototype.lt = LongPrototype.lessThan;
    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
      return this.comp(other) <= 0;
    };
    LongPrototype.lte = LongPrototype.lessThanOrEqual;
    LongPrototype.le = LongPrototype.lessThanOrEqual;
    LongPrototype.greaterThan = function greaterThan(other) {
      return this.comp(other) > 0;
    };
    LongPrototype.gt = LongPrototype.greaterThan;
    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
      return this.comp(other) >= 0;
    };
    LongPrototype.gte = LongPrototype.greaterThanOrEqual;
    LongPrototype.ge = LongPrototype.greaterThanOrEqual;
    LongPrototype.compare = function compare(other) {
      if (!isLong(other))
        other = fromValue(other);
      if (this.eq(other))
        return 0;
      var thisNeg = this.isNegative(), otherNeg = other.isNegative();
      if (thisNeg && !otherNeg)
        return -1;
      if (!thisNeg && otherNeg)
        return 1;
      if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
      return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
    };
    LongPrototype.comp = LongPrototype.compare;
    LongPrototype.negate = function negate() {
      if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
      return this.not().add(ONE);
    };
    LongPrototype.neg = LongPrototype.negate;
    LongPrototype.add = function add3(addend) {
      if (!isLong(addend))
        addend = fromValue(addend);
      var a48 = this.high >>> 16;
      var a32 = this.high & 65535;
      var a16 = this.low >>> 16;
      var a00 = this.low & 65535;
      var b48 = addend.high >>> 16;
      var b32 = addend.high & 65535;
      var b16 = addend.low >>> 16;
      var b00 = addend.low & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 + b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 + b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 + b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 + b48;
      c48 &= 65535;
      return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    LongPrototype.subtract = function subtract(subtrahend) {
      if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
      return this.add(subtrahend.neg());
    };
    LongPrototype.sub = LongPrototype.subtract;
    LongPrototype.multiply = function multiply(multiplier) {
      if (this.isZero())
        return ZERO;
      if (!isLong(multiplier))
        multiplier = fromValue(multiplier);
      if (wasm) {
        var low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
      }
      if (multiplier.isZero())
        return ZERO;
      if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
      if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;
      if (this.isNegative()) {
        if (multiplier.isNegative())
          return this.neg().mul(multiplier.neg());
        else
          return this.neg().mul(multiplier).neg();
      } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();
      if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
      var a48 = this.high >>> 16;
      var a32 = this.high & 65535;
      var a16 = this.low >>> 16;
      var a00 = this.low & 65535;
      var b48 = multiplier.high >>> 16;
      var b32 = multiplier.high & 65535;
      var b16 = multiplier.low >>> 16;
      var b00 = multiplier.low & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 * b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 * b00;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c16 += a00 * b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 * b00;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a16 * b16;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a00 * b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
      c48 &= 65535;
      return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    LongPrototype.mul = LongPrototype.multiply;
    LongPrototype.divide = function divide(divisor) {
      if (!isLong(divisor))
        divisor = fromValue(divisor);
      if (divisor.isZero())
        throw Error("division by zero");
      if (wasm) {
        if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
          return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
      }
      if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
      var approx, rem, res;
      if (!this.unsigned) {
        if (this.eq(MIN_VALUE)) {
          if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
            return MIN_VALUE;
          else if (divisor.eq(MIN_VALUE))
            return ONE;
          else {
            var halfThis = this.shr(1);
            approx = halfThis.div(divisor).shl(1);
            if (approx.eq(ZERO)) {
              return divisor.isNegative() ? ONE : NEG_ONE;
            } else {
              rem = this.sub(divisor.mul(approx));
              res = approx.add(rem.div(divisor));
              return res;
            }
          }
        } else if (divisor.eq(MIN_VALUE))
          return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
          if (divisor.isNegative())
            return this.neg().div(divisor.neg());
          return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
          return this.div(divisor.neg()).neg();
        res = ZERO;
      } else {
        if (!divisor.unsigned)
          divisor = divisor.toUnsigned();
        if (divisor.gt(this))
          return UZERO;
        if (divisor.gt(this.shru(1)))
          return UONE;
        res = UZERO;
      }
      rem = this;
      while (rem.gte(divisor)) {
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
        var log22 = Math.ceil(Math.log(approx) / Math.LN2), delta = log22 <= 48 ? 1 : pow_dbl(2, log22 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
          approx -= delta;
          approxRes = fromNumber(approx, this.unsigned);
          approxRem = approxRes.mul(divisor);
        }
        if (approxRes.isZero())
          approxRes = ONE;
        res = res.add(approxRes);
        rem = rem.sub(approxRem);
      }
      return res;
    };
    LongPrototype.div = LongPrototype.divide;
    LongPrototype.modulo = function modulo(divisor) {
      if (!isLong(divisor))
        divisor = fromValue(divisor);
      if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
      }
      return this.sub(this.div(divisor).mul(divisor));
    };
    LongPrototype.mod = LongPrototype.modulo;
    LongPrototype.rem = LongPrototype.modulo;
    LongPrototype.not = function not() {
      return fromBits(~this.low, ~this.high, this.unsigned);
    };
    LongPrototype.and = function and(other) {
      if (!isLong(other))
        other = fromValue(other);
      return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };
    LongPrototype.or = function or(other) {
      if (!isLong(other))
        other = fromValue(other);
      return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };
    LongPrototype.xor = function xor(other) {
      if (!isLong(other))
        other = fromValue(other);
      return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };
    LongPrototype.shiftLeft = function shiftLeft(numBits) {
      if (isLong(numBits))
        numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
        return this;
      else if (numBits < 32)
        return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
      else
        return fromBits(0, this.low << numBits - 32, this.unsigned);
    };
    LongPrototype.shl = LongPrototype.shiftLeft;
    LongPrototype.shiftRight = function shiftRight(numBits) {
      if (isLong(numBits))
        numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
        return this;
      else if (numBits < 32)
        return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
      else
        return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    };
    LongPrototype.shr = LongPrototype.shiftRight;
    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
      if (isLong(numBits))
        numBits = numBits.toInt();
      numBits &= 63;
      if (numBits === 0)
        return this;
      else {
        var high = this.high;
        if (numBits < 32) {
          var low = this.low;
          return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
        } else if (numBits === 32)
          return fromBits(high, 0, this.unsigned);
        else
          return fromBits(high >>> numBits - 32, 0, this.unsigned);
      }
    };
    LongPrototype.shru = LongPrototype.shiftRightUnsigned;
    LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
    LongPrototype.toSigned = function toSigned() {
      if (!this.unsigned)
        return this;
      return fromBits(this.low, this.high, false);
    };
    LongPrototype.toUnsigned = function toUnsigned() {
      if (this.unsigned)
        return this;
      return fromBits(this.low, this.high, true);
    };
    LongPrototype.toBytes = function toBytes(le) {
      return le ? this.toBytesLE() : this.toBytesBE();
    };
    LongPrototype.toBytesLE = function toBytesLE() {
      var hi = this.high, lo = this.low;
      return [
        lo & 255,
        lo >>> 8 & 255,
        lo >>> 16 & 255,
        lo >>> 24,
        hi & 255,
        hi >>> 8 & 255,
        hi >>> 16 & 255,
        hi >>> 24
      ];
    };
    LongPrototype.toBytesBE = function toBytesBE() {
      var hi = this.high, lo = this.low;
      return [
        hi >>> 24,
        hi >>> 16 & 255,
        hi >>> 8 & 255,
        hi & 255,
        lo >>> 24,
        lo >>> 16 & 255,
        lo >>> 8 & 255,
        lo & 255
      ];
    };
    Long2.fromBytes = function fromBytes(bytes, unsigned, le) {
      return le ? Long2.fromBytesLE(bytes, unsigned) : Long2.fromBytesBE(bytes, unsigned);
    };
    Long2.fromBytesLE = function fromBytesLE(bytes, unsigned) {
      return new Long2(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
    };
    Long2.fromBytesBE = function fromBytesBE(bytes, unsigned) {
      return new Long2(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
    };
  }
});

// node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "node_modules/seedrandom/lib/alea.js"(exports, module) {
    (function(global2, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "node_modules/seedrandom/lib/xor128.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "node_modules/seedrandom/lib/xorwow.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v, w;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init(me2, seed2) {
          var j, w, X = [];
          if (seed2 === (seed2 | 0)) {
            w = X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8)
            X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j)
            ;
          if (j == 8)
            w = X[7] = -1;
          else
            w = X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null)
          seed = +new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "node_modules/seedrandom/lib/xor4096.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2)
              v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0)
              w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = 0 == t ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      ;
      function impl(seed, opts) {
        if (seed == null)
          seed = +new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "node_modules/seedrandom/lib/tychei.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      ;
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// browser-external:crypto
var crypto_exports = {};
__export(crypto_exports, {
  default: () => crypto_default
});
var crypto_default;
var init_crypto = __esm({
  "browser-external:crypto"() {
    crypto_default = new Proxy({}, {
      get() {
        throw new Error('Module "crypto" has been externalized for browser compatibility and cannot be accessed in client code.');
      }
    });
  }
});

// node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "node_modules/seedrandom/seedrandom.js"(exports, module) {
    (function(global2, pool2, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom2(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten2(options.entropy ? [seed, tostring(pool2)] : seed == null ? autoseed() : seed, 3), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool2);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else
            return prng2;
        })(prng, shortseed, "global" in options ? options.global : this == math, options.state);
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count--) {
            t2 = s2[i2 = mask & i2 + 1];
            r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      ;
      function flatten2(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten2(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global2.crypto || global2.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e) {
          var browser = global2.navigator, plugins = browser && browser.plugins;
          return [+new Date(), global2, plugins, global2.screen, tostring(pool2)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool2);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom2;
        try {
          nodecrypto = (init_crypto(), __toCommonJS(crypto_exports));
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom2;
        });
      } else {
        math["seed" + rngname] = seedrandom2;
      }
    })(typeof self !== "undefined" ? self : exports, [], Math);
  }
});

// node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "node_modules/seedrandom/index.js"(exports, module) {
    var alea2 = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea2;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  }
});

// browser-external:node-fetch
var node_fetch_exports = {};
__export(node_fetch_exports, {
  default: () => node_fetch_default
});
var node_fetch_default;
var init_node_fetch = __esm({
  "browser-external:node-fetch"() {
    node_fetch_default = new Proxy({}, {
      get() {
        throw new Error('Module "node-fetch" has been externalized for browser compatibility and cannot be accessed in client code.');
      }
    });
  }
});

// browser-external:util
var util_exports2 = {};
__export(util_exports2, {
  default: () => util_default
});
var util_default;
var init_util = __esm({
  "browser-external:util"() {
    util_default = new Proxy({}, {
      get() {
        throw new Error('Module "util" has been externalized for browser compatibility and cannot be accessed in client code.');
      }
    });
  }
});

// node_modules/@tensorflow/tfjs-core/dist/backends/backend.js
var EPSILON_FLOAT32 = 1e-7;
var EPSILON_FLOAT16 = 1e-4;
var DataStorage = class {
  constructor(backend2, dataMover) {
    this.backend = backend2;
    this.dataMover = dataMover;
    this.data = /* @__PURE__ */ new WeakMap();
    this.dataIdsCount = 0;
  }
  get(dataId) {
    if (!this.data.has(dataId)) {
      this.dataMover.moveData(this.backend, dataId);
    }
    return this.data.get(dataId);
  }
  set(dataId, value) {
    this.dataIdsCount++;
    this.data.set(dataId, value);
  }
  has(dataId) {
    return this.data.has(dataId);
  }
  delete(dataId) {
    this.dataIdsCount--;
    return this.data.delete(dataId);
  }
  numDataIds() {
    return this.dataIdsCount;
  }
};
var KernelBackend = class {
  refCount(dataId) {
    return notYetImplemented("refCount");
  }
  incRef(dataId) {
    return notYetImplemented("incRef");
  }
  timerAvailable() {
    return true;
  }
  time(f) {
    return notYetImplemented("time");
  }
  read(dataId) {
    return notYetImplemented("read");
  }
  readSync(dataId) {
    return notYetImplemented("readSync");
  }
  readToGPU(dataId, options) {
    return notYetImplemented("readToGPU");
  }
  numDataIds() {
    return notYetImplemented("numDataIds");
  }
  disposeData(dataId, force) {
    return notYetImplemented("disposeData");
  }
  write(values, shape, dtype) {
    return notYetImplemented("write");
  }
  move(dataId, values, shape, dtype, refCount) {
    return notYetImplemented("move");
  }
  memory() {
    return notYetImplemented("memory");
  }
  floatPrecision() {
    return notYetImplemented("floatPrecision");
  }
  epsilon() {
    return this.floatPrecision() === 32 ? EPSILON_FLOAT32 : EPSILON_FLOAT16;
  }
  dispose() {
    return notYetImplemented("dispose");
  }
};
function notYetImplemented(kernelName) {
  throw new Error(`'${kernelName}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`);
}

// node_modules/@tensorflow/tfjs-core/dist/util_base.js
function shuffle(array) {
  let counter = array.length;
  let index = 0;
  while (counter > 0) {
    index = Math.random() * counter | 0;
    counter--;
    swap(array, counter, index);
  }
}
function shuffleCombo(array, array2) {
  if (array.length !== array2.length) {
    throw new Error(`Array sizes must match to be shuffled together First array length was ${array.length}Second array length was ${array2.length}`);
  }
  let counter = array.length;
  let index = 0;
  while (counter > 0) {
    index = Math.random() * counter | 0;
    counter--;
    swap(array, counter, index);
    swap(array2, counter, index);
  }
}
function clamp(min2, x, max2) {
  return Math.max(min2, Math.min(x, max2));
}
function nearestLargerEven(val) {
  return val % 2 === 0 ? val : val + 1;
}
function swap(object, left, right) {
  const temp = object[left];
  object[left] = object[right];
  object[right] = temp;
}
function sum(arr) {
  let sum3 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum3 += arr[i];
  }
  return sum3;
}
function randUniform(a, b) {
  const r = Math.random();
  return b * r + (1 - r) * a;
}
function distSquared(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = Number(a[i]) - Number(b[i]);
    result += diff * diff;
  }
  return result;
}
function assert(expr, msg) {
  if (!expr) {
    throw new Error(typeof msg === "string" ? msg : msg());
  }
}
function assertShapesMatch(shapeA, shapeB, errorMessagePrefix = "") {
  assert(arraysEqual(shapeA, shapeB), () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
}
function assertNonNull(a) {
  assert(a != null, () => `The input to the tensor constructor must be a non-null value.`);
}
function flatten(arr, result = [], skipTypedArray = false) {
  if (result == null) {
    result = [];
  }
  if (Array.isArray(arr) || isTypedArray(arr) && !skipTypedArray) {
    for (let i = 0; i < arr.length; ++i) {
      flatten(arr[i], result, skipTypedArray);
    }
  } else {
    result.push(arr);
  }
  return result;
}
function sizeFromShape(shape) {
  if (shape.length === 0) {
    return 1;
  }
  let size = shape[0];
  for (let i = 1; i < shape.length; i++) {
    size *= shape[i];
  }
  return size;
}
function isScalarShape(shape) {
  return shape.length === 0;
}
function arraysEqual(n1, n2) {
  if (n1 === n2) {
    return true;
  }
  if (n1 == null || n2 == null) {
    return false;
  }
  if (n1.length !== n2.length) {
    return false;
  }
  for (let i = 0; i < n1.length; i++) {
    if (n1[i] !== n2[i]) {
      return false;
    }
  }
  return true;
}
function isInt(a) {
  return a % 1 === 0;
}
function tanh(x) {
  if (Math.tanh != null) {
    return Math.tanh(x);
  }
  if (x === Infinity) {
    return 1;
  } else if (x === -Infinity) {
    return -1;
  } else {
    const e2x = Math.exp(2 * x);
    return (e2x - 1) / (e2x + 1);
  }
}
function sizeToSquarishShape(size) {
  const width = Math.ceil(Math.sqrt(size));
  return [width, Math.ceil(size / width)];
}
function createShuffledIndices(n) {
  const shuffledIndices = new Uint32Array(n);
  for (let i = 0; i < n; ++i) {
    shuffledIndices[i] = i;
  }
  shuffle(shuffledIndices);
  return shuffledIndices;
}
function rightPad(a, size) {
  if (size <= a.length) {
    return a;
  }
  return a + " ".repeat(size - a.length);
}
function repeatedTry(checkFn, delayFn = (counter) => 0, maxCounter) {
  return new Promise((resolve, reject) => {
    let tryCount = 0;
    const tryFn = () => {
      if (checkFn()) {
        resolve();
        return;
      }
      tryCount++;
      const nextBackoff = delayFn(tryCount);
      if (maxCounter != null && tryCount >= maxCounter) {
        reject();
        return;
      }
      setTimeout(tryFn, nextBackoff);
    };
    tryFn();
  });
}
function inferFromImplicitShape(shape, size) {
  let shapeProd = 1;
  let implicitIdx = -1;
  for (let i = 0; i < shape.length; ++i) {
    if (shape[i] >= 0) {
      shapeProd *= shape[i];
    } else if (shape[i] === -1) {
      if (implicitIdx !== -1) {
        throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${implicitIdx} and dim ${i}`);
      }
      implicitIdx = i;
    } else if (shape[i] < 0) {
      throw Error(`Shapes can not be < 0. Found ${shape[i]} at dim ${i}`);
    }
  }
  if (implicitIdx === -1) {
    if (size > 0 && size !== shapeProd) {
      throw Error(`Size(${size}) must match the product of shape ${shape}`);
    }
    return shape;
  }
  if (shapeProd === 0) {
    throw Error(`Cannot infer the missing size in [${shape}] when there are 0 elements`);
  }
  if (size % shapeProd !== 0) {
    throw Error(`The implicit shape can't be a fractional number. Got ${size} / ${shapeProd}`);
  }
  const newShape = shape.slice();
  newShape[implicitIdx] = size / shapeProd;
  return newShape;
}
function parseAxisParam(axis, shape) {
  const rank = shape.length;
  axis = axis == null ? shape.map((s, i) => i) : [].concat(axis);
  assert(axis.every((ax) => ax >= -rank && ax < rank), () => `All values in axis param must be in range [-${rank}, ${rank}) but got axis ${axis}`);
  assert(axis.every((ax) => isInt(ax)), () => `All values in axis param must be integers but got axis ${axis}`);
  return axis.map((a) => a < 0 ? rank + a : a);
}
function squeezeShape(shape, axis) {
  const newShape = [];
  const keptDims = [];
  const isEmptyArray = axis != null && Array.isArray(axis) && axis.length === 0;
  const axes = axis == null || isEmptyArray ? null : parseAxisParam(axis, shape).sort();
  let j = 0;
  for (let i = 0; i < shape.length; ++i) {
    if (axes != null) {
      if (axes[j] === i && shape[i] !== 1) {
        throw new Error(`Can't squeeze axis ${i} since its dim '${shape[i]}' is not 1`);
      }
      if ((axes[j] == null || axes[j] > i) && shape[i] === 1) {
        newShape.push(shape[i]);
        keptDims.push(i);
      }
      if (axes[j] <= i) {
        j++;
      }
    }
    if (shape[i] !== 1) {
      newShape.push(shape[i]);
      keptDims.push(i);
    }
  }
  return { newShape, keptDims };
}
function getTypedArrayFromDType(dtype, size) {
  let values = null;
  if (dtype == null || dtype === "float32") {
    values = new Float32Array(size);
  } else if (dtype === "int32") {
    values = new Int32Array(size);
  } else if (dtype === "bool") {
    values = new Uint8Array(size);
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
  return values;
}
function getArrayFromDType(dtype, size) {
  let values = null;
  if (dtype == null || dtype === "float32") {
    values = new Float32Array(size);
  } else if (dtype === "int32") {
    values = new Int32Array(size);
  } else if (dtype === "bool") {
    values = new Uint8Array(size);
  } else if (dtype === "string") {
    values = new Array(size);
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
  return values;
}
function checkConversionForErrors(vals, dtype) {
  for (let i = 0; i < vals.length; i++) {
    const num = vals[i];
    if (isNaN(num) || !isFinite(num)) {
      throw Error(`A tensor of type ${dtype} being uploaded contains ${num}.`);
    }
  }
}
function isValidDtype(dtype) {
  return dtype === "bool" || dtype === "complex64" || dtype === "float32" || dtype === "int32" || dtype === "string";
}
function hasEncodingLoss(oldType, newType) {
  if (newType === "complex64") {
    return false;
  }
  if (newType === "float32" && oldType !== "complex64") {
    return false;
  }
  if (newType === "int32" && oldType !== "float32" && oldType !== "complex64") {
    return false;
  }
  if (newType === "bool" && oldType === "bool") {
    return false;
  }
  return true;
}
function isTypedArray(a) {
  return a instanceof Float32Array || a instanceof Int32Array || a instanceof Uint8Array || a instanceof Uint8ClampedArray;
}
function bytesPerElement(dtype) {
  if (dtype === "float32" || dtype === "int32") {
    return 4;
  } else if (dtype === "complex64") {
    return 8;
  } else if (dtype === "bool") {
    return 1;
  } else {
    throw new Error(`Unknown dtype ${dtype}`);
  }
}
function bytesFromStringArray(arr) {
  if (arr == null) {
    return 0;
  }
  let bytes = 0;
  arr.forEach((x) => bytes += x.length);
  return bytes;
}
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isNumber(value) {
  return typeof value === "number";
}
function inferDtype(values) {
  if (Array.isArray(values)) {
    return inferDtype(values[0]);
  }
  if (values instanceof Float32Array) {
    return "float32";
  } else if (values instanceof Int32Array || values instanceof Uint8Array || values instanceof Uint8ClampedArray) {
    return "int32";
  } else if (isNumber(values)) {
    return "float32";
  } else if (isString(values)) {
    return "string";
  } else if (isBoolean(values)) {
    return "bool";
  }
  return "float32";
}
function isFunction(f) {
  return !!(f && f.constructor && f.call && f.apply);
}
function nearestDivisor(size, start) {
  for (let i = start; i < size; ++i) {
    if (size % i === 0) {
      return i;
    }
  }
  return size;
}
function computeStrides(shape) {
  const rank = shape.length;
  if (rank < 2) {
    return [];
  }
  const strides = new Array(rank - 1);
  strides[rank - 2] = shape[rank - 1];
  for (let i = rank - 3; i >= 0; --i) {
    strides[i] = strides[i + 1] * shape[i + 1];
  }
  return strides;
}
function createNestedArray(offset, shape, a, isComplex = false) {
  const ret = new Array();
  if (shape.length === 1) {
    const d = shape[0] * (isComplex ? 2 : 1);
    for (let i = 0; i < d; i++) {
      ret[i] = a[offset + i];
    }
  } else {
    const d = shape[0];
    const rest = shape.slice(1);
    const len = rest.reduce((acc, c) => acc * c) * (isComplex ? 2 : 1);
    for (let i = 0; i < d; i++) {
      ret[i] = createNestedArray(offset + i * len, rest, a, isComplex);
    }
  }
  return ret;
}
function toNestedArray(shape, a, isComplex = false) {
  if (shape.length === 0) {
    return a[0];
  }
  const size = shape.reduce((acc, c) => acc * c) * (isComplex ? 2 : 1);
  if (size === 0) {
    return [];
  }
  if (size !== a.length) {
    throw new Error(`[${shape}] does not match the input size ${a.length}${isComplex ? " for a complex tensor" : ""}.`);
  }
  return createNestedArray(0, shape, a, isComplex);
}
function makeOnesTypedArray(size, dtype) {
  const array = makeZerosTypedArray(size, dtype);
  for (let i = 0; i < array.length; i++) {
    array[i] = 1;
  }
  return array;
}
function makeZerosTypedArray(size, dtype) {
  if (dtype == null || dtype === "float32" || dtype === "complex64") {
    return new Float32Array(size);
  } else if (dtype === "int32") {
    return new Int32Array(size);
  } else if (dtype === "bool") {
    return new Uint8Array(size);
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
}
function makeZerosNestedTypedArray(shape, dtype) {
  const size = shape.reduce((prev, curr) => prev * curr, 1);
  if (dtype == null || dtype === "float32") {
    return toNestedArray(shape, new Float32Array(size));
  } else if (dtype === "int32") {
    return toNestedArray(shape, new Int32Array(size));
  } else if (dtype === "bool") {
    return toNestedArray(shape, new Uint8Array(size));
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
}
function assertNonNegativeIntegerDimensions(shape) {
  shape.forEach((dimSize) => {
    assert(Number.isInteger(dimSize) && dimSize >= 0, () => `Tensor must have a shape comprised of positive integers but got shape [${shape}].`);
  });
}
function locToIndex(locs, rank, strides) {
  if (rank === 0) {
    return 0;
  } else if (rank === 1) {
    return locs[0];
  }
  let index = locs[locs.length - 1];
  for (let i = 0; i < locs.length - 1; ++i) {
    index += strides[i] * locs[i];
  }
  return index;
}
function indexToLoc(index, rank, strides) {
  if (rank === 0) {
    return [];
  } else if (rank === 1) {
    return [index];
  }
  const locs = new Array(rank);
  for (let i = 0; i < locs.length - 1; ++i) {
    locs[i] = Math.floor(index / strides[i]);
    index -= locs[i] * strides[i];
  }
  locs[locs.length - 1] = index;
  return locs;
}
function isPromise(object) {
  return object && object.then && typeof object.then === "function";
}

// node_modules/@tensorflow/tfjs-core/dist/environment.js
var TENSORFLOWJS_FLAGS_PREFIX = "tfjsflags";
var Environment = class {
  constructor(global2) {
    this.global = global2;
    this.flags = {};
    this.flagRegistry = {};
    this.urlFlags = {};
    this.getQueryParams = getQueryParams;
    this.populateURLFlags();
  }
  setPlatform(platformName, platform) {
    if (this.platform != null) {
      if (!(env().getBool("IS_TEST") || env().getBool("PROD"))) {
        console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${platformName}.`);
      }
    }
    this.platformName = platformName;
    this.platform = platform;
  }
  registerFlag(flagName, evaluationFn, setHook) {
    this.flagRegistry[flagName] = { evaluationFn, setHook };
    if (this.urlFlags[flagName] != null) {
      const flagValue = this.urlFlags[flagName];
      if (!(env().getBool("IS_TEST") || env().getBool("PROD"))) {
        console.warn(`Setting feature override from URL ${flagName}: ${flagValue}.`);
      }
      this.set(flagName, flagValue);
    }
  }
  async getAsync(flagName) {
    if (flagName in this.flags) {
      return this.flags[flagName];
    }
    this.flags[flagName] = await this.evaluateFlag(flagName);
    return this.flags[flagName];
  }
  get(flagName) {
    if (flagName in this.flags) {
      return this.flags[flagName];
    }
    const flagValue = this.evaluateFlag(flagName);
    if (isPromise(flagValue)) {
      throw new Error(`Flag ${flagName} cannot be synchronously evaluated. Please use getAsync() instead.`);
    }
    this.flags[flagName] = flagValue;
    return this.flags[flagName];
  }
  getNumber(flagName) {
    return this.get(flagName);
  }
  getBool(flagName) {
    return this.get(flagName);
  }
  getFlags() {
    return this.flags;
  }
  get features() {
    return this.flags;
  }
  set(flagName, value) {
    if (this.flagRegistry[flagName] == null) {
      throw new Error(`Cannot set flag ${flagName} as it has not been registered.`);
    }
    this.flags[flagName] = value;
    if (this.flagRegistry[flagName].setHook != null) {
      this.flagRegistry[flagName].setHook(value);
    }
  }
  evaluateFlag(flagName) {
    if (this.flagRegistry[flagName] == null) {
      throw new Error(`Cannot evaluate flag '${flagName}': no evaluation function found.`);
    }
    return this.flagRegistry[flagName].evaluationFn();
  }
  setFlags(flags) {
    this.flags = Object.assign({}, flags);
  }
  reset() {
    this.flags = {};
    this.urlFlags = {};
    this.populateURLFlags();
  }
  populateURLFlags() {
    if (typeof this.global === "undefined" || typeof this.global.location === "undefined" || typeof this.global.location.search === "undefined") {
      return;
    }
    const urlParams = this.getQueryParams(this.global.location.search);
    if (TENSORFLOWJS_FLAGS_PREFIX in urlParams) {
      const keyValues = urlParams[TENSORFLOWJS_FLAGS_PREFIX].split(",");
      keyValues.forEach((keyValue) => {
        const [key, value] = keyValue.split(":");
        this.urlFlags[key] = parseValue(key, value);
      });
    }
  }
};
function getQueryParams(queryString) {
  const params = {};
  queryString.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, (s, ...t) => {
    decodeParam(params, t[0], t[1]);
    return t.join("=");
  });
  return params;
}
function decodeParam(params, name, value) {
  params[decodeURIComponent(name)] = decodeURIComponent(value || "");
}
function parseValue(flagName, value) {
  value = value.toLowerCase();
  if (value === "true" || value === "false") {
    return value === "true";
  } else if (`${+value}` === value) {
    return +value;
  }
  throw new Error(`Could not parse value flag value ${value} for flag ${flagName}.`);
}
function env() {
  return ENV;
}
var ENV = null;
function setEnvironmentGlobal(environment) {
  ENV = environment;
}

// node_modules/@tensorflow/tfjs-core/dist/kernel_names.js
var Abs = "Abs";
var Acos = "Acos";
var Acosh = "Acosh";
var Add = "Add";
var AddN = "AddN";
var All = "All";
var Any = "Any";
var ArgMax = "ArgMax";
var ArgMin = "ArgMin";
var Asin = "Asin";
var Asinh = "Asinh";
var Atan = "Atan";
var Atanh = "Atanh";
var Atan2 = "Atan2";
var AvgPool = "AvgPool";
var AvgPoolGrad = "AvgPoolGrad";
var AvgPool3D = "AvgPool3D";
var AvgPool3DGrad = "AvgPool3DGrad";
var BatchMatMul = "BatchMatMul";
var BatchToSpaceND = "BatchToSpaceND";
var Bincount = "Bincount";
var BroadcastTo = "BroadcastTo";
var BroadcastArgs = "BroadcastArgs";
var Cast = "Cast";
var Ceil = "Ceil";
var ClipByValue = "ClipByValue";
var Complex = "Complex";
var ComplexAbs = "ComplexAbs";
var Concat = "Concat";
var Conv2D = "Conv2D";
var Conv2DBackpropFilter = "Conv2DBackpropFilter";
var Conv2DBackpropInput = "Conv2DBackpropInput";
var Conv3D = "Conv3D";
var Conv3DBackpropFilterV2 = "Conv3DBackpropFilterV2";
var Conv3DBackpropInputV2 = "Conv3DBackpropInputV2";
var Cos = "Cos";
var Cosh = "Cosh";
var Cumprod = "Cumprod";
var Cumsum = "Cumsum";
var CropAndResize = "CropAndResize";
var DenseBincount = "DenseBincount";
var DepthToSpace = "DepthToSpace";
var DepthwiseConv2dNative = "DepthwiseConv2dNative";
var DepthwiseConv2dNativeBackpropFilter = "DepthwiseConv2dNativeBackpropFilter";
var DepthwiseConv2dNativeBackpropInput = "DepthwiseConv2dNativeBackpropInput";
var Diag = "Diag";
var Dilation2D = "Dilation2D";
var Dilation2DBackpropInput = "Dilation2DBackpropInput";
var Dilation2DBackpropFilter = "Dilation2DBackpropFilter";
var RealDiv = "RealDiv";
var Einsum = "Einsum";
var Elu = "Elu";
var EluGrad = "EluGrad";
var Erf = "Erf";
var Equal = "Equal";
var Exp = "Exp";
var ExpandDims = "ExpandDims";
var Expm1 = "Expm1";
var FFT = "FFT";
var Fill = "Fill";
var FlipLeftRight = "FlipLeftRight";
var Floor = "Floor";
var FloorDiv = "FloorDiv";
var FusedBatchNorm = "FusedBatchNorm";
var GatherV2 = "GatherV2";
var GatherNd = "GatherNd";
var Greater = "Greater";
var GreaterEqual = "GreaterEqual";
var Identity = "Identity";
var IFFT = "IFFT";
var Imag = "Imag";
var IsFinite = "IsFinite";
var IsInf = "IsInf";
var IsNan = "IsNan";
var LeakyRelu = "LeakyRelu";
var Less = "Less";
var LessEqual = "LessEqual";
var LinSpace = "LinSpace";
var Log = "Log";
var Log1p = "Log1p";
var LogicalAnd = "LogicalAnd";
var LogicalNot = "LogicalNot";
var LogicalOr = "LogicalOr";
var LogicalXor = "LogicalXor";
var LogSoftmax = "LogSoftmax";
var LowerBound = "LowerBound";
var LRN = "LRN";
var LRNGrad = "LRNGrad";
var Max = "Max";
var Maximum = "Maximum";
var MaxPool = "MaxPool";
var MaxPoolGrad = "MaxPoolGrad";
var MaxPool3D = "MaxPool3D";
var MaxPool3DGrad = "MaxPool3DGrad";
var MaxPoolWithArgmax = "MaxPoolWithArgmax";
var Mean = "Mean";
var Min = "Min";
var Minimum = "Minimum";
var MirrorPad = "MirrorPad";
var Mod = "Mod";
var Multinomial = "Multinomial";
var Multiply = "Multiply";
var Neg = "Neg";
var NotEqual = "NotEqual";
var NonMaxSuppressionV3 = "NonMaxSuppressionV3";
var NonMaxSuppressionV4 = "NonMaxSuppressionV4";
var NonMaxSuppressionV5 = "NonMaxSuppressionV5";
var OnesLike = "OnesLike";
var OneHot = "OneHot";
var Pack = "Pack";
var PadV2 = "PadV2";
var Pool = "Pool";
var Pow = "Pow";
var Prelu = "Prelu";
var Prod = "Prod";
var Range = "Range";
var Real = "Real";
var Reciprocal = "Reciprocal";
var Relu = "Relu";
var Reshape = "Reshape";
var ResizeNearestNeighbor = "ResizeNearestNeighbor";
var ResizeNearestNeighborGrad = "ResizeNearestNeighborGrad";
var ResizeBilinear = "ResizeBilinear";
var ResizeBilinearGrad = "ResizeBilinearGrad";
var Relu6 = "Relu6";
var Reverse = "Reverse";
var Round = "Round";
var Rsqrt = "Rsqrt";
var ScatterNd = "ScatterNd";
var SearchSorted = "SearchSorted";
var Select = "Select";
var Selu = "Selu";
var Slice = "Slice";
var Sin = "Sin";
var Sinh = "Sinh";
var Sign = "Sign";
var Sigmoid = "Sigmoid";
var Softplus = "Softplus";
var Sqrt = "Sqrt";
var Sum = "Sum";
var SpaceToBatchND = "SpaceToBatchND";
var SplitV = "SplitV";
var Softmax = "Softmax";
var SparseFillEmptyRows = "SparseFillEmptyRows";
var SparseReshape = "SparseReshape";
var SparseSegmentMean = "SparseSegmentMean";
var SparseSegmentSum = "SparseSegmentSum";
var SparseToDense = "SparseToDense";
var SquaredDifference = "SquaredDifference";
var Square = "Square";
var StridedSlice = "StridedSlice";
var StringNGrams = "StringNGrams";
var StringSplit = "StringSplit";
var StringToHashBucketFast = "StringToHashBucketFast";
var Sub = "Sub";
var Tan = "Tan";
var Tanh = "Tanh";
var Tile = "Tile";
var TopK = "TopK";
var Transform = "Transform";
var Transpose = "Transpose";
var Unique = "Unique";
var Unpack = "Unpack";
var UnsortedSegmentSum = "UnsortedSegmentSum";
var UpperBound = "UpperBound";
var ZerosLike = "ZerosLike";
var Step = "Step";
var FromPixels = "FromPixels";
var RotateWithOffset = "RotateWithOffset";
var _FusedMatMul = "_FusedMatMul";
var FusedConv2D = "FusedConv2D";
var FusedDepthwiseConv2D = "FusedDepthwiseConv2D";

// node_modules/@tensorflow/tfjs-core/dist/global_util.js
var globalNameSpace;
function getGlobalNamespace() {
  if (globalNameSpace == null) {
    let ns;
    if (typeof window !== "undefined") {
      ns = window;
    } else if (typeof global !== "undefined") {
      ns = global;
    } else if (typeof process !== "undefined") {
      ns = process;
    } else if (typeof self !== "undefined") {
      ns = self;
    } else {
      throw new Error("Could not find a global object");
    }
    globalNameSpace = ns;
  }
  return globalNameSpace;
}
function getGlobalMap() {
  const ns = getGlobalNamespace();
  if (ns._tfGlobals == null) {
    ns._tfGlobals = /* @__PURE__ */ new Map();
  }
  return ns._tfGlobals;
}
function getGlobal(key, init) {
  const globalMap = getGlobalMap();
  if (globalMap.has(key)) {
    return globalMap.get(key);
  } else {
    const singleton = init();
    globalMap.set(key, singleton);
    return globalMap.get(key);
  }
}

// node_modules/@tensorflow/tfjs-core/dist/log.js
function warn(...msg) {
  if (!(env().getBool("IS_TEST") || env().getBool("PROD"))) {
    console.warn(...msg);
  }
}
function log(...msg) {
  if (!(env().getBool("IS_TEST") || env().getBool("PROD"))) {
    console.log(...msg);
  }
}

// node_modules/@tensorflow/tfjs-core/dist/kernel_registry.js
var kernelRegistry = getGlobal("kernelRegistry", () => /* @__PURE__ */ new Map());
var gradRegistry = getGlobal("gradRegistry", () => /* @__PURE__ */ new Map());
function getKernel(kernelName, backendName) {
  const key = makeKey(kernelName, backendName);
  return kernelRegistry.get(key);
}
function getGradient(kernelName) {
  return gradRegistry.get(kernelName);
}
function getKernelsForBackend(backendName) {
  const it = kernelRegistry.entries();
  const result = [];
  while (true) {
    const { done, value } = it.next();
    if (done) {
      break;
    }
    const [key, config] = value;
    const [backend2] = key.split("_");
    if (backend2 === backendName) {
      result.push(config);
    }
  }
  return result;
}
function registerKernel(config) {
  const { kernelName, backendName } = config;
  const key = makeKey(kernelName, backendName);
  if (kernelRegistry.has(key)) {
    warn(`The kernel '${kernelName}' for backend '${backendName}' is already registered`);
  }
  kernelRegistry.set(key, config);
}
function registerGradient(config) {
  const { kernelName } = config;
  if (gradRegistry.has(kernelName)) {
    if (env().getBool("DEBUG")) {
      warn(`Overriding the gradient for '${kernelName}'`);
    }
  }
  gradRegistry.set(kernelName, config);
}
function unregisterKernel(kernelName, backendName) {
  const key = makeKey(kernelName, backendName);
  if (!kernelRegistry.has(key)) {
    throw new Error(`The kernel '${kernelName}' for backend '${backendName}' is not registered`);
  }
  kernelRegistry.delete(key);
}
function unregisterGradient(kernelName) {
  if (!gradRegistry.has(kernelName)) {
    throw new Error(`The gradient '${kernelName}' for backend is not registered`);
  }
  gradRegistry.delete(kernelName);
}
function copyRegisteredKernels(registeredBackendName, newBackendName) {
  const kernels = getKernelsForBackend(registeredBackendName);
  kernels.forEach((kernelConfig) => {
    const newKernelConfig = Object.assign({}, kernelConfig, { backendName: newBackendName });
    registerKernel(newKernelConfig);
  });
}
function makeKey(kernelName, backendName) {
  return `${backendName}_${kernelName}`;
}

// node_modules/@tensorflow/tfjs-core/dist/util.js
var util_exports = {};
__export(util_exports, {
  arraysEqual: () => arraysEqual,
  assert: () => assert,
  assertNonNegativeIntegerDimensions: () => assertNonNegativeIntegerDimensions,
  assertNonNull: () => assertNonNull,
  assertShapesMatch: () => assertShapesMatch,
  bytesFromStringArray: () => bytesFromStringArray,
  bytesPerElement: () => bytesPerElement,
  checkConversionForErrors: () => checkConversionForErrors,
  clamp: () => clamp,
  computeStrides: () => computeStrides,
  createScalarValue: () => createScalarValue,
  createShuffledIndices: () => createShuffledIndices,
  decodeString: () => decodeString,
  distSquared: () => distSquared,
  encodeString: () => encodeString,
  fetch: () => fetch3,
  fingerPrint64: () => fingerPrint64,
  flatten: () => flatten,
  getArrayFromDType: () => getArrayFromDType,
  getTypedArrayFromDType: () => getTypedArrayFromDType,
  hasEncodingLoss: () => hasEncodingLoss,
  hexToLong: () => hexToLong,
  indexToLoc: () => indexToLoc,
  inferDtype: () => inferDtype,
  inferFromImplicitShape: () => inferFromImplicitShape,
  isBoolean: () => isBoolean,
  isFunction: () => isFunction,
  isInt: () => isInt,
  isNumber: () => isNumber,
  isPromise: () => isPromise,
  isScalarShape: () => isScalarShape,
  isString: () => isString,
  isTypedArray: () => isTypedArray,
  isValidDtype: () => isValidDtype,
  locToIndex: () => locToIndex,
  makeOnesTypedArray: () => makeOnesTypedArray,
  makeZerosNestedTypedArray: () => makeZerosNestedTypedArray,
  makeZerosTypedArray: () => makeZerosTypedArray,
  nearestDivisor: () => nearestDivisor,
  nearestLargerEven: () => nearestLargerEven,
  now: () => now,
  parseAxisParam: () => parseAxisParam,
  randUniform: () => randUniform,
  repeatedTry: () => repeatedTry,
  rightPad: () => rightPad,
  shuffle: () => shuffle,
  shuffleCombo: () => shuffleCombo,
  sizeFromShape: () => sizeFromShape,
  sizeToSquarishShape: () => sizeToSquarishShape,
  squeezeShape: () => squeezeShape,
  sum: () => sum,
  swap: () => swap,
  tanh: () => tanh,
  toNestedArray: () => toNestedArray,
  toTypedArray: () => toTypedArray
});

// node_modules/@tensorflow/tfjs-core/dist/hash_util.js
var LongExports = __toESM(require_long());
var Long = LongExports.default || LongExports;
function hexToLong(hex) {
  return Long.fromString(hex, true, 16);
}
var k0 = hexToLong("c3a5c85c97cb3127");
var k1 = hexToLong("b492b66fbe98f273");
var k2 = hexToLong("9ae16a3b2f90404f");
function shiftMix(val) {
  return val.xor(val.shru(47));
}
function fetch2(s, offset, numBytes) {
  const bytes = s.slice(offset, offset + numBytes);
  return Long.fromBytes(Array.from(bytes), true, true);
}
function fetch64(s, offset) {
  return fetch2(s, offset, 8);
}
function fetch32(s, offset) {
  return fetch2(s, offset, 4);
}
function rotate64(val, shift) {
  return shift === 0 ? val : val.shru(shift).or(val.shl(64 - shift));
}
function hashLen16(u, v, mul2 = hexToLong("9ddfea08eb382d69")) {
  let a = u.xor(v).mul(mul2);
  a = a.xor(a.shru(47));
  let b = v.xor(a).mul(mul2);
  b = b.xor(b.shru(47));
  b = b.mul(mul2);
  return b;
}
function weakHashLen32WithSeeds(w, x, y, z, a, b) {
  a = a.add(w);
  b = rotate64(b.add(a).add(z), 21);
  const c = a;
  a = a.add(x);
  a = a.add(y);
  b = b.add(rotate64(a, 44));
  return [a.add(z), b.add(c)];
}
function weakHashLen32WithSeedsStr(s, offset, a, b) {
  return weakHashLen32WithSeeds(fetch64(s, offset), fetch64(s, offset + 8), fetch64(s, offset + 16), fetch64(s, offset + 24), a, b);
}
function hashLen0to16(s, len = s.length) {
  if (len >= 8) {
    const mul2 = k2.add(len * 2);
    const a = fetch64(s, 0).add(k2);
    const b = fetch64(s, len - 8);
    const c = rotate64(b, 37).mul(mul2).add(a);
    const d = rotate64(a, 25).add(b).mul(mul2);
    return hashLen16(c, d, mul2);
  }
  if (len >= 4) {
    const mul2 = k2.add(len * 2);
    const a = fetch32(s, 0);
    return hashLen16(a.shl(3).add(len), fetch32(s, len - 4), mul2);
  }
  if (len > 0) {
    const a = s[0];
    const b = s[len >> 1];
    const c = s[len - 1];
    const y = a + (b << 8);
    const z = len + (c << 2);
    return shiftMix(k2.mul(y).xor(k0.mul(z))).mul(k2);
  }
  return k2;
}
function hashLen17to32(s, len = s.length) {
  const mul2 = k2.add(len * 2);
  const a = fetch64(s, 0).mul(k1);
  const b = fetch64(s, 8);
  const c = fetch64(s, len - 8).mul(mul2);
  const d = fetch64(s, len - 16).mul(k2);
  return hashLen16(rotate64(a.add(b), 43).add(rotate64(c, 30)).add(d), a.add(rotate64(b.add(k2), 18)).add(c), mul2);
}
function hashLen33to64(s, len = s.length) {
  const mul2 = k2.add(len * 2);
  const a = fetch64(s, 0).mul(k2);
  const b = fetch64(s, 8);
  const c = fetch64(s, len - 8).mul(mul2);
  const d = fetch64(s, len - 16).mul(k2);
  const y = rotate64(a.add(b), 43).add(rotate64(c, 30)).add(d);
  const z = hashLen16(y, a.add(rotate64(b.add(k2), 18)).add(c), mul2);
  const e = fetch64(s, 16).mul(mul2);
  const f = fetch64(s, 24);
  const g = y.add(fetch64(s, len - 32)).mul(mul2);
  const h = z.add(fetch64(s, len - 24)).mul(mul2);
  return hashLen16(rotate64(e.add(f), 43).add(rotate64(g, 30)).add(h), e.add(rotate64(f.add(a), 18)).add(g), mul2);
}
function fingerPrint64(s, len = s.length) {
  const seed = Long.fromNumber(81, true);
  if (len <= 32) {
    if (len <= 16) {
      return hashLen0to16(s, len);
    } else {
      return hashLen17to32(s, len);
    }
  } else if (len <= 64) {
    return hashLen33to64(s, len);
  }
  let x = seed;
  let y = seed.mul(k1).add(113);
  let z = shiftMix(y.mul(k2).add(113)).mul(k2);
  let v = [Long.UZERO, Long.UZERO];
  let w = [Long.UZERO, Long.UZERO];
  x = x.mul(k2).add(fetch64(s, 0));
  let offset = 0;
  const end = (len - 1 >> 6) * 64;
  const last64 = end + (len - 1 & 63) - 63;
  do {
    x = rotate64(x.add(y).add(v[0]).add(fetch64(s, offset + 8)), 37).mul(k1);
    y = rotate64(y.add(v[1]).add(fetch64(s, offset + 48)), 42).mul(k1);
    x = x.xor(w[1]);
    y = y.add(v[0]).add(fetch64(s, offset + 40));
    z = rotate64(z.add(w[0]), 33).mul(k1);
    v = weakHashLen32WithSeedsStr(s, offset, v[1].mul(k1), x.add(w[0]));
    w = weakHashLen32WithSeedsStr(s, offset + 32, z.add(w[1]), y.add(fetch64(s, offset + 16)));
    [z, x] = [x, z];
    offset += 64;
  } while (offset !== end);
  const mul2 = k1.add(z.and(255).shl(1));
  offset = last64;
  w[0] = w[0].add(len - 1 & 63);
  v[0] = v[0].add(w[0]);
  w[0] = w[0].add(v[0]);
  x = rotate64(x.add(y).add(v[0]).add(fetch64(s, offset + 8)), 37).mul(mul2);
  y = rotate64(y.add(v[1]).add(fetch64(s, offset + 48)), 42).mul(mul2);
  x = x.xor(w[1].mul(9));
  y = y.add(v[0].mul(9).add(fetch64(s, offset + 40)));
  z = rotate64(z.add(w[0]), 33).mul(mul2);
  v = weakHashLen32WithSeedsStr(s, offset, v[1].mul(mul2), x.add(w[0]));
  w = weakHashLen32WithSeedsStr(s, offset + 32, z.add(w[1]), y.add(fetch64(s, offset + 16)));
  [z, x] = [x, z];
  return hashLen16(hashLen16(v[0], w[0], mul2).add(shiftMix(y).mul(k0)).add(z), hashLen16(v[1], w[1], mul2).add(x), mul2);
}

// node_modules/@tensorflow/tfjs-core/dist/util.js
function createScalarValue(value, dtype) {
  if (dtype === "string") {
    return encodeString(value);
  }
  return toTypedArray([value], dtype);
}
function noConversionNeeded(a, dtype) {
  return a instanceof Float32Array && dtype === "float32" || a instanceof Int32Array && dtype === "int32" || a instanceof Uint8Array && dtype === "bool";
}
function toTypedArray(a, dtype) {
  if (dtype === "string") {
    throw new Error("Cannot convert a string[] to a TypedArray");
  }
  if (Array.isArray(a)) {
    a = flatten(a);
  }
  if (env().getBool("DEBUG")) {
    checkConversionForErrors(a, dtype);
  }
  if (noConversionNeeded(a, dtype)) {
    return a;
  }
  if (dtype == null || dtype === "float32" || dtype === "complex64") {
    return new Float32Array(a);
  } else if (dtype === "int32") {
    return new Int32Array(a);
  } else if (dtype === "bool") {
    const bool = new Uint8Array(a.length);
    for (let i = 0; i < bool.length; ++i) {
      if (Math.round(a[i]) !== 0) {
        bool[i] = 1;
      }
    }
    return bool;
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
}
function now() {
  return env().platform.now();
}
function fetch3(path, requestInits) {
  return env().platform.fetch(path, requestInits);
}
function encodeString(s, encoding = "utf-8") {
  encoding = encoding || "utf-8";
  return env().platform.encode(s, encoding);
}
function decodeString(bytes, encoding = "utf-8") {
  encoding = encoding || "utf-8";
  return env().platform.decode(bytes, encoding);
}

// node_modules/@tensorflow/tfjs-core/dist/tensor_format.js
var FORMAT_LIMIT_NUM_VALS = 20;
var FORMAT_NUM_FIRST_LAST_VALS = 3;
var FORMAT_NUM_SIG_DIGITS = 7;
function tensorToString(vals, shape, dtype, verbose) {
  const strides = computeStrides(shape);
  const padPerCol = computeMaxSizePerColumn(vals, shape, dtype, strides);
  const rank = shape.length;
  const valsLines = subTensorToString(vals, shape, dtype, strides, padPerCol);
  const lines = ["Tensor"];
  if (verbose) {
    lines.push(`  dtype: ${dtype}`);
    lines.push(`  rank: ${rank}`);
    lines.push(`  shape: [${shape}]`);
    lines.push(`  values:`);
  }
  lines.push(valsLines.map((l) => "    " + l).join("\n"));
  return lines.join("\n");
}
function computeMaxSizePerColumn(vals, shape, dtype, strides) {
  const n = sizeFromShape(shape);
  const numCols = strides[strides.length - 1];
  const padPerCol = new Array(numCols).fill(0);
  const rank = shape.length;
  const valuesOrTuples = dtype === "complex64" ? createComplexTuples(vals) : vals;
  if (rank > 1) {
    for (let row = 0; row < n / numCols; row++) {
      const offset = row * numCols;
      for (let j = 0; j < numCols; j++) {
        padPerCol[j] = Math.max(padPerCol[j], valToString(valuesOrTuples[offset + j], 0, dtype).length);
      }
    }
  }
  return padPerCol;
}
function valToString(val, pad2, dtype) {
  let valStr;
  if (Array.isArray(val)) {
    valStr = `${parseFloat(val[0].toFixed(FORMAT_NUM_SIG_DIGITS))} + ${parseFloat(val[1].toFixed(FORMAT_NUM_SIG_DIGITS))}j`;
  } else if (isString(val)) {
    valStr = `'${val}'`;
  } else if (dtype === "bool") {
    valStr = boolNumToString(val);
  } else {
    valStr = parseFloat(val.toFixed(FORMAT_NUM_SIG_DIGITS)).toString();
  }
  return rightPad(valStr, pad2);
}
function boolNumToString(v) {
  return v === 0 ? "false" : "true";
}
function subTensorToString(vals, shape, dtype, strides, padPerCol, isLast = true) {
  const storagePerElement = dtype === "complex64" ? 2 : 1;
  const size = shape[0];
  const rank = shape.length;
  if (rank === 0) {
    if (dtype === "complex64") {
      const complexTuple = createComplexTuples(vals);
      return [valToString(complexTuple[0], 0, dtype)];
    }
    if (dtype === "bool") {
      return [boolNumToString(vals[0])];
    }
    return [vals[0].toString()];
  }
  if (rank === 1) {
    if (size > FORMAT_LIMIT_NUM_VALS) {
      const firstValsSize = FORMAT_NUM_FIRST_LAST_VALS * storagePerElement;
      let firstVals = Array.from(vals.slice(0, firstValsSize));
      let lastVals = Array.from(vals.slice((size - FORMAT_NUM_FIRST_LAST_VALS) * storagePerElement, size * storagePerElement));
      if (dtype === "complex64") {
        firstVals = createComplexTuples(firstVals);
        lastVals = createComplexTuples(lastVals);
      }
      return [
        "[" + firstVals.map((x, i) => valToString(x, padPerCol[i], dtype)).join(", ") + ", ..., " + lastVals.map((x, i) => valToString(x, padPerCol[size - FORMAT_NUM_FIRST_LAST_VALS + i], dtype)).join(", ") + "]"
      ];
    }
    const displayVals = dtype === "complex64" ? createComplexTuples(vals) : Array.from(vals);
    return [
      "[" + displayVals.map((x, i) => valToString(x, padPerCol[i], dtype)).join(", ") + "]"
    ];
  }
  const subshape = shape.slice(1);
  const substrides = strides.slice(1);
  const stride = strides[0] * storagePerElement;
  const lines = [];
  if (size > FORMAT_LIMIT_NUM_VALS) {
    for (let i = 0; i < FORMAT_NUM_FIRST_LAST_VALS; i++) {
      const start = i * stride;
      const end = start + stride;
      lines.push(...subTensorToString(vals.slice(start, end), subshape, dtype, substrides, padPerCol, false));
    }
    lines.push("...");
    for (let i = size - FORMAT_NUM_FIRST_LAST_VALS; i < size; i++) {
      const start = i * stride;
      const end = start + stride;
      lines.push(...subTensorToString(vals.slice(start, end), subshape, dtype, substrides, padPerCol, i === size - 1));
    }
  } else {
    for (let i = 0; i < size; i++) {
      const start = i * stride;
      const end = start + stride;
      lines.push(...subTensorToString(vals.slice(start, end), subshape, dtype, substrides, padPerCol, i === size - 1));
    }
  }
  const sep = rank === 2 ? "," : "";
  lines[0] = "[" + lines[0] + sep;
  for (let i = 1; i < lines.length - 1; i++) {
    lines[i] = " " + lines[i] + sep;
  }
  let newLineSep = ",\n";
  for (let i = 2; i < rank; i++) {
    newLineSep += "\n";
  }
  lines[lines.length - 1] = " " + lines[lines.length - 1] + "]" + (isLast ? "" : newLineSep);
  return lines;
}
function createComplexTuples(vals) {
  const complexTuples = [];
  for (let i = 0; i < vals.length; i += 2) {
    complexTuples.push([vals[i], vals[i + 1]]);
  }
  return complexTuples;
}

// node_modules/@tensorflow/tfjs-core/dist/tensor.js
var TensorBuffer = class {
  constructor(shape, dtype, values) {
    this.dtype = dtype;
    this.shape = shape.slice();
    this.size = sizeFromShape(shape);
    if (values != null) {
      const n = values.length;
      assert(n === this.size, () => `Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`);
    }
    if (dtype === "complex64") {
      throw new Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);
    }
    this.values = values || getArrayFromDType(dtype, this.size);
    this.strides = computeStrides(shape);
  }
  set(value, ...locs) {
    if (locs.length === 0) {
      locs = [0];
    }
    assert(locs.length === this.rank, () => `The number of provided coordinates (${locs.length}) must match the rank (${this.rank})`);
    const index = this.locToIndex(locs);
    this.values[index] = value;
  }
  get(...locs) {
    if (locs.length === 0) {
      locs = [0];
    }
    let i = 0;
    for (const loc of locs) {
      if (loc < 0 || loc >= this.shape[i]) {
        const msg = `Requested out of range element at ${locs}.   Buffer shape=${this.shape}`;
        throw new Error(msg);
      }
      i++;
    }
    let index = locs[locs.length - 1];
    for (let i2 = 0; i2 < locs.length - 1; ++i2) {
      index += this.strides[i2] * locs[i2];
    }
    return this.values[index];
  }
  locToIndex(locs) {
    if (this.rank === 0) {
      return 0;
    } else if (this.rank === 1) {
      return locs[0];
    }
    let index = locs[locs.length - 1];
    for (let i = 0; i < locs.length - 1; ++i) {
      index += this.strides[i] * locs[i];
    }
    return index;
  }
  indexToLoc(index) {
    if (this.rank === 0) {
      return [];
    } else if (this.rank === 1) {
      return [index];
    }
    const locs = new Array(this.shape.length);
    for (let i = 0; i < locs.length - 1; ++i) {
      locs[i] = Math.floor(index / this.strides[i]);
      index -= locs[i] * this.strides[i];
    }
    locs[locs.length - 1] = index;
    return locs;
  }
  get rank() {
    return this.shape.length;
  }
  toTensor() {
    return trackerFn().makeTensor(this.values, this.shape, this.dtype);
  }
};
var trackerFn = null;
var opHandler = null;
var deprecationWarningFn = null;
function setTensorTracker(fn) {
  trackerFn = fn;
}
function setOpHandler(handler) {
  opHandler = handler;
}
function setDeprecationWarningFn(fn) {
  deprecationWarningFn = fn;
}
var Tensor = class {
  constructor(shape, dtype, dataId, id) {
    this.kept = false;
    this.isDisposedInternal = false;
    this.shape = shape.slice();
    this.dtype = dtype || "float32";
    this.size = sizeFromShape(shape);
    this.strides = computeStrides(shape);
    this.dataId = dataId;
    this.id = id;
    this.rankType = this.rank < 5 ? this.rank.toString() : "higher";
  }
  get rank() {
    return this.shape.length;
  }
  async buffer() {
    const vals = await this.data();
    return opHandler.buffer(this.shape, this.dtype, vals);
  }
  bufferSync() {
    return opHandler.buffer(this.shape, this.dtype, this.dataSync());
  }
  async array() {
    const vals = await this.data();
    return toNestedArray(this.shape, vals, this.dtype === "complex64");
  }
  arraySync() {
    return toNestedArray(this.shape, this.dataSync(), this.dtype === "complex64");
  }
  async data() {
    this.throwIfDisposed();
    const data = trackerFn().read(this.dataId);
    if (this.dtype === "string") {
      const bytes = await data;
      try {
        return bytes.map((b) => decodeString(b));
      } catch (_a) {
        throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
      }
    }
    return data;
  }
  dataToGPU(options) {
    this.throwIfDisposed();
    return trackerFn().readToGPU(this.dataId, options);
  }
  dataSync() {
    this.throwIfDisposed();
    const data = trackerFn().readSync(this.dataId);
    if (this.dtype === "string") {
      try {
        return data.map((b) => decodeString(b));
      } catch (_a) {
        throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
      }
    }
    return data;
  }
  async bytes() {
    this.throwIfDisposed();
    const data = await trackerFn().read(this.dataId);
    if (this.dtype === "string") {
      return data;
    } else {
      return new Uint8Array(data.buffer);
    }
  }
  dispose() {
    if (this.isDisposed) {
      return;
    }
    trackerFn().disposeTensor(this);
    this.isDisposedInternal = true;
  }
  get isDisposed() {
    return this.isDisposedInternal;
  }
  throwIfDisposed() {
    if (this.isDisposed) {
      throw new Error(`Tensor is disposed.`);
    }
  }
  print(verbose = false) {
    return opHandler.print(this, verbose);
  }
  clone() {
    this.throwIfDisposed();
    return opHandler.clone(this);
  }
  toString(verbose = false) {
    const vals = this.dataSync();
    return tensorToString(vals, this.shape, this.dtype, verbose);
  }
  cast(dtype) {
    this.throwIfDisposed();
    return opHandler.cast(this, dtype);
  }
  variable(trainable = true, name, dtype) {
    this.throwIfDisposed();
    return trackerFn().makeVariable(this, trainable, name, dtype);
  }
};
Object.defineProperty(Tensor, Symbol.hasInstance, {
  value: (instance) => {
    return !!instance && instance.data != null && instance.dataSync != null && instance.throwIfDisposed != null;
  }
});
function getGlobalTensorClass() {
  return getGlobal("Tensor", () => {
    return Tensor;
  });
}
getGlobalTensorClass();
var Variable = class extends Tensor {
  constructor(initialValue, trainable, name, tensorId) {
    super(initialValue.shape, initialValue.dtype, initialValue.dataId, tensorId);
    this.trainable = trainable;
    this.name = name;
  }
  assign(newValue) {
    if (newValue.dtype !== this.dtype) {
      throw new Error(`dtype of the new value (${newValue.dtype}) and previous value (${this.dtype}) must match`);
    }
    if (!arraysEqual(newValue.shape, this.shape)) {
      throw new Error(`shape of the new value (${newValue.shape}) and previous value (${this.shape}) must match`);
    }
    trackerFn().disposeTensor(this);
    this.dataId = newValue.dataId;
    trackerFn().incRef(this, null);
  }
  dispose() {
    trackerFn().disposeVariable(this);
    this.isDisposedInternal = true;
  }
};
Object.defineProperty(Variable, Symbol.hasInstance, {
  value: (instance) => {
    return instance instanceof Tensor && instance.assign != null && instance.assign instanceof Function;
  }
});

// node_modules/@tensorflow/tfjs-core/dist/types.js
var Rank;
(function(Rank2) {
  Rank2["R0"] = "R0";
  Rank2["R1"] = "R1";
  Rank2["R2"] = "R2";
  Rank2["R3"] = "R3";
  Rank2["R4"] = "R4";
  Rank2["R5"] = "R5";
  Rank2["R6"] = "R6";
})(Rank || (Rank = {}));
var UpcastInt32AndMap;
(function(UpcastInt32AndMap2) {
  UpcastInt32AndMap2["float32"] = "float32";
  UpcastInt32AndMap2["int32"] = "int32";
  UpcastInt32AndMap2["bool"] = "int32";
  UpcastInt32AndMap2["complex64"] = "complex64";
})(UpcastInt32AndMap || (UpcastInt32AndMap = {}));
var UpcastBoolAndMap;
(function(UpcastBoolAndMap2) {
  UpcastBoolAndMap2["float32"] = "float32";
  UpcastBoolAndMap2["int32"] = "int32";
  UpcastBoolAndMap2["bool"] = "bool";
  UpcastBoolAndMap2["complex64"] = "complex64";
})(UpcastBoolAndMap || (UpcastBoolAndMap = {}));
var UpcastFloat32AndMap;
(function(UpcastFloat32AndMap2) {
  UpcastFloat32AndMap2["float32"] = "float32";
  UpcastFloat32AndMap2["int32"] = "float32";
  UpcastFloat32AndMap2["bool"] = "float32";
  UpcastFloat32AndMap2["complex64"] = "complex64";
})(UpcastFloat32AndMap || (UpcastFloat32AndMap = {}));
var UpcastComplex64AndMap;
(function(UpcastComplex64AndMap2) {
  UpcastComplex64AndMap2["float32"] = "complex64";
  UpcastComplex64AndMap2["int32"] = "complex64";
  UpcastComplex64AndMap2["bool"] = "complex64";
  UpcastComplex64AndMap2["complex64"] = "complex64";
})(UpcastComplex64AndMap || (UpcastComplex64AndMap = {}));
var upcastTypeMap = {
  "float32": UpcastFloat32AndMap,
  "int32": UpcastInt32AndMap,
  "bool": UpcastBoolAndMap,
  "complex64": UpcastComplex64AndMap
};
function upcastType(typeA, typeB) {
  if (typeA === "string" || typeB === "string") {
    if (typeA === "string" && typeB === "string") {
      return "string";
    }
    throw new Error(`Can not upcast ${typeA} with ${typeB}`);
  }
  return upcastTypeMap[typeA][typeB];
}
function sumOutType(type) {
  return upcastType(type, "int32");
}

// node_modules/@tensorflow/tfjs-core/dist/tensor_util.js
var tensor_util_exports = {};
__export(tensor_util_exports, {
  assertTypesMatch: () => assertTypesMatch,
  getTensorsInContainer: () => getTensorsInContainer,
  isTensorInList: () => isTensorInList,
  makeTypesMatch: () => makeTypesMatch
});
function makeTypesMatch(a, b) {
  if (a.dtype === b.dtype) {
    return [a, b];
  }
  const dtype = upcastType(a.dtype, b.dtype);
  return [a.cast(dtype), b.cast(dtype)];
}
function assertTypesMatch(a, b) {
  assert(a.dtype === b.dtype, () => `The dtypes of the first(${a.dtype}) and second(${b.dtype}) input must match`);
}
function isTensorInList(tensor2, tensorList) {
  return tensorList.some((x) => x.id === tensor2.id);
}
function getTensorsInContainer(result) {
  const list = [];
  const seen = /* @__PURE__ */ new Set();
  walkTensorContainer(result, list, seen);
  return list;
}
function walkTensorContainer(container, list, seen) {
  if (container == null) {
    return;
  }
  if (container instanceof Tensor) {
    list.push(container);
    return;
  }
  if (!isIterable(container)) {
    return;
  }
  const iterable = container;
  for (const k in iterable) {
    const val = iterable[k];
    if (!seen.has(val)) {
      seen.add(val);
      walkTensorContainer(val, list, seen);
    }
  }
}
function isIterable(obj) {
  return Array.isArray(obj) || typeof obj === "object";
}

// node_modules/@tensorflow/tfjs-core/dist/device_util.js
var device_util_exports = {};
__export(device_util_exports, {
  isBrowser: () => isBrowser,
  isMobile: () => isMobile,
  mockIsMobile: () => mockIsMobile
});
function _isNavigatorDefined() {
  return typeof navigator !== "undefined" && navigator != null;
}
var isMobileMockValue;
function mockIsMobile(value) {
  isMobileMockValue = value;
}
function isMobile(nav) {
  if (isMobileMockValue !== void 0) {
    return isMobileMockValue;
  }
  if (nav || _isNavigatorDefined()) {
    if (!nav) {
      nav = navigator;
    }
    if (nav.product === "ReactNative") {
      return true;
    }
    const a = nav.userAgent || nav.vendor || (typeof window !== "undefined" ? window.opera : "");
    if (!a) {
      const navAny = nav;
      return navAny.userAgentData && navAny.userAgentData.mobile;
    }
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
  }
  return false;
}
function isBrowser() {
  return typeof window !== "undefined" && window.document != null || typeof WorkerGlobalScope !== "undefined";
}

// node_modules/@tensorflow/tfjs-core/dist/profiler.js
var Profiler = class {
  constructor(backendTimer, logger) {
    this.backendTimer = backendTimer;
    this.logger = logger;
    if (logger == null) {
      this.logger = new Logger();
    }
  }
  profileKernel(kernelName, inputs, f) {
    let outputs;
    const holdResultWrapperFn = () => {
      outputs = f();
    };
    let timer;
    const start = now();
    if (this.backendTimer.timerAvailable()) {
      timer = this.backendTimer.time(holdResultWrapperFn);
    } else {
      holdResultWrapperFn();
      for (const output of outputs) {
        output.dataSync();
      }
      timer = Promise.resolve({ kernelMs: now() - start });
    }
    if (env().getBool("CHECK_COMPUTATION_FOR_ERRORS")) {
      for (let i = 0; i < outputs.length; i++) {
        const output = outputs[i];
        output.data().then((tensorVals) => {
          checkComputationForErrors(tensorVals, output.dtype, kernelName);
        });
      }
    }
    const kernelProfile = {
      kernelName,
      outputs,
      inputs,
      timeMs: timer.then((timing) => timing.kernelMs),
      extraInfo: timer.then((timing) => timing.getExtraProfileInfo != null ? timing.getExtraProfileInfo() : "")
    };
    return kernelProfile;
  }
  logKernelProfile(kernelProfile) {
    const { kernelName, outputs, timeMs, inputs, extraInfo } = kernelProfile;
    outputs.forEach((result) => {
      Promise.all([result.data(), timeMs, extraInfo]).then((valueContainer) => {
        this.logger.logKernelProfile(kernelName, result, valueContainer[0], valueContainer[1], inputs, valueContainer[2]);
      });
    });
  }
};
function checkComputationForErrors(vals, dtype, kernelName) {
  if (dtype !== "float32") {
    return false;
  }
  for (let i = 0; i < vals.length; i++) {
    const num = vals[i];
    if (isNaN(num) || !isFinite(num)) {
      console.warn(`Found ${num} in the result of '${kernelName}'`);
      return true;
    }
  }
  return false;
}
var Logger = class {
  logKernelProfile(name, result, vals, timeMs, inputs, extraInfo) {
    const time2 = typeof timeMs === "number" ? rightPad(`${timeMs}ms`, 9) : timeMs["error"];
    const paddedName = rightPad(name, 25);
    const rank = result.rank;
    const size = result.size;
    const shape = rightPad(result.shape.toString(), 14);
    let inputShapesDescription = "";
    for (const name2 in inputs) {
      const input = inputs[name2];
      if (input != null) {
        const inputShape = input.shape || result.shape;
        const inputRank = inputShape.length;
        inputShapesDescription += `${name2}: ${inputRank}D ${inputRank > 0 ? inputShape : ""} `;
      }
    }
    console.log(`%c${paddedName}	%c${time2}	%c${rank}D ${shape}	%c${size}	%c${inputShapesDescription}	%c${extraInfo}`, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue");
  }
};

// node_modules/@tensorflow/tfjs-core/dist/tape.js
function getFilteredNodesXToY(tape, xs, y) {
  const tensorsFromX = {};
  const nodesFromX = {};
  for (let i = 0; i < xs.length; i++) {
    tensorsFromX[xs[i].id] = true;
  }
  for (let i = 0; i < tape.length; i++) {
    const node = tape[i];
    const nodeInputs = node.inputs;
    for (const inputName in nodeInputs) {
      const input = nodeInputs[inputName];
      let anyInputFromX = false;
      for (let j = 0; j < xs.length; j++) {
        if (tensorsFromX[input.id]) {
          node.outputs.forEach((output) => tensorsFromX[output.id] = true);
          anyInputFromX = true;
          nodesFromX[node.id] = true;
          break;
        }
      }
      if (anyInputFromX) {
        break;
      }
    }
  }
  const tensorsLeadToY = {};
  tensorsLeadToY[y.id] = true;
  const nodesToY = {};
  for (let i = tape.length - 1; i >= 0; i--) {
    const node = tape[i];
    const nodeInputs = node.inputs;
    for (let j = 0; j < node.outputs.length; j++) {
      if (tensorsLeadToY[node.outputs[j].id]) {
        for (const inputName in nodeInputs) {
          tensorsLeadToY[nodeInputs[inputName].id] = true;
          nodesToY[node.id] = true;
        }
        break;
      }
    }
  }
  const filteredTape = [];
  for (let i = 0; i < tape.length; i++) {
    const node = tape[i];
    if (nodesFromX[node.id] && nodesToY[node.id]) {
      const prunedInputs = {};
      for (const inputName in node.inputs) {
        const nodeInput = node.inputs[inputName];
        if (tensorsFromX[nodeInput.id]) {
          prunedInputs[inputName] = nodeInput;
        }
      }
      const prunedNode = Object.assign({}, node);
      prunedNode.inputs = prunedInputs;
      prunedNode.outputs = node.outputs;
      filteredTape.push(prunedNode);
    }
  }
  return filteredTape;
}
function backpropagateGradients(tensorAccumulatedGradientMap, filteredTape, tidy2, add3) {
  for (let i = filteredTape.length - 1; i >= 0; i--) {
    const node = filteredTape[i];
    const dys = [];
    node.outputs.forEach((o) => {
      const gradTensor = tensorAccumulatedGradientMap[o.id];
      if (gradTensor != null) {
        dys.push(gradTensor);
      } else {
        dys.push(null);
      }
    });
    if (node.gradient == null) {
      throw new Error(`Cannot compute gradient: gradient function not found for ${node.kernelName}.`);
    }
    const inputGradients = node.gradient(dys);
    for (const inputName in node.inputs) {
      if (!(inputName in inputGradients)) {
        throw new Error(`Cannot backprop through input ${inputName}. Available gradients found: ${Object.keys(inputGradients)}.`);
      }
      const dx = tidy2(() => inputGradients[inputName]());
      if (dx.dtype !== "float32") {
        throw new Error(`Error in gradient for op ${node.kernelName}. The gradient of input ${inputName} must have 'float32' dtype, but has '${dx.dtype}'`);
      }
      const x = node.inputs[inputName];
      if (!arraysEqual(dx.shape, x.shape)) {
        throw new Error(`Error in gradient for op ${node.kernelName}. The gradient of input '${inputName}' has shape '${dx.shape}', which does not match the shape of the input '${x.shape}'`);
      }
      if (tensorAccumulatedGradientMap[x.id] == null) {
        tensorAccumulatedGradientMap[x.id] = dx;
      } else {
        const curGradient = tensorAccumulatedGradientMap[x.id];
        tensorAccumulatedGradientMap[x.id] = add3(curGradient, dx);
        curGradient.dispose();
      }
    }
  }
}

// node_modules/@tensorflow/tfjs-core/dist/engine.js
function isRegisteredKernelInvocation(kernelInvocation) {
  return kernelInvocation.kernelName != null;
}
var EngineState = class {
  constructor() {
    this.registeredVariables = {};
    this.nextTapeNodeId = 0;
    this.numBytes = 0;
    this.numTensors = 0;
    this.numStringTensors = 0;
    this.numDataBuffers = 0;
    this.gradientDepth = 0;
    this.kernelDepth = 0;
    this.scopeStack = [];
    this.numDataMovesStack = [];
    this.nextScopeId = 0;
    this.tensorInfo = /* @__PURE__ */ new WeakMap();
    this.profiling = false;
    this.activeProfile = {
      newBytes: 0,
      newTensors: 0,
      peakBytes: 0,
      kernels: [],
      result: null,
      get kernelNames() {
        return Array.from(new Set(this.kernels.map((k) => k.name)));
      }
    };
  }
  dispose() {
    for (const variableName in this.registeredVariables) {
      this.registeredVariables[variableName].dispose();
    }
  }
};
var Engine = class {
  constructor(ENV4) {
    this.ENV = ENV4;
    this.registry = {};
    this.registryFactory = {};
    this.pendingBackendInitId = 0;
    this.state = new EngineState();
  }
  async ready() {
    if (this.pendingBackendInit != null) {
      return this.pendingBackendInit.then(() => {
      });
    }
    if (this.backendInstance != null) {
      return;
    }
    const sortedBackends = this.getSortedBackends();
    for (let i = 0; i < sortedBackends.length; i++) {
      const backendName = sortedBackends[i];
      const success = await this.initializeBackend(backendName).success;
      if (success) {
        await this.setBackend(backendName);
        return;
      }
    }
    throw new Error(`Could not initialize any backends, all backend initializations failed.`);
  }
  get backend() {
    if (this.pendingBackendInit != null) {
      throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);
    }
    if (this.backendInstance == null) {
      const { name, asyncInit } = this.initializeBackendsAndReturnBest();
      if (asyncInit) {
        throw new Error(`The highest priority backend '${name}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);
      }
      this.setBackend(name);
    }
    return this.backendInstance;
  }
  backendNames() {
    return Object.keys(this.registryFactory);
  }
  findBackend(backendName) {
    if (!(backendName in this.registry)) {
      if (backendName in this.registryFactory) {
        const { asyncInit } = this.initializeBackend(backendName);
        if (asyncInit) {
          return null;
        }
      } else {
        return null;
      }
    }
    return this.registry[backendName];
  }
  findBackendFactory(backendName) {
    if (!(backendName in this.registryFactory)) {
      return null;
    }
    return this.registryFactory[backendName].factory;
  }
  registerBackend(backendName, factory, priority = 1) {
    if (backendName in this.registryFactory) {
      warn(`${backendName} backend was already registered. Reusing existing backend factory.`);
      return false;
    }
    this.registryFactory[backendName] = { factory, priority };
    return true;
  }
  async setBackend(backendName) {
    if (this.registryFactory[backendName] == null) {
      throw new Error(`Backend name '${backendName}' not found in registry`);
    }
    this.backendName = backendName;
    if (this.registry[backendName] == null) {
      this.backendInstance = null;
      const { success, asyncInit } = this.initializeBackend(backendName);
      const result = asyncInit ? await success : success;
      if (!result) {
        return false;
      }
    }
    this.backendInstance = this.registry[backendName];
    this.setupRegisteredKernels();
    this.profiler = new Profiler(this.backendInstance);
    return true;
  }
  setupRegisteredKernels() {
    const kernels = getKernelsForBackend(this.backendName);
    kernels.forEach((kernel) => {
      if (kernel.setupFunc != null) {
        kernel.setupFunc(this.backendInstance);
      }
    });
  }
  disposeRegisteredKernels(backendName) {
    const kernels = getKernelsForBackend(backendName);
    kernels.forEach((kernel) => {
      if (kernel.disposeFunc != null) {
        kernel.disposeFunc(this.registry[backendName]);
      }
    });
  }
  initializeBackend(backendName) {
    const registryFactoryEntry = this.registryFactory[backendName];
    if (registryFactoryEntry == null) {
      throw new Error(`Cannot initialize backend ${backendName}, no registration found.`);
    }
    try {
      const backend2 = registryFactoryEntry.factory();
      if (backend2 && !(backend2 instanceof KernelBackend) && typeof backend2.then === "function") {
        const promiseId = ++this.pendingBackendInitId;
        const success = backend2.then((backendInstance) => {
          if (promiseId < this.pendingBackendInitId) {
            return false;
          }
          this.registry[backendName] = backendInstance;
          this.pendingBackendInit = null;
          return true;
        }).catch((err) => {
          if (promiseId < this.pendingBackendInitId) {
            return false;
          }
          this.pendingBackendInit = null;
          warn(`Initialization of backend ${backendName} failed`);
          warn(err.stack || err.message);
          return false;
        });
        this.pendingBackendInit = success;
        return { success, asyncInit: true };
      } else {
        this.registry[backendName] = backend2;
        return { success: true, asyncInit: false };
      }
    } catch (err) {
      warn(`Initialization of backend ${backendName} failed`);
      warn(err.stack || err.message);
      return { success: false, asyncInit: false };
    }
  }
  removeBackend(backendName) {
    if (!(backendName in this.registryFactory)) {
      throw new Error(`${backendName} backend not found in registry`);
    }
    if (this.backendName === backendName && this.pendingBackendInit != null) {
      this.pendingBackendInitId++;
    }
    if (backendName in this.registry) {
      this.disposeRegisteredKernels(backendName);
      this.registry[backendName].dispose();
      delete this.registry[backendName];
    }
    delete this.registryFactory[backendName];
    if (this.backendName === backendName) {
      this.pendingBackendInit = null;
      this.backendName = null;
      this.backendInstance = null;
    }
  }
  getSortedBackends() {
    if (Object.keys(this.registryFactory).length === 0) {
      throw new Error("No backend found in registry.");
    }
    return Object.keys(this.registryFactory).sort((a, b) => {
      return this.registryFactory[b].priority - this.registryFactory[a].priority;
    });
  }
  initializeBackendsAndReturnBest() {
    const sortedBackends = this.getSortedBackends();
    for (let i = 0; i < sortedBackends.length; i++) {
      const backendName = sortedBackends[i];
      const { success, asyncInit } = this.initializeBackend(backendName);
      if (asyncInit || success) {
        return { name: backendName, asyncInit };
      }
    }
    throw new Error(`Could not initialize any backends, all backend initializations failed.`);
  }
  moveData(backend2, dataId) {
    const info = this.state.tensorInfo.get(dataId);
    const srcBackend = info.backend;
    const values = this.readSync(dataId);
    const refCount = srcBackend.refCount(dataId);
    srcBackend.disposeData(dataId, true);
    info.backend = backend2;
    backend2.move(dataId, values, info.shape, info.dtype, refCount);
    if (this.shouldCheckForMemLeaks()) {
      this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++;
    }
  }
  tidy(nameOrFn, fn) {
    let name = null;
    if (fn == null) {
      if (typeof nameOrFn !== "function") {
        throw new Error("Please provide a function to tidy()");
      }
      fn = nameOrFn;
    } else {
      if (typeof nameOrFn !== "string" && !(nameOrFn instanceof String)) {
        throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
      }
      if (typeof fn !== "function") {
        throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
      }
      name = nameOrFn;
    }
    let result;
    return this.scopedRun(() => this.startScope(name), () => this.endScope(result), () => {
      result = fn();
      if (result instanceof Promise) {
        console.error("Cannot return a Promise inside of tidy.");
      }
      return result;
    });
  }
  scopedRun(start, end, f) {
    start();
    try {
      const res = f();
      end();
      return res;
    } catch (ex) {
      end();
      throw ex;
    }
  }
  nextTensorId() {
    return Engine.nextTensorId++;
  }
  nextVariableId() {
    return Engine.nextVariableId++;
  }
  clone(x) {
    const y = ENGINE.runKernel(Identity, { x });
    const inputs = { x };
    const grad2 = (dy) => ({
      x: () => {
        const dtype = "float32";
        const gradInputs = { x: dy };
        const attrs = { dtype };
        return ENGINE.runKernel(Cast, gradInputs, attrs);
      }
    });
    const saved = [];
    this.addTapeNode(this.state.activeScope.name, inputs, [y], grad2, saved, {});
    return y;
  }
  runKernel(kernelName, inputs, attrs) {
    if (this.backendName == null) {
      this.backend;
    }
    const hasKernel = getKernel(kernelName, this.backendName) != null;
    if (!hasKernel) {
      throw new Error(`Kernel '${kernelName}' not registered for backend '${this.backendName}'`);
    }
    return this.runKernelFunc({ kernelName, inputs, attrs });
  }
  shouldCheckForMemLeaks() {
    return this.ENV.getBool("IS_TEST");
  }
  checkKernelForMemLeak(kernelName, numDataIdsBefore, outInfos) {
    const numDataIdsAfter = this.backend.numDataIds();
    let numOutputDataIds = 0;
    outInfos.forEach((info) => {
      numOutputDataIds += info.dtype === "complex64" ? 3 : 1;
    });
    const numMoves = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1];
    const dataIdsLeaked = numDataIdsAfter - numDataIdsBefore - numOutputDataIds - numMoves;
    if (dataIdsLeaked > 0) {
      throw new Error(`Backend '${this.backendName}' has an internal memory leak (${dataIdsLeaked} data ids) after running '${kernelName}'`);
    }
  }
  runKernelFunc(kernelParams) {
    let outputs;
    let saved = [];
    const isTapeOn = this.isTapeOn();
    const startingBytecount = this.state.numBytes;
    const startingNumTensors = this.state.numTensors;
    if (this.shouldCheckForMemLeaks()) {
      this.state.numDataMovesStack.push(0);
    }
    let kernelFunc;
    if (this.backendName == null) {
      this.backend;
    }
    let out;
    const kernelOrScopeName = isRegisteredKernelInvocation(kernelParams) ? kernelParams.kernelName : this.state.activeScope != null ? this.state.activeScope.name : "";
    if (isRegisteredKernelInvocation(kernelParams)) {
      const { kernelName, inputs: inputs2, attrs: attrs2 } = kernelParams;
      if (this.backendName == null) {
        this.backend;
      }
      const kernel = getKernel(kernelName, this.backendName);
      assert(kernel != null, () => `Cannot find registered kernel '${kernelName}' for backend '${this.backendName}'`);
      kernelFunc = () => {
        const numDataIdsBefore = this.backend.numDataIds();
        out = kernel.kernelFunc({ inputs: inputs2, attrs: attrs2, backend: this.backend });
        const outInfos = Array.isArray(out) ? out : [out];
        if (this.shouldCheckForMemLeaks()) {
          this.checkKernelForMemLeak(kernelName, numDataIdsBefore, outInfos);
        }
        const outTensors = outInfos.map((outInfo) => {
          if (outInfo.rank != null) {
            return outInfo;
          }
          return this.makeTensorFromTensorInfo(outInfo);
        });
        if (isTapeOn) {
          const tensorsToSave = this.getTensorsForGradient(kernelName, inputs2, outTensors);
          saved = this.saveTensorsForBackwardMode(tensorsToSave);
        }
        return outTensors;
      };
    } else {
      const { forwardFunc } = kernelParams;
      const saveFunc = (tensors) => {
        if (!isTapeOn) {
          return;
        }
        saved = tensors.map((tensor2) => this.keep(this.clone(tensor2)));
      };
      kernelFunc = () => {
        const numDataIdsBefore = this.backend.numDataIds();
        out = this.tidy(() => forwardFunc(this.backend, saveFunc));
        const outs = Array.isArray(out) ? out : [out];
        if (this.shouldCheckForMemLeaks()) {
          this.checkKernelForMemLeak(kernelOrScopeName, numDataIdsBefore, outs);
        }
        return outs;
      };
    }
    const { inputs, attrs } = kernelParams;
    const backwardsFunc = isRegisteredKernelInvocation(kernelParams) ? null : kernelParams.backwardsFunc;
    let kernelProfile;
    this.scopedRun(() => this.state.kernelDepth++, () => this.state.kernelDepth--, () => {
      if (!this.ENV.getBool("DEBUG") && !this.state.profiling) {
        outputs = kernelFunc();
      } else {
        kernelProfile = this.profiler.profileKernel(kernelOrScopeName, inputs, () => kernelFunc());
        if (this.ENV.getBool("DEBUG")) {
          this.profiler.logKernelProfile(kernelProfile);
        }
        outputs = kernelProfile.outputs;
      }
    });
    if (isTapeOn) {
      this.addTapeNode(kernelOrScopeName, inputs, outputs, backwardsFunc, saved, attrs);
    }
    if (this.state.profiling) {
      this.state.activeProfile.kernels.push({
        name: kernelOrScopeName,
        bytesAdded: this.state.numBytes - startingBytecount,
        totalBytesSnapshot: this.state.numBytes,
        tensorsAdded: this.state.numTensors - startingNumTensors,
        totalTensorsSnapshot: this.state.numTensors,
        inputShapes: Object.keys(inputs).map((key) => inputs[key] != null ? inputs[key].shape : null),
        outputShapes: outputs.map((item) => item.shape),
        kernelTimeMs: kernelProfile.timeMs,
        extraInfo: kernelProfile.extraInfo
      });
    }
    return Array.isArray(out) ? outputs : outputs[0];
  }
  saveTensorsForBackwardMode(tensors) {
    const saved = tensors.map((tensor2) => this.keep(this.clone(tensor2)));
    return saved;
  }
  getTensorsForGradient(kernelName, inputs, outputs) {
    const gradConfig = getGradient(kernelName);
    if (gradConfig != null) {
      const inputsToSave = gradConfig.inputsToSave || [];
      const outputsToSave = gradConfig.outputsToSave || [];
      let inputTensorsToSave;
      if (gradConfig.saveAllInputs) {
        assert(Array.isArray(inputs), () => "saveAllInputs is true, expected inputs to be an array.");
        inputTensorsToSave = Object.keys(inputs).map((key) => inputs[key]);
      } else {
        inputTensorsToSave = inputsToSave.map((inputName) => inputs[inputName]);
      }
      const outputTensorsToSave = outputs.filter((_, i) => outputsToSave[i]);
      return inputTensorsToSave.concat(outputTensorsToSave);
    }
    return [];
  }
  makeTensor(values, shape, dtype, backend2) {
    if (values == null) {
      throw new Error("Values passed to engine.makeTensor() are null");
    }
    dtype = dtype || "float32";
    backend2 = backend2 || this.backend;
    let backendVals = values;
    if (dtype === "string" && isString(values[0])) {
      backendVals = values.map((d) => encodeString(d));
    }
    const dataId = backend2.write(backendVals, shape, dtype);
    const t = new Tensor(shape, dtype, dataId, this.nextTensorId());
    this.trackTensor(t, backend2);
    if (dtype === "string") {
      const info = this.state.tensorInfo.get(dataId);
      const newBytes = bytesFromStringArray(backendVals);
      this.state.numBytes += newBytes - info.bytes;
      info.bytes = newBytes;
    }
    return t;
  }
  makeTensorFromDataId(dataId, shape, dtype, backend2) {
    dtype = dtype || "float32";
    const tensorInfo = { dataId, shape, dtype };
    return this.makeTensorFromTensorInfo(tensorInfo, backend2);
  }
  makeTensorFromTensorInfo(tensorInfo, backend2) {
    const { dataId, shape, dtype } = tensorInfo;
    const t = new Tensor(shape, dtype, dataId, this.nextTensorId());
    this.trackTensor(t, backend2);
    return t;
  }
  makeVariable(initialValue, trainable = true, name, dtype) {
    name = name || this.nextVariableId().toString();
    if (dtype != null && dtype !== initialValue.dtype) {
      initialValue = initialValue.cast(dtype);
    }
    const v = new Variable(initialValue, trainable, name, this.nextTensorId());
    if (this.state.registeredVariables[v.name] != null) {
      throw new Error(`Variable with name ${v.name} was already registered`);
    }
    this.state.registeredVariables[v.name] = v;
    this.incRef(v, this.backend);
    return v;
  }
  trackTensor(a, backend2) {
    this.state.numTensors++;
    if (a.dtype === "string") {
      this.state.numStringTensors++;
    }
    let bytes = 0;
    if (a.dtype !== "complex64" && a.dtype !== "string") {
      bytes = a.size * bytesPerElement(a.dtype);
    }
    this.state.numBytes += bytes;
    if (!this.state.tensorInfo.has(a.dataId)) {
      this.state.numDataBuffers++;
      this.state.tensorInfo.set(a.dataId, {
        backend: backend2 || this.backend,
        dtype: a.dtype,
        shape: a.shape,
        bytes
      });
    }
    if (!(a instanceof Variable)) {
      this.track(a);
    }
  }
  incRef(a, backend2) {
    this.trackTensor(a, backend2);
    this.backend.incRef(a.dataId);
  }
  removeDataId(dataId, backend2) {
    if (this.state.tensorInfo.has(dataId) && this.state.tensorInfo.get(dataId).backend === backend2) {
      this.state.tensorInfo.delete(dataId);
      this.state.numDataBuffers--;
    }
  }
  disposeTensor(a) {
    if (!this.state.tensorInfo.has(a.dataId)) {
      return;
    }
    const info = this.state.tensorInfo.get(a.dataId);
    this.state.numTensors--;
    if (a.dtype === "string") {
      this.state.numStringTensors--;
      this.state.numBytes -= info.bytes;
    }
    if (a.dtype !== "complex64" && a.dtype !== "string") {
      const bytes = a.size * bytesPerElement(a.dtype);
      this.state.numBytes -= bytes;
    }
    if (info.backend.disposeData(a.dataId)) {
      this.removeDataId(a.dataId, info.backend);
    }
  }
  disposeVariables() {
    for (const varName in this.state.registeredVariables) {
      const v = this.state.registeredVariables[varName];
      this.disposeVariable(v);
    }
  }
  disposeVariable(v) {
    this.disposeTensor(v);
    if (this.state.registeredVariables[v.name] != null) {
      delete this.state.registeredVariables[v.name];
    }
  }
  memory() {
    const info = this.backend.memory();
    info.numTensors = this.state.numTensors;
    info.numDataBuffers = this.state.numDataBuffers;
    info.numBytes = this.state.numBytes;
    if (this.state.numStringTensors > 0) {
      info.unreliable = true;
      if (info.reasons == null) {
        info.reasons = [];
      }
      info.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)");
    }
    return info;
  }
  async profile(query) {
    this.state.profiling = true;
    const startBytes = this.state.numBytes;
    const startNumTensors = this.state.numTensors;
    this.state.activeProfile.kernels = [];
    this.state.activeProfile.result = await query();
    this.state.profiling = false;
    this.state.activeProfile.peakBytes = Math.max(...this.state.activeProfile.kernels.map((d) => d.totalBytesSnapshot));
    this.state.activeProfile.newBytes = this.state.numBytes - startBytes;
    this.state.activeProfile.newTensors = this.state.numTensors - startNumTensors;
    for (const kernel of this.state.activeProfile.kernels) {
      kernel.kernelTimeMs = await kernel.kernelTimeMs;
      kernel.extraInfo = await kernel.extraInfo;
    }
    return this.state.activeProfile;
  }
  isTapeOn() {
    return this.state.gradientDepth > 0 && this.state.kernelDepth === 0;
  }
  addTapeNode(kernelName, inputs, outputs, gradientsFunc, saved, attrs) {
    const tapeNode = { id: this.state.nextTapeNodeId++, kernelName, inputs, outputs, saved };
    const gradConfig = getGradient(kernelName);
    if (gradConfig != null) {
      gradientsFunc = gradConfig.gradFunc;
    }
    if (gradientsFunc != null) {
      tapeNode.gradient = (dys) => {
        dys = dys.map((dy, i) => {
          if (dy == null) {
            const output = outputs[i];
            const vals = makeZerosTypedArray(output.size, output.dtype);
            return this.makeTensor(vals, output.shape, output.dtype);
          }
          return dy;
        });
        return gradientsFunc(dys.length > 1 ? dys : dys[0], saved, attrs);
      };
    }
    this.state.activeTape.push(tapeNode);
  }
  keep(result) {
    result.kept = true;
    return result;
  }
  startTape() {
    if (this.state.gradientDepth === 0) {
      this.state.activeTape = [];
    }
    this.state.gradientDepth++;
  }
  endTape() {
    this.state.gradientDepth--;
  }
  startScope(name) {
    const scopeInfo = {
      track: [],
      name: "unnamed scope",
      id: this.state.nextScopeId++
    };
    if (name) {
      scopeInfo.name = name;
    }
    this.state.scopeStack.push(scopeInfo);
    this.state.activeScope = scopeInfo;
  }
  endScope(result) {
    const tensorsToTrackInParent = getTensorsInContainer(result);
    const tensorsToTrackInParentSet = new Set(tensorsToTrackInParent.map((t) => t.id));
    for (let i = 0; i < this.state.activeScope.track.length; i++) {
      const tensor2 = this.state.activeScope.track[i];
      if (!tensor2.kept && !tensorsToTrackInParentSet.has(tensor2.id)) {
        tensor2.dispose();
      }
    }
    const oldScope = this.state.scopeStack.pop();
    this.state.activeScope = this.state.scopeStack.length === 0 ? null : this.state.scopeStack[this.state.scopeStack.length - 1];
    tensorsToTrackInParent.forEach((tensor2) => {
      if (!tensor2.kept && tensor2.scopeId === oldScope.id) {
        this.track(tensor2);
      }
    });
  }
  gradients(f, xs, dy, allowNoGradients = false) {
    assert(xs.length > 0, () => "gradients() received an empty list of xs.");
    if (dy != null && dy.dtype !== "float32") {
      throw new Error(`dy must have 'float32' dtype, but has '${dy.dtype}'`);
    }
    const y = this.scopedRun(() => this.startTape(), () => this.endTape(), () => this.tidy("forward", f));
    assert(y instanceof Tensor, () => "The result y returned by f() must be a tensor.");
    const filteredTape = getFilteredNodesXToY(this.state.activeTape, xs, y);
    if (!allowNoGradients && filteredTape.length === 0 && xs.length > 0) {
      throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
    }
    return this.tidy("backward", () => {
      const accumulatedGradientMap = {};
      accumulatedGradientMap[y.id] = dy == null ? ones(y.shape) : dy;
      backpropagateGradients(accumulatedGradientMap, filteredTape, (f2) => this.tidy(f2), add);
      const grads2 = xs.map((x) => accumulatedGradientMap[x.id]);
      if (this.state.gradientDepth === 0) {
        this.state.activeTape.forEach((node) => {
          for (const tensor2 of node.saved) {
            tensor2.dispose();
          }
        });
        this.state.activeTape = null;
      }
      return { value: y, grads: grads2 };
    });
  }
  customGrad(f) {
    assert(isFunction(f), () => "The f passed in customGrad(f) must be a function.");
    return (...inputs) => {
      assert(inputs.every((t) => t instanceof Tensor), () => "The args passed in customGrad(f)(x1, x2,...) must all be tensors");
      let res;
      const inputMap = {};
      inputs.forEach((input, i) => {
        inputMap[i] = input;
      });
      const forwardFunc = (_, save) => {
        res = f(...[...inputs, save]);
        assert(res.value instanceof Tensor, () => "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor");
        assert(isFunction(res.gradFunc), () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.");
        return res.value;
      };
      const backwardsFunc = (dy, saved) => {
        const gradRes = res.gradFunc(dy, saved);
        const grads2 = Array.isArray(gradRes) ? gradRes : [gradRes];
        assert(grads2.length === inputs.length, () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).");
        assert(grads2.every((t) => t instanceof Tensor), () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");
        const gradMap = {};
        grads2.forEach((grad2, i) => {
          gradMap[i] = () => grad2;
        });
        return gradMap;
      };
      return this.runKernelFunc({
        forwardFunc,
        backwardsFunc,
        inputs: inputMap
      });
    };
  }
  readSync(dataId) {
    const info = this.state.tensorInfo.get(dataId);
    return info.backend.readSync(dataId);
  }
  read(dataId) {
    const info = this.state.tensorInfo.get(dataId);
    return info.backend.read(dataId);
  }
  readToGPU(dataId, options) {
    const info = this.state.tensorInfo.get(dataId);
    return info.backend.readToGPU(dataId, options);
  }
  async time(query) {
    const start = now();
    const timingInfo = await this.backend.time(query);
    timingInfo.wallMs = now() - start;
    return timingInfo;
  }
  track(result) {
    if (this.state.activeScope != null) {
      result.scopeId = this.state.activeScope.id;
      this.state.activeScope.track.push(result);
    }
    return result;
  }
  get registeredVariables() {
    return this.state.registeredVariables;
  }
  reset() {
    this.pendingBackendInitId++;
    this.state.dispose();
    this.ENV.reset();
    this.state = new EngineState();
    for (const backendName in this.registry) {
      this.disposeRegisteredKernels(backendName);
      this.registry[backendName].dispose();
      delete this.registry[backendName];
    }
    this.backendName = null;
    this.backendInstance = null;
    this.pendingBackendInit = null;
  }
};
Engine.nextTensorId = 0;
Engine.nextVariableId = 0;
function ones(shape) {
  const values = makeOnesTypedArray(sizeFromShape(shape), "float32");
  return ENGINE.makeTensor(values, shape, "float32");
}
function getOrMakeEngine() {
  const ns = getGlobalNamespace();
  if (ns._tfengine == null) {
    const environment = new Environment(ns);
    ns._tfengine = new Engine(environment);
  }
  setEnvironmentGlobal(ns._tfengine.ENV);
  setTensorTracker(() => ns._tfengine);
  return ns._tfengine;
}
var ENGINE = getOrMakeEngine();
function add(a, b) {
  const inputs = { a, b };
  return ENGINE.runKernel(Add, inputs);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/operation.js
var OP_SCOPE_SUFFIX = "__op";
function op(f) {
  const keys = Object.keys(f);
  if (keys.length !== 1) {
    throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${keys.length} keys.`);
  }
  let opName = keys[0];
  const fn = f[opName];
  if (opName.endsWith("_")) {
    opName = opName.substring(0, opName.length - 1);
  }
  opName = opName + OP_SCOPE_SUFFIX;
  const f2 = (...args) => {
    ENGINE.startScope(opName);
    try {
      const result = fn(...args);
      if (isPromise(result)) {
        console.error("Cannot return a Promise inside of tidy.");
      }
      ENGINE.endScope(result);
      return result;
    } catch (ex) {
      ENGINE.endScope(null);
      throw ex;
    }
  };
  Object.defineProperty(f2, "name", { value: opName, configurable: true });
  return f2;
}

// node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js
function inferShape(val, dtype) {
  let firstElem = val;
  if (isTypedArray(val)) {
    return dtype === "string" ? [] : [val.length];
  }
  if (!Array.isArray(val)) {
    return [];
  }
  const shape = [];
  while (Array.isArray(firstElem) || isTypedArray(firstElem) && dtype !== "string") {
    shape.push(firstElem.length);
    firstElem = firstElem[0];
  }
  if (Array.isArray(val) && env().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")) {
    deepAssertShapeConsistency(val, shape, []);
  }
  return shape;
}
function deepAssertShapeConsistency(val, shape, indices) {
  indices = indices || [];
  if (!Array.isArray(val) && !isTypedArray(val)) {
    assert(shape.length === 0, () => `Element arr[${indices.join("][")}] is a primitive, but should be an array/TypedArray of ${shape[0]} elements`);
    return;
  }
  assert(shape.length > 0, () => `Element arr[${indices.join("][")}] should be a primitive, but is an array of ${val.length} elements`);
  assert(val.length === shape[0], () => `Element arr[${indices.join("][")}] should have ${shape[0]} elements, but has ${val.length} elements`);
  const subShape = shape.slice(1);
  for (let i = 0; i < val.length; ++i) {
    deepAssertShapeConsistency(val[i], subShape, indices.concat(i));
  }
}
function assertDtype(expectedDtype, actualDType, argName, functionName) {
  if (expectedDtype === "string_or_numeric") {
    return;
  }
  if (expectedDtype == null) {
    throw new Error(`Expected dtype cannot be null.`);
  }
  if (expectedDtype !== "numeric" && expectedDtype !== actualDType || expectedDtype === "numeric" && actualDType === "string") {
    throw new Error(`Argument '${argName}' passed to '${functionName}' must be ${expectedDtype} tensor, but got ${actualDType} tensor`);
  }
}
function convertToTensor(x, argName, functionName, parseAsDtype = "numeric") {
  if (x instanceof Tensor) {
    assertDtype(parseAsDtype, x.dtype, argName, functionName);
    return x;
  }
  let inferredDtype = inferDtype(x);
  if (inferredDtype !== "string" && ["bool", "int32", "float32"].indexOf(parseAsDtype) >= 0) {
    inferredDtype = parseAsDtype;
  }
  assertDtype(parseAsDtype, inferredDtype, argName, functionName);
  if (x == null || !isTypedArray(x) && !Array.isArray(x) && typeof x !== "number" && typeof x !== "boolean" && typeof x !== "string") {
    const type = x == null ? "null" : x.constructor.name;
    throw new Error(`Argument '${argName}' passed to '${functionName}' must be a Tensor or TensorLike, but got '${type}'`);
  }
  const inferredShape = inferShape(x, inferredDtype);
  if (!isTypedArray(x) && !Array.isArray(x)) {
    x = [x];
  }
  const skipTypedArray = true;
  const values = inferredDtype !== "string" ? toTypedArray(x, inferredDtype) : flatten(x, [], skipTypedArray);
  return ENGINE.makeTensor(values, inferredShape, inferredDtype);
}
function convertToTensorArray(arg, argName, functionName, parseAsDtype = "numeric") {
  if (!Array.isArray(arg)) {
    throw new Error(`Argument ${argName} passed to ${functionName} must be a \`Tensor[]\` or \`TensorLike[]\``);
  }
  const tensors = arg;
  return tensors.map((t, i) => convertToTensor(t, `${argName}[${i}]`, functionName, parseAsDtype));
}

// node_modules/@tensorflow/tfjs-core/dist/ops/complex.js
function complex_(real2, imag2) {
  const $real = convertToTensor(real2, "real", "complex");
  const $imag = convertToTensor(imag2, "imag", "complex");
  assertShapesMatch($real.shape, $imag.shape, `real and imag shapes, ${$real.shape} and ${$imag.shape}, must match in call to tf.complex().`);
  const inputs = { real: $real, imag: $imag };
  return ENGINE.runKernel(Complex, inputs);
}
var complex = op({ complex_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/tensor_ops_util.js
function makeTensor(values, shape, inferredShape, dtype) {
  if (dtype == null) {
    dtype = inferDtype(values);
  }
  if (dtype === "complex64") {
    throw new Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);
  }
  if (!isTypedArray(values) && !Array.isArray(values) && typeof values !== "number" && typeof values !== "boolean" && typeof values !== "string") {
    throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
  }
  if (shape != null) {
    assertNonNegativeIntegerDimensions(shape);
    const providedSize = sizeFromShape(shape);
    const inferredSize = sizeFromShape(inferredShape);
    assert(providedSize === inferredSize, () => `Based on the provided shape, [${shape}], the tensor should have ${providedSize} values but has ${inferredSize}`);
    for (let i = 0; i < inferredShape.length; ++i) {
      const inferred = inferredShape[i];
      const flatDimsDontMatch = i === inferredShape.length - 1 ? inferred !== sizeFromShape(shape.slice(i)) : true;
      assert(inferredShape[i] === shape[i] || !flatDimsDontMatch, () => `Error creating a new Tensor. Inferred shape (${inferredShape}) does not match the provided shape (${shape}). `);
    }
  }
  if (!isTypedArray(values) && !Array.isArray(values)) {
    values = [values];
  }
  shape = shape || inferredShape;
  values = dtype !== "string" ? toTypedArray(values, dtype) : flatten(values, [], true);
  return ENGINE.makeTensor(values, shape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/tensor.js
function tensor(values, shape, dtype) {
  const inferredShape = inferShape(values, dtype);
  return makeTensor(values, shape, inferredShape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/buffer.js
function buffer(shape, dtype = "float32", values) {
  dtype = dtype || "float32";
  assertNonNegativeIntegerDimensions(shape);
  return new TensorBuffer(shape, dtype, values);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/cast.js
function cast_(x, dtype) {
  const $x = convertToTensor(x, "x", "cast");
  if (!isValidDtype(dtype)) {
    throw new Error(`Failed to cast to unknown dtype ${dtype}`);
  }
  if (dtype === "string" && $x.dtype !== "string" || dtype !== "string" && $x.dtype === "string") {
    throw new Error("Only strings can be casted to strings");
  }
  const inputs = { x: $x };
  const attrs = { dtype };
  return ENGINE.runKernel(Cast, inputs, attrs);
}
var cast = op({ cast_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/clone.js
function clone_(x) {
  const $x = convertToTensor(x, "x", "clone", "string_or_numeric");
  const inputs = { x: $x };
  return ENGINE.runKernel(Identity, inputs);
}
var clone = op({ clone_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/print.js
function print(x, verbose = false) {
  console.log(x.toString(verbose));
}

// node_modules/@tensorflow/tfjs-core/dist/io/io.js
var io_exports = {};
__export(io_exports, {
  browserFiles: () => browserFiles,
  browserHTTPRequest: () => browserHTTPRequest,
  concatenateArrayBuffers: () => concatenateArrayBuffers,
  copyModel: () => copyModel,
  decodeWeights: () => decodeWeights,
  encodeWeights: () => encodeWeights,
  fromMemory: () => fromMemory,
  fromMemorySync: () => fromMemorySync,
  getLoadHandlers: () => getLoadHandlers,
  getModelArtifactsForJSON: () => getModelArtifactsForJSON,
  getModelArtifactsInfoForJSON: () => getModelArtifactsInfoForJSON,
  getSaveHandlers: () => getSaveHandlers,
  http: () => http,
  isHTTPScheme: () => isHTTPScheme,
  listModels: () => listModels,
  loadWeights: () => loadWeights,
  moveModel: () => moveModel,
  registerLoadRouter: () => registerLoadRouter,
  registerSaveRouter: () => registerSaveRouter,
  removeModel: () => removeModel,
  weightsLoaderFactory: () => weightsLoaderFactory,
  withSaveHandler: () => withSaveHandler,
  withSaveHandlerSync: () => withSaveHandlerSync
});

// node_modules/@tensorflow/tfjs-core/dist/flags.js
var ENV2 = env();
ENV2.registerFlag("DEBUG", () => false, (debugValue) => {
  if (debugValue) {
    console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");
  }
});
ENV2.registerFlag("IS_BROWSER", () => isBrowser());
ENV2.registerFlag("IS_NODE", () => typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined");
ENV2.registerFlag("IS_CHROME", () => typeof navigator !== "undefined" && navigator != null && navigator.userAgent != null && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor));
ENV2.registerFlag("PROD", () => false);
ENV2.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", () => ENV2.getBool("DEBUG"));
ENV2.registerFlag("DEPRECATION_WARNINGS_ENABLED", () => true);
ENV2.registerFlag("IS_TEST", () => false);
ENV2.registerFlag("CHECK_COMPUTATION_FOR_ERRORS", () => true);
ENV2.registerFlag("WRAP_TO_IMAGEBITMAP", () => false);
ENV2.registerFlag("ENGINE_COMPILE_ONLY", () => false);

// node_modules/@tensorflow/tfjs-core/dist/io/types.js
var DTYPE_VALUE_SIZE_MAP = {
  "float32": 4,
  "float16": 2,
  "int32": 4,
  "uint16": 2,
  "uint8": 1,
  "bool": 1,
  "complex64": 8
};

// node_modules/@tensorflow/tfjs-core/dist/io/io_utils.js
var NUM_BYTES_STRING_LENGTH = 4;
async function encodeWeights(tensors, group) {
  const specs = [];
  const dataPromises = [];
  const names = Array.isArray(tensors) ? tensors.map((tensor2) => tensor2.name) : Object.keys(tensors);
  for (let i = 0; i < names.length; ++i) {
    const name = names[i];
    const t = Array.isArray(tensors) ? tensors[i].tensor : tensors[name];
    if (t.dtype !== "float32" && t.dtype !== "int32" && t.dtype !== "bool" && t.dtype !== "string" && t.dtype !== "complex64") {
      throw new Error(`Unsupported dtype in weight '${name}': ${t.dtype}`);
    }
    const spec = { name, shape: t.shape, dtype: t.dtype };
    if (t.dtype === "string") {
      const utf8bytes = new Promise(async (resolve) => {
        const vals = await t.bytes();
        const totalNumBytes = vals.reduce((p, c) => p + c.length, 0) + NUM_BYTES_STRING_LENGTH * vals.length;
        const bytes = new Uint8Array(totalNumBytes);
        let offset = 0;
        for (let i2 = 0; i2 < vals.length; i2++) {
          const val = vals[i2];
          const bytesOfLength = new Uint8Array(new Uint32Array([val.length]).buffer);
          bytes.set(bytesOfLength, offset);
          offset += NUM_BYTES_STRING_LENGTH;
          bytes.set(val, offset);
          offset += val.length;
        }
        resolve(bytes);
      });
      dataPromises.push(utf8bytes);
    } else {
      dataPromises.push(t.data());
    }
    if (group != null) {
      spec.group = group;
    }
    specs.push(spec);
  }
  const tensorValues = await Promise.all(dataPromises);
  return { data: concatenateTypedArrays(tensorValues), specs };
}
function decodeWeights(buffer2, specs) {
  const out = {};
  let float16Decode;
  let offset = 0;
  for (const spec of specs) {
    const name = spec.name;
    const dtype = spec.dtype;
    const shape = spec.shape;
    const size = sizeFromShape(shape);
    let values;
    if ("quantization" in spec) {
      const quantization = spec.quantization;
      if (quantization.dtype === "uint8" || quantization.dtype === "uint16") {
        if (!("min" in quantization && "scale" in quantization)) {
          throw new Error(`Weight ${spec.name} with quantization ${quantization.dtype} doesn't have corresponding metadata min and scale.`);
        }
      } else if (quantization.dtype === "float16") {
        if (dtype !== "float32") {
          throw new Error(`Weight ${spec.name} is quantized with ${quantization.dtype} which only supports weights of type float32 not ${dtype}.`);
        }
      } else {
        throw new Error(`Weight ${spec.name} has unknown quantization dtype ${quantization.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);
      }
      const quantizationSizeFactor = DTYPE_VALUE_SIZE_MAP[quantization.dtype];
      const byteBuffer = buffer2.slice(offset, offset + size * quantizationSizeFactor);
      const quantizedArray = quantization.dtype === "uint8" ? new Uint8Array(byteBuffer) : new Uint16Array(byteBuffer);
      if (dtype === "float32") {
        if (quantization.dtype === "uint8" || quantization.dtype === "uint16") {
          values = new Float32Array(quantizedArray.length);
          for (let i = 0; i < quantizedArray.length; i++) {
            const v = quantizedArray[i];
            values[i] = v * quantization.scale + quantization.min;
          }
        } else if (quantization.dtype === "float16") {
          if (float16Decode === void 0) {
            float16Decode = getFloat16Decoder();
          }
          values = float16Decode(quantizedArray);
        } else {
          throw new Error(`Unsupported quantization type ${quantization.dtype} for weight type float32.`);
        }
      } else if (dtype === "int32") {
        if (quantization.dtype !== "uint8" && quantization.dtype !== "uint16") {
          throw new Error(`Unsupported quantization type ${quantization.dtype} for weight type int32.`);
        }
        values = new Int32Array(quantizedArray.length);
        for (let i = 0; i < quantizedArray.length; i++) {
          const v = quantizedArray[i];
          values[i] = Math.round(v * quantization.scale + quantization.min);
        }
      } else {
        throw new Error(`Unsupported dtype in weight '${name}': ${dtype}`);
      }
      offset += size * quantizationSizeFactor;
    } else if (dtype === "string") {
      const size2 = sizeFromShape(spec.shape);
      values = [];
      for (let i = 0; i < size2; i++) {
        const byteLength = new Uint32Array(buffer2.slice(offset, offset + NUM_BYTES_STRING_LENGTH))[0];
        offset += NUM_BYTES_STRING_LENGTH;
        const bytes = new Uint8Array(buffer2.slice(offset, offset + byteLength));
        values.push(bytes);
        offset += byteLength;
      }
    } else {
      const dtypeFactor = DTYPE_VALUE_SIZE_MAP[dtype];
      const byteBuffer = buffer2.slice(offset, offset + size * dtypeFactor);
      if (dtype === "float32") {
        values = new Float32Array(byteBuffer);
      } else if (dtype === "int32") {
        values = new Int32Array(byteBuffer);
      } else if (dtype === "bool") {
        values = new Uint8Array(byteBuffer);
      } else if (dtype === "complex64") {
        values = new Float32Array(byteBuffer);
        const real2 = new Float32Array(values.length / 2);
        const image2 = new Float32Array(values.length / 2);
        for (let i = 0; i < real2.length; i++) {
          real2[i] = values[i * 2];
          image2[i] = values[i * 2 + 1];
        }
        const realTensor = tensor(real2, shape, "float32");
        const imageTensor = tensor(image2, shape, "float32");
        out[name] = complex(realTensor, imageTensor);
        realTensor.dispose();
        imageTensor.dispose();
      } else {
        throw new Error(`Unsupported dtype in weight '${name}': ${dtype}`);
      }
      offset += size * dtypeFactor;
    }
    if (dtype !== "complex64") {
      out[name] = tensor(values, shape, dtype);
    }
  }
  return out;
}
function concatenateTypedArrays(xs) {
  if (xs === null) {
    throw new Error(`Invalid input value: ${JSON.stringify(xs)}`);
  }
  let totalByteLength = 0;
  const normalizedXs = [];
  xs.forEach((x) => {
    totalByteLength += x.byteLength;
    normalizedXs.push(x.byteLength === x.buffer.byteLength ? x : new x.constructor(x));
    if (!(x instanceof Float32Array || x instanceof Int32Array || x instanceof Uint8Array)) {
      throw new Error(`Unsupported TypedArray subtype: ${x.constructor.name}`);
    }
  });
  const y = new Uint8Array(totalByteLength);
  let offset = 0;
  normalizedXs.forEach((x) => {
    y.set(new Uint8Array(x.buffer), offset);
    offset += x.byteLength;
  });
  return y.buffer;
}
var useNodeBuffer = typeof Buffer !== "undefined" && (typeof Blob === "undefined" || typeof atob === "undefined" || typeof btoa === "undefined");
function stringByteLength(str) {
  if (useNodeBuffer) {
    return Buffer.byteLength(str);
  }
  return new Blob([str]).size;
}
function arrayBufferToBase64String(buffer2) {
  if (useNodeBuffer) {
    return Buffer.from(buffer2).toString("base64");
  }
  const buf = new Uint8Array(buffer2);
  let s = "";
  for (let i = 0, l = buf.length; i < l; i++) {
    s += String.fromCharCode(buf[i]);
  }
  return btoa(s);
}
function base64StringToArrayBuffer(str) {
  if (useNodeBuffer) {
    const buf = Buffer.from(str, "base64");
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  }
  const s = atob(str);
  const buffer2 = new Uint8Array(s.length);
  for (let i = 0; i < s.length; ++i) {
    buffer2.set([s.charCodeAt(i)], i);
  }
  return buffer2.buffer;
}
function concatenateArrayBuffers(buffers) {
  if (buffers.length === 1) {
    return buffers[0];
  }
  let totalByteLength = 0;
  buffers.forEach((buffer2) => {
    totalByteLength += buffer2.byteLength;
  });
  const temp = new Uint8Array(totalByteLength);
  let offset = 0;
  buffers.forEach((buffer2) => {
    temp.set(new Uint8Array(buffer2), offset);
    offset += buffer2.byteLength;
  });
  return temp.buffer;
}
function basename(path) {
  const SEPARATOR = "/";
  path = path.trim();
  while (path.endsWith(SEPARATOR)) {
    path = path.slice(0, path.length - 1);
  }
  const items = path.split(SEPARATOR);
  return items[items.length - 1];
}
function getModelJSONForModelArtifacts(artifacts, manifest) {
  const result = {
    modelTopology: artifacts.modelTopology,
    format: artifacts.format,
    generatedBy: artifacts.generatedBy,
    convertedBy: artifacts.convertedBy,
    weightsManifest: manifest
  };
  if (artifacts.signature != null) {
    result.signature = artifacts.signature;
  }
  if (artifacts.userDefinedMetadata != null) {
    result.userDefinedMetadata = artifacts.userDefinedMetadata;
  }
  if (artifacts.modelInitializer != null) {
    result.modelInitializer = artifacts.modelInitializer;
  }
  if (artifacts.trainingConfig != null) {
    result.trainingConfig = artifacts.trainingConfig;
  }
  return result;
}
async function getModelArtifactsForJSON(modelJSON, loadWeights2) {
  const modelArtifacts = {
    modelTopology: modelJSON.modelTopology,
    format: modelJSON.format,
    generatedBy: modelJSON.generatedBy,
    convertedBy: modelJSON.convertedBy
  };
  if (modelJSON.trainingConfig != null) {
    modelArtifacts.trainingConfig = modelJSON.trainingConfig;
  }
  if (modelJSON.weightsManifest != null) {
    const [weightSpecs, weightData] = await loadWeights2(modelJSON.weightsManifest);
    modelArtifacts.weightSpecs = weightSpecs;
    modelArtifacts.weightData = weightData;
  }
  if (modelJSON.signature != null) {
    modelArtifacts.signature = modelJSON.signature;
  }
  if (modelJSON.userDefinedMetadata != null) {
    modelArtifacts.userDefinedMetadata = modelJSON.userDefinedMetadata;
  }
  if (modelJSON.modelInitializer != null) {
    modelArtifacts.modelInitializer = modelJSON.modelInitializer;
  }
  return modelArtifacts;
}
function getModelArtifactsInfoForJSON(modelArtifacts) {
  if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
    throw new Error("Expected JSON model topology, received ArrayBuffer.");
  }
  return {
    dateSaved: new Date(),
    modelTopologyType: "JSON",
    modelTopologyBytes: modelArtifacts.modelTopology == null ? 0 : stringByteLength(JSON.stringify(modelArtifacts.modelTopology)),
    weightSpecsBytes: modelArtifacts.weightSpecs == null ? 0 : stringByteLength(JSON.stringify(modelArtifacts.weightSpecs)),
    weightDataBytes: modelArtifacts.weightData == null ? 0 : modelArtifacts.weightData.byteLength
  };
}
function computeFloat16MantisaTable() {
  const convertMantissa = (i) => {
    let m = i << 13;
    let e = 0;
    while ((m & 8388608) === 0) {
      e -= 8388608;
      m <<= 1;
    }
    m &= ~8388608;
    e += 947912704;
    return m | e;
  };
  const mantisaTable = new Uint32Array(2048);
  mantisaTable[0] = 0;
  for (let i = 1; i < 1024; i++) {
    mantisaTable[i] = convertMantissa(i);
  }
  for (let i = 1024; i < 2048; i++) {
    mantisaTable[i] = 939524096 + (i - 1024 << 13);
  }
  return mantisaTable;
}
function computeFloat16ExponentTable() {
  const exponentTable = new Uint32Array(64);
  exponentTable[0] = 0;
  exponentTable[31] = 1199570944;
  exponentTable[32] = 2147483648;
  exponentTable[63] = 3347054592;
  for (let i = 1; i < 31; i++) {
    exponentTable[i] = i << 23;
  }
  for (let i = 33; i < 63; i++) {
    exponentTable[i] = 2147483648 + (i - 32 << 23);
  }
  return exponentTable;
}
function computeFloat16OffsetTable() {
  const offsetTable = new Uint32Array(64);
  for (let i = 0; i < 64; i++) {
    offsetTable[i] = 1024;
  }
  offsetTable[0] = offsetTable[32] = 0;
  return offsetTable;
}
function getFloat16Decoder() {
  const mantisaTable = computeFloat16MantisaTable();
  const exponentTable = computeFloat16ExponentTable();
  const offsetTable = computeFloat16OffsetTable();
  return (quantizedArray) => {
    const buffer2 = new ArrayBuffer(4 * quantizedArray.length);
    const bufferUint32View = new Uint32Array(buffer2);
    for (let index = 0; index < quantizedArray.length; index++) {
      const float16Bits = quantizedArray[index];
      const float32Bits = mantisaTable[offsetTable[float16Bits >> 10] + (float16Bits & 1023)] + exponentTable[float16Bits >> 10];
      bufferUint32View[index] = float32Bits;
    }
    return new Float32Array(buffer2);
  };
}

// node_modules/@tensorflow/tfjs-core/dist/io/router_registry.js
var IORouterRegistry = class {
  constructor() {
    this.saveRouters = [];
    this.loadRouters = [];
  }
  static getInstance() {
    if (IORouterRegistry.instance == null) {
      IORouterRegistry.instance = new IORouterRegistry();
    }
    return IORouterRegistry.instance;
  }
  static registerSaveRouter(saveRouter) {
    IORouterRegistry.getInstance().saveRouters.push(saveRouter);
  }
  static registerLoadRouter(loadRouter) {
    IORouterRegistry.getInstance().loadRouters.push(loadRouter);
  }
  static getSaveHandlers(url) {
    return IORouterRegistry.getHandlers(url, "save");
  }
  static getLoadHandlers(url, loadOptions) {
    return IORouterRegistry.getHandlers(url, "load", loadOptions);
  }
  static getHandlers(url, handlerType, loadOptions) {
    const validHandlers = [];
    const routers = handlerType === "load" ? IORouterRegistry.getInstance().loadRouters : IORouterRegistry.getInstance().saveRouters;
    routers.forEach((router) => {
      const handler = router(url, loadOptions);
      if (handler !== null) {
        validHandlers.push(handler);
      }
    });
    return validHandlers;
  }
};
var registerSaveRouter = (loudRouter) => IORouterRegistry.registerSaveRouter(loudRouter);
var registerLoadRouter = (loudRouter) => IORouterRegistry.registerLoadRouter(loudRouter);
var getSaveHandlers = (url) => IORouterRegistry.getSaveHandlers(url);
var getLoadHandlers = (url, loadOptions) => IORouterRegistry.getLoadHandlers(url, loadOptions);

// node_modules/@tensorflow/tfjs-core/dist/io/indexed_db.js
var DATABASE_NAME = "tensorflowjs";
var DATABASE_VERSION = 1;
var MODEL_STORE_NAME = "models_store";
var INFO_STORE_NAME = "model_info_store";
function getIndexedDBFactory() {
  if (!env().getBool("IS_BROWSER")) {
    throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
  }
  const theWindow = typeof window === "undefined" ? self : window;
  const factory = theWindow.indexedDB || theWindow.mozIndexedDB || theWindow.webkitIndexedDB || theWindow.msIndexedDB || theWindow.shimIndexedDB;
  if (factory == null) {
    throw new Error("The current browser does not appear to support IndexedDB.");
  }
  return factory;
}
function setUpDatabase(openRequest) {
  const db = openRequest.result;
  db.createObjectStore(MODEL_STORE_NAME, { keyPath: "modelPath" });
  db.createObjectStore(INFO_STORE_NAME, { keyPath: "modelPath" });
}
var BrowserIndexedDB = class {
  constructor(modelPath) {
    this.indexedDB = getIndexedDBFactory();
    if (modelPath == null || !modelPath) {
      throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
    }
    this.modelPath = modelPath;
  }
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
    }
    return this.databaseAction(this.modelPath, modelArtifacts);
  }
  async load() {
    return this.databaseAction(this.modelPath);
  }
  databaseAction(modelPath, modelArtifacts) {
    return new Promise((resolve, reject) => {
      const openRequest = this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
      openRequest.onupgradeneeded = () => setUpDatabase(openRequest);
      openRequest.onsuccess = () => {
        const db = openRequest.result;
        if (modelArtifacts == null) {
          const modelTx = db.transaction(MODEL_STORE_NAME, "readonly");
          const modelStore = modelTx.objectStore(MODEL_STORE_NAME);
          const getRequest = modelStore.get(this.modelPath);
          getRequest.onsuccess = () => {
            if (getRequest.result == null) {
              db.close();
              return reject(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));
            } else {
              resolve(getRequest.result.modelArtifacts);
            }
          };
          getRequest.onerror = (error) => {
            db.close();
            return reject(getRequest.error);
          };
          modelTx.oncomplete = () => db.close();
        } else {
          const modelArtifactsInfo = getModelArtifactsInfoForJSON(modelArtifacts);
          const infoTx = db.transaction(INFO_STORE_NAME, "readwrite");
          let infoStore = infoTx.objectStore(INFO_STORE_NAME);
          const putInfoRequest = infoStore.put({ modelPath: this.modelPath, modelArtifactsInfo });
          let modelTx;
          putInfoRequest.onsuccess = () => {
            modelTx = db.transaction(MODEL_STORE_NAME, "readwrite");
            const modelStore = modelTx.objectStore(MODEL_STORE_NAME);
            const putModelRequest = modelStore.put({
              modelPath: this.modelPath,
              modelArtifacts,
              modelArtifactsInfo
            });
            putModelRequest.onsuccess = () => resolve({ modelArtifactsInfo });
            putModelRequest.onerror = (error) => {
              infoStore = infoTx.objectStore(INFO_STORE_NAME);
              const deleteInfoRequest = infoStore.delete(this.modelPath);
              deleteInfoRequest.onsuccess = () => {
                db.close();
                return reject(putModelRequest.error);
              };
              deleteInfoRequest.onerror = (error2) => {
                db.close();
                return reject(putModelRequest.error);
              };
            };
          };
          putInfoRequest.onerror = (error) => {
            db.close();
            return reject(putInfoRequest.error);
          };
          infoTx.oncomplete = () => {
            if (modelTx == null) {
              db.close();
            } else {
              modelTx.oncomplete = () => db.close();
            }
          };
        }
      };
      openRequest.onerror = (error) => reject(openRequest.error);
    });
  }
};
BrowserIndexedDB.URL_SCHEME = "indexeddb://";
var indexedDBRouter = (url) => {
  if (!env().getBool("IS_BROWSER")) {
    return null;
  } else {
    if (!Array.isArray(url) && url.startsWith(BrowserIndexedDB.URL_SCHEME)) {
      return browserIndexedDB(url.slice(BrowserIndexedDB.URL_SCHEME.length));
    } else {
      return null;
    }
  }
};
IORouterRegistry.registerSaveRouter(indexedDBRouter);
IORouterRegistry.registerLoadRouter(indexedDBRouter);
function browserIndexedDB(modelPath) {
  return new BrowserIndexedDB(modelPath);
}
function maybeStripScheme(key) {
  return key.startsWith(BrowserIndexedDB.URL_SCHEME) ? key.slice(BrowserIndexedDB.URL_SCHEME.length) : key;
}
var BrowserIndexedDBManager = class {
  constructor() {
    this.indexedDB = getIndexedDBFactory();
  }
  async listModels() {
    return new Promise((resolve, reject) => {
      const openRequest = this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
      openRequest.onupgradeneeded = () => setUpDatabase(openRequest);
      openRequest.onsuccess = () => {
        const db = openRequest.result;
        const tx = db.transaction(INFO_STORE_NAME, "readonly");
        const store = tx.objectStore(INFO_STORE_NAME);
        const getAllInfoRequest = store.getAll();
        getAllInfoRequest.onsuccess = () => {
          const out = {};
          for (const item of getAllInfoRequest.result) {
            out[item.modelPath] = item.modelArtifactsInfo;
          }
          resolve(out);
        };
        getAllInfoRequest.onerror = (error) => {
          db.close();
          return reject(getAllInfoRequest.error);
        };
        tx.oncomplete = () => db.close();
      };
      openRequest.onerror = (error) => reject(openRequest.error);
    });
  }
  async removeModel(path) {
    path = maybeStripScheme(path);
    return new Promise((resolve, reject) => {
      const openRequest = this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
      openRequest.onupgradeneeded = () => setUpDatabase(openRequest);
      openRequest.onsuccess = () => {
        const db = openRequest.result;
        const infoTx = db.transaction(INFO_STORE_NAME, "readwrite");
        const infoStore = infoTx.objectStore(INFO_STORE_NAME);
        const getInfoRequest = infoStore.get(path);
        let modelTx;
        getInfoRequest.onsuccess = () => {
          if (getInfoRequest.result == null) {
            db.close();
            return reject(new Error(`Cannot find model with path '${path}' in IndexedDB.`));
          } else {
            const deleteInfoRequest = infoStore.delete(path);
            const deleteModelData = () => {
              modelTx = db.transaction(MODEL_STORE_NAME, "readwrite");
              const modelStore = modelTx.objectStore(MODEL_STORE_NAME);
              const deleteModelRequest = modelStore.delete(path);
              deleteModelRequest.onsuccess = () => resolve(getInfoRequest.result.modelArtifactsInfo);
              deleteModelRequest.onerror = (error) => reject(getInfoRequest.error);
            };
            deleteInfoRequest.onsuccess = deleteModelData;
            deleteInfoRequest.onerror = (error) => {
              deleteModelData();
              db.close();
              return reject(getInfoRequest.error);
            };
          }
        };
        getInfoRequest.onerror = (error) => {
          db.close();
          return reject(getInfoRequest.error);
        };
        infoTx.oncomplete = () => {
          if (modelTx == null) {
            db.close();
          } else {
            modelTx.oncomplete = () => db.close();
          }
        };
      };
      openRequest.onerror = (error) => reject(openRequest.error);
    });
  }
};

// node_modules/@tensorflow/tfjs-core/dist/io/local_storage.js
var PATH_SEPARATOR = "/";
var PATH_PREFIX = "tensorflowjs_models";
var INFO_SUFFIX = "info";
var MODEL_TOPOLOGY_SUFFIX = "model_topology";
var WEIGHT_SPECS_SUFFIX = "weight_specs";
var WEIGHT_DATA_SUFFIX = "weight_data";
var MODEL_METADATA_SUFFIX = "model_metadata";
function getModelKeys(path) {
  return {
    info: [PATH_PREFIX, path, INFO_SUFFIX].join(PATH_SEPARATOR),
    topology: [PATH_PREFIX, path, MODEL_TOPOLOGY_SUFFIX].join(PATH_SEPARATOR),
    weightSpecs: [PATH_PREFIX, path, WEIGHT_SPECS_SUFFIX].join(PATH_SEPARATOR),
    weightData: [PATH_PREFIX, path, WEIGHT_DATA_SUFFIX].join(PATH_SEPARATOR),
    modelMetadata: [PATH_PREFIX, path, MODEL_METADATA_SUFFIX].join(PATH_SEPARATOR)
  };
}
function removeItems(keys) {
  for (const key of Object.values(keys)) {
    window.localStorage.removeItem(key);
  }
}
function getModelPathFromKey(key) {
  const items = key.split(PATH_SEPARATOR);
  if (items.length < 3) {
    throw new Error(`Invalid key format: ${key}`);
  }
  return items.slice(1, items.length - 1).join(PATH_SEPARATOR);
}
function maybeStripScheme2(key) {
  return key.startsWith(BrowserLocalStorage.URL_SCHEME) ? key.slice(BrowserLocalStorage.URL_SCHEME.length) : key;
}
var BrowserLocalStorage = class {
  constructor(modelPath) {
    if (!env().getBool("IS_BROWSER") || typeof window === "undefined" || typeof window.localStorage === "undefined") {
      throw new Error("The current environment does not support local storage.");
    }
    this.LS = window.localStorage;
    if (modelPath == null || !modelPath) {
      throw new Error("For local storage, modelPath must not be null, undefined or empty.");
    }
    this.modelPath = modelPath;
    this.keys = getModelKeys(this.modelPath);
  }
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
    } else {
      const topology = JSON.stringify(modelArtifacts.modelTopology);
      const weightSpecs = JSON.stringify(modelArtifacts.weightSpecs);
      const modelArtifactsInfo = getModelArtifactsInfoForJSON(modelArtifacts);
      try {
        this.LS.setItem(this.keys.info, JSON.stringify(modelArtifactsInfo));
        this.LS.setItem(this.keys.topology, topology);
        this.LS.setItem(this.keys.weightSpecs, weightSpecs);
        this.LS.setItem(this.keys.weightData, arrayBufferToBase64String(modelArtifacts.weightData));
        const metadata = {
          format: modelArtifacts.format,
          generatedBy: modelArtifacts.generatedBy,
          convertedBy: modelArtifacts.convertedBy,
          signature: modelArtifacts.signature != null ? modelArtifacts.signature : void 0,
          userDefinedMetadata: modelArtifacts.userDefinedMetadata != null ? modelArtifacts.userDefinedMetadata : void 0,
          modelInitializer: modelArtifacts.modelInitializer != null ? modelArtifacts.modelInitializer : void 0,
          trainingConfig: modelArtifacts.trainingConfig != null ? modelArtifacts.trainingConfig : void 0
        };
        this.LS.setItem(this.keys.modelMetadata, JSON.stringify(metadata));
        return { modelArtifactsInfo };
      } catch (err) {
        removeItems(this.keys);
        throw new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${modelArtifactsInfo.modelTopologyBytes}, weightSpecsBytes=${modelArtifactsInfo.weightSpecsBytes}, weightDataBytes=${modelArtifactsInfo.weightDataBytes}.`);
      }
    }
  }
  async load() {
    const info = JSON.parse(this.LS.getItem(this.keys.info));
    if (info == null) {
      throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);
    }
    if (info.modelTopologyType !== "JSON") {
      throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
    }
    const out = {};
    const topology = JSON.parse(this.LS.getItem(this.keys.topology));
    if (topology == null) {
      throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);
    }
    out.modelTopology = topology;
    const weightSpecs = JSON.parse(this.LS.getItem(this.keys.weightSpecs));
    if (weightSpecs == null) {
      throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);
    }
    out.weightSpecs = weightSpecs;
    const metadataString = this.LS.getItem(this.keys.modelMetadata);
    if (metadataString != null) {
      const metadata = JSON.parse(metadataString);
      out.format = metadata.format;
      out.generatedBy = metadata.generatedBy;
      out.convertedBy = metadata.convertedBy;
      if (metadata.signature != null) {
        out.signature = metadata.signature;
      }
      if (metadata.userDefinedMetadata != null) {
        out.userDefinedMetadata = metadata.userDefinedMetadata;
      }
      if (metadata.modelInitializer != null) {
        out.modelInitializer = metadata.modelInitializer;
      }
      if (metadata.trainingConfig != null) {
        out.trainingConfig = metadata.trainingConfig;
      }
    }
    const weightDataBase64 = this.LS.getItem(this.keys.weightData);
    if (weightDataBase64 == null) {
      throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);
    }
    out.weightData = base64StringToArrayBuffer(weightDataBase64);
    return out;
  }
};
BrowserLocalStorage.URL_SCHEME = "localstorage://";
var localStorageRouter = (url) => {
  if (!env().getBool("IS_BROWSER")) {
    return null;
  } else {
    if (!Array.isArray(url) && url.startsWith(BrowserLocalStorage.URL_SCHEME)) {
      return browserLocalStorage(url.slice(BrowserLocalStorage.URL_SCHEME.length));
    } else {
      return null;
    }
  }
};
IORouterRegistry.registerSaveRouter(localStorageRouter);
IORouterRegistry.registerLoadRouter(localStorageRouter);
function browserLocalStorage(modelPath) {
  return new BrowserLocalStorage(modelPath);
}
var BrowserLocalStorageManager = class {
  constructor() {
    assert(env().getBool("IS_BROWSER"), () => "Current environment is not a web browser");
    assert(typeof window === "undefined" || typeof window.localStorage !== "undefined", () => "Current browser does not appear to support localStorage");
    this.LS = window.localStorage;
  }
  async listModels() {
    const out = {};
    const prefix = PATH_PREFIX + PATH_SEPARATOR;
    const suffix = PATH_SEPARATOR + INFO_SUFFIX;
    for (let i = 0; i < this.LS.length; ++i) {
      const key = this.LS.key(i);
      if (key.startsWith(prefix) && key.endsWith(suffix)) {
        const modelPath = getModelPathFromKey(key);
        out[modelPath] = JSON.parse(this.LS.getItem(key));
      }
    }
    return out;
  }
  async removeModel(path) {
    path = maybeStripScheme2(path);
    const keys = getModelKeys(path);
    if (this.LS.getItem(keys.info) == null) {
      throw new Error(`Cannot find model at path '${path}'`);
    }
    const info = JSON.parse(this.LS.getItem(keys.info));
    removeItems(keys);
    return info;
  }
};

// node_modules/@tensorflow/tfjs-core/dist/io/browser_files.js
var DEFAULT_FILE_NAME_PREFIX = "model";
var DEFAULT_JSON_EXTENSION_NAME = ".json";
var DEFAULT_WEIGHT_DATA_EXTENSION_NAME = ".weights.bin";
function defer(f) {
  return new Promise((resolve) => setTimeout(resolve)).then(f);
}
var BrowserDownloads = class {
  constructor(fileNamePrefix) {
    if (!env().getBool("IS_BROWSER")) {
      throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
    }
    if (fileNamePrefix.startsWith(BrowserDownloads.URL_SCHEME)) {
      fileNamePrefix = fileNamePrefix.slice(BrowserDownloads.URL_SCHEME.length);
    }
    if (fileNamePrefix == null || fileNamePrefix.length === 0) {
      fileNamePrefix = DEFAULT_FILE_NAME_PREFIX;
    }
    this.modelJsonFileName = fileNamePrefix + DEFAULT_JSON_EXTENSION_NAME;
    this.weightDataFileName = fileNamePrefix + DEFAULT_WEIGHT_DATA_EXTENSION_NAME;
  }
  async save(modelArtifacts) {
    if (typeof document === "undefined") {
      throw new Error("Browser downloads are not supported in this environment since `document` is not present");
    }
    const weightsURL = window.URL.createObjectURL(new Blob([modelArtifacts.weightData], { type: "application/octet-stream" }));
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
    } else {
      const weightsManifest = [{
        paths: ["./" + this.weightDataFileName],
        weights: modelArtifacts.weightSpecs
      }];
      const modelJSON = getModelJSONForModelArtifacts(modelArtifacts, weightsManifest);
      const modelJsonURL = window.URL.createObjectURL(new Blob([JSON.stringify(modelJSON)], { type: "application/json" }));
      const jsonAnchor = this.modelJsonAnchor == null ? document.createElement("a") : this.modelJsonAnchor;
      jsonAnchor.download = this.modelJsonFileName;
      jsonAnchor.href = modelJsonURL;
      await defer(() => jsonAnchor.dispatchEvent(new MouseEvent("click")));
      if (modelArtifacts.weightData != null) {
        const weightDataAnchor = this.weightDataAnchor == null ? document.createElement("a") : this.weightDataAnchor;
        weightDataAnchor.download = this.weightDataFileName;
        weightDataAnchor.href = weightsURL;
        await defer(() => weightDataAnchor.dispatchEvent(new MouseEvent("click")));
      }
      return { modelArtifactsInfo: getModelArtifactsInfoForJSON(modelArtifacts) };
    }
  }
};
BrowserDownloads.URL_SCHEME = "downloads://";
var BrowserFiles = class {
  constructor(files) {
    if (files == null || files.length < 1) {
      throw new Error(`When calling browserFiles, at least 1 file is required, but received ${files}`);
    }
    this.jsonFile = files[0];
    this.weightsFiles = files.slice(1);
  }
  async load() {
    return new Promise((resolve, reject) => {
      const jsonReader = new FileReader();
      jsonReader.onload = (event) => {
        const modelJSON = JSON.parse(event.target.result);
        const modelTopology = modelJSON.modelTopology;
        if (modelTopology == null) {
          reject(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));
          return;
        }
        const weightsManifest = modelJSON.weightsManifest;
        if (weightsManifest == null) {
          reject(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));
          return;
        }
        if (this.weightsFiles.length === 0) {
          resolve({ modelTopology });
          return;
        }
        const modelArtifactsPromise = getModelArtifactsForJSON(modelJSON, (weightsManifest2) => this.loadWeights(weightsManifest2));
        resolve(modelArtifactsPromise);
      };
      jsonReader.onerror = (error) => reject(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`);
      jsonReader.readAsText(this.jsonFile);
    });
  }
  loadWeights(weightsManifest) {
    const weightSpecs = [];
    const paths = [];
    for (const entry of weightsManifest) {
      weightSpecs.push(...entry.weights);
      paths.push(...entry.paths);
    }
    const pathToFile = this.checkManifestAndWeightFiles(weightsManifest);
    const promises = paths.map((path) => this.loadWeightsFile(path, pathToFile[path]));
    return Promise.all(promises).then((buffers) => [weightSpecs, concatenateArrayBuffers(buffers)]);
  }
  loadWeightsFile(path, file) {
    return new Promise((resolve, reject) => {
      const weightFileReader = new FileReader();
      weightFileReader.onload = (event) => {
        const weightData = event.target.result;
        resolve(weightData);
      };
      weightFileReader.onerror = (error) => reject(`Failed to weights data from file of path '${path}'.`);
      weightFileReader.readAsArrayBuffer(file);
    });
  }
  checkManifestAndWeightFiles(manifest) {
    const basenames = [];
    const fileNames = this.weightsFiles.map((file) => basename(file.name));
    const pathToFile = {};
    for (const group of manifest) {
      group.paths.forEach((path) => {
        const pathBasename = basename(path);
        if (basenames.indexOf(pathBasename) !== -1) {
          throw new Error(`Duplicate file basename found in weights manifest: '${pathBasename}'`);
        }
        basenames.push(pathBasename);
        if (fileNames.indexOf(pathBasename) === -1) {
          throw new Error(`Weight file with basename '${pathBasename}' is not provided.`);
        } else {
          pathToFile[path] = this.weightsFiles[fileNames.indexOf(pathBasename)];
        }
      });
    }
    if (basenames.length !== this.weightsFiles.length) {
      throw new Error(`Mismatch in the number of files in weights manifest (${basenames.length}) and the number of weight files provided (${this.weightsFiles.length}).`);
    }
    return pathToFile;
  }
};
var browserDownloadsRouter = (url) => {
  if (!env().getBool("IS_BROWSER")) {
    return null;
  } else {
    if (!Array.isArray(url) && url.startsWith(BrowserDownloads.URL_SCHEME)) {
      return browserDownloads(url.slice(BrowserDownloads.URL_SCHEME.length));
    } else {
      return null;
    }
  }
};
IORouterRegistry.registerSaveRouter(browserDownloadsRouter);
function browserDownloads(fileNamePrefix = "model") {
  return new BrowserDownloads(fileNamePrefix);
}
function browserFiles(files) {
  return new BrowserFiles(files);
}

// node_modules/@tensorflow/tfjs-core/dist/io/progress.js
function monitorPromisesProgress(promises, onProgress, startFraction, endFraction) {
  checkPromises(promises);
  startFraction = startFraction == null ? 0 : startFraction;
  endFraction = endFraction == null ? 1 : endFraction;
  checkFraction(startFraction, endFraction);
  let resolvedPromise = 0;
  const registerMonitor = (promise) => {
    promise.then((value) => {
      const fraction = startFraction + ++resolvedPromise / promises.length * (endFraction - startFraction);
      onProgress(fraction);
      return value;
    });
    return promise;
  };
  function checkPromises(promises2) {
    assert(promises2 != null && Array.isArray(promises2) && promises2.length > 0, () => "promises must be a none empty array");
  }
  function checkFraction(startFraction2, endFraction2) {
    assert(startFraction2 >= 0 && startFraction2 <= 1, () => `Progress fraction must be in range [0, 1], but got startFraction ${startFraction2}`);
    assert(endFraction2 >= 0 && endFraction2 <= 1, () => `Progress fraction must be in range [0, 1], but got endFraction ${endFraction2}`);
    assert(endFraction2 >= startFraction2, () => `startFraction must be no more than endFraction, but got startFraction ${startFraction2} and endFraction ${endFraction2}`);
  }
  return Promise.all(promises.map(registerMonitor));
}

// node_modules/@tensorflow/tfjs-core/dist/io/weights_loader.js
async function loadWeightsAsArrayBuffer(fetchURLs, loadOptions) {
  if (loadOptions == null) {
    loadOptions = {};
  }
  const fetchFunc = loadOptions.fetchFunc == null ? env().platform.fetch : loadOptions.fetchFunc;
  const requests = fetchURLs.map((fetchURL) => fetchFunc(fetchURL, loadOptions.requestInit, { isBinary: true }));
  const fetchStartFraction = 0;
  const fetchEndFraction = 0.5;
  const responses = loadOptions.onProgress == null ? await Promise.all(requests) : await monitorPromisesProgress(requests, loadOptions.onProgress, fetchStartFraction, fetchEndFraction);
  const bufferPromises = responses.map((response) => response.arrayBuffer());
  const bufferStartFraction = 0.5;
  const bufferEndFraction = 1;
  const buffers = loadOptions.onProgress == null ? await Promise.all(bufferPromises) : await monitorPromisesProgress(bufferPromises, loadOptions.onProgress, bufferStartFraction, bufferEndFraction);
  return buffers;
}
async function loadWeights(manifest, filePathPrefix = "", weightNames, requestInit) {
  const fetchWeights = (fetchUrls) => loadWeightsAsArrayBuffer(fetchUrls, { requestInit });
  const loadWeights2 = weightsLoaderFactory(fetchWeights);
  return loadWeights2(manifest, filePathPrefix, weightNames);
}
function weightsLoaderFactory(fetchWeightsFunction) {
  return async (manifest, filePathPrefix = "", weightNames) => {
    const groupIndicesToFetchMap = manifest.map(() => false);
    const groupWeightsToFetch = {};
    const weightsFound = weightNames != null ? weightNames.map(() => false) : [];
    const allManifestWeightNames = [];
    manifest.forEach((manifestGroupConfig, groupIndex) => {
      let groupOffset = 0;
      manifestGroupConfig.weights.forEach((weightsEntry) => {
        const rawDtype = "quantization" in weightsEntry ? weightsEntry.quantization.dtype : weightsEntry.dtype;
        const weightsBytes = DTYPE_VALUE_SIZE_MAP[rawDtype] * sizeFromShape(weightsEntry.shape);
        const enqueueWeightsForFetchingFn = () => {
          groupIndicesToFetchMap[groupIndex] = true;
          if (groupWeightsToFetch[groupIndex] == null) {
            groupWeightsToFetch[groupIndex] = [];
          }
          groupWeightsToFetch[groupIndex].push({
            manifestEntry: weightsEntry,
            groupOffset,
            sizeBytes: weightsBytes
          });
        };
        if (weightNames != null) {
          weightNames.forEach((weightName, weightIndex) => {
            if (weightName === weightsEntry.name) {
              enqueueWeightsForFetchingFn();
              weightsFound[weightIndex] = true;
            }
          });
        } else {
          enqueueWeightsForFetchingFn();
        }
        allManifestWeightNames.push(weightsEntry.name);
        groupOffset += weightsBytes;
      });
    });
    if (!weightsFound.every((found) => found)) {
      const weightsNotFound = weightNames.filter((_, i) => !weightsFound[i]);
      throw new Error(`Could not find weights in manifest with names: ${weightsNotFound.join(", ")}. 
Manifest JSON has weights with names: ${allManifestWeightNames.join(", ")}.`);
    }
    const groupIndicesToFetch = groupIndicesToFetchMap.reduce((accumulator, shouldFetch, i) => {
      if (shouldFetch) {
        accumulator.push(i);
      }
      return accumulator;
    }, []);
    const fetchUrls = [];
    groupIndicesToFetch.forEach((i) => {
      manifest[i].paths.forEach((filepath) => {
        const fetchUrl = filePathPrefix + (!filePathPrefix.endsWith("/") ? "/" : "") + filepath;
        fetchUrls.push(fetchUrl);
      });
    });
    const buffers = await fetchWeightsFunction(fetchUrls);
    const weightsTensorMap = {};
    let bufferIndexOffset = 0;
    groupIndicesToFetch.forEach((i) => {
      const numBuffers = manifest[i].paths.length;
      let groupBytes = 0;
      for (let i2 = 0; i2 < numBuffers; i2++) {
        groupBytes += buffers[bufferIndexOffset + i2].byteLength;
      }
      const groupBuffer = new ArrayBuffer(groupBytes);
      const groupByteBuffer = new Uint8Array(groupBuffer);
      let groupBufferOffset = 0;
      for (let i2 = 0; i2 < numBuffers; i2++) {
        const buffer2 = new Uint8Array(buffers[bufferIndexOffset + i2]);
        groupByteBuffer.set(buffer2, groupBufferOffset);
        groupBufferOffset += buffer2.byteLength;
      }
      const weightsEntries = groupWeightsToFetch[i];
      weightsEntries.forEach((weightsEntry) => {
        const byteBuffer = groupBuffer.slice(weightsEntry.groupOffset, weightsEntry.groupOffset + weightsEntry.sizeBytes);
        const nameToTensorMap = decodeWeights(byteBuffer, [weightsEntry.manifestEntry]);
        for (const name in nameToTensorMap) {
          weightsTensorMap[name] = nameToTensorMap[name];
        }
      });
      bufferIndexOffset += numBuffers;
    });
    return weightsTensorMap;
  };
}

// node_modules/@tensorflow/tfjs-core/dist/io/http.js
var OCTET_STREAM_MIME_TYPE = "application/octet-stream";
var JSON_TYPE = "application/json";
var HTTPRequest = class {
  constructor(path, loadOptions) {
    this.DEFAULT_METHOD = "POST";
    if (loadOptions == null) {
      loadOptions = {};
    }
    this.weightPathPrefix = loadOptions.weightPathPrefix;
    this.onProgress = loadOptions.onProgress;
    this.weightUrlConverter = loadOptions.weightUrlConverter;
    if (loadOptions.fetchFunc != null) {
      assert(typeof loadOptions.fetchFunc === "function", () => "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)");
      this.fetch = loadOptions.fetchFunc;
    } else {
      this.fetch = env().platform.fetch;
    }
    assert(path != null && path.length > 0, () => "URL path for http must not be null, undefined or empty.");
    if (Array.isArray(path)) {
      assert(path.length === 2, () => `URL paths for http must have a length of 2, (actual length is ${path.length}).`);
    }
    this.path = path;
    if (loadOptions.requestInit != null && loadOptions.requestInit.body != null) {
      throw new Error("requestInit is expected to have no pre-existing body, but has one.");
    }
    this.requestInit = loadOptions.requestInit || {};
  }
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
    }
    const init = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit);
    init.body = new FormData();
    const weightsManifest = [{
      paths: ["./model.weights.bin"],
      weights: modelArtifacts.weightSpecs
    }];
    const modelTopologyAndWeightManifest = getModelJSONForModelArtifacts(modelArtifacts, weightsManifest);
    init.body.append("model.json", new Blob([JSON.stringify(modelTopologyAndWeightManifest)], { type: JSON_TYPE }), "model.json");
    if (modelArtifacts.weightData != null) {
      init.body.append("model.weights.bin", new Blob([modelArtifacts.weightData], { type: OCTET_STREAM_MIME_TYPE }), "model.weights.bin");
    }
    const response = await this.fetch(this.path, init);
    if (response.ok) {
      return {
        modelArtifactsInfo: getModelArtifactsInfoForJSON(modelArtifacts),
        responses: [response]
      };
    } else {
      throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${response.status}.`);
    }
  }
  async load() {
    const modelConfigRequest = await this.fetch(this.path, this.requestInit);
    if (!modelConfigRequest.ok) {
      throw new Error(`Request to ${this.path} failed with status code ${modelConfigRequest.status}. Please verify this URL points to the model JSON of the model to load.`);
    }
    let modelJSON;
    try {
      modelJSON = await modelConfigRequest.json();
    } catch (e) {
      let message = `Failed to parse model JSON of response from ${this.path}.`;
      if (this.path.endsWith(".pb")) {
        message += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.";
      } else {
        message += " Please make sure the server is serving valid JSON for this request.";
      }
      throw new Error(message);
    }
    const modelTopology = modelJSON.modelTopology;
    const weightsManifest = modelJSON.weightsManifest;
    if (modelTopology == null && weightsManifest == null) {
      throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);
    }
    return getModelArtifactsForJSON(modelJSON, (weightsManifest2) => this.loadWeights(weightsManifest2));
  }
  async loadWeights(weightsManifest) {
    const weightPath = Array.isArray(this.path) ? this.path[1] : this.path;
    const [prefix, suffix] = parseUrl(weightPath);
    const pathPrefix = this.weightPathPrefix || prefix;
    const weightSpecs = [];
    for (const entry of weightsManifest) {
      weightSpecs.push(...entry.weights);
    }
    const fetchURLs = [];
    const urlPromises = [];
    for (const weightsGroup of weightsManifest) {
      for (const path of weightsGroup.paths) {
        if (this.weightUrlConverter != null) {
          urlPromises.push(this.weightUrlConverter(path));
        } else {
          fetchURLs.push(pathPrefix + path + suffix);
        }
      }
    }
    if (this.weightUrlConverter) {
      fetchURLs.push(...await Promise.all(urlPromises));
    }
    const buffers = await loadWeightsAsArrayBuffer(fetchURLs, {
      requestInit: this.requestInit,
      fetchFunc: this.fetch,
      onProgress: this.onProgress
    });
    return [weightSpecs, concatenateArrayBuffers(buffers)];
  }
};
HTTPRequest.URL_SCHEME_REGEX = /^https?:\/\//;
function parseUrl(url) {
  const lastSlash = url.lastIndexOf("/");
  const lastSearchParam = url.lastIndexOf("?");
  const prefix = url.substring(0, lastSlash);
  const suffix = lastSearchParam > lastSlash ? url.substring(lastSearchParam) : "";
  return [prefix + "/", suffix];
}
function isHTTPScheme(url) {
  return url.match(HTTPRequest.URL_SCHEME_REGEX) != null;
}
var httpRouter = (url, loadOptions) => {
  if (typeof fetch === "undefined" && (loadOptions == null || loadOptions.fetchFunc == null)) {
    return null;
  } else {
    let isHTTP = true;
    if (Array.isArray(url)) {
      isHTTP = url.every((urlItem) => isHTTPScheme(urlItem));
    } else {
      isHTTP = isHTTPScheme(url);
    }
    if (isHTTP) {
      return http(url, loadOptions);
    }
  }
  return null;
};
IORouterRegistry.registerSaveRouter(httpRouter);
IORouterRegistry.registerLoadRouter(httpRouter);
function http(path, loadOptions) {
  return new HTTPRequest(path, loadOptions);
}
function browserHTTPRequest(path, loadOptions) {
  return http(path, loadOptions);
}

// node_modules/@tensorflow/tfjs-core/dist/io/passthrough.js
var PassthroughLoader = class {
  constructor(modelArtifacts) {
    this.modelArtifacts = modelArtifacts;
  }
  load() {
    return this.modelArtifacts;
  }
};
var PassthroughSaver = class {
  constructor(saveHandler) {
    this.saveHandler = saveHandler;
  }
  save(modelArtifacts) {
    return this.saveHandler(modelArtifacts);
  }
};
var PassthroughAsync = class {
  constructor(handler) {
    if (handler.load) {
      this.load = () => Promise.resolve(handler.load());
    }
    if (handler.save) {
      this.save = (modelArtifacts) => Promise.resolve(handler.save(modelArtifacts));
    }
  }
};
function fromMemory(modelArtifacts, weightSpecs, weightData, trainingConfig) {
  const args = arguments;
  return new PassthroughAsync(fromMemorySync(...args));
}
function fromMemorySync(modelArtifacts, weightSpecs, weightData, trainingConfig) {
  if (arguments.length === 1) {
    const isModelArtifacts = modelArtifacts.modelTopology != null || modelArtifacts.weightSpecs != null;
    if (isModelArtifacts) {
      return new PassthroughLoader(modelArtifacts);
    } else {
      console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.");
      return new PassthroughLoader({ modelTopology: modelArtifacts });
    }
  } else {
    console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.");
    return new PassthroughLoader({
      modelTopology: modelArtifacts,
      weightSpecs,
      weightData,
      trainingConfig
    });
  }
}
function withSaveHandler(saveHandler) {
  return new PassthroughSaver(saveHandler);
}
function withSaveHandlerSync(saveHandler) {
  return new PassthroughSaver(saveHandler);
}

// node_modules/@tensorflow/tfjs-core/dist/io/model_management.js
var URL_SCHEME_SUFFIX = "://";
var ModelStoreManagerRegistry = class {
  constructor() {
    this.managers = {};
  }
  static getInstance() {
    if (ModelStoreManagerRegistry.instance == null) {
      ModelStoreManagerRegistry.instance = new ModelStoreManagerRegistry();
    }
    return ModelStoreManagerRegistry.instance;
  }
  static registerManager(scheme, manager) {
    assert(scheme != null, () => "scheme must not be undefined or null.");
    if (scheme.endsWith(URL_SCHEME_SUFFIX)) {
      scheme = scheme.slice(0, scheme.indexOf(URL_SCHEME_SUFFIX));
    }
    assert(scheme.length > 0, () => "scheme must not be an empty string.");
    const registry = ModelStoreManagerRegistry.getInstance();
    assert(registry.managers[scheme] == null, () => `A model store manager is already registered for scheme '${scheme}'.`);
    registry.managers[scheme] = manager;
  }
  static getManager(scheme) {
    const manager = ModelStoreManagerRegistry.getInstance().managers[scheme];
    if (manager == null) {
      throw new Error(`Cannot find model manager for scheme '${scheme}'`);
    }
    return manager;
  }
  static getSchemes() {
    return Object.keys(ModelStoreManagerRegistry.getInstance().managers);
  }
};
function parseURL(url) {
  if (url.indexOf(URL_SCHEME_SUFFIX) === -1) {
    throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${ModelStoreManagerRegistry.getSchemes().join(",")}`);
  }
  return {
    scheme: url.split(URL_SCHEME_SUFFIX)[0],
    path: url.split(URL_SCHEME_SUFFIX)[1]
  };
}
async function cloneModelInternal(sourceURL, destURL, deleteSource = false) {
  assert(sourceURL !== destURL, () => `Old path and new path are the same: '${sourceURL}'`);
  const loadHandlers = IORouterRegistry.getLoadHandlers(sourceURL);
  assert(loadHandlers.length > 0, () => `Copying failed because no load handler is found for source URL ${sourceURL}.`);
  assert(loadHandlers.length < 2, () => `Copying failed because more than one (${loadHandlers.length}) load handlers for source URL ${sourceURL}.`);
  const loadHandler = loadHandlers[0];
  const saveHandlers = IORouterRegistry.getSaveHandlers(destURL);
  assert(saveHandlers.length > 0, () => `Copying failed because no save handler is found for destination URL ${destURL}.`);
  assert(saveHandlers.length < 2, () => `Copying failed because more than one (${loadHandlers.length}) save handlers for destination URL ${destURL}.`);
  const saveHandler = saveHandlers[0];
  const sourceScheme = parseURL(sourceURL).scheme;
  const sourcePath = parseURL(sourceURL).path;
  const sameMedium = sourceScheme === parseURL(sourceURL).scheme;
  const modelArtifacts = await loadHandler.load();
  if (deleteSource && sameMedium) {
    await ModelStoreManagerRegistry.getManager(sourceScheme).removeModel(sourcePath);
  }
  const saveResult = await saveHandler.save(modelArtifacts);
  if (deleteSource && !sameMedium) {
    await ModelStoreManagerRegistry.getManager(sourceScheme).removeModel(sourcePath);
  }
  return saveResult.modelArtifactsInfo;
}
async function listModels() {
  const schemes = ModelStoreManagerRegistry.getSchemes();
  const out = {};
  for (const scheme of schemes) {
    const schemeOut = await ModelStoreManagerRegistry.getManager(scheme).listModels();
    for (const path in schemeOut) {
      const url = scheme + URL_SCHEME_SUFFIX + path;
      out[url] = schemeOut[path];
    }
  }
  return out;
}
async function removeModel(url) {
  const schemeAndPath = parseURL(url);
  const manager = ModelStoreManagerRegistry.getManager(schemeAndPath.scheme);
  return manager.removeModel(schemeAndPath.path);
}
async function copyModel(sourceURL, destURL) {
  const deleteSource = false;
  return cloneModelInternal(sourceURL, destURL, deleteSource);
}
async function moveModel(sourceURL, destURL) {
  const deleteSource = true;
  return cloneModelInternal(sourceURL, destURL, deleteSource);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/mat_mul.js
function matMul_(a, b, transposeA = false, transposeB = false) {
  let $a = convertToTensor(a, "a", "matMul");
  let $b = convertToTensor(b, "b", "matMul");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  const attrs = { transposeA, transposeB };
  return ENGINE.runKernel(BatchMatMul, inputs, attrs);
}
var matMul = op({ matMul_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/one_hot.js
function oneHot_(indices, depth, onValue = 1, offValue = 0) {
  if (depth < 2) {
    throw new Error(`Error in oneHot: depth must be >=2, but it is ${depth}`);
  }
  const $indices = convertToTensor(indices, "indices", "oneHot", "int32");
  const inputs = { indices: $indices };
  const attrs = { depth, onValue, offValue };
  return ENGINE.runKernel(OneHot, inputs, attrs);
}
var oneHot = op({ oneHot_ });

// node_modules/@tensorflow/tfjs-core/dist/globals.js
function enableProdMode() {
  env().set("PROD", true);
}
function enableDebugMode() {
  env().set("DEBUG", true);
}
function disableDeprecationWarnings() {
  env().set("DEPRECATION_WARNINGS_ENABLED", false);
  console.warn(`TensorFlow.js deprecation warnings have been disabled.`);
}
function deprecationWarn(msg) {
  if (env().getBool("DEPRECATION_WARNINGS_ENABLED")) {
    console.warn(msg + " You can disable deprecation warnings with tf.disableDeprecationWarnings().");
  }
}
setDeprecationWarningFn(deprecationWarn);
function disposeVariables() {
  ENGINE.disposeVariables();
}
function engine() {
  return ENGINE;
}
function memory() {
  return ENGINE.memory();
}
function profile(f) {
  return ENGINE.profile(f);
}
function tidy(nameOrFn, fn) {
  return ENGINE.tidy(nameOrFn, fn);
}
function dispose(container) {
  const tensors = getTensorsInContainer(container);
  tensors.forEach((tensor2) => tensor2.dispose());
}
function keep(result) {
  return ENGINE.keep(result);
}
function time(f) {
  return ENGINE.time(f);
}
function setBackend(backendName) {
  return ENGINE.setBackend(backendName);
}
function ready() {
  return ENGINE.ready();
}
function getBackend() {
  return ENGINE.backendName;
}
function removeBackend(name) {
  ENGINE.removeBackend(name);
}
function findBackend(name) {
  return ENGINE.findBackend(name);
}
function findBackendFactory(name) {
  return ENGINE.findBackendFactory(name);
}
function registerBackend(name, factory, priority = 1) {
  return ENGINE.registerBackend(name, factory, priority);
}
function backend() {
  return ENGINE.backend;
}
function setPlatform(platformName, platform) {
  env().setPlatform(platformName, platform);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/imag.js
function imag_(input) {
  const $input = convertToTensor(input, "input", "imag");
  const inputs = { input: $input };
  return ENGINE.runKernel(Imag, inputs);
}
var imag = op({ imag_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/neg.js
function neg_(x) {
  const $x = convertToTensor(x, "x", "neg");
  const inputs = { x: $x };
  return ENGINE.runKernel(Neg, inputs);
}
var neg = op({ neg_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/real.js
function real_(input) {
  const $input = convertToTensor(input, "input", "real");
  const inputs = { input: $input };
  return ENGINE.runKernel(Real, inputs);
}
var real = op({ real_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/transpose.js
function transpose_(x, perm, conjugate) {
  const $x = convertToTensor(x, "x", "transpose");
  if (perm == null) {
    perm = $x.shape.map((s, i) => i).reverse();
  }
  assert($x.rank === perm.length, () => `Error in transpose: rank of input ${$x.rank} must match length of perm ${perm}.`);
  perm.forEach((axis) => {
    assert(axis >= 0 && axis < $x.rank, () => `All entries in 'perm' must be between 0 and ${$x.rank - 1} but got ${perm}`);
  });
  if ($x.rank <= 1) {
    return $x.clone();
  }
  const inputs = { x: $x };
  const attrs = { perm };
  if ($x.dtype === "complex64") {
    return tidy(() => {
      let $real = real($x);
      let $imag = imag($x);
      $real = ENGINE.runKernel(Transpose, { x: $real }, attrs);
      $imag = ENGINE.runKernel(Transpose, { x: $imag }, attrs);
      if (conjugate) {
        $imag = neg($imag);
      }
      return complex($real, $imag);
    });
  }
  return ENGINE.runKernel(Transpose, inputs, attrs);
}
var transpose = op({ transpose_ });

// node_modules/@tensorflow/tfjs-core/dist/math.js
var math_exports = {};
__export(math_exports, {
  confusionMatrix: () => confusionMatrix
});

// node_modules/@tensorflow/tfjs-core/dist/ops/confusion_matrix.js
function confusionMatrix_(labels, predictions, numClasses) {
  const $labels = convertToTensor(labels, "labels", "confusionMatrix");
  const $predictions = convertToTensor(predictions, "predictions", "confusionMatrix");
  assert(numClasses == null || numClasses > 0 && Number.isInteger(numClasses), () => `If provided, numClasses must be a positive integer, but got ${numClasses}`);
  assert($labels.rank === 1, () => `Expected the rank of labels to be 1, but got ${$labels.rank}`);
  assert($predictions.rank === 1, () => `Expected the rank of predictions to be 1, but got ${$predictions.rank}`);
  assert($labels.shape[0] === $predictions.shape[0], () => `Mismatch in the number of examples: ${$labels.shape[0]} vs. ${$predictions.shape[0]}. Labels and predictions should have the same number of elements.`);
  assert(numClasses > 0 && Number.isInteger(numClasses), () => `numClasses is required to be a positive integer, but got ${numClasses}`);
  const oneHotLabels = oneHot(cast($labels, "int32"), numClasses);
  const oneHotPredictions = oneHot(cast($predictions, "int32"), numClasses);
  const oneHotLabelsT = transpose(oneHotLabels);
  const product = matMul(oneHotLabelsT, oneHotPredictions);
  return cast(product, "int32");
}
var confusionMatrix = op({ confusionMatrix_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/broadcast_util.js
var broadcast_util_exports = {};
__export(broadcast_util_exports, {
  assertAndGetBroadcastShape: () => assertAndGetBroadcastShape,
  getBroadcastDims: () => getBroadcastDims,
  getReductionAxes: () => getReductionAxes
});
function getBroadcastDims(inShape, outShape) {
  const inRank = inShape.length;
  const dims = [];
  for (let i = 0; i < inRank; i++) {
    const dim = inRank - 1 - i;
    const a = inShape[dim] || 1;
    const b = outShape[outShape.length - 1 - i] || 1;
    if (b > 1 && a === 1) {
      dims.unshift(dim);
    }
  }
  return dims;
}
function getReductionAxes(inShape, outShape) {
  const result = [];
  for (let i = 0; i < outShape.length; i++) {
    const inDim = inShape[inShape.length - i - 1];
    const outAxis = outShape.length - i - 1;
    const outDim = outShape[outAxis];
    if (inDim == null || inDim === 1 && outDim > 1) {
      result.unshift(outAxis);
    }
  }
  return result;
}
function assertAndGetBroadcastShape(shapeA, shapeB) {
  const result = [];
  const l = Math.max(shapeA.length, shapeB.length);
  for (let i = 0; i < l; i++) {
    let a = shapeA[shapeA.length - i - 1];
    if (a == null) {
      a = 1;
    }
    let b = shapeB[shapeB.length - i - 1];
    if (b == null) {
      b = 1;
    }
    if (a === 1) {
      result.unshift(b);
    } else if (b === 1) {
      result.unshift(a);
    } else if (a !== b) {
      const errMsg = `Operands could not be broadcast together with shapes ${shapeA} and ${shapeB}.`;
      throw Error(errMsg);
    } else {
      result.unshift(a);
    }
  }
  return result;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/tensor3d.js
function tensor3d(values, shape, dtype) {
  assertNonNull(values);
  if (shape != null && shape.length !== 3) {
    throw new Error("tensor3d() requires shape to have three numbers");
  }
  const inferredShape = inferShape(values, dtype);
  if (inferredShape.length !== 3 && inferredShape.length !== 1) {
    throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
  }
  if (inferredShape.length === 1 && shape == null) {
    throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
  }
  return makeTensor(values, shape, inferredShape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/browser.js
var browser_exports = {};
__export(browser_exports, {
  fromPixels: () => fromPixels,
  fromPixelsAsync: () => fromPixelsAsync,
  toPixels: () => toPixels
});
var fromPixels2DContext;
function fromPixels_(pixels, numChannels = 3) {
  if (numChannels > 4) {
    throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
  }
  if (pixels == null) {
    throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
  }
  let isPixelData2 = false;
  let isImageData = false;
  let isVideo = false;
  let isImage = false;
  let isCanvasLike = false;
  let isImageBitmap = false;
  if (pixels.data instanceof Uint8Array) {
    isPixelData2 = true;
  } else if (typeof ImageData !== "undefined" && pixels instanceof ImageData) {
    isImageData = true;
  } else if (typeof HTMLVideoElement !== "undefined" && pixels instanceof HTMLVideoElement) {
    isVideo = true;
  } else if (typeof HTMLImageElement !== "undefined" && pixels instanceof HTMLImageElement) {
    isImage = true;
  } else if (pixels.getContext != null) {
    isCanvasLike = true;
  } else if (typeof ImageBitmap !== "undefined" && pixels instanceof ImageBitmap) {
    isImageBitmap = true;
  } else {
    throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${pixels.constructor.name}`);
  }
  if (isVideo) {
    const HAVE_CURRENT_DATA_READY_STATE = 2;
    if (isVideo && pixels.readyState < HAVE_CURRENT_DATA_READY_STATE) {
      throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");
    }
  }
  const kernel = getKernel(FromPixels, ENGINE.backendName);
  if (kernel != null) {
    const inputs = { pixels };
    const attrs = { numChannels };
    return ENGINE.runKernel(FromPixels, inputs, attrs);
  }
  const [width, height] = isVideo ? [
    pixels.videoWidth,
    pixels.videoHeight
  ] : [pixels.width, pixels.height];
  let vals;
  if (isCanvasLike) {
    vals = pixels.getContext("2d").getImageData(0, 0, width, height).data;
  } else if (isImageData || isPixelData2) {
    vals = pixels.data;
  } else if (isImage || isVideo || isImageBitmap) {
    if (fromPixels2DContext == null) {
      if (typeof document === "undefined") {
        if (typeof OffscreenCanvas !== "undefined" && typeof OffscreenCanvasRenderingContext2D !== "undefined") {
          fromPixels2DContext = new OffscreenCanvas(1, 1).getContext("2d");
        } else {
          throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");
        }
      } else {
        fromPixels2DContext = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
      }
    }
    fromPixels2DContext.canvas.width = width;
    fromPixels2DContext.canvas.height = height;
    fromPixels2DContext.drawImage(pixels, 0, 0, width, height);
    vals = fromPixels2DContext.getImageData(0, 0, width, height).data;
  }
  let values;
  if (numChannels === 4) {
    values = new Int32Array(vals);
  } else {
    const numPixels = width * height;
    values = new Int32Array(numPixels * numChannels);
    for (let i = 0; i < numPixels; i++) {
      for (let channel = 0; channel < numChannels; ++channel) {
        values[i * numChannels + channel] = vals[i * 4 + channel];
      }
    }
  }
  const outShape = [height, width, numChannels];
  return tensor3d(values, outShape, "int32");
}
function isPixelData(pixels) {
  return pixels != null && pixels.data instanceof Uint8Array;
}
function isImageBitmapFullySupported() {
  return typeof window !== "undefined" && typeof ImageBitmap !== "undefined" && window.hasOwnProperty("createImageBitmap");
}
function isNonEmptyPixels(pixels) {
  return pixels != null && pixels.width !== 0 && pixels.height !== 0;
}
function canWrapPixelsToImageBitmap(pixels) {
  return isImageBitmapFullySupported() && !(pixels instanceof ImageBitmap) && isNonEmptyPixels(pixels) && !isPixelData(pixels);
}
async function fromPixelsAsync(pixels, numChannels = 3) {
  let inputs = null;
  if (env().getBool("WRAP_TO_IMAGEBITMAP") && canWrapPixelsToImageBitmap(pixels)) {
    let imageBitmap;
    try {
      imageBitmap = await createImageBitmap(pixels, { premultiplyAlpha: "none" });
    } catch (e) {
      imageBitmap = null;
    }
    if (imageBitmap != null && imageBitmap.width === pixels.width && imageBitmap.height === pixels.height) {
      inputs = imageBitmap;
    } else {
      inputs = pixels;
    }
  } else {
    inputs = pixels;
  }
  return fromPixels_(inputs, numChannels);
}
async function toPixels(img, canvas) {
  let $img = convertToTensor(img, "img", "toPixels");
  if (!(img instanceof Tensor)) {
    const originalImgTensor = $img;
    $img = cast(originalImgTensor, "int32");
    originalImgTensor.dispose();
  }
  if ($img.rank !== 2 && $img.rank !== 3) {
    throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${$img.rank}.`);
  }
  const [height, width] = $img.shape.slice(0, 2);
  const depth = $img.rank === 2 ? 1 : $img.shape[2];
  if (depth > 4 || depth === 2) {
    throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${depth}`);
  }
  if ($img.dtype !== "float32" && $img.dtype !== "int32") {
    throw new Error(`Unsupported type for toPixels: ${$img.dtype}. Please use float32 or int32 tensors.`);
  }
  const data = await $img.data();
  const multiplier = $img.dtype === "float32" ? 255 : 1;
  const bytes = new Uint8ClampedArray(width * height * 4);
  for (let i = 0; i < height * width; ++i) {
    const rgba = [0, 0, 0, 255];
    for (let d = 0; d < depth; d++) {
      const value = data[i * depth + d];
      if ($img.dtype === "float32") {
        if (value < 0 || value > 1) {
          throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${value}.`);
        }
      } else if ($img.dtype === "int32") {
        if (value < 0 || value > 255) {
          throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${value}.`);
        }
      }
      if (depth === 1) {
        rgba[0] = value * multiplier;
        rgba[1] = value * multiplier;
        rgba[2] = value * multiplier;
      } else {
        rgba[d] = value * multiplier;
      }
    }
    const j = i * 4;
    bytes[j + 0] = Math.round(rgba[0]);
    bytes[j + 1] = Math.round(rgba[1]);
    bytes[j + 2] = Math.round(rgba[2]);
    bytes[j + 3] = Math.round(rgba[3]);
  }
  if (canvas != null) {
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    const imageData = new ImageData(bytes, width, height);
    ctx.putImageData(imageData, 0, 0);
  }
  if ($img !== img) {
    $img.dispose();
  }
  return bytes;
}
var fromPixels = op({ fromPixels_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/gather_nd_util.js
var gather_nd_util_exports = {};
__export(gather_nd_util_exports, {
  prepareAndValidate: () => prepareAndValidate
});
function prepareAndValidate(tensor2, indices) {
  const tensorRank = tensor2.shape.length;
  const indicesRank = indices.shape.length;
  if (tensorRank < 1) {
    throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${tensorRank}.`);
  }
  if (indicesRank < 1) {
    throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${indicesRank}.`);
  }
  if (indices.dtype !== "int32") {
    throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${indices.dtype}.`);
  }
  if (indices.shape[indicesRank - 1] > tensorRank) {
    throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${indices.shape[indicesRank - 1]} vs. ${tensorRank}`);
  }
  if (sizeFromShape(tensor2.shape) === 0) {
    throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${tensor2.shape}.`);
  }
  const indicesShape = indices.shape;
  const sliceRank = indicesShape[indicesShape.length - 1];
  let nResult = 1;
  for (let i = 0; i < indicesShape.length - 1; ++i) {
    nResult *= indicesShape[i];
  }
  const inputShape = tensor2.shape;
  const resultShape = indicesShape.slice();
  resultShape.pop();
  let sliceSize = 1;
  for (let i = sliceRank; i < tensorRank; ++i) {
    sliceSize *= inputShape[i];
    resultShape.push(inputShape[i]);
  }
  const strides = [
    ...computeStrides(tensor2.shape).map((stride) => stride / sliceSize),
    1
  ].slice(0, sliceRank);
  return [resultShape, nResult, sliceSize, strides];
}

// node_modules/@tensorflow/tfjs-core/dist/ops/scatter_nd_util.js
var scatter_nd_util_exports = {};
__export(scatter_nd_util_exports, {
  calculateShapes: () => calculateShapes,
  validateInput: () => validateInput,
  validateUpdateShape: () => validateUpdateShape
});
function validateUpdateShape(shape, indices, updates) {
  const sliceDim = indices.rank > 1 ? indices.shape[indices.rank - 1] : 1;
  const batchDim = indices.rank > 1 ? indices.rank - 1 : 1;
  const shapeError = `Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${updates.shape}, indices.shape: ${indices.shape}, shape: ${shape}, sliceDim: ${sliceDim}, and batchDim: ${batchDim}.`;
  if (updates.rank < batchDim) {
    throw new Error(shapeError + ` update.rank < ${batchDim}. `);
  }
  if (shape.length < sliceDim + (updates.rank - batchDim)) {
    throw new Error(shapeError + ` Output shape length < ${sliceDim + (updates.rank - batchDim)}`);
  }
  if (updates.rank !== batchDim + shape.length - sliceDim) {
    throw new Error(shapeError + ` update.rank != ${batchDim + shape.length - sliceDim}`);
  }
  for (let d = 0; d < batchDim; ++d) {
    if (updates.shape[d] !== indices.shape[d]) {
      throw new Error(shapeError + ` updates.shape[${d}] (${updates.shape[d]}) != indices.shape[${d}] (${indices.shape[d]}).`);
    }
  }
  for (let d = 0; d < updates.rank - batchDim; ++d) {
    if (updates.shape[d + batchDim] !== shape[d + sliceDim]) {
      throw new Error(shapeError + ` updates.shape[${d + batchDim}] (${updates.shape[d + batchDim]}) != shape[${d + batchDim}] (${shape[d + batchDim]})`);
    }
  }
}
function validateInput(updates, indices, shape) {
  if (indices.rank < 1) {
    throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${indices.rank}.`);
  }
  if (updates.rank < 1) {
    throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${updates.rank}.`);
  }
  if (indices.dtype !== "int32") {
    throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${indices.dtype}`);
  }
  if (shape.length < 1) {
    throw new Error(`Output rank must be greater or equal to 1, but got shape: ${shape}`);
  }
  if (shape.length === 0) {
    if (indices.size === 0) {
      throw new Error(`Indices specified for empty output. indices shape: ${indices.shape}`);
    }
    if (updates.size === 0) {
      throw new Error(`Updates specified for empty output. updates shape: ${updates.shape}`);
    }
  }
  validateUpdateShape(shape, indices, updates);
}
function calculateShapes(updates, indices, shape) {
  const indicesRank = indices.shape.length;
  const sliceRank = indicesRank > 1 ? indices.shape[indicesRank - 1] : 1;
  const totalNd = shape.length;
  let sliceSize = 1;
  for (let i = sliceRank; i < totalNd; ++i) {
    sliceSize *= shape[i];
  }
  const safeSliceDim = sliceRank < 1 ? 1 : sliceRank;
  const numUpdates = sizeFromShape(indices.shape) / safeSliceDim;
  const strides = [...computeStrides(shape.slice(0, sliceRank)), 1];
  const outputSize = sizeFromShape(shape);
  return { sliceRank, numUpdates, sliceSize, strides, outputSize };
}

// node_modules/@tensorflow/tfjs-core/dist/ops/slice_util.js
var slice_util_exports = {};
__export(slice_util_exports, {
  assertParamsValid: () => assertParamsValid,
  computeFlatOffset: () => computeFlatOffset,
  computeOutShape: () => computeOutShape,
  getNormalizedAxes: () => getNormalizedAxes,
  isSliceContinous: () => isSliceContinous,
  maskToAxes: () => maskToAxes,
  parseSliceParams: () => parseSliceParams,
  sliceInfo: () => sliceInfo,
  startForAxis: () => startForAxis,
  startIndicesWithElidedDims: () => startIndicesWithElidedDims,
  stopForAxis: () => stopForAxis,
  stopIndicesWithElidedDims: () => stopIndicesWithElidedDims,
  stridesForAxis: () => stridesForAxis,
  stridesWithElidedDims: () => stridesWithElidedDims
});
var NEW_AXIS = -2;
var SHRINK_AXIS = -1;
function assertParamsValid(input, begin, size) {
  const inputRank = input.shape.length;
  assert(inputRank === begin.length, () => `Error in slice${inputRank}D: Length of begin ${begin} must match the rank of the array (${inputRank}).`);
  assert(inputRank === size.length, () => `Error in slice${inputRank}D: Length of size ${size} must match the rank of the array (${inputRank}).`);
  for (let i = 0; i < inputRank; ++i) {
    assert(begin[i] + size[i] <= input.shape[i], () => `Error in slice${inputRank}D: begin[${i}] + size[${i}] (${begin[i] + size[i]}) would overflow input.shape[${i}] (${input.shape[i]})`);
  }
}
function maskToAxes(mask) {
  const axes = [];
  let axis = 0;
  while (mask > 0) {
    if (mask & 1) {
      axes.push(axis);
    }
    mask /= 2;
    axis++;
  }
  return axes;
}
function computeOutShape(begin, end, strides) {
  const size = [];
  for (let axis = 0; axis < begin.length; axis++) {
    size[axis] = Math.ceil((end[axis] - begin[axis]) / strides[axis]);
  }
  return size;
}
function stridesWithElidedDims(strides, ellipsisInsertionIndex, numElidedAxes, inputShape) {
  const newStrides = [...strides];
  for (let i = newStrides.length; i < inputShape.length; i++) {
    newStrides.push(1);
  }
  for (let i = 0; i < numElidedAxes; i++) {
    if (i === 0) {
      newStrides[ellipsisInsertionIndex] = 1;
    } else {
      newStrides.splice(ellipsisInsertionIndex, 0, 1);
      newStrides.pop();
    }
  }
  return newStrides;
}
function unnormalizeAxis(ellipsisInsertionIndex, numElidedAxes, normalizedAxis) {
  if (normalizedAxis <= ellipsisInsertionIndex) {
    return normalizedAxis;
  }
  return normalizedAxis - (numElidedAxes - 1);
}
function getElidedAxes(numElidedAxes, ellipsisInsertionIndex) {
  const elidedAxes = [];
  for (let i = 0; i < numElidedAxes; i++) {
    elidedAxes.push(ellipsisInsertionIndex + i);
  }
  return elidedAxes;
}
function getNormalizedAxes(inputShape, ellipsisAxes, numInterpolatedAxes, begin, end, strides, beginMask, endMask, ellipsisMask) {
  const inputRank = inputShape.length;
  let normalizedBegin = new Array(inputRank), normalizedEnd = new Array(inputRank), normalizedStrides = new Array(inputRank);
  if (ellipsisAxes.length && numInterpolatedAxes > 0) {
    const fullIndex = ellipsisAxes[0];
    const numElidedAxes = numInterpolatedAxes + 1;
    normalizedBegin = startIndicesWithElidedDims(beginMask, fullIndex, numElidedAxes, begin, inputShape);
    normalizedEnd = stopIndicesWithElidedDims(endMask, fullIndex, numElidedAxes, end, inputShape);
    normalizedStrides = stridesWithElidedDims(strides, fullIndex, numElidedAxes, inputShape);
  } else {
    for (let axis = 0; axis < inputRank; axis++) {
      normalizedBegin[axis] = startForAxis(beginMask, begin, strides, inputShape, axis, ellipsisMask);
      normalizedEnd[axis] = stopForAxis(endMask, end, strides, inputShape, axis, ellipsisMask);
      normalizedStrides[axis] = stridesForAxis(strides, axis, ellipsisMask);
    }
  }
  return {
    begin: normalizedBegin,
    end: normalizedEnd,
    strides: normalizedStrides
  };
}
function startIndicesWithElidedDims(beginMask, ellipsisInsertionIndex, numElidedAxes, originalBegin, inputShape) {
  const newIndices = [...inputShape];
  const elidedAxes = getElidedAxes(numElidedAxes, ellipsisInsertionIndex);
  for (let axis = 0; axis < newIndices.length; axis++) {
    if (elidedAxes.indexOf(axis) > -1) {
      newIndices[axis] = 0;
    } else {
      const originalAxis = unnormalizeAxis(ellipsisInsertionIndex, numElidedAxes, axis);
      let originalValue = originalBegin[originalAxis];
      if (beginMask & 1 << originalAxis) {
        originalValue = 0;
      }
      newIndices[axis] = originalValue;
    }
  }
  return newIndices;
}
function stopIndicesWithElidedDims(endMask, ellipsisInsertionIndex, numElidedAxes, originalEnd, inputShape) {
  const newIndices = [...inputShape];
  const elidedAxes = getElidedAxes(numElidedAxes, ellipsisInsertionIndex);
  for (let axis = 0; axis < newIndices.length; axis++) {
    if (elidedAxes.indexOf(axis) > -1) {
      newIndices[axis] = Number.MAX_SAFE_INTEGER;
    } else {
      const originalAxis = unnormalizeAxis(ellipsisInsertionIndex, numElidedAxes, axis);
      let originalValue = originalEnd[originalAxis];
      if (endMask & 1 << originalAxis) {
        originalValue = Number.MAX_SAFE_INTEGER;
      }
      newIndices[axis] = originalValue;
    }
  }
  for (let i = 0; i < newIndices.length; i++) {
    const axisSize = inputShape[i];
    if (newIndices[i] < 0) {
      newIndices[i] += axisSize;
    }
    newIndices[i] = clamp(0, newIndices[i], inputShape[i]);
  }
  return newIndices;
}
function stridesForAxis(strides, axis, ellipsisMask) {
  let stride = strides[axis];
  if (ellipsisMask & 1 << axis || stride == null) {
    stride = 1;
  }
  return stride;
}
function startForAxis(beginMask, startIndices, strides, inputShape, axis, ellipsisMask) {
  let start = startIndices[axis];
  const stride = strides[axis] || 1;
  if (beginMask & 1 << axis || ellipsisMask & 1 << axis || start == null) {
    if (stride > 0) {
      start = Number.MIN_SAFE_INTEGER;
    } else {
      start = Number.MAX_SAFE_INTEGER;
    }
  }
  const axisSize = inputShape[axis];
  if (start < 0) {
    start += axisSize;
  }
  start = clamp(0, start, axisSize - 1);
  return start;
}
function stopForAxis(endMask, stopIndices, strides, inputShape, axis, ellipsisMask) {
  let stop = stopIndices[axis];
  const stride = strides[axis] || 1;
  if (endMask & 1 << axis || ellipsisMask & 1 << axis || stop == null) {
    if (stride > 0) {
      stop = Number.MAX_SAFE_INTEGER;
    } else {
      stop = Number.MIN_SAFE_INTEGER;
    }
  }
  const axisSize = inputShape[axis];
  if (stop < 0) {
    stop += axisSize;
  }
  if (stride > 0) {
    stop = clamp(0, stop, axisSize);
  } else {
    stop = clamp(-1, stop, axisSize - 1);
  }
  return stop;
}
function isSliceContinous(shape, begin, size) {
  let firstNonOneAxis = size.length;
  for (let i = 0; i < size.length; i++) {
    if (size[i] > 1) {
      firstNonOneAxis = i;
      break;
    }
  }
  for (let i = firstNonOneAxis + 1; i < size.length; i++) {
    if (begin[i] > 0 || size[i] !== shape[i]) {
      return false;
    }
  }
  return true;
}
function computeFlatOffset(begin, strides) {
  let flatOffset = begin.length > 0 ? begin[begin.length - 1] : 1;
  for (let i = 0; i < begin.length - 1; i++) {
    flatOffset += begin[i] * strides[i];
  }
  return flatOffset;
}
function parseSliceParams(x, begin, size) {
  let begin_;
  const xRank = x.shape.length;
  if (typeof begin === "number") {
    begin_ = [begin, ...new Array(xRank - 1).fill(0)];
  } else if (begin.length < xRank) {
    begin_ = begin.concat(new Array(xRank - begin.length).fill(0));
  } else {
    begin_ = begin.slice();
  }
  begin_.forEach((d) => {
    assert(d !== -1, () => "slice() does not support negative begin indexing.");
  });
  let size_;
  if (size == null) {
    size_ = new Array(xRank).fill(-1);
  } else if (typeof size === "number") {
    size_ = [size, ...new Array(xRank - 1).fill(-1)];
  } else if (size.length < xRank) {
    size_ = size.concat(new Array(xRank - size.length).fill(-1));
  } else {
    size_ = size;
  }
  size_ = size_.map((d, i) => {
    if (d >= 0) {
      return d;
    } else {
      assert(d === -1, () => `Negative size values should be exactly -1 but got ${d} for the slice() size at index ${i}.`);
      return x.shape[i] - begin_[i];
    }
  });
  return [begin_, size_];
}
function sliceInfo(xShape, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask) {
  let stridesNonNull;
  if (strides == null) {
    stridesNonNull = new Array(begin.length);
    stridesNonNull.fill(1);
  } else {
    stridesNonNull = strides;
  }
  if (ellipsisMask != null && (ellipsisMask & ellipsisMask - 1) !== 0) {
    throw new Error("Multiple ellipses in slice is not allowed.");
  }
  let ellipsisSeen = false;
  const sparseSpec = {
    dims: stridesNonNull.length,
    numAddAxisAfterEllipsis: 0,
    begin: begin.slice(),
    end: end.slice(),
    strides: stridesNonNull.slice(),
    beginMask,
    endMask,
    ellipsisMask,
    newAxisMask,
    shrinkAxisMask
  };
  for (let i = 0; i < sparseSpec.dims; i++) {
    if (ellipsisSeen && (1 << i & newAxisMask) !== 0) {
      sparseSpec.numAddAxisAfterEllipsis++;
    }
    if (1 << i & ellipsisMask) {
      ellipsisSeen = true;
    }
  }
  if (!ellipsisSeen) {
    sparseSpec.ellipsisMask |= 1 << sparseSpec.dims;
    sparseSpec.dims++;
  }
  const denseSpec = {
    dims: xShape.length,
    beginMask: 0,
    endMask: 0,
    beginValid: false,
    endValid: false
  };
  buildDenseSpec(sparseSpec, denseSpec);
  let isIdentity = true;
  let sliceDim0 = true;
  let isSimpleSlice = true;
  const processingShape = [];
  const finalShape = [];
  for (let i = 0; i < xShape.length; ++i) {
    if (denseSpec.strides[i] === 0) {
      throw Error(`strides[${i}] must be non-zero`);
    }
    const shrinkI = !!(denseSpec.shrinkAxisMask & 1 << i);
    const dimI = xShape[i];
    if (dimI === -1) {
      processingShape.push(shrinkI ? 1 : -1);
      continue;
    }
    const masks = [denseSpec.beginMask & 1 << i, denseSpec.endMask & 1 << i];
    const validRange = [
      denseSpec.strides[i] > 0 ? 0 : -1,
      denseSpec.strides[i] > 0 ? dimI : dimI - 1
    ];
    if (shrinkI && denseSpec.strides[i] <= 0) {
      throw Error("only stride 1 allowed on non-range indexing.");
    }
    isSimpleSlice = isSimpleSlice && denseSpec.strides[i] === 1;
    const beginAndEndMasked = !!(denseSpec.beginMask & 1 << i && denseSpec.endMask & 1 << i);
    if (denseSpec.beginValid && denseSpec.endValid) {
      if (shrinkI) {
        const xFwd = denseSpec.begin[i] < 0 ? dimI + denseSpec.begin[i] : denseSpec.begin[i];
        denseSpec.begin[i] = xFwd;
        denseSpec.end[i] = denseSpec.begin[i] + 1;
        if (xFwd < 0 || xFwd >= dimI) {
          throw Error(`slice index ${denseSpec.begin[i]} of dimension ${i} out of bounds.`);
        }
      } else {
        denseSpec.begin[i] = canonical(denseSpec.begin[i], 0, denseSpec.strides[i], dimI, masks, validRange);
        denseSpec.end[i] = canonical(denseSpec.end[i], 1, denseSpec.strides[i], dimI, masks, validRange);
      }
      const takeAllInDimension = denseSpec.strides[i] === 1 && denseSpec.begin[i] === 0 && denseSpec.end[i] === dimI;
      isIdentity = isIdentity && takeAllInDimension;
      sliceDim0 = sliceDim0 && (i === 0 && denseSpec.strides[i] === 1 || takeAllInDimension);
    } else {
      isIdentity = isIdentity && (denseSpec.strides[i] === 1 && beginAndEndMasked);
      sliceDim0 = sliceDim0 && (i === 0 && denseSpec.strides[i] === 1 || beginAndEndMasked);
    }
    let intervalLength;
    let knownInterval = false;
    if (denseSpec.beginValid && denseSpec.endValid) {
      intervalLength = denseSpec.end[i] - denseSpec.begin[i];
      knownInterval = true;
    } else if (shrinkI) {
      intervalLength = 1;
      knownInterval = true;
    } else if (beginAndEndMasked) {
      if (dimI >= 0) {
        if (denseSpec.strides[i] < 0) {
          intervalLength = -dimI;
        } else {
          intervalLength = dimI;
        }
        knownInterval = true;
      }
    }
    if (knownInterval) {
      let sizeI;
      if (intervalLength === 0 || intervalLength < 0 !== denseSpec.strides[i] < 0) {
        sizeI = 0;
      } else {
        sizeI = Math.trunc(intervalLength / denseSpec.strides[i]) + (intervalLength % denseSpec.strides[i] !== 0 ? 1 : 0);
      }
      processingShape.push(sizeI);
    } else {
      processingShape.push(-1);
    }
  }
  for (let denseDim = 0; denseDim < denseSpec.finalShapeGatherIndices.length; ++denseDim) {
    const gatherIndex = denseSpec.finalShapeGatherIndices[denseDim];
    if (gatherIndex >= 0) {
      finalShape.push(processingShape[gatherIndex]);
    } else if (gatherIndex === NEW_AXIS) {
      finalShape.push(1);
    }
  }
  const finalShapeSparse = finalShape.filter((dim, i) => denseSpec.finalShapeGatherIndices[i] !== NEW_AXIS);
  return {
    finalShapeSparse,
    finalShape,
    isIdentity,
    sliceDim0,
    isSimpleSlice,
    begin: denseSpec.begin,
    end: denseSpec.end,
    strides: denseSpec.strides
  };
}
function buildDenseSpec(sparse2, dense) {
  dense.beginMask = 0;
  dense.endMask = 0;
  dense.shrinkAxisMask = 0;
  let fullIndex = 0;
  dense.beginValid = sparse2.begin != null;
  dense.endValid = sparse2.end != null;
  dense.begin = new Array(dense.dims);
  dense.end = new Array(dense.dims);
  dense.strides = new Array(dense.dims);
  dense.finalShapeGatherIndices = [];
  dense.finalShapeGatherIndicesSparse = [];
  dense.inputShapeGatherIndicesSparse = new Array(dense.dims);
  for (let i = 0; i < sparse2.dims; i++) {
    if (1 << i & sparse2.ellipsisMask) {
      const nextIndex = Math.min(dense.dims - (sparse2.dims - i) + 1 + sparse2.numAddAxisAfterEllipsis, dense.dims);
      for (; fullIndex < nextIndex; fullIndex++) {
        dense.begin[fullIndex] = 0;
        dense.end[fullIndex] = 0;
        dense.strides[fullIndex] = 1;
        dense.beginMask |= 1 << fullIndex;
        dense.endMask |= 1 << fullIndex;
        dense.finalShapeGatherIndices.push(fullIndex);
        dense.finalShapeGatherIndicesSparse.push(-1);
        dense.inputShapeGatherIndicesSparse[fullIndex] = i;
      }
    } else if (1 << i & sparse2.newAxisMask) {
      dense.finalShapeGatherIndices.push(NEW_AXIS);
      dense.finalShapeGatherIndicesSparse.push(-1);
    } else {
      if (fullIndex === dense.begin.length) {
        throw Error(`Index out of range using input dim ${fullIndex}; input has only ${dense.dims} dims, ${dense.begin.length}.`);
      }
      if (sparse2.begin != null) {
        dense.begin[fullIndex] = sparse2.begin[i];
      }
      if (sparse2.end != null) {
        dense.end[fullIndex] = sparse2.end[i];
      }
      dense.strides[fullIndex] = sparse2.strides[i];
      if (sparse2.beginMask & 1 << i) {
        dense.beginMask |= 1 << fullIndex;
      }
      if (sparse2.endMask & 1 << i) {
        dense.endMask |= 1 << fullIndex;
      }
      if (sparse2.shrinkAxisMask & 1 << i) {
        dense.finalShapeGatherIndices.push(SHRINK_AXIS);
        dense.finalShapeGatherIndicesSparse.push(-1);
        dense.shrinkAxisMask |= 1 << fullIndex;
      } else {
        dense.finalShapeGatherIndices.push(fullIndex);
        dense.finalShapeGatherIndicesSparse.push(i);
      }
      dense.inputShapeGatherIndicesSparse[fullIndex] = i;
      fullIndex++;
    }
  }
}
function canonical(x, c, strideI, dimI, masks, validRange) {
  if (masks[c]) {
    return strideI > 0 ? validRange[c] : validRange[c + 1 & 1];
  } else {
    const xFwd = x < 0 ? dimI + x : x;
    return xFwd < validRange[0] ? validRange[0] : xFwd > validRange[1] ? validRange[1] : xFwd;
  }
}

// node_modules/@tensorflow/tfjs-core/dist/serialization.js
var serialization_exports = {};
__export(serialization_exports, {
  Serializable: () => Serializable,
  SerializationMap: () => SerializationMap,
  registerClass: () => registerClass
});
var Serializable = class {
  getClassName() {
    return this.constructor.className;
  }
  static fromConfig(cls, config) {
    return new cls(config);
  }
};
var SerializationMap = class {
  constructor() {
    this.classNameMap = {};
  }
  static getMap() {
    if (SerializationMap.instance == null) {
      SerializationMap.instance = new SerializationMap();
    }
    return SerializationMap.instance;
  }
  static register(cls) {
    SerializationMap.getMap().classNameMap[cls.className] = [cls, cls.fromConfig];
  }
};
function registerClass(cls) {
  assert(cls.className != null, () => `Class being registered does not have the static className property defined.`);
  assert(typeof cls.className === "string", () => `className is required to be a string, but got type ` + typeof cls.className);
  assert(cls.className.length > 0, () => `Class being registered has an empty-string as its className, which is disallowed.`);
  SerializationMap.register(cls);
}

// node_modules/@tensorflow/tfjs-core/dist/test_util.js
var test_util_exports = {};
__export(test_util_exports, {
  TEST_EPSILON_FLOAT16: () => TEST_EPSILON_FLOAT16,
  encodeStrings: () => encodeStrings,
  expectArrayBuffersEqual: () => expectArrayBuffersEqual,
  expectArraysClose: () => expectArraysClose,
  expectArraysEqual: () => expectArraysEqual,
  expectNumbersClose: () => expectNumbersClose,
  expectPromiseToFail: () => expectPromiseToFail,
  expectValuesInRange: () => expectValuesInRange,
  testEpsilon: () => testEpsilon
});
var TEST_EPSILON_FLOAT32 = 1e-3;
var TEST_EPSILON_FLOAT16 = 0.1;
function expectArraysClose(actual, expected, epsilon) {
  if (epsilon == null) {
    epsilon = testEpsilon();
  }
  return expectArraysPredicate(actual, expected, (a, b) => areClose(a, b, epsilon));
}
function testEpsilon() {
  return ENGINE.backend.floatPrecision() === 32 ? TEST_EPSILON_FLOAT32 : TEST_EPSILON_FLOAT16;
}
function expectArraysPredicate(actual, expected, predicate) {
  let checkClassType = true;
  if (isTypedArray(actual) || isTypedArray(expected)) {
    checkClassType = false;
  }
  if (isTypedArray(actual) && isTypedArray(expected)) {
    checkClassType = true;
  }
  if (checkClassType) {
    const aType = actual.constructor.name;
    const bType = expected.constructor.name;
    if (aType !== bType) {
      throw new Error(`Arrays are of different type. Actual: ${aType}. Expected: ${bType}`);
    }
  }
  if (Array.isArray(actual) && Array.isArray(expected)) {
    const actualShape = inferShape(actual);
    const expectedShape = inferShape(expected);
    if (!arraysEqual(actualShape, expectedShape)) {
      throw new Error(`Arrays have different shapes. Actual: [${actualShape}]. Expected: [${expectedShape}]`);
    }
  }
  const actualFlat = isTypedArray(actual) ? actual : flatten(actual);
  const expectedFlat = isTypedArray(expected) ? expected : flatten(expected);
  if (actualFlat.length !== expectedFlat.length) {
    throw new Error(`Arrays have different lengths actual: ${actualFlat.length} vs expected: ${expectedFlat.length}.
Actual:   ${actualFlat}.
Expected: ${expectedFlat}.`);
  }
  for (let i = 0; i < expectedFlat.length; ++i) {
    const a = actualFlat[i];
    const e = expectedFlat[i];
    if (!predicate(a, e)) {
      throw new Error(`Arrays differ: actual[${i}] = ${a}, expected[${i}] = ${e}.
Actual:   ${actualFlat}.
Expected: ${expectedFlat}.`);
    }
  }
}
function expectPromiseToFail(fn, done) {
  fn().then(() => done.fail(), () => done());
}
function expectArraysEqual(actual, expected) {
  const exp2 = typeof expected === "string" || typeof expected === "number" || typeof expected === "boolean" ? [expected] : expected;
  if (isString(actual) || isString(actual[0]) || isString(expected) || isString(expected[0])) {
    return expectArraysPredicate(actual, exp2, (a, b) => a == b);
  }
  return expectArraysPredicate(actual, expected, (a, b) => areClose(a, b, 0));
}
function expectNumbersClose(a, e, epsilon) {
  if (epsilon == null) {
    epsilon = testEpsilon();
  }
  if (!areClose(a, e, epsilon)) {
    throw new Error(`Numbers differ: actual === ${a}, expected === ${e}`);
  }
}
function areClose(a, e, epsilon) {
  if (!isFinite(a) && !isFinite(e)) {
    return true;
  }
  if (isNaN(a) || isNaN(e) || Math.abs(a - e) > epsilon) {
    return false;
  }
  return true;
}
function expectValuesInRange(actual, low, high) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] < low || actual[i] > high) {
      throw new Error(`Value out of range:${actual[i]} low: ${low}, high: ${high}`);
    }
  }
}
function expectArrayBuffersEqual(actual, expected) {
  const actualArray = new Float32Array(actual);
  const expectedArray = new Float32Array(expected);
  if (actualArray.length !== expectedArray.length) {
    throw new Error(`Expected ArrayBuffer to be of length ${expectedArray.length}, but it was ${actualArray.length}`);
  }
  for (let i = 0; i < expectedArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      throw new Error(`Expected ArrayBuffer value at ${i} to be ${expectedArray[i]} but got ${actualArray[i]} instead`);
    }
  }
}
function encodeStrings(a) {
  for (let i = 0; i < a.length; i++) {
    const val = a[i];
    if (Array.isArray(val)) {
      encodeStrings(val);
    } else {
      a[i] = encodeString(val);
    }
  }
  return a;
}

// node_modules/@tensorflow/tfjs-core/dist/version.js
var version = "3.19.0";

// node_modules/@tensorflow/tfjs-core/dist/ops/add.js
function add_(a, b) {
  let $a = convertToTensor(a, "a", "add");
  let $b = convertToTensor(b, "b", "add");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Add, inputs);
}
var add2 = op({ add_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/floorDiv.js
function floorDiv_(a, b) {
  let $a = convertToTensor(a, "a", "floorDiv");
  let $b = convertToTensor(b, "b", "floorDiv");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(FloorDiv, inputs);
}
var floorDiv = op({ floorDiv_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/div.js
function div_(a, b) {
  let $a = convertToTensor(a, "a", "div");
  let $b = convertToTensor(b, "b", "div");
  [$a, $b] = makeTypesMatch($a, $b);
  if ($a.dtype === "int32" && $b.dtype === "int32") {
    return floorDiv($a, $b);
  }
  const inputs = { a: $a, b: $b };
  const attrs = {};
  return ENGINE.runKernel(RealDiv, inputs, attrs);
}
var div = op({ div_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/mul.js
function mul_(a, b) {
  let $a = convertToTensor(a, "a", "mul");
  let $b = convertToTensor(b, "b", "mul");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Multiply, inputs);
}
var mul = op({ mul_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/abs.js
function abs_(x) {
  const $x = convertToTensor(x, "x", "abs");
  if ($x.dtype === "complex64") {
    const inputs = { x: $x };
    return ENGINE.runKernel(ComplexAbs, inputs);
  } else {
    const inputs = { x: $x };
    return ENGINE.runKernel(Abs, inputs);
  }
}
var abs = op({ abs_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/acos.js
function acos_(x) {
  const $x = convertToTensor(x, "x", "acos");
  const inputs = { x: $x };
  return ENGINE.runKernel(Acos, inputs);
}
var acos = op({ acos_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/acosh.js
function acosh_(x) {
  const $x = convertToTensor(x, "x", "acosh");
  const inputs = { x: $x };
  return ENGINE.runKernel(Acosh, inputs);
}
var acosh = op({ acosh_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/add_n.js
function addN_(tensors) {
  assert(Array.isArray(tensors), () => "The argument passed to tf.addN() must be a list of tensors");
  assert(tensors.length >= 1, () => `Must pass at least one tensor to tf.addN(), but got ${tensors.length}`);
  const $tensors = tensors.map((t, i) => convertToTensor(t, `tensors${i}`, "addN"));
  const firstTensor = $tensors[0];
  $tensors.forEach((t) => {
    if (t.dtype !== firstTensor.dtype) {
      throw new Error("All tensors passed to tf.addN() must have the same dtype");
    }
  });
  $tensors.forEach((t) => {
    if (!arraysEqual(t.shape, firstTensor.shape)) {
      throw new Error("All tensors passed to tf.addN() must have the same shape");
    }
  });
  const inputs = $tensors;
  return ENGINE.runKernel(AddN, inputs);
}
var addN = op({ addN_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/all.js
function all_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "all", "bool");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(All, inputs, attrs);
}
var all = op({ all_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/any.js
function any_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "any", "bool");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(Any, inputs, attrs);
}
var any = op({ any_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/arg_max.js
function argMax_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "argMax");
  const inputs = { x: $x };
  const attrs = { axis };
  return ENGINE.runKernel(ArgMax, inputs, attrs);
}
var argMax = op({ argMax_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/arg_min.js
function argMin_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "argMin");
  const inputs = { x: $x };
  const attrs = { axis };
  return ENGINE.runKernel(ArgMin, inputs, attrs);
}
var argMin = op({ argMin_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/asin.js
function asin_(x) {
  const $x = convertToTensor(x, "x", "asin");
  const inputs = { x: $x };
  return ENGINE.runKernel(Asin, inputs);
}
var asin = op({ asin_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/asinh.js
function asinh_(x) {
  const $x = convertToTensor(x, "x", "asinh");
  const inputs = { x: $x };
  return ENGINE.runKernel(Asinh, inputs);
}
var asinh = op({ asinh_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/atan.js
function atan_(x) {
  const $x = convertToTensor(x, "x", "atan");
  const inputs = { x: $x };
  return ENGINE.runKernel(Atan, inputs);
}
var atan = op({ atan_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/atan2.js
function atan2_(a, b) {
  let $a = convertToTensor(a, "a", "atan2");
  let $b = convertToTensor(b, "b", "atan2");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Atan2, inputs);
}
var atan2 = op({ atan2_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/atanh.js
function atanh_(x) {
  const $x = convertToTensor(x, "x", "atanh");
  const inputs = { x: $x };
  return ENGINE.runKernel(Atanh, inputs);
}
var atanh = op({ atanh_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js
function reshape_(x, shape) {
  const $x = convertToTensor(x, "x", "reshape", "string_or_numeric");
  const inputs = { x: $x };
  const attrs = { shape };
  return ENGINE.runKernel(Reshape, inputs, attrs);
}
var reshape = op({ reshape_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/conv_util.js
function computeDilation2DInfo(inputShape, filterShape, strides, pad2, dataFormat = "NHWC", dilations) {
  const inputChannels = inputShape[3];
  const $filterShape = [...filterShape, inputChannels];
  const $dataFormat = convertConv2DDataFormat(dataFormat);
  return computeConv2DInfo(inputShape, $filterShape, strides, dilations, pad2, null, null, $dataFormat);
}
function computePool2DInfo(inShape, filterSize, strides, dilations, pad2, roundingMode, dataFormat = "channelsLast") {
  const [filterHeight, filterWidth] = parseTupleParam(filterSize);
  let filterShape;
  if (dataFormat === "channelsLast") {
    filterShape = [filterHeight, filterWidth, inShape[3], inShape[3]];
  } else if (dataFormat === "channelsFirst") {
    filterShape = [filterHeight, filterWidth, inShape[1], inShape[1]];
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
  return computeConv2DInfo(inShape, filterShape, strides, dilations, pad2, roundingMode, false, dataFormat);
}
function computePool3DInfo(inShape, filterSize, strides, dilations, pad2, roundingMode, dataFormat = "NDHWC") {
  const [filterDepth, filterHeight, filterWidth] = parse3TupleParam(filterSize);
  let filterShape;
  let $dataFormat;
  if (dataFormat === "NDHWC") {
    $dataFormat = "channelsLast";
    filterShape = [filterDepth, filterHeight, filterWidth, inShape[4], inShape[4]];
  } else if (dataFormat === "NCDHW") {
    $dataFormat = "channelsFirst";
    filterShape = [filterDepth, filterHeight, filterWidth, inShape[1], inShape[1]];
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
  return computeConv3DInfo(inShape, filterShape, strides, dilations, pad2, false, $dataFormat, roundingMode);
}
function computeConv2DInfo(inShape, filterShape, strides, dilations, pad2, roundingMode, depthwise = false, dataFormat = "channelsLast") {
  let [batchSize, inHeight, inWidth, inChannels] = [-1, -1, -1, -1];
  if (dataFormat === "channelsLast") {
    [batchSize, inHeight, inWidth, inChannels] = inShape;
  } else if (dataFormat === "channelsFirst") {
    [batchSize, inChannels, inHeight, inWidth] = inShape;
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
  const [filterHeight, filterWidth, , filterChannels] = filterShape;
  const [strideHeight, strideWidth] = parseTupleParam(strides);
  const [dilationHeight, dilationWidth] = parseTupleParam(dilations);
  const effectiveFilterHeight = getEffectiveFilterSize(filterHeight, dilationHeight);
  const effectiveFilterWidth = getEffectiveFilterSize(filterWidth, dilationWidth);
  const { padInfo, outHeight, outWidth } = getPadAndOutInfo(pad2, inHeight, inWidth, strideHeight, strideWidth, effectiveFilterHeight, effectiveFilterWidth, roundingMode, dataFormat);
  const outChannels = depthwise ? filterChannels * inChannels : filterChannels;
  let outShape;
  if (dataFormat === "channelsFirst") {
    outShape = [batchSize, outChannels, outHeight, outWidth];
  } else if (dataFormat === "channelsLast") {
    outShape = [batchSize, outHeight, outWidth, outChannels];
  }
  return {
    batchSize,
    dataFormat,
    inHeight,
    inWidth,
    inChannels,
    outHeight,
    outWidth,
    outChannels,
    padInfo,
    strideHeight,
    strideWidth,
    filterHeight,
    filterWidth,
    effectiveFilterHeight,
    effectiveFilterWidth,
    dilationHeight,
    dilationWidth,
    inShape,
    outShape,
    filterShape
  };
}
function computeConv3DInfo(inShape, filterShape, strides, dilations, pad2, depthwise = false, dataFormat = "channelsLast", roundingMode) {
  let [batchSize, inDepth, inHeight, inWidth, inChannels] = [-1, -1, -1, -1, -1];
  if (dataFormat === "channelsLast") {
    [batchSize, inDepth, inHeight, inWidth, inChannels] = inShape;
  } else if (dataFormat === "channelsFirst") {
    [batchSize, inChannels, inDepth, inHeight, inWidth] = inShape;
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
  const [filterDepth, filterHeight, filterWidth, , filterChannels] = filterShape;
  const [strideDepth, strideHeight, strideWidth] = parse3TupleParam(strides);
  const [dilationDepth, dilationHeight, dilationWidth] = parse3TupleParam(dilations);
  const effectiveFilterDepth = getEffectiveFilterSize(filterDepth, dilationDepth);
  const effectiveFilterHeight = getEffectiveFilterSize(filterHeight, dilationHeight);
  const effectiveFilterWidth = getEffectiveFilterSize(filterWidth, dilationWidth);
  const { padInfo, outDepth, outHeight, outWidth } = get3DPadAndOutInfo(pad2, inDepth, inHeight, inWidth, strideDepth, strideHeight, strideWidth, effectiveFilterDepth, effectiveFilterHeight, effectiveFilterWidth, roundingMode);
  const outChannels = depthwise ? filterChannels * inChannels : filterChannels;
  let outShape;
  if (dataFormat === "channelsFirst") {
    outShape = [batchSize, outChannels, outDepth, outHeight, outWidth];
  } else if (dataFormat === "channelsLast") {
    outShape = [batchSize, outDepth, outHeight, outWidth, outChannels];
  }
  return {
    batchSize,
    dataFormat,
    inDepth,
    inHeight,
    inWidth,
    inChannels,
    outDepth,
    outHeight,
    outWidth,
    outChannels,
    padInfo,
    strideDepth,
    strideHeight,
    strideWidth,
    filterDepth,
    filterHeight,
    filterWidth,
    effectiveFilterDepth,
    effectiveFilterHeight,
    effectiveFilterWidth,
    dilationDepth,
    dilationHeight,
    dilationWidth,
    inShape,
    outShape,
    filterShape
  };
}
function computeOutputShape2D(inShape, fieldSize, stride, zeroPad, roundingMode) {
  if (zeroPad == null) {
    zeroPad = computeDefaultPad(inShape, fieldSize, stride);
  }
  const inputRows = inShape[0];
  const inputCols = inShape[1];
  const outputRows = round((inputRows - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  const outputCols = round((inputCols - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  return [outputRows, outputCols];
}
function computeOutputShape4D(inShape, fieldSize, outChannels, stride, zeroPad, roundingMode) {
  if (zeroPad == null) {
    zeroPad = computeDefaultPad(inShape, fieldSize, stride);
  }
  const inputDepth = inShape[0];
  const inputRows = inShape[1];
  const inputCols = inShape[2];
  const outputDepths = round((inputDepth - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  const outputRows = round((inputRows - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  const outputCols = round((inputCols - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  return [outputDepths, outputRows, outputCols, outChannels];
}
function computeDefaultPad(inputShape, fieldSize, stride, dilation = 1) {
  const effectiveFieldSize = getEffectiveFilterSize(fieldSize, dilation);
  return Math.floor((inputShape[0] * (stride - 1) - stride + effectiveFieldSize) / 2);
}
function parseTupleParam(param) {
  if (typeof param === "number") {
    return [param, param, param];
  }
  if (param.length === 2) {
    return [param[0], param[1], 1];
  }
  return param;
}
function parse3TupleParam(param) {
  return typeof param === "number" ? [param, param, param] : param;
}
function getEffectiveFilterSize(filterSize, dilation) {
  if (dilation <= 1) {
    return filterSize;
  }
  return filterSize + (filterSize - 1) * (dilation - 1);
}
function getPadAndOutInfo(pad2, inHeight, inWidth, strideHeight, strideWidth, filterHeight, filterWidth, roundingMode, dataFormat) {
  let padInfo;
  let outHeight;
  let outWidth;
  if (typeof pad2 === "number") {
    const padType = pad2 === 0 ? "VALID" : "NUMBER";
    padInfo = { top: pad2, bottom: pad2, left: pad2, right: pad2, type: padType };
    const outShape = computeOutputShape2D([inHeight, inWidth], filterHeight, strideHeight, pad2, roundingMode);
    outHeight = outShape[0];
    outWidth = outShape[1];
  } else if (pad2 === "same") {
    outHeight = Math.ceil(inHeight / strideHeight);
    outWidth = Math.ceil(inWidth / strideWidth);
    const padAlongHeight = Math.max(0, (outHeight - 1) * strideHeight + filterHeight - inHeight);
    const padAlongWidth = Math.max(0, (outWidth - 1) * strideWidth + filterWidth - inWidth);
    const top = Math.floor(padAlongHeight / 2);
    const bottom = padAlongHeight - top;
    const left = Math.floor(padAlongWidth / 2);
    const right = padAlongWidth - left;
    padInfo = { top, bottom, left, right, type: "SAME" };
  } else if (pad2 === "valid") {
    padInfo = { top: 0, bottom: 0, left: 0, right: 0, type: "VALID" };
    outHeight = Math.ceil((inHeight - filterHeight + 1) / strideHeight);
    outWidth = Math.ceil((inWidth - filterWidth + 1) / strideWidth);
  } else if (typeof pad2 === "object") {
    const top = dataFormat === "channelsLast" ? pad2[1][0] : pad2[2][0];
    const bottom = dataFormat === "channelsLast" ? pad2[1][1] : pad2[2][1];
    const left = dataFormat === "channelsLast" ? pad2[2][0] : pad2[3][0];
    const right = dataFormat === "channelsLast" ? pad2[2][1] : pad2[3][1];
    const padType = top === 0 && bottom === 0 && left === 0 && right === 0 ? "VALID" : "EXPLICIT";
    padInfo = { top, bottom, left, right, type: padType };
    outHeight = round((inHeight - filterHeight + top + bottom) / strideHeight + 1, roundingMode);
    outWidth = round((inWidth - filterWidth + left + right) / strideWidth + 1, roundingMode);
  } else {
    throw Error(`Unknown padding parameter: ${pad2}`);
  }
  return { padInfo, outHeight, outWidth };
}
function get3DPadAndOutInfo(pad2, inDepth, inHeight, inWidth, strideDepth, strideHeight, strideWidth, filterDepth, filterHeight, filterWidth, roundingMode) {
  let padInfo;
  let outDepth;
  let outHeight;
  let outWidth;
  if (typeof pad2 === "number") {
    const padType = pad2 === 0 ? "VALID" : "NUMBER";
    padInfo = {
      top: pad2,
      bottom: pad2,
      left: pad2,
      right: pad2,
      front: pad2,
      back: pad2,
      type: padType
    };
    const outShape = computeOutputShape4D([inDepth, inHeight, inWidth, 1], filterDepth, 1, strideDepth, pad2, roundingMode);
    outDepth = outShape[0];
    outHeight = outShape[1];
    outWidth = outShape[2];
  } else if (pad2 === "same") {
    outDepth = Math.ceil(inDepth / strideDepth);
    outHeight = Math.ceil(inHeight / strideHeight);
    outWidth = Math.ceil(inWidth / strideWidth);
    const padAlongDepth = (outDepth - 1) * strideDepth + filterDepth - inDepth;
    const padAlongHeight = (outHeight - 1) * strideHeight + filterHeight - inHeight;
    const padAlongWidth = (outWidth - 1) * strideWidth + filterWidth - inWidth;
    const front = Math.floor(padAlongDepth / 2);
    const back = padAlongDepth - front;
    const top = Math.floor(padAlongHeight / 2);
    const bottom = padAlongHeight - top;
    const left = Math.floor(padAlongWidth / 2);
    const right = padAlongWidth - left;
    padInfo = { top, bottom, left, right, front, back, type: "SAME" };
  } else if (pad2 === "valid") {
    padInfo = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      front: 0,
      back: 0,
      type: "VALID"
    };
    outDepth = Math.ceil((inDepth - filterDepth + 1) / strideDepth);
    outHeight = Math.ceil((inHeight - filterHeight + 1) / strideHeight);
    outWidth = Math.ceil((inWidth - filterWidth + 1) / strideWidth);
  } else {
    throw Error(`Unknown padding parameter: ${pad2}`);
  }
  return { padInfo, outDepth, outHeight, outWidth };
}
function round(value, roundingMode) {
  if (!roundingMode) {
    return Math.trunc(value);
  }
  switch (roundingMode) {
    case "round":
      return Math.round(value);
    case "ceil":
      return Math.ceil(value);
    case "floor":
      return Math.floor(value);
    default:
      throw new Error(`Unknown roundingMode ${roundingMode}`);
  }
}
function tupleValuesAreOne(param) {
  const [dimA, dimB, dimC] = parseTupleParam(param);
  return dimA === 1 && dimB === 1 && dimC === 1;
}
function eitherStridesOrDilationsAreOne(strides, dilations) {
  return tupleValuesAreOne(strides) || tupleValuesAreOne(dilations);
}
function convertConv2DDataFormat(dataFormat) {
  if (dataFormat === "NHWC") {
    return "channelsLast";
  } else if (dataFormat === "NCHW") {
    return "channelsFirst";
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
}
function checkPadOnDimRoundingMode(opDesc, pad2, dimRoundingMode) {
  if (dimRoundingMode != null) {
    if (typeof pad2 === "string") {
      throw Error(`Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
    } else if (typeof pad2 === "number") {
      assert(isInt(pad2), () => `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
    } else if (typeof pad2 === "object") {
      pad2.forEach((p) => {
        p.forEach((v) => {
          assert(isInt(v), () => `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${v}.`);
        });
      });
    } else {
      throw Error(`Error in ${opDesc}: Unknown padding parameter: ${pad2}`);
    }
  }
}

// node_modules/@tensorflow/tfjs-core/dist/ops/avg_pool.js
function avgPool_(x, filterSize, strides, pad2, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "avgPool", "float32");
  const dilations = 1;
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in avgPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in avgPool: x must be rank 4 but got rank ${x4D.rank}.`);
  checkPadOnDimRoundingMode("avgPool", pad2, dimRoundingMode);
  const inputs = { x: x4D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode };
  let res = ENGINE.runKernel(AvgPool, inputs, attrs);
  res = cast(res, $x.dtype);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var avgPool = op({ avgPool_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/avg_pool_3d.js
function avgPool3d_(x, filterSize, strides, pad2, dimRoundingMode, dataFormat = "NDHWC") {
  const $x = convertToTensor(x, "x", "avgPool3d", "float32");
  let x5D = $x;
  let reshapedTo5D = false;
  if ($x.rank === 4) {
    reshapedTo5D = true;
    x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
  }
  assert(x5D.rank === 5, () => `Error in avgPool3d: x must be rank 5 but got rank ${x5D.rank}.`);
  assert(dataFormat === "NDHWC", () => `Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${dataFormat}`);
  checkPadOnDimRoundingMode("avgPool3d", pad2, dimRoundingMode);
  const inputs = { x: x5D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode, dataFormat };
  let res = ENGINE.runKernel(AvgPool3D, inputs, attrs);
  res = cast(res, x5D.dtype);
  if (reshapedTo5D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
  }
  return res;
}
var avgPool3d = op({ avgPool3d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/concat.js
function concat_(tensors, axis = 0) {
  assert(tensors.length >= 1, () => "Pass at least one tensor to concat");
  const $tensors = convertToTensorArray(tensors, "tensors", "concat", "string_or_numeric");
  if ($tensors[0].dtype === "complex64") {
    $tensors.forEach((tensor2) => {
      if (tensor2.dtype !== "complex64") {
        throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${tensor2.dtype}. `);
      }
    });
  }
  if ($tensors.length === 1) {
    return clone($tensors[0]);
  }
  const inputs = $tensors;
  const attr = { axis };
  return ENGINE.runKernel(Concat, inputs, attr);
}
var concat = op({ concat_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sigmoid.js
function sigmoid_(x) {
  const $x = convertToTensor(x, "x", "sigmoid", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sigmoid, inputs);
}
var sigmoid = op({ sigmoid_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/slice.js
function slice_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice", "string_or_numeric");
  if ($x.rank === 0) {
    throw new Error("Slicing scalar is not possible");
  }
  const inputs = { x: $x };
  const attrs = { begin, size };
  return ENGINE.runKernel(Slice, inputs, attrs);
}
var slice = op({ slice_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/tanh.js
function tanh_(x) {
  const $x = convertToTensor(x, "x", "tanh", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Tanh, inputs);
}
var tanh2 = op({ tanh_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/basic_lstm_cell.js
function basicLSTMCell_(forgetBias, lstmKernel, lstmBias, data, c, h) {
  const $forgetBias = convertToTensor(forgetBias, "forgetBias", "basicLSTMCell");
  const $lstmKernel = convertToTensor(lstmKernel, "lstmKernel", "basicLSTMCell");
  const $lstmBias = convertToTensor(lstmBias, "lstmBias", "basicLSTMCell");
  const $data = convertToTensor(data, "data", "basicLSTMCell");
  const $c = convertToTensor(c, "c", "basicLSTMCell");
  const $h = convertToTensor(h, "h", "basicLSTMCell");
  const combined = concat([$data, $h], 1);
  const weighted = matMul(combined, $lstmKernel);
  const res = add2(weighted, $lstmBias);
  const batchSize = res.shape[0];
  const sliceCols = res.shape[1] / 4;
  const sliceSize = [batchSize, sliceCols];
  const i = slice(res, [0, 0], sliceSize);
  const j = slice(res, [0, sliceCols], sliceSize);
  const f = slice(res, [0, sliceCols * 2], sliceSize);
  const o = slice(res, [0, sliceCols * 3], sliceSize);
  const newC = add2(mul(sigmoid(i), tanh2(j)), mul($c, sigmoid(add2($forgetBias, f))));
  const newH = mul(tanh2(newC), sigmoid(o));
  return [newC, newH];
}
var basicLSTMCell = op({ basicLSTMCell_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/batch_to_space_nd.js
function batchToSpaceND_(x, blockShape, crops) {
  const $x = convertToTensor(x, "x", "batchToSpaceND");
  const prod2 = blockShape.reduce((a, b) => a * b);
  assert($x.rank >= 1 + blockShape.length, () => `input rank is ${$x.rank} but should be > than blockShape.length ${blockShape.length}`);
  assert(crops.length === blockShape.length, () => `crops.length is ${crops.length} but should be equal to blockShape.length  ${blockShape.length}`);
  assert($x.shape[0] % prod2 === 0, () => `input tensor batch is ${$x.shape[0]} but is not divisible by the product of the elements of blockShape ${blockShape.join(" * ")} === ${prod2}`);
  const inputs = { x: $x };
  const attrs = { blockShape, crops };
  return ENGINE.runKernel(BatchToSpaceND, inputs, attrs);
}
var batchToSpaceND = op({ batchToSpaceND_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/batchnorm_util.js
function xAs4D(x) {
  let x4D;
  if (x.rank === 0 || x.rank === 1) {
    x4D = reshape(x, [1, 1, 1, x.size]);
  } else if (x.rank === 2) {
    x4D = reshape(x, [1, 1, x.shape[0], x.shape[1]]);
  } else if (x.rank === 3) {
    x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
  } else {
    x4D = x;
  }
  return x4D;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/batchnorm.js
function batchNorm_(x, mean2, variance, offset, scale, varianceEpsilon) {
  if (varianceEpsilon == null) {
    varianceEpsilon = 1e-3;
  }
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean2, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale != null) {
    $scale = convertToTensor(scale, "scale", "batchNorm");
  }
  let $offset;
  if (offset != null) {
    $offset = convertToTensor(offset, "offset", "batchNorm");
  }
  assert($mean.rank === $variance.rank, () => "Batch normalization gradient requires mean and variance to have equal ranks.");
  assert($offset == null || $mean.rank === $offset.rank, () => "Batch normalization gradient requires mean and offset to have equal ranks.");
  assert($scale == null || $mean.rank === $scale.rank, () => "Batch normalization gradient requires mean and scale to have equal ranks.");
  const x4D = xAs4D($x);
  const inputs = {
    x: x4D,
    scale: $scale,
    offset: $offset,
    mean: $mean,
    variance: $variance
  };
  const attrs = { varianceEpsilon };
  const res = ENGINE.runKernel(FusedBatchNorm, inputs, attrs);
  return reshape(res, $x.shape);
}
var batchNorm = op({ batchNorm_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/batchnorm2d.js
function batchNorm2d_(x, mean2, variance, offset, scale, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean2, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale != null) {
    $scale = convertToTensor(scale, "scale", "batchNorm");
  }
  let $offset;
  if (offset != null) {
    $offset = convertToTensor(offset, "offset", "batchNorm");
  }
  assert($x.rank === 2, () => `Error in batchNorm2D: x must be rank 2 but got rank ${$x.rank}.`);
  assert($mean.rank === 2 || $mean.rank === 1, () => `Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${$mean.rank}.`);
  assert($variance.rank === 2 || $variance.rank === 1, () => `Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${$variance.rank}.`);
  if ($scale != null) {
    assert($scale.rank === 2 || $scale.rank === 1, () => `Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${$scale.rank}.`);
  }
  if ($offset != null) {
    assert($offset.rank === 2 || $offset.rank === 1, () => `Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${$offset.rank}.`);
  }
  return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
var batchNorm2d = op({ batchNorm2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/batchnorm3d.js
function batchNorm3d_(x, mean2, variance, offset, scale, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean2, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale != null) {
    $scale = convertToTensor(scale, "scale", "batchNorm");
  }
  let $offset;
  if (offset != null) {
    $offset = convertToTensor(offset, "offset", "batchNorm");
  }
  assert($x.rank === 3, () => `Error in batchNorm3D: x must be rank 3 but got rank ${$x.rank}.`);
  assert($mean.rank === 3 || $mean.rank === 1, () => `Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${$mean.rank}.`);
  assert($variance.rank === 3 || $variance.rank === 1, () => `Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${$variance.rank}.`);
  if ($scale != null) {
    assert($scale.rank === 3 || $scale.rank === 1, () => `Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${$scale.rank}.`);
  }
  if ($offset != null) {
    assert($offset.rank === 3 || $offset.rank === 1, () => `Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${$offset.rank}.`);
  }
  return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
var batchNorm3d = op({ batchNorm3d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/batchnorm4d.js
function batchNorm4d_(x, mean2, variance, offset, scale, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean2, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale != null) {
    $scale = convertToTensor(scale, "scale", "batchNorm");
  }
  let $offset;
  if (offset != null) {
    $offset = convertToTensor(offset, "offset", "batchNorm");
  }
  assert($x.rank === 4, () => `Error in batchNorm4D: x must be rank 4 but got rank ${$x.rank}.`);
  assert($mean.rank === 4 || $mean.rank === 1, () => `Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${$mean.rank}.`);
  assert($variance.rank === 4 || $variance.rank === 1, () => `Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${$variance.rank}.`);
  if ($scale != null) {
    assert($scale.rank === 4 || $scale.rank === 1, () => `Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${$scale.rank}.`);
  }
  if ($offset != null) {
    assert($offset.rank === 4 || $offset.rank === 1, () => `Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${$offset.rank}.`);
  }
  return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
var batchNorm4d = op({ batchNorm4d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/bincount.js
function bincount_(x, weights, size) {
  const $x = convertToTensor(x, "x", "bincount");
  const $weights = convertToTensor(weights, "weights", "bincount");
  assert($x.dtype === "int32", () => `Error in bincount: input dtype must be int32, but got ${$x.dtype}`);
  assert(size >= 0, () => `size must be non-negative, but got ${size}.`);
  assert($weights.size === $x.size || $weights.size === 0, () => `Error in bincount: weights must have the same size as input or0-length, but got input shape: ${$x.shape}, weights shape: ${$weights.shape}.`);
  const inputs = { x: $x, weights: $weights };
  const attrs = { size };
  return ENGINE.runKernel(Bincount, inputs, attrs);
}
var bincount = op({ bincount_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/broadcast_args.js
function broadcastArgs_(s0, s1) {
  const shape1Input = convertToTensor(s0, "s0", "broadcastArgs", "int32");
  const shape2Input = convertToTensor(s1, "s1", "broadcastArgs", "int32");
  if (shape1Input.rank !== 1) {
    throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${shape1Input.rank}`);
  }
  if (shape2Input.rank !== 1) {
    throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${shape2Input.rank}`);
  }
  const inputs = { s0: shape1Input, s1: shape2Input };
  return ENGINE.runKernel(BroadcastArgs, inputs);
}
var broadcastArgs = op({ broadcastArgs_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/broadcast_to.js
function broadcastTo_(x, shape) {
  let input = convertToTensor(x, "broadcastTo", "x");
  const xShape = input.shape;
  if (shape.some((d) => !(d > 0) || d % 1 !== 0)) {
    throw new Error(`broadcastTo(): Invalid broadcast shape [${shape}].`);
  }
  if (shape.length < input.rank) {
    throw new Error(`broadcastTo(): shape.length=${shape.length} < input.rank=${input.rank}.`);
  }
  if (shape.length > input.rank) {
    const newShape = input.shape.slice();
    while (newShape.length < shape.length) {
      newShape.unshift(1);
    }
    input = reshape(input, newShape);
  }
  const inputShape = input.shape;
  const reps = Array.from(shape);
  for (let i = shape.length - 1; i >= 0; i--) {
    if (inputShape[i] === shape[i]) {
      reps[i] = 1;
    } else if (input.shape[i] !== 1) {
      throw new Error(`broadcastTo(): [${xShape}] cannot be broadcast to [${shape}].`);
    }
  }
  const axes = reps.map((n, i) => n > 1 ? i : -1).filter((i) => i >= 0);
  if (axes.length === 0) {
    return clone(input);
  }
  const inputs = { x: input };
  const attrs = { reps };
  return ENGINE.runKernel(Tile, inputs, attrs);
}
var broadcastTo = op({ broadcastTo_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/ceil.js
function ceil_(x) {
  const $x = convertToTensor(x, "x", "ceil", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Ceil, inputs);
}
var ceil = op({ ceil_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/clip_by_value.js
function clipByValue_(x, clipValueMin, clipValueMax) {
  const $x = convertToTensor(x, "x", "clipByValue");
  assert(clipValueMin <= clipValueMax, () => `Error in clip: min (${clipValueMin}) must be less than or equal to max (${clipValueMax}).`);
  const inputs = { x: $x };
  const attrs = { clipValueMin, clipValueMax };
  return ENGINE.runKernel(ClipByValue, inputs, attrs);
}
var clipByValue = op({ clipByValue_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/concat_1d.js
function concat1d_(tensors) {
  return concat(tensors, 0);
}
var concat1d = op({ concat1d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/concat_2d.js
function concat2d_(tensors, axis) {
  return concat(tensors, axis);
}
var concat2d = op({ concat2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/concat_3d.js
function concat3d_(tensors, axis) {
  return concat(tensors, axis);
}
var concat3d = op({ concat3d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/concat_4d.js
function concat4d_(tensors, axis) {
  return concat(tensors, axis);
}
var concat4d = op({ concat4d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/conv2d.js
function conv2d_(x, filter, strides, pad2, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "conv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in conv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($filter.rank === 4, () => `Error in conv2d: filter must be rank 4, but got rank ${$filter.rank}.`);
  checkPadOnDimRoundingMode("conv2d", pad2, dimRoundingMode);
  const inDepth = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  assert(inDepth === $filter.shape[2], () => `Error in conv2d: depth of input (${inDepth}) must match input depth for filter ${$filter.shape[2]}.`);
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in conv2D: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad2, dataFormat, dilations, dimRoundingMode };
  const res = ENGINE.runKernel(Conv2D, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var conv2d = op({ conv2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/conv1d.js
function conv1d_(x, filter, stride, pad2, dataFormat = "NWC", dilation = 1, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv1d");
  const $filter = convertToTensor(filter, "filter", "conv1d");
  let x3D = $x;
  let reshapedTo3D = false;
  if ($x.rank === 2) {
    reshapedTo3D = true;
    x3D = reshape($x, [1, $x.shape[0], $x.shape[1]]);
  }
  assert(x3D.rank === 3, () => `Error in conv1d: input must be rank 3, but got rank ${x3D.rank}.`);
  assert($filter.rank === 3, () => `Error in conv1d: filter must be rank 3, but got rank ${$filter.rank}.`);
  checkPadOnDimRoundingMode("conv1d", pad2, dimRoundingMode);
  assert(x3D.shape[2] === $filter.shape[1], () => `Error in conv1d: depth of input (${x3D.shape[2]}) must match input depth for filter ${$filter.shape[1]}.`);
  assert(eitherStridesOrDilationsAreOne(stride, dilation), () => `Error in conv1D: Either stride or dilation must be 1. Got stride ${stride} and dilation '${dilation}'`);
  assert(dataFormat === "NWC", () => `Error in conv1d: got dataFormat of ${dataFormat} but only NWC is currently supported.`);
  const filter4D = reshape($filter, [1, $filter.shape[0], $filter.shape[1], $filter.shape[2]]);
  const input4D = reshape(x3D, [x3D.shape[0], 1, x3D.shape[1], x3D.shape[2]]);
  const strides = [1, stride];
  const dilations = [1, dilation];
  const conv2dDataFormat = "NHWC";
  const res = conv2d(input4D, filter4D, strides, pad2, conv2dDataFormat, dilations, dimRoundingMode);
  if (reshapedTo3D) {
    return reshape(res, [res.shape[2], res.shape[3]]);
  }
  return reshape(res, [res.shape[0], res.shape[2], res.shape[3]]);
}
var conv1d = op({ conv1d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/conv2d_backprop_input.js
function conv2DBackpropInput_(xShape, dy, filter, strides, pad2, dataFormat = "NHWC", dimRoundingMode) {
  assert(xShape.length === dy.rank, () => `Length of inShape (${xShape.length}) and rank of dy (${dy.rank}) must match`);
  let xShape4D = xShape;
  let dy4D = dy;
  let reshapedTo4D = false;
  if (dy.rank === 3) {
    reshapedTo4D = true;
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
    xShape4D = [1, xShape[0], xShape[1], xShape[2]];
  }
  assert(xShape4D.length === 4, () => `Error in conv2dDerInput: inShape must be length 4, but got length ${xShape4D.length}.`);
  assert(dy4D.rank === 4, () => `Error in conv2dDerInput: dy must be rank 4, but got rank ${dy4D.rank}`);
  assert(filter.rank === 4, () => `Error in conv2dDerInput: filter must be rank 4, but got rank ${filter.rank}`);
  const inDepth = dataFormat === "NHWC" ? xShape4D[3] : xShape4D[1];
  const outDepth = dataFormat === "NHWC" ? dy4D.shape[3] : dy4D.shape[1];
  assert(inDepth === filter.shape[2], () => `Error in conv2dDerInput: depth of input (${inDepth}) must match input depth for filter ${filter.shape[2]}.`);
  assert(outDepth === filter.shape[3], () => `Error in conv2dDerInput: depth of output (${outDepth}) must match output depth for filter ${filter.shape[3]}.`);
  checkPadOnDimRoundingMode("conv2dDerInput", pad2, dimRoundingMode);
  const inputs = { dy: dy4D, filter };
  const attrs = { strides, pad: pad2, dataFormat, dimRoundingMode, inputShape: xShape4D };
  const res = ENGINE.runKernel(Conv2DBackpropInput, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var conv2DBackpropInput = op({ conv2DBackpropInput_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/conv2d_transpose.js
function conv2dTranspose_(x, filter, outputShape, strides, pad2, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv2dTranspose");
  const $filter = convertToTensor(filter, "filter", "conv2dTranspose");
  return conv2DBackpropInput(outputShape, $x, $filter, strides, pad2, "NHWC", dimRoundingMode);
}
var conv2dTranspose = op({ conv2dTranspose_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/conv3d.js
function conv3d_(x, filter, strides, pad2, dataFormat = "NDHWC", dilations = [1, 1, 1]) {
  const $x = convertToTensor(x, "x", "conv3d");
  const $filter = convertToTensor(filter, "filter", "conv3d");
  let x5D = $x;
  let reshapedTo5D = false;
  if ($x.rank === 4) {
    reshapedTo5D = true;
    x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
  }
  assert(x5D.rank === 5, () => `Error in conv3d: input must be rank 5, but got rank ${x5D.rank}.`);
  assert($filter.rank === 5, () => `Error in conv3d: filter must be rank 5, but got rank ${$filter.rank}.`);
  assert(x5D.shape[4] === $filter.shape[3], () => `Error in conv3d: depth of input (${x5D.shape[4]}) must match input depth for filter ${$filter.shape[3]}.`);
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in conv3D: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  assert(dataFormat === "NDHWC", () => `Error in conv3d: got dataFormat of ${dataFormat} but only NDHWC is currently supported.`);
  const inputs = { x: x5D, filter: $filter };
  const attrs = { strides, pad: pad2, dataFormat, dilations };
  const res = ENGINE.runKernel(Conv3D, inputs, attrs);
  if (reshapedTo5D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
  }
  return res;
}
var conv3d = op({ conv3d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/conv3d_backprop_input.js
function conv3DBackpropInput_(xShape, dy, filter, strides, pad2) {
  assert(xShape.length === dy.rank, () => `Length of inShape (${xShape.length}) and rank of dy (${dy.rank}) must match`);
  let xShape5D = xShape;
  let dy5D = dy;
  let reshapedTo5D = false;
  if (dy.rank === 4) {
    reshapedTo5D = true;
    dy5D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2], dy.shape[3]]);
    xShape5D = [1, xShape[0], xShape[1], xShape[2], xShape[3]];
  }
  const inDepth = xShape5D[4];
  const outDepth = dy5D.shape[4];
  assert(xShape5D.length === 5, () => `Error in conv3dDerInput: inShape must be length 5, but got length ${xShape5D.length}.`);
  assert(dy5D.rank === 5, () => `Error in conv3dDerInput: dy must be rank 5, but got rank ${dy5D.rank}`);
  assert(filter.rank === 5, () => `Error in conv3dDerInput: filter must be rank 5, but got rank ${filter.rank}`);
  assert(inDepth === filter.shape[3], () => `Error in conv3dDerInput: depth of input (${inDepth}) must match input depth for filter ${filter.shape[3]}.`);
  assert(outDepth === filter.shape[4], () => `Error in conv3dDerInput: depth of output (${outDepth}) must match output depth for filter ${filter.shape[4]}.`);
  const inputs = { dy: dy5D, filter };
  const attrs = { pad: pad2, strides, inputShape: xShape5D };
  const res = ENGINE.runKernel(Conv3DBackpropInputV2, inputs, attrs);
  if (reshapedTo5D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
  }
  return res;
}
var conv3DBackpropInput = op({ conv3DBackpropInput_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/conv3d_transpose.js
function conv3dTranspose_(x, filter, outputShape, strides, pad2) {
  const $x = convertToTensor(x, "x", "conv3dTranspose");
  const $filter = convertToTensor(filter, "filter", "conv3dTranspose");
  return conv3DBackpropInput(outputShape, $x, $filter, strides, pad2);
}
var conv3dTranspose = op({ conv3dTranspose_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/cos.js
function cos_(x) {
  const $x = convertToTensor(x, "x", "cos", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Cos, inputs);
}
var cos = op({ cos_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/cosh.js
function cosh_(x) {
  const $x = convertToTensor(x, "x", "cosh", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Cosh, inputs);
}
var cosh = op({ cosh_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/cumprod.js
function cumprod_(x, axis = 0, exclusive = false, reverse2 = false) {
  const $x = convertToTensor(x, "x", "cumprod");
  const inputs = { x: $x };
  const attrs = { axis, exclusive, reverse: reverse2 };
  return ENGINE.runKernel(Cumprod, inputs, attrs);
}
var cumprod = op({ cumprod_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/cumsum.js
function cumsum_(x, axis = 0, exclusive = false, reverse2 = false) {
  const $x = convertToTensor(x, "x", "cumsum");
  const inputs = { x: $x };
  const attrs = { axis, exclusive, reverse: reverse2 };
  return ENGINE.runKernel(Cumsum, inputs, attrs);
}
var cumsum = op({ cumsum_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/dense_bincount.js
function denseBincount_(x, weights, size, binaryOutput = false) {
  const $x = convertToTensor(x, "x", "denseBincount");
  const $weights = convertToTensor(weights, "weights", "denseBincount");
  assert($x.dtype === "int32", () => `Error in denseBincount: input dtype must be int32, but got ${$x.dtype}`);
  assert($x.rank <= 2, () => `Error in denseBincount: input must be at most rank 2, but got rank ${$x.rank}.`);
  assert(size >= 0, () => `size must be non-negative, but got ${size}.`);
  assert($weights.size === $x.size || $weights.size === 0, () => `Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${$x.shape}, weights shape: ${$weights.shape}.`);
  const inputs = { x: $x, weights: $weights };
  const attrs = { size, binaryOutput };
  return ENGINE.runKernel(DenseBincount, inputs, attrs);
}
var denseBincount = op({ denseBincount_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/depth_to_space.js
function depthToSpace_(x, blockSize, dataFormat = "NHWC") {
  const $x = convertToTensor(x, "x", "depthToSpace", "float32");
  const inputHeight = dataFormat === "NHWC" ? $x.shape[1] : $x.shape[2];
  const inputWidth = dataFormat === "NHWC" ? $x.shape[2] : $x.shape[3];
  const inputDepth = dataFormat === "NHWC" ? $x.shape[3] : $x.shape[1];
  assert(blockSize > 1, () => `blockSize should be > 1 for depthToSpace, but was: ${blockSize}`);
  assert(inputHeight * blockSize >= 0, () => `Negative dimension size caused by overflow when multiplying
    ${inputHeight} and ${blockSize}  for depthToSpace with input shape
    ${$x.shape}`);
  assert(inputWidth * blockSize >= 0, () => `Negative dimension size caused by overflow when multiplying
    ${inputWidth} and ${blockSize} for depthToSpace with input shape
        ${$x.shape}`);
  assert(inputDepth % (blockSize * blockSize) === 0, () => `Dimension size must be evenly divisible by ${blockSize * blockSize} but is ${inputDepth} for depthToSpace with input shape ${$x.shape}`);
  const inputs = { x: $x };
  const attrs = { blockSize, dataFormat };
  return ENGINE.runKernel(DepthToSpace, inputs, attrs);
}
var depthToSpace = op({ depthToSpace_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/depthwise_conv2d.js
function depthwiseConv2d_(x, filter, strides, pad2, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode) {
  const $x = convertToTensor(x, "x", "depthwiseConv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "depthwiseConv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in depthwiseConv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($filter.rank === 4, () => `Error in depthwiseConv2d: filter must be rank 4, but got rank ${$filter.rank}.`);
  const inChannels = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  assert(inChannels === $filter.shape[2], () => `Error in depthwiseConv2d: number of input channels (${inChannels}) must match the inChannels dimension in filter ${$filter.shape[2]}.`);
  checkPadOnDimRoundingMode("depthwiseConv2d", pad2, dimRoundingMode);
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad2, dataFormat, dilations, dimRoundingMode };
  const res = ENGINE.runKernel(DepthwiseConv2dNative, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var depthwiseConv2d = op({ depthwiseConv2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/diag.js
function diag_(x) {
  const $x = convertToTensor(x, "x", "diag");
  const inputs = { x: $x };
  return ENGINE.runKernel(Diag, inputs);
}
var diag = op({ diag_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/dilation2d.js
function dilation2d_(x, filter, strides, pad2, dilations = [1, 1], dataFormat = "NHWC") {
  const $x = convertToTensor(x, "x", "dilation2d");
  const $filter = convertToTensor(filter, "filter", "dilation2d");
  assert($x.rank === 3 || $x.rank === 4, () => `Error in dilation2d: input must be rank 3 or 4, but got rank ${$x.rank}.`);
  assert($filter.rank === 3, () => `Error in dilation2d: filter must be rank 3, but got rank ${$filter.rank}.`);
  assert(dataFormat === "NHWC", () => `Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${dataFormat}`);
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    reshapedTo4D = true;
  }
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad2, dilations };
  const res = ENGINE.runKernel(Dilation2D, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var dilation2d = op({ dilation2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/equal.js
function equal_(a, b) {
  let $a = convertToTensor(a, "a", "equal", "string_or_numeric");
  let $b = convertToTensor(b, "b", "equal", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Equal, inputs);
}
var equal = op({ equal_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/where.js
function where_(condition, a, b) {
  const $a = convertToTensor(a, "a", "where");
  const $b = convertToTensor(b, "b", "where");
  const $condition = convertToTensor(condition, "condition", "where", "bool");
  const broadcastShape = assertAndGetBroadcastShape(assertAndGetBroadcastShape($condition.shape, $a.shape), $b.shape);
  const $broadcastedCondition = broadcastTo($condition, broadcastShape);
  const $broadcastedA = broadcastTo($a, broadcastShape);
  const $broadcastedB = broadcastTo($b, broadcastShape);
  const inputs = {
    condition: $broadcastedCondition,
    t: $broadcastedA,
    e: $broadcastedB
  };
  return ENGINE.runKernel(Select, inputs);
}
var where = op({ where_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/zeros_like.js
function zerosLike_(x) {
  const $x = convertToTensor(x, "x", "zerosLike");
  const inputs = { x: $x };
  return ENGINE.runKernel(ZerosLike, inputs);
}
var zerosLike = op({ zerosLike_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/div_no_nan.js
function divNoNan_(a, b) {
  let $a = convertToTensor(a, "a", "div");
  let $b = convertToTensor(b, "b", "div");
  [$a, $b] = makeTypesMatch($a, $b);
  const divResult = div($a, $b);
  const zeros2 = zerosLike(divResult);
  const bEqualsZero = equal($b, zeros2);
  return where(bEqualsZero, zeros2, divResult);
}
var divNoNan = op({ divNoNan_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/dot.js
function dot_(t1, t2) {
  const $t1 = convertToTensor(t1, "t1", "dot");
  const $t2 = convertToTensor(t2, "t2", "dot");
  assert(($t1.rank === 1 || $t1.rank === 2) && ($t2.rank === 1 || $t2.rank === 2), () => `Error in dot: inputs must all be rank 1 or 2, but got ranks ${$t1.rank} and ${$t2.rank}.`);
  const t1Inner = $t1.rank === 1 ? $t1.size : $t1.shape[1];
  const t2Inner = $t2.rank === 1 ? $t2.size : $t2.shape[0];
  assert(t1Inner === t2Inner, () => `Error in dot: inner dimensions of inputs must match, but got ${t1Inner} and ${t2Inner}.`);
  if ($t1.rank === 1 && $t2.rank === 1) {
    const t12D = reshape($t1, [1, -1]);
    const t22D = reshape($t2, [-1, 1]);
    const t1t2 = matMul(t12D, t22D);
    return reshape(t1t2, []);
  } else if ($t1.rank === 1 && $t2.rank === 2) {
    const t12D = reshape($t1, [1, -1]);
    const t22D = reshape($t2, [$t2.shape[0], $t2.shape[1]]);
    const t1t2 = matMul(t12D, t22D);
    return reshape(t1t2, [t1t2.size]);
  } else if ($t1.rank === 2 && $t2.rank === 1) {
    const t22D = reshape($t2, [-1, 1]);
    const t1t2 = matMul($t1, t22D);
    return reshape(t1t2, [t1t2.size]);
  } else {
    const t22D = reshape($t2, [$t2.shape[0], $t2.shape[1]]);
    const t1t2 = matMul($t1, t22D);
    return t1t2;
  }
}
var dot = op({ dot_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/einsum.js
function einsum_(equation, ...tensors) {
  const $tensors = tensors.map((t, i) => convertToTensor(t, `tensors${i}`, "einsum"));
  const attrs = { equation };
  return ENGINE.runKernel(Einsum, $tensors, attrs);
}
var einsum = op({ einsum_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/elu.js
function elu_(x) {
  const $x = convertToTensor(x, "x", "elu", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Elu, inputs);
}
var elu = op({ elu_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/erf.js
function erf_(x) {
  let $x = convertToTensor(x, "x", "erf");
  assert($x.dtype === "int32" || $x.dtype === "float32", () => "Input dtype must be `int32` or `float32`.");
  if ($x.dtype === "int32") {
    $x = cast($x, "float32");
  }
  const inputs = { x: $x };
  return ENGINE.runKernel(Erf, inputs);
}
var erf = op({ erf_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/max.js
function max_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "max");
  const inputs = { x: $x };
  const attrs = { reductionIndices: axis, keepDims };
  return ENGINE.runKernel(Max, inputs, attrs);
}
var max = op({ max_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/min.js
function min_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "min");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(Min, inputs, attrs);
}
var min = op({ min_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/pow.js
function pow_(base, exp2) {
  let $base = convertToTensor(base, "base", "pow");
  let $exp = convertToTensor(exp2, "exp", "pow");
  [$base, $exp] = makeTypesMatch($base, $exp);
  const inputs = { a: $base, b: $exp };
  return ENGINE.runKernel(Pow, inputs);
}
var pow = op({ pow_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js
function scalar(value, dtype) {
  if ((isTypedArray(value) && dtype !== "string" || Array.isArray(value)) && dtype !== "complex64") {
    throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
  }
  if (dtype === "string" && isTypedArray(value) && !(value instanceof Uint8Array)) {
    throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
  }
  const shape = [];
  const inferredShape = [];
  return makeTensor(value, shape, inferredShape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/sqrt.js
function sqrt_(x) {
  const $x = convertToTensor(x, "x", "sqrt", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sqrt, inputs);
}
var sqrt = op({ sqrt_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/square.js
function square_(x) {
  const $x = convertToTensor(x, "x", "square");
  const attrs = {};
  return ENGINE.runKernel("Square", { x: $x }, attrs);
}
var square = op({ square_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sum.js
function sum_(x, axis = null, keepDims = false) {
  let $x = convertToTensor(x, "x", "sum");
  if ($x.dtype === "bool") {
    $x = cast($x, "int32");
  }
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(Sum, inputs, attrs);
}
var sum2 = op({ sum_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/axis_util.js
function axesAreInnerMostDims(axes, rank) {
  for (let i = 0; i < axes.length; ++i) {
    if (axes[axes.length - i - 1] !== rank - 1 - i) {
      return false;
    }
  }
  return true;
}
function combineLocations(outputLoc, reduceLoc, axes) {
  const rank = outputLoc.length + reduceLoc.length;
  const loc = [];
  let outIdx = 0;
  let reduceIdx = 0;
  for (let dim = 0; dim < rank; dim++) {
    if (axes.indexOf(dim) === -1) {
      loc.push(outputLoc[outIdx++]);
    } else {
      loc.push(reduceLoc[reduceIdx++]);
    }
  }
  return loc;
}
function computeOutAndReduceShapes(aShape, axes) {
  const outShape = [];
  const rank = aShape.length;
  for (let dim = 0; dim < rank; dim++) {
    if (axes.indexOf(dim) === -1) {
      outShape.push(aShape[dim]);
    }
  }
  const reduceShape = axes.map((dim) => aShape[dim]);
  return [outShape, reduceShape];
}
function expandShapeToKeepDim(shape, axes) {
  const reduceSubShape = axes.map((x) => 1);
  return combineLocations(shape, reduceSubShape, axes);
}
function assertAxesAreInnerMostDims(msg, axes, rank) {
  assert(axesAreInnerMostDims(axes, rank), () => `${msg} supports only inner-most axes for now. Got axes ${axes} and rank-${rank} input.`);
}
function getAxesPermutation(axes, rank) {
  if (axesAreInnerMostDims(axes, rank)) {
    return null;
  }
  const result = [];
  for (let i = 0; i < rank; ++i) {
    if (axes.indexOf(i) === -1) {
      result.push(i);
    }
  }
  axes.forEach((axis) => result.push(axis));
  return result;
}
function getUndoAxesPermutation(axes) {
  return axes.map((axis, i) => [i, axis]).sort((a, b) => a[1] - b[1]).map((x) => x[0]);
}
function getInnerMostAxes(numAxes, rank) {
  const res = [];
  for (let i = rank - numAxes; i < rank; ++i) {
    res.push(i);
  }
  return res;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/norm.js
function norm_(x, ord = "euclidean", axis = null, keepDims = false) {
  x = convertToTensor(x, "x", "norm");
  const norm2 = normImpl(x, ord, axis);
  let keepDimsShape = norm2.shape;
  if (keepDims) {
    const axes = parseAxisParam(axis, x.shape);
    keepDimsShape = expandShapeToKeepDim(norm2.shape, axes);
  }
  return reshape(norm2, keepDimsShape);
}
function normImpl(x, p, axis = null) {
  if (x.rank === 0) {
    return abs(x);
  }
  if (x.rank !== 1 && axis === null) {
    return normImpl(reshape(x, [-1]), p, axis);
  }
  if (x.rank === 1 || typeof axis === "number" || Array.isArray(axis) && axis.length === 1) {
    if (p === 1) {
      return sum2(abs(x), axis);
    }
    if (p === Infinity) {
      return max(abs(x), axis);
    }
    if (p === -Infinity) {
      return min(abs(x), axis);
    }
    if (p === "euclidean" || p === 2) {
      return sqrt(sum2(pow(abs(x), scalar(2, "int32")), axis));
    }
    throw new Error(`Error in norm: invalid ord value: ${p}`);
  }
  if (Array.isArray(axis) && axis.length === 2) {
    if (p === 1) {
      return max(sum2(abs(x), axis[0]), axis[1] - 1);
    }
    if (p === Infinity) {
      return max(sum2(abs(x), axis[1]), axis[0]);
    }
    if (p === -Infinity) {
      return min(sum2(abs(x), axis[1]), axis[0]);
    }
    if (p === "fro" || p === "euclidean") {
      return sqrt(sum2(square(x), axis));
    }
    throw new Error(`Error in norm: invalid ord value: ${p}`);
  }
  throw new Error(`Error in norm: invalid axis: ${axis}`);
}
var norm = op({ norm_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/euclidean_norm.js
function euclideanNorm_(x, axis = null, keepDims = false) {
  return norm(x, "euclidean", axis, keepDims);
}
var euclideanNorm = op({ euclideanNorm_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/exp.js
function exp_(x) {
  const $x = convertToTensor(x, "x", "exp");
  const inputs = { x: $x };
  return ENGINE.runKernel(Exp, inputs);
}
var exp = op({ exp_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/expand_dims.js
function expandDims_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "expandDims", "string_or_numeric");
  assert(axis <= $x.rank, () => "Axis must be <= rank of the tensor");
  const inputs = { input: $x };
  const attrs = { dim: axis };
  return ENGINE.runKernel(ExpandDims, inputs, attrs);
}
var expandDims = op({ expandDims_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/expm1.js
function expm1_(x) {
  const $x = convertToTensor(x, "x", "expm1");
  const inputs = { x: $x };
  return ENGINE.runKernel(Expm1, inputs);
}
var expm1 = op({ expm1_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/tile.js
function tile_(x, reps) {
  const $x = convertToTensor(x, "x", "tile", "string_or_numeric");
  assert($x.rank === reps.length, () => `Error in transpose: rank of input ${$x.rank} must match length of reps ${reps}.`);
  const inputs = { x: $x };
  const attrs = { reps };
  return ENGINE.runKernel(Tile, inputs, attrs);
}
var tile = op({ tile_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/eye.js
function eye_(numRows, numColumns, batchShape, dtype = "float32") {
  if (numColumns == null) {
    numColumns = numRows;
  }
  const buff = buffer([numRows, numColumns], dtype);
  const n = numRows <= numColumns ? numRows : numColumns;
  for (let i = 0; i < n; ++i) {
    buff.set(1, i, i);
  }
  const out = reshape(buff.toTensor(), [numRows, numColumns]);
  if (batchShape == null) {
    return out;
  } else {
    if (batchShape.length === 1) {
      return tile(expandDims(out, 0), [batchShape[0], 1, 1]);
    } else if (batchShape.length === 2) {
      return tile(expandDims(expandDims(out, 0), 0), [batchShape[0], batchShape[1], 1, 1]);
    } else if (batchShape.length === 3) {
      return tile(expandDims(expandDims(expandDims(out, 0), 0), 0), [
        batchShape[0],
        batchShape[1],
        batchShape[2],
        1,
        1
      ]);
    } else {
      throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${batchShape.length}D.`);
    }
  }
}
var eye = op({ eye_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/fill.js
function fill(shape, value, dtype) {
  const attrs = { shape, value, dtype };
  return ENGINE.runKernel(Fill, {}, attrs);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/floor.js
function floor_(x) {
  const $x = convertToTensor(x, "x", "floor", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Floor, inputs);
}
var floor = op({ floor_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/gather.js
function gather_(x, indices, axis = 0, batchDims = 0) {
  const $x = convertToTensor(x, "x", "gather");
  const $indices = convertToTensor(indices, "indices", "gather", "int32");
  const inputs = { x: $x, indices: $indices };
  const attrs = { axis, batchDims };
  return ENGINE.runKernel(GatherV2, inputs, attrs);
}
var gather = op({ gather_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/greater.js
function greater_(a, b) {
  let $a = convertToTensor(a, "a", "greater", "string_or_numeric");
  let $b = convertToTensor(b, "b", "greater", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Greater, inputs);
}
var greater = op({ greater_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/greater_equal.js
function greaterEqual_(a, b) {
  let $a = convertToTensor(a, "a", "greaterEqual", "string_or_numeric");
  let $b = convertToTensor(b, "b", "greaterEqual", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(GreaterEqual, inputs);
}
var greaterEqual = op({ greaterEqual_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/is_finite.js
function isFinite_(x) {
  const $x = convertToTensor(x, "x", "isFinite");
  const inputs = { x: $x };
  return ENGINE.runKernel(IsFinite, inputs);
}
var isFinite2 = op({ isFinite_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/is_inf.js
function isInf_(x) {
  const $x = convertToTensor(x, "x", "isInf");
  const inputs = { x: $x };
  return ENGINE.runKernel(IsInf, inputs);
}
var isInf = op({ isInf_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/is_nan.js
function isNaN_(x) {
  const $x = convertToTensor(x, "x", "isNaN");
  const inputs = { x: $x };
  return ENGINE.runKernel(IsNan, inputs);
}
var isNaN2 = op({ isNaN_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/leaky_relu.js
function leakyRelu_(x, alpha = 0.2) {
  const $x = convertToTensor(x, "x", "leakyRelu");
  const inputs = { x: $x };
  const attrs = { alpha };
  return ENGINE.runKernel(LeakyRelu, inputs, attrs);
}
var leakyRelu = op({ leakyRelu_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/less.js
function less_(a, b) {
  let $a = convertToTensor(a, "a", "less", "string_or_numeric");
  let $b = convertToTensor(b, "b", "less", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Less, inputs);
}
var less = op({ less_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/less_equal.js
function lessEqual_(a, b) {
  let $a = convertToTensor(a, "a", "lessEqual", "string_or_numeric");
  let $b = convertToTensor(b, "b", "lessEqual", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(LessEqual, inputs);
}
var lessEqual = op({ lessEqual_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/linspace.js
function linspace(start, stop, num) {
  if (num <= 0) {
    throw new Error("The number of values should be positive.");
  }
  const attrs = { start, stop, num };
  return ENGINE.runKernel(LinSpace, {}, attrs);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/local_response_normalization.js
function localResponseNormalization_(x, depthRadius = 5, bias = 1, alpha = 1, beta = 0.5) {
  const $x = convertToTensor(x, "x", "localResponseNormalization");
  assert($x.rank === 4 || $x.rank === 3, () => `Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${$x.rank}.`);
  assert(isInt(depthRadius), () => `Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${depthRadius}.`);
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  const inputs = { x: x4D };
  const attrs = { depthRadius, bias, alpha, beta };
  const res = ENGINE.runKernel(LRN, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  } else {
    return res;
  }
}
var localResponseNormalization = op({ localResponseNormalization_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/log.js
function log_(x) {
  const $x = convertToTensor(x, "x", "log", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Log, inputs);
}
var log2 = op({ log_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/log1p.js
function log1p_(x) {
  const $x = convertToTensor(x, "x", "log1p");
  const inputs = { x: $x };
  return ENGINE.runKernel(Log1p, inputs);
}
var log1p = op({ log1p_ });

// node_modules/@tensorflow/tfjs-core/dist/gradients.js
function grad(f) {
  assert(isFunction(f), () => "The f passed in grad(f) must be a function");
  return (x, dy) => {
    const $x = convertToTensor(x, "x", "tf.grad", "string_or_numeric");
    const $dy = dy != null ? convertToTensor(dy, "dy", "tf.grad") : null;
    return ENGINE.tidy(() => {
      const { value, grads: grads2 } = ENGINE.gradients(() => f($x), [$x], $dy);
      if ($dy != null) {
        assertShapesMatch(value.shape, $dy.shape, "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)");
      }
      checkGrads(grads2);
      return grads2[0];
    });
  };
}
function grads(f) {
  assert(isFunction(f), () => "The f passed in grads(f) must be a function");
  return (args, dy) => {
    assert(Array.isArray(args), () => "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");
    const $args = convertToTensorArray(args, "args", "tf.grads", "string_or_numeric");
    const $dy = dy != null ? convertToTensor(dy, "dy", "tf.grads") : null;
    return ENGINE.tidy(() => {
      const { value, grads: grads2 } = ENGINE.gradients(() => f(...$args), $args, $dy);
      if ($dy != null) {
        assertShapesMatch(value.shape, $dy.shape, "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])");
      }
      checkGrads(grads2);
      return grads2;
    });
  };
}
function valueAndGrad(f) {
  assert(isFunction(f), () => "The f passed in valueAndGrad(f) must be a function");
  return (x, dy) => {
    assert(x instanceof Tensor, () => "The x passed in valueAndGrad(f)(x) must be a tensor");
    assert(dy == null || dy instanceof Tensor, () => "The dy passed in valueAndGrad(f)(x, dy) must be a tensor");
    const { grads: grads2, value } = ENGINE.gradients(() => f(x), [x], dy);
    checkGrads(grads2);
    return { grad: grads2[0], value };
  };
}
function valueAndGrads(f) {
  assert(isFunction(f), () => "The f passed in valueAndGrads(f) must be a function");
  return (args, dy) => {
    assert(Array.isArray(args) && args.every((arg) => arg instanceof Tensor), () => "The args passed in valueAndGrads(f)(args) must be array of tensors");
    assert(dy == null || dy instanceof Tensor, () => "The dy passed in valueAndGrads(f)(args, dy) must be a tensor");
    const res = ENGINE.gradients(() => f(...args), args, dy);
    if (dy != null) {
      assertShapesMatch(res.value.shape, dy.shape, "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])");
    }
    checkGrads(res.grads);
    return res;
  };
}
function variableGrads(f, varList) {
  assert(isFunction(f), () => "The f passed in variableGrads(f) must be a function");
  assert(varList == null || Array.isArray(varList) && varList.every((v) => v instanceof Variable), () => "The varList passed in variableGrads(f, varList) must be an array of variables");
  const specifiedVarList = varList != null;
  if (!specifiedVarList) {
    varList = [];
    for (const varName in ENGINE.registeredVariables) {
      varList.push(ENGINE.registeredVariables[varName]);
    }
  }
  const specifiedNonTrainable = specifiedVarList ? varList.filter((variable2) => !variable2.trainable) : null;
  const originalVarCount = varList.length;
  varList = varList.filter((variable2) => variable2.trainable);
  assert(varList.length > 0, () => `variableGrads() expects at least one of the input variables to be trainable, but none of the ${originalVarCount} variables is trainable.`);
  const allowNoGradients = true;
  const { value, grads: grads2 } = ENGINE.gradients(f, varList, null, allowNoGradients);
  assert(grads2.some((g) => g != null), () => "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().");
  assert(value.rank === 0, () => `The f passed in variableGrads(f) must return a scalar, but it returned a rank-${value.rank} tensor`);
  const namedGrads = {};
  varList.forEach((v, i) => {
    if (grads2[i] != null) {
      namedGrads[v.name] = grads2[i];
    }
  });
  if (specifiedNonTrainable != null) {
    specifiedNonTrainable.forEach((v) => namedGrads[v.name] = null);
  }
  return { value, grads: namedGrads };
}
function customGrad(f) {
  return ENGINE.customGrad(f);
}
function checkGrads(grads2) {
  const numNullGradients = grads2.filter((g) => g == null).length;
  if (numNullGradients > 0) {
    throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`);
  }
}

// node_modules/@tensorflow/tfjs-core/dist/ops/softplus.js
function softplus_(x) {
  const $x = convertToTensor(x, "x", "softplus");
  const inputs = { x: $x };
  return ENGINE.runKernel(Softplus, inputs);
}
var softplus = op({ softplus_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/log_sigmoid.js
function logSigmoid_(x) {
  const $x = convertToTensor(x, "x", "logSigmoid");
  const customOp = customGrad((x2) => {
    const value = neg(softplus(neg(x2)));
    const gradFunc = (dy) => {
      const derX = mul(dy, sigmoid(neg(x2)));
      return derX;
    };
    return { value, gradFunc };
  });
  return customOp($x);
}
var logSigmoid = op({ logSigmoid_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sub.js
function sub_(a, b) {
  let $a = convertToTensor(a, "a", "sub");
  let $b = convertToTensor(b, "b", "sub");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Sub, inputs);
}
var sub = op({ sub_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/log_softmax.js
function logSoftmax_(logits, axis = -1) {
  const $logits = convertToTensor(logits, "logits", "logSoftmax");
  if (axis === -1) {
    axis = $logits.rank - 1;
  }
  if (axis !== $logits.rank - 1) {
    throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${$logits.rank} and axis was ${axis}`);
  }
  const customOp = customGrad((logits2, save) => {
    const keepDims = true;
    const xMax = max(logits2, axis, true);
    const shifted = sub(logits2, xMax);
    const value = sub(cast(shifted, "float32"), log2(sum2(exp(shifted), axis, keepDims)));
    save([value]);
    const gradFunc = (dy, saved) => {
      const [value2] = saved;
      const keepDims2 = true;
      const softmax2 = exp(value2);
      return sub(dy, mul(sum2(dy, axis, keepDims2), softmax2));
    };
    return { value, gradFunc };
  });
  return customOp($logits);
}
var logSoftmax = op({ logSoftmax_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/log_sum_exp.js
function logSumExp_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "logSumExp");
  const axes = parseAxisParam(axis, $x.shape);
  const xMax = max($x, axes, true);
  const a = sub($x, xMax);
  const b = exp(a);
  const c = sum2(b, axes);
  const d = log2(c);
  const res = add2(reshape(xMax, d.shape), d);
  if (keepDims) {
    const newShape = expandShapeToKeepDim(res.shape, axes);
    return reshape(res, newShape);
  }
  return res;
}
var logSumExp = op({ logSumExp_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/logical_and.js
function logicalAnd_(a, b) {
  const $a = convertToTensor(a, "a", "logicalAnd", "bool");
  const $b = convertToTensor(b, "b", "logicalAnd", "bool");
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(LogicalAnd, inputs);
}
var logicalAnd = op({ logicalAnd_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/logical_not.js
function logicalNot_(x) {
  const $x = convertToTensor(x, "x", "logicalNot", "bool");
  const inputs = { x: $x };
  return ENGINE.runKernel(LogicalNot, inputs);
}
var logicalNot = op({ logicalNot_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/logical_or.js
function logicalOr_(a, b) {
  const $a = convertToTensor(a, "a", "logicalOr", "bool");
  const $b = convertToTensor(b, "b", "logicalOr", "bool");
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(LogicalOr, inputs);
}
var logicalOr = op({ logicalOr_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/logical_xor.js
function logicalXor_(a, b) {
  const $a = convertToTensor(a, "a", "logicalXor", "bool");
  const $b = convertToTensor(b, "b", "logicalXor", "bool");
  assertAndGetBroadcastShape($a.shape, $b.shape);
  return logicalAnd(logicalOr(a, b), logicalNot(logicalAnd(a, b)));
}
var logicalXor = op({ logicalXor_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/search_sorted.js
var INT32_MAX = 2147483648;
function searchSorted_(sortedSequence, values, side = "left") {
  const $sortedSequence = convertToTensor(sortedSequence, "sortedSequence", "searchSorted");
  const $values = convertToTensor(values, "values", "searchSorted");
  const sequenceSize = $sortedSequence.shape[$sortedSequence.shape.length - 1];
  const valuesSize = $values.shape[$values.shape.length - 1];
  const $sortedSequence2D = reshape($sortedSequence, [-1, sequenceSize]);
  const $values2D = reshape($values, [-1, valuesSize]);
  if ($sortedSequence2D.rank < 2) {
    throw new Error(`Sorted input argument must be at least 2-dimensional`);
  }
  if ($sortedSequence2D.shape[0] !== $values2D.shape[0]) {
    throw new Error(`Leading dimension of 'sortedSequence' and 'values' must match.`);
  }
  if (sizeFromShape($values2D.shape) >= INT32_MAX) {
    throw new Error(`values tensor size must less than ${INT32_MAX}`);
  }
  if ($sortedSequence2D.shape[1] >= INT32_MAX) {
    throw new Error(`trailing dim_size must less than ${INT32_MAX} for int32 output type, was ${$sortedSequence2D.shape[1]}`);
  }
  const inputs = {
    sortedSequence: $sortedSequence2D,
    values: $values2D
  };
  const attrs = { side };
  return ENGINE.runKernel(SearchSorted, inputs, attrs);
}
var searchSorted = op({ searchSorted_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/lower_bound.js
function lowerBound(sortedSequence, values) {
  return searchSorted(sortedSequence, values, "left");
}

// node_modules/@tensorflow/tfjs-core/dist/ops/max_pool.js
function maxPool_(x, filterSize, strides, pad2, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "maxPool");
  const dilations = 1;
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in maxPool: input must be rank 4 but got rank ${x4D.rank}.`);
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  checkPadOnDimRoundingMode("maxPool", pad2, dimRoundingMode);
  const inputs = { x: x4D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode };
  const res = ENGINE.runKernel(MaxPool, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var maxPool = op({ maxPool_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/max_pool_3d.js
function maxPool3d_(x, filterSize = [1, 1, 1], strides, pad2, dimRoundingMode, dataFormat = "NDHWC") {
  const $x = convertToTensor(x, "x", "maxPool3d");
  let x5D = $x;
  let reshapedTo5D = false;
  if ($x.rank === 4) {
    reshapedTo5D = true;
    x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
  }
  assert(x5D.rank === 5, () => `Error in maxPool3d: x must be rank 5 but got rank ${x5D.rank}.`);
  assert(dataFormat === "NDHWC", () => `Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${dataFormat}`);
  checkPadOnDimRoundingMode("maxPool3d", pad2, dimRoundingMode);
  const inputs = { x: x5D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode, dataFormat };
  const res = ENGINE.runKernel(MaxPool3D, inputs, attrs);
  if (reshapedTo5D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
  }
  return res;
}
var maxPool3d = op({ maxPool3d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/max_pool_with_argmax.js
function maxPoolWithArgmax_(x, filterSize, strides, pad2, includeBatchInIndex = false) {
  const $x = convertToTensor(x, "x", "maxPoolWithArgmax");
  const inputs = { x: $x };
  const attrs = { filterSize, strides, pad: pad2, includeBatchInIndex };
  const result = ENGINE.runKernel(MaxPoolWithArgmax, inputs, attrs);
  return { result: result[0], indexes: result[1] };
}
var maxPoolWithArgmax = op({ maxPoolWithArgmax_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/maximum.js
function maximum_(a, b) {
  let $a = convertToTensor(a, "a", "maximum");
  let $b = convertToTensor(b, "b", "maximum");
  [$a, $b] = makeTypesMatch($a, $b);
  if ($a.dtype === "bool") {
    $a = cast($a, "int32");
    $b = cast($b, "int32");
  }
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Maximum, inputs);
}
var maximum = op({ maximum_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/mean.js
function mean_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "mean");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(Mean, inputs, attrs);
}
var mean = op({ mean_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/zeros.js
function zeros(shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real2 = zeros(shape, "float32");
    const imag2 = zeros(shape, "float32");
    return complex(real2, imag2);
  }
  const values = makeZerosTypedArray(sizeFromShape(shape), dtype);
  return ENGINE.makeTensor(values, shape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/ones.js
function ones2(shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real2 = ones2(shape, "float32");
    const imag2 = zeros(shape, "float32");
    return complex(real2, imag2);
  }
  const values = makeOnesTypedArray(sizeFromShape(shape), dtype);
  return ENGINE.makeTensor(values, shape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/meshgrid.js
function meshgrid(x, y, { indexing = "xy" } = {}) {
  if (indexing !== "xy" && indexing !== "ij") {
    throw new TypeError(`${indexing} is not a valid third argument to meshgrid`);
  }
  if (x === void 0) {
    return [];
  }
  let $x = convertToTensor(x, "x", "meshgrid", x instanceof Tensor ? x.dtype : "float32");
  if (y === void 0) {
    return [$x];
  }
  let $y = convertToTensor(y, "y", "meshgrid", y instanceof Tensor ? y.dtype : "float32");
  const w = sizeFromShape($x.shape);
  const h = sizeFromShape($y.shape);
  if (indexing === "xy") {
    $x = reshape($x, [1, -1]);
    $y = reshape($y, [-1, 1]);
    return [
      matMul(ones2([h, 1], $x.dtype), $x),
      matMul($y, ones2([1, w], $y.dtype))
    ];
  }
  $x = reshape($x, [-1, 1]);
  $y = reshape($y, [1, -1]);
  return [
    matMul($x, ones2([1, h], $x.dtype)),
    matMul(ones2([w, 1], $y.dtype), $y)
  ];
}

// node_modules/@tensorflow/tfjs-core/dist/ops/minimum.js
function minimum_(a, b) {
  let $a = convertToTensor(a, "a", "minimum");
  let $b = convertToTensor(b, "b", "minimum");
  [$a, $b] = makeTypesMatch($a, $b);
  if ($a.dtype === "bool") {
    $a = cast($a, "int32");
    $b = cast($b, "int32");
  }
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Minimum, inputs);
}
var minimum = op({ minimum_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/mirror_pad.js
function mirrorPad_(x, paddings, mode) {
  assert(mode === "reflect" || mode === "symmetric", () => `Invalid mode. Mode must be either reflect or symmetric. Got ${mode}.`);
  const $x = convertToTensor(x, "x", "mirrorPad");
  if ($x.rank === 0) {
    throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");
  }
  assert(paddings.length === $x.rank, () => `Padding doesn't match input. Must be ${$x.rank}. Got ${paddings.length}.`);
  const shapeOffset = mode === "reflect" ? 1 : 0;
  for (let i = 0; i < $x.rank; i++) {
    assert(paddings[i].length === 2, () => `Invalid number of paddings. Must be length of 2 each.`);
    assert(paddings[i][0] >= 0 && paddings[i][0] <= $x.shape[i] - shapeOffset && paddings[i][1] >= 0 && paddings[i][1] <= $x.shape[i] - shapeOffset, () => `Padding in dimension ${i} cannot be greater than or equal to ${$x.shape[i] - shapeOffset} or less than 0 for input of shape ${$x.shape}`);
  }
  const attrs = { paddings, mode };
  const inputs = { x: $x };
  return ENGINE.runKernel(MirrorPad, inputs, attrs);
}
var mirrorPad = op({ mirrorPad_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/mod.js
function mod_(a, b) {
  let $a = convertToTensor(a, "a", "mod");
  let $b = convertToTensor(b, "b", "mod");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Mod, inputs);
}
var mod = op({ mod_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/moments.js
function moments_(x, axis = null, keepDims = false) {
  x = convertToTensor(x, "x", "moments");
  const axes = parseAxisParam(axis, x.shape);
  const xMean = mean(x, axes, keepDims);
  let keepDimsShape = xMean.shape;
  if (!keepDims) {
    keepDimsShape = expandShapeToKeepDim(xMean.shape, axes);
  }
  const devSquared = square(sub(cast(x, "float32"), reshape(xMean, keepDimsShape)));
  const variance = mean(devSquared, axes, keepDims);
  return { mean: xMean, variance };
}
var moments = op({ moments_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/multi_rnn_cell.js
function multiRNNCell_(lstmCells, data, c, h) {
  const $data = convertToTensor(data, "data", "multiRNNCell");
  const $c = convertToTensorArray(c, "c", "multiRNNCell");
  const $h = convertToTensorArray(h, "h", "multiRNNCell");
  let input = $data;
  const newStates = [];
  for (let i = 0; i < lstmCells.length; i++) {
    const output = lstmCells[i](input, $c[i], $h[i]);
    newStates.push(output[0]);
    newStates.push(output[1]);
    input = output[1];
  }
  const newC = [];
  const newH = [];
  for (let i = 0; i < newStates.length; i += 2) {
    newC.push(newStates[i]);
    newH.push(newStates[i + 1]);
  }
  return [newC, newH];
}
var multiRNNCell = op({ multiRNNCell_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/multinomial.js
function multinomial_(logits, numSamples, seed, normalized = false) {
  const $logits = convertToTensor(logits, "logits", "multinomial");
  const numOutcomes = $logits.size;
  const origRank = $logits.rank;
  if (numOutcomes < 2) {
    throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${numOutcomes}.`);
  }
  if (origRank > 2) {
    throw new Error(`Rank of probabilities must be 1 or 2, but is ${origRank}`);
  }
  seed = seed || Math.random();
  const logits2D = origRank === 1 ? reshape($logits, [1, -1]) : $logits;
  const inputs = { logits: logits2D };
  const attrs = { numSamples, seed, normalized };
  const res = ENGINE.runKernel(Multinomial, inputs, attrs);
  return origRank === 1 ? reshape(res, [res.size]) : res;
}
var multinomial = op({ multinomial_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/not_equal.js
function notEqual_(a, b) {
  let $a = convertToTensor(a, "a", "notEqual", "string_or_numeric");
  let $b = convertToTensor(b, "b", "notEqual", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(NotEqual, inputs);
}
var notEqual = op({ notEqual_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/ones_like.js
function onesLike_(x) {
  const $x = convertToTensor(x, "x", "onesLike");
  const inputs = { x: $x };
  return ENGINE.runKernel(OnesLike, inputs);
}
var onesLike = op({ onesLike_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/outer_product.js
function outerProduct_(v1, v2) {
  const $v1 = convertToTensor(v1, "v1", "outerProduct");
  const $v2 = convertToTensor(v2, "v2", "outerProduct");
  assert($v1.rank === 1 && $v2.rank === 1, () => `Error in outerProduct: inputs must be rank 1, but got ranks ${$v1.rank} and ${$v2.rank}.`);
  const v12D = reshape($v1, [-1, 1]);
  const v22D = reshape($v2, [1, -1]);
  return matMul(v12D, v22D);
}
var outerProduct = op({ outerProduct_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/pad.js
function pad_(x, paddings, constantValue = 0) {
  const $x = convertToTensor(x, "x", "pad");
  if ($x.rank === 0) {
    throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
  }
  const attrs = { paddings, constantValue };
  const inputs = { x: $x };
  return ENGINE.runKernel(PadV2, inputs, attrs);
}
var pad = op({ pad_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/pad1d.js
function pad1d_(x, paddings, constantValue = 0) {
  assert(paddings.length === 2, () => "Invalid number of paddings. Must be length of 2.");
  return pad(x, [paddings], constantValue);
}
var pad1d = op({ pad1d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/pad2d.js
function pad2d_(x, paddings, constantValue = 0) {
  assert(paddings.length === 2 && paddings[0].length === 2 && paddings[1].length === 2, () => "Invalid number of paddings. Must be length of 2 each.");
  return pad(x, paddings, constantValue);
}
var pad2d = op({ pad2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/pad3d.js
function pad3d_(x, paddings, constantValue = 0) {
  assert(paddings.length === 3 && paddings[0].length === 2 && paddings[1].length === 2 && paddings[2].length === 2, () => "Invalid number of paddings. Must be length of 2 each.");
  return pad(x, paddings, constantValue);
}
var pad3d = op({ pad3d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/pad4d.js
function pad4d_(x, paddings, constantValue = 0) {
  assert(paddings.length === 4 && paddings[0].length === 2 && paddings[1].length === 2 && paddings[2].length === 2 && paddings[3].length === 2, () => "Invalid number of paddings. Must be length of 2 each.");
  return pad(x, paddings, constantValue);
}
var pad4d = op({ pad4d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/space_to_batch_nd.js
function spaceToBatchND_(x, blockShape, paddings) {
  const $x = convertToTensor(x, "x", "spaceToBatchND");
  assert($x.rank >= 1 + blockShape.length, () => `input rank ${$x.rank} should be > than [blockShape] ${blockShape.length}`);
  assert(paddings.length === blockShape.length, () => `paddings.shape[0] ${paddings.length} must be equal to [blockShape] ${blockShape.length}`);
  assert($x.shape.reduce((a, b, i) => {
    if (i > 0 && i <= blockShape.length) {
      return a && (b + paddings[i - 1][0] + paddings[i - 1][1]) % blockShape[i - 1] === 0;
    }
    return a;
  }, true), () => `input spatial dimensions ${$x.shape.slice(1)} with paddings ${paddings.toString()} must be divisible by blockShapes ${blockShape.toString()}`);
  const inputs = { x: $x };
  const attrs = { blockShape, paddings };
  return ENGINE.runKernel(SpaceToBatchND, inputs, attrs);
}
var spaceToBatchND = op({ spaceToBatchND_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/pool.js
function pool_(input, windowShape, poolingType, pad2, dilations, strides, dimRoundingMode) {
  if (dilations == null) {
    dilations = [1, 1];
  }
  if (strides == null) {
    strides = 1;
  }
  if (pad2 === 0) {
    pad2 = "valid";
  }
  const $x = convertToTensor(input, "x", "maxPool");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in pool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const convInfo = computePool2DInfo(x4D.shape, windowShape, strides, dilations, pad2);
  const dilation = [convInfo.dilationHeight, convInfo.dilationWidth];
  let basePadding;
  if (pad2 === "same") {
    basePadding = withSpaceToBatchBasePaddings([convInfo.filterHeight, convInfo.filterWidth], dilation);
  } else {
    basePadding = [[0, 0], [0, 0]];
  }
  const isDilationOne = dilation[0] === 1 && dilation[1] === 1;
  const [adjustedPadding, adjustedCrops] = requiredSpaceToBatchPaddings([convInfo.inHeight, convInfo.inWidth], dilation, basePadding);
  const convertedPad = isDilationOne ? pad2 : "valid";
  const convertedX = isDilationOne ? x4D : spaceToBatchND(x4D, dilation, adjustedPadding);
  const forwardOp = poolingType === "avg" ? () => avgPool(convertedX, windowShape, strides, convertedPad, dimRoundingMode) : () => maxPool(convertedX, windowShape, strides, convertedPad, dimRoundingMode);
  const y = forwardOp();
  const res = isDilationOne ? y : batchToSpaceND(y, dilation, adjustedCrops);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
function requiredSpaceToBatchPaddings(inputShape, blockShape, basePadding) {
  const padStart = basePadding.map((b) => b[0]);
  const origPadEnd = basePadding.map((b) => b[1]);
  const fullInputShape = inputShape.concat(padStart, origPadEnd);
  const padEndExtra = blockShape.map((b, i) => (b - fullInputShape[i] % b) % b);
  const padEnd = origPadEnd.map((s, i) => s + padEndExtra[i]);
  const paddings = blockShape.map((_, i) => [padStart[i], padEnd[i]]);
  const crops = blockShape.map((_, i) => [0, padEndExtra[i]]);
  return [paddings, crops];
}
function withSpaceToBatchBasePaddings(filterShape, dilation) {
  const dilatedFilterShape = filterShape.map((s, i) => {
    return s + (s - 1) * (dilation[i] - 1);
  });
  const padExtraShape = dilatedFilterShape.map((s) => s - 1);
  const padExtraStart = padExtraShape.map((s) => Math.floor(s / 2));
  const padExtraEnd = padExtraShape.map((s, i) => s - padExtraStart[i]);
  return padExtraShape.map((_, i) => {
    return [padExtraStart[i], padExtraEnd[i]];
  });
}
var pool = op({ pool_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/prelu.js
function prelu_(x, alpha) {
  const $x = convertToTensor(x, "x", "prelu");
  const $alpha = convertToTensor(alpha, "alpha", "prelu");
  const inputs = { x: $x, alpha: $alpha };
  return ENGINE.runKernel(Prelu, inputs);
}
var prelu = op({ prelu_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/prod.js
function prod_(x, axis = null, keepDims = false) {
  let $x = convertToTensor(x, "x", "prod");
  if ($x.dtype === "bool") {
    $x = cast($x, "int32");
  }
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(Prod, inputs, attrs);
}
var prod = op({ prod_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/rand.js
function rand_(shape, randFunction, dtype) {
  const size = sizeFromShape(shape);
  let values = null;
  if (dtype == null || dtype === "float32") {
    values = new Float32Array(size);
  } else if (dtype === "int32") {
    values = new Int32Array(size);
  } else if (dtype === "bool") {
    values = new Uint8Array(size);
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
  for (let i = 0; i < size; i++) {
    values[i] = randFunction();
  }
  return ENGINE.makeTensor(values, shape, dtype);
}
var rand = op({ rand_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/rand_util.js
var seedrandom = __toESM(require_seedrandom2());
var MPRandGauss = class {
  constructor(mean2, stdDeviation, dtype, truncated, seed) {
    this.mean = mean2;
    this.stdDev = stdDeviation;
    this.dtype = dtype;
    this.nextVal = NaN;
    this.truncated = truncated;
    if (this.truncated) {
      this.upper = this.mean + this.stdDev * 2;
      this.lower = this.mean - this.stdDev * 2;
    }
    const seedValue = seed ? seed : Math.random();
    this.random = seedrandom.alea(seedValue.toString());
  }
  nextValue() {
    if (!isNaN(this.nextVal)) {
      const value = this.nextVal;
      this.nextVal = NaN;
      return value;
    }
    let resultX, resultY;
    let isValid = false;
    while (!isValid) {
      let v1, v2, s;
      do {
        v1 = 2 * this.random() - 1;
        v2 = 2 * this.random() - 1;
        s = v1 * v1 + v2 * v2;
      } while (s >= 1 || s === 0);
      const mul2 = Math.sqrt(-2 * Math.log(s) / s);
      resultX = this.mean + this.stdDev * v1 * mul2;
      resultY = this.mean + this.stdDev * v2 * mul2;
      if (!this.truncated || this.isValidTruncated(resultX)) {
        isValid = true;
      }
    }
    if (!this.truncated || this.isValidTruncated(resultY)) {
      this.nextVal = this.convertValue(resultY);
    }
    return this.convertValue(resultX);
  }
  convertValue(value) {
    if (this.dtype == null || this.dtype === "float32") {
      return value;
    }
    return Math.round(value);
  }
  isValidTruncated(value) {
    return value <= this.upper && value >= this.lower;
  }
};
var RandGamma = class {
  constructor(alpha, beta, dtype, seed) {
    this.alpha = alpha;
    this.beta = 1 / beta;
    this.dtype = dtype;
    const seedValue = seed ? seed : Math.random();
    this.randu = seedrandom.alea(seedValue.toString());
    this.randn = new MPRandGauss(0, 1, dtype, false, this.randu());
    if (alpha < 1) {
      this.d = alpha + 2 / 3;
    } else {
      this.d = alpha - 1 / 3;
    }
    this.c = 1 / Math.sqrt(9 * this.d);
  }
  nextValue() {
    let x2, v0, v1, x, u, v;
    while (true) {
      do {
        x = this.randn.nextValue();
        v = 1 + this.c * x;
      } while (v <= 0);
      v *= v * v;
      x2 = x * x;
      v0 = 1 - 0.331 * x2 * x2;
      v1 = 0.5 * x2 + this.d * (1 - v + Math.log(v));
      u = this.randu();
      if (u < v0 || Math.log(u) < v1) {
        break;
      }
    }
    v = 1 / this.beta * this.d * v;
    if (this.alpha < 1) {
      v *= Math.pow(this.randu(), 1 / this.alpha);
    }
    return this.convertValue(v);
  }
  convertValue(value) {
    if (this.dtype === "float32") {
      return value;
    }
    return Math.round(value);
  }
};
var UniformRandom = class {
  constructor(min2 = 0, max2 = 1, dtype, seed) {
    this.canReturnFloat = () => this.dtype == null || this.dtype === "float32";
    this.min = min2;
    this.range = max2 - min2;
    this.dtype = dtype;
    if (seed == null) {
      seed = Math.random();
    }
    if (typeof seed === "number") {
      seed = seed.toString();
    }
    if (!this.canReturnFloat() && this.range <= 1) {
      throw new Error(`The difference between ${min2} - ${max2} <= 1 and dtype is not float`);
    }
    this.random = seedrandom.alea(seed);
  }
  convertValue(value) {
    if (this.canReturnFloat()) {
      return value;
    }
    return Math.round(value);
  }
  nextValue() {
    return this.convertValue(this.min + this.range * this.random());
  }
};

// node_modules/@tensorflow/tfjs-core/dist/ops/random_gamma.js
function randomGamma_(shape, alpha, beta = 1, dtype = "float32", seed) {
  if (beta == null) {
    beta = 1;
  }
  if (dtype == null) {
    dtype = "float32";
  }
  if (dtype !== "float32" && dtype !== "int32") {
    throw new Error(`Unsupported data type ${dtype}`);
  }
  const rgamma = new RandGamma(alpha, beta, dtype, seed);
  const res = buffer(shape, dtype);
  for (let i = 0; i < res.values.length; i++) {
    res.values[i] = rgamma.nextValue();
  }
  return res.toTensor();
}
var randomGamma = op({ randomGamma_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/random_normal.js
function randomNormal_(shape, mean2 = 0, stdDev = 1, dtype, seed) {
  if (dtype != null && dtype === "bool") {
    throw new Error(`Unsupported data type ${dtype}`);
  }
  const randGauss = new MPRandGauss(mean2, stdDev, dtype, false, seed);
  const res = buffer(shape, dtype);
  for (let i = 0; i < res.values.length; i++) {
    res.values[i] = randGauss.nextValue();
  }
  return res.toTensor();
}
var randomNormal = op({ randomNormal_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/random_standard_normal.js
function randomStandardNormal_(shape, dtype, seed) {
  if (dtype != null && dtype === "bool") {
    throw new Error(`Unsupported data type ${dtype}`);
  }
  return randomNormal(shape, 0, 1, dtype, seed);
}
var randomStandardNormal = op({ randomStandardNormal_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/random_uniform.js
function randomUniform_(shape, minval = 0, maxval = 1, dtype = "float32", seed) {
  const res = buffer(shape, dtype);
  const random = new UniformRandom(minval, maxval, null, seed);
  for (let i = 0; i < res.values.length; i++) {
    res.values[i] = random.nextValue();
  }
  return res.toTensor();
}
var randomUniform = op({ randomUniform_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/range.js
function range(start, stop, step2 = 1, dtype = "float32") {
  if (step2 === 0) {
    throw new Error("Cannot have a step of zero");
  }
  const attrs = { start, stop, step: step2, dtype };
  return ENGINE.runKernel(Range, {}, attrs);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/reciprocal.js
function reciprocal_(x) {
  const $x = convertToTensor(x, "x", "reciprocal");
  const inputs = { x: $x };
  return ENGINE.runKernel(Reciprocal, inputs);
}
var reciprocal = op({ reciprocal_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/relu.js
function relu_(x) {
  const $x = convertToTensor(x, "x", "relu");
  const inputs = { x: $x };
  return ENGINE.runKernel(Relu, inputs);
}
var relu = op({ relu_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/relu6.js
function relu6_(x) {
  const $x = convertToTensor(x, "x", "relu6");
  const inputs = { x: $x };
  return ENGINE.runKernel(Relu6, inputs);
}
var relu6 = op({ relu6_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/reverse.js
function reverse_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  const inputs = { x: $x };
  const attrs = { dims: axis };
  return ENGINE.runKernel(Reverse, inputs, attrs);
}
var reverse = op({ reverse_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/reverse_1d.js
function reverse1d_(x) {
  const $x = convertToTensor(x, "x", "reverse");
  assert($x.rank === 1, () => `Error in reverse1D: x must be rank 1 but got rank ${$x.rank}.`);
  return reverse($x, 0);
}
var reverse1d = op({ reverse1d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/reverse_2d.js
function reverse2d_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  assert($x.rank === 2, () => `Error in reverse2D: x must be rank 2 but got rank ${$x.rank}.`);
  return reverse($x, axis);
}
var reverse2d = op({ reverse2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/reverse_3d.js
function reverse3d_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  assert($x.rank === 3, () => `Error in reverse3D: x must be rank 3 but got rank ${$x.rank}.`);
  return reverse($x, axis);
}
var reverse3d = op({ reverse3d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/reverse_4d.js
function reverse4d_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  assert($x.rank === 4, () => `Error in reverse4D: x must be rank 4 but got rank ${$x.rank}.`);
  return reverse($x, axis);
}
var reverse4d = op({ reverse4d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/round.js
function round_(x) {
  const $x = convertToTensor(x, "x", "round");
  const inputs = { x: $x };
  return ENGINE.runKernel(Round, inputs);
}
var round2 = op({ round_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/rsqrt.js
function rsqrt_(x) {
  const $x = convertToTensor(x, "x", "rsqrt", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Rsqrt, inputs);
}
var rsqrt = op({ rsqrt_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/selu.js
function selu_(x) {
  const $x = convertToTensor(x, "x", "selu");
  const inputs = { x: $x };
  return ENGINE.runKernel(Selu, inputs);
}
var selu = op({ selu_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/separable_conv2d.js
function separableConv2d_(x, depthwiseFilter, pointwiseFilter, strides, pad2, dilation = [1, 1], dataFormat = "NHWC") {
  const $x = convertToTensor(x, "x", "separableConv2d");
  const $depthwiseFilter = convertToTensor(depthwiseFilter, "depthwiseFilter", "separableConv2d");
  const $pointwiseFilter = convertToTensor(pointwiseFilter, "pointwiseFilter", "separableConv2d");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  if (dataFormat === "NCHW") {
    throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
  }
  assert(x4D.rank === 4, () => `Error in separableConv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($depthwiseFilter.rank === 4, () => `Error in separableConv2d: depthwise filter must be rank 4, but got rank ${$depthwiseFilter.rank}.`);
  assert($pointwiseFilter.rank === 4, () => `Error in separableConv2d: pointwise filter must be rank 4, but got rank ${$depthwiseFilter.rank}.`);
  assert($pointwiseFilter.shape[0] === 1, () => `Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${$pointwiseFilter.shape[0]}.`);
  assert($pointwiseFilter.shape[1] === 1, () => `Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${$pointwiseFilter.shape[1]}.`);
  const inChannels = $depthwiseFilter.shape[2];
  const channelMultiplier = $depthwiseFilter.shape[3];
  assert($pointwiseFilter.shape[2] === inChannels * channelMultiplier, () => `Error in separableConv2d: the third dimension of pointwise filter must be ${inChannels * channelMultiplier}, but got ${$pointwiseFilter.shape[2]}.`);
  const depthwise = depthwiseConv2d(x4D, $depthwiseFilter, strides, pad2, dataFormat, dilation);
  const pointwiseStride = 1;
  const res = conv2d(depthwise, $pointwiseFilter, pointwiseStride, "valid", dataFormat);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var separableConv2d = op({ separableConv2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/setdiff1d_async.js
async function setdiff1dAsync_(x, y) {
  const $x = convertToTensor(x, "x", "setdiff1d");
  const $y = convertToTensor(y, "y", "setdiff1d");
  assert($x.dtype === $y.dtype, () => `x and y should have the same dtype, but got x (${$x.dtype}) and y (${$y.dtype}).`);
  assert($x.rank === 1, () => `x should be 1D tensor, but got x (${$x.shape}).`);
  assert($y.rank === 1, () => `y should be 1D tensor, but got y (${$y.shape}).`);
  const xVals = await $x.data();
  const yVals = await $y.data();
  const ySet = new Set(yVals);
  let outputSize = 0;
  for (let i = 0; i < xVals.length; i++) {
    if (!ySet.has(xVals[i])) {
      outputSize++;
    }
  }
  const buffer2 = new TensorBuffer([outputSize], $x.dtype);
  const indices = new TensorBuffer([outputSize], "int32");
  for (let i = 0, p = 0; i < xVals.length; i++) {
    if (!ySet.has(xVals[i])) {
      buffer2.values[p] = xVals[i];
      indices.values[p] = i;
      p++;
    }
  }
  return [buffer2.toTensor(), indices.toTensor()];
}
var setdiff1dAsync = setdiff1dAsync_;

// node_modules/@tensorflow/tfjs-core/dist/ops/sign.js
function sign_(x) {
  const $x = convertToTensor(x, "x", "sign");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sign, inputs);
}
var sign = op({ sign_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sin.js
function sin_(x) {
  const $x = convertToTensor(x, "x", "sin", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sin, inputs);
}
var sin = op({ sin_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sinh.js
function sinh_(x) {
  const $x = convertToTensor(x, "x", "sinh");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sinh, inputs);
}
var sinh = op({ sinh_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/slice1d.js
function slice1d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice1d");
  assert($x.rank === 1, () => `slice1d expects a rank-1 tensor, but got a rank-${$x.rank} tensor`);
  return slice($x, [begin], [size]);
}
var slice1d = op({ slice1d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/slice2d.js
function slice2d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice2d");
  assert($x.rank === 2, () => `slice2d expects a rank-2 tensor, but got a rank-${$x.rank} tensor`);
  return slice($x, begin, size);
}
var slice2d = op({ slice2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/slice3d.js
function slice3d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice3d");
  assert($x.rank === 3, () => `slice3d expects a rank-3 tensor, but got a rank-${$x.rank} tensor`);
  return slice($x, begin, size);
}
var slice3d = op({ slice3d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/slice4d.js
function slice4d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice4d");
  assert($x.rank === 4, () => `slice4d expects a rank-4 tensor, but got a rank-${$x.rank} tensor`);
  return slice($x, begin, size);
}
var slice4d = op({ slice4d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/softmax.js
function softmax_(logits, dim = -1) {
  const $logits = convertToTensor(logits, "logits", "softmax", "float32");
  if (dim === -1) {
    dim = $logits.rank - 1;
  }
  if (dim !== $logits.rank - 1) {
    throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${$logits.rank} and dim was ${dim}`);
  }
  const inputs = { logits: $logits };
  const attrs = { dim };
  return ENGINE.runKernel(Softmax, inputs, attrs);
}
var softmax = op({ softmax_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/spectral/fft.js
function fft_(input) {
  assert(input.dtype === "complex64", () => `The dtype for tf.spectral.fft() must be complex64 but got ${input.dtype}.`);
  const inputs = { input };
  return ENGINE.runKernel(FFT, inputs);
}
var fft = op({ fft_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/spectral/ifft.js
function ifft_(input) {
  assert(input.dtype === "complex64", () => `The dtype for tf.spectral.ifft() must be complex64 but got ${input.dtype}.`);
  const inputs = { input };
  return ENGINE.runKernel(IFFT, inputs);
}
var ifft = op({ ifft_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/spectral/irfft.js
function irfft_(input) {
  const innerDimensionSize = input.shape[input.shape.length - 1];
  const batch = input.size / innerDimensionSize;
  let ret;
  if (innerDimensionSize <= 2) {
    const complexInput = reshape(input, [batch, innerDimensionSize]);
    ret = ifft(complexInput);
  } else {
    const outputShape = [batch, 2 * (innerDimensionSize - 1)];
    const realInput = reshape(real(input), [batch, innerDimensionSize]);
    const imagInput = reshape(imag(input), [batch, innerDimensionSize]);
    const realConjugate = reverse(slice(realInput, [0, 1], [batch, innerDimensionSize - 2]), 1);
    const imagConjugate = mul(reverse(slice(imagInput, [0, 1], [batch, innerDimensionSize - 2]), 1), scalar(-1));
    const r = concat([realInput, realConjugate], 1);
    const i = concat([imagInput, imagConjugate], 1);
    const complexInput = reshape(complex(r, i), [outputShape[0], outputShape[1]]);
    ret = ifft(complexInput);
  }
  ret = real(ret);
  if (input.rank === 3 && input.shape[0] !== 0) {
    const temp = ret;
    const batch2 = input.shape[0];
    ret = reshape(ret, [batch2, ret.shape[0] / batch2, ret.shape[1]]);
    temp.dispose();
  }
  return ret;
}
var irfft = op({ irfft_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/split.js
function split_(x, numOrSizeSplits, axis = 0) {
  const $x = convertToTensor(x, "x", "split");
  const inputs = { x: $x };
  const attr = { numOrSizeSplits, axis };
  return ENGINE.runKernel(SplitV, inputs, attr);
}
var split = op({ split_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/spectral/rfft.js
function rfft_(input, fftLength) {
  assert(input.dtype === "float32", () => `The dtype for rfft() must be real value but got ${input.dtype}`);
  let innerDimensionSize = input.shape[input.shape.length - 1];
  const batch = input.size / innerDimensionSize;
  let adjustedInput;
  if (fftLength != null && fftLength < innerDimensionSize) {
    const begin = input.shape.map((v) => 0);
    const size = input.shape.map((v) => v);
    size[input.shape.length - 1] = fftLength;
    adjustedInput = slice(input, begin, size);
    innerDimensionSize = fftLength;
  } else if (fftLength != null && fftLength > innerDimensionSize) {
    const zerosShape = input.shape.map((v) => v);
    zerosShape[input.shape.length - 1] = fftLength - innerDimensionSize;
    adjustedInput = concat([input, zeros(zerosShape)], input.shape.length - 1);
    innerDimensionSize = fftLength;
  } else {
    adjustedInput = input;
  }
  const zerosInput = zerosLike(adjustedInput);
  const complexInput = reshape(complex(adjustedInput, zerosInput), [batch, innerDimensionSize]);
  const ret = fft(complexInput);
  const half = Math.floor(innerDimensionSize / 2) + 1;
  const realValues = real(ret);
  const imagValues = imag(ret);
  const realComplexConjugate = split(realValues, [half, innerDimensionSize - half], realValues.shape.length - 1);
  const imagComplexConjugate = split(imagValues, [half, innerDimensionSize - half], imagValues.shape.length - 1);
  const outputShape = adjustedInput.shape.slice();
  outputShape[adjustedInput.shape.length - 1] = half;
  return reshape(complex(realComplexConjugate[0], imagComplexConjugate[0]), outputShape);
}
var rfft = op({ rfft_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/squared_difference.js
function squaredDifference_(a, b) {
  let $a = convertToTensor(a, "a", "squaredDifference");
  let $b = convertToTensor(b, "b", "squaredDifference");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  const attrs = {};
  return ENGINE.runKernel(SquaredDifference, inputs, attrs);
}
var squaredDifference = op({ squaredDifference_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/squeeze.js
function squeeze_(x, axis) {
  const $x = convertToTensor(x, "x", "squeeze", "string_or_numeric");
  return reshape($x, squeezeShape($x.shape, axis).newShape);
}
var squeeze = op({ squeeze_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/stack.js
function stack_(tensors, axis = 0) {
  const $tensors = convertToTensorArray(tensors, "tensors", "stack", "string_or_numeric");
  assert($tensors.length >= 1, () => "Pass at least one tensor to tf.stack");
  if ($tensors.length > 0) {
    assert(axis <= $tensors[0].rank, () => "Axis must be <= rank of the tensor");
  }
  const inputs = $tensors;
  const attrs = { axis };
  return ENGINE.runKernel(Pack, inputs, attrs);
}
var stack = op({ stack_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/step.js
function step_(x, alpha = 0) {
  const $x = convertToTensor(x, "x", "step");
  const inputs = { x: $x };
  const attrs = { alpha };
  return ENGINE.runKernel(Step, inputs, attrs);
}
var step = op({ step_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/strided_slice.js
function stridedSlice_(x, begin, end, strides, beginMask = 0, endMask = 0, ellipsisMask = 0, newAxisMask = 0, shrinkAxisMask = 0) {
  const $x = convertToTensor(x, "x", "stridedSlice", "string_or_numeric");
  const inputs = { x: $x };
  const attrs = {
    begin,
    end,
    strides,
    beginMask,
    endMask,
    ellipsisMask,
    newAxisMask,
    shrinkAxisMask
  };
  return ENGINE.runKernel(StridedSlice, inputs, attrs);
}
var stridedSlice = op({ stridedSlice_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/tan.js
function tan_(x) {
  const $x = convertToTensor(x, "x", "tan", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Tan, inputs);
}
var tan = op({ tan_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js
function tensor1d(values, dtype) {
  assertNonNull(values);
  const inferredShape = inferShape(values, dtype);
  if (inferredShape.length !== 1) {
    throw new Error("tensor1d() requires values to be a flat/TypedArray");
  }
  const shape = null;
  return makeTensor(values, shape, inferredShape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/tensor2d.js
function tensor2d(values, shape, dtype) {
  assertNonNull(values);
  if (shape != null && shape.length !== 2) {
    throw new Error("tensor2d() requires shape to have two numbers");
  }
  const inferredShape = inferShape(values, dtype);
  if (inferredShape.length !== 2 && inferredShape.length !== 1) {
    throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
  }
  if (inferredShape.length === 1 && shape == null) {
    throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
  }
  return makeTensor(values, shape, inferredShape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/tensor4d.js
function tensor4d(values, shape, dtype) {
  assertNonNull(values);
  if (shape != null && shape.length !== 4) {
    throw new Error("tensor4d() requires shape to have four numbers");
  }
  const inferredShape = inferShape(values, dtype);
  if (inferredShape.length !== 4 && inferredShape.length !== 1) {
    throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
  }
  if (inferredShape.length === 1 && shape == null) {
    throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
  }
  return makeTensor(values, shape, inferredShape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/tensor5d.js
function tensor5d(values, shape, dtype) {
  assertNonNull(values);
  if (shape != null && shape.length !== 5) {
    throw new Error("tensor5d() requires shape to have five numbers");
  }
  const inferredShape = inferShape(values, dtype);
  if (inferredShape.length !== 5 && inferredShape.length !== 1) {
    throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
  }
  if (inferredShape.length === 1 && shape == null) {
    throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
  }
  return makeTensor(values, shape, inferredShape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/tensor6d.js
function tensor6d(values, shape, dtype) {
  assertNonNull(values);
  if (shape != null && shape.length !== 6) {
    throw new Error("tensor6d() requires shape to have six numbers");
  }
  const inferredShape = inferShape(values, dtype);
  if (inferredShape.length !== 6 && inferredShape.length !== 1) {
    throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
  }
  if (inferredShape.length === 1 && shape == null) {
    throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
  }
  shape = shape || inferredShape;
  return makeTensor(values, shape, inferredShape, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/ops/topk.js
function topk_(x, k = 1, sorted = true) {
  const $x = convertToTensor(x, "x", "topk");
  if ($x.rank === 0) {
    throw new Error("topk() expects the input to be of rank 1 or higher");
  }
  const lastDim = $x.shape[$x.shape.length - 1];
  if (k < 0) {
    throw new Error(`'k' passed to topk() must be >= 0 but got ${k}`);
  }
  if (k > lastDim) {
    throw new Error(`'k' passed to topk() must be <= the last dimension (${lastDim}) but got ${k}`);
  }
  const inputs = { x: $x };
  const attrs = { k, sorted };
  const [values, indices] = ENGINE.runKernel(TopK, inputs, attrs);
  return { values, indices };
}
var topk = op({ topk_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/truncated_normal.js
function truncatedNormal_(shape, mean2 = 0, stdDev = 1, dtype, seed) {
  if (dtype != null && dtype === "bool") {
    throw new Error(`Unsupported data type $ { dtype }`);
  }
  const randGauss = new MPRandGauss(mean2, stdDev, dtype, true, seed);
  const res = buffer(shape, dtype);
  for (let i = 0; i < res.values.length; i++) {
    res.values[i] = randGauss.nextValue();
  }
  return res.toTensor();
}
var truncatedNormal = op({ truncatedNormal_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/unique.js
function unique_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "unique", "string_or_numeric");
  assert($x.rank > 0, () => "The input tensor must be at least 1D");
  const inputs = { x: $x };
  const attrs = { axis };
  const [values, indices] = ENGINE.runKernel(Unique, inputs, attrs);
  return { values, indices };
}
var unique = op({ unique_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/unsorted_segment_sum.js
function unsortedSegmentSum_(x, segmentIds, numSegments) {
  const $x = convertToTensor(x, "x", "unsortedSegmentSum");
  const $segmentIds = convertToTensor(segmentIds, "segmentIds", "unsortedSegmentSum", "int32");
  assert(isInt(numSegments), () => "numSegments must be of dtype int");
  const inputs = { x: $x, segmentIds: $segmentIds };
  const attrs = { numSegments };
  return ENGINE.runKernel(UnsortedSegmentSum, inputs, attrs);
}
var unsortedSegmentSum = op({ unsortedSegmentSum_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/unstack.js
function unstack_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "unstack", "string_or_numeric");
  assert(axis >= -$x.shape.length && axis < $x.shape.length, () => `Axis = ${axis} is not in [-${$x.shape.length}, ${$x.shape.length})`);
  const inputs = { value: $x };
  const attrs = { axis };
  return ENGINE.runKernel(Unpack, inputs, attrs);
}
var unstack = op({ unstack_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/upper_bound.js
function upperBound(sortedSequence, values) {
  return searchSorted(sortedSequence, values, "right");
}

// node_modules/@tensorflow/tfjs-core/dist/ops/variable.js
function variable(initialValue, trainable = true, name, dtype) {
  return ENGINE.makeVariable(initialValue, trainable, name, dtype);
}

// node_modules/@tensorflow/tfjs-core/dist/backends/where_impl.js
function whereImpl(condShape, condVals) {
  const indices = [];
  for (let i = 0; i < condVals.length; i++) {
    if (condVals[i]) {
      indices.push(i);
    }
  }
  const inBuffer = buffer(condShape, "int32");
  const out = buffer([indices.length, condShape.length], "int32");
  for (let i = 0; i < indices.length; i++) {
    const loc = inBuffer.indexToLoc(indices[i]);
    const offset = i * condShape.length;
    out.values.set(loc, offset);
  }
  return out.toTensor();
}

// node_modules/@tensorflow/tfjs-core/dist/ops/where_async.js
async function whereAsync_(condition) {
  const $condition = convertToTensor(condition, "condition", "whereAsync", "bool");
  const vals = await $condition.data();
  const res = whereImpl($condition.shape, vals);
  if (condition !== $condition) {
    $condition.dispose();
  }
  return res;
}
var whereAsync = whereAsync_;

// node_modules/@tensorflow/tfjs-core/dist/ops/boolean_mask.js
async function booleanMaskAsync_(tensor2, mask, axis) {
  const $tensor = convertToTensor(tensor2, "tensor", "boolMask");
  const $mask = convertToTensor(mask, "mask", "boolMask", "bool");
  const axisFrom = axis == null ? 0 : axis;
  const maskDim = $mask.rank;
  const tensorShape = $tensor.shape;
  assert(maskDim > 0, () => "mask cannot be scalar");
  assertShapesMatch(tensorShape.slice(axisFrom, axisFrom + maskDim), $mask.shape, `mask's shape must match the first K dimensions of tensor's shape,`);
  let leadingSize = 1;
  for (let i = axisFrom; i < axisFrom + maskDim; i++) {
    leadingSize *= tensorShape[i];
  }
  const targetTensorShape = tensorShape.slice(0, axisFrom).concat([leadingSize], tensorShape.slice(axisFrom + maskDim));
  const reshapedTensor = reshape($tensor, targetTensorShape);
  const reshapedMask = reshape($mask, [-1]);
  const positivePositions = await whereAsync(reshapedMask);
  const indices = squeeze(positivePositions, [1]);
  const res = gather(reshapedTensor, indices, axisFrom);
  if (tensor2 !== $tensor) {
    $tensor.dispose();
  }
  if (mask !== $mask) {
    $mask.dispose();
  }
  indices.dispose();
  reshapedTensor.dispose();
  reshapedMask.dispose();
  positivePositions.dispose();
  return res;
}
var booleanMaskAsync = booleanMaskAsync_;

// node_modules/@tensorflow/tfjs-core/dist/ops/moving_average.js
function movingAverage_(v, x, decay, step2, zeroDebias = true) {
  const $v = convertToTensor(v, "v", "movingAverage");
  const $x = convertToTensor(x, "x", "movingAverage");
  const $decay = convertToTensor(decay, "decay", "movingAverage");
  assertTypesMatch($v, $x);
  assert(arraysEqual($v.shape, $x.shape), () => "Shape mismatch in v and x");
  const one = scalar(1);
  const oneMinusDecay = sub(one, $decay);
  let update = mul(sub($x, $v), oneMinusDecay);
  if (zeroDebias) {
    assert(step2 != null, () => "When using zeroDebias: true, step is required.");
    const $step = convertToTensor(step2, "step", "movingAverage");
    update = div(update, sub(one, pow($decay, $step)));
  }
  return add2($v, update);
}
var movingAverage = op({ movingAverage_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/scatter_nd.js
function scatterND_(indices, updates, shape) {
  const $indices = convertToTensor(indices, "indices", "scatterND", "int32");
  const $updates = convertToTensor(updates, "updates", "scatterND");
  validateInput($updates, $indices, shape);
  const inputs = { indices: $indices, updates: $updates };
  const attrs = { shape };
  return ENGINE.runKernel(ScatterNd, inputs, attrs);
}
var scatterND = op({ scatterND_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sparse_to_dense_util.js
function validateInput2(sparseIndices, sparseValues, outputShape, defaultValues) {
  if (sparseIndices.dtype !== "int32") {
    throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${sparseIndices.dtype}.`);
  }
  if (sparseIndices.rank > 2) {
    throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${sparseIndices.shape}.`);
  }
  const numElems = sparseIndices.rank > 0 ? sparseIndices.shape[0] : 1;
  const numDims = sparseIndices.rank > 1 ? sparseIndices.shape[1] : 1;
  if (outputShape.length !== numDims) {
    throw new Error(`outputShape has incorrect number of elements:, ${outputShape.length}, should be: ${numDims}.`);
  }
  const numValues = sparseValues.size;
  if (!(sparseValues.rank === 0 || sparseValues.rank === 1 && numValues === numElems)) {
    throw new Error(`sparseValues has incorrect shape ${sparseValues.shape}, should be [] or [${numElems}]`);
  }
  if (sparseValues.dtype !== defaultValues.dtype) {
    throw new Error("sparseValues.dtype must match defaultValues.dtype");
  }
}

// node_modules/@tensorflow/tfjs-core/dist/ops/sparse_to_dense.js
function sparseToDense_(sparseIndices, sparseValues, outputShape, defaultValue = 0) {
  const $sparseIndices = convertToTensor(sparseIndices, "sparseIndices", "sparseToDense", "int32");
  const $sparseValues = convertToTensor(sparseValues, "sparseValues", "sparseToDense", "string_or_numeric");
  const $defaultValue = convertToTensor(defaultValue, "defaultValue", "sparseToDense", $sparseValues.dtype);
  validateInput2($sparseIndices, $sparseValues, outputShape, $defaultValue);
  const inputs = {
    sparseIndices: $sparseIndices,
    sparseValues: $sparseValues,
    defaultValue: $defaultValue
  };
  const attrs = { outputShape };
  return ENGINE.runKernel(SparseToDense, inputs, attrs);
}
var sparseToDense = op({ sparseToDense_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/gather_nd.js
function gatherND_(x, indices) {
  const $indices = convertToTensor(indices, "indices", "gatherND", "int32");
  const $x = convertToTensor(x, "x", "gatherND", "string_or_numeric");
  const inputs = { params: $x, indices: $indices };
  return ENGINE.runKernel(GatherNd, inputs);
}
var gatherND = op({ gatherND_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/dropout_util.js
function getNoiseShape(x, noiseShape) {
  if (noiseShape == null) {
    return x.shape.slice();
  }
  if (arraysEqual(x.shape, noiseShape)) {
    return noiseShape;
  }
  if (x.shape.length === noiseShape.length) {
    const newDimension = [];
    for (let i = 0; i < x.shape.length; i++) {
      if (noiseShape[i] == null && x.shape[i] != null) {
        newDimension.push(x.shape[i]);
      } else {
        newDimension.push(noiseShape[i]);
      }
    }
    return newDimension;
  }
  return noiseShape;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/dropout.js
function dropout_(x, rate, noiseShape, seed) {
  const $x = convertToTensor(x, "x", "dropout");
  assert($x.dtype === "float32", () => `x has to be a floating point tensor since it's going to be scaled, but got a ${$x.dtype} tensor instead.`);
  assert(rate >= 0 && rate < 1, () => `rate must be a float in the range [0, 1), but got ${rate}.`);
  if (rate === 0) {
    return x instanceof Tensor ? $x.clone() : $x;
  }
  const $noiseShape = getNoiseShape($x, noiseShape);
  const keepProb = 1 - rate;
  const multiplier = div(floor(add2(randomUniform($noiseShape, 0, 1, "float32", seed), keepProb)), keepProb);
  return mul($x, multiplier);
}
var dropout = op({ dropout_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/signal_ops_util.js
function enclosingPowerOfTwo(value) {
  return Math.floor(Math.pow(2, Math.ceil(Math.log(value) / Math.log(2))));
}
function cosineWindow(windowLength, a, b) {
  const even = 1 - windowLength % 2;
  const newValues = new Float32Array(windowLength);
  for (let i = 0; i < windowLength; ++i) {
    const cosArg = 2 * Math.PI * i / (windowLength + even - 1);
    newValues[i] = a - b * Math.cos(cosArg);
  }
  return tensor1d(newValues, "float32");
}

// node_modules/@tensorflow/tfjs-core/dist/ops/in_top_k.js
async function inTopKAsync_(predictions, targets, k = 1) {
  const $predictions = convertToTensor(predictions, "predictions", "inTopK");
  const $targets = convertToTensor(targets, "targets", "inTopK");
  assert($predictions.rank > 1, () => `inTopK() expects the predictions to be of rank 2 or higher, but got ${$predictions.rank}`);
  assert($predictions.rank - 1 === $targets.rank, () => `predictions rank should be 1 larger than targets rank, but got predictions rank ${$predictions.rank} and targets rank ${$targets.rank}`);
  assertShapesMatch($predictions.shape.slice(0, $predictions.shape.length - 1), $targets.shape, `predictions's shape should be align with the targets' shape, except the last dimension.`);
  const lastDim = $predictions.shape[$predictions.shape.length - 1];
  assert(k > 0 && k <= lastDim, () => `'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${lastDim}), but got ${k}`);
  const predictionsVals = await $predictions.data();
  const targetsVals = await $targets.data();
  const [batch, size] = [predictionsVals.length / lastDim, lastDim];
  const precision = getTypedArrayFromDType("bool", batch);
  for (let b = 0; b < batch; b++) {
    const offset = b * size;
    const vals = predictionsVals.subarray(offset, offset + size);
    const valAndInd = [];
    for (let i = 0; i < vals.length; i++) {
      valAndInd.push({ value: vals[i], index: i });
    }
    valAndInd.sort((a, b2) => b2.value - a.value);
    precision[b] = 0;
    for (let i = 0; i < k; i++) {
      if (valAndInd[i].index === targetsVals[b]) {
        precision[b] = 1;
        break;
      }
    }
  }
  if (predictions !== $predictions) {
    $predictions.dispose();
  }
  if (targets !== $targets) {
    $targets.dispose();
  }
  return tensor(precision, $targets.shape, "bool");
}
var inTopKAsync = inTopKAsync_;

// node_modules/@tensorflow/tfjs-core/dist/ops/fused_ops.js
var fused_ops_exports = {};
__export(fused_ops_exports, {
  conv2d: () => conv2d2,
  depthwiseConv2d: () => depthwiseConv2d2,
  matMul: () => matMul2
});

// node_modules/@tensorflow/tfjs-core/dist/ops/conv2d_backprop_filter.js
function conv2DBackpropFilter_(x, dy, filterShape, strides, pad2, dataFormat = "NHWC", dimRoundingMode) {
  let x4D = x;
  if (x.rank === 3) {
    x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
  }
  let dy4D = dy;
  if (dy4D.rank === 3) {
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in conv2dDerFilter: input must be rank 4, but got shape ${x4D.shape}.`);
  assert(dy4D.rank === 4, () => `Error in conv2dDerFilter: dy must be rank 4, but got shape ${dy4D.shape}.`);
  assert(filterShape.length === 4, () => `Error in conv2dDerFilter: filterShape must be length 4, but got ${filterShape}.`);
  const inDepth = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  const outDepth = dataFormat === "NHWC" ? dy4D.shape[3] : dy4D.shape[1];
  assert(inDepth === filterShape[2], () => `Error in conv2dDerFilter: depth of input ${inDepth}) must match input depth in filter (${filterShape[2]}.`);
  assert(outDepth === filterShape[3], () => `Error in conv2dDerFilter: depth of dy (${outDepth}) must match output depth for filter (${filterShape[3]}).`);
  checkPadOnDimRoundingMode("conv2dDerFilter", pad2, dimRoundingMode);
  const inputs = { x: x4D, dy: dy4D };
  const attrs = { strides, pad: pad2, dataFormat, dimRoundingMode, filterShape };
  return ENGINE.runKernel(Conv2DBackpropFilter, inputs, attrs);
}
var conv2DBackpropFilter = op({ conv2DBackpropFilter_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/fused_util.js
function getFusedDyActivation(dy, y, activation) {
  if (activation == null || activation === "linear") {
    return dy;
  }
  if (activation === "relu") {
    return mul(dy, step(y));
  }
  throw new Error(`Cannot compute gradient for fused activation ${activation}.`);
}
function getFusedBiasGradient(bias, dyActivation) {
  let res = dyActivation;
  const reduceAxes = getReductionAxes(bias.shape, dyActivation.shape);
  if (reduceAxes.length > 0) {
    res = sum2(res, reduceAxes);
  }
  return reshape(res, bias.shape);
}
function applyActivation(x, activation, preluActivationWeights, leakyreluAlpha) {
  if (activation === "linear") {
    return x;
  } else if (activation === "relu") {
    return relu(x);
  } else if (activation === "elu") {
    return elu(x);
  } else if (activation === "relu6") {
    return relu6(x);
  } else if (activation === "prelu") {
    return prelu(x, preluActivationWeights);
  } else if (activation === "leakyrelu") {
    return leakyRelu(x, leakyreluAlpha);
  } else if (activation === "sigmoid") {
    return sigmoid(x);
  }
  throw new Error(`Unknown fused activation ${activation}.`);
}
var shouldFuse = (gradientDepth, activation) => {
  const gradientMode = gradientDepth > 0;
  return !gradientMode || activation === "linear";
};

// node_modules/@tensorflow/tfjs-core/dist/ops/fused/conv2d.js
function fusedConv2d_({ x, filter, strides, pad: pad2, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode, bias, activation = "linear", preluActivationWeights, leakyreluAlpha }) {
  activation = activation || "linear";
  if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
    assert(dataFormat === "NHWC", () => `Error in fused conv2d: got dataFormat of ${dataFormat} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);
    let result = conv2d(x, filter, strides, pad2, dataFormat, dilations, dimRoundingMode);
    if (bias != null) {
      result = add2(result, bias);
    }
    return applyActivation(result, activation, preluActivationWeights, leakyreluAlpha);
  }
  const $x = convertToTensor(x, "x", "conv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "conv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in fused conv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($filter.rank === 4, () => `Error in fused conv2d: filter must be rank 4, but got rank ${$filter.rank}.`);
  checkPadOnDimRoundingMode("fused conv2d", pad2, dimRoundingMode);
  const inputChannels = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  assert($filter.shape[2] === inputChannels, () => `Error in conv2d: depth of input (${inputChannels}) must match input depth for filter ${$filter.shape[2]}.`);
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in conv2D: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const convInfo = computeConv2DInfo(x4D.shape, $filter.shape, strides, dilations, pad2, dimRoundingMode);
  let $bias;
  if (bias != null) {
    $bias = convertToTensor(bias, "bias", "fused conv2d");
    [$bias] = makeTypesMatch($bias, $x);
    if (dataFormat === "NHWC") {
      assertAndGetBroadcastShape(convInfo.outShape, $bias.shape);
    } else {
      assert($bias.shape.length <= 1, () => `Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${$bias.shape.length}.`);
      assert($bias.shape.length === 0 || $bias.shape[0] === convInfo.outChannels || $bias.shape[0] === 1, () => `Error in fused conv2d: bias shape (${$bias.shape}) is not compatible with the number of output channels (${convInfo.outChannels})`);
    }
  }
  let $preluActivationWeights;
  if (preluActivationWeights != null) {
    const alphaShape = preluActivationWeights.shape;
    assert(alphaShape.length <= 1 || alphaShape.length === 3, () => `Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${alphaShape.length}.`);
    if (alphaShape.length === 1) {
      assert(alphaShape[0] === 1 || alphaShape[0] === convInfo.outChannels, () => `Error in fused conv2d: PReLU activation weights (${alphaShape}) is not compatible with the number of output channels (${convInfo.outChannels}).`);
    } else if (alphaShape.length === 3) {
      try {
        assertAndGetBroadcastShape(alphaShape, convInfo.outShape);
      } catch (e) {
        const errMsg = `Error in fused conv2d: PReLU activation weights (${alphaShape}) is not compatible with the output shape of the conv2d (${convInfo.outShape}).`;
        throw Error(errMsg);
      }
    }
    $preluActivationWeights = convertToTensor(preluActivationWeights, "prelu weights", "fused conv2d");
  }
  const grad2 = (dy, saved) => {
    assert(dataFormat === "NHWC", () => `Error in gradient of fused conv2D: got dataFormat of ${dataFormat} but only NHWC is currently supported.`);
    const [$filter2, x4D2, y, $bias2] = saved;
    const dyActivation = getFusedDyActivation(dy, y, activation);
    assert(tupleValuesAreOne(dilations), () => `Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${dilations}'`);
    const xDer = conv2DBackpropInput(x4D2.shape, dyActivation, $filter2, strides, pad2);
    const filterDer = conv2DBackpropFilter(x4D2, dyActivation, $filter2.shape, strides, pad2);
    const der = [xDer, filterDer];
    if ($bias2 != null) {
      const biasDer = getFusedBiasGradient($bias2, dyActivation);
      der.push(biasDer);
    }
    return der;
  };
  const inputs = {
    x: x4D,
    filter: $filter,
    bias: $bias,
    preluActivationWeights: $preluActivationWeights
  };
  const attrs = {
    strides,
    pad: pad2,
    dataFormat,
    dilations,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  };
  if (bias == null) {
    const customOp = customGrad((x4D2, filter2, save) => {
      let res = ENGINE.runKernel(FusedConv2D, inputs, attrs);
      save([filter2, x4D2, res]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
    return customOp(x4D, $filter);
  } else {
    const customOpWithBias = customGrad((x4D2, filter2, bias2, save) => {
      let res = ENGINE.runKernel(FusedConv2D, inputs, attrs);
      save([filter2, x4D2, res, bias2]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
    return customOpWithBias(x4D, $filter, $bias);
  }
}
var conv2d2 = op({ fusedConv2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_filter.js
function depthwiseConv2dNativeBackpropFilter_(x, dy, filterShape, strides, pad2, dilations = [1, 1], dimRoundingMode) {
  let x4D = x;
  if (x.rank === 3) {
    x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
  }
  let dy4D = dy;
  if (dy4D.rank === 3) {
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
  }
  const inputs = { x: x4D, dy: dy4D };
  const attrs = { strides, pad: pad2, dimRoundingMode, dilations, filterShape };
  return ENGINE.runKernel(DepthwiseConv2dNativeBackpropFilter, inputs, attrs);
}
var depthwiseConv2dNativeBackpropFilter = op({ depthwiseConv2dNativeBackpropFilter_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_input.js
function depthwiseConv2dNativeBackpropInput_(xShape, dy, filter, strides, pad2, dilations = [1, 1], dimRoundingMode) {
  let dy4D = dy;
  let reshapedTo4D = false;
  if (dy.rank === 3) {
    reshapedTo4D = true;
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
  }
  const inputs = { dy: dy4D, filter };
  const attrs = { strides, pad: pad2, dimRoundingMode, dilations, inputShape: xShape };
  const res = ENGINE.runKernel(DepthwiseConv2dNativeBackpropInput, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var depthwiseConv2dNativeBackpropInput = op({ depthwiseConv2dNativeBackpropInput_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/fused/depthwise_conv2d.js
function fusedDepthwiseConv2d_({ x, filter, strides, pad: pad2, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode, bias, activation = "linear", preluActivationWeights, leakyreluAlpha }) {
  if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
    let result = depthwiseConv2d(x, filter, strides, pad2, dataFormat, dilations, dimRoundingMode);
    if (bias != null) {
      result = add2(result, bias);
    }
    return applyActivation(result, activation, preluActivationWeights, leakyreluAlpha);
  }
  const $x = convertToTensor(x, "x", "depthwiseConv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "depthwiseConv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in fused depthwiseConv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($filter.rank === 4, () => `Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${$filter.rank}.`);
  assert(x4D.shape[3] === $filter.shape[2], () => `Error in fused depthwiseConv2d: number of input channels (${x4D.shape[3]}) must match the inChannels dimension in filter ${$filter.shape[2]}.`);
  if (dilations == null) {
    dilations = [1, 1];
  }
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  checkPadOnDimRoundingMode("fused depthwiseConv2d", pad2, dimRoundingMode);
  const convInfo = computeConv2DInfo(x4D.shape, $filter.shape, strides, dilations, pad2, dimRoundingMode, true);
  let $bias;
  if (bias != null) {
    $bias = convertToTensor(bias, "bias", "fused conv2d");
    [$bias] = makeTypesMatch($bias, $x);
    assertAndGetBroadcastShape(convInfo.outShape, $bias.shape);
  }
  let $preluActivationWeights;
  if (preluActivationWeights != null) {
    $preluActivationWeights = convertToTensor(preluActivationWeights, "prelu weights", "fused depthwiseConv2d");
  }
  const grad2 = (dy, saved) => {
    assert(tupleValuesAreOne(dilations), () => `Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${dilations}'`);
    const [$filter2, x4D2, y, bias2] = saved;
    const dyActivation = getFusedDyActivation(dy, y, activation);
    const xDer = depthwiseConv2dNativeBackpropInput(x4D2.shape, dyActivation, $filter2, strides, pad2, dilations, dimRoundingMode);
    const filterDer = depthwiseConv2dNativeBackpropFilter(x4D2, dyActivation, $filter2.shape, strides, pad2, dilations, dimRoundingMode);
    if (bias2 != null) {
      const biasDer = getFusedBiasGradient($bias, dyActivation);
      return [xDer, filterDer, biasDer];
    }
    return [xDer, filterDer];
  };
  const inputs = {
    x: x4D,
    filter: $filter,
    bias: $bias,
    preluActivationWeights: $preluActivationWeights
  };
  const attrs = {
    strides,
    pad: pad2,
    dataFormat,
    dilations,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  };
  if (bias == null) {
    const customOp = customGrad((x4D2, filter2, save) => {
      let res = ENGINE.runKernel(FusedDepthwiseConv2D, inputs, attrs);
      save([filter2, x4D2, res]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
    return customOp(x4D, $filter);
  } else {
    const customOpWithBias = customGrad((x4D2, filter2, bias2, save) => {
      let res = ENGINE.runKernel(FusedDepthwiseConv2D, inputs, attrs);
      save([filter2, x4D2, res, bias2]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
    return customOpWithBias(x4D, $filter, $bias);
  }
}
var depthwiseConv2d2 = op({ fusedDepthwiseConv2d_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/fused/mat_mul.js
function fusedMatMul_({ a, b, transposeA = false, transposeB = false, bias, activation = "linear", preluActivationWeights, leakyreluAlpha = 0.2 }) {
  if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
    let result = matMul(a, b, transposeA, transposeB);
    if (bias != null) {
      result = add2(result, bias);
    }
    return applyActivation(result, activation, preluActivationWeights, leakyreluAlpha);
  }
  let $a = convertToTensor(a, "a", "fused matMul");
  let $b = convertToTensor(b, "b", "fused matMul");
  [$a, $b] = makeTypesMatch($a, $b);
  const innerShapeA = transposeA ? $a.shape[$a.rank - 2] : $a.shape[$a.rank - 1];
  const innerShapeB = transposeB ? $b.shape[$b.rank - 1] : $b.shape[$b.rank - 2];
  const outerShapeA = transposeA ? $a.shape[$a.rank - 1] : $a.shape[$a.rank - 2];
  const outerShapeB = transposeB ? $b.shape[$b.rank - 2] : $b.shape[$b.rank - 1];
  const outerDimsA = $a.shape.slice(0, -2);
  const outerDimsB = $b.shape.slice(0, -2);
  const batchDimA = sizeFromShape(outerDimsA);
  const batchDimB = sizeFromShape(outerDimsB);
  assert(innerShapeA === innerShapeB, () => `Error in fused matMul: inner shapes (${innerShapeA}) and (${innerShapeB}) of Tensors with shapes ${$a.shape} and ${$b.shape} and transposeA=${transposeA} and transposeB=${transposeB} must match.`);
  const outShapeOuterDims = assertAndGetBroadcastShape($a.shape.slice(0, -2), $b.shape.slice(0, -2));
  const outShape = outShapeOuterDims.concat([outerShapeA, outerShapeB]);
  const a3D = transposeA ? reshape($a, [batchDimA, innerShapeA, outerShapeA]) : reshape($a, [batchDimA, outerShapeA, innerShapeA]);
  const b3D = transposeB ? reshape($b, [batchDimB, outerShapeB, innerShapeB]) : reshape($b, [batchDimB, innerShapeB, outerShapeB]);
  let $bias;
  if (bias != null) {
    $bias = convertToTensor(bias, "bias", "fused matMul");
    [$bias] = makeTypesMatch($bias, $a);
    assertAndGetBroadcastShape(outShape, $bias.shape);
  }
  let $preluActivationWeights;
  if (preluActivationWeights != null) {
    $preluActivationWeights = convertToTensor(preluActivationWeights, "prelu weights", "fused matMul");
  }
  const grad2 = (dy, saved) => {
    const [a3D2, b3D2, y, $bias2] = saved;
    const dyActivation = getFusedDyActivation(reshape(dy, y.shape), y, activation);
    let aDer;
    let bDer;
    if (!transposeA && !transposeB) {
      aDer = matMul(dyActivation, b3D2, false, true);
      bDer = matMul(a3D2, dyActivation, true, false);
    } else if (!transposeA && transposeB) {
      aDer = matMul(dyActivation, b3D2, false, false);
      bDer = matMul(dyActivation, a3D2, true, false);
    } else if (transposeA && !transposeB) {
      aDer = matMul(b3D2, dyActivation, false, true);
      bDer = matMul(a3D2, dyActivation, false, false);
    } else {
      aDer = matMul(b3D2, dyActivation, true, true);
      bDer = matMul(dyActivation, a3D2, true, true);
    }
    if (bias != null) {
      const biasDer = getFusedBiasGradient($bias2, dyActivation);
      return [aDer, bDer, biasDer];
    } else {
      return [aDer, bDer];
    }
  };
  const inputs = {
    a: a3D,
    b: b3D,
    bias: $bias,
    preluActivationWeights: $preluActivationWeights
  };
  const attrs = { transposeA, transposeB, activation, leakyreluAlpha };
  if (bias == null) {
    const customOp = customGrad((a3D2, b3D2, save) => {
      const res = ENGINE.runKernel(_FusedMatMul, inputs, attrs);
      save([a3D2, b3D2, res]);
      return { value: reshape(res, outShape), gradFunc: grad2 };
    });
    return customOp(a3D, b3D);
  } else {
    const customOpWithBias = customGrad((a3D2, b3D2, $bias2, save) => {
      const res = ENGINE.runKernel(_FusedMatMul, inputs, attrs);
      save([a3D2, b3D2, res, $bias2]);
      return { value: reshape(res, outShape), gradFunc: grad2 };
    });
    return customOpWithBias(a3D, b3D, $bias);
  }
}
var matMul2 = op({ fusedMatMul_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/loss_ops_utils.js
var Reduction;
(function(Reduction2) {
  Reduction2[Reduction2["NONE"] = 0] = "NONE";
  Reduction2[Reduction2["MEAN"] = 1] = "MEAN";
  Reduction2[Reduction2["SUM"] = 2] = "SUM";
  Reduction2[Reduction2["SUM_BY_NONZERO_WEIGHTS"] = 3] = "SUM_BY_NONZERO_WEIGHTS";
})(Reduction || (Reduction = {}));

// node_modules/@tensorflow/tfjs-core/dist/ops/signal/hamming_window.js
function hammingWindow_(windowLength) {
  return cosineWindow(windowLength, 0.54, 0.46);
}
var hammingWindow = op({ hammingWindow_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/signal/hann_window.js
function hannWindow_(windowLength) {
  return cosineWindow(windowLength, 0.5, 0.5);
}
var hannWindow = op({ hannWindow_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/signal/frame.js
function frame_(signal2, frameLength, frameStep, padEnd = false, padValue = 0) {
  let start = 0;
  const output = [];
  while (start + frameLength <= signal2.size) {
    output.push(slice(signal2, start, frameLength));
    start += frameStep;
  }
  if (padEnd) {
    while (start < signal2.size) {
      const padLen = start + frameLength - signal2.size;
      const pad2 = concat([
        slice(signal2, start, frameLength - padLen),
        fill([padLen], padValue)
      ]);
      output.push(pad2);
      start += frameStep;
    }
  }
  if (output.length === 0) {
    return tensor2d([], [0, frameLength]);
  }
  return reshape(concat(output), [output.length, frameLength]);
}
var frame = op({ frame_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/signal/stft.js
function stft_(signal2, frameLength, frameStep, fftLength, windowFn = hannWindow) {
  if (fftLength == null) {
    fftLength = enclosingPowerOfTwo(frameLength);
  }
  const framedSignal = frame(signal2, frameLength, frameStep);
  const windowedSignal = mul(framedSignal, windowFn(frameLength));
  return rfft(windowedSignal, fftLength);
}
var stft = op({ stft_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/image/crop_and_resize.js
function cropAndResize_(image2, boxes, boxInd, cropSize, method = "bilinear", extrapolationValue = 0) {
  const $image = convertToTensor(image2, "image", "cropAndResize");
  const $boxes = convertToTensor(boxes, "boxes", "cropAndResize", "float32");
  const $boxInd = convertToTensor(boxInd, "boxInd", "cropAndResize", "int32");
  const numBoxes = $boxes.shape[0];
  assert($image.rank === 4, () => `Error in cropAndResize: image must be rank 4,but got rank ${$image.rank}.`);
  assert($boxes.rank === 2 && $boxes.shape[1] === 4, () => `Error in cropAndResize: boxes must be have size [${numBoxes},4] but had shape ${$boxes.shape}.`);
  assert($boxInd.rank === 1 && $boxInd.shape[0] === numBoxes, () => `Error in cropAndResize: boxInd must be have size [${numBoxes}] but had shape ${$boxes.shape}.`);
  assert(cropSize.length === 2, () => `Error in cropAndResize: cropSize must be of length 2, but got length ${cropSize.length}.`);
  assert(cropSize[0] >= 1 && cropSize[1] >= 1, () => `cropSize must be atleast [1,1], but was ${cropSize}`);
  assert(method === "bilinear" || method === "nearest", () => `method must be bilinear or nearest, but was ${method}`);
  const inputs = { image: $image, boxes: $boxes, boxInd: $boxInd };
  const attrs = { method, extrapolationValue, cropSize };
  const res = ENGINE.runKernel(CropAndResize, inputs, attrs);
  return res;
}
var cropAndResize = op({ cropAndResize_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/image/flip_left_right.js
function flipLeftRight_(image2) {
  const $image = convertToTensor(image2, "image", "flipLeftRight", "float32");
  assert($image.rank === 4, () => `Error in flipLeftRight: image must be rank 4,but got rank ${$image.rank}.`);
  const inputs = { image: $image };
  const res = ENGINE.runKernel(FlipLeftRight, inputs, {});
  return res;
}
var flipLeftRight = op({ flipLeftRight_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/image/grayscale_to_rgb.js
function grayscaleToRGB_(image2) {
  const $image = convertToTensor(image2, "image", "grayscaleToRGB");
  const lastDimsIdx = $image.rank - 1;
  const lastDims = $image.shape[lastDimsIdx];
  assert($image.rank >= 2, () => `Error in grayscaleToRGB: images must be at least rank 2, but got rank ${$image.rank}.`);
  assert(lastDims === 1, () => `Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${lastDims}.`);
  const reps = new Array($image.rank);
  reps.fill(1, 0, lastDimsIdx);
  reps[lastDimsIdx] = 3;
  return tile($image, reps);
}
var grayscaleToRGB = op({ grayscaleToRGB_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/image/rotate_with_offset.js
function rotateWithOffset_(image2, radians, fillValue = 0, center = 0.5) {
  const $image = convertToTensor(image2, "image", "rotateWithOffset", "float32");
  assert($image.rank === 4, () => `Error in rotateWithOffset: image must be rank 4,but got rank ${$image.rank}.`);
  const inputs = { image: $image };
  const attrs = { radians, fillValue, center };
  const res = ENGINE.runKernel(RotateWithOffset, inputs, attrs);
  return res;
}
var rotateWithOffset = op({ rotateWithOffset_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/nonmax_util.js
function nonMaxSuppSanityCheck(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma) {
  if (iouThreshold == null) {
    iouThreshold = 0.5;
  }
  if (scoreThreshold == null) {
    scoreThreshold = Number.NEGATIVE_INFINITY;
  }
  if (softNmsSigma == null) {
    softNmsSigma = 0;
  }
  const numBoxes = boxes.shape[0];
  maxOutputSize = Math.min(maxOutputSize, numBoxes);
  assert(0 <= iouThreshold && iouThreshold <= 1, () => `iouThreshold must be in [0, 1], but was '${iouThreshold}'`);
  assert(boxes.rank === 2, () => `boxes must be a 2D tensor, but was of rank '${boxes.rank}'`);
  assert(boxes.shape[1] === 4, () => `boxes must have 4 columns, but 2nd dimension was ${boxes.shape[1]}`);
  assert(scores.rank === 1, () => "scores must be a 1D tensor");
  assert(scores.shape[0] === numBoxes, () => `scores has incompatible shape with boxes. Expected ${numBoxes}, but was ${scores.shape[0]}`);
  assert(0 <= softNmsSigma && softNmsSigma <= 1, () => `softNmsSigma must be in [0, 1], but was '${softNmsSigma}'`);
  return { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma };
}

// node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression.js
function nonMaxSuppression_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppression", "float32");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppression", "float32");
  const inputs = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold);
  maxOutputSize = inputs.maxOutputSize;
  iouThreshold = inputs.iouThreshold;
  scoreThreshold = inputs.scoreThreshold;
  const attrs = { maxOutputSize, iouThreshold, scoreThreshold };
  return ENGINE.runKernel(NonMaxSuppressionV3, { boxes: $boxes, scores: $scores }, attrs);
}
var nonMaxSuppression = op({ nonMaxSuppression_ });

// node_modules/@tensorflow/tfjs-core/dist/backends/non_max_suppression_util.js
function binaryInsert(arr, element, comparator) {
  const index = binarySearch(arr, element, comparator);
  const insertionPoint = index < 0 ? -(index + 1) : index;
  arr.splice(insertionPoint, 0, element);
}
function binarySearch(arr, target, comparator) {
  return binarySearch_(arr, target, comparator || defaultComparator);
}
function defaultComparator(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function binarySearch_(arr, target, comparator) {
  let left = 0;
  let right = arr.length;
  let middle = 0;
  let found = false;
  while (left < right) {
    middle = left + (right - left >>> 1);
    const compareResult = comparator(target, arr[middle]);
    if (compareResult > 0) {
      left = middle + 1;
    } else {
      right = middle;
      found = !compareResult;
    }
  }
  return found ? left : -left - 1;
}

// node_modules/@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js
function nonMaxSuppressionV3Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
  return nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, 0);
}
function nonMaxSuppressionV4Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize) {
  return nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, 0, false, padToMaxOutputSize, true);
}
function nonMaxSuppressionV5Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma) {
  return nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma, true);
}
function nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma, returnScoresTensor = false, padToMaxOutputSize = false, returnValidOutputs = false) {
  const candidates = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > scoreThreshold) {
      candidates.push({ score: scores[i], boxIndex: i, suppressBeginIndex: 0 });
    }
  }
  candidates.sort(ascendingComparator);
  const scale = softNmsSigma > 0 ? -0.5 / softNmsSigma : 0;
  const selectedIndices = [];
  const selectedScores = [];
  while (selectedIndices.length < maxOutputSize && candidates.length > 0) {
    const candidate = candidates.pop();
    const { score: originalScore, boxIndex, suppressBeginIndex } = candidate;
    if (originalScore < scoreThreshold) {
      break;
    }
    let ignoreCandidate = false;
    for (let j = selectedIndices.length - 1; j >= suppressBeginIndex; --j) {
      const iou = intersectionOverUnion(boxes, boxIndex, selectedIndices[j]);
      if (iou >= iouThreshold) {
        ignoreCandidate = true;
        break;
      }
      candidate.score = candidate.score * suppressWeight(iouThreshold, scale, iou);
      if (candidate.score <= scoreThreshold) {
        break;
      }
    }
    candidate.suppressBeginIndex = selectedIndices.length;
    if (!ignoreCandidate) {
      if (candidate.score === originalScore) {
        selectedIndices.push(boxIndex);
        selectedScores.push(candidate.score);
      } else if (candidate.score > scoreThreshold) {
        binaryInsert(candidates, candidate, ascendingComparator);
      }
    }
  }
  const validOutputs = selectedIndices.length;
  const elemsToPad = maxOutputSize - validOutputs;
  if (padToMaxOutputSize && elemsToPad > 0) {
    selectedIndices.push(...new Array(elemsToPad).fill(0));
    selectedScores.push(...new Array(elemsToPad).fill(0));
  }
  const result = { selectedIndices };
  if (returnScoresTensor) {
    result["selectedScores"] = selectedScores;
  }
  if (returnValidOutputs) {
    result["validOutputs"] = validOutputs;
  }
  return result;
}
function intersectionOverUnion(boxes, i, j) {
  const iCoord = boxes.subarray(i * 4, i * 4 + 4);
  const jCoord = boxes.subarray(j * 4, j * 4 + 4);
  const yminI = Math.min(iCoord[0], iCoord[2]);
  const xminI = Math.min(iCoord[1], iCoord[3]);
  const ymaxI = Math.max(iCoord[0], iCoord[2]);
  const xmaxI = Math.max(iCoord[1], iCoord[3]);
  const yminJ = Math.min(jCoord[0], jCoord[2]);
  const xminJ = Math.min(jCoord[1], jCoord[3]);
  const ymaxJ = Math.max(jCoord[0], jCoord[2]);
  const xmaxJ = Math.max(jCoord[1], jCoord[3]);
  const areaI = (ymaxI - yminI) * (xmaxI - xminI);
  const areaJ = (ymaxJ - yminJ) * (xmaxJ - xminJ);
  if (areaI <= 0 || areaJ <= 0) {
    return 0;
  }
  const intersectionYmin = Math.max(yminI, yminJ);
  const intersectionXmin = Math.max(xminI, xminJ);
  const intersectionYmax = Math.min(ymaxI, ymaxJ);
  const intersectionXmax = Math.min(xmaxI, xmaxJ);
  const intersectionArea = Math.max(intersectionYmax - intersectionYmin, 0) * Math.max(intersectionXmax - intersectionXmin, 0);
  return intersectionArea / (areaI + areaJ - intersectionArea);
}
function suppressWeight(iouThreshold, scale, iou) {
  const weight = Math.exp(scale * iou * iou);
  return iou <= iouThreshold ? weight : 0;
}
function ascendingComparator(c1, c2) {
  return c1.score - c2.score || c1.score === c2.score && c2.boxIndex - c1.boxIndex;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_async.js
async function nonMaxSuppressionAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppressionAsync");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppressionAsync");
  const inputs = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold);
  maxOutputSize = inputs.maxOutputSize;
  iouThreshold = inputs.iouThreshold;
  scoreThreshold = inputs.scoreThreshold;
  const boxesAndScores = await Promise.all([$boxes.data(), $scores.data()]);
  const boxesVals = boxesAndScores[0];
  const scoresVals = boxesAndScores[1];
  const { selectedIndices } = nonMaxSuppressionV3Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold);
  if ($boxes !== boxes) {
    $boxes.dispose();
  }
  if ($scores !== scores) {
    $scores.dispose();
  }
  return tensor1d(selectedIndices, "int32");
}
var nonMaxSuppressionAsync = nonMaxSuppressionAsync_;

// node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_with_score.js
function nonMaxSuppressionWithScore_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, softNmsSigma = 0) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppression");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppression");
  const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
  maxOutputSize = params.maxOutputSize;
  iouThreshold = params.iouThreshold;
  scoreThreshold = params.scoreThreshold;
  softNmsSigma = params.softNmsSigma;
  const inputs = { boxes: $boxes, scores: $scores };
  const attrs = { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma };
  const result = ENGINE.runKernel(NonMaxSuppressionV5, inputs, attrs);
  return { selectedIndices: result[0], selectedScores: result[1] };
}
var nonMaxSuppressionWithScore = op({ nonMaxSuppressionWithScore_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_with_score_async.js
async function nonMaxSuppressionWithScoreAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, softNmsSigma = 0) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppressionAsync");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppressionAsync");
  const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
  maxOutputSize = params.maxOutputSize;
  iouThreshold = params.iouThreshold;
  scoreThreshold = params.scoreThreshold;
  softNmsSigma = params.softNmsSigma;
  const boxesAndScores = await Promise.all([$boxes.data(), $scores.data()]);
  const boxesVals = boxesAndScores[0];
  const scoresVals = boxesAndScores[1];
  const { selectedIndices, selectedScores } = nonMaxSuppressionV5Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
  if ($boxes !== boxes) {
    $boxes.dispose();
  }
  if ($scores !== scores) {
    $scores.dispose();
  }
  return {
    selectedIndices: tensor1d(selectedIndices, "int32"),
    selectedScores: tensor1d(selectedScores)
  };
}
var nonMaxSuppressionWithScoreAsync = nonMaxSuppressionWithScoreAsync_;

// node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_padded.js
function nonMaxSuppressionPadded_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, padToMaxOutputSize = false) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppression");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppression");
  const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, null);
  const $maxOutputSize = params.maxOutputSize;
  const $iouThreshold = params.iouThreshold;
  const $scoreThreshold = params.scoreThreshold;
  const inputs = { boxes: $boxes, scores: $scores };
  const attrs = {
    maxOutputSize: $maxOutputSize,
    iouThreshold: $iouThreshold,
    scoreThreshold: $scoreThreshold,
    padToMaxOutputSize
  };
  const result = ENGINE.runKernel(NonMaxSuppressionV4, inputs, attrs);
  return { selectedIndices: result[0], validOutputs: result[1] };
}
var nonMaxSuppressionPadded = op({ nonMaxSuppressionPadded_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_padded_async.js
async function nonMaxSuppressionPaddedAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, padToMaxOutputSize = false) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppressionAsync");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppressionAsync");
  const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, null);
  const $maxOutputSize = params.maxOutputSize;
  const $iouThreshold = params.iouThreshold;
  const $scoreThreshold = params.scoreThreshold;
  const [boxesVals, scoresVals] = await Promise.all([$boxes.data(), $scores.data()]);
  const { selectedIndices, validOutputs } = nonMaxSuppressionV4Impl(boxesVals, scoresVals, $maxOutputSize, $iouThreshold, $scoreThreshold, padToMaxOutputSize);
  if ($boxes !== boxes) {
    $boxes.dispose();
  }
  if ($scores !== scores) {
    $scores.dispose();
  }
  return {
    selectedIndices: tensor1d(selectedIndices, "int32"),
    validOutputs: scalar(validOutputs, "int32")
  };
}
var nonMaxSuppressionPaddedAsync = nonMaxSuppressionPaddedAsync_;

// node_modules/@tensorflow/tfjs-core/dist/ops/image/resize_bilinear.js
function resizeBilinear_(images, size, alignCorners = false, halfPixelCenters = false) {
  const $images = convertToTensor(images, "images", "resizeBilinear");
  assert($images.rank === 3 || $images.rank === 4, () => `Error in resizeBilinear: x must be rank 3 or 4, but got rank ${$images.rank}.`);
  assert(size.length === 2, () => `Error in resizeBilinear: new shape must 2D, but got shape ${size}.`);
  assert(halfPixelCenters === false || alignCorners === false, () => `Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.`);
  let batchImages = $images;
  let reshapedTo4D = false;
  if ($images.rank === 3) {
    reshapedTo4D = true;
    batchImages = reshape($images, [1, $images.shape[0], $images.shape[1], $images.shape[2]]);
  }
  const [] = size;
  const inputs = { images: batchImages };
  const attrs = { alignCorners, halfPixelCenters, size };
  const res = ENGINE.runKernel(ResizeBilinear, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var resizeBilinear = op({ resizeBilinear_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/image/resize_nearest_neighbor.js
function resizeNearestNeighbor_(images, size, alignCorners = false, halfPixelCenters = false) {
  const $images = convertToTensor(images, "images", "resizeNearestNeighbor");
  assert($images.rank === 3 || $images.rank === 4, () => `Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${$images.rank}.`);
  assert(size.length === 2, () => `Error in resizeNearestNeighbor: new shape must 2D, but got shape ${size}.`);
  assert($images.dtype === "float32" || $images.dtype === "int32", () => "`images` must have `int32` or `float32` as dtype");
  assert(halfPixelCenters === false || alignCorners === false, () => `Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.`);
  let batchImages = $images;
  let reshapedTo4D = false;
  if ($images.rank === 3) {
    reshapedTo4D = true;
    batchImages = reshape($images, [1, $images.shape[0], $images.shape[1], $images.shape[2]]);
  }
  const [] = size;
  const inputs = { images: batchImages };
  const attrs = { alignCorners, halfPixelCenters, size };
  const res = ENGINE.runKernel(ResizeNearestNeighbor, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var resizeNearestNeighbor = op({ resizeNearestNeighbor_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/image/threshold.js
function threshold_(image2, method = "binary", inverted = false, threshValue = 0.5) {
  const $image = convertToTensor(image2, "image", "threshold");
  const RED_INTENCITY_COEF = 0.2989;
  const GREEN_INTENCITY_COEF = 0.587;
  const BLUE_INTENCITY_COEF = 0.114;
  const totalPixelsInImage = $image.shape[0] * $image.shape[1];
  let $threshold = mul(tensor1d([threshValue]), 255);
  let r, g, b, grayscale;
  assert($image.rank === 3, () => `Error in threshold: image must be rank 3,but got rank ${$image.rank}.`);
  assert($image.shape[2] === 3 || $image.shape[2] === 1, () => `Error in threshold: image color channel must be equal to 3 or 1but got ${$image.shape[2]}.`);
  assert($image.dtype === "int32" || $image.dtype === "float32", () => `Error in dtype: image dtype must be int32 or float32,but got dtype ${$image.dtype}.`);
  assert(method === "otsu" || method === "binary", () => `Method must be binary or otsu, but was ${method}`);
  if ($image.shape[2] === 3) {
    [r, g, b] = split($image, [1, 1, 1], -1);
    const $r = mul(r, RED_INTENCITY_COEF);
    const $g = mul(g, GREEN_INTENCITY_COEF);
    const $b = mul(b, BLUE_INTENCITY_COEF);
    grayscale = add2(add2($r, $g), $b);
  } else {
    grayscale = image2;
  }
  if (method === "otsu") {
    const $histogram = bincount(cast(round2(grayscale), "int32"), tensor([]), 256);
    $threshold = otsu($histogram, totalPixelsInImage);
  }
  const invCondition = inverted ? lessEqual(grayscale, $threshold) : greater(grayscale, $threshold);
  const result = cast(mul(invCondition, 255), "int32");
  return result;
}
function otsu(histogram, total) {
  let bestThresh = tensor1d([-1]);
  let bestInBetVar = tensor1d([0]);
  let cInBetVar = tensor1d([0]);
  let classFirst, classSecond, meanFirst, meanSec, weightForeground, weightBack;
  for (let index = 0; index < histogram.size - 1; index++) {
    classFirst = slice(histogram, 0, index + 1);
    classSecond = slice(histogram, index + 1);
    weightForeground = div(sum2(classFirst), total);
    weightBack = div(sum2(classSecond), total);
    const meanFirstDivA = sum2(mul(classFirst, range(0, classFirst.size)));
    meanFirst = div(meanFirstDivA, sum2(classFirst));
    const meanSecFill = fill(classSecond.shape, classFirst.size);
    const meanSecAdd = add2(range(0, classSecond.size), meanSecFill);
    const meanSecMul = mul(classSecond, meanSecAdd);
    meanSec = div(sum2(meanSecMul), sum2(classSecond));
    const cInBetVarSubA = sub(meanFirst, meanSec);
    const cInBetVarSubB = sub(meanFirst, meanSec);
    const cInBetVarMul = mul(weightForeground, weightBack);
    cInBetVar = mul(mul(cInBetVarMul, cInBetVarSubA), cInBetVarSubB);
    const condition = greater(cInBetVar, bestInBetVar);
    bestInBetVar = where(condition, cInBetVar, bestInBetVar);
    bestThresh = where(condition, tensor1d([index]), bestThresh);
  }
  return bestThresh;
}
var threshold = op({ threshold_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/image/transform.js
function transform_(image2, transforms, interpolation = "nearest", fillMode = "constant", fillValue = 0, outputShape) {
  const $image = convertToTensor(image2, "image", "transform", "float32");
  const $transforms = convertToTensor(transforms, "transforms", "transform", "float32");
  assert($image.rank === 4, () => `Error in transform: image must be rank 4,but got rank ${$image.rank}.`);
  assert($transforms.rank === 2 && ($transforms.shape[0] === $image.shape[0] || $transforms.shape[0] === 1) && $transforms.shape[1] === 8, () => `Error in transform: Input transform should be batch x 8 or 1 x 8`);
  assert(outputShape == null || outputShape.length === 2, () => `Error in transform: outputShape must be [height, width] or null, but got ${outputShape}.`);
  const inputs = { image: $image, transforms: $transforms };
  const attrs = { interpolation, fillMode, fillValue, outputShape };
  return ENGINE.runKernel(Transform, inputs, attrs);
}
var transform = op({ transform_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/linalg/band_part.js
function bandPart_(a, numLower, numUpper) {
  assert(numLower % 1 === 0, () => `bandPart(): numLower must be an integer, got ${numLower}.`);
  assert(numUpper % 1 === 0, () => `bandPart(): numUpper must be an integer, got ${numUpper}.`);
  const $a = convertToTensor(a, "a", "bandPart");
  assert($a.rank >= 2, () => `bandPart(): Rank must be at least 2, got ${$a.rank}.`);
  const shape = $a.shape;
  const [M, N] = $a.shape.slice(-2);
  if (!(numLower <= M)) {
    throw new Error(`bandPart(): numLower (${numLower}) must not be greater than the number of rows (${M}).`);
  }
  if (!(numUpper <= N)) {
    throw new Error(`bandPart(): numUpper (${numUpper}) must not be greater than the number of columns (${N}).`);
  }
  if (numLower < 0) {
    numLower = M;
  }
  if (numUpper < 0) {
    numUpper = N;
  }
  const i = reshape(range(0, M, 1, "int32"), [-1, 1]);
  const j = range(0, N, 1, "int32");
  const ij = sub(i, j);
  const inBand = logicalAnd(lessEqual(ij, scalar(+numLower, "int32")), greaterEqual(ij, scalar(-numUpper, "int32")));
  const zero = zeros([M, N], $a.dtype);
  return reshape(stack(unstack(reshape($a, [-1, M, N])).map((mat) => where(inBand, mat, zero))), shape);
}
var bandPart = op({ bandPart_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/linalg/gram_schmidt.js
function gramSchmidt_(xs) {
  let inputIsTensor2D;
  if (Array.isArray(xs)) {
    inputIsTensor2D = false;
    assert(xs != null && xs.length > 0, () => "Gram-Schmidt process: input must not be null, undefined, or empty");
    const dim = xs[0].shape[0];
    for (let i = 1; i < xs.length; ++i) {
      assert(xs[i].shape[0] === dim, () => `Gram-Schmidt: Non-unique lengths found in the input vectors: (${xs[i].shape[0]} vs. ${dim})`);
    }
  } else {
    inputIsTensor2D = true;
    xs = split(xs, xs.shape[0], 0).map((x) => squeeze(x, [0]));
  }
  assert(xs.length <= xs[0].shape[0], () => `Gram-Schmidt: Number of vectors (${xs.length}) exceeds number of dimensions (${xs[0].shape[0]}).`);
  const ys = [];
  const xs1d = xs;
  for (let i = 0; i < xs.length; ++i) {
    ys.push(ENGINE.tidy(() => {
      let x = xs1d[i];
      if (i > 0) {
        for (let j = 0; j < i; ++j) {
          const proj = mul(sum2(mul(ys[j], x)), ys[j]);
          x = sub(x, proj);
        }
      }
      return div(x, norm(x, "euclidean"));
    }));
  }
  if (inputIsTensor2D) {
    return stack(ys, 0);
  } else {
    return ys;
  }
}
var gramSchmidt = op({ gramSchmidt_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/linalg/qr.js
function qr_(x, fullMatrices = false) {
  assert(x.rank >= 2, () => `qr() requires input tensor to have a rank >= 2, but got rank ${x.rank}`);
  if (x.rank === 2) {
    return qr2d(x, fullMatrices);
  } else {
    const outerDimsProd = x.shape.slice(0, x.shape.length - 2).reduce((value, prev) => value * prev);
    const x2ds = unstack(reshape(x, [
      outerDimsProd,
      x.shape[x.shape.length - 2],
      x.shape[x.shape.length - 1]
    ]), 0);
    const q2ds = [];
    const r2ds = [];
    x2ds.forEach((x2d) => {
      const [q2d, r2d] = qr2d(x2d, fullMatrices);
      q2ds.push(q2d);
      r2ds.push(r2d);
    });
    const q = reshape(stack(q2ds, 0), x.shape);
    const r = reshape(stack(r2ds, 0), x.shape);
    return [q, r];
  }
}
function qr2d(x, fullMatrices = false) {
  return ENGINE.tidy(() => {
    assert(x.shape.length === 2, () => `qr2d() requires a 2D Tensor, but got a ${x.shape.length}D Tensor.`);
    const m = x.shape[0];
    const n = x.shape[1];
    let q = eye(m);
    let r = clone(x);
    const one2D = tensor2d([[1]], [1, 1]);
    let w = clone(one2D);
    const iters = m >= n ? n : m;
    for (let j = 0; j < iters; ++j) {
      const rTemp = r;
      const wTemp = w;
      const qTemp = q;
      [w, r, q] = ENGINE.tidy(() => {
        const rjEnd1 = slice(r, [j, j], [m - j, 1]);
        const normX = norm(rjEnd1);
        const rjj = slice(r, [j, j], [1, 1]);
        const s = where(greater(rjj, 0), tensor2d([[-1]]), tensor2d([[1]]));
        const u1 = sub(rjj, mul(s, normX));
        const wPre = div(rjEnd1, u1);
        if (wPre.shape[0] === 1) {
          w = clone(one2D);
        } else {
          w = concat([
            one2D,
            slice(wPre, [1, 0], [wPre.shape[0] - 1, wPre.shape[1]])
          ], 0);
        }
        const tau = neg(div(matMul(s, u1), normX));
        const rjEndAll = slice(r, [j, 0], [m - j, n]);
        const tauTimesW = mul(tau, w);
        const wT = transpose(w);
        if (j === 0) {
          r = sub(rjEndAll, matMul(tauTimesW, matMul(wT, rjEndAll)));
        } else {
          const rTimesTau = sub(rjEndAll, matMul(tauTimesW, matMul(wT, rjEndAll)));
          r = concat([slice(r, [0, 0], [j, n]), rTimesTau], 0);
        }
        const tawTimesWT = transpose(tauTimesW);
        const qAllJEnd = slice(q, [0, j], [m, q.shape[1] - j]);
        if (j === 0) {
          q = sub(qAllJEnd, matMul(matMul(qAllJEnd, w), tawTimesWT));
        } else {
          const qTimesTau = sub(qAllJEnd, matMul(matMul(qAllJEnd, w), tawTimesWT));
          q = concat([slice(q, [0, 0], [m, j]), qTimesTau], 1);
        }
        return [w, r, q];
      });
      dispose([rTemp, wTemp, qTemp]);
    }
    if (!fullMatrices && m > n) {
      q = slice(q, [0, 0], [m, n]);
      r = slice(r, [0, 0], [n, n]);
    }
    return [q, r];
  });
}
var qr = op({ qr_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/losses/compute_weighted_loss.js
function computeWeightedLoss_(losses2, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  const $losses = convertToTensor(losses2, "losses", "computeWeightedLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "computeWeightedLoss");
  }
  const weightedLoss = $weights == null ? $losses : mul($losses, $weights);
  if (reduction === Reduction.NONE) {
    return weightedLoss;
  }
  if (reduction === Reduction.SUM) {
    return sum2(weightedLoss);
  }
  if (reduction === Reduction.MEAN) {
    if ($weights == null) {
      return mean(weightedLoss);
    } else {
      const broadcastFactor = $losses.size / $weights.size;
      const result = div(sum2(weightedLoss), sum2($weights));
      return broadcastFactor > 1 ? div(result, scalar(broadcastFactor)) : result;
    }
  }
  if (reduction === Reduction.SUM_BY_NONZERO_WEIGHTS) {
    if ($weights == null) {
      return div(sum2(weightedLoss), scalar($losses.size));
    } else {
      const broadcastedWeights = mul($weights, ones2($losses.shape));
      const numNonZeros = cast(sum2(notEqual(broadcastedWeights, scalar(0))), "float32");
      return div(sum2(weightedLoss), numNonZeros);
    }
  }
  throw Error(`Unknown reduction: ${reduction}`);
}
var computeWeightedLoss = op({ computeWeightedLoss_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/losses/absolute_difference.js
function absoluteDifference_(labels, predictions, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  const $labels = convertToTensor(labels, "labels", "absoluteDifference");
  const $predictions = convertToTensor(predictions, "predictions", "absoluteDifference");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "absoluteDifference");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in absoluteDifference: ");
  const losses2 = abs(sub($labels, $predictions));
  return computeWeightedLoss(losses2, $weights, reduction);
}
var absoluteDifference = op({ absoluteDifference_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/losses/cosine_distance.js
function cosineDistance_(labels, predictions, axis, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  const $labels = convertToTensor(labels, "labels", "cosineDistance");
  const $predictions = convertToTensor(predictions, "predictions", "cosineDistance");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "cosineDistance");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in cosineDistance: ");
  const one = scalar(1);
  const losses2 = sub(one, sum2(mul($labels, $predictions), axis, true));
  return computeWeightedLoss(losses2, $weights, reduction);
}
var cosineDistance = op({ cosineDistance_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/losses/hinge_loss.js
function hingeLoss_(labels, predictions, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  let $labels = convertToTensor(labels, "labels", "hingeLoss");
  const $predictions = convertToTensor(predictions, "predictions", "hingeLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "hingeLoss");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in hingeLoss: ");
  const one = scalar(1);
  $labels = sub(mul(scalar(2), $labels), one);
  const losses2 = relu(sub(one, mul($labels, $predictions)));
  return computeWeightedLoss(losses2, $weights, reduction);
}
var hingeLoss = op({ hingeLoss_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/losses/huber_loss.js
function huberLoss_(labels, predictions, weights, delta = 1, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  const $labels = convertToTensor(labels, "labels", "huberLoss");
  const $predictions = convertToTensor(predictions, "predictions", "huberLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "huberLoss");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in huberLoss: ");
  const deltaScalar = scalar(delta);
  const error = abs(sub($predictions, $labels));
  const quadratic = minimum(error, deltaScalar);
  const linear = sub(error, quadratic);
  const losses2 = add2(mul(scalar(0.5), square(quadratic)), mul(deltaScalar, linear));
  return computeWeightedLoss(losses2, $weights, reduction);
}
var huberLoss = op({ huberLoss_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/losses/log_loss.js
function logLoss_(labels, predictions, weights, epsilon = 1e-7, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  const $labels = convertToTensor(labels, "labels", "logLoss");
  const $predictions = convertToTensor(predictions, "predictions", "logLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "logLoss");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in logLoss: ");
  const one = scalar(1);
  const epsilonScalar = scalar(epsilon);
  const l1 = neg(mul($labels, log2(add2($predictions, epsilonScalar))));
  const l2 = mul(sub(one, $labels), log2(add2(sub(one, $predictions), epsilonScalar)));
  const losses2 = sub(l1, l2);
  return computeWeightedLoss(losses2, $weights, reduction);
}
var logLoss = op({ logLoss_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/losses/mean_squared_error.js
function meanSquaredError_(labels, predictions, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  const $labels = convertToTensor(labels, "labels", "meanSquaredError");
  const $predictions = convertToTensor(predictions, "predictions", "meanSquaredError");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "meanSquaredError");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in meanSquaredError: ");
  const losses2 = squaredDifference($labels, $predictions);
  return computeWeightedLoss(losses2, $weights, reduction);
}
var meanSquaredError = op({ meanSquaredError_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/losses/sigmoid_cross_entropy.js
function sigmoidCrossEntropyWithLogits_(labels, logits) {
  const $labels = convertToTensor(labels, "labels", "sigmoidCrossEntropyWithLogits");
  const $logits = convertToTensor(logits, "logits", "sigmoidCrossEntropyWithLogits");
  assertShapesMatch($labels.shape, $logits.shape, "Error in sigmoidCrossEntropyWithLogits: ");
  const maxOutput = relu($logits);
  const outputXTarget = mul($logits, $labels);
  const sigmoidOutput = log1p(exp(neg(abs($logits))));
  return add2(sub(maxOutput, outputXTarget), sigmoidOutput);
}
function sigmoidCrossEntropy_(multiClassLabels, logits, weights, labelSmoothing = 0, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  let $multiClassLabels = convertToTensor(multiClassLabels, "multiClassLabels", "sigmoidCrossEntropy");
  const $logits = convertToTensor(logits, "logits", "sigmoidCrossEntropy");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "sigmoidCrossEntropy");
  }
  assertShapesMatch($multiClassLabels.shape, $logits.shape, "Error in sigmoidCrossEntropy: ");
  if (labelSmoothing > 0) {
    const labelSmoothingScalar = scalar(labelSmoothing);
    const one = scalar(1);
    const half = scalar(0.5);
    $multiClassLabels = add2(mul($multiClassLabels, sub(one, labelSmoothingScalar)), mul(half, labelSmoothingScalar));
  }
  const losses2 = sigmoidCrossEntropyWithLogits_($multiClassLabels, $logits);
  return computeWeightedLoss(losses2, $weights, reduction);
}
var sigmoidCrossEntropy = op({ sigmoidCrossEntropy_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/losses/softmax_cross_entropy.js
function softmaxCrossEntropyWithLogits_(labels, logits, dim = -1) {
  if (dim === -1) {
    dim = logits.rank - 1;
  }
  if (dim !== logits.rank - 1) {
    throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${logits.rank} and dim was ${dim}`);
  }
  const customOp = customGrad((labels2, logits2, save) => {
    const keepDims = true;
    const lse = logSumExp(logits2, [dim], keepDims);
    const logResult = sub(cast(logits2, "float32"), lse);
    save([labels2, logResult]);
    const costVector = neg(mul(logResult, labels2));
    const value = sum2(costVector, [dim]);
    const gradFunc = (dy, saved) => {
      const [labels3, logResult2] = saved;
      const dyShape = expandShapeToKeepDim(dy.shape, [dim]);
      return [
        mul(reshape(dy, dyShape), sub(cast(labels3, "float32"), exp(logResult2))),
        mul(reshape(dy, dyShape), sub(exp(logResult2), cast(labels3, "float32")))
      ];
    };
    return { value, gradFunc };
  });
  return customOp(labels, logits);
}
function softmaxCrossEntropy_(onehotLabels, logits, weights, labelSmoothing = 0, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  let $onehotLabels = convertToTensor(onehotLabels, "onehotLabels", "softmaxCrossEntropy");
  const $logits = convertToTensor(logits, "logits", "softmaxCrossEntropy");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "softmaxCrossEntropy");
  }
  assertShapesMatch($onehotLabels.shape, $logits.shape, "Error in softmaxCrossEntropy: ");
  if (labelSmoothing > 0) {
    const labelSmoothingScalar = scalar(labelSmoothing);
    const one = scalar(1);
    const numClasses = scalar($onehotLabels.shape[1]);
    $onehotLabels = add2(mul($onehotLabels, sub(one, labelSmoothingScalar)), div(labelSmoothingScalar, numClasses));
  }
  const losses2 = softmaxCrossEntropyWithLogits_($onehotLabels, $logits);
  return computeWeightedLoss(losses2, $weights, reduction);
}
var softmaxCrossEntropy = op({ softmaxCrossEntropy_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_fill_empty_rows.js
function sparseFillEmptyRows_(indices, values, denseShape, defaultValue) {
  const $indices = convertToTensor(indices, "indices", "sparseFillEmptyRows", "int32");
  const $values = convertToTensor(values, "values", "sparseFillEmptyRows");
  const $denseShape = convertToTensor(denseShape, "denseShape", "sparseFillEmptyRows", "int32");
  const $defaultValue = convertToTensor(defaultValue, "defaultValue", "sparseFillEmptyRows", $values.dtype);
  if ($indices.rank !== 2) {
    throw new Error(`Indices should be Tensor2D but received shape
        ${$indices.shape}`);
  }
  if ($values.rank !== 1) {
    throw new Error(`Values should be Tensor1D but received shape ${$values.shape}`);
  }
  if ($denseShape.rank !== 1) {
    throw new Error(`Dense shape should be Tensor1D but received shape ${$denseShape.shape}`);
  }
  if ($defaultValue.rank !== 0) {
    throw new Error(`Default value should be a scalar but received shape ${$defaultValue.shape}`);
  }
  const inputs = {
    indices: $indices,
    values: $values,
    denseShape: $denseShape,
    defaultValue: $defaultValue
  };
  const result = ENGINE.runKernel(SparseFillEmptyRows, inputs);
  return {
    outputIndices: result[0],
    outputValues: result[1],
    emptyRowIndicator: result[2],
    reverseIndexMap: result[3]
  };
}
var sparseFillEmptyRows = op({ sparseFillEmptyRows_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_reshape.js
function sparseReshape_(inputIndices, inputShape, newShape) {
  const $inputIndices = convertToTensor(inputIndices, "inputIndices", "sparseReshape", "int32");
  const $inputShape = convertToTensor(inputShape, "inputShape", "sparseReshape", "int32");
  const $newShape = convertToTensor(newShape, "newShape", "sparseReshape", "int32");
  if ($inputIndices.rank !== 2) {
    throw new Error(`Input indices should be Tensor2D but received shape
        ${$inputIndices.shape}`);
  }
  if ($inputShape.rank !== 1) {
    throw new Error(`Input shape should be Tensor1D but received shape ${$inputShape.shape}`);
  }
  if ($newShape.rank !== 1) {
    throw new Error(`New shape should be Tensor1D but received shape ${$newShape.shape}`);
  }
  const inputs = {
    inputIndices: $inputIndices,
    inputShape: $inputShape,
    newShape: $newShape
  };
  const result = ENGINE.runKernel(SparseReshape, inputs);
  return { outputIndices: result[0], outputShape: result[1] };
}
var sparseReshape = op({ sparseReshape_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_mean.js
function sparseSegmentMean_(data, indices, segmentIds) {
  const $data = convertToTensor(data, "data", "sparseSegmentMean");
  const $indices = convertToTensor(indices, "indices", "sparseSegmentMean", "int32");
  const $segmentIds = convertToTensor(segmentIds, "segmentIds", "sparseSegmentMean", "int32");
  if ($data.rank < 1) {
    throw new Error(`Data should be at least 1 dimensional but received scalar`);
  }
  if ($indices.rank !== 1) {
    throw new Error(`Indices should be Tensor1D but received shape
          ${$indices.shape}`);
  }
  if ($segmentIds.rank !== 1) {
    throw new Error(`Segment ids should be Tensor1D but received shape
          ${$segmentIds.shape}`);
  }
  const inputs = {
    data: $data,
    indices: $indices,
    segmentIds: $segmentIds
  };
  return ENGINE.runKernel(SparseSegmentMean, inputs);
}
var sparseSegmentMean = op({ sparseSegmentMean_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_sum.js
function sparseSegmentSum_(data, indices, segmentIds) {
  const $data = convertToTensor(data, "data", "sparseSegmentSum");
  const $indices = convertToTensor(indices, "indices", "sparseSegmentSum", "int32");
  const $segmentIds = convertToTensor(segmentIds, "segmentIds", "sparseSegmentSum", "int32");
  if ($data.rank < 1) {
    throw new Error(`Data should be at least 1 dimensional but received scalar`);
  }
  if ($indices.rank !== 1) {
    throw new Error(`Indices should be Tensor1D but received shape
         ${$indices.shape}`);
  }
  if ($segmentIds.rank !== 1) {
    throw new Error(`Segment ids should be Tensor1D but received shape
         ${$segmentIds.shape}`);
  }
  const inputs = {
    data: $data,
    indices: $indices,
    segmentIds: $segmentIds
  };
  return ENGINE.runKernel(SparseSegmentSum, inputs);
}
var sparseSegmentSum = op({ sparseSegmentSum_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/string/string_n_grams.js
function stringNGrams_(data, dataSplits, separator, nGramWidths, leftPad, rightPad2, padWidth, preserveShortSequences) {
  const $data = convertToTensor(data, "data", "stringNGrams", "string");
  if ($data.dtype !== "string") {
    throw new Error("Data must be of datatype string");
  }
  if ($data.shape.length !== 1) {
    throw new Error(`Data must be a vector, saw: ${$data.shape}`);
  }
  const $dataSplits = convertToTensor(dataSplits, "dataSplits", "stringNGrams");
  if ($dataSplits.dtype !== "int32") {
    throw new Error("Data splits must be of datatype int32");
  }
  const attrs = {
    separator,
    nGramWidths,
    leftPad,
    rightPad: rightPad2,
    padWidth,
    preserveShortSequences
  };
  const inputs = { data: $data, dataSplits: $dataSplits };
  const result = ENGINE.runKernel(StringNGrams, inputs, attrs);
  return { nGrams: result[0], nGramsSplits: result[1] };
}
var stringNGrams = op({ stringNGrams_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/string/string_split.js
function stringSplit_(input, delimiter, skipEmpty = true) {
  const $input = convertToTensor(input, "input", "stringSplit", "string");
  const $delimiter = convertToTensor(delimiter, "delimiter", "stringSplit", "string");
  if ($input.rank !== 1) {
    throw new Error(`Input should be Tensor1D but received shape ${$input.shape}`);
  }
  if ($delimiter.rank !== 0) {
    throw new Error(`Delimiter should be a scalar but received shape ${$delimiter.shape}`);
  }
  const attrs = { skipEmpty };
  const inputs = { input: $input, delimiter: $delimiter };
  const result = ENGINE.runKernel(StringSplit, inputs, attrs);
  return { indices: result[0], values: result[1], shape: result[2] };
}
var stringSplit = op({ stringSplit_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/string/string_to_hash_bucket_fast.js
function stringToHashBucketFast_(input, numBuckets) {
  const $input = convertToTensor(input, "input", "stringToHashBucketFast", "string");
  const attrs = { numBuckets };
  if (numBuckets <= 0) {
    throw new Error(`Number of buckets must be at least 1`);
  }
  const inputs = { input: $input };
  return ENGINE.runKernel(StringToHashBucketFast, inputs, attrs);
}
var stringToHashBucketFast = op({ stringToHashBucketFast_ });

// node_modules/@tensorflow/tfjs-core/dist/ops/ops.js
var spectral = {
  fft,
  ifft,
  rfft,
  irfft
};
var signal = {
  hammingWindow,
  hannWindow,
  frame,
  stft
};
var image = {
  flipLeftRight,
  grayscaleToRGB,
  resizeNearestNeighbor,
  resizeBilinear,
  rotateWithOffset,
  cropAndResize,
  nonMaxSuppression,
  nonMaxSuppressionAsync,
  nonMaxSuppressionWithScore,
  nonMaxSuppressionWithScoreAsync,
  nonMaxSuppressionPadded,
  nonMaxSuppressionPaddedAsync,
  threshold,
  transform
};
var linalg = {
  bandPart,
  gramSchmidt,
  qr
};
var losses = {
  absoluteDifference,
  computeWeightedLoss,
  cosineDistance,
  hingeLoss,
  huberLoss,
  logLoss,
  meanSquaredError,
  sigmoidCrossEntropy,
  softmaxCrossEntropy
};
var sparse = {
  sparseFillEmptyRows,
  sparseReshape,
  sparseSegmentMean,
  sparseSegmentSum
};
var string = {
  stringNGrams,
  stringSplit,
  stringToHashBucketFast
};

// node_modules/@tensorflow/tfjs-core/dist/optimizers/optimizer.js
var Optimizer = class extends Serializable {
  minimize(f, returnCost = false, varList) {
    const { value, grads: grads2 } = this.computeGradients(f, varList);
    if (varList != null) {
      const gradArray = varList.map((v) => ({ name: v.name, tensor: grads2[v.name] }));
      this.applyGradients(gradArray);
    } else {
      this.applyGradients(grads2);
    }
    dispose(grads2);
    if (returnCost) {
      return value;
    } else {
      value.dispose();
      return null;
    }
  }
  get iterations() {
    if (this.iterations_ == null) {
      this.iterations_ = 0;
    }
    return this.iterations_;
  }
  incrementIterations() {
    this.iterations_ = this.iterations + 1;
  }
  computeGradients(f, varList) {
    return variableGrads(f, varList);
  }
  dispose() {
    if (this.iterations_ != null) {
      dispose(this.iterations_);
    }
  }
  async saveIterations() {
    if (this.iterations_ == null) {
      this.iterations_ = 0;
    }
    return {
      name: "iter",
      tensor: scalar(this.iterations_, "int32")
    };
  }
  async getWeights() {
    throw new Error("getWeights() is not implemented for this optimizer yet.");
  }
  async setWeights(weightValues) {
    throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`);
  }
  async extractIterations(weightValues) {
    this.iterations_ = (await weightValues[0].tensor.data())[0];
    return weightValues.slice(1);
  }
};
Object.defineProperty(Optimizer, Symbol.hasInstance, {
  value: (instance) => {
    return instance.minimize != null && instance.computeGradients != null && instance.applyGradients != null;
  }
});

// node_modules/@tensorflow/tfjs-core/dist/optimizers/adadelta_optimizer.js
var AdadeltaOptimizer = class extends Optimizer {
  constructor(learningRate, rho, epsilon = null) {
    super();
    this.learningRate = learningRate;
    this.rho = rho;
    this.epsilon = epsilon;
    this.accumulatedGrads = [];
    this.accumulatedUpdates = [];
    if (epsilon == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    variableNames.forEach((name, i) => {
      const value = ENGINE.registeredVariables[name];
      const trainable = false;
      if (this.accumulatedGrads[i] == null) {
        this.accumulatedGrads[i] = {
          originalName: `${name}/accum_grad`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      if (this.accumulatedUpdates[i] == null) {
        this.accumulatedUpdates[i] = {
          originalName: `${name}/accum_var`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      const accumulatedGrad = this.accumulatedGrads[i].variable;
      const accumulatedUpdate = this.accumulatedUpdates[i].variable;
      tidy(() => {
        const newAccumulatedGrad = add2(mul(accumulatedGrad, this.rho), mul(square(gradient), 1 - this.rho));
        const updates = mul(div(sqrt(add2(accumulatedUpdate, this.epsilon)), sqrt(add2(accumulatedGrad, this.epsilon))), gradient);
        const newAccumulatedUpdate = add2(mul(accumulatedUpdate, this.rho), mul(square(updates), 1 - this.rho));
        accumulatedGrad.assign(newAccumulatedGrad);
        accumulatedUpdate.assign(newAccumulatedUpdate);
        const newValue = add2(mul(updates, -this.learningRate), value);
        value.assign(newValue);
      });
    });
    this.incrementIterations();
  }
  dispose() {
    if (this.accumulatedUpdates != null) {
      dispose(this.accumulatedGrads.map((v) => v.variable));
      dispose(this.accumulatedUpdates.map((v) => v.variable));
    }
  }
  async getWeights() {
    const variables = [...this.accumulatedGrads, ...this.accumulatedUpdates];
    return [await this.saveIterations()].concat(variables.map((v) => ({ name: v.originalName, tensor: v.variable })));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const variableCount = weightValues.length / 2;
    const trainable = false;
    this.accumulatedGrads = weightValues.slice(0, variableCount).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
    }));
    this.accumulatedUpdates = weightValues.slice(variableCount, variableCount * 2).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
    }));
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "rho": this.rho,
      "epsilon": this.epsilon
    };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["rho"], config["epsilon"]);
  }
};
AdadeltaOptimizer.className = "Adadelta";
registerClass(AdadeltaOptimizer);

// node_modules/@tensorflow/tfjs-core/dist/optimizers/adagrad_optimizer.js
var AdagradOptimizer = class extends Optimizer {
  constructor(learningRate, initialAccumulatorValue = 0.1) {
    super();
    this.learningRate = learningRate;
    this.initialAccumulatorValue = initialAccumulatorValue;
    this.accumulatedGrads = [];
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    variableNames.forEach((name, i) => {
      const value = ENGINE.registeredVariables[name];
      if (this.accumulatedGrads[i] == null) {
        const trainable = false;
        this.accumulatedGrads[i] = {
          originalName: `${name}/accumulator`,
          variable: tidy(() => fill(value.shape, this.initialAccumulatorValue).variable(trainable))
        };
      }
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      const accumulatedGrad = this.accumulatedGrads[i].variable;
      tidy(() => {
        const newAccumulatedGrad = add2(accumulatedGrad, square(gradient));
        accumulatedGrad.assign(newAccumulatedGrad);
        const newValue = add2(mul(div(gradient, sqrt(add2(newAccumulatedGrad, ENGINE.backend.epsilon()))), -this.learningRate), value);
        value.assign(newValue);
      });
    });
    this.incrementIterations();
  }
  dispose() {
    if (this.accumulatedGrads != null) {
      dispose(this.accumulatedGrads.map((v) => v.variable));
    }
  }
  async getWeights() {
    return [await this.saveIterations()].concat(this.accumulatedGrads.map((v) => ({ name: v.originalName, tensor: v.variable })));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const trainable = false;
    this.accumulatedGrads = weightValues.map((v) => ({ originalName: v.name, variable: v.tensor.variable(trainable) }));
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "initialAccumulatorValue": this.initialAccumulatorValue
    };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["initialAccumulatorValue"]);
  }
};
AdagradOptimizer.className = "Adagrad";
registerClass(AdagradOptimizer);

// node_modules/@tensorflow/tfjs-core/dist/optimizers/adam_optimizer.js
var AdamOptimizer = class extends Optimizer {
  constructor(learningRate, beta1, beta2, epsilon = null) {
    super();
    this.learningRate = learningRate;
    this.beta1 = beta1;
    this.beta2 = beta2;
    this.epsilon = epsilon;
    this.accumulatedFirstMoment = [];
    this.accumulatedSecondMoment = [];
    tidy(() => {
      this.accBeta1 = scalar(beta1).variable();
      this.accBeta2 = scalar(beta2).variable();
    });
    if (epsilon == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  applyGradients(variableGradients) {
    const varNames = Array.isArray(variableGradients) ? variableGradients.map((v) => v.name) : Object.keys(variableGradients);
    tidy(() => {
      const oneMinusAccBeta1 = sub(1, this.accBeta1);
      const oneMinusAccBeta2 = sub(1, this.accBeta2);
      varNames.forEach((name, i) => {
        const value = ENGINE.registeredVariables[name];
        const trainable = false;
        if (this.accumulatedFirstMoment[i] == null) {
          this.accumulatedFirstMoment[i] = {
            originalName: `${name}/m`,
            variable: tidy(() => zerosLike(value).variable(trainable))
          };
        }
        if (this.accumulatedSecondMoment[i] == null) {
          this.accumulatedSecondMoment[i] = {
            originalName: `${name}/v`,
            variable: tidy(() => zerosLike(value).variable(trainable))
          };
        }
        const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
        if (gradient == null) {
          return;
        }
        const firstMoment = this.accumulatedFirstMoment[i].variable;
        const secondMoment = this.accumulatedSecondMoment[i].variable;
        const newFirstMoment = add2(mul(firstMoment, this.beta1), mul(gradient, 1 - this.beta1));
        const newSecondMoment = add2(mul(secondMoment, this.beta2), mul(square(gradient), 1 - this.beta2));
        const biasCorrectedFirstMoment = div(newFirstMoment, oneMinusAccBeta1);
        const biasCorrectedSecondMoment = div(newSecondMoment, oneMinusAccBeta2);
        firstMoment.assign(newFirstMoment);
        secondMoment.assign(newSecondMoment);
        const newValue = add2(mul(div(biasCorrectedFirstMoment, add2(sqrt(biasCorrectedSecondMoment), this.epsilon)), -this.learningRate), value);
        value.assign(newValue);
      });
      this.accBeta1.assign(mul(this.accBeta1, this.beta1));
      this.accBeta2.assign(mul(this.accBeta2, this.beta2));
    });
    this.incrementIterations();
  }
  dispose() {
    this.accBeta1.dispose();
    this.accBeta2.dispose();
    if (this.accumulatedFirstMoment != null) {
      dispose(this.accumulatedFirstMoment.map((v) => v.variable));
    }
    if (this.accumulatedSecondMoment != null) {
      dispose(this.accumulatedSecondMoment.map((v) => v.variable));
    }
  }
  async getWeights() {
    const variables = [...this.accumulatedFirstMoment, ...this.accumulatedSecondMoment];
    return [await this.saveIterations()].concat(variables.map((v) => ({ name: v.originalName, tensor: v.variable })));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    tidy(() => {
      this.accBeta1.assign(pow(this.beta1, this.iterations_ + 1));
      this.accBeta2.assign(pow(this.beta2, this.iterations_ + 1));
    });
    const variableCount = weightValues.length / 2;
    const trainable = false;
    this.accumulatedFirstMoment = weightValues.slice(0, variableCount).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
    }));
    this.accumulatedSecondMoment = weightValues.slice(variableCount, variableCount * 2).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
    }));
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "beta1": this.beta1,
      "beta2": this.beta2,
      "epsilon": this.epsilon
    };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["beta1"], config["beta2"], config["epsilon"]);
  }
};
AdamOptimizer.className = "Adam";
registerClass(AdamOptimizer);

// node_modules/@tensorflow/tfjs-core/dist/optimizers/adamax_optimizer.js
var AdamaxOptimizer = class extends Optimizer {
  constructor(learningRate, beta1, beta2, epsilon = null, decay = 0) {
    super();
    this.learningRate = learningRate;
    this.beta1 = beta1;
    this.beta2 = beta2;
    this.epsilon = epsilon;
    this.decay = decay;
    this.accumulatedFirstMoment = [];
    this.accumulatedWeightedInfNorm = [];
    tidy(() => {
      this.iteration = scalar(0).variable();
      this.accBeta1 = scalar(beta1).variable();
    });
    if (epsilon == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    tidy(() => {
      const oneMinusAccBeta1 = sub(1, this.accBeta1);
      const lr = div(-this.learningRate, add2(mul(this.iteration, this.decay), 1));
      variableNames.forEach((name, i) => {
        const value = ENGINE.registeredVariables[name];
        const trainable = false;
        if (this.accumulatedFirstMoment[i] == null) {
          this.accumulatedFirstMoment[i] = {
            originalName: `${name}/m`,
            variable: zerosLike(value).variable(trainable)
          };
        }
        if (this.accumulatedWeightedInfNorm[i] == null) {
          this.accumulatedWeightedInfNorm[i] = {
            originalName: `${name}/v`,
            variable: zerosLike(value).variable(trainable)
          };
        }
        const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
        if (gradient == null) {
          return;
        }
        const firstMoment = this.accumulatedFirstMoment[i].variable;
        const weightedInfNorm = this.accumulatedWeightedInfNorm[i].variable;
        const newFirstMoment = add2(mul(firstMoment, this.beta1), mul(gradient, 1 - this.beta1));
        const ut0 = mul(weightedInfNorm, this.beta2);
        const ut1 = abs(gradient);
        const newWeightedInfNorm = maximum(ut0, ut1);
        firstMoment.assign(newFirstMoment);
        weightedInfNorm.assign(newWeightedInfNorm);
        const newValue = add2(mul(div(lr, oneMinusAccBeta1), div(newFirstMoment, add2(newWeightedInfNorm, this.epsilon))), value);
        value.assign(newValue);
      });
      this.iteration.assign(add2(this.iteration, 1));
      this.accBeta1.assign(mul(this.accBeta1, this.beta1));
    });
    this.incrementIterations();
  }
  dispose() {
    this.accBeta1.dispose();
    this.iteration.dispose();
    if (this.accumulatedFirstMoment != null) {
      dispose(this.accumulatedFirstMoment.map((v) => v.variable));
    }
    if (this.accumulatedWeightedInfNorm != null) {
      dispose(this.accumulatedWeightedInfNorm.map((v) => v.variable));
    }
  }
  async getWeights() {
    throw new Error("getWeights() is not implemented for Adamax yet.");
  }
  async setWeights(weightValues) {
    throw new Error("setWeights() is not implemented for Adamax yet.");
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "beta1": this.beta1,
      "beta2": this.beta2,
      "epsilon": this.epsilon,
      "decay": this.decay
    };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["beta1"], config["beta2"], config["epsilon"], config["decay"]);
  }
};
AdamaxOptimizer.className = "Adamax";
registerClass(AdamaxOptimizer);

// node_modules/@tensorflow/tfjs-core/dist/optimizers/sgd_optimizer.js
var SGDOptimizer = class extends Optimizer {
  constructor(learningRate) {
    super();
    this.learningRate = learningRate;
    this.setLearningRate(learningRate);
  }
  applyGradients(variableGradients) {
    const varNames = Array.isArray(variableGradients) ? variableGradients.map((v) => v.name) : Object.keys(variableGradients);
    varNames.forEach((name, i) => {
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      const value = ENGINE.registeredVariables[name];
      tidy(() => {
        const newValue = add2(mul(this.c, gradient), value);
        value.assign(newValue);
      });
    });
    this.incrementIterations();
  }
  setLearningRate(learningRate) {
    this.learningRate = learningRate;
    if (this.c != null) {
      this.c.dispose();
    }
    this.c = keep(scalar(-learningRate));
  }
  dispose() {
    this.c.dispose();
  }
  async getWeights() {
    return [await this.saveIterations()];
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    if (weightValues.length !== 0) {
      throw new Error("SGD optimizer does not have settable weights.");
    }
  }
  getConfig() {
    return { "learningRate": this.learningRate };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"]);
  }
};
SGDOptimizer.className = "SGD";
registerClass(SGDOptimizer);

// node_modules/@tensorflow/tfjs-core/dist/optimizers/momentum_optimizer.js
var MomentumOptimizer = class extends SGDOptimizer {
  constructor(learningRate, momentum, useNesterov = false) {
    super(learningRate);
    this.learningRate = learningRate;
    this.momentum = momentum;
    this.useNesterov = useNesterov;
    this.accumulations = [];
    this.m = scalar(this.momentum);
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    variableNames.forEach((name, i) => {
      const value = ENGINE.registeredVariables[name];
      if (this.accumulations[i] == null) {
        const trainable = false;
        this.accumulations[i] = {
          originalName: `${name}/momentum`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      const accumulation = this.accumulations[i].variable;
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      tidy(() => {
        let newValue;
        const newAccumulation = add2(mul(this.m, accumulation), gradient);
        if (this.useNesterov) {
          newValue = add2(mul(this.c, add2(gradient, mul(newAccumulation, this.m))), value);
        } else {
          newValue = add2(mul(this.c, newAccumulation), value);
        }
        accumulation.assign(newAccumulation);
        value.assign(newValue);
      });
    });
    this.incrementIterations();
  }
  dispose() {
    this.m.dispose();
    if (this.accumulations != null) {
      dispose(this.accumulations.map((v) => v.variable));
    }
  }
  setMomentum(momentum) {
    this.momentum = momentum;
  }
  async getWeights() {
    return [await this.saveIterations()].concat(this.accumulations.map((v) => ({ name: v.originalName, tensor: v.variable })));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const trainable = false;
    this.accumulations = weightValues.map((v) => ({ originalName: v.name, variable: v.tensor.variable(trainable) }));
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "momentum": this.momentum,
      "useNesterov": this.useNesterov
    };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["momentum"], config["useNesterov"]);
  }
};
MomentumOptimizer.className = "Momentum";
registerClass(MomentumOptimizer);

// node_modules/@tensorflow/tfjs-core/dist/optimizers/rmsprop_optimizer.js
var RMSPropOptimizer = class extends Optimizer {
  constructor(learningRate, decay = 0.9, momentum = 0, epsilon = null, centered = false) {
    super();
    this.learningRate = learningRate;
    this.decay = decay;
    this.momentum = momentum;
    this.epsilon = epsilon;
    this.accumulatedMeanSquares = [];
    this.accumulatedMoments = [];
    this.accumulatedMeanGrads = [];
    this.centered = centered;
    if (epsilon == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
    if (learningRate == null) {
      throw new Error(`learningRate for RMSPropOptimizer must be defined.`);
    }
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    variableNames.forEach((name, i) => {
      const value = ENGINE.registeredVariables[name];
      const trainable = false;
      if (this.accumulatedMeanSquares[i] == null) {
        this.accumulatedMeanSquares[i] = {
          originalName: `${name}/rms`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      if (this.accumulatedMoments[i] == null) {
        this.accumulatedMoments[i] = {
          originalName: `${name}/momentum`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      if (this.accumulatedMeanGrads[i] == null && this.centered) {
        this.accumulatedMeanGrads[i] = {
          originalName: `${name}/mg`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      const accumulatedMeanSquare = this.accumulatedMeanSquares[i].variable;
      const accumulatedMoments = this.accumulatedMoments[i].variable;
      tidy(() => {
        const newAccumulatedMeanSquare = add2(mul(accumulatedMeanSquare, this.decay), mul(square(gradient), 1 - this.decay));
        if (this.centered) {
          const accumulatedMeanGrad = this.accumulatedMeanGrads[i].variable;
          const newAccumulatedMeanGrad = add2(mul(accumulatedMeanGrad, this.decay), mul(gradient, 1 - this.decay));
          const gradContribution = div(mul(gradient, this.learningRate), sqrt(sub(newAccumulatedMeanSquare, add2(square(newAccumulatedMeanGrad), this.epsilon))));
          const newAccumulatedMoments = add2(mul(accumulatedMoments, this.momentum), gradContribution);
          accumulatedMeanSquare.assign(newAccumulatedMeanSquare);
          accumulatedMeanGrad.assign(newAccumulatedMeanGrad);
          accumulatedMoments.assign(newAccumulatedMoments);
          const newValue = sub(value, newAccumulatedMoments);
          value.assign(newValue);
        } else {
          const newAccumulatedMeanSquare2 = add2(mul(accumulatedMeanSquare, this.decay), mul(square(gradient), 1 - this.decay));
          const newAccumulatedMoments = add2(mul(accumulatedMoments, this.momentum), div(mul(gradient, this.learningRate), sqrt(add2(newAccumulatedMeanSquare2, this.epsilon))));
          accumulatedMeanSquare.assign(newAccumulatedMeanSquare2);
          accumulatedMoments.assign(newAccumulatedMoments);
          const newValue = sub(value, newAccumulatedMoments);
          value.assign(newValue);
        }
      });
    });
    this.incrementIterations();
  }
  dispose() {
    if (this.accumulatedMeanSquares != null) {
      dispose(this.accumulatedMeanSquares.map((v) => v.variable));
    }
    if (this.accumulatedMeanGrads != null && this.centered) {
      dispose(this.accumulatedMeanGrads.map((v) => v.variable));
    }
    if (this.accumulatedMoments != null) {
      dispose(this.accumulatedMoments.map((v) => v.variable));
    }
  }
  async getWeights() {
    const variables = [...this.accumulatedMeanSquares, ...this.accumulatedMoments];
    if (this.centered) {
      variables.push(...this.accumulatedMeanGrads);
    }
    return [await this.saveIterations()].concat(variables.map((v) => ({ name: v.originalName, tensor: v.variable })));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const variableCount = this.centered ? weightValues.length / 3 : weightValues.length / 2;
    const trainable = false;
    this.accumulatedMeanSquares = weightValues.slice(0, variableCount).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
    }));
    this.accumulatedMoments = weightValues.slice(variableCount, variableCount * 2).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
    }));
    if (this.centered) {
      this.accumulatedMeanGrads = weightValues.slice(variableCount * 2, variableCount * 3).map((v) => ({
        originalName: v.name,
        variable: v.tensor.variable(trainable)
      }));
    }
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "decay": this.decay,
      "momentum": this.momentum,
      "epsilon": this.epsilon,
      "centered": this.centered
    };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["decay"], config["momentum"], config["epsilon"], config["centered"]);
  }
};
RMSPropOptimizer.className = "RMSProp";
registerClass(RMSPropOptimizer);

// node_modules/@tensorflow/tfjs-core/dist/optimizers/optimizer_constructors.js
var OptimizerConstructors = class {
  static sgd(learningRate) {
    return new SGDOptimizer(learningRate);
  }
  static momentum(learningRate, momentum, useNesterov = false) {
    return new MomentumOptimizer(learningRate, momentum, useNesterov);
  }
  static rmsprop(learningRate, decay = 0.9, momentum = 0, epsilon = null, centered = false) {
    return new RMSPropOptimizer(learningRate, decay, momentum, epsilon, centered);
  }
  static adam(learningRate = 1e-3, beta1 = 0.9, beta2 = 0.999, epsilon = null) {
    return new AdamOptimizer(learningRate, beta1, beta2, epsilon);
  }
  static adadelta(learningRate = 1e-3, rho = 0.95, epsilon = null) {
    return new AdadeltaOptimizer(learningRate, rho, epsilon);
  }
  static adamax(learningRate = 2e-3, beta1 = 0.9, beta2 = 0.999, epsilon = null, decay = 0) {
    return new AdamaxOptimizer(learningRate, beta1, beta2, epsilon, decay);
  }
  static adagrad(learningRate, initialAccumulatorValue = 0.1) {
    return new AdagradOptimizer(learningRate, initialAccumulatorValue);
  }
};

// node_modules/@tensorflow/tfjs-core/dist/train.js
var train = {
  sgd: OptimizerConstructors.sgd,
  momentum: OptimizerConstructors.momentum,
  adadelta: OptimizerConstructors.adadelta,
  adagrad: OptimizerConstructors.adagrad,
  rmsprop: OptimizerConstructors.rmsprop,
  adamax: OptimizerConstructors.adamax,
  adam: OptimizerConstructors.adam
};

// node_modules/@tensorflow/tfjs-core/dist/browser_util.js
var delayCallback = (() => {
  if (typeof requestAnimationFrame !== "undefined") {
    return requestAnimationFrame;
  } else if (typeof setImmediate !== "undefined") {
    return setImmediate;
  }
  return (f) => f();
})();
function nextFrame() {
  return new Promise((resolve) => delayCallback(() => resolve()));
}

// node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js
var backend_util_exports = {};
__export(backend_util_exports, {
  ERF_A1: () => ERF_A1,
  ERF_A2: () => ERF_A2,
  ERF_A3: () => ERF_A3,
  ERF_A4: () => ERF_A4,
  ERF_A5: () => ERF_A5,
  ERF_P: () => ERF_P,
  PARALLELIZE_THRESHOLD: () => PARALLELIZE_THRESHOLD,
  SELU_SCALE: () => SELU_SCALE,
  SELU_SCALEALPHA: () => SELU_SCALEALPHA,
  applyActivation: () => applyActivation,
  assertAndGetBroadcastShape: () => assertAndGetBroadcastShape,
  assertAxesAreInnerMostDims: () => assertAxesAreInnerMostDims,
  assertParamsConsistent: () => assertParamsConsistent,
  assignToTypedArray: () => assignToTypedArray,
  axesAreInnerMostDims: () => axesAreInnerMostDims,
  calculateShapes: () => calculateShapes,
  checkEinsumDimSizes: () => checkEinsumDimSizes,
  checkPadOnDimRoundingMode: () => checkPadOnDimRoundingMode,
  combineLocations: () => combineLocations,
  complexWithEvenIndex: () => complexWithEvenIndex,
  complexWithOddIndex: () => complexWithOddIndex,
  computeConv2DInfo: () => computeConv2DInfo,
  computeConv3DInfo: () => computeConv3DInfo,
  computeDefaultPad: () => computeDefaultPad,
  computeDilation2DInfo: () => computeDilation2DInfo,
  computeOptimalWindowSize: () => computeOptimalWindowSize,
  computeOutAndReduceShapes: () => computeOutAndReduceShapes,
  computeOutShape: () => computeOutShape2,
  computePool2DInfo: () => computePool2DInfo,
  computePool3DInfo: () => computePool3DInfo,
  convertConv2DDataFormat: () => convertConv2DDataFormat,
  decodeEinsumEquation: () => decodeEinsumEquation,
  eitherStridesOrDilationsAreOne: () => eitherStridesOrDilationsAreOne,
  expandShapeToKeepDim: () => expandShapeToKeepDim,
  exponent: () => exponent,
  exponents: () => exponents,
  fromStringArrayToUint8: () => fromStringArrayToUint8,
  fromUint8ToStringArray: () => fromUint8ToStringArray,
  getAxesPermutation: () => getAxesPermutation,
  getBroadcastDims: () => getBroadcastDims,
  getComplexWithIndex: () => getComplexWithIndex,
  getEinsumComputePath: () => getEinsumComputePath,
  getEinsumPermutation: () => getEinsumPermutation,
  getFusedBiasGradient: () => getFusedBiasGradient,
  getFusedDyActivation: () => getFusedDyActivation,
  getImageCenter: () => getImageCenter,
  getInnerMostAxes: () => getInnerMostAxes,
  getPermuted: () => getPermuted,
  getReductionAxes: () => getReductionAxes,
  getReshaped: () => getReshaped,
  getReshapedPermuted: () => getReshapedPermuted,
  getSliceBeginCoords: () => getSliceBeginCoords,
  getSliceSize: () => getSliceSize,
  getSparseFillEmptyRowsIndicesDenseShapeMismatch: () => getSparseFillEmptyRowsIndicesDenseShapeMismatch,
  getSparseFillEmptyRowsNegativeIndexErrorMessage: () => getSparseFillEmptyRowsNegativeIndexErrorMessage,
  getSparseFillEmptyRowsOutOfRangeIndexErrorMessage: () => getSparseFillEmptyRowsOutOfRangeIndexErrorMessage,
  getSparseReshapeEmptyTensorZeroOutputDimErrorMessage: () => getSparseReshapeEmptyTensorZeroOutputDimErrorMessage,
  getSparseReshapeInputOutputMismatchErrorMessage: () => getSparseReshapeInputOutputMismatchErrorMessage,
  getSparseReshapeInputOutputMultipleErrorMessage: () => getSparseReshapeInputOutputMultipleErrorMessage,
  getSparseReshapeMultipleNegativeOneOutputDimErrorMessage: () => getSparseReshapeMultipleNegativeOneOutputDimErrorMessage,
  getSparseReshapeNegativeOutputDimErrorMessage: () => getSparseReshapeNegativeOutputDimErrorMessage,
  getSparseSegmentReductionIndicesOutOfRangeErrorMessage: () => getSparseSegmentReductionIndicesOutOfRangeErrorMessage,
  getSparseSegmentReductionNegativeSegmentIdsErrorMessage: () => getSparseSegmentReductionNegativeSegmentIdsErrorMessage,
  getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage: () => getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage,
  getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage: () => getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage,
  getUndoAxesPermutation: () => getUndoAxesPermutation,
  isIdentityPermutation: () => isIdentityPermutation,
  log: () => log,
  mergeRealAndImagArrays: () => mergeRealAndImagArrays,
  prepareAndValidate: () => prepareAndValidate,
  prepareSplitSize: () => prepareSplitSize,
  segment_util: () => segment_util_exports,
  shouldFuse: () => shouldFuse,
  slice_util: () => slice_util_exports,
  splitRealAndImagArrays: () => splitRealAndImagArrays,
  tupleValuesAreOne: () => tupleValuesAreOne,
  upcastType: () => upcastType,
  validateInput: () => validateInput,
  validateUpdateShape: () => validateUpdateShape,
  warn: () => warn
});

// node_modules/@tensorflow/tfjs-core/dist/ops/concat_util.js
function assertParamsConsistent(shapes, axis) {
  const rank = shapes[0].length;
  shapes.forEach((shape, i) => {
    assert(shape.length === rank, () => `Error in concat${rank}D: rank of tensors[${i}] must be the same as the rank of the rest (${rank})`);
  });
  assert(axis >= 0 && axis < rank, () => `Error in concat${rank}D: axis must be between 0 and ${rank - 1}.`);
  const firstShape = shapes[0];
  shapes.forEach((shape, i) => {
    for (let r = 0; r < rank; r++) {
      assert(r === axis || shape[r] === firstShape[r], () => `Error in concat${rank}D: Shape of tensors[${i}] (${shape}) does not match the shape of the rest (${firstShape}) along the non-concatenated axis ${i}.`);
    }
  });
}
function computeOutShape2(shapes, axis) {
  const outputShape = shapes[0].slice();
  for (let i = 1; i < shapes.length; i++) {
    outputShape[axis] += shapes[i][axis];
  }
  return outputShape;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/reduce_util.js
var PARALLELIZE_THRESHOLD = 30;
function computeOptimalWindowSize(inSize) {
  if (inSize <= PARALLELIZE_THRESHOLD) {
    return inSize;
  }
  return nearestDivisor(inSize, Math.floor(Math.sqrt(inSize)));
}

// node_modules/@tensorflow/tfjs-core/dist/ops/rotate_util.js
function getImageCenter(center, imageHeight, imageWidth) {
  const centerX = imageWidth * (typeof center === "number" ? center : center[0]);
  const centerY = imageHeight * (typeof center === "number" ? center : center[1]);
  return [centerX, centerY];
}

// node_modules/@tensorflow/tfjs-core/dist/ops/array_ops_util.js
function getReshaped(inputShape, blockShape, prod2, batchToSpace = true) {
  let reshaped = [];
  if (batchToSpace) {
    reshaped = reshaped.concat(blockShape.slice(0));
    reshaped.push(inputShape[0] / prod2);
    reshaped = reshaped.concat(inputShape.slice(1));
  } else {
    reshaped = reshaped.concat(inputShape[0]);
    const spatialLength = blockShape.length;
    for (let i = 0; i < spatialLength; ++i) {
      reshaped = reshaped.concat([inputShape[i + 1] / blockShape[i], blockShape[i]]);
    }
    reshaped = reshaped.concat(inputShape.slice(spatialLength + 1));
  }
  return reshaped;
}
function getPermuted(reshapedRank, blockShapeRank, batchToSpace = true) {
  const permuted = [];
  if (batchToSpace) {
    permuted.push(blockShapeRank);
    for (let i = blockShapeRank + 1; i < reshapedRank; ++i) {
      if (i <= 2 * blockShapeRank) {
        permuted.push(i);
        permuted.push(i - (blockShapeRank + 1));
      } else {
        permuted.push(i);
      }
    }
  } else {
    const permutedBeforeBatch = [];
    const permutedAfterBatch = [];
    for (let i = 1; i < reshapedRank; ++i) {
      if (i >= blockShapeRank * 2 + 1 || i % 2 === 1) {
        permutedAfterBatch.push(i);
      } else {
        permutedBeforeBatch.push(i);
      }
    }
    permuted.push(...permutedBeforeBatch);
    permuted.push(0);
    permuted.push(...permutedAfterBatch);
  }
  return permuted;
}
function getReshapedPermuted(inputShape, blockShape, prod2, batchToSpace = true) {
  const reshapedPermuted = [];
  if (batchToSpace) {
    reshapedPermuted.push(inputShape[0] / prod2);
  } else {
    reshapedPermuted.push(inputShape[0] * prod2);
  }
  for (let i = 1; i < inputShape.length; ++i) {
    if (i <= blockShape.length) {
      if (batchToSpace) {
        reshapedPermuted.push(blockShape[i - 1] * inputShape[i]);
      } else {
        reshapedPermuted.push(inputShape[i] / blockShape[i - 1]);
      }
    } else {
      reshapedPermuted.push(inputShape[i]);
    }
  }
  return reshapedPermuted;
}
function getSliceBeginCoords(crops, blockShape) {
  const sliceBeginCoords = [0];
  for (let i = 0; i < blockShape; ++i) {
    sliceBeginCoords.push(crops[i][0]);
  }
  return sliceBeginCoords;
}
function getSliceSize(uncroppedShape, crops, blockShape) {
  const sliceSize = uncroppedShape.slice(0, 1);
  for (let i = 0; i < blockShape; ++i) {
    sliceSize.push(uncroppedShape[i + 1] - crops[i][0] - crops[i][1]);
  }
  return sliceSize;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/selu_util.js
var SELU_SCALEALPHA = 1.7580993408473768;
var SELU_SCALE = 1.0507009873554805;

// node_modules/@tensorflow/tfjs-core/dist/ops/erf_util.js
var ERF_P = 0.3275911;
var ERF_A1 = 0.254829592;
var ERF_A2 = -0.284496736;
var ERF_A3 = 1.421413741;
var ERF_A4 = -1.453152027;
var ERF_A5 = 1.061405429;

// node_modules/@tensorflow/tfjs-core/dist/backends/complex_util.js
function mergeRealAndImagArrays(real2, imag2) {
  if (real2.length !== imag2.length) {
    throw new Error(`Cannot merge real and imag arrays of different lengths. real:${real2.length}, imag: ${imag2.length}.`);
  }
  const result = new Float32Array(real2.length * 2);
  for (let i = 0; i < result.length; i += 2) {
    result[i] = real2[i / 2];
    result[i + 1] = imag2[i / 2];
  }
  return result;
}
function splitRealAndImagArrays(complex2) {
  const real2 = new Float32Array(complex2.length / 2);
  const imag2 = new Float32Array(complex2.length / 2);
  for (let i = 0; i < complex2.length; i += 2) {
    real2[i / 2] = complex2[i];
    imag2[i / 2] = complex2[i + 1];
  }
  return { real: real2, imag: imag2 };
}
function complexWithEvenIndex(complex2) {
  const len = Math.ceil(complex2.length / 4);
  const real2 = new Float32Array(len);
  const imag2 = new Float32Array(len);
  for (let i = 0; i < complex2.length; i += 4) {
    real2[Math.floor(i / 4)] = complex2[i];
    imag2[Math.floor(i / 4)] = complex2[i + 1];
  }
  return { real: real2, imag: imag2 };
}
function complexWithOddIndex(complex2) {
  const len = Math.floor(complex2.length / 4);
  const real2 = new Float32Array(len);
  const imag2 = new Float32Array(len);
  for (let i = 2; i < complex2.length; i += 4) {
    real2[Math.floor(i / 4)] = complex2[i];
    imag2[Math.floor(i / 4)] = complex2[i + 1];
  }
  return { real: real2, imag: imag2 };
}
function getComplexWithIndex(complex2, index) {
  const real2 = complex2[index * 2];
  const imag2 = complex2[index * 2 + 1];
  return { real: real2, imag: imag2 };
}
function assignToTypedArray(data, real2, imag2, index) {
  data[index * 2] = real2;
  data[index * 2 + 1] = imag2;
}
function exponents(n, inverse) {
  const real2 = new Float32Array(n / 2);
  const imag2 = new Float32Array(n / 2);
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    const x = (inverse ? 2 : -2) * Math.PI * (i / n);
    real2[i] = Math.cos(x);
    imag2[i] = Math.sin(x);
  }
  return { real: real2, imag: imag2 };
}
function exponent(k, n, inverse) {
  const x = (inverse ? 2 : -2) * Math.PI * (k / n);
  const real2 = Math.cos(x);
  const imag2 = Math.sin(x);
  return { real: real2, imag: imag2 };
}

// node_modules/@tensorflow/tfjs-core/dist/backends/einsum_util.js
var ARROW = "->";
var ARROW_REGEX = /->/g;
var COMMA = ",";
var ELLIPSIS = "...";
function decodeEinsumEquation(equation, numTensors) {
  equation = equation.replace(/\s/g, "");
  const numArrows = (equation.length - equation.replace(ARROW_REGEX, "").length) / ARROW.length;
  if (numArrows < 1) {
    throw new Error("Equations without an arrow are not supported.");
  } else if (numArrows > 1) {
    throw new Error(`Equation must contain exactly one arrow ("${ARROW}").`);
  }
  const [inputString, outputString] = equation.split(ARROW);
  assert(inputString.indexOf(ELLIPSIS) === -1, () => `The ellipsis notation ("${ELLIPSIS}") is not supported yet.`);
  const inputTerms = inputString.split(COMMA);
  const numInputs = inputTerms.length;
  if (numTensors !== numInputs) {
    throw new Error(`Expected ${numInputs} input tensors, received ${numTensors}`);
  }
  if (numInputs > 2) {
    throw new Error("Support for more than 2 input tensors is not implemented yet.");
  }
  const allDims = [];
  for (let i = 0; i < outputString.length; ++i) {
    const dimName = outputString[i];
    if (!inputTerms.some((inputTerm) => inputTerm.indexOf(dimName) !== -1)) {
      throw new Error(`Output subscripts contain the label ${dimName} not present in the input subscripts.`);
    }
    if (allDims.indexOf(dimName) === -1) {
      allDims.push(dimName);
    }
  }
  for (let i = 0; i < inputString.length; ++i) {
    const dimName = inputString[i];
    if (allDims.indexOf(dimName) === -1 && dimName !== COMMA) {
      allDims.push(dimName);
    }
  }
  const idDims = new Array(inputTerms.length);
  for (let i = 0; i < numInputs; ++i) {
    if (new Set(inputTerms[i].split("")).size !== inputTerms[i].length) {
      throw new Error(`Found duplicate axes in input component ${inputTerms[i]}. Support for duplicate axes in input is not implemented yet.`);
    }
    idDims[i] = [];
    for (let j = 0; j < inputTerms[i].length; ++j) {
      idDims[i].push(allDims.indexOf(inputTerms[i][j]));
    }
  }
  const numDims = allDims.length;
  const numOutDims = outputString.length;
  const summedDims = [];
  for (let i = numOutDims; i < numDims; ++i) {
    summedDims.push(i);
  }
  return { allDims, summedDims, idDims };
}
function getEinsumPermutation(nDims, idDims) {
  let permutationIndices = new Array(nDims);
  permutationIndices.fill(-1);
  for (let i = 0; i < idDims.length; ++i) {
    permutationIndices[idDims[i]] = i;
  }
  const expandDims2 = [];
  for (let i = 0; i < nDims; ++i) {
    if (permutationIndices[i] === -1) {
      expandDims2.push(i);
    }
  }
  permutationIndices = permutationIndices.filter((d) => d !== -1);
  return { permutationIndices, expandDims: expandDims2 };
}
function checkEinsumDimSizes(nDims, idDims, tensors) {
  const dimSizes = new Array(nDims);
  for (let i = 0; i < tensors.length; ++i) {
    const shape = tensors[i].shape;
    for (let j = 0; j < idDims[i].length; ++j) {
      if (dimSizes[idDims[i][j]] === void 0) {
        dimSizes[idDims[i][j]] = shape[j];
      } else {
        assert(dimSizes[idDims[i][j]] === shape[j], () => `Expected dimension ${dimSizes[idDims[i][j]]} at axis ${j} of input shaped ${JSON.stringify(shape)}, but got dimension ${shape[j]}`);
      }
    }
  }
}
function getEinsumComputePath(summedDims, idDims) {
  const path = summedDims;
  const steps = [];
  let nSteps = 0;
  if (summedDims.length === 0) {
    path.push(-1);
  }
  nSteps = summedDims.length + 1;
  for (let i = 0; i < nSteps; ++i) {
    steps.push([]);
  }
  const computedTermIndices = [];
  for (let i = 0; i < path.length; ++i) {
    const summedDim = path[i];
    const termIndices = findTermsWithDim(idDims, summedDim);
    for (const termIndex of termIndices) {
      if (computedTermIndices.indexOf(termIndex) === -1) {
        steps[i].push(termIndex);
        computedTermIndices.push(termIndex);
      }
    }
  }
  return { path, steps };
}
function isIdentityPermutation(perm) {
  return perm.every((dim, index) => dim === index);
}
function findTermsWithDim(idDims, dim) {
  const termIndices = [];
  for (let i = 0; i < idDims.length; ++i) {
    if (idDims[i].length === 0 || idDims[i].indexOf(dim) !== -1 || dim === -1) {
      termIndices.push(i);
    }
  }
  return termIndices;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/split_util.js
function prepareSplitSize(x, numOrSizeSplits, axis = 0) {
  let splitSizes = [];
  if (typeof numOrSizeSplits === "number") {
    assert(x.shape[axis] % numOrSizeSplits === 0, () => "Number of splits must evenly divide the axis.");
    splitSizes = new Array(numOrSizeSplits).fill(x.shape[axis] / numOrSizeSplits);
  } else {
    const numOfNegs = numOrSizeSplits.reduce((count, value) => {
      if (value === -1) {
        count += 1;
      }
      return count;
    }, 0);
    assert(numOfNegs <= 1, () => "There should be only one negative value in split array.");
    const negIndex = numOrSizeSplits.indexOf(-1);
    if (negIndex !== -1) {
      const total = numOrSizeSplits.reduce((a, b) => b > 0 ? a + b : a);
      numOrSizeSplits[negIndex] = x.shape[axis] - total;
    }
    assert(x.shape[axis] === numOrSizeSplits.reduce((a, b) => a + b), () => "The sum of sizes must match the size of the axis dimension.");
    splitSizes = numOrSizeSplits;
  }
  return splitSizes;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_fill_empty_rows_util.js
function getSparseFillEmptyRowsIndicesDenseShapeMismatch(indicesLength) {
  return `Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${indicesLength}`;
}
function getSparseFillEmptyRowsNegativeIndexErrorMessage(index, value) {
  return `indices(${index}, 0) is invalid: ${value} < 0`;
}
function getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(index, value, limit) {
  return `indices(${index}, 0) is invalid: ${value} >= ${limit}`;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_reshape_util.js
function getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(dim1, dim2) {
  return `only one output dimension may be -1, not both ${dim1} and ${dim2}`;
}
function getSparseReshapeNegativeOutputDimErrorMessage(dim, value) {
  return `size ${dim} must be non-negative, not ${value}`;
}
function getSparseReshapeEmptyTensorZeroOutputDimErrorMessage() {
  return "reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero";
}
function getSparseReshapeInputOutputMultipleErrorMessage(inputShape, outputShape) {
  const inputSize = sizeFromShape(inputShape);
  const outputSize = sizeFromShape(outputShape);
  return `Input to reshape is a SparseTensor with ${inputSize}
  dense values, but the requested shape requires a multiple of ${outputSize}. inputShape=${inputShape} outputShape= ${outputShape}`;
}
function getSparseReshapeInputOutputMismatchErrorMessage(inputShape, outputShape) {
  const inputSize = sizeFromShape(inputShape);
  const outputSize = sizeFromShape(outputShape);
  return `Input to reshape is a tensor with ${inputSize} dense values, but the requested shape has ${outputSize}. inputShape=${inputShape} outputShape=${outputShape}`;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_reduction_util.js
function getSparseSegmentReductionNegativeSegmentIdsErrorMessage() {
  return `segment ids must be >= 0`;
}
function getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage() {
  return `segment ids are not increasing`;
}
function getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(segmentId, outputRows) {
  return `Segment id ${segmentId} out of range [0, ${outputRows}), possibly because segmentIds input is not sorted.`;
}
function getSparseSegmentReductionIndicesOutOfRangeErrorMessage(index, indexValue, inputRows) {
  return `Bad: indices[${index}] == ${indexValue} out of range [0, ${inputRows})`;
}

// node_modules/@tensorflow/tfjs-core/dist/ops/segment_util.js
var segment_util_exports = {};
__export(segment_util_exports, {
  collectGatherOpShapeInfo: () => collectGatherOpShapeInfo,
  computeOutShape: () => computeOutShape3,
  segOpComputeOptimalWindowSize: () => segOpComputeOptimalWindowSize
});
function segOpComputeOptimalWindowSize(inSize, numSegments) {
  let done = false;
  let res;
  if (inSize <= PARALLELIZE_THRESHOLD) {
    res = inSize;
    done = true;
  } else {
    res = nearestDivisor(inSize, Math.floor(Math.sqrt(inSize)));
  }
  while (!done) {
    if (res > numSegments || res === inSize) {
      done = true;
    } else {
      res = nearestDivisor(inSize, res + 1);
    }
  }
  return res;
}
function computeOutShape3(aShape, axis, numSegments) {
  const outShape = [];
  const rank = aShape.length;
  for (let dim = 0; dim < rank; dim++) {
    if (dim !== axis) {
      outShape.push(aShape[dim]);
    } else {
      outShape.push(numSegments);
    }
  }
  return outShape;
}
function collectGatherOpShapeInfo(x, indices, axis, batchDims) {
  const indicesRank = indices.shape.length;
  const xRank = x.shape.length;
  if (batchDims !== 0) {
    if (batchDims < -indicesRank || batchDims > indicesRank) {
      throw new Error(`Expect batchDims in the range of [-${indicesRank}, ${indicesRank}], but got ${batchDims}`);
    }
  }
  if (batchDims < 0) {
    batchDims += indicesRank;
  }
  if (batchDims > xRank) {
    throw new Error(`batchDims (${batchDims}) must be less than rank(x) (
    ${xRank}).`);
  }
  if (axis < batchDims) {
    throw new Error(`batchDims (${batchDims}) must be less than or equal to axis (${axis}).`);
  }
  for (let i = 0; i < batchDims; ++i) {
    if (x.shape[i] !== indices.shape[i]) {
      throw new Error(`x.shape[${i}]: ${x.shape[i]} should be equal to indices.shape[${i}]: ${indices.shape[i]}.`);
    }
  }
  const dimSize = x.shape[axis];
  const outputShape = [];
  let batchSize = 1;
  let outerSize = 1;
  let sliceSize = 1;
  for (let i = 0; i < batchDims; ++i) {
    outputShape.push(x.shape[i]);
    batchSize *= x.shape[i];
  }
  for (let i = batchDims; i < axis; i++) {
    outputShape.push(x.shape[i]);
    outerSize *= x.shape[i];
  }
  for (let i = batchDims; i < indicesRank; i++) {
    outputShape.push(indices.shape[i]);
  }
  for (let i = axis + 1; i < xRank; i++) {
    outputShape.push(x.shape[i]);
    sliceSize *= x.shape[i];
  }
  return { batchSize, sliceSize, outerSize, dimSize, outputShape };
}

// node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js
function fromUint8ToStringArray(vals) {
  try {
    return vals.map((val) => decodeString(val));
  } catch (err) {
    throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${err}`);
  }
}
function fromStringArrayToUint8(strings) {
  return strings.map((s) => encodeString(s));
}

// node_modules/@tensorflow/tfjs-core/dist/backends/kernel_impls.js
var kernel_impls_exports = {};
__export(kernel_impls_exports, {
  nonMaxSuppressionV3Impl: () => nonMaxSuppressionV3Impl,
  nonMaxSuppressionV4Impl: () => nonMaxSuppressionV4Impl,
  nonMaxSuppressionV5Impl: () => nonMaxSuppressionV5Impl,
  whereImpl: () => whereImpl
});

// node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/register.js
var CUSTOM_OPS = {};
function registerOp(name, opFunc) {
  const opMapper = {
    tfOpName: name,
    category: "custom",
    inputs: [],
    attrs: [],
    customExecutor: opFunc
  };
  CUSTOM_OPS[name] = opMapper;
}
function getRegisteredOp(name) {
  return CUSTOM_OPS[name];
}
function deregisterOp(name) {
  delete CUSTOM_OPS[name];
}

// node_modules/@tensorflow/tfjs-core/dist/platforms/platform_browser.js
var PlatformBrowser = class {
  fetch(path, init) {
    return fetch(path, init);
  }
  now() {
    return performance.now();
  }
  encode(text, encoding) {
    if (encoding !== "utf-8" && encoding !== "utf8") {
      throw new Error(`Browser's encoder only supports utf-8, but got ${encoding}`);
    }
    if (this.textEncoder == null) {
      this.textEncoder = new TextEncoder();
    }
    return this.textEncoder.encode(text);
  }
  decode(bytes, encoding) {
    return new TextDecoder(encoding).decode(bytes);
  }
};
if (env().get("IS_BROWSER")) {
  env().setPlatform("browser", new PlatformBrowser());
  try {
    ModelStoreManagerRegistry.registerManager(BrowserLocalStorage.URL_SCHEME, new BrowserLocalStorageManager());
  } catch (err) {
  }
  try {
    ModelStoreManagerRegistry.registerManager(BrowserIndexedDB.URL_SCHEME, new BrowserIndexedDBManager());
  } catch (err) {
  }
}

// node_modules/@tensorflow/tfjs-core/dist/platforms/platform_node.js
var getNodeFetch = {
  importFetch: () => (init_node_fetch(), __toCommonJS(node_fetch_exports))
};
var systemFetch;
var PlatformNode = class {
  constructor() {
    this.util = (init_util(), __toCommonJS(util_exports2));
    this.textEncoder = new this.util.TextEncoder();
  }
  fetch(path, requestInits) {
    if (env().global.fetch != null) {
      return env().global.fetch(path, requestInits);
    }
    if (systemFetch == null) {
      systemFetch = getNodeFetch.importFetch();
    }
    return systemFetch(path, requestInits);
  }
  now() {
    const time2 = process.hrtime();
    return time2[0] * 1e3 + time2[1] / 1e6;
  }
  encode(text, encoding) {
    if (encoding !== "utf-8" && encoding !== "utf8") {
      throw new Error(`Node built-in encoder only supports utf-8, but got ${encoding}`);
    }
    return this.textEncoder.encode(text);
  }
  decode(bytes, encoding) {
    if (bytes.length === 0) {
      return "";
    }
    return new this.util.TextDecoder(encoding).decode(bytes);
  }
};
if (env().get("IS_NODE") && !env().get("IS_BROWSER")) {
  env().setPlatform("node", new PlatformNode());
}

// node_modules/@tensorflow/tfjs-core/dist/base_side_effects.js
getOrMakeEngine();
var opHandler2 = {
  buffer,
  cast,
  clone,
  print
};
setOpHandler(opHandler2);

// node_modules/@tensorflow/tfjs-converter/dist/data/compiled_api.js
var DataType;
(function(DataType2) {
  DataType2[DataType2["DT_INVALID"] = 0] = "DT_INVALID";
  DataType2[DataType2["DT_FLOAT"] = 1] = "DT_FLOAT";
  DataType2[DataType2["DT_DOUBLE"] = 2] = "DT_DOUBLE";
  DataType2[DataType2["DT_INT32"] = 3] = "DT_INT32";
  DataType2[DataType2["DT_UINT8"] = 4] = "DT_UINT8";
  DataType2[DataType2["DT_INT16"] = 5] = "DT_INT16";
  DataType2[DataType2["DT_INT8"] = 6] = "DT_INT8";
  DataType2[DataType2["DT_STRING"] = 7] = "DT_STRING";
  DataType2[DataType2["DT_COMPLEX64"] = 8] = "DT_COMPLEX64";
  DataType2[DataType2["DT_INT64"] = 9] = "DT_INT64";
  DataType2[DataType2["DT_BOOL"] = 10] = "DT_BOOL";
  DataType2[DataType2["DT_QINT8"] = 11] = "DT_QINT8";
  DataType2[DataType2["DT_QUINT8"] = 12] = "DT_QUINT8";
  DataType2[DataType2["DT_QINT32"] = 13] = "DT_QINT32";
  DataType2[DataType2["DT_BFLOAT16"] = 14] = "DT_BFLOAT16";
  DataType2[DataType2["DT_QINT16"] = 15] = "DT_QINT16";
  DataType2[DataType2["DT_QUINT16"] = 16] = "DT_QUINT16";
  DataType2[DataType2["DT_UINT16"] = 17] = "DT_UINT16";
  DataType2[DataType2["DT_COMPLEX128"] = 18] = "DT_COMPLEX128";
  DataType2[DataType2["DT_HALF"] = 19] = "DT_HALF";
  DataType2[DataType2["DT_RESOURCE"] = 20] = "DT_RESOURCE";
  DataType2[DataType2["DT_VARIANT"] = 21] = "DT_VARIANT";
  DataType2[DataType2["DT_UINT32"] = 22] = "DT_UINT32";
  DataType2[DataType2["DT_UINT64"] = 23] = "DT_UINT64";
  DataType2[DataType2["DT_FLOAT_REF"] = 101] = "DT_FLOAT_REF";
  DataType2[DataType2["DT_DOUBLE_REF"] = 102] = "DT_DOUBLE_REF";
  DataType2[DataType2["DT_INT32_REF"] = 103] = "DT_INT32_REF";
  DataType2[DataType2["DT_UINT8_REF"] = 104] = "DT_UINT8_REF";
  DataType2[DataType2["DT_INT16_REF"] = 105] = "DT_INT16_REF";
  DataType2[DataType2["DT_INT8_REF"] = 106] = "DT_INT8_REF";
  DataType2[DataType2["DT_STRING_REF"] = 107] = "DT_STRING_REF";
  DataType2[DataType2["DT_COMPLEX64_REF"] = 108] = "DT_COMPLEX64_REF";
  DataType2[DataType2["DT_INT64_REF"] = 109] = "DT_INT64_REF";
  DataType2[DataType2["DT_BOOL_REF"] = 110] = "DT_BOOL_REF";
  DataType2[DataType2["DT_QINT8_REF"] = 111] = "DT_QINT8_REF";
  DataType2[DataType2["DT_QUINT8_REF"] = 112] = "DT_QUINT8_REF";
  DataType2[DataType2["DT_QINT32_REF"] = 113] = "DT_QINT32_REF";
  DataType2[DataType2["DT_BFLOAT16_REF"] = 114] = "DT_BFLOAT16_REF";
  DataType2[DataType2["DT_QINT16_REF"] = 115] = "DT_QINT16_REF";
  DataType2[DataType2["DT_QUINT16_REF"] = 116] = "DT_QUINT16_REF";
  DataType2[DataType2["DT_UINT16_REF"] = 117] = "DT_UINT16_REF";
  DataType2[DataType2["DT_COMPLEX128_REF"] = 118] = "DT_COMPLEX128_REF";
  DataType2[DataType2["DT_HALF_REF"] = 119] = "DT_HALF_REF";
  DataType2[DataType2["DT_RESOURCE_REF"] = 120] = "DT_RESOURCE_REF";
  DataType2[DataType2["DT_VARIANT_REF"] = 121] = "DT_VARIANT_REF";
  DataType2[DataType2["DT_UINT32_REF"] = 122] = "DT_UINT32_REF";
  DataType2[DataType2["DT_UINT64_REF"] = 123] = "DT_UINT64_REF";
})(DataType || (DataType = {}));
var SaverDef;
(function(SaverDef2) {
  let CheckpointFormatVersion;
  (function(CheckpointFormatVersion2) {
    CheckpointFormatVersion2[CheckpointFormatVersion2["LEGACY"] = 0] = "LEGACY";
    CheckpointFormatVersion2[CheckpointFormatVersion2["V1"] = 1] = "V1";
    CheckpointFormatVersion2[CheckpointFormatVersion2["V2"] = 2] = "V2";
  })(CheckpointFormatVersion = SaverDef2.CheckpointFormatVersion || (SaverDef2.CheckpointFormatVersion = {}));
})(SaverDef || (SaverDef = {}));

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js
function getParamValue(paramName, node, tensorMap, context, resourceManager) {
  const inputParam = node.inputParams[paramName];
  if (inputParam && inputParam.inputIndexStart !== void 0) {
    const start = inputParam.inputIndexStart;
    const end = inputParam.inputIndexEnd === 0 ? void 0 : inputParam.inputIndexEnd === void 0 ? start + 1 : inputParam.inputIndexEnd;
    if (inputParam.type === "tensor") {
      return getTensor(node.inputNames[inputParam.inputIndexStart], tensorMap, context, resourceManager);
    }
    if (inputParam.type === "tensors") {
      const inputs = node.inputNames.slice(start, end);
      return inputs.map((name) => getTensor(name, tensorMap, context, resourceManager));
    }
    const tensor2 = getTensor(node.inputNames.slice(start)[0], tensorMap, context, resourceManager);
    const data = tensor2.dataSync();
    return inputParam.type === "number" ? data[0] : util_exports.toNestedArray(tensor2.shape, data);
  }
  const attrParam = node.attrParams[paramName];
  return attrParam && attrParam.value;
}
function getTensor(name, tensorsMap, context, resourceManager) {
  const [nodeName, index] = parseNodeName(name);
  if (resourceManager != null) {
    const tensor2 = resourceManager.getHashTableHandleByName(nodeName);
    if (tensor2 != null) {
      return tensor2;
    }
  }
  const contextId = context.currentContextIds.find((contextId2) => {
    return !!tensorsMap[getNodeNameWithContextId(nodeName, contextId2)];
  });
  return contextId !== void 0 ? tensorsMap[getNodeNameWithContextId(nodeName, contextId)][index] : void 0;
}
function getTensorsForCurrentContenxt(name, tensorsMap, context) {
  return tensorsMap[getNodeNameWithContextId(name, context.currentContextId)];
}
function getNodeNameAndIndex(inputName, context) {
  const [nodeName, index, outputName] = parseNodeName(inputName);
  return [
    getNodeNameWithContextId(nodeName, context && context.currentContextId),
    index,
    outputName
  ];
}
function getNodeNameWithContextId(name, contextId) {
  return !!contextId ? `${name}-${contextId}` : name;
}
function parseNodeName(name) {
  const parts = name.split(":");
  if (parts.length === 1) {
    return [name, 0, void 0];
  }
  const nodeName = parts[0];
  const outputName = parts.length === 3 ? parts[1] : void 0;
  const index = Number(parts[parts.length - 1]);
  return [nodeName, index, outputName];
}
function getPadding(node, tensorMap, context) {
  let pad2 = getParamValue("pad", node, tensorMap, context);
  if (pad2 === "explicit") {
    pad2 = getParamValue("explicitPaddings", node, tensorMap, context);
    const explicitPadding = [[0, 0], [0, 0], [0, 0], [0, 0]];
    for (let i = 0; i < 4; i++) {
      explicitPadding[i][0] = pad2[i * 2];
      explicitPadding[i][1] = pad2[i * 2 + 1];
    }
    return explicitPadding;
  }
  return pad2;
}
function cloneTensor(tensor2) {
  return tensor2.kept ? tensor2 : clone(tensor2);
}

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/arithmetic.js
var arithmetic_exports = {};
__export(arithmetic_exports, {
  json: () => json
});
var json = [
  {
    "tfOpName": "Add",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "AddV2",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "AddN",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "end": 0,
        "name": "tensors",
        "type": "tensors"
      }
    ]
  },
  {
    "tfOpName": "BiasAdd",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Sub",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "RealDiv",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Div",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "DivNoNan",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "FloorDiv",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Mul",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Maximum",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Minimum",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Pow",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "SquaredDifference",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Mod",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "FloorMod",
    "category": "arithmetic",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/basic_math.js
var basic_math_exports = {};
__export(basic_math_exports, {
  json: () => json2
});
var json2 = [
  {
    "tfOpName": "Abs",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Acos",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Asin",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Atan",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Atan2",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "y",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Ceil",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "ClipByValue",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "clipValueMin",
        "type": "number"
      },
      {
        "start": 2,
        "name": "clipValueMax",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Complex",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "real",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "imag",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "ComplexAbs",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Cos",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Cosh",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Elu",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Exp",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Floor",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Log",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Imag",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "Tout",
        "name": "outputType",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Neg",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Real",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "Tout",
        "name": "outputType",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Prelu",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "alpha",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Relu",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Relu6",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Selu",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Sigmoid",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Sin",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Sinh",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Sqrt",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Rsqrt",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Square",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Tan",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Tanh",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Sign",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Round",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Expm1",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Log1p",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Reciprocal",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Softplus",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Asinh",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Acosh",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Atanh",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Erf",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Prod",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axes",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "keep_dims",
        "name": "keepDims",
        "type": "bool",
        "notSupported": true
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LeakyRelu",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "alpha",
        "name": "alpha",
        "type": "number",
        "defaultValue": 0.2
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "IsNan",
    "category": "basic_math",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/control.js
var control_exports = {};
__export(control_exports, {
  json: () => json3
});
var json3 = [
  {
    "tfOpName": "EmptyTensorList",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "elementShape",
        "type": "shape"
      },
      {
        "start": 1,
        "name": "maxNumElements",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "LoopCond",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "pred",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "Switch",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "data",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "pred",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "Merge",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "end": 0,
        "name": "tensors",
        "type": "tensors"
      }
    ]
  },
  {
    "tfOpName": "Enter",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensor",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "frame_name",
        "name": "frameName",
        "type": "string"
      },
      {
        "tfName": "is_constant",
        "name": "isConstant",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "Exit",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensor",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "NextIteration",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensor",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "TensorArrayV3",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "size",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype"
      },
      {
        "tfName": "element_shape",
        "name": "elementShape",
        "type": "shape"
      },
      {
        "tfName": "dynamic_size",
        "name": "dynamicSize",
        "type": "bool"
      },
      {
        "tfName": "clear_after_read",
        "name": "clearAfterRead",
        "type": "bool"
      },
      {
        "tfName": "identical_element_shapes",
        "name": "identicalElementShapes",
        "type": "bool"
      },
      {
        "tfName": "tensor_array_name",
        "name": "name",
        "type": "string"
      }
    ]
  },
  {
    "tfOpName": "TensorArrayWriteV3",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorArrayId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "index",
        "type": "number"
      },
      {
        "start": 2,
        "name": "tensor",
        "type": "tensor"
      },
      {
        "start": 3,
        "name": "flowIn",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "TensorArrayReadV3",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorArrayId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "index",
        "type": "number"
      },
      {
        "start": 2,
        "name": "flowIn",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "TensorArrayGatherV3",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorArrayId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "flowIn",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype"
      },
      {
        "tfName": "element_shape",
        "name": "elementShape",
        "type": "shape"
      }
    ]
  },
  {
    "tfOpName": "TensorArrayScatterV3",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorArrayId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "tensor",
        "type": "tensor"
      },
      {
        "start": 3,
        "name": "flowIn",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorArrayConcatV3",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorArrayId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "flowIn",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype"
      },
      {
        "tfName": "element_shape_except0",
        "name": "elementShapeExcept0",
        "type": "shape",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "TensorArraySplitV3",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorArrayId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "tensor",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "lengths",
        "type": "number[]"
      },
      {
        "start": 3,
        "name": "flowIn",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorArraySizeV3",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorArrayId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "flowIn",
        "type": "number"
      }
    ]
  },
  {
    "tfOpName": "TensorArrayCloseV3",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorArrayId",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "StatelessIf",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "cond",
        "type": "tensor"
      },
      {
        "start": 1,
        "end": 0,
        "name": "args",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "then_branch",
        "name": "thenBranch",
        "type": "func"
      },
      {
        "tfName": "else_branch",
        "name": "elseBranch",
        "type": "func"
      }
    ]
  },
  {
    "tfOpName": "If",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "cond",
        "type": "tensor"
      },
      {
        "start": 1,
        "end": 0,
        "name": "args",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "then_branch",
        "name": "thenBranch",
        "type": "func"
      },
      {
        "tfName": "else_branch",
        "name": "elseBranch",
        "type": "func"
      }
    ]
  },
  {
    "tfOpName": "StatelessWhile",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "end": 0,
        "name": "args",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "cond",
        "name": "cond",
        "type": "func"
      },
      {
        "tfName": "body",
        "name": "body",
        "type": "func"
      }
    ]
  },
  {
    "tfOpName": "While",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "end": 0,
        "name": "args",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "cond",
        "name": "cond",
        "type": "func"
      },
      {
        "tfName": "body",
        "name": "body",
        "type": "func"
      }
    ]
  },
  {
    "tfOpName": "TensorListScatter",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensor",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "elementShape",
        "type": "shape"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListScatterV2",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensor",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "elementShape",
        "type": "shape"
      },
      {
        "start": 3,
        "name": "numElements",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListGather",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "elementShape",
        "type": "shape"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListGetItem",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "index",
        "type": "number"
      },
      {
        "start": 2,
        "name": "elementShape",
        "type": "shape"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListSetItem",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "index",
        "type": "number"
      },
      {
        "start": 2,
        "name": "tensor",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListReserve",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "elementShape",
        "type": "shape"
      },
      {
        "start": 1,
        "name": "numElements",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListFromTensor",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensor",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "elementShape",
        "type": "shape"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListStack",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "elementShape",
        "type": "shape"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      },
      {
        "tfName": "num_elements",
        "name": "numElements",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListSplit",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensor",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "elementShape",
        "type": "shape"
      },
      {
        "start": 2,
        "name": "lengths",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListConcat",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "element_shape",
        "name": "elementShape",
        "type": "shape"
      },
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListConcatV2",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "element_shape",
        "name": "elementShape",
        "type": "shape"
      },
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListPopBack",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "elementShape",
        "type": "shape"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListPushBack",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "tensor",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "element_dtype",
        "name": "elementDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TensorListLength",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "TensorListResize",
    "category": "control",
    "inputs": [
      {
        "start": 0,
        "name": "tensorListId",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "size",
        "type": "number"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/convolution.js
var convolution_exports = {};
__export(convolution_exports, {
  json: () => json4
});
var json4 = [
  {
    "tfOpName": "AvgPool",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "notSupported": true
      },
      {
        "tfName": "ksize",
        "name": "kernelSize",
        "type": "number[]"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "MaxPool",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "notSupported": true
      },
      {
        "tfName": "ksize",
        "name": "kernelSize",
        "type": "number[]"
      },
      {
        "tfName": "explicit_paddings",
        "name": "explicitPaddings",
        "type": "number[]",
        "defaultValue": [],
        "notSupported": true
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "MaxPoolWithArgmax",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "ksize",
        "name": "kernelSize",
        "type": "number[]"
      },
      {
        "tfName": "include_batch_in_index",
        "name": "includeBatchInIndex",
        "type": "bool"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "AvgPool3D",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "notSupported": true
      },
      {
        "tfName": "ksize",
        "name": "kernelSize",
        "type": "number[]"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "MaxPool3D",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "notSupported": true
      },
      {
        "tfName": "ksize",
        "name": "kernelSize",
        "type": "number[]"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Conv1D",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "filter",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "stride",
        "name": "stride",
        "type": "number"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "defaultValue": "NWC"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "dilation",
        "name": "dilation",
        "type": "number",
        "defaultValue": 1
      }
    ]
  },
  {
    "tfOpName": "Conv2D",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "filter",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "useCudnnOnGpu",
        "name": "useCudnnOnGpu",
        "type": "bool"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "defaultValue": "NHWC"
      },
      {
        "tfName": "explicit_paddings",
        "name": "explicitPaddings",
        "type": "number[]",
        "defaultValue": []
      },
      {
        "tfName": "dilations",
        "name": "dilations",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "_FusedConv2D",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "filter",
        "type": "tensor"
      },
      {
        "start": 2,
        "end": 0,
        "name": "args",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "num_args",
        "name": "numArgs",
        "type": "number"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "explicit_paddings",
        "name": "explicitPaddings",
        "type": "number[]",
        "defaultValue": []
      },
      {
        "tfName": "use_cudnn_on_gpu",
        "name": "useCudnnOnGpu",
        "type": "bool",
        "defaultValue": true
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "defaultValue": "NHWC"
      },
      {
        "tfName": "dilations",
        "name": "dilations",
        "type": "number[]",
        "defaultValue": [
          1,
          1,
          1,
          1
        ]
      },
      {
        "tfName": "fused_ops",
        "name": "fusedOps",
        "type": "string[]",
        "defaultValue": []
      },
      {
        "tfName": "epsilon",
        "name": "epsilon",
        "type": "number",
        "defaultValue": 1e-4
      },
      {
        "tfName": "leakyrelu_alpha",
        "name": "leakyreluAlpha",
        "type": "number",
        "defaultValue": 0.2
      }
    ]
  },
  {
    "tfOpName": "Conv2DBackpropInput",
    "category": "convolution",
    "inputs": [
      {
        "start": 2,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "filter",
        "type": "tensor"
      },
      {
        "start": 0,
        "name": "outputShape",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "notSupported": true
      },
      {
        "tfName": "explicit_paddings",
        "name": "explicitPaddings",
        "type": "number[]",
        "defaultValue": []
      },
      {
        "tfName": "dilations",
        "name": "dilations",
        "type": "number[]",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "DepthwiseConv2d",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "input",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "filter",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "defaultValue": "NHWC"
      },
      {
        "tfName": "explicit_paddings",
        "name": "explicitPaddings",
        "type": "number[]",
        "defaultValue": []
      },
      {
        "tfName": "dilations",
        "name": "dilations",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "DepthwiseConv2dNative",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "input",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "filter",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "defaultValue": "NHWC"
      },
      {
        "tfName": "explicit_paddings",
        "name": "explicitPaddings",
        "type": "number[]",
        "defaultValue": []
      },
      {
        "tfName": "dilations",
        "name": "dilations",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "FusedDepthwiseConv2dNative",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "filter",
        "type": "tensor"
      },
      {
        "start": 2,
        "end": 0,
        "name": "args",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "num_args",
        "name": "numArgs",
        "type": "number"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "defaultValue": "NHWC"
      },
      {
        "tfName": "dilations",
        "name": "dilations",
        "type": "number[]",
        "defaultValue": [
          1,
          1,
          1,
          1
        ]
      },
      {
        "tfName": "fused_ops",
        "name": "fusedOps",
        "type": "string[]",
        "defaultValue": []
      },
      {
        "tfName": "explicit_paddings",
        "name": "explicitPaddings",
        "type": "number[]",
        "defaultValue": []
      }
    ]
  },
  {
    "tfOpName": "Conv3D",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "filter",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "defaultValue": "NHWC"
      },
      {
        "tfName": "dilations",
        "name": "dilations",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "Dilation2D",
    "category": "convolution",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "filter",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "strides",
        "name": "strides",
        "type": "number[]"
      },
      {
        "tfName": "rates",
        "name": "dilations",
        "type": "number[]"
      },
      {
        "tfName": "padding",
        "name": "pad",
        "type": "string"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/creation.js
var creation_exports = {};
__export(creation_exports, {
  json: () => json5
});
var json5 = [
  {
    "tfOpName": "Fill",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "shape",
        "type": "number[]"
      },
      {
        "start": 1,
        "name": "value",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "LinSpace",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "start",
        "type": "number"
      },
      {
        "start": 1,
        "name": "stop",
        "type": "number"
      },
      {
        "start": 2,
        "name": "num",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "OneHot",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "indices",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "depth",
        "type": "number"
      },
      {
        "start": 2,
        "name": "onValue",
        "type": "number",
        "defaultValue": 1
      },
      {
        "start": 3,
        "name": "offValue",
        "type": "number",
        "defaultValue": 0
      }
    ],
    "attrs": [
      {
        "tfName": "axis",
        "name": "axis",
        "type": "number",
        "notSupported": true
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Ones",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "shape",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "OnesLike",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "RandomStandardNormal",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "shape",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "seed",
        "name": "seed",
        "type": "number",
        "defaultValue": 0
      },
      {
        "tfName": "seed2",
        "name": "seed2",
        "type": "number",
        "defaultValue": 0,
        "notSupported": true
      },
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype"
      },
      {
        "tfName": "T",
        "name": "T",
        "type": "number",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "RandomUniform",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "shape",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "minval",
        "name": "minval",
        "type": "number",
        "defaultValue": 0
      },
      {
        "tfName": "maxval",
        "name": "maxval",
        "type": "number",
        "defaultValue": 1
      },
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype"
      },
      {
        "tfName": "seed",
        "name": "seed",
        "type": "number",
        "defaultValue": 0
      },
      {
        "tfName": "seed2",
        "name": "seed2",
        "type": "number",
        "defaultValue": 0,
        "notSupported": true
      },
      {
        "tfName": "T",
        "name": "T",
        "type": "number",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Range",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "start",
        "type": "number"
      },
      {
        "start": 1,
        "name": "stop",
        "type": "number"
      },
      {
        "start": 2,
        "name": "step",
        "type": "number",
        "defaultValue": 0
      }
    ],
    "attrs": [
      {
        "tfName": "Tidx",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "TruncatedNormal",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "shape",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "means",
        "name": "mean",
        "type": "number",
        "defaultValue": 0
      },
      {
        "tfName": "stddev",
        "name": "stdDev",
        "type": "number",
        "defaultValue": 1
      },
      {
        "tfName": "seed",
        "name": "seed",
        "type": "number"
      },
      {
        "tfName": "seed2",
        "name": "seed2",
        "type": "number",
        "defaultValue": 0,
        "notSupported": true
      },
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype"
      },
      {
        "tfName": "T",
        "name": "T",
        "type": "number",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Zeros",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "shape",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "ZerosLike",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "Multinomial",
    "category": "creation",
    "inputs": [
      {
        "start": 0,
        "name": "logits",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "numSamples",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "seed",
        "name": "seed",
        "type": "number"
      },
      {
        "tfName": "seed2",
        "name": "seed2",
        "type": "number"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype"
      },
      {
        "tfName": "output_dtype",
        "name": "output_dtype",
        "type": "dtype"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/dynamic.js
var dynamic_exports = {};
__export(dynamic_exports, {
  json: () => json6
});
var json6 = [
  {
    "tfOpName": "NonMaxSuppressionV2",
    "category": "dynamic",
    "inputs": [
      {
        "start": 0,
        "name": "boxes",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "scores",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "maxOutputSize",
        "type": "number"
      },
      {
        "start": 3,
        "name": "iouThreshold",
        "type": "number"
      }
    ]
  },
  {
    "tfOpName": "NonMaxSuppressionV3",
    "category": "dynamic",
    "inputs": [
      {
        "start": 0,
        "name": "boxes",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "scores",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "maxOutputSize",
        "type": "number"
      },
      {
        "start": 3,
        "name": "iouThreshold",
        "type": "number"
      },
      {
        "start": 4,
        "name": "scoreThreshold",
        "type": "number"
      }
    ]
  },
  {
    "tfOpName": "NonMaxSuppressionV4",
    "category": "dynamic",
    "inputs": [
      {
        "start": 0,
        "name": "boxes",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "scores",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "maxOutputSize",
        "type": "number"
      },
      {
        "start": 3,
        "name": "iouThreshold",
        "type": "number"
      },
      {
        "start": 4,
        "name": "scoreThreshold",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "T_threshold",
        "name": "threshold",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "pad_to_max_output_size",
        "name": "padToMaxOutputSize",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "NonMaxSuppressionV5",
    "category": "dynamic",
    "inputs": [
      {
        "start": 0,
        "name": "boxes",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "scores",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "maxOutputSize",
        "type": "number"
      },
      {
        "start": 3,
        "name": "iouThreshold",
        "type": "number"
      },
      {
        "start": 4,
        "name": "scoreThreshold",
        "type": "number"
      },
      {
        "start": 5,
        "name": "softNmsSigma",
        "type": "number"
      }
    ]
  },
  {
    "tfOpName": "Where",
    "category": "dynamic",
    "inputs": [
      {
        "start": 0,
        "name": "condition",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "ListDiff",
    "category": "dynamic",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "y",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/evaluation.js
var evaluation_exports = {};
__export(evaluation_exports, {
  json: () => json7
});
var json7 = [
  {
    "tfOpName": "LowerBound",
    "category": "evaluation",
    "inputs": [
      {
        "start": 0,
        "name": "sortedSequence",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "values",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "TopKV2",
    "category": "evaluation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "k",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "sorted",
        "name": "sorted",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "UpperBound",
    "category": "evaluation",
    "inputs": [
      {
        "start": 0,
        "name": "sortedSequence",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "values",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "Unique",
    "category": "evaluation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "UniqueV2",
    "category": "evaluation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/graph.js
var graph_exports = {};
__export(graph_exports, {
  json: () => json8
});
var json8 = [
  {
    "tfOpName": "PlaceholderWithDefault",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "name": "default",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "shape",
        "name": "shape",
        "type": "shape"
      },
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "Placeholder",
    "category": "graph",
    "attrs": [
      {
        "tfName": "shape",
        "name": "shape",
        "type": "shape"
      },
      {
        "tfName": "dtype",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "Const",
    "category": "graph"
  },
  {
    "tfOpName": "Identity",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "IdentityN",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "end": 0,
        "name": "x",
        "type": "tensors"
      }
    ]
  },
  {
    "tfOpName": "Snapshot",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "Rank",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "Size",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "Shape",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "ShapeN",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "end": 0,
        "name": "x",
        "type": "tensors"
      }
    ]
  },
  {
    "tfOpName": "Print",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "data",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "message",
        "name": "message",
        "type": "string"
      },
      {
        "tfName": "first_n",
        "name": "firstN",
        "type": "number",
        "notSupported": true
      },
      {
        "tfName": "summarize",
        "name": "summarize",
        "type": "number",
        "defaultValue": 3
      }
    ]
  },
  {
    "tfOpName": "NoOp",
    "category": "graph",
    "inputs": []
  },
  {
    "tfOpName": "StopGradient",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "FakeQuantWithMinMaxVars",
    "category": "graph",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "min",
        "name": "min",
        "type": "number"
      },
      {
        "tfName": "max",
        "name": "max",
        "type": "number"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/hash_table.js
var hash_table_exports = {};
__export(hash_table_exports, {
  json: () => json9
});
var json9 = [
  {
    "tfOpName": "HashTable",
    "category": "hash_table",
    "inputs": [],
    "attrs": [
      {
        "tfName": "shared_name",
        "name": "sharedName",
        "type": "string"
      },
      {
        "tfName": "use_node_name_sharing",
        "name": "useNodeNameSharing",
        "type": "bool"
      },
      {
        "tfName": "key_dtype",
        "name": "keyDType",
        "type": "dtype"
      },
      {
        "tfName": "value_dtype",
        "name": "valueDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "HashTableV2",
    "category": "hash_table",
    "inputs": [],
    "attrs": [
      {
        "tfName": "shared_name",
        "name": "sharedName",
        "type": "string"
      },
      {
        "tfName": "use_node_name_sharing",
        "name": "useNodeNameSharing",
        "type": "bool"
      },
      {
        "tfName": "key_dtype",
        "name": "keyDType",
        "type": "dtype"
      },
      {
        "tfName": "value_dtype",
        "name": "valueDType",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "LookupTableImport",
    "category": "hash_table",
    "inputs": [
      {
        "start": 0,
        "name": "tableHandle",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "keys",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "values",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "Tin",
        "name": "tIn",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "Tout",
        "name": "tOut",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LookupTableImportV2",
    "category": "hash_table",
    "inputs": [
      {
        "start": 0,
        "name": "tableHandle",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "keys",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "values",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "Tin",
        "name": "tIn",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "Tout",
        "name": "tOut",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LookupTableFind",
    "category": "hash_table",
    "inputs": [
      {
        "start": 0,
        "name": "tableHandle",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "keys",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "defaultValue",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "Tin",
        "name": "tIn",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "Tout",
        "name": "tOut",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LookupTableFindV2",
    "category": "hash_table",
    "inputs": [
      {
        "start": 0,
        "name": "tableHandle",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "keys",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "defaultValue",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "Tin",
        "name": "tIn",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "Tout",
        "name": "tOut",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LookupTableSize",
    "category": "hash_table",
    "inputs": [
      {
        "start": 0,
        "name": "tableHandle",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "LookupTableSizeV2",
    "category": "hash_table",
    "inputs": [
      {
        "start": 0,
        "name": "tableHandle",
        "type": "tensor"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/image.js
var image_exports = {};
__export(image_exports, {
  json: () => json10
});
var json10 = [
  {
    "tfOpName": "ResizeBilinear",
    "category": "image",
    "inputs": [
      {
        "start": 0,
        "name": "images",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "size",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "align_corners",
        "name": "alignCorners",
        "type": "bool"
      },
      {
        "tfName": "half_pixel_centers",
        "name": "halfPixelCenters",
        "type": "bool"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "ResizeNearestNeighbor",
    "category": "image",
    "inputs": [
      {
        "start": 0,
        "name": "images",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "size",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "align_corners",
        "name": "alignCorners",
        "type": "bool"
      },
      {
        "tfName": "half_pixel_centers",
        "name": "halfPixelCenters",
        "type": "bool"
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "CropAndResize",
    "category": "image",
    "inputs": [
      {
        "start": 0,
        "name": "image",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "boxes",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "boxInd",
        "type": "tensor"
      },
      {
        "start": 3,
        "name": "cropSize",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "method",
        "name": "method",
        "type": "string"
      },
      {
        "tfName": "extrapolation_value",
        "name": "extrapolationValue",
        "type": "number"
      }
    ]
  },
  {
    "tfOpName": "ImageProjectiveTransformV3",
    "category": "image",
    "inputs": [
      {
        "start": 0,
        "name": "images",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "transforms",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "outputShape",
        "type": "number[]"
      },
      {
        "start": 3,
        "name": "fillValue",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "interpolation",
        "name": "interpolation",
        "type": "string"
      },
      {
        "tfName": "fill_mode",
        "name": "fillMode",
        "type": "string"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/logical.js
var logical_exports = {};
__export(logical_exports, {
  json: () => json11
});
var json11 = [
  {
    "tfOpName": "Equal",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "NotEqual",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Greater",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "GreaterEqual",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Less",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LessEqual",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LogicalAnd",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LogicalNot",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LogicalOr",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Select",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "condition",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "SelectV2",
    "category": "logical",
    "inputs": [
      {
        "start": 0,
        "name": "condition",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/matrices.js
var matrices_exports = {};
__export(matrices_exports, {
  json: () => json12
});
var json12 = [
  {
    "tfOpName": "_FusedMatMul",
    "category": "matrices",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      },
      {
        "start": 2,
        "end": 0,
        "name": "args",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "num_args",
        "name": "numArgs",
        "type": "number"
      },
      {
        "tfName": "fused_ops",
        "name": "fusedOps",
        "type": "string[]",
        "defaultValue": []
      },
      {
        "tfName": "epsilon",
        "name": "epsilon",
        "type": "number",
        "defaultValue": 1e-4
      },
      {
        "tfName": "transpose_a",
        "name": "transposeA",
        "type": "bool",
        "defaultValue": false
      },
      {
        "tfName": "transpose_b",
        "name": "transposeB",
        "type": "bool",
        "defaultValue": false
      },
      {
        "tfName": "leakyrelu_alpha",
        "name": "leakyreluAlpha",
        "type": "number",
        "defaultValue": 0.2
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "MatMul",
    "category": "matrices",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "transpose_a",
        "name": "transposeA",
        "type": "bool",
        "defaultValue": false
      },
      {
        "tfName": "transpose_b",
        "name": "transposeB",
        "type": "bool",
        "defaultValue": false
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "BatchMatMul",
    "category": "matrices",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "adj_x",
        "name": "transposeA",
        "type": "bool",
        "defaultValue": false
      },
      {
        "tfName": "adj_y",
        "name": "transposeB",
        "type": "bool",
        "defaultValue": false
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "BatchMatMulV2",
    "category": "matrices",
    "inputs": [
      {
        "start": 0,
        "name": "a",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "b",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "adj_x",
        "name": "transposeA",
        "type": "bool",
        "defaultValue": false
      },
      {
        "tfName": "adj_y",
        "name": "transposeB",
        "type": "bool",
        "defaultValue": false
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Transpose",
    "category": "matrices",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "perm",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Einsum",
    "category": "matrices",
    "inputs": [
      {
        "start": 0,
        "end": 0,
        "name": "tensors",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "equation",
        "name": "equation",
        "type": "string"
      },
      {
        "tfName": "N",
        "name": "n",
        "type": "number",
        "defaultValue": 2
      },
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/normalization.js
var normalization_exports = {};
__export(normalization_exports, {
  json: () => json13
});
var json13 = [
  {
    "tfOpName": "EuclideanNorm",
    "category": "normalization",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "keep_dims",
        "name": "keepDims",
        "type": "bool",
        "defaultValue": false
      }
    ]
  },
  {
    "tfOpName": "FusedBatchNorm",
    "category": "normalization",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "scale",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "offset",
        "type": "tensor"
      },
      {
        "start": 3,
        "name": "mean",
        "type": "tensor"
      },
      {
        "start": 4,
        "name": "variance",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "epsilon",
        "name": "epsilon",
        "type": "number",
        "defaultValue": 1e-3
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "FusedBatchNormV2",
    "category": "normalization",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "scale",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "offset",
        "type": "tensor"
      },
      {
        "start": 3,
        "name": "mean",
        "type": "tensor"
      },
      {
        "start": 4,
        "name": "variance",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "epsilon",
        "name": "epsilon",
        "type": "number",
        "defaultValue": 1e-3
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "FusedBatchNormV3",
    "category": "normalization",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "scale",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "offset",
        "type": "tensor"
      },
      {
        "start": 3,
        "name": "mean",
        "type": "tensor"
      },
      {
        "start": 4,
        "name": "variance",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "epsilon",
        "name": "epsilon",
        "type": "number",
        "defaultValue": 1e-3
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "LRN",
    "category": "normalization",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "depth_radius",
        "name": "radius",
        "type": "number",
        "defaultValue": 5
      },
      {
        "tfName": "bias",
        "name": "bias",
        "type": "number",
        "defaultValue": 1
      },
      {
        "tfName": "alpha",
        "name": "alpha",
        "type": "number",
        "defaultValue": 1
      },
      {
        "tfName": "beta",
        "name": "beta",
        "type": "number",
        "defaultValue": 0.5
      }
    ]
  },
  {
    "tfOpName": "Softmax",
    "category": "normalization",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "LogSoftmax",
    "category": "normalization",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "SparseToDense",
    "category": "normalization",
    "inputs": [
      {
        "start": 0,
        "name": "sparseIndices",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "outputShape",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "sparseValues",
        "type": "tensor"
      },
      {
        "start": 3,
        "name": "defaultValue",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "validate_indices",
        "name": "validateIndices",
        "type": "bool",
        "defaultValue": true,
        "notSupported": true
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/reduction.js
var reduction_exports = {};
__export(reduction_exports, {
  json: () => json14
});
var json14 = [
  {
    "tfOpName": "Bincount",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "size",
        "type": "number"
      },
      {
        "start": 2,
        "name": "weights",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "DenseBincount",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "size",
        "type": "number"
      },
      {
        "start": 2,
        "name": "weights",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "binary_output",
        "name": "binaryOutput",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "Max",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "keep_dims",
        "name": "keepDims",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "Mean",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "keep_dims",
        "name": "keepDims",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "Min",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "keep_dims",
        "name": "keepDims",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "Sum",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "keep_dims",
        "name": "keepDims",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "All",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "keep_dims",
        "name": "keepDims",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "Any",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "keep_dims",
        "name": "keepDims",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "ArgMax",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number"
      }
    ]
  },
  {
    "tfOpName": "ArgMin",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number"
      }
    ]
  },
  {
    "tfOpName": "Prod",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "keep_dims",
        "name": "keepDims",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "Cumprod",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "exclusive",
        "name": "exclusive",
        "type": "bool"
      },
      {
        "tfName": "reverse",
        "name": "reverse",
        "type": "bool"
      }
    ]
  },
  {
    "tfOpName": "Cumsum",
    "category": "reduction",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "exclusive",
        "name": "exclusive",
        "type": "bool"
      },
      {
        "tfName": "reverse",
        "name": "reverse",
        "type": "bool"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/slice_join.js
var slice_join_exports = {};
__export(slice_join_exports, {
  json: () => json15
});
var json15 = [
  {
    "tfOpName": "ConcatV2",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "end": -1,
        "name": "tensors",
        "type": "tensors"
      },
      {
        "start": -1,
        "name": "axis",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "N",
        "name": "n",
        "type": "number",
        "defaultValue": 2
      }
    ]
  },
  {
    "tfOpName": "Concat",
    "category": "slice_join",
    "inputs": [
      {
        "start": 1,
        "end": 0,
        "name": "tensors",
        "type": "tensors"
      },
      {
        "start": 0,
        "name": "axis",
        "type": "number"
      }
    ],
    "attrs": [
      {
        "tfName": "N",
        "name": "n",
        "type": "number",
        "defaultValue": 2
      }
    ]
  },
  {
    "tfOpName": "GatherV2",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "axis",
        "type": "number",
        "defaultValue": 0
      }
    ],
    "attrs": [
      {
        "tfName": "batch_dims",
        "name": "batchDims",
        "type": "number",
        "defaultValue": 0
      }
    ]
  },
  {
    "tfOpName": "Gather",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "validate_indices",
        "name": "validateIndices",
        "type": "bool",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Reverse",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "dims",
        "type": "bool[]"
      }
    ]
  },
  {
    "tfOpName": "ReverseV2",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "Slice",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "begin",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "size",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "StridedSlice",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "begin",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "end",
        "type": "number[]"
      },
      {
        "start": 3,
        "name": "strides",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "begin_mask",
        "name": "beginMask",
        "type": "number",
        "defaultValue": 0
      },
      {
        "tfName": "end_mask",
        "name": "endMask",
        "type": "number",
        "defaultValue": 0
      },
      {
        "tfName": "new_axis_mask",
        "name": "newAxisMask",
        "type": "number",
        "defaultValue": 0
      },
      {
        "tfName": "ellipsis_mask",
        "name": "ellipsisMask",
        "type": "number",
        "defaultValue": 0
      },
      {
        "tfName": "shrink_axis_mask",
        "name": "shrinkAxisMask",
        "type": "number",
        "defaultValue": 0
      }
    ]
  },
  {
    "tfOpName": "Pack",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "end": 0,
        "name": "tensors",
        "type": "tensors"
      }
    ],
    "attrs": [
      {
        "tfName": "axis",
        "name": "axis",
        "type": "number",
        "defaultValue": 0
      }
    ]
  },
  {
    "tfOpName": "Unpack",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "tensor",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "axis",
        "name": "axis",
        "type": "number",
        "defaultValue": 0
      },
      {
        "tfName": "num",
        "name": "num",
        "type": "number",
        "defaultValue": 0,
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "Tile",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "reps",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "Split",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "axis",
        "type": "number",
        "defaultValue": 0
      },
      {
        "start": 1,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "num_split",
        "name": "numOrSizeSplits",
        "type": "number",
        "defaultValue": 1
      }
    ]
  },
  {
    "tfOpName": "SplitV",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "numOrSizeSplits",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "axis",
        "type": "number",
        "defaultValue": 0
      }
    ]
  },
  {
    "tfOpName": "ScatterNd",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "indices",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "values",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "shape",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "GatherNd",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "SparseToDense",
    "category": "slice_join",
    "inputs": [
      {
        "start": 0,
        "name": "sparseIndices",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "outputShape",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "sparseValues",
        "type": "tensor"
      },
      {
        "start": 3,
        "name": "defaultValue",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "validate_indices",
        "name": "validateIndices",
        "type": "bool",
        "defaultValue": false,
        "notSupported": true
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/sparse.js
var sparse_exports = {};
__export(sparse_exports, {
  json: () => json16
});
var json16 = [
  {
    "tfOpName": "SparseFillEmptyRows",
    "category": "sparse",
    "inputs": [
      {
        "start": 0,
        "name": "indices",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "values",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "denseShape",
        "type": "tensor"
      },
      {
        "start": 3,
        "name": "defaultValue",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "SparseReshape",
    "category": "sparse",
    "inputs": [
      {
        "start": 0,
        "name": "inputIndices",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "inputShape",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "newShape",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "T",
        "name": "dtype",
        "type": "dtype",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "SparseSegmentMean",
    "category": "sparse",
    "inputs": [
      {
        "start": 0,
        "name": "data",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "segmentIds",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "SparseSegmentSum",
    "category": "sparse",
    "inputs": [
      {
        "start": 0,
        "name": "data",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "indices",
        "type": "tensor"
      },
      {
        "start": 2,
        "name": "segmentIds",
        "type": "tensor"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/spectral.js
var spectral_exports = {};
__export(spectral_exports, {
  json: () => json17
});
var json17 = [
  {
    "tfOpName": "FFT",
    "category": "spectral",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "IFFT",
    "category": "spectral",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ]
  },
  {
    "tfOpName": "RFFT",
    "category": "spectral",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "fft_length",
        "type": "number",
        "notSupported": true
      }
    ]
  },
  {
    "tfOpName": "IRFFT",
    "category": "spectral",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "fft_length",
        "type": "number",
        "notSupported": true
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/string.js
var string_exports = {};
__export(string_exports, {
  json: () => json18
});
var json18 = [
  {
    "tfOpName": "StringNGrams",
    "category": "string",
    "inputs": [
      {
        "start": 0,
        "name": "data",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "dataSplits",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "separator",
        "name": "separator",
        "type": "string"
      },
      {
        "tfName": "ngram_widths",
        "name": "nGramWidths",
        "type": "number[]"
      },
      {
        "tfName": "left_pad",
        "name": "leftPad",
        "type": "string"
      },
      {
        "tfName": "right_pad",
        "name": "rightPad",
        "type": "string"
      },
      {
        "tfName": "pad_width",
        "name": "padWidth",
        "type": "number"
      },
      {
        "tfName": "preserve_short_sequences",
        "name": "preserveShortSequences",
        "type": "bool"
      }
    ],
    "outputs": [
      "ngrams",
      "ngrams_splits"
    ]
  },
  {
    "tfOpName": "StringSplit",
    "category": "string",
    "inputs": [
      {
        "start": 0,
        "name": "input",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "delimiter",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "skip_empty",
        "name": "skipEmpty",
        "type": "bool"
      }
    ],
    "outputs": [
      "indices",
      "values",
      "shape"
    ]
  },
  {
    "tfOpName": "StringToHashBucketFast",
    "category": "string",
    "inputs": [
      {
        "start": 0,
        "name": "input",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "num_buckets",
        "name": "numBuckets",
        "type": "number"
      }
    ]
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/transformation.js
var transformation_exports = {};
__export(transformation_exports, {
  json: () => json19
});
var json19 = [
  {
    "tfOpName": "Cast",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "SrcT",
        "name": "sdtype",
        "type": "dtype",
        "notSupported": true
      },
      {
        "tfName": "DstT",
        "name": "dtype",
        "type": "dtype"
      }
    ]
  },
  {
    "tfOpName": "ExpandDims",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "axis",
        "type": "number"
      }
    ]
  },
  {
    "tfOpName": "MirrorPad",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "padding",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "mode",
        "name": "mode",
        "type": "string"
      }
    ]
  },
  {
    "tfOpName": "Pad",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "padding",
        "type": "number[]"
      }
    ],
    "attrs": [
      {
        "tfName": "constant_value",
        "name": "constantValue",
        "type": "number",
        "defaultValue": 0
      }
    ]
  },
  {
    "tfOpName": "PadV2",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "padding",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "constantValue",
        "type": "number",
        "defaultValue": 0
      }
    ]
  },
  {
    "tfOpName": "Reshape",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "shape",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "Squeeze",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "axis",
        "tfDeprecatedName": "squeeze_dims",
        "name": "axis",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "SpaceToBatchND",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "blockShape",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "paddings",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "BatchToSpaceND",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "blockShape",
        "type": "number[]"
      },
      {
        "start": 2,
        "name": "crops",
        "type": "number[]"
      }
    ]
  },
  {
    "tfOpName": "DepthToSpace",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      }
    ],
    "attrs": [
      {
        "tfName": "block_size",
        "name": "blockSize",
        "type": "number"
      },
      {
        "tfName": "data_format",
        "name": "dataFormat",
        "type": "string"
      }
    ]
  },
  {
    "tfOpName": "BroadcastTo",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "x",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "shape",
        "type": "number[]"
      }
    ],
    "attrs": []
  },
  {
    "tfOpName": "BroadcastArgs",
    "category": "transformation",
    "inputs": [
      {
        "start": 0,
        "name": "s0",
        "type": "tensor"
      },
      {
        "start": 1,
        "name": "s1",
        "type": "tensor"
      }
    ],
    "attrs": []
  }
];

// node_modules/@tensorflow/tfjs-converter/dist/operations/operation_mapper.js
var OperationMapper = class {
  static get Instance() {
    return this._instance || (this._instance = new this());
  }
  constructor() {
    const ops = [
      arithmetic_exports,
      basic_math_exports,
      control_exports,
      convolution_exports,
      creation_exports,
      dynamic_exports,
      evaluation_exports,
      graph_exports,
      hash_table_exports,
      image_exports,
      logical_exports,
      matrices_exports,
      normalization_exports,
      reduction_exports,
      slice_join_exports,
      sparse_exports,
      spectral_exports,
      string_exports,
      transformation_exports
    ];
    const mappersJson = [].concat(...ops.map((op2) => op2.json));
    this.opMappers = mappersJson.reduce((map, mapper) => {
      map[mapper.tfOpName] = mapper;
      return map;
    }, {});
  }
  transformGraph(graph, signature = {}) {
    const tfNodes = graph.node;
    const placeholders = [];
    const weights = [];
    const initNodes = [];
    const nodes = tfNodes.reduce((map, node) => {
      map[node.name] = this.mapNode(node);
      if (node.op.startsWith("Placeholder")) {
        placeholders.push(map[node.name]);
      } else if (node.op === "Const") {
        weights.push(map[node.name]);
      } else if (node.input == null || node.input.length === 0) {
        initNodes.push(map[node.name]);
      }
      return map;
    }, {});
    let inputs = [];
    const outputs = [];
    let inputNodeNameToKey = {};
    let outputNodeNameToKey = {};
    if (signature != null) {
      inputNodeNameToKey = this.mapSignatureEntries(signature.inputs);
      outputNodeNameToKey = this.mapSignatureEntries(signature.outputs);
    }
    const allNodes = Object.keys(nodes);
    allNodes.forEach((key) => {
      const node = nodes[key];
      node.inputNames.forEach((name, index) => {
        const [nodeName, , outputName] = getNodeNameAndIndex(name);
        const inputNode = nodes[nodeName];
        if (inputNode.outputs != null) {
          const outputIndex = inputNode.outputs.indexOf(outputName);
          if (outputIndex !== -1) {
            const inputName = `${nodeName}:${outputIndex}`;
            node.inputNames[index] = inputName;
          }
        }
        node.inputs.push(inputNode);
        inputNode.children.push(node);
      });
    });
    if (Object.keys(outputNodeNameToKey).length === 0) {
      allNodes.forEach((key) => {
        const node = nodes[key];
        if (node.children.length === 0) {
          outputs.push(node);
        }
      });
    } else {
      Object.keys(outputNodeNameToKey).forEach((name) => {
        const [nodeName] = getNodeNameAndIndex(name);
        const node = nodes[nodeName];
        if (node != null) {
          node.signatureKey = outputNodeNameToKey[name];
          outputs.push(node);
        }
      });
    }
    if (Object.keys(inputNodeNameToKey).length > 0) {
      Object.keys(inputNodeNameToKey).forEach((name) => {
        const [nodeName] = getNodeNameAndIndex(name);
        const node = nodes[nodeName];
        if (node) {
          node.signatureKey = inputNodeNameToKey[name];
          inputs.push(node);
        }
      });
    } else {
      inputs = placeholders;
    }
    let functions = {};
    if (graph.library != null && graph.library.function != null) {
      functions = graph.library.function.reduce((functions2, func) => {
        functions2[func.signature.name] = this.mapFunction(func);
        return functions2;
      }, {});
    }
    const result = { nodes, inputs, outputs, weights, placeholders, signature, functions };
    if (initNodes.length > 0) {
      result.initNodes = initNodes;
    }
    return result;
  }
  mapSignatureEntries(entries) {
    return Object.keys(entries || {}).reduce((prev, curr) => {
      prev[entries[curr].name] = curr;
      return prev;
    }, {});
  }
  mapNode(node) {
    const mapper = getRegisteredOp(node.op) || this.opMappers[node.op] || {};
    if (node.attr == null) {
      node.attr = {};
    }
    const newNode = {
      name: node.name,
      op: node.op,
      category: mapper.category,
      inputNames: (node.input || []).map((input) => input.startsWith("^") ? input.slice(1) : input),
      inputs: [],
      children: [],
      inputParams: {},
      attrParams: {},
      rawAttrs: node.attr,
      outputs: mapper.outputs
    };
    if (mapper.inputs != null) {
      newNode.inputParams = mapper.inputs.reduce((map, param) => {
        map[param.name] = {
          type: param.type,
          inputIndexStart: param.start,
          inputIndexEnd: param.end
        };
        return map;
      }, {});
    }
    if (mapper.attrs != null) {
      newNode.attrParams = mapper.attrs.reduce((map, param) => {
        const type = param.type;
        let value = void 0;
        switch (param.type) {
          case "string":
            value = getStringParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getStringParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "string[]":
            value = getStringArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getStringArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "number":
            value = getNumberParam(node.attr, param.tfName, param.defaultValue || 0);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getNumberParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "number[]":
            value = getNumericArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getNumericArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "bool":
            value = getBoolParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getBoolParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "bool[]":
            value = getBoolArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getBoolArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "shape":
            value = getTensorShapeParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getTensorShapeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "shape[]":
            value = getTensorShapeArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getTensorShapeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "dtype":
            value = getDtypeParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getDtypeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "dtype[]":
            value = getDtypeArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getDtypeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "func":
            value = getFuncParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getFuncParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "tensor":
          case "tensors":
            break;
          default:
            throw new Error(`Unsupported param type: ${param.type} for op: ${node.op}`);
        }
        map[param.name] = { value, type };
        return map;
      }, {});
    }
    return newNode;
  }
  mapFunction(functionDef) {
    const tfNodes = functionDef.nodeDef;
    const placeholders = [];
    const weights = [];
    let nodes = {};
    if (tfNodes != null) {
      nodes = tfNodes.reduce((map, node) => {
        map[node.name] = this.mapNode(node);
        if (node.op === "Const") {
          weights.push(map[node.name]);
        }
        return map;
      }, {});
    }
    const inputs = [];
    const outputs = [];
    functionDef.signature.inputArg.forEach((arg) => {
      const [nodeName] = getNodeNameAndIndex(arg.name);
      const node = {
        name: nodeName,
        op: "Placeholder",
        inputs: [],
        inputNames: [],
        category: "graph",
        inputParams: {},
        attrParams: { dtype: { value: parseDtypeParam(arg.type), type: "dtype" } },
        children: []
      };
      node.signatureKey = arg.name;
      inputs.push(node);
      nodes[nodeName] = node;
    });
    const allNodes = Object.keys(nodes);
    allNodes.forEach((key) => {
      const node = nodes[key];
      node.inputNames.forEach((name, index) => {
        const [nodeName, , outputName] = getNodeNameAndIndex(name);
        const inputNode = nodes[nodeName];
        if (inputNode.outputs != null) {
          const outputIndex = inputNode.outputs.indexOf(outputName);
          if (outputIndex !== -1) {
            const inputName = `${nodeName}:${outputIndex}`;
            node.inputNames[index] = inputName;
          }
        }
        node.inputs.push(inputNode);
        inputNode.children.push(node);
      });
    });
    const returnNodeMap = functionDef.ret;
    functionDef.signature.outputArg.forEach((output) => {
      const [nodeName, index] = getNodeNameAndIndex(returnNodeMap[output.name]);
      const node = nodes[nodeName];
      if (node != null) {
        node.defaultOutput = index;
        outputs.push(node);
      }
    });
    const signature = this.mapArgsToSignature(functionDef);
    return { nodes, inputs, outputs, weights, placeholders, signature };
  }
  mapArgsToSignature(functionDef) {
    return {
      methodName: functionDef.signature.name,
      inputs: functionDef.signature.inputArg.reduce((map, arg) => {
        map[arg.name] = this.mapArgToTensorInfo(arg);
        return map;
      }, {}),
      outputs: functionDef.signature.outputArg.reduce((map, arg) => {
        map[arg.name] = this.mapArgToTensorInfo(arg, functionDef.ret);
        return map;
      }, {})
    };
  }
  mapArgToTensorInfo(arg, nameMap) {
    let name = arg.name;
    if (nameMap != null) {
      name = nameMap[name];
    }
    return { name, dtype: arg.type };
  }
};
function decodeBase64(text) {
  const global2 = env().global;
  if (typeof global2.atob !== "undefined") {
    return global2.atob(text);
  } else if (typeof Buffer !== "undefined") {
    return new Buffer(text, "base64").toString();
  } else {
    throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()");
  }
}
function parseStringParam(s, keepCase) {
  const value = Array.isArray(s) ? String.fromCharCode.apply(null, s) : decodeBase64(s);
  return keepCase ? value : value.toLowerCase();
}
function getStringParam(attrs, name, def, keepCase = false) {
  const param = attrs[name];
  if (param != null) {
    return parseStringParam(param.s, keepCase);
  }
  return def;
}
function getBoolParam(attrs, name, def) {
  const param = attrs[name];
  return param ? param.b : def;
}
function getNumberParam(attrs, name, def) {
  const param = attrs[name] || {};
  const value = param["i"] != null ? param["i"] : param["f"] != null ? param["f"] : def;
  return typeof value === "number" ? value : parseInt(value, 10);
}
function parseDtypeParam(value) {
  if (typeof value === "string") {
    value = DataType[value];
  }
  switch (value) {
    case DataType.DT_FLOAT:
    case DataType.DT_HALF:
      return "float32";
    case DataType.DT_INT32:
    case DataType.DT_INT64:
    case DataType.DT_INT8:
    case DataType.DT_UINT8:
      return "int32";
    case DataType.DT_BOOL:
      return "bool";
    case DataType.DT_DOUBLE:
      return "float32";
    case DataType.DT_STRING:
      return "string";
    default:
      return null;
  }
}
function getFuncParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.func) {
    return param.func.name;
  }
  return def;
}
function getDtypeParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.type) {
    return parseDtypeParam(param.type);
  }
  return def;
}
function getDtypeArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.list && param.list.type) {
    return param.list.type.map((v) => parseDtypeParam(v));
  }
  return def;
}
function parseTensorShapeParam(shape) {
  if (shape.unknownRank) {
    return void 0;
  }
  if (shape.dim != null) {
    return shape.dim.map((dim) => typeof dim.size === "number" ? dim.size : parseInt(dim.size, 10));
  }
  return [];
}
function getTensorShapeParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.shape) {
    return parseTensorShapeParam(param.shape);
  }
  return def;
}
function getNumericArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param) {
    return ((param.list.f && param.list.f.length ? param.list.f : param.list.i) || []).map((v) => typeof v === "number" ? v : parseInt(v, 10));
  }
  return def;
}
function getStringArrayParam(attrs, name, def, keepCase = false) {
  const param = attrs[name];
  if (param && param.list && param.list.s) {
    return param.list.s.map((v) => {
      return parseStringParam(v, keepCase);
    });
  }
  return def;
}
function getTensorShapeArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.list && param.list.shape) {
    return param.list.shape.map((v) => {
      return parseTensorShapeParam(v);
    });
  }
  return def;
}
function getBoolArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.list && param.list.b) {
    return param.list.b;
  }
  return def;
}

// node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/node_value_impl.js
var NodeValueImpl = class {
  constructor(node, tensorMap, context) {
    this.node = node;
    this.tensorMap = tensorMap;
    this.context = context;
    this.inputs = [];
    this.attrs = {};
    this.inputs = node.inputNames.map((name) => this.getInput(name));
    if (node.rawAttrs != null) {
      this.attrs = Object.keys(node.rawAttrs).reduce((attrs, key) => {
        attrs[key] = this.getAttr(key);
        return attrs;
      }, {});
    }
  }
  getInput(name) {
    return getTensor(name, this.tensorMap, this.context);
  }
  getAttr(name, defaultValue) {
    const value = this.node.rawAttrs[name];
    if (value.tensor != null) {
      return getTensor(name, this.tensorMap, this.context);
    }
    if (value.i != null || value.f != null) {
      return getNumberParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.s != null) {
      return getStringParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.b != null) {
      return getBoolParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.shape != null) {
      return getTensorShapeParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.type != null) {
      return getDtypeParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.list != null) {
      if (value.list.i != null || value.list.f != null) {
        return getNumericArrayParam(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.s != null) {
        return getStringArrayParam(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.shape != null) {
        return getTensorShapeArrayParam(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.b != null) {
        return getBoolArrayParam(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.type != null) {
        return getDtypeArrayParam(this.node.rawAttrs, name, defaultValue);
      }
    }
    return defaultValue;
  }
};

// node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js
var ops_for_converter_exports = {};
__export(ops_for_converter_exports, {
  OP_SCOPE_SUFFIX: () => OP_SCOPE_SUFFIX,
  abs: () => abs,
  acos: () => acos,
  acosh: () => acosh,
  add: () => add2,
  addN: () => addN,
  all: () => all,
  any: () => any,
  argMax: () => argMax,
  argMin: () => argMin,
  asin: () => asin,
  asinh: () => asinh,
  atan: () => atan,
  atan2: () => atan2,
  atanh: () => atanh,
  avgPool: () => avgPool,
  avgPool3d: () => avgPool3d,
  basicLSTMCell: () => basicLSTMCell,
  batchNorm: () => batchNorm,
  batchNorm2d: () => batchNorm2d,
  batchNorm3d: () => batchNorm3d,
  batchNorm4d: () => batchNorm4d,
  batchToSpaceND: () => batchToSpaceND,
  bincount: () => bincount,
  booleanMaskAsync: () => booleanMaskAsync,
  broadcastArgs: () => broadcastArgs,
  broadcastTo: () => broadcastTo,
  buffer: () => buffer,
  cast: () => cast,
  ceil: () => ceil,
  clipByValue: () => clipByValue,
  clone: () => clone,
  complex: () => complex,
  concat: () => concat,
  concat1d: () => concat1d,
  concat2d: () => concat2d,
  concat3d: () => concat3d,
  concat4d: () => concat4d,
  conv1d: () => conv1d,
  conv2d: () => conv2d,
  conv2dTranspose: () => conv2dTranspose,
  conv3d: () => conv3d,
  conv3dTranspose: () => conv3dTranspose,
  cos: () => cos,
  cosh: () => cosh,
  cosineWindow: () => cosineWindow,
  cumprod: () => cumprod,
  cumsum: () => cumsum,
  denseBincount: () => denseBincount,
  depthToSpace: () => depthToSpace,
  depthwiseConv2d: () => depthwiseConv2d,
  diag: () => diag,
  dilation2d: () => dilation2d,
  div: () => div,
  divNoNan: () => divNoNan,
  dot: () => dot,
  dropout: () => dropout,
  einsum: () => einsum,
  elu: () => elu,
  enclosingPowerOfTwo: () => enclosingPowerOfTwo,
  equal: () => equal,
  erf: () => erf,
  euclideanNorm: () => euclideanNorm,
  exp: () => exp,
  expandDims: () => expandDims,
  expm1: () => expm1,
  eye: () => eye,
  fft: () => fft,
  fill: () => fill,
  floor: () => floor,
  floorDiv: () => floorDiv,
  fused: () => fused_ops_exports,
  gather: () => gather,
  gatherND: () => gatherND,
  greater: () => greater,
  greaterEqual: () => greaterEqual,
  ifft: () => ifft,
  imag: () => imag,
  image: () => image,
  inTopKAsync: () => inTopKAsync,
  irfft: () => irfft,
  isFinite: () => isFinite2,
  isInf: () => isInf,
  isNaN: () => isNaN2,
  leakyRelu: () => leakyRelu,
  less: () => less,
  lessEqual: () => lessEqual,
  linalg: () => linalg,
  linspace: () => linspace,
  localResponseNormalization: () => localResponseNormalization,
  log: () => log2,
  log1p: () => log1p,
  logSigmoid: () => logSigmoid,
  logSoftmax: () => logSoftmax,
  logSumExp: () => logSumExp,
  logicalAnd: () => logicalAnd,
  logicalNot: () => logicalNot,
  logicalOr: () => logicalOr,
  logicalXor: () => logicalXor,
  losses: () => losses,
  lowerBound: () => lowerBound,
  matMul: () => matMul,
  max: () => max,
  maxPool: () => maxPool,
  maxPool3d: () => maxPool3d,
  maxPoolWithArgmax: () => maxPoolWithArgmax,
  maximum: () => maximum,
  mean: () => mean,
  meshgrid: () => meshgrid,
  min: () => min,
  minimum: () => minimum,
  mirrorPad: () => mirrorPad,
  mod: () => mod,
  moments: () => moments,
  movingAverage: () => movingAverage,
  mul: () => mul,
  multiRNNCell: () => multiRNNCell,
  multinomial: () => multinomial,
  neg: () => neg,
  norm: () => norm,
  notEqual: () => notEqual,
  oneHot: () => oneHot,
  ones: () => ones2,
  onesLike: () => onesLike,
  op: () => op,
  outerProduct: () => outerProduct,
  pad: () => pad,
  pad1d: () => pad1d,
  pad2d: () => pad2d,
  pad3d: () => pad3d,
  pad4d: () => pad4d,
  pool: () => pool,
  pow: () => pow,
  prelu: () => prelu,
  print: () => print,
  prod: () => prod,
  rand: () => rand,
  randomGamma: () => randomGamma,
  randomNormal: () => randomNormal,
  randomStandardNormal: () => randomStandardNormal,
  randomUniform: () => randomUniform,
  range: () => range,
  real: () => real,
  reciprocal: () => reciprocal,
  relu: () => relu,
  relu6: () => relu6,
  reshape: () => reshape,
  reverse: () => reverse,
  reverse1d: () => reverse1d,
  reverse2d: () => reverse2d,
  reverse3d: () => reverse3d,
  reverse4d: () => reverse4d,
  rfft: () => rfft,
  round: () => round2,
  rsqrt: () => rsqrt,
  scalar: () => scalar,
  scatterND: () => scatterND,
  searchSorted: () => searchSorted,
  selu: () => selu,
  separableConv2d: () => separableConv2d,
  setdiff1dAsync: () => setdiff1dAsync,
  sigmoid: () => sigmoid,
  sign: () => sign,
  signal: () => signal,
  sin: () => sin,
  sinh: () => sinh,
  slice: () => slice,
  slice1d: () => slice1d,
  slice2d: () => slice2d,
  slice3d: () => slice3d,
  slice4d: () => slice4d,
  softmax: () => softmax,
  softplus: () => softplus,
  spaceToBatchND: () => spaceToBatchND,
  sparse: () => sparse,
  sparseToDense: () => sparseToDense,
  spectral: () => spectral,
  split: () => split,
  sqrt: () => sqrt,
  square: () => square,
  squaredDifference: () => squaredDifference,
  squeeze: () => squeeze,
  stack: () => stack,
  step: () => step,
  stridedSlice: () => stridedSlice,
  string: () => string,
  sub: () => sub,
  sum: () => sum2,
  tan: () => tan,
  tanh: () => tanh2,
  tensor: () => tensor,
  tensor1d: () => tensor1d,
  tensor2d: () => tensor2d,
  tensor3d: () => tensor3d,
  tensor4d: () => tensor4d,
  tensor5d: () => tensor5d,
  tensor6d: () => tensor6d,
  tile: () => tile,
  topk: () => topk,
  transpose: () => transpose,
  truncatedNormal: () => truncatedNormal,
  unique: () => unique,
  unsortedSegmentSum: () => unsortedSegmentSum,
  unstack: () => unstack,
  upperBound: () => upperBound,
  variable: () => variable,
  where: () => where,
  whereAsync: () => whereAsync,
  zeros: () => zeros,
  zerosLike: () => zerosLike
});

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/arithmetic_executor.js
var executeOp = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "BiasAdd":
    case "AddV2":
    case "Add": {
      return [ops.add(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "AddN": {
      return [ops.addN(getParamValue("tensors", node, tensorMap, context))];
    }
    case "FloorMod":
    case "Mod":
      return [ops.mod(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    case "Mul":
      return [ops.mul(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    case "RealDiv":
    case "Div": {
      return [ops.div(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "DivNoNan": {
      return [ops.divNoNan(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "FloorDiv": {
      return [ops.floorDiv(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Sub": {
      return [ops.sub(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Minimum": {
      return [ops.minimum(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Maximum": {
      return [ops.maximum(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Pow": {
      return [ops.pow(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "SquaredDifference": {
      return [ops.squaredDifference(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/basic_math_executor.js
var executeOp2 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Abs":
    case "ComplexAbs":
      return [ops.abs(getParamValue("x", node, tensorMap, context))];
    case "Acos":
      return [ops.acos(getParamValue("x", node, tensorMap, context))];
    case "Acosh":
      return [ops.acosh(getParamValue("x", node, tensorMap, context))];
    case "Asin":
      return [ops.asin(getParamValue("x", node, tensorMap, context))];
    case "Asinh":
      return [ops.asinh(getParamValue("x", node, tensorMap, context))];
    case "Atan":
      return [ops.atan(getParamValue("x", node, tensorMap, context))];
    case "Atan2":
      return [ops.atan2(getParamValue("x", node, tensorMap, context), getParamValue("y", node, tensorMap, context))];
    case "Atanh":
      return [ops.atanh(getParamValue("x", node, tensorMap, context))];
    case "Ceil":
      return [ops.ceil(getParamValue("x", node, tensorMap, context))];
    case "Complex":
      return [ops.complex(getParamValue("real", node, tensorMap, context), getParamValue("imag", node, tensorMap, context))];
    case "Cos":
      return [ops.cos(getParamValue("x", node, tensorMap, context))];
    case "Cosh":
      return [ops.cosh(getParamValue("x", node, tensorMap, context))];
    case "Elu":
      return [ops.elu(getParamValue("x", node, tensorMap, context))];
    case "Erf":
      return [ops.erf(getParamValue("x", node, tensorMap, context))];
    case "Exp":
      return [ops.exp(getParamValue("x", node, tensorMap, context))];
    case "Expm1": {
      return [ops.expm1(getParamValue("x", node, tensorMap, context))];
    }
    case "Floor":
      return [ops.floor(getParamValue("x", node, tensorMap, context))];
    case "Log":
      return [ops.log(getParamValue("x", node, tensorMap, context))];
    case "Log1p": {
      return [ops.log1p(getParamValue("x", node, tensorMap, context))];
    }
    case "Imag":
      return [ops.imag(getParamValue("x", node, tensorMap, context))];
    case "Neg":
      return [ops.neg(getParamValue("x", node, tensorMap, context))];
    case "Reciprocal": {
      return [ops.reciprocal(getParamValue("x", node, tensorMap, context))];
    }
    case "Real":
      return [ops.real(getParamValue("x", node, tensorMap, context))];
    case "Relu":
      return [ops.relu(getParamValue("x", node, tensorMap, context))];
    case "Round": {
      return [ops.round(getParamValue("x", node, tensorMap, context))];
    }
    case "Selu":
      return [ops.selu(getParamValue("x", node, tensorMap, context))];
    case "Sigmoid":
      return [ops.sigmoid(getParamValue("x", node, tensorMap, context))];
    case "Sin":
      return [ops.sin(getParamValue("x", node, tensorMap, context))];
    case "Sign": {
      return [ops.sign(getParamValue("x", node, tensorMap, context))];
    }
    case "Sinh": {
      return [ops.sinh(getParamValue("x", node, tensorMap, context))];
    }
    case "Softplus": {
      return [ops.softplus(getParamValue("x", node, tensorMap, context))];
    }
    case "Sqrt": {
      return [ops.sqrt(getParamValue("x", node, tensorMap, context))];
    }
    case "Square": {
      return [ops.square(getParamValue("x", node, tensorMap, context))];
    }
    case "Tanh": {
      return [ops.tanh(getParamValue("x", node, tensorMap, context))];
    }
    case "Tan":
      return [ops.tan(getParamValue("x", node, tensorMap, context))];
    case "ClipByValue":
      return [ops.clipByValue(getParamValue("x", node, tensorMap, context), getParamValue("clipValueMin", node, tensorMap, context), getParamValue("clipValueMax", node, tensorMap, context))];
    case "Relu6":
      return [ops.relu6(getParamValue("x", node, tensorMap, context))];
    case "Rsqrt":
      return [ops.rsqrt(getTensor(node.inputNames[0], tensorMap, context))];
    case "Prod":
      return [ops.prod(getParamValue("x", node, tensorMap, context), getParamValue("axes", node, tensorMap, context))];
    case "LeakyRelu":
      return [ops.leakyRelu(getParamValue("x", node, tensorMap, context), getParamValue("alpha", node, tensorMap, context))];
    case "Prelu":
      return [ops.prelu(getParamValue("x", node, tensorMap, context), getParamValue("alpha", node, tensorMap, context))];
    case "IsNan":
      return [ops.isNaN(getTensor(node.inputNames[0], tensorMap, context))];
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_utils.js
function assertShapesMatchAllowUndefinedSize(shapeA, shapeB, errorMessagePrefix = "") {
  if (typeof shapeA === "number" || typeof shapeB === "number") {
    return;
  }
  util_exports.assert(shapeA.length === shapeB.length, () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
  for (let i = 0; i < shapeA.length; i++) {
    const dim0 = shapeA[i];
    const dim1 = shapeB[i];
    util_exports.assert(dim0 < 0 || dim1 < 0 || dim0 === dim1, () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
  }
}
function fullDefinedShape(elementShape) {
  if (typeof elementShape === "number" || elementShape.some((dim) => dim < 0)) {
    return false;
  }
  return true;
}
function inferElementShape(listElementShape, tensors, elementShape) {
  let partialShape = mergeElementShape(listElementShape, elementShape);
  const notfullDefinedShape = !fullDefinedShape(partialShape);
  if (notfullDefinedShape && tensors.length === 0) {
    throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${partialShape}`);
  }
  if (notfullDefinedShape) {
    tensors.forEach((tensor2) => {
      partialShape = mergeElementShape(tensor2.shape, partialShape);
    });
  }
  if (!fullDefinedShape(partialShape)) {
    throw new Error(`Non-fully-defined elementShape: ${partialShape}`);
  }
  return partialShape;
}
function mergeElementShape(elementShapeA, elementShapeB) {
  if (typeof elementShapeA === "number") {
    return elementShapeB;
  }
  if (typeof elementShapeB === "number") {
    return elementShapeA;
  }
  if (elementShapeA.length !== elementShapeB.length) {
    throw new Error(`Incompatible ranks during merge: ${elementShapeA} vs. ${elementShapeB}`);
  }
  const result = [];
  for (let i = 0; i < elementShapeA.length; ++i) {
    const dim0 = elementShapeA[i];
    const dim1 = elementShapeB[i];
    if (dim0 >= 0 && dim1 >= 0 && dim0 !== dim1) {
      throw new Error(`Incompatible shape during merge: ${elementShapeA} vs. ${elementShapeB}`);
    }
    result[i] = dim0 >= 0 ? dim0 : dim1;
  }
  return result;
}

// node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_array.js
var TensorArray = class {
  constructor(name, dtype, maxSize, elementShape, identicalElementShapes, dynamicSize, clearAfterRead) {
    this.name = name;
    this.dtype = dtype;
    this.maxSize = maxSize;
    this.elementShape = elementShape;
    this.identicalElementShapes = identicalElementShapes;
    this.dynamicSize = dynamicSize;
    this.clearAfterRead = clearAfterRead;
    this.tensors = [];
    this.closed_ = false;
    this.idTensor = scalar(0);
    keep(this.idTensor);
  }
  get id() {
    return this.idTensor.id;
  }
  get closed() {
    return this.closed_;
  }
  clearAndClose(keepIds) {
    this.tensors.forEach((tensor2) => {
      if (keepIds == null || !keepIds.has(tensor2.tensor.id)) {
        tensor2.tensor.dispose();
      }
    });
    this.tensors = [];
    this.closed_ = true;
    this.idTensor.dispose();
  }
  size() {
    return this.tensors.length;
  }
  read(index) {
    if (this.closed_) {
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    }
    if (index < 0 || index >= this.size()) {
      throw new Error(`Tried to read from index ${index}, but array size is: ${this.size()}`);
    }
    const tensorWithState = this.tensors[index];
    if (tensorWithState.cleared) {
      throw new Error(`TensorArray ${this.name}: Could not read index ${index} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);
    }
    if (this.clearAfterRead) {
      tensorWithState.cleared = true;
    }
    tensorWithState.read = true;
    return tensorWithState.tensor;
  }
  readMany(indices) {
    return indices.map((index) => this.read(index));
  }
  write(index, tensor2) {
    if (this.closed_) {
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    }
    if (index < 0 || !this.dynamicSize && index >= this.maxSize) {
      throw new Error(`Tried to write to index ${index}, but array is not resizeable and size is: ${this.maxSize}`);
    }
    const t = this.tensors[index] || {};
    if (tensor2.dtype !== this.dtype) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index},
          because the value dtype is ${tensor2.dtype}, but TensorArray dtype is ${this.dtype}.`);
    }
    if (this.size() === 0 && (this.elementShape == null || this.elementShape.length === 0)) {
      this.elementShape = tensor2.shape;
    }
    assertShapesMatchAllowUndefinedSize(this.elementShape, tensor2.shape, `TensorArray ${this.name}: Could not write to TensorArray index ${index}.`);
    if (t.read) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been read.`);
    }
    if (t.written) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been written.`);
    }
    t.tensor = tensor2;
    keep(tensor2);
    t.written = true;
    this.tensors[index] = t;
  }
  writeMany(indices, tensors) {
    if (indices.length !== tensors.length) {
      throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${indices.length} is not the same as tensors size: ${tensors.length}.`);
    }
    indices.forEach((i, index) => this.write(i, tensors[index]));
  }
  gather(indices, dtype) {
    if (!!dtype && dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${dtype}`);
    }
    if (!indices) {
      indices = [];
      for (let i = 0; i < this.size(); i++) {
        indices.push(i);
      }
    } else {
      indices = indices.slice(0, this.size());
    }
    if (indices.length === 0) {
      return tensor([], [0].concat(this.elementShape));
    }
    const tensors = this.readMany(indices);
    assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, "TensorArray shape mismatch: ");
    return stack(tensors, 0);
  }
  concat(dtype) {
    if (!!dtype && dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${dtype}`);
    }
    if (this.size() === 0) {
      return tensor([], [0].concat(this.elementShape));
    }
    const indices = [];
    for (let i = 0; i < this.size(); i++) {
      indices.push(i);
    }
    const tensors = this.readMany(indices);
    assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${tensors[0].shape})`);
    return concat(tensors, 0);
  }
  scatter(indices, tensor2) {
    if (tensor2.dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor2.dtype}`);
    }
    if (indices.length !== tensor2.shape[0]) {
      throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor2.shape[0]}`);
    }
    const maxIndex = Math.max(...indices);
    if (!this.dynamicSize && maxIndex >= this.maxSize) {
      throw new Error(`Max index must be < array size (${maxIndex}  vs. ${this.maxSize})`);
    }
    this.writeMany(indices, unstack(tensor2, 0));
  }
  split(length, tensor2) {
    if (tensor2.dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor2.dtype}`);
    }
    let totalLength = 0;
    const cumulativeLengths = length.map((len) => {
      totalLength += len;
      return totalLength;
    });
    if (totalLength !== tensor2.shape[0]) {
      throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor2.shape}`);
    }
    if (!this.dynamicSize && length.length !== this.maxSize) {
      throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${length.length}), and the TensorArray is not marked as dynamically resizeable`);
    }
    const elementPerRow = totalLength === 0 ? 0 : tensor2.size / totalLength;
    const tensors = [];
    tidy(() => {
      tensor2 = reshape(tensor2, [1, totalLength, elementPerRow]);
      for (let i = 0; i < length.length; ++i) {
        const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
        const indices2 = [0, previousLength, 0];
        const sizes = [1, length[i], elementPerRow];
        tensors[i] = reshape(slice(tensor2, indices2, sizes), this.elementShape);
      }
      return tensors;
    });
    const indices = [];
    for (let i = 0; i < length.length; i++) {
      indices[i] = i;
    }
    this.writeMany(indices, tensors);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_list.js
var TensorList = class {
  constructor(tensors, elementShape, elementDtype, maxNumElements = -1) {
    this.tensors = tensors;
    this.elementShape = elementShape;
    this.elementDtype = elementDtype;
    if (tensors != null) {
      tensors.forEach((tensor2) => {
        if (elementDtype !== tensor2.dtype) {
          throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${tensor2.dtype}`);
        }
        assertShapesMatchAllowUndefinedSize(elementShape, tensor2.shape, "TensorList shape mismatch: ");
        keep(tensor2);
      });
    }
    this.idTensor = scalar(0);
    this.maxNumElements = maxNumElements;
    keep(this.idTensor);
  }
  get id() {
    return this.idTensor.id;
  }
  copy() {
    return new TensorList([...this.tensors], this.elementShape, this.elementDtype);
  }
  clearAndClose(keepIds) {
    this.tensors.forEach((tensor2) => {
      if (keepIds == null || !keepIds.has(tensor2.id)) {
        tensor2.dispose();
      }
    });
    this.tensors.length = 0;
    this.idTensor.dispose();
  }
  size() {
    return this.tensors.length;
  }
  stack(elementShape, elementDtype, numElements = -1) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    if (numElements !== -1 && this.tensors.length !== numElements) {
      throw new Error(`Operation expected a list with ${numElements} elements but got a list with ${this.tensors.length} elements.`);
    }
    assertShapesMatchAllowUndefinedSize(elementShape, this.elementShape, "TensorList shape mismatch: ");
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    return tidy(() => {
      const reshapedTensors = this.tensors.map((tensor2) => reshape(tensor2, outputElementShape));
      return stack(reshapedTensors, 0);
    });
  }
  popBack(elementShape, elementDtype) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    if (this.size() === 0) {
      throw new Error("Trying to pop from an empty list.");
    }
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    const tensor2 = this.tensors.pop();
    assertShapesMatchAllowUndefinedSize(tensor2.shape, elementShape, "TensorList shape mismatch: ");
    return reshape(tensor2, outputElementShape);
  }
  pushBack(tensor2) {
    if (tensor2.dtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${tensor2.dtype}, but list elements ${this.elementDtype}`);
    }
    assertShapesMatchAllowUndefinedSize(tensor2.shape, this.elementShape, "TensorList shape mismatch: ");
    if (this.maxNumElements === this.size()) {
      throw new Error(`Trying to push element into a full list.`);
    }
    keep(tensor2);
    this.tensors.push(tensor2);
  }
  resize(size) {
    if (size < 0) {
      throw new Error(`TensorListResize expects size to be non-negative. Got: ${size}`);
    }
    if (this.maxNumElements !== -1 && size > this.maxNumElements) {
      throw new Error(`TensorListResize input size ${size} is greater maxNumElement ${this.maxNumElements}.`);
    }
    const destTensorList = new TensorList([], this.elementShape, this.elementDtype, this.maxNumElements);
    destTensorList.tensors.length = size;
    for (let i = 0; i < Math.min(this.tensors.length, size); ++i) {
      destTensorList.tensors[i] = this.tensors[i];
    }
    return destTensorList;
  }
  getItem(elementIndex, elementShape, elementDtype) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    if (elementIndex < 0 || elementIndex > this.tensors.length) {
      throw new Error(`Trying to access element ${elementIndex} in a list with ${this.tensors.length} elements.`);
    }
    if (this.tensors[elementIndex] == null) {
      throw new Error(`element at index ${elementIndex} is null.`);
    }
    assertShapesMatchAllowUndefinedSize(this.tensors[elementIndex].shape, elementShape, "TensorList shape mismatch: ");
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    return reshape(this.tensors[elementIndex], outputElementShape);
  }
  setItem(elementIndex, tensor2) {
    if (tensor2.dtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${tensor2.dtype}, but list elements ${this.elementDtype}`);
    }
    if (elementIndex < 0 || this.maxNumElements !== -1 && elementIndex >= this.maxNumElements) {
      throw new Error(`Trying to set element ${elementIndex} in a list with max ${this.maxNumElements} elements.`);
    }
    assertShapesMatchAllowUndefinedSize(this.elementShape, tensor2.shape, "TensorList shape mismatch: ");
    keep(tensor2);
    this.tensors[elementIndex] = tensor2;
  }
  gather(indices, elementDtype, elementShape) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    assertShapesMatchAllowUndefinedSize(this.elementShape, elementShape, "TensorList shape mismatch: ");
    indices = indices.slice(0, this.size());
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    if (indices.length === 0) {
      return tensor([], [0].concat(outputElementShape));
    }
    return tidy(() => {
      const tensors = indices.map((i) => reshape(this.tensors[i], outputElementShape));
      return stack(tensors, 0);
    });
  }
  concat(elementDtype, elementShape) {
    if (!!elementDtype && elementDtype !== this.elementDtype) {
      throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${elementDtype}`);
    }
    assertShapesMatchAllowUndefinedSize(this.elementShape, elementShape, "TensorList shape mismatch: ");
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    if (this.size() === 0) {
      return tensor([], [0].concat(outputElementShape));
    }
    return tidy(() => {
      const tensors = this.tensors.map((t) => reshape(t, outputElementShape));
      return concat(tensors, 0);
    });
  }
};
function fromTensor(tensor2, elementShape, elementDtype) {
  const dtype = tensor2.dtype;
  if (tensor2.shape.length < 1) {
    throw new Error(`Tensor must be at least a vector, but saw shape: ${tensor2.shape}`);
  }
  if (tensor2.dtype !== elementDtype) {
    throw new Error(`Invalid data types; op elements ${tensor2.dtype}, but list elements ${elementDtype}`);
  }
  const tensorElementShape = tensor2.shape.slice(1);
  assertShapesMatchAllowUndefinedSize(tensorElementShape, elementShape, "TensorList shape mismatch: ");
  const tensorList = unstack(tensor2);
  return new TensorList(tensorList, elementShape, dtype);
}
function reserve(elementShape, elementDtype, numElements, maxNumElements) {
  return new TensorList([], elementShape, elementDtype, maxNumElements);
}
function scatter(tensor2, indices, elementShape, numElements) {
  if (indices.length !== tensor2.shape[0]) {
    throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor2.shape[0]}`);
  }
  const maxIndex = Math.max(...indices);
  if (numElements != null && numElements !== -1 && maxIndex >= numElements) {
    throw new Error(`Max index must be < array size (${maxIndex}  vs. ${numElements})`);
  }
  const list = new TensorList([], elementShape, tensor2.dtype, numElements);
  const tensors = unstack(tensor2, 0);
  indices.forEach((value, index) => {
    list.setItem(value, tensors[index]);
  });
  return list;
}
function split2(tensor2, length, elementShape) {
  let totalLength = 0;
  const cumulativeLengths = length.map((len) => {
    totalLength += len;
    return totalLength;
  });
  if (totalLength !== tensor2.shape[0]) {
    throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor2.shape}`);
  }
  const shapeWithoutFirstDim = tensor2.shape.slice(1);
  const outputElementShape = mergeElementShape(shapeWithoutFirstDim, elementShape);
  const elementPerRow = totalLength === 0 ? 0 : tensor2.size / totalLength;
  const tensors = tidy(() => {
    const tensors2 = [];
    tensor2 = reshape(tensor2, [1, totalLength, elementPerRow]);
    for (let i = 0; i < length.length; ++i) {
      const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
      const indices = [0, previousLength, 0];
      const sizes = [1, length[i], elementPerRow];
      tensors2[i] = reshape(slice(tensor2, indices, sizes), outputElementShape);
    }
    tensor2.dispose();
    return tensors2;
  });
  const list = new TensorList([], elementShape, tensor2.dtype, length.length);
  for (let i = 0; i < tensors.length; i++) {
    list.setItem(i, tensors[i]);
  }
  return list;
}

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/control_executor.js
var executeOp3 = async (node, tensorMap, context) => {
  switch (node.op) {
    case "If":
    case "StatelessIf": {
      const thenFunc = getParamValue("thenBranch", node, tensorMap, context);
      const elseFunc = getParamValue("elseBranch", node, tensorMap, context);
      const cond = getParamValue("cond", node, tensorMap, context);
      const args = getParamValue("args", node, tensorMap, context);
      const condValue = await cond.data();
      if (condValue[0]) {
        return context.functionMap[thenFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
      } else {
        return context.functionMap[elseFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
      }
    }
    case "While":
    case "StatelessWhile": {
      const bodyFunc = getParamValue("body", node, tensorMap, context);
      const condFunc = getParamValue("cond", node, tensorMap, context);
      const args = getParamValue("args", node, tensorMap, context);
      const condResult = await context.functionMap[condFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
      const argIds = args.map((tensor2) => tensor2.id);
      let condValue = await condResult[0].data();
      condResult.forEach((tensor2) => {
        if (!tensor2.kept && argIds.indexOf(tensor2.id) === -1) {
          tensor2.dispose();
        }
      });
      let result = args;
      while (condValue[0]) {
        const origResult = result;
        result = await context.functionMap[bodyFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap);
        const resultIds = result.map((tensor2) => tensor2.id);
        origResult.forEach((tensor2) => {
          if (!tensor2.kept && argIds.indexOf(tensor2.id) === -1 && resultIds.indexOf(tensor2.id) === -1) {
            tensor2.dispose();
          }
        });
        const condResult2 = await context.functionMap[condFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap);
        condValue = await condResult2[0].data();
        condResult2.forEach((tensor2) => {
          if (!tensor2.kept && argIds.indexOf(tensor2.id) === -1 && resultIds.indexOf(tensor2.id) === -1) {
            tensor2.dispose();
          }
        });
      }
      return result;
    }
    case "LoopCond": {
      const pred = getParamValue("pred", node, tensorMap, context);
      return [cloneTensor(pred)];
    }
    case "Switch": {
      const pred = getParamValue("pred", node, tensorMap, context);
      let data = getParamValue("data", node, tensorMap, context);
      if (!data.kept) {
        data = cloneTensor(data);
      }
      return (await pred.data())[0] ? [void 0, data] : [data, void 0];
    }
    case "Merge": {
      const inputName = node.inputNames.find((name) => getTensor(name, tensorMap, context) !== void 0);
      if (inputName) {
        const data = getTensor(inputName, tensorMap, context);
        return [cloneTensor(data)];
      }
      return void 0;
    }
    case "Enter": {
      const frameId = getParamValue("frameName", node, tensorMap, context);
      const data = getParamValue("tensor", node, tensorMap, context);
      context.enterFrame(frameId);
      return [cloneTensor(data)];
    }
    case "Exit": {
      const data = getParamValue("tensor", node, tensorMap, context);
      context.exitFrame();
      return [cloneTensor(data)];
    }
    case "NextIteration": {
      const data = getParamValue("tensor", node, tensorMap, context);
      context.nextIteration();
      return [cloneTensor(data)];
    }
    case "TensorArrayV3": {
      const size = getParamValue("size", node, tensorMap, context);
      const dtype = getParamValue("dtype", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const dynamicSize = getParamValue("dynamicSize", node, tensorMap, context);
      const clearAfterRead = getParamValue("clearAfterRead", node, tensorMap, context);
      const identicalElementShapes = getParamValue("identicalElementShapes", node, tensorMap, context);
      const name = getParamValue("name", node, tensorMap, context);
      const tensorArray = new TensorArray(name, dtype, size, elementShape, identicalElementShapes, dynamicSize, clearAfterRead);
      context.addTensorArray(tensorArray);
      return [tensorArray.idTensor, scalar(1)];
    }
    case "TensorArrayWriteV3": {
      const id = getParamValue("tensorArrayId", node, tensorMap, context);
      const index = getParamValue("index", node, tensorMap, context);
      const writeTensor = getParamValue("tensor", node, tensorMap, context);
      const writeTensorArray = context.getTensorArray(id.id);
      writeTensorArray.write(index, writeTensor);
      return [writeTensorArray.idTensor];
    }
    case "TensorArrayReadV3": {
      const readId = getParamValue("tensorArrayId", node, tensorMap, context);
      const readIndex = getParamValue("index", node, tensorMap, context);
      const readTensorArray = context.getTensorArray(readId.id);
      return [readTensorArray.read(readIndex)];
    }
    case "TensorArrayGatherV3": {
      const gatherId = getParamValue("tensorArrayId", node, tensorMap, context);
      const gatherIndices = getParamValue("indices", node, tensorMap, context);
      const gatherDtype = getParamValue("dtype", node, tensorMap, context);
      const gatherTensorArray = context.getTensorArray(gatherId.id);
      return [gatherTensorArray.gather(gatherIndices, gatherDtype)];
    }
    case "TensorArrayScatterV3": {
      const scatterId = getParamValue("tensorArrayId", node, tensorMap, context);
      const scatterIndices = getParamValue("indices", node, tensorMap, context);
      const scatterTensor = getParamValue("tensor", node, tensorMap, context);
      const scatterTensorArray = context.getTensorArray(scatterId.id);
      scatterTensorArray.scatter(scatterIndices, scatterTensor);
      return [scatterTensorArray.idTensor];
    }
    case "TensorArrayConcatV3": {
      const concatId = getParamValue("tensorArrayId", node, tensorMap, context);
      const concatTensorArray = context.getTensorArray(concatId.id);
      const concatDtype = getParamValue("dtype", node, tensorMap, context);
      return [concatTensorArray.concat(concatDtype)];
    }
    case "TensorArraySplitV3": {
      const splitId = getParamValue("tensorArrayId", node, tensorMap, context);
      const splitTensor = getParamValue("tensor", node, tensorMap, context);
      const lengths = getParamValue("lengths", node, tensorMap, context);
      const splitTensorArray = context.getTensorArray(splitId.id);
      splitTensorArray.split(lengths, splitTensor);
      return [splitTensorArray.idTensor];
    }
    case "TensorArraySizeV3": {
      const sizeId = getParamValue("tensorArrayId", node, tensorMap, context);
      const sizeTensorArray = context.getTensorArray(sizeId.id);
      return [scalar(sizeTensorArray.size(), "int32")];
    }
    case "TensorArrayCloseV3": {
      const closeId = getParamValue("tensorArrayId", node, tensorMap, context);
      const closeTensorArray = context.getTensorArray(closeId.id);
      closeTensorArray.clearAndClose();
      return [closeTensorArray.idTensor];
    }
    case "TensorListSetItem": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const index = getParamValue("index", node, tensorMap, context);
      const writeTensor = getParamValue("tensor", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      tensorList.setItem(index, writeTensor);
      return [tensorList.idTensor];
    }
    case "TensorListGetItem": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const readIndex = getParamValue("index", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDType = getParamValue("elementDType", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      return [tensorList.getItem(readIndex, elementShape, elementDType)];
    }
    case "TensorListScatterV2":
    case "TensorListScatter": {
      const scatterIndices = getParamValue("indices", node, tensorMap, context);
      const scatterTensor = getParamValue("tensor", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const numElements = getParamValue("numElements", node, tensorMap, context);
      const tensorList = scatter(scatterTensor, scatterIndices, elementShape, numElements);
      context.addTensorList(tensorList);
      return [tensorList.idTensor];
    }
    case "TensorListReserve":
    case "EmptyTensorList": {
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDtype = getParamValue("elementDType", node, tensorMap, context);
      let numElementsParam;
      if (node.op === "TensorListReserve") {
        numElementsParam = "numElements";
      } else {
        numElementsParam = "maxNumElements";
      }
      const numElements = getParamValue(numElementsParam, node, tensorMap, context);
      const maxNumElements = node.op === "TensorListReserve" ? -1 : numElements;
      const tensorList = reserve(elementShape, elementDtype, numElements, maxNumElements);
      context.addTensorList(tensorList);
      return [tensorList.idTensor];
    }
    case "TensorListGather": {
      const gatherId = getParamValue("tensorListId", node, tensorMap, context);
      const gatherIndices = getParamValue("indices", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDtype = getParamValue("elementDType", node, tensorMap, context);
      const tensorList = context.getTensorList(gatherId.id);
      return [tensorList.gather(gatherIndices, elementDtype, elementShape)];
    }
    case "TensorListStack": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDtype = getParamValue("elementDType", node, tensorMap, context);
      const numElements = getParamValue("numElements", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      return [tensorList.stack(elementShape, elementDtype, numElements)];
    }
    case "TensorListFromTensor": {
      const tensor2 = getParamValue("tensor", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDtype = getParamValue("elementDType", node, tensorMap, context);
      const tensorList = fromTensor(tensor2, elementShape, elementDtype);
      context.addTensorList(tensorList);
      return [tensorList.idTensor];
    }
    case "TensorListConcat":
    case "TensorListConcatV2": {
      const concatId = getParamValue("tensorListId", node, tensorMap, context);
      const tensorList = context.getTensorList(concatId.id);
      const concatDtype = getParamValue("dtype", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      return [tensorList.concat(concatDtype, elementShape)];
    }
    case "TensorListPushBack": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const writeTensor = getParamValue("tensor", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      tensorList.pushBack(writeTensor);
      return [tensorList.idTensor];
    }
    case "TensorListPopBack": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDType = getParamValue("elementDType", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      return [tensorList.popBack(elementShape, elementDType)];
    }
    case "TensorListSplit": {
      const splitTensor = getParamValue("tensor", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const lengths = getParamValue("lengths", node, tensorMap, context);
      const tensorList = split2(splitTensor, lengths, elementShape);
      context.addTensorList(tensorList);
      return [tensorList.idTensor];
    }
    case "TensorListLength": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      return [scalar(tensorList.size(), "int32")];
    }
    case "TensorListResize": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      const srcTensorList = context.getTensorList(idTensor.id);
      const destTensorList = srcTensorList.resize(size);
      context.addTensorList(destTensorList);
      return [destTensorList.idTensor];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/convolution_executor.js
function fusedConvAndDepthWiseParams(node, tensorMap, context) {
  const [extraOp, activationFunc] = getParamValue("fusedOps", node, tensorMap, context);
  const isBiasAdd = extraOp === "biasadd";
  const noBiasAdd = !isBiasAdd;
  const isPrelu = activationFunc === "prelu";
  const isBatchNorm = extraOp === "fusedbatchnorm";
  const numArgs = getParamValue("numArgs", node, tensorMap, context);
  if (isBiasAdd) {
    if (isPrelu && numArgs !== 2) {
      throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
    }
    if (!isPrelu && isBiasAdd && numArgs !== 1) {
      throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.");
    }
  }
  if (isBatchNorm) {
    throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");
  }
  const stride = getParamValue("strides", node, tensorMap, context);
  const pad2 = getPadding(node, tensorMap, context);
  const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
  const dilations = getParamValue("dilations", node, tensorMap, context);
  let [biasArg, preluArg] = getParamValue("args", node, tensorMap, context);
  if (noBiasAdd) {
    preluArg = biasArg;
    biasArg = void 0;
  }
  const leakyreluAlpha = getParamValue("leakyreluAlpha", node, tensorMap, context);
  return {
    stride,
    pad: pad2,
    dataFormat,
    dilations,
    biasArg,
    preluArg,
    activationFunc,
    leakyreluAlpha
  };
}
var executeOp4 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Conv1D": {
      const stride = getParamValue("stride", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      const dilation = getParamValue("dilation", node, tensorMap, context);
      return [ops.conv1d(getParamValue("x", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), stride, pad2, dataFormat, dilation)];
    }
    case "Conv2D": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getPadding(node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      const dilations = getParamValue("dilations", node, tensorMap, context);
      return [ops.conv2d(getParamValue("x", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), [stride[1], stride[2]], pad2, dataFormat, [dilations[1], dilations[2]])];
    }
    case "_FusedConv2D": {
      const { stride, pad: pad2, dataFormat, dilations, biasArg, preluArg, activationFunc, leakyreluAlpha } = fusedConvAndDepthWiseParams(node, tensorMap, context);
      return [ops.fused.conv2d({
        x: getParamValue("x", node, tensorMap, context),
        filter: getParamValue("filter", node, tensorMap, context),
        strides: [stride[1], stride[2]],
        pad: pad2,
        dataFormat,
        dilations: [dilations[1], dilations[2]],
        bias: biasArg,
        activation: activationFunc,
        preluActivationWeights: preluArg,
        leakyreluAlpha
      })];
    }
    case "FusedDepthwiseConv2dNative": {
      const { stride, pad: pad2, dataFormat, dilations, biasArg, preluArg, activationFunc, leakyreluAlpha } = fusedConvAndDepthWiseParams(node, tensorMap, context);
      return [ops.fused.depthwiseConv2d({
        x: getParamValue("x", node, tensorMap, context),
        filter: getParamValue("filter", node, tensorMap, context),
        strides: [stride[1], stride[2]],
        pad: pad2,
        dataFormat,
        dilations: [dilations[1], dilations[2]],
        bias: biasArg,
        activation: activationFunc,
        preluActivationWeights: preluArg,
        leakyreluAlpha
      })];
    }
    case "Conv2DBackpropInput":
    case "Conv2dTranspose": {
      const shape = getParamValue("outputShape", node, tensorMap, context);
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getPadding(node, tensorMap, context);
      return [ops.conv2dTranspose(getParamValue("x", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), shape, [stride[1], stride[2]], pad2)];
    }
    case "DepthwiseConv2dNative":
    case "DepthwiseConv2d": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getPadding(node, tensorMap, context);
      const dilations = getParamValue("dilations", node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      return [ops.depthwiseConv2d(getParamValue("input", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), [stride[1], stride[2]], pad2, dataFormat, [dilations[1], dilations[2]])];
    }
    case "Conv3D": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      const dilations = getParamValue("dilations", node, tensorMap, context);
      return [ops.conv3d(getParamValue("x", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), [stride[1], stride[2], stride[3]], pad2, dataFormat, [dilations[1], dilations[2], dilations[3]])];
    }
    case "AvgPool": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      return [ops.avgPool(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad2)];
    }
    case "MaxPool": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      return [ops.maxPool(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad2)];
    }
    case "MaxPoolWithArgmax": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      const includeBatchInIndex = getParamValue("includeBatchInIndex", node, tensorMap, context);
      const { result, indexes } = ops.maxPoolWithArgmax(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad2, includeBatchInIndex);
      return [result, indexes];
    }
    case "AvgPool3D": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      return [ops.avgPool3d(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad2)];
    }
    case "MaxPool3D": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      return [ops.maxPool3d(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad2)];
    }
    case "Dilation2D": {
      const strides = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const dilations = getParamValue("dilations", node, tensorMap, context);
      const strideHeight = strides[1];
      const strideWidth = strides[2];
      const dilationHeight = dilations[1];
      const dilationWidth = dilations[2];
      return [ops.dilation2d(getParamValue("x", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), [strideHeight, strideWidth], pad2, [dilationHeight, dilationWidth], "NHWC")];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/creation_executor.js
var executeOp5 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Fill": {
      const shape = getParamValue("shape", node, tensorMap, context);
      const dtype = getParamValue("dtype", node, tensorMap, context);
      const value = getParamValue("value", node, tensorMap, context);
      return [ops.fill(shape, value, dtype)];
    }
    case "LinSpace": {
      const start = getParamValue("start", node, tensorMap, context);
      const stop = getParamValue("stop", node, tensorMap, context);
      const num = getParamValue("num", node, tensorMap, context);
      return [ops.linspace(start, stop, num)];
    }
    case "Multinomial": {
      const logits = getParamValue("logits", node, tensorMap, context);
      const numSamples = getParamValue("numSamples", node, tensorMap, context);
      const seed = getParamValue("seed", node, tensorMap, context);
      return [ops.multinomial(logits, numSamples, seed)];
    }
    case "OneHot": {
      const indices = getParamValue("indices", node, tensorMap, context);
      const depth = getParamValue("depth", node, tensorMap, context);
      const onValue = getParamValue("onValue", node, tensorMap, context);
      const offValue = getParamValue("offValue", node, tensorMap, context);
      return [ops.oneHot(indices, depth, onValue, offValue)];
    }
    case "Ones": {
      return [ops.ones(getParamValue("shape", node, tensorMap, context), getParamValue("dtype", node, tensorMap, context))];
    }
    case "OnesLike": {
      return [ops.onesLike(getParamValue("x", node, tensorMap, context))];
    }
    case "RandomStandardNormal": {
      return [ops.randomStandardNormal(getParamValue("shape", node, tensorMap, context), getParamValue("dtype", node, tensorMap, context), getParamValue("seed", node, tensorMap, context))];
    }
    case "RandomUniform": {
      return [ops.randomUniform(getParamValue("shape", node, tensorMap, context), getParamValue("minval", node, tensorMap, context), getParamValue("maxval", node, tensorMap, context), getParamValue("dtype", node, tensorMap, context))];
    }
    case "Range": {
      const start = getParamValue("start", node, tensorMap, context);
      const stop = getParamValue("stop", node, tensorMap, context);
      const step2 = getParamValue("step", node, tensorMap, context);
      return [ops.range(start, stop, step2, getParamValue("dtype", node, tensorMap, context))];
    }
    case "TruncatedNormal": {
      const shape = getParamValue("shape", node, tensorMap, context);
      const mean2 = getParamValue("mean", node, tensorMap, context);
      const stdDev = getParamValue("stdDev", node, tensorMap, context);
      const seed = getParamValue("seed", node, tensorMap, context);
      return [ops.truncatedNormal(shape, mean2, stdDev, getParamValue("dtype", node, tensorMap, context), seed)];
    }
    case "Zeros": {
      return [ops.zeros(getParamValue("shape", node, tensorMap, context), getParamValue("dtype", node, tensorMap, context))];
    }
    case "ZerosLike": {
      return [ops.zerosLike(getParamValue("x", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/dynamic_executor.js
function nmsParams(node, tensorMap, context) {
  const boxes = getParamValue("boxes", node, tensorMap, context);
  const scores = getParamValue("scores", node, tensorMap, context);
  const maxOutputSize = getParamValue("maxOutputSize", node, tensorMap, context);
  const iouThreshold = getParamValue("iouThreshold", node, tensorMap, context);
  const scoreThreshold = getParamValue("scoreThreshold", node, tensorMap, context);
  const softNmsSigma = getParamValue("softNmsSigma", node, tensorMap, context);
  return {
    boxes,
    scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    softNmsSigma
  };
}
var executeOp6 = async (node, tensorMap, context, resourceManager, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "NonMaxSuppressionV5": {
      const { boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma } = nmsParams(node, tensorMap, context);
      const result = await ops.image.nonMaxSuppressionWithScoreAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
      return [result.selectedIndices, result.selectedScores];
    }
    case "NonMaxSuppressionV4": {
      const { boxes, scores, maxOutputSize, iouThreshold, scoreThreshold } = nmsParams(node, tensorMap, context);
      const padToMaxOutputSize = getParamValue("padToMaxOutputSize", node, tensorMap, context);
      const result = await ops.image.nonMaxSuppressionPaddedAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize);
      return [result.selectedIndices, result.validOutputs];
    }
    case "NonMaxSuppressionV3":
    case "NonMaxSuppressionV2": {
      const { boxes, scores, maxOutputSize, iouThreshold, scoreThreshold } = nmsParams(node, tensorMap, context);
      return [await ops.image.nonMaxSuppressionAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold)];
    }
    case "Where": {
      const condition = ops.cast(getParamValue("condition", node, tensorMap, context), "bool");
      const result = [await ops.whereAsync(condition)];
      condition.dispose();
      return result;
    }
    case "ListDiff": {
      return ops.setdiff1dAsync(getParamValue("x", node, tensorMap, context), getParamValue("y", node, tensorMap, context));
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/evaluation_executor.js
var executeOp7 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "LowerBound": {
      const sortedSequence = getParamValue("sortedSequence", node, tensorMap, context);
      const values = getParamValue("values", node, tensorMap, context);
      return [ops.lowerBound(sortedSequence, values)];
    }
    case "TopKV2": {
      const x = getParamValue("x", node, tensorMap, context);
      const k = getParamValue("k", node, tensorMap, context);
      const sorted = getParamValue("sorted", node, tensorMap, context);
      const result = ops.topk(x, k, sorted);
      return [result.values, result.indices];
    }
    case "UpperBound": {
      const sortedSequence = getParamValue("sortedSequence", node, tensorMap, context);
      const values = getParamValue("values", node, tensorMap, context);
      return [ops.upperBound(sortedSequence, values)];
    }
    case "Unique": {
      const x = getParamValue("x", node, tensorMap, context);
      const result = ops.unique(x);
      return [result.values, result.indices];
    }
    case "UniqueV2": {
      const x = getParamValue("x", node, tensorMap, context);
      const axis = getParamValue("axis", node, tensorMap, context);
      const result = ops.unique(x, axis);
      return [result.values, result.indices];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/graph_executor.js
var executeOp8 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Const": {
      return tensorMap[node.name];
    }
    case "PlaceholderWithDefault":
      const def = getParamValue("default", node, tensorMap, context);
      return [getTensor(node.name, tensorMap, context) || def];
    case "Placeholder":
      return [getTensor(node.name, tensorMap, context)];
    case "Identity":
    case "StopGradient":
    case "FakeQuantWithMinMaxVars": {
      const data2 = getParamValue("x", node, tensorMap, context);
      return [cloneTensor(data2)];
    }
    case "IdentityN":
      return getParamValue("x", node, tensorMap, context).map((t) => cloneTensor(t));
    case "Snapshot":
      const snapshot = getParamValue("x", node, tensorMap, context);
      return [cloneTensor(snapshot)];
    case "Shape":
      return [ops.tensor1d(getParamValue("x", node, tensorMap, context).shape, "int32")];
    case "ShapeN":
      return getParamValue("x", node, tensorMap, context).map((t) => ops.tensor1d(t.shape));
    case "Size":
      return [ops.scalar(getParamValue("x", node, tensorMap, context).size, "int32")];
    case "Rank":
      return [ops.scalar(getParamValue("x", node, tensorMap, context).rank, "int32")];
    case "NoOp":
      return [ops.scalar(1)];
    case "Print":
      const input = getParamValue("x", node, tensorMap, context);
      const data = getParamValue("data", node, tensorMap, context);
      const message = getParamValue("message", node, tensorMap, context);
      const summarize = getParamValue("summarize", node, tensorMap, context);
      console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance.");
      console.log(message);
      for (let i = 0; i < data.length; i++) {
        console.log(Array.prototype.slice.call(data[i].dataSync()).slice(0, summarize));
      }
      return [input];
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/hash_table.js
var HashTable = class {
  constructor(keyDType, valueDType) {
    this.keyDType = keyDType;
    this.valueDType = valueDType;
    this.handle = scalar(0);
    this.tensorMap = /* @__PURE__ */ new Map();
    keep(this.handle);
  }
  get id() {
    return this.handle.id;
  }
  clearAndClose() {
    this.tensorMap.forEach((value) => value.dispose());
    this.tensorMap.clear();
    this.handle.dispose();
  }
  size() {
    return this.tensorMap.size;
  }
  tensorSize() {
    return scalar(this.size(), "int32");
  }
  async import(keys, values) {
    this.checkKeyAndValueTensor(keys, values);
    const $keys = await keys.data();
    this.tensorMap.forEach((value) => value.dispose());
    this.tensorMap.clear();
    return tidy(() => {
      const $values = unstack(values);
      const keysLength = $keys.length;
      const valuesLength = $values.length;
      util_exports.assert(keysLength === valuesLength, () => `The number of elements doesn't match, keys has ${keysLength} elements, the values has ${valuesLength} elements.`);
      for (let i = 0; i < keysLength; i++) {
        const key = $keys[i];
        const value = $values[i];
        keep(value);
        this.tensorMap.set(key, value);
      }
      return this.handle;
    });
  }
  async find(keys, defaultValue) {
    this.checkKeyAndValueTensor(keys, defaultValue);
    const $keys = await keys.data();
    return tidy(() => {
      const result = [];
      for (let i = 0; i < $keys.length; i++) {
        const key = $keys[i];
        const value = this.findWithDefault(key, defaultValue);
        result.push(value);
      }
      return stack(result);
    });
  }
  findWithDefault(key, defaultValue) {
    const result = this.tensorMap.get(key);
    return result != null ? result : defaultValue;
  }
  checkKeyAndValueTensor(key, value) {
    if (key.dtype !== this.keyDType) {
      throw new Error(`Expect key dtype ${this.keyDType}, but got ${key.dtype}`);
    }
    if (value.dtype !== this.valueDType) {
      throw new Error(`Expect value dtype ${this.valueDType}, but got ${value.dtype}`);
    }
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/hash_table_executor.js
var executeOp9 = async (node, tensorMap, context, resourceManager) => {
  switch (node.op) {
    case "HashTable":
    case "HashTableV2": {
      const keyDType = getParamValue("keyDType", node, tensorMap, context);
      const valueDType = getParamValue("valueDType", node, tensorMap, context);
      const hashTable = new HashTable(keyDType, valueDType);
      resourceManager.addHashTable(node.name, hashTable);
      return [hashTable.handle];
    }
    case "LookupTableImport":
    case "LookupTableImportV2": {
      const handle = getParamValue("tableHandle", node, tensorMap, context, resourceManager);
      const keys = getParamValue("keys", node, tensorMap, context);
      const values = getParamValue("values", node, tensorMap, context);
      const hashTable = resourceManager.getHashTableById(handle.id);
      return [await hashTable.import(keys, values)];
    }
    case "LookupTableFind":
    case "LookupTableFindV2": {
      const handle = getParamValue("tableHandle", node, tensorMap, context, resourceManager);
      const keys = getParamValue("keys", node, tensorMap, context);
      const defaultValue = getParamValue("defaultValue", node, tensorMap, context);
      const hashTable = resourceManager.getHashTableById(handle.id);
      return [await hashTable.find(keys, defaultValue)];
    }
    case "LookupTableSize":
    case "LookupTableSizeV2": {
      const handle = getParamValue("tableHandle", node, tensorMap, context, resourceManager);
      const hashTable = resourceManager.getHashTableById(handle.id);
      return [hashTable.tensorSize()];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/image_executor.js
var executeOp10 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "ResizeBilinear": {
      const images = getParamValue("images", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      const alignCorners = getParamValue("alignCorners", node, tensorMap, context);
      const halfPixelCenters = getParamValue("halfPixelCenters", node, tensorMap, context);
      return [ops.image.resizeBilinear(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
    }
    case "ResizeNearestNeighbor": {
      const images = getParamValue("images", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      const alignCorners = getParamValue("alignCorners", node, tensorMap, context);
      const halfPixelCenters = getParamValue("halfPixelCenters", node, tensorMap, context);
      return [ops.image.resizeNearestNeighbor(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
    }
    case "CropAndResize": {
      const image2 = getParamValue("image", node, tensorMap, context);
      const boxes = getParamValue("boxes", node, tensorMap, context);
      const boxInd = getParamValue("boxInd", node, tensorMap, context);
      const cropSize = getParamValue("cropSize", node, tensorMap, context);
      const method = getParamValue("method", node, tensorMap, context);
      const extrapolationValue = getParamValue("extrapolationValue", node, tensorMap, context);
      return [ops.image.cropAndResize(image2, boxes, boxInd, cropSize, method, extrapolationValue)];
    }
    case "ImageProjectiveTransformV3": {
      const images = getParamValue("images", node, tensorMap, context);
      const transforms = getParamValue("transforms", node, tensorMap, context);
      const outputShape = getParamValue("outputShape", node, tensorMap, context);
      const fillValue = getParamValue("fillValue", node, tensorMap, context);
      const interpolation = getParamValue("interpolation", node, tensorMap, context);
      const fillMode = getParamValue("fillMode", node, tensorMap, context);
      return [ops.image.transform(images, transforms, interpolation.toLowerCase(), fillMode.toLowerCase(), fillValue, outputShape)];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/logical_executor.js
var executeOp11 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Equal": {
      return [ops.equal(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "NotEqual": {
      return [ops.notEqual(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Greater": {
      return [ops.greater(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "GreaterEqual": {
      return [ops.greaterEqual(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Less": {
      return [ops.less(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "LessEqual": {
      return [ops.lessEqual(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "LogicalAnd": {
      return [ops.logicalAnd(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "LogicalNot": {
      return [ops.logicalNot(getParamValue("a", node, tensorMap, context))];
    }
    case "LogicalOr": {
      return [ops.logicalOr(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Select":
    case "SelectV2": {
      return [ops.where(getParamValue("condition", node, tensorMap, context), getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/matrices_executor.js
var executeOp12 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "BatchMatMul":
    case "BatchMatMulV2":
    case "MatMul":
      return [ops.matMul(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context), getParamValue("transposeA", node, tensorMap, context), getParamValue("transposeB", node, tensorMap, context))];
    case "Einsum":
      return [ops.einsum(getParamValue("equation", node, tensorMap, context), ...getParamValue("tensors", node, tensorMap, context))];
    case "Transpose":
      return [ops.transpose(getParamValue("x", node, tensorMap, context), getParamValue("perm", node, tensorMap, context))];
    case "_FusedMatMul":
      const [extraOp, activationFunc] = getParamValue("fusedOps", node, tensorMap, context);
      const isBiasAdd = extraOp === "biasadd";
      const isPrelu = activationFunc === "prelu";
      const numArgs = getParamValue("numArgs", node, tensorMap, context);
      const leakyreluAlpha = getParamValue("leakyreluAlpha", node, tensorMap, context);
      if (isBiasAdd) {
        if (isPrelu && numArgs !== 2) {
          throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
        }
        if (!isPrelu && numArgs !== 1) {
          throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.");
        }
      }
      const [biasArg, preluArg] = getParamValue("args", node, tensorMap, context);
      return [ops.fused.matMul({
        a: getParamValue("a", node, tensorMap, context),
        b: getParamValue("b", node, tensorMap, context),
        transposeA: getParamValue("transposeA", node, tensorMap, context),
        transposeB: getParamValue("transposeB", node, tensorMap, context),
        bias: biasArg,
        activation: activationFunc,
        preluActivationWeights: preluArg,
        leakyreluAlpha
      })];
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/normalization_executor.js
var executeOp13 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "EuclideanNorm":
      return [ops.euclideanNorm(getParamValue("x", node, tensorMap, context), getParamValue("axis", node, tensorMap, context), getParamValue("keepDims", node, tensorMap, context))];
    case "FusedBatchNorm":
    case "FusedBatchNormV2": {
      return [ops.batchNorm(getParamValue("x", node, tensorMap, context), getParamValue("mean", node, tensorMap, context), getParamValue("variance", node, tensorMap, context), getParamValue("offset", node, tensorMap, context), getParamValue("scale", node, tensorMap, context), getParamValue("epsilon", node, tensorMap, context))];
    }
    case "FusedBatchNormV3": {
      return [ops.batchNorm(getParamValue("x", node, tensorMap, context), getParamValue("mean", node, tensorMap, context), getParamValue("variance", node, tensorMap, context), getParamValue("offset", node, tensorMap, context), getParamValue("scale", node, tensorMap, context), getParamValue("epsilon", node, tensorMap, context))];
    }
    case "LRN": {
      return [ops.localResponseNormalization(getParamValue("x", node, tensorMap, context), getParamValue("radius", node, tensorMap, context), getParamValue("bias", node, tensorMap, context), getParamValue("alpha", node, tensorMap, context), getParamValue("beta", node, tensorMap, context))];
    }
    case "Softmax": {
      return [ops.softmax(getParamValue("x", node, tensorMap, context))];
    }
    case "LogSoftmax": {
      return [ops.logSoftmax(getParamValue("x", node, tensorMap, context))];
    }
    case "SparseToDense": {
      return [ops.sparseToDense(getParamValue("sparseIndices", node, tensorMap, context), getParamValue("outputShape", node, tensorMap, context), getParamValue("sparseValues", node, tensorMap, context), getParamValue("defaultValue", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/reduction_executor.js
var executeOp14 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Max": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.max(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Mean": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.mean(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Min": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.min(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Sum": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.sum(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "All": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.all(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Any": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.any(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "ArgMax": {
      const axis = getParamValue("axis", node, tensorMap, context);
      return [ops.argMax(getParamValue("x", node, tensorMap, context), axis)];
    }
    case "ArgMin": {
      const axis = getParamValue("axis", node, tensorMap, context);
      return [ops.argMin(getParamValue("x", node, tensorMap, context), axis)];
    }
    case "Prod": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.prod(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Cumprod": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const exclusive = getParamValue("exclusive", node, tensorMap, context);
      const reverse2 = getParamValue("reverse", node, tensorMap, context);
      return [ops.cumprod(getParamValue("x", node, tensorMap, context), axis, exclusive, reverse2)];
    }
    case "Cumsum": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const exclusive = getParamValue("exclusive", node, tensorMap, context);
      const reverse2 = getParamValue("reverse", node, tensorMap, context);
      return [ops.cumsum(getParamValue("x", node, tensorMap, context), axis, exclusive, reverse2)];
    }
    case "Bincount":
      const x = getParamValue("x", node, tensorMap, context);
      const weights = getParamValue("weights", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      return [ops.bincount(x, weights, size)];
    case "DenseBincount": {
      const x2 = getParamValue("x", node, tensorMap, context);
      const weights2 = getParamValue("weights", node, tensorMap, context);
      const size2 = getParamValue("size", node, tensorMap, context);
      const binaryOutput = getParamValue("binaryOutput", node, tensorMap, context);
      return [ops.denseBincount(x2, weights2, size2, binaryOutput)];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/slice_join_executor.js
var executeOp15 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "ConcatV2":
    case "Concat": {
      const n = getParamValue("n", node, tensorMap, context);
      const axis = getParamValue("axis", node, tensorMap, context);
      let inputs = getParamValue("tensors", node, tensorMap, context);
      inputs = inputs.slice(0, n);
      return [ops.concat(inputs, axis)];
    }
    case "Gather": {
      const input = getParamValue("x", node, tensorMap, context);
      const indices = getParamValue("indices", node, tensorMap, context);
      return [ops.gather(input, ops.cast(indices, "int32"), 0)];
    }
    case "GatherV2": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const batchDims = getParamValue("batchDims", node, tensorMap, context);
      const input = getParamValue("x", node, tensorMap, context);
      const indices = getParamValue("indices", node, tensorMap, context);
      return [ops.gather(input, ops.cast(indices, "int32"), axis, batchDims)];
    }
    case "Reverse": {
      const dims = getParamValue("dims", node, tensorMap, context);
      const axis = [];
      for (let i = 0; i < dims.length; i++) {
        if (dims[i]) {
          axis.push(i);
        }
      }
      const input = getParamValue("x", node, tensorMap, context);
      return [ops.reverse(input, axis)];
    }
    case "ReverseV2": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const input = getParamValue("x", node, tensorMap, context);
      return [ops.reverse(input, axis)];
    }
    case "Slice": {
      const begin = getParamValue("begin", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      return [ops.slice(getParamValue("x", node, tensorMap, context), begin, size)];
    }
    case "StridedSlice": {
      const begin = getParamValue("begin", node, tensorMap, context);
      const end = getParamValue("end", node, tensorMap, context);
      const strides = getParamValue("strides", node, tensorMap, context);
      const beginMask = getParamValue("beginMask", node, tensorMap, context);
      const endMask = getParamValue("endMask", node, tensorMap, context);
      const ellipsisMask = getParamValue("ellipsisMask", node, tensorMap, context);
      const newAxisMask = getParamValue("newAxisMask", node, tensorMap, context);
      const shrinkAxisMask = getParamValue("shrinkAxisMask", node, tensorMap, context);
      const tensor2 = getParamValue("x", node, tensorMap, context);
      return [ops.stridedSlice(tensor2, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask)];
    }
    case "Pack": {
      return tidy(() => {
        const axis = getParamValue("axis", node, tensorMap, context);
        const tensors = getParamValue("tensors", node, tensorMap, context);
        const shape = tensors[0].shape;
        const squeezedShape = ops.squeeze(tensors[0]).shape;
        const mapped = tensors.map((tensor2) => {
          const sameShape = util_exports.arraysEqual(tensor2.shape, shape);
          if (!sameShape && !util_exports.arraysEqual(ops.squeeze(tensor2).shape, squeezedShape)) {
            throw new Error("the input tensors shape does not match");
          }
          return sameShape ? tensor2 : ops.reshape(tensor2, shape);
        });
        return [ops.stack(mapped, axis)];
      });
    }
    case "Unpack": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const tensor2 = getParamValue("tensor", node, tensorMap, context);
      return ops.unstack(tensor2, axis);
    }
    case "Tile": {
      const reps = getParamValue("reps", node, tensorMap, context);
      return [ops.tile(getParamValue("x", node, tensorMap, context), reps)];
    }
    case "Split":
    case "SplitV": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const numOrSizeSplits = getParamValue("numOrSizeSplits", node, tensorMap, context);
      const tensor2 = getParamValue("x", node, tensorMap, context);
      return ops.split(tensor2, numOrSizeSplits, axis);
    }
    case "ScatterNd": {
      const indices = getParamValue("indices", node, tensorMap, context);
      const values = getParamValue("values", node, tensorMap, context);
      const shape = getParamValue("shape", node, tensorMap, context);
      return [ops.scatterND(indices, values, shape)];
    }
    case "GatherNd": {
      const x = getParamValue("x", node, tensorMap, context);
      const indices = getParamValue("indices", node, tensorMap, context);
      return [ops.gatherND(x, indices)];
    }
    case "SparseToDense": {
      const indices = getParamValue("sparseIndices", node, tensorMap, context);
      const shape = getParamValue("outputShape", node, tensorMap, context);
      const sparseValues = getParamValue("sparseValues", node, tensorMap, context);
      const defaultValue = getParamValue("defaultValue", node, tensorMap, context);
      return [ops.sparseToDense(indices, sparseValues, shape, sparseValues.dtype === defaultValue.dtype ? defaultValue : ops.cast(defaultValue, sparseValues.dtype))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/sparse_executor.js
var executeOp16 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "SparseFillEmptyRows": {
      const { outputIndices, outputValues, emptyRowIndicator, reverseIndexMap } = ops.sparse.sparseFillEmptyRows(getParamValue("indices", node, tensorMap, context), getParamValue("values", node, tensorMap, context), getParamValue("denseShape", node, tensorMap, context), getParamValue("defaultValue", node, tensorMap, context));
      return [
        outputIndices,
        outputValues,
        emptyRowIndicator,
        reverseIndexMap
      ];
    }
    case "SparseReshape": {
      const { outputIndices, outputShape } = ops.sparse.sparseReshape(getParamValue("inputIndices", node, tensorMap, context), getParamValue("inputShape", node, tensorMap, context), getParamValue("newShape", node, tensorMap, context));
      return [outputIndices, outputShape];
    }
    case "SparseSegmentMean": {
      const outputData = ops.sparse.sparseSegmentMean(getParamValue("data", node, tensorMap, context), getParamValue("indices", node, tensorMap, context), getParamValue("segmentIds", node, tensorMap, context));
      return [outputData];
    }
    case "SparseSegmentSum": {
      const outputData = ops.sparse.sparseSegmentSum(getParamValue("data", node, tensorMap, context), getParamValue("indices", node, tensorMap, context), getParamValue("segmentIds", node, tensorMap, context));
      return [outputData];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/spectral_executor.js
var executeOp17 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "FFT": {
      return [ops.fft(getParamValue("x", node, tensorMap, context))];
    }
    case "IFFT": {
      return [ops.ifft(getParamValue("x", node, tensorMap, context))];
    }
    case "RFFT": {
      return [ops.rfft(getParamValue("x", node, tensorMap, context))];
    }
    case "IRFFT": {
      return [ops.irfft(getParamValue("x", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/string_executor.js
var executeOp18 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "StringNGrams": {
      const { nGrams, nGramsSplits } = ops.string.stringNGrams(getParamValue("data", node, tensorMap, context), getParamValue("dataSplits", node, tensorMap, context), getParamValue("separator", node, tensorMap, context), getParamValue("nGramWidths", node, tensorMap, context), getParamValue("leftPad", node, tensorMap, context), getParamValue("rightPad", node, tensorMap, context), getParamValue("padWidth", node, tensorMap, context), getParamValue("preserveShortSequences", node, tensorMap, context));
      return [nGrams, nGramsSplits];
    }
    case "StringSplit": {
      const { indices, values, shape } = ops.string.stringSplit(getParamValue("input", node, tensorMap, context), getParamValue("delimiter", node, tensorMap, context), getParamValue("skipEmpty", node, tensorMap, context));
      return [indices, values, shape];
    }
    case "StringToHashBucketFast": {
      const output = ops.string.stringToHashBucketFast(getParamValue("input", node, tensorMap, context), getParamValue("numBuckets", node, tensorMap, context));
      return [output];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/transformation_executor.js
var executeOp19 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Cast": {
      return [ops.cast(getParamValue("x", node, tensorMap, context), getParamValue("dtype", node, tensorMap, context))];
    }
    case "ExpandDims": {
      const axis = getParamValue("axis", node, tensorMap, context);
      return [ops.expandDims(getParamValue("x", node, tensorMap, context), axis)];
    }
    case "Squeeze": {
      const axis = getParamValue("axis", node, tensorMap, context);
      return [ops.squeeze(getParamValue("x", node, tensorMap, context), axis)];
    }
    case "Reshape": {
      return [ops.reshape(getParamValue("x", node, tensorMap, context), getParamValue("shape", node, tensorMap, context))];
    }
    case "MirrorPad": {
      return [ops.mirrorPad(getParamValue("x", node, tensorMap, context), getParamValue("padding", node, tensorMap, context), getParamValue("mode", node, tensorMap, context))];
    }
    case "PadV2":
    case "Pad": {
      return [ops.pad(getParamValue("x", node, tensorMap, context), getParamValue("padding", node, tensorMap, context), getParamValue("constantValue", node, tensorMap, context))];
    }
    case "SpaceToBatchND": {
      const blockShape = getParamValue("blockShape", node, tensorMap, context);
      const paddings = getParamValue("paddings", node, tensorMap, context);
      return [ops.spaceToBatchND(getParamValue("x", node, tensorMap, context), blockShape, paddings)];
    }
    case "BatchToSpaceND": {
      const blockShape = getParamValue("blockShape", node, tensorMap, context);
      const crops = getParamValue("crops", node, tensorMap, context);
      return [ops.batchToSpaceND(getParamValue("x", node, tensorMap, context), blockShape, crops)];
    }
    case "DepthToSpace": {
      const blockSize = getParamValue("blockSize", node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      return [ops.depthToSpace(getParamValue("x", node, tensorMap, context), blockSize, dataFormat)];
    }
    case "BroadcastTo": {
      return [ops.broadcastTo(getParamValue("x", node, tensorMap, context), getParamValue("shape", node, tensorMap, context))];
    }
    case "BroadcastArgs": {
      return [ops.broadcastArgs(getParamValue("s0", node, tensorMap, context), getParamValue("s1", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/operation_executor.js
function executeOp20(node, tensorMap, context, resourceManager, tidy2 = tidy) {
  const value = ((node2, tensorMap2, context2) => {
    switch (node2.category) {
      case "arithmetic":
        return tidy2(() => executeOp(node2, tensorMap2, context2));
      case "basic_math":
        return tidy2(() => executeOp2(node2, tensorMap2, context2));
      case "control":
        return executeOp3(node2, tensorMap2, context2);
      case "convolution":
        return tidy2(() => executeOp4(node2, tensorMap2, context2));
      case "creation":
        return tidy2(() => executeOp5(node2, tensorMap2, context2));
      case "dynamic":
        return executeOp6(node2, tensorMap2, context2);
      case "evaluation":
        return tidy2(() => executeOp7(node2, tensorMap2, context2));
      case "image":
        return tidy2(() => executeOp10(node2, tensorMap2, context2));
      case "graph":
        return tidy2(() => executeOp8(node2, tensorMap2, context2));
      case "logical":
        return tidy2(() => executeOp11(node2, tensorMap2, context2));
      case "matrices":
        return tidy2(() => executeOp12(node2, tensorMap2, context2));
      case "normalization":
        return tidy2(() => executeOp13(node2, tensorMap2, context2));
      case "reduction":
        return tidy2(() => executeOp14(node2, tensorMap2, context2));
      case "slice_join":
        return tidy2(() => executeOp15(node2, tensorMap2, context2));
      case "sparse":
        return tidy2(() => executeOp16(node2, tensorMap2, context2));
      case "spectral":
        return tidy2(() => executeOp17(node2, tensorMap2, context2));
      case "string":
        return tidy2(() => executeOp18(node2, tensorMap2, context2));
      case "transformation":
        return tidy2(() => executeOp19(node2, tensorMap2, context2));
      case "hash_table":
        return executeOp9(node2, tensorMap2, context2, resourceManager);
      case "custom":
        const opMapper = getRegisteredOp(node2.op);
        if (opMapper && opMapper.customExecutor) {
          return opMapper.customExecutor(new NodeValueImpl(node2, tensorMap2, context2));
        } else {
          throw TypeError(`Custom op ${node2.op} is not registered.`);
        }
      default:
        throw TypeError(`Unknown op '${node2.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`);
    }
  })(node, tensorMap, context);
  if (util_exports.isPromise(value)) {
    return value.then((data) => [].concat(data));
  }
  return [].concat(value);
}

// node_modules/@tensorflow/tfjs-converter/dist/executor/execution_context.js
var ExecutionContext = class {
  constructor(weightMap = {}, tensorArrayMap = {}, tensorListMap = {}, functionMap = {}) {
    this.weightMap = weightMap;
    this.tensorArrayMap = tensorArrayMap;
    this.tensorListMap = tensorListMap;
    this.functionMap = functionMap;
    this.rootContext = { id: 0, frameName: "", iterationId: 0 };
    this.contexts = [this.rootContext];
    this.lastId = 0;
    this.generateCurrentContextIds();
  }
  newFrame(id, frameName) {
    return { id, frameName, iterationId: 0 };
  }
  set currentContext(contexts) {
    if (this.contexts !== contexts) {
      this.contexts = contexts;
      this.generateCurrentContextIds();
    }
  }
  get currentContext() {
    return this.contexts;
  }
  get currentContextId() {
    return this._currentContextIds[0];
  }
  get currentContextIds() {
    return this._currentContextIds;
  }
  generateCurrentContextIds() {
    const names = [];
    for (let i = 0; i < this.contexts.length - 1; i++) {
      const contexts = this.contexts.slice(0, this.contexts.length - i);
      names.push(this.contextIdforContexts(contexts));
    }
    names.push("");
    this._currentContextIds = names;
  }
  contextIdforContexts(contexts) {
    return contexts ? contexts.map((context) => context.id === 0 && context.iterationId === 0 ? "" : `${context.frameName}-${context.iterationId}`).join("/") : "";
  }
  enterFrame(frameId) {
    if (this.contexts) {
      this.lastId++;
      this.contexts = this.contexts.slice();
      this.contexts.push(this.newFrame(this.lastId, frameId));
      this._currentContextIds.unshift(this.contextIdforContexts(this.contexts));
    }
  }
  exitFrame() {
    if (this.contexts && this.contexts.length > 1) {
      this.contexts = this.contexts.slice();
      this.contexts.splice(-1);
      this.currentContextIds.shift();
    } else {
      throw new Error("Cannot exit frame, the context is empty");
    }
  }
  nextIteration() {
    if (this.contexts && this.contexts.length > 0) {
      this.contexts = this.contexts.slice();
      this.lastId++;
      const context = Object.assign({}, this.contexts[this.contexts.length - 1]);
      context.iterationId += 1;
      context.id = this.lastId;
      this.contexts.splice(-1, 1, context);
      this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
    } else {
      throw new Error("Cannot increase frame iteration, the context is empty");
    }
  }
  getWeight(name) {
    return this.weightMap[name];
  }
  addTensorArray(tensorArray) {
    this.tensorArrayMap[tensorArray.id] = tensorArray;
  }
  getTensorArray(id) {
    return this.tensorArrayMap[id];
  }
  addTensorList(tensorList) {
    this.tensorListMap[tensorList.id] = tensorList;
  }
  getTensorList(id) {
    return this.tensorListMap[id];
  }
  dispose(keepIds) {
    for (const key in this.tensorArrayMap) {
      this.tensorArrayMap[key].clearAndClose(keepIds);
    }
    for (const key in this.tensorListMap) {
      this.tensorListMap[key].clearAndClose(keepIds);
    }
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/model_analysis.js
function getExecutionSubgraph(inputs, outputs, weightMap, initNodes) {
  const usedNodes = /* @__PURE__ */ new Set();
  const missingInputs = [];
  let dynamicNode = null;
  let syncInputs = null;
  const seen = /* @__PURE__ */ new Set();
  const inputNodeNames = Object.keys(inputs).map((name) => parseNodeName(name)[0]);
  let initNodeNames = [];
  if (initNodes != null) {
    initNodeNames = initNodes.map((node) => parseNodeName(node.name)[0]);
  }
  const frontier = [...outputs];
  while (frontier.length > 0) {
    const node = frontier.pop();
    if (isControlFlow(node) || isDynamicShape(node) || isHashTable(node)) {
      if (dynamicNode == null) {
        dynamicNode = node;
        syncInputs = dynamicNode.children.map((child) => child.name).filter((name) => usedNodes.has(name));
      }
    }
    usedNodes.add(node.name);
    if (weightMap[node.name] != null) {
      continue;
    }
    if (inputNodeNames.indexOf(node.name) !== -1) {
      continue;
    }
    if (initNodeNames.indexOf(node.name) !== -1) {
      continue;
    }
    if (node.inputs.length === 0) {
      missingInputs.push(node.name);
      continue;
    }
    node.inputs.forEach((input) => {
      if (seen.has(input.name)) {
        return;
      }
      seen.add(input.name);
      frontier.push(input);
    });
  }
  return { inputs, outputs, usedNodes, missingInputs, dynamicNode, syncInputs };
}
function getNodesInTopologicalOrder(graph, weightMap, executionInfo) {
  const { usedNodes, inputs } = executionInfo;
  const frontier = [];
  const inputNodes = Object.keys(inputs).map((name) => parseNodeName(name)[0]).map((name) => graph.nodes[name]);
  const initNodes = graph.initNodes;
  inputNodes.forEach((input) => {
    if (usedNodes.has(input.name)) {
      frontier.push(input);
    }
  });
  graph.weights.forEach((weight) => {
    if (usedNodes.has(weight.name)) {
      frontier.push(weight);
    }
  });
  if (initNodes != null) {
    initNodes.forEach((node) => {
      if (usedNodes.has(node.name)) {
        frontier.push(node);
      }
    });
  }
  const seen = /* @__PURE__ */ new Set();
  const orderedNodes = [];
  while (frontier.length > 0) {
    const node = frontier.pop();
    seen.add(node.name);
    if (!weightMap[node.name]) {
      orderedNodes.push(node);
    }
    node.children.forEach((child) => {
      if (!seen.has(child.name) && usedNodes.has(child.name) && child.inputs.every((input) => seen.has(input.name))) {
        frontier.push(child);
      }
    });
  }
  return orderedNodes;
}
var CONTROL_FLOW_OPS = [
  "Switch",
  "Merge",
  "Enter",
  "Exit",
  "NextIteration",
  "StatelessIf",
  "StatelessWhile",
  "if",
  "While"
];
var DYNAMIC_SHAPE_OPS = [
  "NonMaxSuppressionV2",
  "NonMaxSuppressionV3",
  "NonMaxSuppressionV5",
  "Where"
];
var HASH_TABLE_OPS = [
  "HashTable",
  "HashTableV2",
  "LookupTableImport",
  "LookupTableImportV2",
  "LookupTableFind",
  "LookupTableFindV2",
  "LookupTableSize",
  "LookupTableSizeV2"
];
function isControlFlow(node) {
  return CONTROL_FLOW_OPS.indexOf(node.op) >= 0;
}
function isDynamicShape(node) {
  return DYNAMIC_SHAPE_OPS.indexOf(node.op) >= 0;
}
function isHashTable(node) {
  return HASH_TABLE_OPS.indexOf(node.op) >= 0;
}

// node_modules/@tensorflow/tfjs-converter/dist/executor/graph_executor.js
var GraphExecutor = class {
  constructor(graph, parent) {
    this.graph = graph;
    this.parent = parent;
    this.compiledMap = /* @__PURE__ */ new Map();
    this._weightMap = {};
    this.SEPERATOR = ",";
    this._functions = {};
    this._functionExecutorMap = {};
    this.intermediateTensors = {};
    this.keepTensorForDebug = false;
    this._outputs = graph.outputs;
    this._inputs = graph.inputs;
    this._initNodes = graph.initNodes;
    this._signature = graph.signature;
    this._functions = graph.functions;
    if (graph.functions != null) {
      Object.keys(graph.functions).forEach((name) => {
        this._functionExecutorMap[name] = new GraphExecutor(graph.functions[name], this);
      });
    }
  }
  get weightIds() {
    return this.parent ? this.parent.weightIds : this._weightIds;
  }
  get functionExecutorMap() {
    return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap;
  }
  get weightMap() {
    return this.parent ? this.parent.weightMap : this._weightMap;
  }
  set weightMap(weightMap) {
    const weightIds = Object.keys(weightMap).map((key) => weightMap[key].map((tensor2) => tensor2.id));
    this._weightIds = [].concat(...weightIds);
    this._weightMap = weightMap;
  }
  set resourceManager(resourceManager) {
    this._resourceManager = resourceManager;
  }
  get inputs() {
    return this._inputs.map((node) => {
      return {
        name: node.name,
        shape: node.attrParams["shape"] ? node.attrParams["shape"].value : void 0,
        dtype: node.attrParams["dtype"] ? node.attrParams["dtype"].value : void 0
      };
    });
  }
  get outputs() {
    return this._outputs.map((node) => {
      return {
        name: node.name,
        shape: node.attrParams["shape"] ? node.attrParams["shape"].value : void 0,
        dtype: node.attrParams["dtype"] ? node.attrParams["dtype"].value : void 0
      };
    });
  }
  get inputNodes() {
    return this._inputs.map((node) => node.signatureKey || node.name);
  }
  get outputNodes() {
    return this._outputs.map((node) => {
      const name = node.signatureKey || node.name;
      return node.defaultOutput ? `${name}:${node.defaultOutput}` : name;
    });
  }
  get functions() {
    return Object.keys(this._functions).reduce((map, key) => {
      map[key] = this._functions[key].signature;
      return map;
    }, {});
  }
  getCompilationKey(inputs, outputs) {
    const sortedInputs = inputs.map((node) => node.name).sort();
    const sortedOutputs = outputs.map((node) => node.name).sort();
    return sortedInputs.join(this.SEPERATOR) + "--" + sortedOutputs.join(this.SEPERATOR);
  }
  compile(inputs, outputs) {
    const executionInfo = getExecutionSubgraph(inputs, outputs, this.weightMap, this._initNodes);
    const { missingInputs, dynamicNode, syncInputs } = executionInfo;
    if (dynamicNode != null) {
      throw new Error(`This execution contains the node '${dynamicNode.name}', which has the dynamic op '${dynamicNode.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${syncInputs}]`);
    }
    if (missingInputs.length > 0) {
      const outNames = outputs.map((n) => n.name);
      const inNames = Object.keys(inputs);
      throw new Error(`Cannot compute the outputs [${outNames}] from the provided inputs [${inNames}]. Missing the following inputs: [${missingInputs}]`);
    }
    return getNodesInTopologicalOrder(this.graph, this.weightMap, executionInfo);
  }
  execute(inputs, outputs) {
    inputs = this.mapInputs(inputs);
    const names = Object.keys(inputs).sort();
    this.checkInputs(inputs);
    this.checkInputShapeAndType(inputs);
    outputs = this.mapOutputs(outputs);
    this.checkOutputs(outputs);
    const inputNodes = names.map((name) => this.graph.nodes[parseNodeName(name)[0]]);
    const outputNodeNames = outputs.map((name) => parseNodeName(name)[0]);
    let outputNodes = outputNodeNames.map((name) => this.graph.nodes[name]);
    this.resetIntermediateTensors();
    if (outputNodes.length === 0) {
      outputNodes = this._outputs;
    }
    const compilationKey = this.getCompilationKey(inputNodes, outputNodes);
    let orderedNodes = this.compiledMap.get(compilationKey);
    if (orderedNodes == null) {
      orderedNodes = this.compile(inputs, outputNodes);
      this.compiledMap.set(compilationKey, orderedNodes);
    }
    const tensorArrayMap = {};
    const tensorListMap = {};
    return tidy(() => {
      const context = new ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap);
      const tensorsMap = Object.assign({}, this.weightMap);
      Object.keys(inputs).forEach((name) => {
        const [nodeName, index] = parseNodeName(name);
        const tensors = [];
        tensors[index] = inputs[name];
        tensorsMap[nodeName] = tensors;
      });
      const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
      const intermediateTensorConsumerCount = {};
      for (let i = 0; i < orderedNodes.length; i++) {
        const node = orderedNodes[i];
        if (!tensorsMap[node.name]) {
          const tensors = executeOp20(node, tensorsMap, context, this._resourceManager);
          if (util_exports.isPromise(tensors)) {
            throw new Error(`The execution of the op '${node.op}' returned a promise. Please use model.executeAsync() instead.`);
          }
          tensorsMap[node.name] = tensors;
          this.checkTensorForDisposal(node.name, node, tensorsMap, context, tensorsToKeep, outputNodeNames, intermediateTensorConsumerCount);
        }
      }
      if (this.parent == null) {
        context.dispose(tensorsToKeep);
      }
      return outputs.map((name) => getTensor(name, tensorsMap, context));
    });
  }
  getFrozenTensorIds(tensorMap) {
    const ids = [].concat.apply([], Object.keys(tensorMap).map((key) => tensorMap[key]).map((tensors) => tensors.map((tensor2) => tensor2.id)));
    return new Set(ids);
  }
  checkTensorForDisposal(nodeName, node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount) {
    if (node.category === "control" || outputNames.indexOf(nodeName) !== -1) {
      return;
    }
    tensorMap[nodeName].forEach((tensor2) => {
      if (tensor2 != null) {
        intermediateTensorConsumerCount[tensor2.id] = (intermediateTensorConsumerCount[tensor2.id] || 0) + node.children.length;
      }
    });
    node.inputs.forEach((input) => {
      if (input.category !== "control") {
        const tensors = getTensorsForCurrentContenxt(input.name, tensorMap, context);
        if (tensors != null) {
          tensors.forEach((tensor2) => {
            if (tensor2 && !tensor2.kept && !tensorsToKeep.has(tensor2.id)) {
              const count = intermediateTensorConsumerCount[tensor2.id];
              if (count === 1) {
                if (!this.keepTensorForDebug) {
                  tensor2.dispose();
                } else {
                  const [nodeName2, index] = getNodeNameAndIndex(node.name, context);
                  if (this.intermediateTensors[nodeName2]) {
                    this.intermediateTensors[nodeName2][index] = tensor2;
                  } else {
                    this.intermediateTensors[nodeName2] = [];
                    this.intermediateTensors[nodeName2][index] = tensor2;
                  }
                }
                delete intermediateTensorConsumerCount[tensor2.id];
              } else if (count != null) {
                intermediateTensorConsumerCount[tensor2.id]--;
              }
            }
          });
        }
      }
    });
  }
  async executeAsync(inputs, outputs) {
    return this._executeAsync(inputs, outputs);
  }
  disposeIntermediateTensors() {
    if (!this.intermediateTensors) {
      return;
    }
    Object.keys(this.intermediateTensors).forEach((key) => this.intermediateTensors[key].forEach((tensor2) => tensor2.dispose()));
    this.disposeTensorsMap();
  }
  disposeTensorsMap() {
    if (!this.tensorsMap) {
      return;
    }
    Object.keys(this.tensorsMap).forEach((key) => {
      const tensorArray = this.tensorsMap[key];
      tensorArray.forEach((tensor2) => {
        if (tensor2 && !tensor2.kept && !tensor2.isDisposed && !this.keepIds.has(tensor2.id)) {
          tensor2.dispose();
        }
      });
    });
  }
  getIntermediateTensors() {
    return this.tensorsMap;
  }
  resetIntermediateTensors() {
    for (const key in this.intermediateTensors) {
      this.intermediateTensors[key].forEach((tensor2) => tensor2.dispose());
      delete this.intermediateTensors[key];
    }
  }
  async _executeAsync(inputs, outputs, isFunctionExecution = false, tensorArrayMap = {}, tensorListMap = {}) {
    if (!isFunctionExecution) {
      inputs = this.mapInputs(inputs);
      this.checkInputs(inputs);
      this.checkInputShapeAndType(inputs);
      outputs = this.mapOutputs(outputs);
      this.checkOutputs(outputs);
    }
    try {
      this.keepTensorForDebug = env().getBool("KEEP_INTERMEDIATE_TENSORS");
    } catch (e) {
      console.warn(e.message);
    }
    this.resetIntermediateTensors();
    const context = new ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap);
    this.tensorsMap = await this.executeWithControlFlow(inputs, context, outputs, isFunctionExecution);
    const results = outputs.map((name) => getTensor(name, this.tensorsMap, context));
    const outputIds = results.map((t) => t.id);
    const inputIds = Object.keys(inputs).map((name) => inputs[name].id);
    this.keepIds = /* @__PURE__ */ new Set([...outputIds, ...inputIds, ...this.weightIds]);
    if (!this.keepTensorForDebug) {
      this.disposeTensorsMap();
    }
    if (this.parent == null) {
      context.dispose(this.keepIds);
    }
    return results;
  }
  async executeFunctionAsync(inputs, tensorArrayMap, tensorListMap) {
    const mappedInputs = inputs.reduce((map, tensor2, index) => {
      map[this.inputs[index].name] = tensor2;
      return map;
    }, {});
    return this._executeAsync(mappedInputs, this.outputNodes, true, tensorArrayMap, tensorListMap);
  }
  async executeWithControlFlow(inputs, context, outputNames, isFunctionExecution) {
    const names = Object.keys(inputs);
    const inputNodes = names.map((name) => this.graph.nodes[parseNodeName(name)[0]]);
    const outputNodeNames = outputNames.map((name) => parseNodeName(name)[0]);
    let outputNodes = outputNodeNames.map((name) => this.graph.nodes[name]);
    if (outputNodes.length === 0) {
      outputNodes = this._outputs;
    }
    const { usedNodes, missingInputs, dynamicNode, syncInputs } = getExecutionSubgraph(inputs, outputNodes, this.weightMap, this._initNodes);
    const stack2 = [
      ...inputNodes,
      ...this.graph.weights,
      ...this._initNodes || []
    ].map((node) => {
      return { node, contexts: context.currentContext };
    });
    const tensorsMap = Object.assign({}, this.weightMap);
    Object.keys(inputs).forEach((name) => {
      const [nodeName, index] = parseNodeName(name);
      const tensors = [];
      tensors[index] = inputs[name];
      tensorsMap[nodeName] = tensors;
    });
    const intermediateTensorConsumerCount = {};
    const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
    const added = {};
    while (stack2.length > 0) {
      const promises = this.processStack(inputNodes, stack2, context, tensorsMap, added, tensorsToKeep, outputNodeNames, intermediateTensorConsumerCount, usedNodes);
      await Promise.all(promises);
    }
    if (dynamicNode == null && !isFunctionExecution) {
      console.warn(`This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.`);
    }
    const missingOutputs = outputNodes.filter((node) => !isControlFlow(node) && !getTensor(node.name, tensorsMap, context)).map((node) => node.name);
    if (missingOutputs.length > 0) {
      let alternativeMsg = "";
      if (dynamicNode != null) {
        alternativeMsg = `Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${syncInputs}]`;
      }
      throw new Error(`Cannot compute the outputs [${missingOutputs}] from the provided inputs [${names}]. Consider providing the following inputs: [${missingInputs}]. ${alternativeMsg}`);
    }
    return tensorsMap;
  }
  processStack(inputNodes, stack2, context, tensorMap, added, tensorsToKeep, outputNames, intermediateTensorConsumerCount, usedNodes) {
    const promises = [];
    while (stack2.length > 0) {
      const item = stack2.pop();
      context.currentContext = item.contexts;
      let nodeName = "";
      if (item.node.op === "Enter" && getParamValue("isConstant", item.node, tensorMap, context)) {
        [nodeName] = getNodeNameAndIndex(item.node.name, context);
      }
      if (tensorMap[item.node.name] == null) {
        const tensors = executeOp20(item.node, tensorMap, context, this._resourceManager);
        if (!nodeName) {
          [nodeName] = getNodeNameAndIndex(item.node.name, context);
        }
        const currentContext = context.currentContext;
        if (util_exports.isPromise(tensors)) {
          promises.push(tensors.then((t) => {
            tensorMap[nodeName] = t;
            context.currentContext = currentContext;
            this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
            this.processChildNodes(item.node, stack2, context, tensorMap, added, usedNodes);
            return t;
          }));
        } else {
          tensorMap[nodeName] = tensors;
          this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNames, intermediateTensorConsumerCount);
          this.processChildNodes(item.node, stack2, context, tensorMap, added, usedNodes);
        }
      } else {
        this.processChildNodes(item.node, stack2, context, tensorMap, added, usedNodes);
      }
    }
    return promises;
  }
  processChildNodes(node, stack2, context, tensorMap, added, usedNodes) {
    node.children.forEach((childNode) => {
      const [nodeName] = getNodeNameAndIndex(childNode.name, context);
      if (added[nodeName] || !usedNodes.has(childNode.name)) {
        return;
      }
      if (childNode.op === "Merge") {
        if (childNode.inputNames.some((name) => {
          return !!getTensor(name, tensorMap, context);
        })) {
          added[nodeName] = true;
          stack2.push({ contexts: context.currentContext, node: childNode });
        }
      } else if (childNode.inputNames.every((name) => {
        return !!getTensor(name, tensorMap, context);
      })) {
        added[nodeName] = true;
        stack2.push({ contexts: context.currentContext, node: childNode });
      }
    });
  }
  dispose() {
    Object.keys(this.weightMap).forEach((key) => this.weightMap[key].forEach((tensor2) => tensor2.dispose()));
  }
  checkInputShapeAndType(inputs) {
    Object.keys(inputs).forEach((name) => {
      const input = inputs[name];
      const [nodeName] = parseNodeName(name);
      const node = this.graph.nodes[nodeName];
      if (node.attrParams["shape"] && node.attrParams["shape"].value) {
        const shape = node.attrParams["shape"].value;
        const match = shape.length === input.shape.length && input.shape.every((dim, index) => shape[index] === -1 || shape[index] === dim);
        util_exports.assert(match, () => `The shape of dict['${node.name}'] provided in model.execute(dict) must be [${shape}], but was [${input.shape}]`);
      }
      if (node.attrParams["dtype"] && node.attrParams["dtype"].value) {
        util_exports.assert(input.dtype === node.attrParams["dtype"].value, () => `The dtype of dict['${node.name}'] provided in model.execute(dict) must be ${node.attrParams["dtype"].value}, but was ${input.dtype}`);
      }
    });
  }
  mapInputs(inputs) {
    const result = {};
    for (const inputName in inputs) {
      if (this._signature != null && this._signature.inputs != null && this._signature.inputs[inputName] != null) {
        const tensor2 = this._signature.inputs[inputName];
        result[tensor2.name] = inputs[inputName];
      } else {
        result[inputName] = inputs[inputName];
      }
    }
    return result;
  }
  checkInputs(inputs) {
    const notInGraph = Object.keys(inputs).filter((name) => {
      const [nodeName] = parseNodeName(name);
      return this.graph.nodes[nodeName] == null;
    });
    if (notInGraph.length > 0) {
      throw new Error(`The dict provided in model.execute(dict) has keys: [${notInGraph}] that are not part of graph`);
    }
  }
  mapOutputs(outputs) {
    return outputs.map((name) => {
      if (this._signature != null && this._signature.outputs != null && this._signature.outputs[name] != null) {
        const tensor2 = this._signature.outputs[name];
        return tensor2.name;
      }
      return name;
    }, {});
  }
  checkOutputs(outputs) {
    outputs.forEach((name) => {
      const [normalizedName] = parseNodeName(name);
      if (!this.graph.nodes[normalizedName]) {
        throw new Error(`The output '${name}' is not found in the graph`);
      }
    });
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/resource_manager.js
var ResourceManager = class {
  constructor(hashTableNameToHandle = {}, hashTableMap = {}) {
    this.hashTableNameToHandle = hashTableNameToHandle;
    this.hashTableMap = hashTableMap;
  }
  addHashTable(name, hashTable) {
    this.hashTableNameToHandle[name] = hashTable.handle;
    this.hashTableMap[hashTable.id] = hashTable;
  }
  getHashTableHandleByName(name) {
    return this.hashTableNameToHandle[name];
  }
  getHashTableById(id) {
    return this.hashTableMap[id];
  }
  dispose() {
    for (const key in this.hashTableMap) {
      this.hashTableMap[key].clearAndClose();
      delete this.hashTableMap[key];
    }
    for (const name in this.hashTableNameToHandle) {
      this.hashTableNameToHandle[name].dispose();
      delete this.hashTableNameToHandle[name];
    }
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/graph_model.js
var TFHUB_SEARCH_PARAM = "?tfjs-format=file";
var DEFAULT_MODEL_NAME = "model.json";
var GraphModel = class {
  constructor(modelUrl, loadOptions = {}, tfio = io_exports) {
    this.modelUrl = modelUrl;
    this.loadOptions = loadOptions;
    this.version = "n/a";
    this.io = tfio;
    if (loadOptions == null) {
      this.loadOptions = {};
    }
    this.resourceManager = new ResourceManager();
  }
  get modelVersion() {
    return this.version;
  }
  get inputNodes() {
    return this.executor.inputNodes;
  }
  get outputNodes() {
    return this.executor.outputNodes;
  }
  get inputs() {
    return this.executor.inputs;
  }
  get outputs() {
    return this.executor.outputs;
  }
  get weights() {
    return this.executor.weightMap;
  }
  get metadata() {
    return this.artifacts.userDefinedMetadata;
  }
  get modelSignature() {
    return this.signature;
  }
  get modelStructuredOutputKeys() {
    return this.structuredOutputKeys;
  }
  findIOHandler() {
    const path = this.modelUrl;
    if (path.load != null) {
      this.handler = path;
    } else if (this.loadOptions.requestInit != null) {
      this.handler = this.io.browserHTTPRequest(path, this.loadOptions);
    } else {
      const handlers = this.io.getLoadHandlers(path, this.loadOptions);
      if (handlers.length === 0) {
        handlers.push(this.io.browserHTTPRequest(path, this.loadOptions));
      } else if (handlers.length > 1) {
        throw new Error(`Found more than one (${handlers.length}) load handlers for URL '${[path]}'`);
      }
      this.handler = handlers[0];
    }
  }
  load() {
    this.findIOHandler();
    if (this.handler.load == null) {
      throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
    }
    const loadResult = this.handler.load();
    if (util_exports.isPromise(loadResult)) {
      return loadResult.then((artifacts) => this.loadSync(artifacts));
    }
    return this.loadSync(loadResult);
  }
  loadSync(artifacts) {
    this.artifacts = artifacts;
    const graph = this.artifacts.modelTopology;
    let signature = this.artifacts.signature;
    if (this.artifacts.userDefinedMetadata != null) {
      const metadata = this.artifacts.userDefinedMetadata;
      if (metadata.signature != null) {
        signature = metadata.signature;
      }
      if (metadata.structuredOutputKeys != null) {
        this.structuredOutputKeys = metadata.structuredOutputKeys;
      }
    }
    this.signature = signature;
    this.version = `${graph.versions.producer}.${graph.versions.minConsumer}`;
    const weightMap = this.io.decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs);
    this.executor = new GraphExecutor(OperationMapper.Instance.transformGraph(graph, this.signature));
    this.executor.weightMap = this.convertTensorMapToTensorsMap(weightMap);
    this.executor.resourceManager = this.resourceManager;
    if (artifacts.modelInitializer != null && artifacts.modelInitializer.node != null) {
      const initializer = OperationMapper.Instance.transformGraph(artifacts.modelInitializer);
      this.initializer = new GraphExecutor(initializer);
      this.initializer.weightMap = this.executor.weightMap;
      this.initializer.resourceManager = this.resourceManager;
      this.initializer.executeAsync({}, []);
    }
    return true;
  }
  async save(handlerOrURL, config) {
    if (typeof handlerOrURL === "string") {
      const handlers = this.io.getSaveHandlers(handlerOrURL);
      if (handlers.length === 0) {
        throw new Error(`Cannot find any save handlers for URL '${handlerOrURL}'`);
      } else if (handlers.length > 1) {
        throw new Error(`Found more than one (${handlers.length}) save handlers for URL '${handlerOrURL}'`);
      }
      handlerOrURL = handlers[0];
    }
    if (handlerOrURL.save == null) {
      throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");
    }
    return handlerOrURL.save(this.artifacts);
  }
  predict(inputs, config) {
    const outputTensors = this.execute(inputs, this.outputNodes);
    if (this.structuredOutputKeys) {
      const outputTensorsArray = outputTensors instanceof Tensor ? [outputTensors] : outputTensors;
      const outputTensorMap = {};
      outputTensorsArray.forEach((outputTensor, i) => outputTensorMap[this.structuredOutputKeys[i]] = outputTensor);
      return outputTensorMap;
    }
    return outputTensors;
  }
  normalizeInputs(inputs) {
    if (!(inputs instanceof Tensor) && !Array.isArray(inputs)) {
      return inputs;
    }
    inputs = Array.isArray(inputs) ? inputs : [inputs];
    if (inputs.length !== this.inputNodes.length) {
      throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${inputs.length} input tensors.`);
    }
    return this.inputNodes.reduce((map, inputName, i) => {
      map[inputName] = inputs[i];
      return map;
    }, {});
  }
  normalizeOutputs(outputs) {
    outputs = outputs || this.outputNodes;
    return !Array.isArray(outputs) ? [outputs] : outputs;
  }
  execute(inputs, outputs) {
    inputs = this.normalizeInputs(inputs);
    outputs = this.normalizeOutputs(outputs);
    const result = this.executor.execute(inputs, outputs);
    return result.length > 1 ? result : result[0];
  }
  async executeAsync(inputs, outputs) {
    inputs = this.normalizeInputs(inputs);
    outputs = this.normalizeOutputs(outputs);
    const result = await this.executor.executeAsync(inputs, outputs);
    return result.length > 1 ? result : result[0];
  }
  getIntermediateTensors() {
    return this.executor.getIntermediateTensors();
  }
  disposeIntermediateTensors() {
    this.executor.disposeIntermediateTensors();
  }
  convertTensorMapToTensorsMap(map) {
    return Object.keys(map).reduce((newMap, key) => {
      newMap[key] = [map[key]];
      return newMap;
    }, {});
  }
  dispose() {
    this.executor.dispose();
    if (this.initializer) {
      this.initializer.dispose();
    }
    this.resourceManager.dispose();
  }
};
async function loadGraphModel(modelUrl, options = {}, tfio = io_exports) {
  if (modelUrl == null) {
    throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");
  }
  if (options == null) {
    options = {};
  }
  if (options.fromTFHub && typeof modelUrl === "string") {
    modelUrl = getTFHubUrl(modelUrl);
  }
  const model = new GraphModel(modelUrl, options, tfio);
  await model.load();
  return model;
}
function loadGraphModelSync(modelSource) {
  if (modelSource == null) {
    throw new Error("modelUrl in loadGraphModelSync() cannot be null. Please provide a url or an IOHandler that loads the model");
  }
  if (!modelSource.load) {
    throw new Error(`modelUrl IO Handler ${modelSource} has no load function`);
  }
  const model = new GraphModel(modelSource);
  model.load();
  return model;
}
function getTFHubUrl(modelUrl) {
  if (!modelUrl.endsWith("/")) {
    modelUrl = modelUrl + "/";
  }
  return `${modelUrl}${DEFAULT_MODEL_NAME}${TFHUB_SEARCH_PARAM}`;
}

// node_modules/@tensorflow/tfjs-converter/dist/version.js
var version2 = "3.19.0";

// node_modules/@tensorflow/tfjs-converter/dist/flags.js
var ENV3 = env();
ENV3.registerFlag("KEEP_INTERMEDIATE_TENSORS", () => false, (debugValue) => {
  if (debugValue) {
    console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.");
  }
});

export {
  DataStorage,
  KernelBackend,
  assert,
  sizeFromShape,
  parseAxisParam,
  Environment,
  env,
  ENV,
  Abs,
  Acos,
  Acosh,
  Add,
  AddN,
  All,
  Any,
  ArgMax,
  ArgMin,
  Asin,
  Asinh,
  Atan,
  Atanh,
  Atan2,
  AvgPool,
  AvgPoolGrad,
  AvgPool3D,
  AvgPool3DGrad,
  BatchMatMul,
  BatchToSpaceND,
  Bincount,
  BroadcastTo,
  BroadcastArgs,
  Cast,
  Ceil,
  ClipByValue,
  Complex,
  ComplexAbs,
  Concat,
  Conv2D,
  Conv2DBackpropFilter,
  Conv2DBackpropInput,
  Conv3D,
  Conv3DBackpropFilterV2,
  Conv3DBackpropInputV2,
  Cos,
  Cosh,
  Cumprod,
  Cumsum,
  CropAndResize,
  DenseBincount,
  DepthToSpace,
  DepthwiseConv2dNative,
  DepthwiseConv2dNativeBackpropFilter,
  DepthwiseConv2dNativeBackpropInput,
  Diag,
  Dilation2D,
  Dilation2DBackpropInput,
  Dilation2DBackpropFilter,
  RealDiv,
  Einsum,
  Elu,
  EluGrad,
  Erf,
  Equal,
  Exp,
  ExpandDims,
  Expm1,
  FFT,
  Fill,
  FlipLeftRight,
  Floor,
  FloorDiv,
  FusedBatchNorm,
  GatherV2,
  GatherNd,
  Greater,
  GreaterEqual,
  Identity,
  IFFT,
  Imag,
  IsFinite,
  IsInf,
  IsNan,
  LeakyRelu,
  Less,
  LessEqual,
  LinSpace,
  Log,
  Log1p,
  LogicalAnd,
  LogicalNot,
  LogicalOr,
  LogicalXor,
  LogSoftmax,
  LowerBound,
  LRN,
  LRNGrad,
  Max,
  Maximum,
  MaxPool,
  MaxPoolGrad,
  MaxPool3D,
  MaxPool3DGrad,
  MaxPoolWithArgmax,
  Mean,
  Min,
  Minimum,
  MirrorPad,
  Mod,
  Multinomial,
  Multiply,
  Neg,
  NotEqual,
  NonMaxSuppressionV3,
  NonMaxSuppressionV4,
  NonMaxSuppressionV5,
  OnesLike,
  OneHot,
  Pack,
  PadV2,
  Pool,
  Pow,
  Prelu,
  Prod,
  Range,
  Real,
  Reciprocal,
  Relu,
  Reshape,
  ResizeNearestNeighbor,
  ResizeNearestNeighborGrad,
  ResizeBilinear,
  ResizeBilinearGrad,
  Relu6,
  Reverse,
  Round,
  Rsqrt,
  ScatterNd,
  SearchSorted,
  Select,
  Selu,
  Slice,
  Sin,
  Sinh,
  Sign,
  Sigmoid,
  Softplus,
  Sqrt,
  Sum,
  SpaceToBatchND,
  SplitV,
  Softmax,
  SparseFillEmptyRows,
  SparseReshape,
  SparseSegmentMean,
  SparseSegmentSum,
  SparseToDense,
  SquaredDifference,
  Square,
  StridedSlice,
  StringNGrams,
  StringSplit,
  StringToHashBucketFast,
  Sub,
  Tan,
  Tanh,
  Tile,
  TopK,
  Transform,
  Transpose,
  Unique,
  Unpack,
  UnsortedSegmentSum,
  UpperBound,
  ZerosLike,
  Step,
  FromPixels,
  RotateWithOffset,
  _FusedMatMul,
  FusedConv2D,
  FusedDepthwiseConv2D,
  getKernel,
  getGradient,
  getKernelsForBackend,
  registerKernel,
  registerGradient,
  unregisterKernel,
  unregisterGradient,
  copyRegisteredKernels,
  util_exports,
  TensorBuffer,
  Tensor,
  getGlobalTensorClass,
  Variable,
  Rank,
  upcastType,
  sumOutType,
  tensor_util_exports,
  ENGINE,
  device_util_exports,
  convertToTensor,
  OP_SCOPE_SUFFIX,
  op,
  complex,
  tensor,
  buffer,
  cast,
  clone,
  print,
  io_exports,
  matMul,
  oneHot,
  enableProdMode,
  enableDebugMode,
  disableDeprecationWarnings,
  deprecationWarn,
  disposeVariables,
  engine,
  memory,
  profile,
  tidy,
  dispose,
  keep,
  time,
  setBackend,
  ready,
  getBackend,
  removeBackend,
  findBackend,
  findBackendFactory,
  registerBackend,
  backend,
  setPlatform,
  imag,
  neg,
  real,
  transpose,
  math_exports,
  getReductionAxes,
  assertAndGetBroadcastShape,
  broadcast_util_exports,
  tensor3d,
  browser_exports,
  gather_nd_util_exports,
  scatter_nd_util_exports,
  parseSliceParams,
  slice_util_exports,
  serialization_exports,
  test_util_exports,
  version,
  add2 as add,
  floorDiv,
  div,
  mul,
  abs,
  acos,
  acosh,
  addN,
  all,
  any,
  argMax,
  argMin,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  tupleValuesAreOne,
  eitherStridesOrDilationsAreOne,
  checkPadOnDimRoundingMode,
  reshape,
  avgPool,
  avgPool3d,
  concat,
  sigmoid,
  slice,
  tanh2 as tanh,
  basicLSTMCell,
  batchToSpaceND,
  batchNorm,
  batchNorm2d,
  batchNorm3d,
  batchNorm4d,
  bincount,
  broadcastArgs,
  broadcastTo,
  ceil,
  clipByValue,
  concat1d,
  concat2d,
  concat3d,
  concat4d,
  conv2d,
  conv1d,
  conv2DBackpropInput,
  conv2dTranspose,
  conv3d,
  conv3DBackpropInput,
  conv3dTranspose,
  cos,
  cosh,
  cumprod,
  cumsum,
  denseBincount,
  depthToSpace,
  depthwiseConv2d,
  diag,
  dilation2d,
  equal,
  where,
  zerosLike,
  divNoNan,
  dot,
  einsum,
  elu,
  erf,
  computeOutAndReduceShapes,
  expandShapeToKeepDim,
  getAxesPermutation,
  getUndoAxesPermutation,
  max,
  min,
  pow,
  scalar,
  sqrt,
  square,
  sum2 as sum,
  norm,
  euclideanNorm,
  exp,
  expandDims,
  expm1,
  tile,
  eye,
  fill,
  floor,
  gather,
  greater,
  greaterEqual,
  isFinite2 as isFinite,
  isInf,
  isNaN2 as isNaN,
  leakyRelu,
  less,
  lessEqual,
  linspace,
  localResponseNormalization,
  log2 as log,
  log1p,
  grad,
  grads,
  valueAndGrad,
  valueAndGrads,
  variableGrads,
  customGrad,
  softplus,
  logSigmoid,
  sub,
  logSoftmax,
  logSumExp,
  logicalAnd,
  logicalNot,
  logicalOr,
  logicalXor,
  searchSorted,
  lowerBound,
  maxPool,
  maxPool3d,
  maxPoolWithArgmax,
  maximum,
  mean,
  zeros,
  ones2 as ones,
  meshgrid,
  minimum,
  mirrorPad,
  mod,
  moments,
  multiRNNCell,
  multinomial,
  notEqual,
  onesLike,
  outerProduct,
  pad,
  pad1d,
  pad2d,
  pad3d,
  pad4d,
  spaceToBatchND,
  pool,
  prelu,
  prod,
  rand,
  require_seedrandom2 as require_seedrandom,
  randomGamma,
  randomNormal,
  randomStandardNormal,
  randomUniform,
  range,
  reciprocal,
  relu,
  relu6,
  reverse,
  reverse1d,
  reverse2d,
  reverse3d,
  reverse4d,
  round2 as round,
  rsqrt,
  selu,
  separableConv2d,
  setdiff1dAsync,
  sign,
  sin,
  sinh,
  slice1d,
  slice2d,
  slice3d,
  slice4d,
  softmax,
  fft,
  ifft,
  irfft,
  split,
  rfft,
  squaredDifference,
  squeeze,
  stack,
  step,
  stridedSlice,
  tan,
  tensor1d,
  tensor2d,
  tensor4d,
  tensor5d,
  tensor6d,
  topk,
  truncatedNormal,
  unique,
  unsortedSegmentSum,
  unstack,
  upperBound,
  variable,
  whereAsync,
  booleanMaskAsync,
  movingAverage,
  scatterND,
  sparseToDense,
  gatherND,
  dropout,
  enclosingPowerOfTwo,
  cosineWindow,
  inTopKAsync,
  conv2DBackpropFilter,
  depthwiseConv2dNativeBackpropFilter,
  depthwiseConv2dNativeBackpropInput,
  fused_ops_exports,
  resizeBilinear,
  resizeNearestNeighbor,
  Reduction,
  spectral,
  signal,
  image,
  linalg,
  losses,
  sparse,
  string,
  Optimizer,
  AdadeltaOptimizer,
  AdagradOptimizer,
  AdamOptimizer,
  AdamaxOptimizer,
  SGDOptimizer,
  MomentumOptimizer,
  RMSPropOptimizer,
  OptimizerConstructors,
  train,
  nextFrame,
  SELU_SCALEALPHA,
  SELU_SCALE,
  backend_util_exports,
  kernel_impls_exports,
  registerOp,
  deregisterOp,
  GraphModel,
  loadGraphModel,
  loadGraphModelSync,
  version2
};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
 *
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
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
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/** @license See the LICENSE file. */
//# sourceMappingURL=chunk-X3YL4HVM.js.map
