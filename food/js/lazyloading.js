/**
 * Created by dell001 on 2016/11/29.
 */
$(window)
$("img").lazyload({
    effect:"fadeIn",
    threshold:30,
    placeholder:"../images/loading.gif"
});