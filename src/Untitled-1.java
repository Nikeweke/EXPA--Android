public class Main extends Activity implements OnFragment1ClickedListener {
    // This is needed in order to manage the fragments.
    public Stack<String> mFragmentStack;
 
    @Override
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
 
        mFragmentStack = new Stack<String>();
 
        // Dynamically add a fragment to an Activity
        FragmentManager fragmentManager = getFragmentManager();
        FragmentTransaction transaction = fragmentManager.beginTransaction();
        Fragment fragment = new Fragment1();
        String tag = fragment.toString();
        mFragmentStack.add(tag);
        transaction.add(R.id.fragment_swap, fragment,tag);
        transaction.addToBackStack(tag);
        transaction.commit();
     }
 
    // Notice how this class implements OnFragment1ClickkedListener? Well this causes us to 
    // implement the abstract method onFragment1Clicked() from Fragment1.java. 
    @Override
    public void onFragment1Clicked() {
        Fragment newFragment = new Fragment2();
        Bundle args = new Bundle();
        // by doing newFragment.toString(), I am taking a unique identified of that object.
        String tag = newFragment.toString();
        newFragment.setArguments(args);
 
        FragmentTransaction transaction = getFragmentManager().beginTransaction();
        // setting the animations here. the fade_in animation for fragment1 and fade_out for fragment2
        transaction.setCustomAnimations(R.anim.fragment_animation_fade_in, R.anim.fragment_animation_fade_out);
        // I find what the current fragment from the stack is, take it and hide it
        // using transaction.hide(currentFragment);
        Fragment currentFragment = getFragmentManager().findFragmentByTag(mFragmentStack.peek());
        transaction.hide(currentFragment);
         
        transaction.add(R.id.fragment_swap, newFragment,newFragment.toString());
        // This is important, we must addToBackStack so we can pull it out later.
        transaction.addToBackStack(tag);
        // Instead of using replace we use add. Why? If we use replace, then the previous
        // fragment will always have to be re-created. What if you don't want to do that. In
        // my case, I didn't want it to be re-created all the time because I had a position
        // set and by re-creating it, I would have lost the position or had to use static flag.
        mFragmentStack.add(tag);
 
        transaction.commit();
    }
 
    @Override
    public void onBackPressed(){
        // from the stack we can get the latest fragment
        Fragment fragment = getFragmentManager().findFragmentByTag(mFragmentStack.peek());
        // If its an instance of Fragment1 I don't want to finish my activity, so I launch a Toast instead.
        if (fragment instanceof Fragment1){
            Toast.makeText(getApplicationContext(), "YOU ARE AT THE TOP FRAGMENT", Toast.LENGTH_SHORT).show();
        }
        else{
            // Remove the framg
            removeFragment();
            super.onBackPressed();
        }
    }


    private void removeFragment(){
        // remove the current fragment from the stack.
        mFragmentStack.pop();
        FragmentTransaction transaction = getFragmentManager().beginTransaction();
        // get fragment that is to be shown (in our case fragment1).
        Fragment fragment = getFragmentManager().findFragmentByTag(mFragmentStack.peek());
        // This time I set an animation with no fade in, so the user doesn't wait for the animation in back press
        transaction.setCustomAnimations(R.anim.fragment_animation_no_fade_in, R.anim.fragment_animation_fade_out);
        // We must use the show() method.
        transaction.show(fragment);
        transaction.commit();
    }
 
}