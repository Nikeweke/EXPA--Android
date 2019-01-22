# AppBarLAyout 

```xml
<?xml version="1.0" encoding="utf-8"?>
<android.support.design.widget.CoordinatorLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:background="@android:color/background_light"
        android:fitsSystemWindows="true">

    <!-- Header that changing when scrolling -->
    <android.support.design.widget.AppBarLayout
            android:id="@+id/main.appbar"
            android:layout_width="match_parent"
            android:layout_height="250dp"
            android:theme="@style/AppTheme"
            android:fitsSystemWindows="true">

        <!--
           android:layout_scrollFlags:
             * scroll|exitUntilCollapsed   - header реагирует на скролл и скрываеться до toolbar когда скролят вниз
             * scroll|enterAlwaysCollapsed - header реагирует на скролл и скрываеться полностью когда скролят вниз
             * scroll|enterAlways, scroll  - header реагирует на скролл и скрываеться полностью когда скролят вниз, но при этом кнопка Fab накрыта header'om
             *

           app:contentScrim="?attr/colorAccent" - это в какой цвет перейдет header когда он свернеться в toolbar
        -->
        <android.support.design.widget.CollapsingToolbarLayout
                android:id="@+id/main.collapsing"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:fitsSystemWindows="true"
                app:contentScrim="?attr/colorPrimary"
                app:expandedTitleMarginStart="48dp"
                app:expandedTitleMarginEnd="64dp"
                app:layout_scrollFlags="scroll|exitUntilCollapsed">

            <!-- background of header -->
            <ImageView
                    android:id="@+id/main.backdrop"
                    android:layout_width="match_parent"
                    android:layout_height="match_parent"
                    android:scaleType="centerCrop"
                    android:fitsSystemWindows="true"
                    android:src="@drawable/gradient"
                    app:layout_collapseMode="pin"/>

            <!--
               android:layout_collapseMode:
                 * parallax - содержимое будет уезжать вверх при перелистывания экрана вниз
                 * pin - содержимое останеться на месте
                 * none = parallax
            -->
            <!-- toolbar - тут нужен чтобы при скролиннге header не прятался полностью -->
            <android.support.v7.widget.Toolbar
                    android:id="@+id/main.toolbar"
                    android:layout_width="match_parent"
                    android:layout_height="?attr/actionBarSize"/>
            <ImageButton
                    app:layout_collapseMode="pin"
                    android:layout_width="54dp"
                    android:layout_height="55dp"
                    app:srcCompat="@drawable/ic_go_back_left_arrow"
                    android:id="@+id/backBtn"
                    android:background="@android:color/transparent"
                    android:layout_alignParentStart="true"
                    android:layout_marginStart="0dp"
                    android:layout_alignParentTop="true"
                    android:layout_marginTop="0dp"/>
            <TextView
                    app:layout_collapseMode="pin"
                    android:text="@string/take_action"
                    android:layout_width="wrap_content"
                    android:layout_height="55dp"
                    android:id="@+id/textView5"
                    android:layout_marginStart="56dp"
                    android:layout_marginTop="0dp"
                    android:fontFamily="@font/open_sans_semibold" android:textColor="#fff" android:textSize="16sp"
                    android:gravity="center"/>


        </android.support.design.widget.CollapsingToolbarLayout>
    </android.support.design.widget.AppBarLayout>

    <!-- Floating button -->
    <android.support.design.widget.FloatingActionButton
            android:layout_height="wrap_content"
            android:layout_width="wrap_content"
            android:layout_margin="5dp"
            android:src="@drawable/ic_admin_app_logo"
            app:layout_anchor="@id/main.appbar"
            app:layout_collapseMode="pin"
            app:layout_anchorGravity="bottom|right|end"
            app:backgroundTint="@color/ic_launcher_background"
            app:elevation="5dp"/>

    <!-- Content -->
    <android.support.v4.widget.NestedScrollView
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            app:layout_behavior="@string/appbar_scrolling_view_behavior">

        <android.support.constraint.ConstraintLayout
                android:layout_width="match_parent"
                android:layout_height="match_parent">

            <!-- Loading placeholder -->
            <RelativeLayout
                    android:id="@+id/loadingPlaceholder"
                    android:layout_width="match_parent"
                    android:layout_height="match_parent"
                    android:gravity="center" android:visibility="visible" android:padding="20dp">

                <ProgressBar
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:indeterminateTint="@color/colorPrimary"
                        android:indeterminate="true"/>

            </RelativeLayout>

            <RelativeLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content" app:layout_constraintStart_toStartOf="parent"
                    app:layout_constraintTop_toTopOf="parent" app:layout_constraintEnd_toEndOf="parent"
                    android:id="@+id/bodyLayout">

                <TextView
                        android:id="@+id/contentTv"
                        android:layout_width="233dp"
                        android:layout_height="wrap_content"
                        android:textSize="20sp"
                        android:lineSpacingExtra="8dp"
                        android:text="content text"
                        android:padding="5dp" app:layout_constraintStart_toStartOf="parent"
                        android:layout_marginStart="20dp" app:layout_constraintEnd_toEndOf="parent"
                        android:layout_marginEnd="8dp" android:layout_marginTop="49dp"
                        app:layout_constraintTop_toTopOf="parent" android:layout_alignParentStart="true"
                        android:layout_alignParentTop="true" android:textColor="#000"/>
                <TextView
                        android:id="@+id/responseTv"
                        android:layout_width="233dp"
                        android:layout_height="wrap_content"
                        android:textSize="20sp"
                        android:lineSpacingExtra="8dp"
                        android:text="response text"
                        android:padding="5dp" app:layout_constraintStart_toStartOf="parent"
                        android:layout_marginStart="18dp" app:layout_constraintEnd_toEndOf="parent"
                        android:layout_marginEnd="8dp" android:layout_marginTop="141dp"
                        app:layout_constraintTop_toTopOf="parent" android:layout_alignParentStart="true"
                        android:layout_alignParentTop="true" android:textColor="#000"/>
                <TextView
                        android:text="Content"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content" android:layout_alignParentTop="true"
                        android:id="@+id/textView2" android:layout_marginTop="21dp"
                        android:layout_alignParentStart="true" android:layout_marginStart="21dp"
                        android:fontFamily="@font/open_sans_semibold"/>
                <TextView
                        android:text="Response"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content" android:layout_alignParentTop="true"
                        android:id="@+id/textView3" android:layout_marginTop="104dp"
                        android:layout_alignParentStart="true" android:layout_marginStart="20dp"
                        android:fontFamily="@font/open_sans_semibold"/>
            </RelativeLayout>
        </android.support.constraint.ConstraintLayout>



    </android.support.v4.widget.NestedScrollView>


</android.support.design.widget.CoordinatorLayout>

```