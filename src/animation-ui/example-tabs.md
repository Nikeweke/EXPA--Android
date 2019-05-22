# Example - Tabs

**TODO:** Нарисовать Схему экрана и вложений разметки и т.д.

### home_fragment.xml
```xml
<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#F8F8F8"
    android:translationY="0dp"
    tools:context=".UI.fragments.HomeFragment">

    <!-- Tabs -->
    <android.support.constraint.ConstraintLayout
        android:id="@+id/tabs_container"
        android:layout_width="match_parent"
        android:layout_height="47dp"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/toolbar">

        <android.support.design.widget.TabLayout
            android:id="@+id/tabsLayout"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent"
            app:tabIndicatorColor="@color/colorPrimaryDark"
            app:tabSelectedTextColor="@color/colorPrimary"
            app:tabTextAppearance="@style/AbonementTabsStyle"
            app:tabTextColor="@color/colorPrimaryDark">

            <!-- можно сделать или так, или программно -->
            <!--<android.support.design.widget.TabItem-->
                <!--android:id="@+id/tabItem"-->
                <!--android:layout_width="wrap_content"-->
                <!--android:layout_height="wrap_content"-->
                <!--android:text="Tab number 1" />-->

            <!--<android.support.design.widget.TabItem-->
                <!--android:id="@+id/tabItem2"-->
                <!--android:layout_width="wrap_content"-->
                <!--android:layout_height="wrap_content"-->
                <!--android:text="Tab number 2" />-->

        </android.support.design.widget.TabLayout>

    </android.support.constraint.ConstraintLayout>

    <!-- Content -->
    <RelativeLayout
        android:id="@+id/content_container"
        android:layout_width="0dp"
        android:layout_height="0dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/tabs_container">

        <android.support.v4.view.ViewPager
            android:id="@+id/viewPager"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:layout_alignParentStart="true"
            android:layout_alignParentEnd="true"
            android:layout_centerVertical="true"
            android:layout_marginStart="0dp"
            android:layout_marginEnd="0dp"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintHorizontal_bias="0.0"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent"
            app:layout_constraintVertical_bias="0.0" />

    </RelativeLayout>

</android.support.constraint.ConstraintLayout>
```


### HomeFragment.kt
```Kotlin
package com.app.atletiko.UI.fragments

import ...

class HomeFragment : Fragment() {

  companion object {
    val logTag = "HomeFrag"
  }

  val tabs: List<String>  = listOf("Tab number 1", "Tab number 2")

  /**
   *  _onCreateView ()
   */ 
  override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
    val view = inflater.inflate(R.layout.abonements_fragment, container, false)

    // В сокращенном, упрощенном виде это будет так
    view.tabsLayout.addOnTabSelectedListener(
      TabLayout.ViewPagerOnTabSelectedListener(
        viewPager
      )
    )

    // в развернутом виде будет здесь (это равнозначно строчке выше) 
    // this.initTabLayout(view)

    return view
  }


  /**
   *  Set Tablayout and adapter for this content
   */ 
  fun initTabLayout (view: View) {
    val viewPager  = view.viewPager
    val tabsLayout = view.tabsLayout

    for (tab in this.tabs) {
      tabsLayout.addTab(
        tabsLayout.newTab().setText(tab.name)
      )
    }

    // Создаем адаптер для ViewPager, без него никак
    // Устанавливаем адаптер ViewPager, для создания перелистование фрагментов
    // не используйте здесь "fragmentManager", а то когда зайдете сюда в 2 раз, будет работать херово
    viewPager.adapter = AbonementsPagerAdapter(getChildFragmentManager())

    // Вот это развернутый слушатель TabLayout
    tabsLayout.addOnTabSelectedListener(object : TabLayout.OnTabSelectedListener {

      override fun onTabSelected(tab: TabLayout.Tab) {
        val toast = Toast.makeText(context, "Selected tab ${tab.position}", Toast.LENGTH_SHORT)
        toast.setGravity(Gravity.TOP, 0, 0)
        toast.show()

        // вот тут мы ставим что показывать в viewPager
        viewPager.setCurrentItem(tab.position)  
      }

      override fun onTabUnselected(tab: TabLayout.Tab) {
        val toast = Toast.makeText(context, "Unselected tab", Toast.LENGTH_SHORT)
        toast.setGravity(Gravity.BOTTOM, 0, 0)
        toast.show()
      }

      override fun onTabReselected(tab: TabLayout.Tab) {
        val toast = Toast.makeText(context, "Reselected tab", Toast.LENGTH_SHORT)
        toast.setGravity(Gravity.LEFT, 0, 0)
        toast.show()
      }
    })


    /*
      [Optional]: Это пример как повесить слушателя на viewPager: короткая и развернутая форма

    // # Короткая
    viewPager.addOnPageChangeListener(TabLayout.TabLayoutOnPageChangeListener(tabsLayout))

    // # Развернутая  
    viewPager.addOnPageChangeListener(object : ViewPager.OnPageChangeListener {
      override fun onPageScrollStateChanged(state: Int) {
        // ....
      }

      override fun onPageScrolled(position: Int, positionOffset: Float, positionOffsetPixels: Int) {
        // ....
      }

      override fun onPageSelected(position: Int) {
        // ....
      }
    })
    */
  }



}

```