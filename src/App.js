import './App.css';
import Block from './Block';
import FadeIn from 'react-fade-in';



var entries = [
  { "name": "\"John Currado\"" },
  { "email": "\"jjcurrado@gmail.com\"" },
  { "phone": "\"3154809991\"" },
  {"education": <Block  content={
    [
      {
        "Rochester Institue of Technology": <Block content={
          [
            { "degree": "\"Bachelor's of Science\"" },
            { "major": "\"Computation Mathematics\"" },
            { "minor": "\"Computer Science\"" },
            { "immersion" : "\"German\""}
          ]
        } />
      },
      {
        "Onondaga Community College": <Block content={
          [
            { "degree": "\"Associates's of Science\"" },
            { "major": "\"Computer Science\"" }
          ]
        }/>
      }

    ]
    }/>
  },
  {
    "experience": <Block content={
      [
        {
          "icitizen": <Block content={
            [
              {"start_date": "\"05-2019\""},
              {"end_date": "\"01-2022\""},
              {
                "description": <div className='text-block'>"icitizen is a political discussion website that implements user
                  polling to collect opinions. My work for icitizen was mostly pertaining to the Alexa
                  skill for the website (found <a className="link" href="https://www.amazon.com/icitizen/dp/B08R6R5P9K">here</a>).
                  The company also had a side project that I worked on creating Alexa skills for municipalities to communicate
                  alerts and community events.I also did a limited amount of work on the frontend for the website itself."
                </div>
              },
              {"skills": <Block type="array" content={["python", "React", "javascript", "AWS Lambda", "MongoDB", "dynamoDB", "Alexa Skills Kit", ]}/>}
            ]
        }/>
        },
        {
          "Camp Walden": <Block content={
            [
              {"start_date": "\"06-2014\""},
              {"end_date": "\"07-2015\""},
              {
                "description": <div className='text-block'>"Camp Walden is a sleepaway camp for children up to the age of 15. I spent two 
                  summers there as a bunk counselor. As a bunk counselor I was responsible for a group of roughly a dozen teenagers,
                  bringing them to activities, resolving conflicts, and ensuring everyone was enjoying their time at the camp."
                </div>
              },
              {"skills": <Block type="array" content={["team communication", "conflict resolution"]}/>}
            ]
        }/>
        },
        {
          "Design and Build by Mark Frateschi": <Block content={
            [
              {"start_date": "\"06-2017\""},
              {"end_date": "\"04-2018\""},
              {
                "description": <div className='text-block'>
                  "Mark Frateschi is a general contractor who's skills cover everything from woodworking to electrical to plumbing. Working one
                  on one with Mark taught me the value of hard work, since every bit of effort could easily
                  be seen in the finished product. This job also strongly devloped my ability to create a plan and execute it - dealing
                  with any hiccups along the way - in order to create exactly what the customer wanted and expected." 
                </div>
              },
              {"skills": <Block type="array" content={["planning", "hard work", "wood working", "electrical"]}/>}
            ]
        }/>
        },
        {
          "various restaurants": <Block content={
            [
              {"start_date": "\"06-2017\""},
              {"end_date": "\"04-2018\""},
              {
                "description": <div className='text-block'>
                   I have been working in various restaurants throughout my entire adult life, as restaurant jobs are easy
                   to come by and are very flexible. This was great for me being a student as I could go to class in the day
                  and work nights. While cooking skills aren't the most applicable skills in many other jobs, I learned a lot 
                  about working in fast pace environments, with a team of coworkers. This is another job that strongly devloped
                  my communication skills, and my tolerance of high-stress environments. 
                </div>
              },
              {"skills": <Block type="array" content={["communication", "team work", "", "stress management"]}/>}
            ]
        }/>
        }
      ]
    } />
  }
]
function App() {
  return (
    <div className='App' >
      <Block size={"fullscreen"} content={entries} /> 
    </div>
  );
}

export default App;
