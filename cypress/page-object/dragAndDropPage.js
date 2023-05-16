const dragA = '#column-a'
const dragB = '#column-b'
const draggedElementCheck = '#column-a > header'

class DragAndDropPage{
    dragElementA(){
        const dataTransfer = new DataTransfer
        cy.get(dragA).trigger('dragstart', {
            dataTransfer
        })
        cy.get(dragB).trigger('drop', {
            dataTransfer
        })
        cy.get(draggedElementCheck).contains('B')
    }
    dragElementB(){
        const dataTransfer = new DataTransfer
        cy.get(dragB).trigger('dragstart', {
            dataTransfer
        })
        cy.get(dragA).trigger('drop', {
            dataTransfer
        })
        cy.get(draggedElementCheck).contains('A')
    }
}

export default DragAndDropPage;