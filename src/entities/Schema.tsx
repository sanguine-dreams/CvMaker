import * as yup from "yup"; 

export const CVSchema = yup.object().shape({
name: yup.string().min(4).max(40),
email: yup.string().email(),
phone: yup.number(),
address: yup.string(),
work: yup.array().of(
    yup.object().shape({
        jobTitle: yup.string(),
        jobCity: yup.string(),
        employer: yup.string()
    })
),
edu: yup.array().of(
    yup.object().shape({
        eduCity: yup.string(),
        school: yup.string(),
        degree: yup.string(),
        time: yup.string(),
    })
),
skills: yup.array().of(yup.string()),
references: yup.array().of(
    yup.object().shape({
        reference: yup.string().min(4).max(40),
        contact: yup.number()
    })
)

})

  