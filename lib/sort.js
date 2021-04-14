'use strict';
exports.__esModule = true;
exports.sortHandler = void 0;
exports.sortHandler = {
    constructor: function () {
    },
    selection: function (shuffledList) {
        var _a;
        var swparr = new Array();
        var len = shuffledList.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = i + 1; j < len; j++) {
                if (shuffledList[i] > shuffledList[j]) {
                    _a = [shuffledList[j], shuffledList[i]], shuffledList[i] = _a[0], shuffledList[j] = _a[1];
                    swparr.push({ e1: "element" + i, e2: "element" + j });
                }
            }
        }
        return swparr;
    },
    bubble: function (shuffledList) {
        var _a;
        var swparr = new Array();
        var len = shuffledList.length;
        for (var i = 1; i <= len - 1; i++) {
            for (var j = 0; j < len - i; j++) {
                if (shuffledList[j] > shuffledList[j + 1]) {
                    _a = [shuffledList[j + 1], shuffledList[j]], shuffledList[j] = _a[0], shuffledList[j + 1] = _a[1];
                    swparr.push({ e1: "element" + j, e2: "element" + (j + 1) });
                }
            }
        }
        return swparr;
    },
    // 버블소트를 왔다갔다 하는 칵테일 소트
    cocktail: function (shuffledList) {
        var _a, _b;
        var swparr = new Array();
        var len = shuffledList.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = i; j < len - i - 1; j++) {
                if (shuffledList[j] > shuffledList[j + 1]) {
                    _a = [shuffledList[j + 1], shuffledList[j]], shuffledList[j] = _a[0], shuffledList[j + 1] = _a[1];
                    swparr.push({ e1: "element" + j, e2: "element" + (j + 1) });
                }
            }
            for (var k = len - i - 1; k > i; k--) {
                if (shuffledList[k] < shuffledList[k - 1]) {
                    _b = [shuffledList[k - 1], shuffledList[k]], shuffledList[k] = _b[0], shuffledList[k - 1] = _b[1];
                    swparr.push({ e1: "element" + k, e2: "element" + (k - 1) });
                }
            }
        }
        return swparr;
    },
    insertion: function (shuffledList) {
        var _a;
        var swparr = new Array();
        var len = shuffledList.length;
        for (var i = 1; i < len; i++) {
            for (var j = i; j > 0; j--) {
                if (shuffledList[j] < shuffledList[j - 1]) {
                    _a = [shuffledList[j - 1], shuffledList[j]], shuffledList[j] = _a[0], shuffledList[j - 1] = _a[1];
                    swparr.push({ e1: "element" + j, e2: "element" + (j - 1) });
                }
            }
        }
        return swparr;
    },
    // 퀵정렬
    // 1. 피봇을 맨 처음 인덱스값으로 설정 
    // 2. 왼쪽은 피봇보다 큰 값을 만나기 까지 돌려 
    // 3. 오른쪽은 피봇보다 작은 값을 만나기 까지 돌려
    // 4. 둘의 값 스왑
    // 5. left 와 right가 교차될 때 까지 루프
    // 6. 피봇과 right 스왑
    // 7. 이중분할로 1 ~ 6 재귀적으로 수행
    quick: function (shuffledList) {
        var swparr = new Array();
        function divide(shuffledList, start, end) {
            var _a, _b;
            var pivot = shuffledList[start];
            var left = start + 1;
            var right = end;
            while (left <= right) {
                while (shuffledList[left] < pivot)
                    left++;
                while (shuffledList[right] > pivot)
                    right--;
                if (left <= right) {
                    _a = [shuffledList[left], shuffledList[right]], shuffledList[right] = _a[0], shuffledList[left] = _a[1];
                    swparr.push({ e1: "element" + right, e2: "element" + left });
                }
            }
            if (start < end) {
                _b = [shuffledList[right], shuffledList[start]], shuffledList[start] = _b[0], shuffledList[right] = _b[1];
                swparr.push({ e1: "element" + start, e2: "element" + right });
                divide(shuffledList, start, right - 1);
                divide(shuffledList, right + 1, end);
            }
        }
        divide(shuffledList, 0, shuffledList.length - 1);
        return swparr;
    },
    // 힙정렬 알고리즘
    // 힙과 완전이진트리는 비슷하나 다르다. ~~ 
    // 힙은 왼쪽자식과 오른쪽 자식보다 크면 된다~
    // 완전이진트리는 왼자 < 부모 < 오자 순이다.
    // 순서
    // 1. 최대힙 구성 (len / 2 인덱스부터 자신의 자식노드들과 비교 더 큰 자식노드와 스왑)
    // 2. 트리의 보스와 말단놈 스왑
    // 3. 스왑된 새로운 트리로 1번 실행
    // 4. 2,3번 원소 갯수 - 1 만큼 반복
    heap: function (shuffledList) {
        var _a;
        var swparr = new Array();
        var len = shuffledList.length;
        function heapify(shuffledList, here, len) {
            var _a;
            var leftidx = here * 2 + 1;
            var rightidx = here * 2 + 2;
            var bigger = here;
            if (leftidx < len && shuffledList[bigger] < shuffledList[leftidx]) {
                bigger = leftidx;
            }
            if (rightidx < len && shuffledList[bigger] < shuffledList[rightidx]) {
                bigger = rightidx;
            }
            if (bigger != here) { // 더 큰 값을 찾았다면
                _a = [shuffledList[here], shuffledList[bigger]], shuffledList[bigger] = _a[0], shuffledList[here] = _a[1];
                swparr.push({ e1: "element" + bigger, e2: "element" + here });
                heapify(shuffledList, bigger, len);
            }
        }
        for (var i = Math.floor(len / 2); i >= 0; i--) {
            heapify(shuffledList, i, len);
        }
        for (var i = len - 1; i > 0; i--) {
            _a = [shuffledList[i], shuffledList[0]], shuffledList[0] = _a[0], shuffledList[i] = _a[1];
            swparr.push({ e1: "element" + 0, e2: "element" + i });
            heapify(shuffledList, 0, i);
        }
        return swparr;
    },
    // 병합정렬
    // 병합정렬 또한 기본적으로 분할정복 
    // 1. 사이즈가 1일 때 까지 배열을 쪼개준다.
    // 2. 쪼개진 것들을 차곡차곡 졍렬한다.
    // 3. 왼쪽으로 쪼개고 오른쪽으로 쪼갠 배열에서 각각 값을 비교 작은값을 임시 배열에 넣어준다.
    // 4. 어느 한쪽을 다 넣었다면 나머지 한쪽마저 다 넣는다. 
    merge: function (shuffledList, rainbow) {
        var swparr = new Array();
        var len = shuffledList.length;
        function merge(shuffledList, left, mid, right) {
            var tmp = Array();
            var leftidx = left;
            var rightidx = mid + 1;
            // 왼쪽 또는 오른쪽 한 인덱스가 끝점에 다다르면 break;
            while (leftidx <= mid && rightidx <= right) {
                var value = shuffledList[leftidx] < shuffledList[rightidx] ?
                    shuffledList[leftidx++] :
                    shuffledList[rightidx++];
                tmp.push(value);
            }
            if (leftidx <= mid) {
                for (var i = leftidx; i <= mid; i++)
                    tmp.push(shuffledList[i]);
            }
            else {
                for (var i = rightidx; i <= right; i++)
                    tmp.push(shuffledList[i]);
            }
            for (var i = left; i <= right; i++) {
                shuffledList[i] = tmp[i - left];
                swparr.push({
                    idx: i,
                    height: shuffledList[i],
                    color: rainbow[shuffledList[i] - 1]
                });
            }
        }
        function divide(shuffledList, left, right) {
            if (left < right) {
                var mid = Math.floor((left + right) / 2);
                divide(shuffledList, left, mid);
                divide(shuffledList, mid + 1, right);
                merge(shuffledList, left, mid, right);
            }
        }
        divide(shuffledList, 0, len - 1);
        return swparr;
    },
    // 기수정렬
    // 1. 1의 자리부터 차례대로 열개의 큐 배열에 담는다.
    // 2. 1 -> 10 -> 100의 자리 순서대로 큐의 담는다. 
    // 3. 각 자리수자보다 작은 수는 그냥 0에 담는다.
    // 4. 담은 큐배열은 처음 큐부터 pop해주면서 새로 배열을 담아준다.
    // 5. 최고 자리 숫자까지 반복
    radix: function (shuffledList, rainbow) {
        var swpradix = new Array();
        var queue = Array.from(Array(10), function () { return Array(); });
        var maxlength = 3;
        var _loop_1 = function (digit) {
            shuffledList.map(function (element, curidx, self) {
                var num = Math.floor(element / Math.pow(10, digit) % 10);
                queue[num].push(element);
            });
            var idx = 0;
            queue.map(function (array, arrayidx, selfarr) {
                while (array.length) {
                    shuffledList[idx++] = array.shift(); // undefined 대입할 수 있기 때문에 타입단언
                    swpradix.push({
                        idx: idx - 1,
                        height: shuffledList[idx - 1],
                        color: rainbow[shuffledList[idx - 1] - 1]
                    });
                }
            });
        };
        for (var digit = 0; digit < maxlength; digit++) {
            _loop_1(digit);
        }
        return swpradix;
    }
};
