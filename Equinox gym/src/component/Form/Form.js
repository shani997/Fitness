import React, { useState } from 'react';
import { social } from '../Icon'
import {
    FormColumn,
    FormWrapper,
    FormInput,
    FormSection,
    FormRow,
    FormTitle,
    FormLabel,
    FormInputRow,
    FormMessage,
    FormText,
    SubText,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    Facebook,
    Twitter,
    Google,

} from './FormElements';
import { Container, Button } from '../../globalStyles';
import validateForm from './validateForm';

const Form = () => {
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const resultError = validateForm({ name, password });

        if (resultError !== null) {
            setError(resultError);
            return;
        }
        setName('');
        setpassword('');
        setError(null);
        setSuccess('Message was sent!');
    };

    const messageVariants = {
        hidden: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    };

    const formData = [
        { label: 'Username', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
        { label: 'Password', value: password, onChange: (e) => setpassword(e.target.value), type: 'password' },


    ];

    return (
        <FormSection>
            <Container>
                <FormRow>
                    <FormColumn>
                        <FormTitle>Log In</FormTitle>
                        <FormWrapper onSubmit={handleSubmit}>
                            {formData.map((el, index) => (
                                <FormInputRow key={index}>
                                    <FormLabel>{el.label}</FormLabel>
                                    <FormInput
                                        type={el.type}
                                        value={el.value}
                                        onChange={el.onChange}
                                    />
                                </FormInputRow>
                            ))}
                            <SubText>Forgot password</SubText>
                            <Button type="submit">Log In</Button>
                        </FormWrapper>
                        {error && (
                            <FormMessage
                                variants={messageVariants}
                                initial="hidden"
                                animate="animate"
                                error
                            >
                                {error}
                            </FormMessage>
                        )}
                        {success && (
                            <FormMessage
                                variants={messageVariants}
                                initial="hidden"
                                animate="animate"
                            >
                                {success}
                            </FormMessage>
                        )}
                        <FormText>Or login using</FormText>
                        <SocialMediaWrap>

                            <SocialIcons>
                                <SocialIconLink href='/' target="_Blank" area-label="Facebook">
                                    <Facebook src={social.Facebook} />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_Blank" area-label="Twitter">
                                    <Twitter src={social.Twitter} />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_Blank" area-label="Google">
                                    <Google src={social.Google} />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </FormColumn>
                </FormRow>
            </Container>
        </FormSection>
    );
};

export default Form;