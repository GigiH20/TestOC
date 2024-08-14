import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, Modal } from 'antd';
import { addUser } from './userSlice'; 
import { IUser } from '../../type/user.type'; 

const AddUserForm: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        dispatch(addUser(values as IUser));
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();

  return (
    <>
      <Button type="primary" onClick={() => setIsModalVisible(true)} style={{float: 'right'}}>
        Add User
      </Button>
      <Modal
        title="Add New User"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        cancelText="Cancel"
      >
        <Form
          form={form}
          layout="vertical"
          name="add_user_form"
        >
          <Form.Item
            name="userId"
            label="User ID"
            rules={[{ required: true, message: 'Please input the user ID!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="id"
            label="ID"
            rules={[{ required: true, message: 'Please input the ID!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="body"
            label="Body"
            rules={[{ required: true, message: 'Please input the body!' }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddUserForm;
