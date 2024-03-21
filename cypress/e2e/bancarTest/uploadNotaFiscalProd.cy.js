import components from "../../support/elements/Components"

describe('bancar - uploadNotaFiscalProd', () => {

    beforeEach(() =>{
        cy.visit('/pages/uploadNotaFiscal')
        cy.login('daniel@wj.com', 'Bancar@2901')
    })


it('upload NFe : ', () => {

    const files = [

    ];

    function getMonthNumber(monthName) {
        const months = {
            'Jan': '01',
            'Fev': '02',
            'Mar': '03',
            'Abr': '04',
            'Mai': '05',
            'Jun': '06',
            'Jul': '07',
            'Ago': '08',
            'Set': '09',
            'Out': '10',
            'Nov': '11',
            'Dez': '12'
        };
    
        return months[monthName];
    }
    
    files.forEach((file) => {
        
        cy.get('#upload').invoke('show'); // Força a interação com o elemento mesmo que esteja oculto

        components.uploadFile(file, '#upload', { force: true });
        const matches = file.match(/(\d+)_Intermedio (\w+)-(\d+)_(\d+\.\d{2})\.pdf/);
    
        if (matches) {
            const cnpj = matches[1]; 
            const monthName = matches[2]; 
            const year = matches[3]; 
            const valor = matches[4]; // Valor agora está no índice 4
            const monthNumber = getMonthNumber(monthName);
            const dataEmissao = `01${monthNumber}${year}`;
    
            components.inputText('#cnpj', cnpj);
            components.inputText('#valor', valor);
            components.inputText('#numeroRPS', cnpj);
            components.inputText('#dataEmissao', dataEmissao);
            components.clickButton('.bg-button-primary');
            
            cy.wait(3000);
            
            components.verifySwalMessage('Nota Fiscal salva com sucesso!');
            components.clickButtonSwalConfirm();
        }
    }); 
});



})