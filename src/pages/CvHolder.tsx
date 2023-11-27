

import {
  Formik,

  Form,

  FieldArray,
} from "formik";

import { Collapse } from "antd";
import { Button } from "antd/es/radio";
import Work from "../forms/Work";
import { Flex } from "antd";
import Edu from "../forms/Education";
import Skills from "../forms/Skills";
import References from "../forms/References";
import { MyFormValues} from "../entities/Entities";
import { CVSchema } from "../entities/Schema";
import Contact from "../forms/Contact";
import ModalPop from "../components/ModalPop";

function CV() {
  const initialValues: MyFormValues = {
    name: "",
    phone: null,
    email: '',
    work: [{ jobTitle: "", jobCity: "", employer: "" }],
    edu: [{ eduCity: "", degree: "", school: ""}],
    skills: [],
    references: [{reference: "", contact: ""}]
  };
  return (
    <>
      <h1>CV Maker</h1>

      <Formik
      validationSchema={CVSchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
        render={({ values }) => (
          <Form>
            <Flex gap="middle" vertical>
            <Contact />
              <Collapse
                size="large"
                items={[
                  {
                    key: "1",
                    label: "Work Experience",
                    children: (
                      <FieldArray
                        name="work"
                        render={(arrayHelpers) => (
                          <div>
                            {values.work.map((_, index) => (
                              <div key={index}>
                                <Work index={index} />
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  x
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add another Work Experience
                            </button>
                          </div>
                        )}
                      />
                    ),
                  },
                ]}
              />
              <Collapse
                size="large"
                items={[
                  {
                    key: "1",
                    label: "Education Experience",
                    children: (
                      <FieldArray
                        name="edu"
                        render={(arrayHelpers) => (
                          <div>
                            {values.edu.map((_, index) => (
                              <div key={index}>
                                <Edu index={index} />
                                <Button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  x
                                </Button>
                              </div>
                            ))}
                            <Button
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add another Education Experience
                            </Button>
                          </div>
                        )}
                      />
                    ),
                  },
                ]}
              />
               <Collapse
                size="large"
                items={[
                  {
                    key: "1",
                    label: "Skills",
                    children: (
                      <FieldArray
                        name="skills"
                        render={(arrayHelpers) => (
                          <div>
                            {values.skills.map((_, index) => (
                              <div key={index}>
                                <Skills index={index} />
                                <Button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  x
                                </Button>
                              </div>
                            ))}
                            <Button
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add another Skill
                            </Button>
                          </div>
                        )}
                      />
                    ),
                  },
                ]}
              />
              <Collapse
                size="large"
                items={[
                  {
                    key: "1",
                    label: "References",
                    children: (
                      <FieldArray
                        name="references"
                        render={(arrayHelpers) => (
                          <div>
                            {values.references.map((_, index) => (
                              <div  key={index}>
                                
                                <References index={index} />
                                <button 
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  x
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add Reference
                            </button>
                          </div>
                        )}
                      />
                    ),
                  },
                ]}
              />
            
            
               <ModalPop CvC = {values}/> 
            </Flex>
          </Form>
        )}
      />
    </>
  );
}

export default CV;
