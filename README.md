# JsonForms

Apllication translates json input into simple dynamic form. The input must ahere to JsonInterface interface otherwise it will be ignored. Input can be dragged and dropped, selected by pressing `pick them from your device` or written into textarea.

To run the application:

    $ yarn install
      
    $ ng serve 

Example input file is in source folder called `input.json`

On submit the form value is printed in console.

The available types are:

    input, textarea, checkbox, radio, plaintext
    
They can be inseted into type filed inside of control. Based on them diffrent inputs are shown.

```
export interface JsonInterface {
  controls: Control[]
}

export interface Control {
  name: string
  label: string
  id: string
  value: string | boolean
  type: string
}
```

In interface Contol values must be 
  - `name` signifies forms identifier and must be unique otehrwise the form wont save subseqent files
  - `label` is the label that shows above input field
  - `id` is the id of input field
  - `value` is initial value in the input
  - `type` is the type, which is string and one of the following `input, textarea, checkbox, radio, plaintext`

example input:
```
{
"controls": [
    {
      "name": "input",
      "label": "Input:",
      "value": "text",
      "type": "text",
      "id":"text"
    },
]
}
```
