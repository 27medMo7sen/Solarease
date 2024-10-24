import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

Joi.objectId = JoiObjectId(Joi);

export const createPartnerRequestSchema = Joi.object({
  company_name: Joi.string().min(3).required().messages({
    'string.base': 'Company name should be a type of text',
    'string.empty': 'Company name cannot be an empty field',
    'string.min': 'Company name should have a minimum length of 3 characters',
    'any.required': 'Company name is a required field'
  }),
  contact_person: Joi.string().min(3).required().messages({
    'string.base': 'Contact person should be a type of text',
    'string.empty': 'Contact person cannot be an empty field',
    'string.min': 'Contact person should have a minimum length of 3 characters',
    'any.required': 'Contact person is a required field'
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a type of text',
    'string.empty': 'Email cannot be an empty field',
    'string.email': 'Email should be a valid email address',
    'any.required': 'Email is a required field'
  }),
  phone_number: Joi.string().pattern(/^[0-9]{10,15}$/).required().messages({
    'string.base': 'Phone number should be a type of text',
    'string.empty': 'Phone number cannot be an empty field',
    'string.pattern.base': 'Phone number should be a valid phone number with 10 to 15 digits',
    'any.required': 'Phone number is a required field'
  }),
  website: Joi.string().uri().optional().allow(null).messages({
    'string.base': 'Website should be a type of text',
    'string.uri': 'Website should be a valid URL'
  }),
  address: Joi.string().optional().allow(null).messages({
    'string.base': 'Address should be a type of text'
  }),
  notes: Joi.string().optional().allow(null).messages({
    'string.base': 'Notes should be a type of text'
  }),
});

export const updatePartnerRequestSchema = Joi.object({
  company_name: Joi.string().min(3).messages({
    'string.base': 'Company name should be a type of text',
    'string.empty': 'Company name cannot be an empty field',
    'string.min': 'Company name should have a minimum length of 3 characters'
  }),
  contact_person: Joi.string().min(3).messages({
    'string.base': 'Contact person should be a type of text',
    'string.empty': 'Contact person cannot be an empty field',
    'string.min': 'Contact person should have a minimum length of 3 characters'
  }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be a type of text',
    'string.empty': 'Email cannot be an empty field',
    'string.email': 'Email should be a valid email address'
  }),
  phone_number: Joi.string().pattern(/^[0-9]{10,15}$/).messages({
    'string.base': 'Phone number should be a type of text',
    'string.empty': 'Phone number cannot be an empty field',
    'string.pattern.base': 'Phone number should be a valid phone number with 10 to 15 digits'
  }),
  website: Joi.string().uri().optional().allow(null).messages({
    'string.base': 'Website should be a type of text',
    'string.uri': 'Website should be a valid URL'
  }),
  address: Joi.string().optional().allow(null).messages({
    'string.base': 'Address should be a type of text'
  }),
  notes: Joi.string().optional().allow(null).messages({
    'string.base': 'Notes should be a type of text'
  }),
});