(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"preferences-helper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preferences-helper","aria-hidden":"true"}},[t._v("#")]),t._v(" Preferences helper")]),t._v(" "),a("p",[t._v("Dependencies")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("dependencies "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  implementation "),a("span",{attrs:{class:"token string gstring"}},[t._v('"org.jetbrains.kotlin:kotlin-reflect:'),a("span",{attrs:{class:"token expression"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("$")]),t._v("kotlinVersion")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Using")]),t._v(" "),a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("PreferencesHelper")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("..")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("applyPrefs")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Class")]),t._v(" "),a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" com"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myapp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Helpers\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myapp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UI"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MainActivity\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" kotlin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reflect"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KProperty\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" kotlin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reflect"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("full"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("declaredMemberProperties\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * Этот класс написан чтобы удобней записывать в preferences свойства,\n * просто определив свойства этого класса это и будут ключи в preferences\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("PreferencesHelper")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name      "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" surname   "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" middlename"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" phone     "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appVersion"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isFirstTimeLaunch"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n  |--------------------------------------------------------------------------\n  | Проходиться по полям класса и записывает значения в preferences\n  |--------------------------------------------------------------------------\n  */")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("applyPrefs")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" editor                           "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MainActivity"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sPref"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("edit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" fields"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Collection"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("KProperty"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" PreferencesHelper"),a("span",{attrs:{class:"token operator"}},[t._v("::")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("declaredMemberProperties\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" fields"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" fieldType"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" field"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" fieldName"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" field"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// почему тут сразу приводим к String?")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// Потому что с стрингу можно потом перегнать в любой другой тип")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" value    "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("readPropery")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fieldName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// забираем значение с текущего экземпляра")]),t._v("\n\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fieldType"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"String"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          editor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("putString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fieldName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token string"}},[t._v('"Int"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          editor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("putInt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fieldName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toInt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token string"}},[t._v('"Boolean"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          editor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("putBoolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fieldName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toBoolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    editor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("apply")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n  |--------------------------------------------------------------------------\n  | Читает свойство данного обьекта\n  |--------------------------------------------------------------------------\n  */")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("readPropery")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Any"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" propertyName"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Any"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" clazz "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javaClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kotlin\n    "),a("span",{attrs:{class:"token annotation builtin"}},[t._v("@Suppress")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"UNCHECKED_CAST"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" clazz"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("declaredMemberProperties"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("first")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" it"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" propertyName "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="preferences-helper.md";s.default=o.exports}}]);