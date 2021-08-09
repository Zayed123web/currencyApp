const currencyData = {
  API_KEY : '919a43c8b41482af2dee',
  async getCurrencyData(){
    try{
      const res = await fetch(`https://free.currconv.com/api/v7/countries?apiKey=919a43c8b41482af2dee`);
      const data = await res.json();
      return data;
    }catch (err){
      console.log(err.message);
    }
  }

}

const currencyUI = {
  loadSelectors(){
    const firstInput = document.getElementById('firstInput');
    const firstList = document.getElementById('firstList');
    const secondInput = document.getElementById('secondInput');
    const secondList = document.getElementById('secondList');

    return {
      firstInput,
      firstList,
      secondInput,
      secondList
    }
  },
  init(){
    const {firstInput, firstList, secondInput, secondList} = this.loadSelectors();

    firstInput.addEventListener('change', this.updateData);
    // firstList.addEventListener('change', this.updateData);
    secondInput.addEventListener('change', this.updateData);
    // secondList.addEventListener('change', this.updateData);
  },
  updateData(e){
    e.preventDefault();
    console.log(firstInput.value);
    const dataFet = currencyData.getCurrencyData();
    console.log(dataFet.results);
  }
  
}

currencyUI.init();