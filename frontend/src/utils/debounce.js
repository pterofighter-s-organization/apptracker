

//the delay function of when an action is finished
//ex: after 250 secs of delay, we will do func {whatever you put} will be the args
//sets a time id, making sure whatever is in this function cannot be spammed, and setimeout is a queue which can be spam
export function debounce(func, delay) {

    //this is an object to fit the event target

    //example on how to use this function
    // window.onresize = debounce(() => {
    //     showCollapseApps = checkShowCollapseApps()
    //     setChange((change ? 0 : 1))
    // }, 250)

    let timeoutId
    return function (...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
}