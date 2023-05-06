

export const useCount = ()=>{

    const count = ref(0);

    const addOne = ()=> count.value++;

    return {count, addOne}

}