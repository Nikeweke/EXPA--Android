(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{162:function(t,a,s){t.exports=s.p+"assets/img/motion-example-1.a7bcb8ec.gif"},163:function(t,a,s){t.exports=s.p+"assets/img/motion-layout-1.36ff670e.png"},164:function(t,a,s){t.exports=s.p+"assets/img/motion-layout-2.65e290b2.png"},165:function(t,a,s){t.exports=s.p+"assets/img/motion-layout-3.f198e765.png"},182:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"motion-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motion-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Motion layout")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#intro"}},[this._v("Intro")])]),a("li",[a("a",{attrs:{href:"#подходы-дnя-создания-анимации"}},[this._v("Подходы для создания анимации")])]),a("li",[a("a",{attrs:{href:"#сцена-описание-анимации"}},[this._v("Сцена (описание анимации)")])]),a("li",[a("a",{attrs:{href:"#сцена-пример"}},[this._v("Сцена: пример")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[this._v("#")]),this._v(" Intro")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("MotionLayout")]),this._v(" - Позволяет анимириовать переход из одного состояния в другое.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:s(162),alt:""}}),this._v(" "),a("br"),a("br")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("MotionLayout")]),this._v(", как следует из его названия, это, прежде всего, макет, позволяющий вам позиционировать свои элементы. Это на самом деле подкласс "),a("code",[this._v("ConstraintLayout")]),this._v(" и основывается на его богатых возможностях макета.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Главная идея")]),this._v(" - создаем 2 макета - начальное и конечное состояние экрана. И связываем их с MotionLayout. Это и позволит анимировать переход с одного состояние в другое.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("MotionLayout")]),this._v(" был создан для преодоления разрыва между переходами макета и сложной обработкой движения. Вы можете рассматривать это с точки зрения возможностей как смесь между инфраструктурой анимации свойств, TransitionManager и CoordinatorLayout.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"подходы-дnя-создания-анимации"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#подходы-дnя-создания-анимации","aria-hidden":"true"}},[this._v("#")]),this._v(" Подходы для создания анимации")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("1.")]),this._v(" Создание 2 макетов(начальное и конечное состояние), сцены(описание анимации) и макета-motion")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:s(163),alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("Этот подход позволяет видеть начальное и конечное состояние")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("br"),a("br")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("2.")]),this._v(" Создание 2 макетов-motion(начальное и конечное состояние) и сцены(описание анимации)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:s(164),alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("Этот подход позволяет видеть начальное и конечное состояние и сократить кол-во файлов для создания анимации")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("br"),a("br")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("3.")]),this._v(" "),a("strong",[this._v("RECOMMEND")]),this._v(" - Создание макета и сцены, а в сцене описать начальное и конечное состояние")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:s(165),alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("Этот подход сократить кол-во файлов для создания анимации до 2-х: сцены и motion-разметки")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"сцена-описание-анимации"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#сцена-описание-анимации","aria-hidden":"true"}},[this._v("#")]),this._v(" Сцена (описание анимации)")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("<Transition>")]),t._v(" - описывает на какое действие запускать анимацию ("),s("code",[t._v("<OnClick>")]),t._v(" & "),s("code",[t._v("<OnSwipe>")]),t._v("), а также "),s("code",[t._v("<KeyFrameSet>")])]),t._v(" "),s("li",[s("code",[t._v("<ConstraintSet>")]),t._v(" - описывает начальное и конечное состояние")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"сцена-пример"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#сцена-пример","aria-hidden":"true"}},[this._v("#")]),this._v(" Сцена: пример")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="utf-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MotionScene")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n             "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("motion")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res-auto"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- указываем начальное и конечное состояние, длительность, интерполятор --\x3e")]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Transition")]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("constraintSetStart")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/start"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("constraintSetEnd")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/end"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("duration")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1000"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Анимация активируеться при движении элемента вправо --\x3e")]),t._v(" \n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OnSwipe")]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("touchAnchorId")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("touchAnchorSide")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("dragDirection")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dragRight"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Позволяет делать изменение во время анимации --\x3e")]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("KeyFrameSet")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- увеличивает размер обьекта --\x3e")]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("KeyAttribute")]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("scaleX")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("scaleY")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("rotation")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("-45"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("framePosition")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("target")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@id/button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n            "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- изменяеть траекторию обьекта, без этого движеться по прямой --\x3e")]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("KeyPosition")]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("keyPositionType")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parentRelative"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("percentY")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0.2"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("framePosition")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("20"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("target")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@id/button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("KeyFrameSet")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Transition")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Начальное состояние --\x3e")]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ConstraintSet")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/start"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Constraint")]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("64dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("64dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_marginStart")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("layout_constraintBottom_toBottomOf")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("layout_constraintStart_toStartOf")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("layout_constraintTop_toTopOf")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ConstraintSet")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Конечное состояние --\x3e")]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ConstraintSet")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/end"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Constraint")]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("64dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("64dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_marginEnd")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("layout_constraintBottom_toBottomOf")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("layout_constraintEnd_toEndOf")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n                "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("motion:")]),t._v("layout_constraintTop_toTopOf")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ConstraintSet")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("MotionScene")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="utf-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android.support.constraint.motion.MotionLayout")]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("tools")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/tools"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("app")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res-auto"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/motionLayout"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("app:")]),t._v("layoutDescription")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@xml/scene_02"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("match_parent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("match_parent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("View")]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("background")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@color/colorAccent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("64dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("64dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("text")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("tools:")]),t._v("layout_editor_absoluteX")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("339dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("tools:")]),t._v("layout_editor_absoluteY")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("334dp"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android.support.constraint.motion.MotionLayout")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-Kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MainActivity "),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("AppCompatActivity")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bundle"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("super")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("setContentView")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout_motion"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],o=s(0),e=Object(o.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://medium.com/google-developers/introduction-to-motionlayout-part-i-29208674b10d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intorduction to MotionLayout"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.slideshare.net/BrittBarakHIRING/make-your-app-dance-with-motionlayout",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tutorial"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.raywenderlich.com/8883-motionlayout-tutorial-for-android-getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tutorial 2"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mtcn/MotionLayoutExamples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Motion Examples"),s("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("br"),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("Ключевые теги:")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("xml/layout_scene.xml")]),t._v(" "),t._m(23),s("p",[t._v("layout/layout_motion.xml")]),t._v(" "),t._m(24),t._m(25)])},n,!1,null,null,null);e.options.__file="motion-layout.md";a.default=e.exports}}]);