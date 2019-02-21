/**
 * create-time 2019/2/21 17:18
 * author XiWell
 */
;(function() {
	function getType(v) {
		return Object.prototype.toString.call(v)
	}

	function outPrintTypeError(v) {
		if(v !== null && v !== undefined && typeof v === 'object') {
			return getType(v) + ' is not a function'
		}
		return v + ' is not a function'
	}

	function toArray(v) {
		var result = [];
		for(var i = 0; i < v.length; i++) {
			result.push(v[i])
		};
		return result
	}
	if(!Object.keys) {
		Object.keys = function defineObjectKeys(v) {
			if(v !== null && v !== undefined) {
				if(typeof v === 'object') {
					var keyList = [];
					for(var item in v) {
						keyList.push(item)
					};
					return keyList
				} else {
					return []
				}
			} else {
				throw new TypeError('Cannot convert undefined or null to object')
			}
		}
	}
	if(!Object.values) {
		Object.values = function defineObjectValues(v) {
			if(v !== null && v !== undefined) {
				if(typeof v === 'object') {
					var valueList = [];
					for(var item in v) {
						valueList.push(v[item])
					};
					return valueList
				} else {
					return []
				}
			} else {
				throw new TypeError('Cannot convert undefined or null to object')
			}
		}
	}
	if(!Array.isArray) {
		Array.isArray = function defineArrayIsArray(v) {
			return getType(v) === '[object Array]'
		}
	}
	if(!Array.of) {
		Array.of = function defineArrayOf(v) {
			return toArray(arguments)
		}
	}
	if(!Array.name) {
		Array.name = 'Array'
	}
	if(!Array.from) {
		Array.from = function defineArrayFrom(v, callBack) {
			if(v !== null && v !== undefined) {
				if(typeof v === 'string') {
					return v.split('')
				} else {
					if(Array.isArray(v) || v.length !== undefined) {
						if(callBack === undefined) {
							return toArray(v)
						} else {
							if(typeof callBack === 'function') {
								var result = toArray(v);
								result.forEach(function(item, index) {
									result[index] = callBack(item, index)
								});
								return result
							} else {
								throw new TypeError(outPrintTypeError(callBack))
							}
						}
					} else {
						return []
					}
				}
			} else {
				throw new TypeError('Cannot convert undefined or null to object')
			}
		}
	}
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function defineArrayForEach(callBack) {
			for(var i = 0; i < this.length; i++) {
				callBack(this[i], i, this)
			}; return this
		}
	}
	if(!Array.prototype.includes) {
		Array.prototype.includes = function defineArrayIncludes(v, index) {
			if(typeof v === 'number') {
				var $index = typeof index === 'number' && index || 0;
				if($index < 0) {
					$index = (this.length - 1) - $index
				} else if($index > this.length - 1) {
					return !1
				}
				for(var i = $index; i < this.length; i++) {
					if(this[i] === v) {
						return true;
						break
					}
				}
				return !1
			} else {
				return !1
			}
		}
	}
	if(!Array.prototype.indexOf) {
		Array.prototype.indexOf = function defineArrayIndexOf(v, index) {
			if(typeof v === 'number') {
				var $index = typeof index === 'number' && index || 0;
				if($index < 0) {
					$index = (this.length - 1) - $index
				} else if($index > this.length - 1) {
					return -1
				}
				for(var i = $index; i < this.length; i++) {
					if(this[i] === v) {
						return i;
						break
					}
				}
				return -1
			} else {
				return -1
			}
		}
	}
	if(!Array.prototype.keys) {
		Array.prototype.keys = function defineArrayKeys() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				result[i]
			};
			return result
		}
	}
	if(!Array.prototype.values) {
		Array.prototype.values = function defineArrayValues() {
			return this
		}
	}
	if(!Array.prototype.map) {
		Array.prototype.map = function defineArrayMap(callBack) {
			if(typeof callBack === 'function') {
				var result = this;
				result.forEach(function(item, index) {
					result[index] = callBack(item, index, result)
				});
				return result
			} else {
				throw new TypeError(outPrintTypeError(callBack))
			}
		}
	}
	if(!Array.prototype.filter) {
		Array.prototype.filter = function defineArrayFilter(callBack) {
			if(typeof callBack === 'function') {
				var result = this;
				var resultOther = [];
				result.forEach(function(item, index) {
					if(callBack(item, index, result)) {
						resultOther.push(item)
					}
				});
				return resultOther
			} else {
				throw new TypeError(outPrintTypeError(callBack))
			}
		}
	}
	if(!Array.prototype.every) {
		Array.prototype.every = function defineArrayEvery(callBack) {
			if(typeof callBack === 'function') {
				var result = this;
				var resultOther = [];
				result.forEach(function(item, index) {
					if(callBack(item, index, result)) {
						resultOther.push(item)
					}
				});
				return resultOther.length === result.length
			} else {
				throw new TypeError(outPrintTypeError(callBack))
			}
		}
	}
	if(!Array.prototype.some) {
		Array.prototype.some = function defineArraySome(callBack) {
			if(typeof callBack === 'function') {
				for(var i = 0; i < this.length; i++) {
					if(callBack(this[i], i, this)) {
						return true;
						break
					}
				};
				return !1
			} else {
				throw new TypeError(outPrintTypeError(callBack))
			}
		}
	}
	if(!Array.prototype.lastIndexOf) {
		Array.prototype.lastIndexOf = function defineArrayLastIndexOf(v, index) {
			if(typeof v === 'number' || typeof v === 'string') {
				var $index = typeof index === 'number' && index || 0;
				if($index < 0) {
					$index = (this.length - 1) - $index
				} else if($index > this.length - 1) {
					return -1
				}
				var result = [];
				for(var i = $index; i < this.length; i++) {
					if(this[i] === v) {
						result.push(i)
					}
				};
				return result.length ? result[result.length - 1] : -1
			} else {
				return -1
			}
		}
	}
	if(!Array.prototype.flatMap) {
		Array.prototype.flatMap = function defineArrayFlatMap(callBack) {
			if(typeof callBack === 'function') {
				var result = this;
				var resultOther = [];
				result.forEach(function(item, index) {
					var value = callBack(item, index, result);
					if(Array.isArray(value)) {
						value.forEach(function($item) {
							resultOther.push($item)
						})
					} else {
						resultOther.push(value)
					}
				});
				return resultOther
			} else {
				throw new TypeError(outPrintTypeError(callBack))
			}
		}
	}
	if(!Array.prototype.findIndex) {
		Array.prototype.findIndex = function defineArrayFindIndex(callBack) {
			if(typeof callBack === 'function') {
				var result = this;
				var resultOther = [];
				result.forEach(function(item, index) {
					if(callBack(item, index, result)) {
						resultOther.push(index)
					}
				});
				return resultOther[0]
			} else {
				throw new TypeError(outPrintTypeError(callBack))
			}
		}
	}
	if(!Array.prototype.find) {
		Array.prototype.find = function defineArrayFind(callBack) {
			if(typeof callBack === 'function') {
				var result = this;
				var resultOther = [];
				result.forEach(function(item, index) {
					if(callBack(item, index, result)) {
						resultOther.push(item)
					}
				});
				return resultOther[0]
			} else {
				throw new TypeError(outPrintTypeError(callBack))
			}
		}
	}
})(window)
