import React from 'react'

export default function About(props) {
  return (
                    <div class="accordion container" style={{color: props.mode==='dark'?'white':'black'}} id="accordionExample">
                        <h1 style={{color: props.mode==='dark'?'white':'black'}}>About</h1>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" style={{ backgroundColor: props.mode==='dark'?'#212529':'' , color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong> Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={{ backgroundColor: props.mode==='dark'?'#212529':'' , color: props.mode==='dark'?'white':'black'}}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={{ backgroundColor: props.mode==='dark'?'#212529':'' , color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong> Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={{ backgroundColor: props.mode==='dark'?'#212529':'' , color: props.mode==='dark'?'white':'black'}}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={{ backgroundColor: props.mode==='dark'?'#212529':'' , color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong> Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={{ backgroundColor: props.mode==='dark'?'#212529':'' , color: props.mode==='dark'?'white':'black'}}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    
                    </div>
                    </div>
                </div>
                </div>
  )
}
