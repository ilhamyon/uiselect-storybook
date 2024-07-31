import Dropdown from './stories/Form'
import './App.css'

function App() {
  
  return (
    <div className="max-w-2xl mx-auto py-12 px-10">
      <Dropdown 
        multiple={true}
        renderOption={true}
        withSearch={true}
        options={[
          { id: 1, label: 'Option 1' },
          { id: 2, label: 'Option with icon' },
          { id: 3, label: 'Long Long Option 3' },
          { id: 4, label: 'Long Long Long Option 4' },
          { id: 5, label: 'Long Long Long Long Option 5' },
          { id: 6, label: 'Long Long Long Long Long Option 6' },
        ]}
        outlined={false}
        optionLabel="Label"
        id="sdd-1"
      />
    </div>
  )
}

export default App
