export const PERSONAL_FORM = 'PERSONAL_FORM';
export const PROFESSIONAL_FORM = 'PROFESSIONAL_FORM';

export const addPersonalForm = (personalForm) => ({
  type: PERSONAL_FORM,
  payload: { ...personalForm },
});

export const addProfessionalForm = (professionalForm) => ({
  type: PROFESSIONAL_FORM,
  payload: { ...professionalForm },
});
