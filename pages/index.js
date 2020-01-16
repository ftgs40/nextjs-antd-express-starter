import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from 'antd'
import HomeComponent from '../components/Home'

const FormItem = Form.Item
const { Option } = Select

const data = {
  name: {
    first: 'first name',
    last: 'last name',
    middle: 'middle name',
  },
}

const indexPage = () => (
  <div style={{ marginTop: 100 }}>
    <div style={{ textAlign: 'center' }}>
      <h1 className="text-red">Test Text Red [.less]</h1>
      <HomeComponent />
      <div>
        <b>Optional Chaining -></b>
        {data.name?.testss}
      </div>
    </div>
    <Form layout="horizontal">
      <FormItem
        label="Input Number"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber
          size="large"
          min={1}
          max={10}
          style={{ width: 100 }}
          defaultValue={3}
          name="inputNumber"
        />
        <a href="javasctip:void(0)">Link</a>
      </FormItem>

      <FormItem label="Switch" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Switch defaultChecked name="switch" />
      </FormItem>

      <FormItem label="Slider" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Slider defaultValue={70} />
      </FormItem>

      <FormItem label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Select
          size="large"
          defaultValue="lucy"
          style={{ width: 192 }}
          name="select"
        >
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </FormItem>

      <FormItem
        label="DatePicker"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker name="startDate" />
      </FormItem>
      <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
        <Button size="large" type="primary" htmlType="submit">
          OK
        </Button>
        <Button size="large" style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </FormItem>
    </Form>
  </div>
)

export default indexPage
