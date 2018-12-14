#  Анимация - пример 1

```javapackage 

com.app.atletiko.UI.fragments;

import android.animation.Animator;
import android.animation.ArgbEvaluator;
import android.animation.ObjectAnimator;
import android.content.res.Resources;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AccelerateInterpolator;
import android.widget.ImageView;
import com.app.atletiko.R;
import com.app.atletiko.UI.MainActivity;


public class StartFragment extends Fragment {

  /**
   |--------------------------------------------------------------------------
   | onCreateView
   |--------------------------------------------------------------------------
   */
  @Override
  public View onCreateView (LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
    View view = inflater.inflate(R.layout.start_fragment, container, false);

    ImageView logoView = (ImageView) view.findViewById(R.id.logoView);
    View scene = view 

    int heightDuration = 1000;
    int backDuration   = 1500;

    float logoViewYStart = this.logoView.getTop();
    float logoViewYEnd   = this.scene.getPivotY() - 200;

    // Анимация 1. Перемещение Лого
    // Тут мы создаем анимацию которая движет обьект от начальной точки до границы
    // высоты родительского элемента
    ObjectAnimator heightAnimator = ObjectAnimator.ofFloat(logoView, "y", logoViewYStart, logoViewYEnd).setDuration(heightDuration);

    // Interpolotar - это выполнение анимации по времени,
    // может быть быстро в начале и медленно в конце,
    // типа cubic-bezier, linear в css
    heightAnimator.setInterpolator(new AccelerateInterpolator());

    Resources resources = getResources();
    int red = resources.getColor(R.color.colorPrimary);
    int yellow = resources.getColor(R.color.colorYellow);

    // 2 Анимация. Смена цвета бекграунда
    ObjectAnimator backgroundAnimator = ObjectAnimator.ofInt(this.scene, "backgroundColor", red, yellow).setDuration(backDuration);
    backgroundAnimator.setEvaluator(new ArgbEvaluator());

    // Запуск анимации
    heightAnimator.start();
    backgroundAnimator.start();

    // Жизненные методы анимации
    backgroundAnimator.addListener(new Animator.AnimatorListener() {
      @Override
      public void onAnimationStart(Animator animation) {
      }

      @Override
      public void onAnimationEnd(Animator animation) {
        MainActivity.FRAGMENT_HELPER.goBackToFragment(new HomeFragment(), HomeFragment.LOG_TAG);
      }

      @Override
      public void onAnimationCancel(Animator animation) {

      }

      @Override
      public void onAnimationRepeat(Animator animation) {

      }
    });

    return view
  }
}
```