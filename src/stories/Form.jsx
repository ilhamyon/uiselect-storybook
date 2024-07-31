/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Form = ({
  id,
  multiple = true,
  renderOption = true,
  withSearch = true,
  options = [],
  outlined = false,
  zIndex= 1000,
  optionLabel = 'Form',
}) => {
  const divRef = useRef(null)
  const dropdownRef = useRef(null);

  const [values, setValues] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [divHeight, setDivHeight] = useState(0)

  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef?.current?.offsetHeight);
    }
  }, [divRef.current?.offsetHeight]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !divRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDeleteValue = (id) => {
    setValues(prev => prev.filter(item => item.id !== id))
  }

  const handleSelectedValue = (value) => {
    if(!multiple) {
      setValues([value])
      setIsOpen(false)
      return;
    }
    setValues(prev => ([...prev, value]))
  }

  const dropdownContent = (
    <div 
      ref={dropdownRef}
      style={{'zIndex': zIndex, 'top': divHeight + 6}}
      className="absolute bg-white w-full left-0 rounded-md flex flex-col gap-4 shadow-lg"
    >
      {withSearch &&
        <InputSearch 
          onChange={e => setSearchText(e.target.value)}
          value={searchText}
          handleResetText={() => setSearchText('')}
          disabled={outlined}
        />
      }
      <Lists 
        data={options} 
        values={values} 
        searchText={searchText}
        renderOption={renderOption}
        outlined={outlined}
        handleSelected={handleSelectedValue}
        handleDeleteValue={handleDeleteValue}
      />
    </div>
  )

  return (
    <div className="flex w-full gap-20 items-center">
      <label htmlFor={id}>{optionLabel}</label>
      <div className='relative grow'>
        <div 
          ref={divRef}
          id={id}
          className={`relative py-2 h-12 px-2 border border-gray-300 rounded-lg w-full flex items-center 
            ${outlined 
              ? 'bg-gray-200 cursor-not-allowed' 
              : 'bg-white: cursor-pointer'
            }
          `}
          onClick={() => {
            if (!outlined) {
              setIsOpen(prev => !prev);
            }
          }}
        >
          <div className="flex items-center gap-2 flex-wrap">
          {
            values.map(value => 
              multiple ? 
              <Tag 
                key={value.id} 
                handleDelete={(e) => {
                  e.stopPropagation()
                  handleDeleteValue(value.id)
                }}
              >
                {value.label}
              </Tag> : value.label
              
            )
          }
          </div>
          <div className="absolute right-4 text-gray-400 text-sm">
            {isOpen 
              ? <FontAwesomeIcon icon={faChevronUp}/>
              : <FontAwesomeIcon icon={faChevronDown}/>
            }
          </div>
        </div>
        {isOpen && 
            dropdownContent
        }
      </div>
    </div>
  );
}


const Lists = ({data, values, searchText, renderOption, outlined, ...props}) => {

  const findValue = (text) => {
    return values.find(value => value.label === text)
  }

  const handleSelected = (value) => {
    if (findValue(value.label)) {
      props.handleDeleteValue(value.id);
    } else if (!outlined) {
      props.handleSelected(value);
    }
  };

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-green-300">{part}</span>
      ) : (
        part
      )
    );
  };

  const filterLists = (data, searchText) => {
    if (!searchText) {
      return data;
    }
    return data.filter(item => item.label?.toLowerCase().includes(searchText?.toLowerCase()));
  };

  const filteredLists = filterLists(data, searchText);

  if (!renderOption) {
    return <div className="px-4 py-2 text-gray-500 text-center">No Data</div>;
  }

  return (
    <ul className="">
      {filteredLists?.map(value => 
        <li  
          key={value.id} 
          className={`flex justify-between items-center px-4 py-2 hover:bg-green-50 cursor-pointer
            ${findValue(value.label) || outlined? 'bg-green-50 ' : ''}
          `}
          onClick={() => handleSelected(value)}
        >
          <div>
            {renderOption ? highlightText(value.label, searchText) : value.label}
          </div>
        </li>
      )}
    </ul>
  )
}

const Tag = ({children, handleDelete}) => {
  return (
    <div className="flex gap-2 items-center px-2 py-1 rounded-full bg-gray-100">
      <span>{children}</span>
      <button className="text-base text-gray-600" onClick={handleDelete}>
        <FontAwesomeIcon icon={faCircleXmark}/>
      </button>
    </div>
  )
}

const InputSearch = ({handleResetText, ...props}) => {
  
  return (
    <div className="relative px-12 py-[10px] border border-gray-300 rounded-t-md w-full">
      <div className="absolute left-4 text-gray-600">
        <FontAwesomeIcon icon={faSearch}/>
      </div>
      <input 
        className={`outline-none w-full  
          ${props.disabled ? 'cursor-not-allowed bg-white' : ''}
        `}
        type="text" 
        {...props}
      />
      
      {props.value.length > 0 &&
        <button 
          className="absolute right-6 text-gray-600"
          onClick={handleResetText}
        >
          <FontAwesomeIcon icon={faCircleXmark}/>
        </button>
      }
    </div>
  );
}


export default Form;