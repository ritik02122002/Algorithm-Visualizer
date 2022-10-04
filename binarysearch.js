var timeoutlist = []
var s = []
var e = []

function start_binarysearch() {
    key = document.getElementById('key').value;
    if (key == "" || (!Number.isInteger(parseFloat(key))))
    window.alert("Please enter a valid element you want to search");
    else {
        console.log(key);
        key = parseInt(key);
        if(arrgen==false)
        window.alert("Please generate a new array first");
        if (arrgen == true && lock == false)
        visualize_binarySearch();
    }

}

function visualize_binarySearch() {
    timeoutlist = []
    s = []
    e = []
    lock=true;
    lockInput();
    timeout = 1000;
    binarySearch();
    start = 0;
    end = n - 1;
    info[start].innerHTML = "start";
    info[end].innerHTML = "end";
    for (let j = start; j <= end; j++) {
        arr[j].classList.add('inrange');
    }
    for (let i = 0; i < s.length; i++) {
        setTimeout(() => {
            for (let j = start; j <= end; j++) {
                arr[j].classList.remove('inrange');
            }
            info[end].innerHTML = "";
            info[start].innerHTML = "";
            start = s[i];
            end = e[i];
            if (start > end) {

                setTimeout(() => {
                    window.alert('Element not found!');
                }, 1000)
                    unlockInput();
                    lock=false;
                    arrgen=false;
            }
            else if (s[i] == e[i]) {
                info[s[i]].innerHTML = "start end";
                foundSound.play();
                setTimeout(() => {
                    arr[s[i]].classList.add('found');
                }, 300 - 100 * speed)
                unlockInput();
                lock=false;
                arrgen=false;
                setTimeout(() => {

                    window.alert("Element found at index " + s[i]);
                }, 500 - 100 * speed);
            }
            else {
                info[start].innerHTML = "start";
                info[end].innerHTML = "end";
                setTimeout(() => {
                    for (let j = start; j <= end; j++) {
                        arr[j].classList.add('inrange');
                    }
                }, 700 - 100 * speed)

                console.log("bhai");
            }

        }, timeout)
        timeout += (2000 - 200 * speed)
    }
}



function binarySearch() {
    start = 0, end = n - 1;
    while (start <= end) {
        console.log("hy");

        let mid = Math.floor((start + end) / 2);
        console.log("mid " + mid);
        console.log("start " + start);
        console.log("end " + end);
        if (parseInt(arr[mid].innerHTML) == key) {
            s.push(mid);
            e.push(mid);

            return mid;
        }
        else if (key < parseInt(arr[mid].innerHTML)) {
            end = mid - 1;

        }
        else
            start = mid + 1;
        if ((start != end) || (start == end && arr[start] == key)) {
            s.push(start);
            e.push(end);
        }
    }
    s.push(start);
    e.push(end);
    return -1;

}
