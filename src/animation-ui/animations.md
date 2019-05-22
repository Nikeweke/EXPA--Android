# Анимация

[[toc]]

--- 

### Intro 
Анимация создаеться с помощью 3 вещей:
* **Animator** - создает анимацию и возвращает обьект с методом для запуска
* **Evaluator** - указывает на то, какие данные будут использованы в анимации. (Крепиться в animator)
* **Interpolator** - указывает на поведение анимации на временной шкале (аналогия с `css` linear или cubic-bezier) (Крепиться в animator)


### Animators
* `ValueAnimator` - The main timing engine for property animation that also computes the values for the property to be animated
* `ObjectAnimator` - A subclass of `ValueAnimator` that allows you to set a target object and object property to animate.
* `AnimatorSet` - Provides a mechanism to group animations together so that they run in relation to one another.

### Evaluators 

* **IntEvalutor** - The default evaluator to calculate values for int properties.
* **FloatEvalutor** - The default evaluator to calculate values for float properties.
* **ArgbEvalutor** - The default evaluator to calculate values for color properties that are represented as hexidecimal values
* **TypeEvalutor** - An interface that allows you to create your own evaluator.

### Interpolators
* **AccelerateDecelerateInterpolator** - An interpolator whose rate of change starts and ends slowly but accelerates through the middle.
* **AccelerateInterpolator** -	An interpolator whose rate of change starts out slowly and then accelerates.
* **AnticipateInterpolator** - 	An interpolator whose change starts backward then flings forward.
* **AnticipateOvershootInterpolator** -	An interpolator whose change starts backward, flings forward and overshoots the target value, then finally goes back to the final value.
* **BounceInterpolator** - An interpolator whose change bounces at the end.
* **CycleInterpolator** - An interpolator whose animation repeats for a specified number of cycles.
* **DecelerateInterpolator** - 	An interpolator whose rate of change starts out quickly and then decelerates.
* **LinearInterpolator** -	An interpolator whose rate of change is constant.
* **OvershootInterpolator** -	An interpolator whose change flings forward and overshoots the last value then comes back.
* **TimeInterpolator** -	An interface that allows you to implement your own interpolator.

### Example: ValueAnimator
```java
// ValueAnimator начинает считать от 0 до 100, длительностью в 1 секунду(или 1000 ms)
ValueAnimator animation = ValueAnimator.ofFloat(0f, 100f);
animation.setDuration(1000);
animation.start()
``` 

### Example: ObjectAnimator
```java
// Здесь происходит движение обьекта "textView" по оси X, дительностью 1 секунда
ObjectAnimator animation = ObjectAnimator.ofFloat(textView, "translationX", 100f);
animation.setDuration(1000);
animation.start();
``` 

### Example: AnimatorSet
```java
AnimatorSet bouncer = new AnimatorSet();
bouncer.play(bounceAnim).before(squashAnim1);
bouncer.play(squashAnim1).with(squashAnim2);
bouncer.play(squashAnim1).with(stretchAnim1);
bouncer.play(squashAnim1).with(stretchAnim2);
bouncer.play(bounceBackAnim).after(stretchAnim2);

ValueAnimator fadeAnim = ObjectAnimator.ofFloat(newBall, "alpha", 1f, 0f);
fadeAnim.setDuration(250);

AnimatorSet animatorSet = new AnimatorSet();
animatorSet.play(bouncer).before(fadeAnim);
animatorSet.start();
```

### Animation listeners 

Прослушка анимации, её жизненный циклы.

* **Animator.AnimatorListener**
  + `onAnimationStart()` - Called when the animation starts.
  + `onAnimationEnd()` - Called when the animation ends.
  + `onAnimationRepeat()` - Called when the animation repeats itself.
  + `onAnimationCancel()` - Called when the animation is canceled. A cancelled animation also calls onAnimationEnd(), regardless of how they were ended.

* **ValueAnimator.AnimatorUpdateListener**
  + `onAnimationUpdate()` - called on every frame of the animation.


### Example: Animator.AnimatorListener
```java
fadeInAnimation.setAnimationListener(new Animation.AnimationListener() {
    @Override
    public void onAnimationStart(Animation animation) {

    }

    @Override
    public void onAnimationEnd(Animation animation) {

    }

    @Override
    public void onAnimationRepeat(Animation animation) {

    }
});
```