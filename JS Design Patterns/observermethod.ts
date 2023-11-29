interface Observer {
    update(): void;
  }
  
  class Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(): void {
      this.observers.forEach((observer) => observer.update());
    }
  }
  
  class Editor extends Subject {
    private content: string[] = [];
  
    insertLine(lineNumber: number, text: string): void {
      this.content.splice(lineNumber - 1, 0, text);
      this.notifyObservers();
    }
  
    removeLine(lineNumber: number): void {
      this.content.splice(lineNumber - 1, 1);
      this.notifyObservers();
    }
  
    getContent(): string[] {
      return this.content.slice();
    }
  }
  
  class TextEditor implements Observer {
    private editor: Editor;
  
    constructor(editor: Editor) {
      this.editor = editor;
      this.editor.addObserver(this);
    }
  
    update(): void {
      this.printContent();
    }
  
    insertLine(lineNumber: number, text: string): void {
      this.editor.insertLine(lineNumber, text);
    }
  
    removeLine(lineNumber: number): void {
      this.editor.removeLine(lineNumber);
    }
  
    saveToFile(): void {
      console.log("Conteúdo salvo no arquivo!");
    }
  
    private printContent(): void {
      console.log("Conteúdo do Editor:");
      this.editor.getContent().forEach((line, index) => {
        console.log(`${index + 1}: ${line}`);
      });
    }
  }
  
  const editor = new Editor();
  const textEditor = new TextEditor(editor);
  
  console.log("Digite linhas de texto. Digite 'EOF' para encerrar:");
  
  let lineNumber = 1;
  while (true) {
    const input = prompt(`Linha ${lineNumber}: `) || '';
    if (input.toUpperCase() === 'EOF') {
      break;
    }
    textEditor.insertLine(lineNumber, input);
    lineNumber++;
  }
  
  textEditor.saveToFile();
  