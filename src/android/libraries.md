# Библиотеки

[[toc]]

---

### [Butterknife](http://jakewharton.github.io/butterknife/)
Позволяет избежать лишней писанины по сбору элементов с экрана по их ID, также установку прослушки на клик, и т.д.

```java
class ExampleActivity extends Activity {
  @BindView(R.id.title) TextView title;
  @BindView(R.id.subtitle) TextView subtitle;
  @BindView(R.id.footer) TextView footer;

  @Override public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.simple_activity);
    
    // Init butterknife (DONT FORGET THIS LINE!!!)
    ButterKnife.bind(this);
    
    // TODO use fields
    this.title.setText("Hello there");
    // ...
  }
}
```
### Retrofit
### Otto
### Realm
