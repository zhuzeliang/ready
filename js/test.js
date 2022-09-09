function myNew(fn){
    //创建新对象
    const obj = {};
    //新对象原型指针指向构造函数
    if(fn.prototype){
        obj.__proto__ = fn.prototype;
    }
    //this指向新对象
    const res = fn.apply(obj,[...arguments].slice(1));
    //返回新对象
    return res
}

function myCall(context){
    //对象内部函数指向本身this
    const symbol = Symbol()
    context[symbol] = this;
    //执行，参数
    const res = context.fn([...arguments].slice(1))
    delete context[symbol];
    //返回执行结果
    return  res

}


function myBind(context){
    const _this = this;
    const args = [...arguments].slice(1);
    return function Fn(){
        const args2 = [...args,...arguments]
        if(_this instanceof Fn){
            return new _this(...args2)
        }else{
            return _this.apply(context,args2)
        }
    }
}

function shuffle(arr){
    const result = [];
    while(arr.length > 0){
        const random = Math.floor(Math.random() * arr.length);
        result.push(arr[random]);
        arr.splice(random,1)
    }
    return result
}


function compose(...funs){
    if(funs.length === 0){
        return ()=>{}
    }
    if(funs.length === 1){
        return funs[0]
    }
    return funs.reduce((a,b)=>(...args)=>a(b(...args)))
}


function curring(fn){
    const args = [...arguments].slice(1);
    return function(){
        const args2 = [...args,...arguments];
        return  fn.length >= args ? fn.apply(this,args2) : fn.bind(this,...args2)
    }
}


function twoSum(arr,target){
    const map = new Map()

    for(let i =0;i<arr.length;i++){
       if(map.has(target-arr[i])){
        return [map.get(target-arr[i]),i]
       }
       map.set(arr[i]) = i
    }

    return []
}

//promise


function jieyushui(arr){
    let left = 0,right = arr.length - 1;
    let leftMax = 0, rightMax = 0,sum = 0
    while(left < right){
        leftMax = Math.max(leftMax,arr[left]);
        rightMax = Math.max(rightMax,arr[right]);
        if(leftMax > arr[left]){
            sum+= leftMax - arr[left];
            left++
        }else{
            sum+= rightMax - arr[right]
            right--
        }
    }
    return res;
};


function merge(sum1,m,sum2,n){
    if(n === 0){
        return sum1
    }
    if(sum1.length){
        sum1.splice(m,n,...sum2);
        return sum1.sort((a,b)=>a-b)
    }
    return sum2

}


function longRepeatStr(str){
    let res = 0, temp = [];
    for(let i = 0; i < str.length; i++){
        if(temp.indexOf(str[i]) === -1){
            temp.push(str[i]);
        } else {
            temp.shift();
            i--;
            continue;
        };
        res = Math.max(res,temp.length)
    }
    return res
}



function compose(fns){
    if(fns.length === 0){
        return ()=>{}
    }
    if(fns.length === 1){
        return fns[0]
    }
    return fns.reduce((a,b)=>(...args)=>a(b(...args)))
}


function longPreStr(arrs){
    let arrs1 = arrs[0];
    if(arrs.length===0) {
        return arrs1;
    }
    for(let i = 1; i < arrs.length; i++){
        while(arrs[i].slice(0,arrs1.length) !==arrs1){
            arrs1.slice(0,arrs1.length-1)
        }
        return arrs1;
    }
}


function reverseList(head){
    if(head.next === null){
        return head;
    }

    let p1 = null;
    let p2 = head;
    while(p2){
        let next = p2.next;
        p1 = p2;
        p2 = next;
    }
    return p1;
}

function rotateList(head,k){
    if(!head || (head && !head.next)){
        return head
    };
    let n = 0;
    let current = head;
    while(++n && head.next){
        head = head.next
    };

    k = k % n;

    while(k--){
        current = head;
        if(current.next.next){
            current = current.next;
        };
        current.next.next = head;
        head = current.next;
        current.next = null;
    }
    return head
}


class Promise{
    constructor(excutor){
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;

        this.onResolveCbs = [];
        this.onRejectCbs = [];

        let resolve = value=>{
            if(this.state = 'pending'){
                this.state = 'fulfilled';
                this.value = value;
            }

            this.onResolveCbs.forEach(fn=>fn())
        }

        let reject = value=>{
            if(this.state = 'pending'){
                this.state = 'rejected';
                this.reason = this.reason;
            }

            this.onRejectCbs.forEach(fn=>fn())
        }

        try {
            excutor(resolve,reject)
        } catch (error) {
            throw error
        }
    }

    then(onFulfilled,onRejected){
        if(this.state === 'fulfilled'){
            onFulfilled(this.value)
        }
        if(this.state === 'rejected'){
            onRejected(this.reason)
        }

        if(this.state === 'pending'){
            this.onResolveCbs.push(()=>{
                onFulfilled(this.value)
            })
            this.onRejectCbs.push(()=>{
                onRejected(this.value)
            })
        }
    }


}